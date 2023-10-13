const comPic = document.querySelector(".comPic");
const comPicR = document.querySelector(".myPicR");
const comPicP = document.querySelector(".myPicP");
const comPicS = document.querySelector(".myPicS");

const RSP = ["바위","보","가위"];

function randomPic(){
    const randomNum = Math.floor(Math.random() * 3);
    const randomRSP = RSP[randomNum];
    return randomRSP;
}

function mainFunction(){
    const randomRSP = randomPic();
    comPic.innerText = randomRSP;
}

myPicR.addEventListener("click", mainFunction);
myPicP.addEventListener("click", mainFunction);
myPicS.addEventListener("click", mainFunction);