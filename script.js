console.log("Script Loaded!");

// ======================
// ELEMENT
// ======================

// Page
const introPage = document.getElementById("introPage");
const questionPage = document.getElementById("questionPage");
const successPage = document.getElementById("successPage");
const giftPage = document.getElementById("giftPage");
const endingPage = document.getElementById("endingPage");

// Intro
const title = document.getElementById("title");
const text = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");

// Question
const questionTitle = document.getElementById("questionTitle");
const questionText = document.getElementById("questionText");
const topImage = document.getElementById("topImage");
const bottomImage = document.getElementById("bottomImage");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Success
const successImage = document.getElementById("successImage");
const successTitle = document.getElementById("successTitle");
const successText = document.getElementById("successText");
const giftContainer = document.getElementById("giftContainer");
const lastBtn = document.getElementById("lastBtn");

// Gift
const backBtn = document.getElementById("backBtn");
const giftContent = document.getElementById("giftContent");

// Ending
const endingTitle = document.getElementById("endingTitle");
const endingText = document.getElementById("endingText");

// Card
const card = document.querySelector(".card");


// ======================
// VARIABLE
// ======================

let currentScene = 0;


// ======================
// START
// ======================

window.onload = () => {

    showPage(introPage);

    renderScene();

};


// ======================
// SHOW PAGE
// ======================

function showPage(page){

    const pages = document.querySelectorAll(".page");

    pages.forEach(p=>{

        p.classList.remove("active");

    });

    page.classList.add("active");

}


// ======================
// RENDER INTRO
// ======================

function renderScene(){

    const scene = scenes[currentScene];

    title.textContent = scene.title;

    text.textContent = scene.text;

    nextBtn.textContent = scene.button;

}


// ======================
// QUESTION PAGE
// ======================

function showQuestionPage(){
    
    noBtn.style.position = "relative";
    noBtn.style.left = "0px";
    noBtn.style.top = "0px";
    noBtn.style.transform = "scale(1)";

    yesBtn.style.transform = "scale(1)";
    showPage(questionPage);

    questionTitle.textContent = "Will you be mine?";

    questionText.textContent =
        "Choose carefullyy";

    topImage.style.display = "block";

    bottomImage.style.display = "block";
    
    yesBtn.style.display = "inline-block";
    noBtn.style.display = "inline-block";

}


// ======================
// SUCCESS PAGE
// ======================

function showSuccessPage(){

    showPage(successPage);

    successTitle.textContent =
        "YAYYYYY ";

    successText.textContent =
        "I knew you'd say YES!";

    successImage.style.display = "block";

    giftContainer.style.display = "flex";

}


// ======================
// GIFT PAGE
// ======================

function showGiftPage(content){

    showPage(giftPage);

    giftContent.innerHTML = content;

}


// ======================
// ENDING PAGE
// ======================

function showEndingPage(){

    showPage(endingPage);

}


// ======================
// NEXT BUTTON
// ======================

nextBtn.addEventListener("click",()=>{

    currentScene++;

    if(currentScene < scenes.length-1){

        renderScene();

    }

    else{

        showQuestionPage();

    }

});