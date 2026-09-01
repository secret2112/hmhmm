// ======================
// VARIABLE
// ======================

let noClick = 0;

let giftOpened = 0;


// ======================
// MOVE NO BUTTON
// ======================

function moveNoButton() {

    const cardRect = card.getBoundingClientRect();
    const rect = noBtn.getBoundingClientRect();

    
    if (noBtn.style.position !== "absolute") {

        noBtn.style.position = "absolute";

        
        noBtn.style.left = (rect.left - cardRect.left) + "px";
        noBtn.style.top = (rect.top - cardRect.top) + "px";

    }


    let currentX = parseFloat(noBtn.style.left);
    let currentY = parseFloat(noBtn.style.top);

    const moveDistance = 90;

    let newX =
        currentX + (Math.random() * moveDistance * 2 - moveDistance);

    let newY =
        currentY + (Math.random() * moveDistance * 2 - moveDistance);

    
    newX = Math.max(
        20,
        Math.min(newX, cardRect.width - noBtn.offsetWidth - 20)
    );

    newY = Math.max(
        20,
        Math.min(newY, cardRect.height - noBtn.offsetHeight - 20)
    );

    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";

}


// ======================
// GROW YES
// ======================

function growYesButton() {

    yesBtn.style.transform =
        `scale(${1 + noClick * 0.2})`;

}


// ======================
// SHRINK NO
// ======================

function shrinkNoButton() {

    if(noClick >= 3){

        const scale =
            Math.max(0.35,1-noClick*0.08);

        noBtn.style.transform =
            `scale(${scale})`;

    }

}


// ======================
// HANDLE NO
// ======================

function handleNoClick(){

    noClick++;

    growYesButton();

    shrinkNoButton();

    moveNoButton();

}


// ======================
// SUCCESS
// ======================

function showSuccess(){

    showSuccessPage();

    setTimeout(()=>{

        document.getElementById("gift1")
        .classList.add("show");

    },500);

    setTimeout(()=>{

        document.getElementById("gift2")
        .classList.add("show");

    },900);

    setTimeout(()=>{

        document.getElementById("gift3")
        .classList.add("show");

    },1300);

}


// ======================
// OPEN GIFT
// ======================

function openGift(number){

    showPage(giftPage);

    switch(number){

        case 1:

            giftContent.innerHTML=`

                <h2>📸 Our Memories</h2>

                <p>

                    

                </p>

            `;

        break;

        case 2:

            giftContent.innerHTML=`

                <h2> A Song That Reminds Me Of us (gatau kenapa tp rasanya emang ini yg buatku inget tu WKWKWKKWK)</h2>

                <p>

                

                </p>

            `;

        break;

        case 3:

            giftContent.innerHTML=`

                <h2>💌 A Little Letter</h2>

                <p>

                    my dearest allie

                </p>

            `;

        break;

    }

    giftOpened++;

    checkGift();

}


// ======================
// CHECK GIFT
// ======================

function checkGift(){

    if(giftOpened>=3){

        lastBtn.style.display="block";

    }

}


// ======================
// BACK
// ======================

function backToSuccess(){

    showSuccessPage();

}


// ======================
// LAST PAGE
// ======================

function openEnding(){

    showEndingPage();

}


// ======================
// EVENT
// ======================

// YES
yesBtn.addEventListener("click",()=>{

    showSuccess();

});

// NO
noBtn.addEventListener("click",()=>{

    handleNoClick();

});

// Mouse Move
noBtn.addEventListener("mousemove",()=>{

    if(noClick<5){

        moveNoButton();

    }

});

// Mobile
noBtn.addEventListener("touchstart",()=>{

    if(noClick<5){

        moveNoButton();

    }

});

// Gift
gift1.addEventListener("click",()=>{

    openGift(1);

});

gift2.addEventListener("click",()=>{

    openGift(2);

});

gift3.addEventListener("click",()=>{

    openGift(3);

});

// Back
backBtn.addEventListener("click",()=>{

    backToSuccess();

});

// Ending
lastBtn.addEventListener("click",()=>{

    openEnding();

});