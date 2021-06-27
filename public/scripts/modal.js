export default function Modal(){

    const cancelButton = document.querySelector('.button.grey.cancel')
    cancelButton.addEventListener('click', close)

    const modalWrapper = document.querySelector('.modal-wrapper')

    function open(){
        //funcionalidade de atribuir a classe active da modal
        //console.log('abriu')
        modalWrapper.classList.add('active') //selecinar a classe modal-wrapper e adicionar a classe active
    }

    function close(){
        //remover a classe active da modal
        console.log('função fechada')
        modalWrapper.classList.remove('active')
    }

    return {open, close
    }
}