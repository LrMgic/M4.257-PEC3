document.querySelectorAll(".amplia img").forEach(el=>{
    el.addEventListener("click",function(ev){
        ev.stopPropagation();
        this.parentNode.classList.add("accion");
    })
});

document.querySelectorAll(".amplia").forEach(el=>{
    el.addEventListener("click",function(ev){
        this.classList.remove("accion");
    })
});
