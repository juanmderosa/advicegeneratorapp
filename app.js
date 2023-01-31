const url = "https://api.adviceslip.com/advice"
const getData = async () =>{
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        alert("There was an error in the request", error);
    }
}

const spanNumber = document.querySelector(".spanNumber")
const adviceText = document.querySelector(".adviceText")
const iconDiceContainer = document.querySelector(".iconDiceContainer")
const divider = document.querySelector(".divider")


window.addEventListener("DOMContentLoaded",()=>{
    renderAdvice()
    changeDivider()
})

window.addEventListener("resize", ()=>{
    changeDivider()
})

const renderAdvice = async () => {

    const adviceData = await getData()
    const idAdvice = adviceData.slip.id
    const textAdvice = adviceData.slip.advice
    spanNumber.innerText = idAdvice
    adviceText.innerText = `"${textAdvice}"`
}

iconDiceContainer.addEventListener("click",()=>{
    renderAdvice()
})

const windowWidth = () =>{
    let width = window.innerWidth;
    return width
  }


const changeDivider = ()=>{
    if(windowWidth()<750){
        divider.src= "./images/pattern-divider-mobile.svg"
    }else{
        divider.src= "./images/pattern-divider-desktop.svg"
    }
}
