const generateEl = document.querySelector(".generate");
const passwordEl = document.querySelector("#create-password");
const copyEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert-container")


generateEl.addEventListener("click", ()=>{
    generatePassword();
});

copyEl.addEventListener("click" ,()=>{
    copyPassword();
});

function generatePassword(){
    const chars = "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM@#$%&_";
    const passwordLength = 10;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random()*chars.length)
        password += chars.substring(randomNum, randomNum+1);
    } 
    passwordEl.value = password;
    
    alertEl.innerText = password + " copied!";
};

function copyPassword(){
    passwordEl.select();
    passwordEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(passwordEl.value);

    if(passwordEl.value){
        alertEl.classList.remove("active");
    setTimeout(()=>{
        alertEl.classList.add("active")
    }, 2000);
    }
    
};