
//COUNTER PROG

const decreasebtn=document.getElementById("decreaseBtn");
const ResetBtn=document.getElementById("ResetBtn");
const IncreaseBtn=document.getElementById("IncreaseBtn");
const countLabel=document.getElementById("countLabel");
let count=0;


IncreaseBtn.onclick=function(){
     count++;
     countLabel.textContent=count;

};

decreasebtn.onclick=function(){
     count--;
     countLabel.textContent=count;

};

ResetBtn.onclick=function(){
     count=0;
     countLabel.textContent=count;

};