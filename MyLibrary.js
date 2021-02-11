function bounceOff(b1,b2) {
    if (b1.x - b2.x < b2.width/2 + b1.width/2
        && b2.x - b1.x < b2.width/2 + b1.width/2) {
      b1.velocityX = b1.velocityX * (-1);
      b2.velocityX = b2.velocityX * (-1);
    }
    if (b1.y - b2.y < b2.height/2 + b1.height/2
      && b2.y - b1.y < b2.height/2 + b1.height/2){
      b1.velocityY = b1.velocityY * (-1);
      b2.velocityY = b2.velocityY * (-1);
    }
}
function isTouching(ob1,ob2){
     if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2 &&
         ob2.x - ob1.x < ob2.width/2 + ob1.width/2 &&
          ob1.y - ob2.y < ob2.height/2 + ob1.height/2 &&
           ob2.y - ob1.y < ob2.height/2 + ob1.height/2) { 
               return true;
             }
              else {
                   return false;
                 }
                 }              