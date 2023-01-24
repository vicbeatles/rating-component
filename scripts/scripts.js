const form = document.getElementsByName('answers');
const submitBtn = document.getElementById('sub-btn');
let cont = document.getElementById('container');

let selected = 0;

form.forEach(element => {
    element.addEventListener('click', () => {
        if(element.classList.contains('active-score')){ 
            /* SI ESTA SELECCIONADO, LE QUITA LA SELECCION */ 
            element.classList.remove('active-score'); 
            selected = 0;  

        }
        else{
            /* BUSCA ELEMENTOS SELECCIONADOS Y LOS ELIMINA ANTES DE SELECCIONAR OTRO */
            let activeElements = Array.from(form).filter(element => element.classList.contains('active-score'));
            activeElements.forEach(element => element.classList.remove('active-score'));


            /*SI NO ESTABA SELECCIONADO, LO SELECCIONA*/
            element.classList.add('active-score');
            selected = element.value;
    
        }
        
    })
});

submitBtn.addEventListener('click', () => {

    let fragment = document.createDocumentFragment();
    let fragText = document.createElement('div');


    if(!selected == 0) {
        /*REMUEVE LA ULTIMA ADVERTENCIA SI EXISTE */
        if(document.getElementById('selection')) cont.removeChild(cont.lastChild);

        let toHide = Array.from(document.getElementsByClassName('score-selection'));
        toHide.forEach(element => element.classList.add('dis-none'));


        let toShow = Array.from(document.getElementsByClassName('score-return'));

        let toScore = document.getElementById('return-value');
        toScore.textContent = `You selected ${selected} out of 5`;

        toShow.forEach(element => element.classList.remove('dis-none'));
          
    }
    else {
        /*REMUEVE LA ULTIMA ADVERTENCIA SI EXISTE */
        if(document.getElementById('selection')) cont.removeChild(cont.lastChild);
           
        fragText.textContent = "You haven't selected an option";
        fragText.setAttribute('id', 'selection');
        fragText.setAttribute('style', 'color: red;');
        fragment.appendChild(fragText);
        cont.appendChild(fragment);
        
    }

    
})
