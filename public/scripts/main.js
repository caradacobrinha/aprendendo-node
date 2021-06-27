import Modal from './modal.js'

const modal = Modal();

//mapear os elementos da modal
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar os botões delete (class delete)
const deleteButtons = document.querySelectorAll('.actions a.delete') //vai procurar no HTML todas as tag A com a classe delete
deleteButtons.forEach(botao => { //para cada botão:
    //add o event listner
    botao.addEventListener("click", event => { //quando receber o click, executar o modal.open()  o event ta ali só pra servir de parametro, mas nao vamos utlizá-lo
        alterarModal('delete', event)
        modal.open()
    })

})

//pegar os botões marcar como lido (class check)
const checkButtons = document.querySelectorAll('.actions a.check') //vai procurar no HTML todas as tag A com a classe Check
checkButtons.forEach(botao => { //para cada botão:
    //add o event listner
    botao.addEventListener("click", event => { //quando receber o click, executar o modal.open()  o event ta ali só pra servir de parametro, mas nao vamos utlizá-lo
        alterarModal('check', event)
        modal.open()
    })

})

// const labelDarkMode = document.querySelector('swith-darkmode')
// labelDarkMode.addEventListener('change', event => {
//     if 
// })

function alterarModal (parametro, event){
    event.preventDefault()

    const roomID = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector('.modal form')
    form.setAttribute('action', `/question/${roomID}/${questionId}/${parametro}`) // vai setar o atributo action de acordo com as variaveis recebidas 
   

    if(parametro == 'delete'){
        modalTitle.innerHTML = 'Excluir pergunta'
        modalDescription.innerHTML = 'Tem certeza que você deseja excluir essa pergunta?'
        modalButton.classList.add('red')
        modalButton.innerHTML = 'Sim, excluir'
    }
    else if(parametro == 'check'){
        modalTitle.innerHTML = 'Marcar como lida'
        modalDescription.innerHTML = 'Deseja marcar essa pergunta como lida?'
        modalButton.classList.remove('red')
        modalButton.innerHTML = 'Sim, marcar como lida'
    }
}