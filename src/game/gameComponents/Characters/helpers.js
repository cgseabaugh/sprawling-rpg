export const wait = ms => new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, ms);
});

export const rollDice = (stat) => {

    let roll;
    let total = 0;

    for(let i = 1; i <= stat; i++){
        roll = Math.floor(Math.random() * 6);
        console.log("ROLL A: " + roll)
        if(roll >= 4){
            total++
        }
    }

    console.log("rollDice: " + total)
    return total;

}

export const attack =({ attacker, receiver }) => {
    const atk = rollDice(attacker.physicalAttack);
    const def = rollDice(receiver.physicalDefense);
    const finalDamage = atk - def;
    console.log("Final Damage: " + finalDamage)
    return finalDamage;
}

export const magic =({ attacker, receiver }) => {
    const atk = rollDice(attacker.magicAttack);
    const def = rollDice(receiver.magicDefense);
    const finalDamage = atk - def;
    console.log("Final Damage: " + finalDamage)
    return finalDamage;
}

export const heal =({ receiver }) => {
    const roll = Math.floor(Math.random(2));
    if(roll === 0){
        return rollDice(receiver.magicAttack);
    }else if(roll === 1){
        return 0;
    }
}
