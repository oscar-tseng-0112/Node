const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const count = document.querySelector(".count");
const restartBtn = document.querySelector(".restartBtn");
const guesses = document.querySelector(".guesses");


let countNum =0;   //廣域變數
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("觀察隨機的數字：", randomNumber);

function checkGuess() {
    const userGuess = Number(guessField.value);  //取得欄位值，並轉為數字
    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        result.textContent = "請輸入 1 到 100 的整數!";
        return;
    }
    countNum++;
    count.textContent = "猜測次數："+countNum;
    if (countNum === 1) {
        guesses.textContent = "已猜過的數字：";
    }
    guesses.textContent += userGuess + " ";
    
    
    if  (  userGuess === randomNumber ) {
        result.textContent = "猜測結果：Congratulations!" ;
    }
    else if (userGuess  < randomNumber ) {
        result.textContent = "猜測結果：數字太小!" ;
    }
    else if (userGuess  >  randomNumber) {
        result.textContent = "猜測結果：數字太大!";
    }

    //guessField.focus();       //游標焦點預設在輸入欄位裡
    if (countNum > 10){
        result.textContent += "遊戲結束";
        result.style.backgroundColor="red";
        alert("遊戲結束");
        setGameOver();
    }
    guessField.value = "";
    guessField.focus();
}

function setGameOver() {
        guessField.disabled = true; //停止輸入功能
        guessSubmit.disabled = true;    //停止按鈕功能
}
function initGame() {
    countNum = 0;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("新的隨機數字：", randomNumber);

    result.textContent = "";
    count.textContent = "";
    result.style.backgroundColor = "";
    guessField.value = "";

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.focus();
}


restartBtn.addEventListener("click", initGame);
  
guessSubmit.addEventListener("click", checkGuess);   //當按鈕被點擊，執行函式


