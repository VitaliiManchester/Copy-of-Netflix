// let SignIn = document.querySelector('.sign__in__btn'),
//     modal = document.querySelector('.receive__sign__in'),
//     closeBtn = document.querySelector('#close');
    

    
// SignIn.addEventListener('click', function() {
//     modal.style.display = 'block';
// });

// closeBtn.addEventListener('click', function() {
//     modal.style.display = 'none';
// });



const buyProductBtns = document.querySelector('.sign__in__btn'); 
const buyProductModal = document.querySelector('.receive__sign__in'); 
const buyProductModalCloseBtn = document.querySelector('#close'); 
 
function modalOpen() { 
    buyProductModal.classList.add('_active'); 
} 

function modalClose() { 
    buyProductModal.classList.remove('_active'); 
} 
 
buyProductBtns.addEventListener('click', () => modalOpen()); 
buyProductModalCloseBtn.addEventListener('click', () => modalClose()); 
window.addEventListener('click', (e) => { 
    if (e.target === buyProductModal) { 
        modalClose(); 
    } 
})



