let items = document.querySelector('.slider-items').children;
let nextSlide = document.querySelector('.next');
let prevSlide = document.querySelector('.prev');
let totalItems = items.length;
let index = 0;

nextSlide.onclick = function(){
   changePhoto('next');
}

prevSlide.onclick = function(){
   changePhoto('prev');
}


/*
function changePhoto(direction){
   if (direction == 'next'){
      if (index == totalItems-1){
         index = 0;
      }else{
         index++;
      }
   }else /* direction = prev *//*{
      if (index == 0){
         index = totalItems-1;
      }else{
         index--;
      }
   }
   
}*/
function changePhoto(direction){
   if (direction == 'next'){
      if (index == totalItems-1){
         index = 0;
      } else {
         index++;
      } 
   } else {
      if (index == 0){
         index = totalItems-1;
      } else {
         index--;
      }
   }
   for (let i=0; i<totalItems; i++){
      items[i].classList.remove('active');
   }
   items[index].classList.add('active');
}
