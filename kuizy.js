"use_strict"

let html =
'<div class="container">'
    +'<h4 class="under">１、この地名はなんて読む？</h4>'
    +'<img src="imgs/1.png" alt="" srcset="">'
    +'<ul>'
    +'<li id="choice1">選択肢1</li>'
    +'<li id="choice2">選択肢2</li>'
    +'<li id="choice3">選択肢3</li>'
    +'</ul>'
    +'<div class="correct_message" id ="correct_message">'
    +'<p>正解！</p>'
    +'<p>正解は『』だよ！</p>'
    +'</div>'
    +'<div class="uncorrect_message" id="uncorrect_message">'
    +'<p>不正解！</p>'
    +'<p>正解は『』だよ！</p>'
    +'</div>'
   +'</div>'

   

  document.write(html);

const choice1= document.getElementById('choice1');
const choice2= document.getElementById('choice2');
const choice3= document.getElementById('choice3');

choice1.addEventListener('click',function(){
  choice1.classList.add('correct');
  choice1.classList.add('cantclick');
  choice2.classList.add('cantclick');
  choice3.classList.add('cantclick');
  correct_message.style.display="block";
});
choice2.addEventListener('click',function(){
  console.log("aaa");
  choice1.classList.add('correct');
  choice2.classList.add('wrong');
  choice1.classList.add('cantclick');
  choice2.classList.add('cantclick');
  choice3.classList.add('cantclick');
  uncorrect_message.style.display="block";
});
choice3.addEventListener('click',function(){
  choice1.classList.add('correct');
  choice3.classList.add('wrong');
  choice1.classList.add('cantclick');
  choice2.classList.add('cantclick');
  choice3.classList.add('cantclick');
  uncorrect_message.style.display="block";
});