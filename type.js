const words = [
    "hello",
    "hi",
    "code",
    "try",
    "take",
    // "programming",
    // "happiness",
    // "power",
    // "faith",
    // "stylingcss",
    // "htmlcode",
    // "javascriptlanguage",
    // "wearepoerfull",
    // "learntoearn",
    // "letsstart",
    // "iamsohappy",
    // "thanksgod",
    // "profit",
    // "dollars",
    // "currencyrate",
    // "ofcourse",
    // "dogslovers",
    // "mercymoral",
    // "religion",
    // "respect"
];

const lvls = {
    "Easy": 5,
    "Normal": 4,
    "Hard": 2
};

let defaultLevelName="Normal";// change lvls from here
let defaultLevelSeconds=lvls[defaultLevelName];

let startButton=document.querySelector(".start");
let levelNameSpan=document.querySelector(".message .lvl");
let secondsSpan=document.querySelector(".message .seconds");
let theWord=document.querySelector(".the-word");
let upComingWord=document.querySelector(".up-coming-words");
let input=document.querySelector(".input");
let timeLeftSpan=document.querySelector(".time span");
let score=document.querySelector(".score .got");
let scoreTotal=document.querySelector(".score .total");
let finishMessage=document.querySelector(".finish");

levelNameSpan.innerHTML=defaultLevelName;
secondsSpan.innerHTML=defaultLevelSeconds;
timeLeftSpan.innerHTML=defaultLevelSeconds;


scoreTotal.innerHTML=words.length;

input.onpaste=function (){
    return false;
}

startButton.onclick = function () {
    this.remove();
    input.focus();
    genWord();

}

function genWord(){
    let randomWord=words[Math.floor(Math.random()*words.length)];
    //console.log(randomWord);
    let wordIndex=words.indexOf(randomWord);
        //console.log(wordIndex);
    words.splice(wordIndex , 1);

    theWord.innerHTML = randomWord;
    upComingWord.innerHTML = "";

    for(let i=0; i< words.length; i++){
        let div=document.createElement("div");
        let txt=document.createTextNode(words[i]);
        div.appendChild(txt);
        upComingWord.appendChild(div);
    }

    startPlay();

}

function startPlay(){
    timeLeftSpan.innerHTML=defaultLevelSeconds;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if(timeLeftSpan.innerHTML==="0") {
            clearInterval(start);

            if(theWord.innerHTML.toLowerCase()===input.value.toLowerCase()){
                input.value="";
                score.innerHTML++;
                if(words.length>0){
                    genWord();

                }else {
                    let spantr=document.createElement("span");
                    spantr.className="good";
                    let spanText=document.createTextNode("congratulation");
                    spantr.appendChild(spanText);
                    finishMessage.appendChild(spantr);
                    upComingWord.remove();
                }
            }else {
                let span=document.createElement("span");
                span.className="bad";
                let spanTxt=document.createTextNode("game over");
                span.appendChild(spanTxt);
                finishMessage.appendChild(span);
            }
        }

    },1000);
}










