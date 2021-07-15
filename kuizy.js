'use_strict'

const choices=[
  ['たかなわ', 'こうわ', 'たかわ'],
  ['かめど', 'かめいど', 'かめと'],
  ['こうじまち', 'かゆまち', 'おかちまち'],
  ['おなりもん', 'ごせいもん', 'おかどもん'],
  ['たたら', 'たたりき', 'とどろき'],
  ['いじい', 'せきこうい', 'しゃくじい'],
  ['ざっしき', 'ぞうしき', 'ざっしょく'],
  ['おかちまち', 'みとちょう', 'ごしろちょう'],
  ['ろっこつ', 'ししぼね', 'しこね'],
  ['こばく', 'こしゃく', 'こぐれ']
]

const answers =[
  ['たかなわ', 
  'かめいど', 
  'おかちまち', 
  'おなりもん', 
  'とどろき', 
  'しゃくじい', 
  'ぞうしき', 
  'おかちまち', 
  'ししぼね', 
  'こぐれ' ]
]

for (c = 0; c < 10; c++) {
let html =
  +'<div class="container">'
  +`<h4 class="under">${c+1}、この地名はなんて読む？</h4>`
    +`<img src="imgs/${c+1}.png" alt="" srcset="">`
    +'<ul>'
    +`<li id="choice1">${choices[c][0]}</li>`
    +`<li id="choice2">${choices[c][1]}</li>`
    +`<li id="choice3">${choices[c][2]}</li>`
    +'</ul>'
    +'<div class="correct_message" id ="correct_message">'
    +'<p>正解！</p>'
    +`<p>正解は『${answers[c]}』だよ！</p>`
    +'</div>'
    +'<div class="uncorrect_message" id="uncorrect_message">'
    +'<p>不正解！</p>'
    +`<p>正解は『${answers[c]}』だよ！</p>`
    +'</div>'
   +'</div>'

  document.write(html);

};

const choice1= document.getElementById('choice1');
const choice2= document.getElementById('choice2');
const choice3= document.getElementById('choice3');
const correct_message= document.getElementById('correct_message');
const uncorrect_message= document.getElementById('uncorrect_message');

choice1.addEventListener('click',function(){
  choice1.classList.add('correct');
  choice1.classList.add('cantclick');
  choice2.classList.add('cantclick');
  choice3.classList.add('cantclick');
  correct_message.style.display="block";
});
choice2.addEventListener('click',function(){
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