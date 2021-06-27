const Database = require('../db/config')

module.exports = {  

    async index(req, res){  //funcao principal pro route importar
        const db = await Database()
        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action
        const password = req.body.password // esse password é o name do formulario da modal, nao id ou classe

        //veririficar se a senha está correta
        const verify_psswd = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)
        if(verify_psswd.psswd == password){
            if(action == 'check'){

                await await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)

            }
            else if(action == 'delete'){

                await await db.run(`DELETE FROM questions WHERE id = ${questionId}`)

            }   

            res.redirect(`/room/${roomId}`)
        
        }   

        else{
            res.render('passincorrect', {roomId : roomId})
        }

        
    },

    async create(req, res){

        const db = await Database()

        const question = req.body.question
        const roomId = req.params.room


        if(!question){

        //console.log('Pergunta vazia')

        res.render('nonequestion', {roomId : roomId})
        }


        await db.run(`INSERT INTO questions (titulo, sala, read) VALUES ("${question}", "${roomId}", 0)`)
        
        res.redirect(`/room/${roomId}`)

        // if(question){

        // }
    }

    

}