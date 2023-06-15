let menu = document.getElementById("menu");
let hamburger = document.getElementById("hamburger");
 /* 
function chose(){
    hamburger.src ="images/icon-close.svg";
    openmenu();
    hamburger.removeAttribute("id","hamburger");
    hamburger.setAttribute("id","close");
    hamburger.setAttribute("onclick","closemenu()") ;


    
     let menuClose =document.getElementById("close");
    menuClose.addEventListener("click", ()=>{
        menuClose.src ="images/icon-hamburger.svg";
        menuClose.removeAttribute("id","close");
        menuClose.setAttribute("id","hamburger");
        closemenu();
        
    }) 
}
 */
hamburger.addEventListener("click",(e)=>{
    
       

    if(e.target===hamburger) {
        openmenu();
        hamburger.src ="images/icon-close.svg" ;
        hamburger.removeAttribute("id", "hamburger");
        hamburger.setAttribute("id","cross")
        let cross = document.getElementById("cross");
             console.log(cross)
    }

    

    else{
        closemenu();
        cross.src="images/icon-hamburger.svg" ;
        cross.removeAttribute("id","cross");
        cross.setAttribute("id" , "hamburger");

    }


}) 

function closemenu(){
    menu.style.top = "-100vh" ;
    /* hamburger.src="images/icon-hamburger.svg";
    hamburger.setAttributeAttribute("id","hamburger");
    hamburger.removeAttributeAttribute("id","close");
    hamburger.setAttribute("onclick","chose()") ; */
}

function openmenu() {
    menu.style.top = "5vh"
}
