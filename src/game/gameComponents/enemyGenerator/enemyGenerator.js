import {ratStats, batStats, goblinStats, slimeStats, skeletonStats, zombieStats, ogreStats, lamiaStats, behemothStats, chimeraStats} from '../Characters/Characters'


const enemyLevelUp = (newEnemy, enemyLevel) => {

    console.log("Enemy Level: " + enemyLevel);

    const healthMod = newEnemy.levelScale[0] * enemyLevel;
    const patkMod = newEnemy.levelScale[1] * enemyLevel;
    const pdefMod = newEnemy.levelScale[2] * enemyLevel;
    const matkMod = newEnemy.levelScale[3] * enemyLevel;
    const mdefMod = newEnemy.levelScale[4] * enemyLevel;
    const expMod = 3 * enemyLevel;

    newEnemy.level = enemyLevel;
    newEnemy.maxHealth = newEnemy.maxHealth + healthMod;
    newEnemy.physicalAttack = newEnemy.physicalAttack + patkMod;
    newEnemy.physicalDefense = newEnemy.physicalDefense + pdefMod;
    newEnemy.magicAttack = newEnemy.magicAttack + matkMod;
    newEnemy.magicDefense = newEnemy.magicDefense + mdefMod;
    newEnemy.reward = newEnemy.reward + expMod;

    if(enemyLevel <= 4){
        newEnemy.img = newEnemy.imgGallery[0];
    }else if(enemyLevel >= 5 && enemyLevel <= 9){
        newEnemy.img = newEnemy.imgGallery[1];
    }else if(enemyLevel >= 10 && enemyLevel <= 14){
        newEnemy.img = newEnemy.imgGallery[2];
    }else if(enemyLevel >= 15 ){
        newEnemy.img = newEnemy.imgGallery[3];
    }
    console.log("LEVELED UP ENEMY:" + newEnemy.newEnemy);

    return newEnemy;
    
}

const enemyGenerator = (playerStats) => {

    console.log(playerStats);

    let enemyDb = [];
 
    let levelScaleLow = playerStats.level - 1;
    if(levelScaleLow < 1){
        levelScaleLow = 1;
    }
    const levelScaleMed = playerStats.level;
    const levelScaleHigh = playerStats.level + 1;

    let enemyLevelRoll = Math.floor(Math.random() * 3);

    console.log("enemy level Roll 1: " + enemyLevelRoll);

    if(enemyLevelRoll === 0){
        enemyLevelRoll = levelScaleLow;
    }else if(enemyLevelRoll === 1){
        enemyLevelRoll = levelScaleMed;
    }else if(enemyLevelRoll === 2){
        enemyLevelRoll = levelScaleHigh;
    }

    const enemySize = Math.floor(Math.random() * 6);

    if(enemySize <= 2){
        enemyDb = [ratStats, batStats, goblinStats, slimeStats]
    }else if(enemySize === 3 || enemySize === 4){
        enemyDb = [skeletonStats, zombieStats, ogreStats, lamiaStats]
    }else if(enemySize === 5){
        enemyDb = [behemothStats, chimeraStats];
    }

    const enemyRoll = Math.floor(Math.random() * enemyDb.length);
    
    const newEnemy = enemyDb[enemyRoll];
    
    const createdEnemy = enemyLevelUp(newEnemy, enemyLevelRoll);
    
    return createdEnemy;
}

export default enemyGenerator;