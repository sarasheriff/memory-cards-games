var cardChild = document.getElementsByClassName('card-child'),
flippedFlag =false,
lockRotate = false,
firstCard,secondCard;
for(i=0;i<cardChild.length;i++){
 
  cardChild[i].addEventListener('click',function(){
     
      console.log('clicke')
      console.log(this);
      debugger;
    if (lockRotate) return;
    if(this===firstCard)return;
      this.classList.add('rotate');
      if(!flippedFlag){
        flippedFlag=true;
        firstCard=this;
        console.log(flippedFlag);
        console.log(firstCard)
      }else{
        flippedFlag=false;
        secondCard=this;
        console.log(flippedFlag);
        console.log(firstCard,secondCard)
        console.log(firstCard.dataset.name)
        matchCards();
      }
    })  
}
// matching items function
 function matchCards(){
  if(firstCard.dataset.name === secondCard.dataset.name ){
    firstCard.style.visibility='hidden';
    secondCard.style.visibility='hidden';
  }else{
    lockRotate=true
    setTimeout( function(){
     firstCard.classList.remove('rotate');
    secondCard.classList.remove('rotate'); 
    lockRotate=false
    },1000)
    
  }
 }
// random-order function
 (function shuffle(){
   for(i=0;i<cardChild.length;i++){
     var random = Math.floor(Math.random()*12);
     cardChild[i].style.order=random
   }
 })();

//  https://codepen.io/sarasherif/pen/LYEMNbO