const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const container = document.querySelector('.container');
const submit=document.querySelector(".submit");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    container.classList.toggle('active');
});

submit.addEventListener('click',()=>{
    alert('Form has been submitted succesfully');
})
