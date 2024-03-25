var SavePassword = document.querySelector('#SalvarSenha')
var CheckBox = document.querySelector('#checkbox')
var ImgCheck = document.querySelector('#ImgCheck')

function SaveAnimation(){
    ImgCheck.style.display = 'block'
    CheckBox.style.border = '1px solid aqua'
    SavePassword.removeEventListener('click', SaveAnimation)
    SavePassword.addEventListener('click', ReverseSave)
    function ReverseSave(){
        SavePassword.addEventListener('click', SaveAnimation)
        ImgCheck.removeAttribute('style')
        CheckBox.removeAttribute('style')
    }
}
SavePassword.addEventListener('click', SaveAnimation)