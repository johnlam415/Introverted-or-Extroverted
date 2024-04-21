const question = [
    "Are you a male or female?",
    "Do you have a GF?",
    "Do you have more than 5 friends?",
    "Do you love John?",
    "Do you have a pet?",
    "Have you been to Cidercade?"
]

const questionElement = document.querySelector(".question")
const stats = document.querySelector(".stats")
let count = 0;
let score = 0;
const numberOfQuestion = question.length

function setQuestion(){
    if(count == numberOfQuestion){
    
            finished()
            count++;

    }
    else if(count > numberOfQuestion){
        return false
    }
    else{
        questionElement.innerHTML = question[count]
        count++;
    }

}
const scoreElement = document.querySelector(".score")
const arrow = document.querySelector(".arrow")
function finished(){
    questionElement.innerHTML = "Finished"
    stats.style.display = "flex"
    scoreElement.innerHTML = score
    
    console.log(score)
    switch(score){
        case 20:
             arrow.style.left = "170px"
             break;
        case 40:
             arrow.style.left = "195px"
             break;
        case 60:
             arrow.style.left = "220px"
             break;
        case 80:
             arrow.style.left = "245px"
             break;
        case 100:
             arrow.style.left = "270px"
             break;
        case -20:
             arrow.style.left = "0px"
             console.log("working")
             break;
        case -40:
             arrow.style.left = "25px"
             break;
        case -60:
             arrow.style.left = "50px"
             break;
        case -80:
             arrow.style.left = "75px"
             break;
        case -100:
            arrow.style.left = "-25px"
            break;
    }
}



//onStart


const buttonYes= document.querySelector("#yes");
const buttonNo = document.querySelector("#no");

buttonYes.addEventListener("click",()=>{
    count == 1? score +=0: score +=20;
    
    setQuestion()
})
buttonNo.addEventListener("click",()=>{
    count == 1? score +=0: score -=20 ;
    setQuestion()
})
setQuestion();


