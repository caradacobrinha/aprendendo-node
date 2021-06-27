const Database = require('../db/config')

module.exports = {
    async create(req, res){
        
        const db = await Database()
        const psswd = req.body.password

        let roomId
        let isroom = true
        
        while(isroom){

            //gerar o numero da sala
            for(var i = 0; i < 6; i++)  // inicialmente, i=0; enquanto i < 6; somar 1 numero random() ao i
            
                i == 0 ? roomId = Math.floor(Math.random() * 10) : roomId += Math.floor(Math.random() * 10).toString() //se i for igual a zero entao (?) se nao (:)



            //verificação de numero de sala repetida
            const roomsExistIds = await db.all(`SELECT id FROM rooms`) //atenção ao db.all (função que busca os registros)
            let isroom = roomsExistIds.some(roomsExistId => roomsExistId === roomId)



            if(! isroom){ //se o código gerado nao existir

                //inserir o registro da sala no banco de dados
                await db.run(`INSERT INTO rooms (id, psswd) VALUES ("${roomId.toString()}", "${psswd}")`)
                
                db.close()
                res.redirect(`/room/${roomId}`)

            }

        }
        

        
    },

    async open(req, res){
        const db = await Database()
        const roomId = req.params.room
        
        const questions = await db.all(`SELECT * FROM questions WHERE sala = "${roomId}" AND read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE sala = "${roomId}" AND read = 1`)
        
        let isQuestions = true

        if(questions.length == 0){
            if(questionsRead.length == 0){
                isQuestions = false
            }
        }

        res.render('room', {roomId : roomId, questions : questions, questionsRead : questionsRead, isQuestions : isQuestions}) // passando a variavel roomId pro html 
    },

    enter(req, res){
        const roomId = req.body.roomId

        res.redirect(`/room/${roomId}`)
    }

 
}