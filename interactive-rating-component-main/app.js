
const selection = document.querySelectorAll('h4');

const uno = document.getElementById('uno');
const dos = document.querySelector('#dos');
const tres = document.querySelector('#tres');
const cuatro = document.querySelector('#cuatro');
const cinco = document.querySelector('#cinco');

const option = document.querySelector('#option');

const button = document.querySelector('button');

const frontFace = document.querySelector('.front')
const backFace = document.querySelector('.back')


backFace.classList.add('back-face')

selection.forEach(item => {
    item.addEventListener('click', () => {
        if(item === uno){
            option.innerHTML = 1;
        }
        if(item === dos){
            option.innerHTML = 2;
        }
        if(item === tres){
            option.innerHTML = 3;
        }
        if(item === cuatro){
            option.innerHTML = 4;
        }
        if(item === cinco){
            option.innerHTML = 5;
        }
    })
});

button.addEventListener('click', () => {
    frontFace.classList.add('front-face')
    backFace.classList.remove('back-face')
})


    























//---------------------------------------------------------------------------------

/*const all = document.querySelectorAll('h4')

var primero = 0;
var x = 0;

var value = (valor) => {
    //console.log(valor);
    return valor
}

console.log(value.value);





const uno = document.getElementById('uno');
const dos = document.querySelector('#dos');
const tres = document.querySelector('#tres');
const cuatro = document.querySelector('#cuatro');
const cinco = document.querySelector('#cinco');



    /*all.forEach(element => {
        element.addEventListener('click', () => {
            if (element === uno) {
                primero = 1
                //console.log(primero);  
            }else if (element === dos) {
                primero = 2
                //console.log(primero);   
            }else if (element === tres) {
                primero = 3
                //console.log(primero);   
            }else if (element === cuatro) {
                primero = 4
                //console.log(primero);   
            }else if (element === cinco) {
                primero = 5
                //console.log(primero);   
            }
        })
    });



    
    all.forEach(element => {
        element.addEventListener('click', () => {
        if (element === uno) {
            value(1)
            //console.log(primero);   
        }else if (element === dos) {
            value(2)
            //console.log(primero);   
        }else if (element === tres) {
            value(3)
            //console.log(primero);   
        }else if (element === cuatro) {
            value(4)
            //console.log(primero);   
        }else if (element === cinco) {
            value(5)
            //console.log(primero);   
        }
    })
});



console.log( primero);

 
*/