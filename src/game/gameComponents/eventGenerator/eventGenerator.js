import {lockedDoor, thorns, darkness, miasma, lockedChest, cursedIdol, emptyRoom} from '../FieldComponents/events'


// const enemyLevelUp = (newEnemy, enemyLevel) => {

//     console.log("Enemy Level: " + enemyLevel);

//     const healthMod = newEnemy.levelScale[0] * enemyLevel;
//     const patkMod = newEnemy.levelScale[1] * enemyLevel;
//     const pdefMod = newEnemy.levelScale[2] * enemyLevel;
//     const matkMod = newEnemy.levelScale[3] * enemyLevel;
//     const mdefMod = newEnemy.levelScale[4] * enemyLevel;
//     const expMod = 3 * enemyLevel;

//     newEnemy.level = enemyLevel;
//     newEnemy.maxHealth = newEnemy.maxHealth + healthMod;
//     newEnemy.physicalAttack = newEnemy.physicalAttack + patkMod;
//     newEnemy.physicalDefense = newEnemy.physicalDefense + pdefMod;
//     newEnemy.magicAttack = newEnemy.magicAttack + matkMod;
//     newEnemy.magicDefense = newEnemy.magicDefense + mdefMod;
//     newEnemy.reward = newEnemy.reward + expMod;

//     if(enemyLevel <= 4){
//         newEnemy.img = newEnemy.imgGallery[0];
//     }else if(enemyLevel >= 5 && enemyLevel <= 9){
//         newEnemy.img = newEnemy.imgGallery[1];
//     }else if(enemyLevel >= 10 && enemyLevel <= 14){
//         newEnemy.img = newEnemy.imgGallery[2];
//     }else if(enemyLevel >= 15 ){
//         newEnemy.img = newEnemy.imgGallery[3];
//     }
//     console.log("LEVELED UP ENEMY:" + newEnemy.newEnemy);

//     return newEnemy;
    
// }



const eventGenerator = () => {

    let eventDb = [lockedDoor, thorns, darkness, miasma, lockedChest, cursedIdol, emptyRoom];

    let createdEvent = "";

    let eventRoll = Math.floor(Math.random() * 11);

    console.log("EVENT ROLL: " + eventRoll);

    if(eventRoll === 0){
        createdEvent = eventDb[0]
    }else if(eventRoll === 1){
        createdEvent = eventDb[1]
    }else if(eventRoll === 2){
        createdEvent = eventDb[2]
    }else if(eventRoll === 3){
        createdEvent = eventDb[3]
    }else if(eventRoll === 4){
        createdEvent = eventDb[4]
    }else if(eventRoll === 5){
        createdEvent = eventDb[5]
    }else if (eventRoll >= 6){
        createdEvent = eventDb[6]
    }

    console.log(createdEvent);
    return {createdEvent};
}

export default eventGenerator;