/*
Input: guessNumber, x
Algo:
 x> guessNumber : clg (your specified number is GREATER than the guessNumber)
x < guessNumber: clg (your specified number is LESS than the guessNumber)
x = guessNumber: clg(Congratz, you guess correctly !!!)
Output: <div> 
History Record:
Effort 1: x
Effort 2: x
...

</div>
*/

const guessNumber = Math.round(Math.random() * 100);
console.log(guessNumber);
let count = 1;
document.getElementById("btn").onclick = (e) => {
  e.preventDefault();
  let x = Number(document.getElementById("input").value);
  const text1 = "Your specified number is GREATER than the guessNumber";
  const text2 = "Your specified number is LESS than the guessNumber";
  let text = "";
  //Create new result <div> tag based on text3 condition
  if (count >= 0) {
    let divTag = document.createElement("div");
    divTag.id = "historyRecord";
    divTag.innerHTML = `Effort ${count}: ${x}`;
    document.body.appendChild(divTag);
  }
  //Display result text
  if (x > guessNumber) {
    text = text1;
  } else if (x < guessNumber) {
    text = text2;
  } else if (x == guessNumber) {
    text = `Congratz, you have guessed correctly after ${count} times!!!`;
  }
  count++;
  //show the result on screne
  document.getElementById("result").innerHTML = text;
};
