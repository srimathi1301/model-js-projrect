'use script';
const btnShowModel=document.getElementById('btn-show');

const btnCloseModel=document.getElementById('btn-close');
const modelContainer=document.getElementById('model-container');
const overlayContainer=document.getElementById('overlay');

btnShowModel.addEventListener('click',function (){
modelContainer.classList.add('show');
overlayContainer.classList.add('show');
});
btnCloseModel.addEventListener('click',function (){
modelContainer.classList.remove('show');
overlayContainer.classList.remove('show');
});

overlayContainer.addEventListener('click',function (){
modelContainer.classList.remove('show');
overlayContainer.classList.remove('show');
});

document.addEventListener('keydown',function (e) {
    if(e.key === 'Escape')
    {
        modelContainer.classList.remove('show');
        overlayContainer.classList.remove('show');  
    }
});
setTimeout(function () {
    modelContainer.classList.add('show');
    overlayContainer.classList.add('show');
    
},2000);
