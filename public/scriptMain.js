var AbaMenu = document.querySelector(".menu_main")
var bttMenu = document.querySelector("#bttMenu")
var barra1 = document.querySelector("#barra1")
var barra2 = document.querySelector("#barra2")
var barra3 = document.querySelector("#barra3")

//funções menu
function OpenMenu(){
    AbaMenu.style.top = "80px"

    bttMenu.classList.toggle("bttMenu1")
    bttMenu.classList.toggle("bttMenu2")

    barra1.classList.toggle("barra11")
    barra1.classList.toggle("barra12")
    barra2.classList.toggle("barra21")
    barra2.classList.toggle("barra22")
    barra3.classList.toggle("barra31")
    barra3.classList.toggle("barra32")

    bttMenu.removeEventListener("click", OpenMenu)
    bttMenu.addEventListener("click", CloseMenu)
    function CloseMenu(){
        AbaMenu.style.top = "0px"

        bttMenu.classList.toggle("bttMenu1")
        bttMenu.classList.toggle("bttMenu2")

        barra1.classList.toggle("barra11")
        barra1.classList.toggle("barra12")
        barra2.classList.toggle("barra21")
        barra2.classList.toggle("barra22")
        barra3.classList.toggle("barra31")
        barra3.classList.toggle("barra32")

        bttMenu.removeEventListener("click", CloseMenu)
        bttMenu.addEventListener("click", OpenMenu)
    }
}
bttMenu.addEventListener("click", OpenMenu)