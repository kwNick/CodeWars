//Create a function that returns the name of the winner in a fight between two fighters.
function declareWinner(fighter1, fighter2, firstAttacker) {
    while(true){
      if(fighter1.name === firstAttacker){
        fighter2.health -= fighter1.damagePerAttack;
        fighter1.health -= fighter2.damagePerAttack;
        if(fighter2.health < 1){
          return fighter1.name;
        }else if(fighter1.health < 1){
          return fighter2.name
        }
      }else{
        fighter1.health -= fighter2.damagePerAttack;
        fighter2.health -= fighter1.damagePerAttack;
        if(fighter1.health < 1){
          return fighter2.name;
        }else if(fighter2.health < 1){
          return fighter1.name;
        }
      }
    }
  }

// function declareWinner(fighter1, fighter2, firstAttacker) {
//     const f1 = Math.ceil(fighter1.health/fighter2.damagePerAttack);
//     const f2 = Math.ceil(fighter2.health/fighter1.damagePerAttack);
//     return f1 === f2 ? firstAttacker : f1 > f2 ? fighter1.name : fighter2.name;
// }