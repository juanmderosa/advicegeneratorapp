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


window.addEventListener("DOMContentLoaded",()=>{
    renderAdvice()
})


const renderAdvice = async () => {

    const adviceData = await getData()
    const idAdvice = adviceData.slip.id
    const textAdvice = adviceData.slip.advice
    console.log(textAdvice)

    spanNumber.innerText = idAdvice
    adviceText.innerText = `"${textAdvice}"`
}

iconDiceContainer.addEventListener("click",()=>{
    renderAdvice()
})

