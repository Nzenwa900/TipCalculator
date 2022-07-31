
const btn = document.querySelector(".btn");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");


const hideError = () => {
    setTimeout(() =>{
        error.style.display = "none";
    }, 3000);
}

const calculateTip = () => {
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;

    if (bill === "" || rate == ""){

        error.style.display = "block";
        hideError();
    }
};

btn.addEventListener("click", calculateTip);