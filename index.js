const btnhamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu")
btnhamburger.addEventListener("click",function(){
    if(menu.classList.contains("openmenu")){
        menu.classList.remove("openmenu");
        btnhamburger.src ="images/icon-hamburger.svg";

    }
    else{
        menu.classList.add("openmenu");
        btnhamburger.src="images/icon-close.svg";
    }
})