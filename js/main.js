
const menuItems =  document.querySelectorAll('.menu-item');

menuItems.forEach(function(item){
    item.addEventListener('click',function(e){
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    });
});

function descargar() {
    alert("El archivo ha sido descargado.");
  }



var fecha=new Date();  
var anio=" - "+fecha.getUTCFullYear();  
document.getElementById('fecha').innerHTML=anio; 




