let links=document.querySelectorAll(".close");
//recorrerlos
links.forEach(function(link){
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content=document.querySelector('.content');

        content.classList.remove("animate__slideInDown");
        content.classList.remove("animate__animated");

        content.classList.add("animate__slideOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href="/boletines";//para que redireccione a la pagina principal cuando este subido el proyeto, localmente solo poner /
        },600);

    return false;

    });
});