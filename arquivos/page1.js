var ok = document.querySelector('#abaPesquisa')
var okpesquisa = document.querySelector('#okpesquisa')
var pesquisa = document.querySelector('#pesquisa')

function AbrirBarra(){
    ok.style.display = 'flex'
    ok.style.flexDirection = 'row'
    ok.style.justifyContent = 'end'
    ok.style.width = '300px'
    ok.style.backgroundColor = 'white'
    ok.style.transition = '1s'
    pesquisa.style.display = 'block'
    okpesquisa.removeEventListener('click', AbrirBarra)
    function FecharBarra(){
        ok.style.width = '46px'
        ok.style.backgroundColor = 'transparent'
        pesquisa.style.display = 'none'
        ok.style.transition = '0.3s'
        okpesquisa.addEventListener('click', AbrirBarra)
    }
    okpesquisa.addEventListener('click', FecharBarra)

}
okpesquisa.addEventListener('click', AbrirBarra)
