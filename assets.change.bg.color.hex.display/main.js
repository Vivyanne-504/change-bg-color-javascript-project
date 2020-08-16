/*const colorBtn = document.querySelector('colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow','red','green','pink','black','purple','blue'];

addEventListener('click',changeColor);

function changeColor (){
  // bodyBcg.style.backgroundColor = colors[2];
  let random = Math.floor(Math.random()*colors.length)
  bodyBcg.style.backgroundColor = colors[random];//
}*/

const hexNumbers=['O','1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F',];
const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex');

colorBtn.addEventListener('click', getHex);

function getHex(){
  let hexCol = '#';

  for (let i = 0; i<6; i++) {
    let random = Math.floor(Math.random()*hexNumbers.length);
    hexCol +=hexNumbers[random];
    //console.log(hexCol);

  }
  bodyBcg.style.backgroundColor=hexCol;
  hex.innerHTML=hexCol;
}