const btnIn = document.getElementById("in");
const btnUp = document.getElementById("up");

const text = document.querySelector(".heading");
const bar = document.querySelector(".line");

const email = document.getElementById("mail");

btnIn.addEventListener('click', ()=>{
       text.innerHTML = "Sign In"
       email.style.display = 'none'
       
});
btnUp.addEventListener('click', ()=>{
       text.innerHTML = "Sign Up"
        email.style.display = 'block'
});
