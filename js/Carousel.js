var imagenes = ['../assets/img/Carousel/friends.jpg'],
    contador=0;

function carrousel(contenedor){
    contenedor.addEventListener('click',e=>{
        let izquierda=contenedor.querySelector('.izquierda'),
        derecha=contenedor.querySelector('.derecha'),
        img=contenedor.querySelector('img'),
        tgt=e.target;
        if(tgt==izquierda){
            if(contador>0){
                img.src=imagenes[contador-1];
                contador--;
            }else{
                img.src=imagenes[imagenes.length-1];
                contador=imagenes.length-1;
            }
        }else if(tgt==derecha){
            if(contador<imagenes.length - 1){
                img.src=imagenes[contador+1];
                contador++;
            }else{
                img.src=imagenes[0];
                contador=0;
            }
        }
    });  
}
document.addEventListener("DOMContentLoaded",()=>{
    let contenedor=document.querySelector('.contenedor');
    carrousel(contenedor);
});
