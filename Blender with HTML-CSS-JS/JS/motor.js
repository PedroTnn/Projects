let estado = "apagado";
let licuadora = document.getElementById("blender");
let encendido = document.getElementById("encendido");
let button = document.getElementById("encendido")
const controlar =() =>{
    if(estado === "apagado"){
        estado = "encendido";
        licuar();
        licuadora.classList.add("active");
        console.log("Me prendiste");
        
    }else{
        estado = "apagado";
        licuar();
        licuadora.classList.remove("active");
        console.log("Me apagaste");
        
   }
}

const licuar =()=>{
if (encendido.paused){
    button.play();
    encendido.play();
}else{
   button.play();
    encendido.pause();
    encendido.currentTime = 0;
}

}