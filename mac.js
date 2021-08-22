// first function
function updateValue(price){
console.log(price);
const fixed= document.getElementById('price-input').innerText;
const fixedPrice=parseInt(fixed);
const num1=document.getElementById('memory-input').innerText;
const numA=parseInt(num1);
const num2=document.getElementById('storage-input').innerText;
const numB=parseInt(num2);
const num3=document.getElementById('delivery-input').innerText;
const numC=parseInt(num3);
// sum of totalPrice
const totalPrice = numA+numB+numC+fixedPrice;
document.getElementById('sub-total').innerText=totalPrice;
const money=totalPrice*price;
if(price==undefined){
     document.getElementById('discount').innerText=totalPrice;
    }
else{
    document.getElementById('discount').innerText=money;}
    }
//handle memory events
document.getElementById('memory-button').addEventListener('click',function(){
const number1=document.getElementById('memory-input').innerText=0;
updateValue();
});
document.getElementById('memoryInput-button').addEventListener('click',function(){
const number2=document.getElementById('memory-input').innerText=180;
updateValue();
});
//handle storage events
document.getElementById('storage1-button').addEventListener('click',function(){
const number3=document.getElementById('storage-input').innerText=0;
updateValue();
});
document.getElementById('storage2-button').addEventListener('click',function(){
const number4=document.getElementById('storage-input').innerText=100;
updateValue();
});
document.getElementById('storage3-button').addEventListener('click',function(){
const number5=document.getElementById('storage-input').innerText=180;
updateValue();
});
//handle delivery events
document.getElementById('delivery1-button').addEventListener('click',function(){
const number6=document.getElementById('delivery-input').innerText=0;
updateValue();
});

document.getElementById('delivery2-button').addEventListener('click',function(){
const number7=document.getElementById('delivery-input').innerText=180;
updateValue();
});
//count promo code 
document.getElementById('getPin').addEventListener('click',function(){
const promoCode=document.getElementById('input-field').value;
if(promoCode =='stevekaku'){
   updateValue(0.8);
    }
else{
     alert('promo code is not matched');
    }
});
