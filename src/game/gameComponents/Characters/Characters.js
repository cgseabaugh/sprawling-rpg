import assassin from '../assets/sprites-heroes/assassin.png'
import bandit from '../assets/sprites-heroes/bandit.png'
import knight from '../assets/sprites-heroes/knight.png'
import warrior from '../assets/sprites-heroes/warrior.png'
import magician from '../assets/sprites-heroes/mage.png'
import shaman from '../assets/sprites-heroes/shaman.png'

import rat1 from '../assets/sprites/giant-rat-1.png'
import rat2 from '../assets/sprites/giant-rat-2.png'
import rat3 from '../assets/sprites/giant-rat-3.png'
import rat4 from '../assets/sprites/giant-rat-4.png'

import bat1 from '../assets/sprites/mad-bat-1.png'
import bat2 from '../assets/sprites/mad-bat-2.png'
import bat3 from '../assets/sprites/mad-bat-3.png'
import bat4 from '../assets/sprites/mad-bat-4.png'

import slime1 from '../assets/sprites/slime-1.png'
import slime2 from '../assets/sprites/slime-2.png'
import slime3 from '../assets/sprites/slime-3.png'
import slime4 from '../assets/sprites/slime-4.png'

import goblin1 from '../assets/sprites/goblin-1.png'
import goblin2 from '../assets/sprites/goblin-2.png'
import goblin3 from '../assets/sprites/goblin-3.png'
import goblin4 from '../assets/sprites/goblin-4.png'

import skeleton1 from '../assets/sprites/skeleton-1.png'
import skeleton2 from '../assets/sprites/skeleton-2.png'
import skeleton3 from '../assets/sprites/skeleton-3.png'
import skeleton4 from '../assets/sprites/skeleton-4.png'

import zombie1 from '../assets/sprites/zombie-1.png'
import zombie2 from '../assets/sprites/zombie-2.png'
import zombie3 from '../assets/sprites/zombie-3.png'
import zombie4 from '../assets/sprites/zombie-4.png'

import ogre1 from '../assets/sprites/ogre-1.png'
import ogre2 from '../assets/sprites/ogre-2.png'
import ogre3 from '../assets/sprites/ogre-3.png'
import ogre4 from '../assets/sprites/ogre-4.png'

import lamia1 from '../assets/sprites/lamia-1.png'
import lamia2 from '../assets/sprites/lamia-2.png'
import lamia3 from '../assets/sprites/lamia-3.png'
import lamia4 from '../assets/sprites/lamia-4.png'

import behemoth1 from '../assets/sprites/behemoth-1.png'
import behemoth2 from '../assets/sprites/behemoth-2.png'
import behemoth3 from '../assets/sprites/behemoth-3.png'
import behemoth4 from '../assets/sprites/behemoth-4.png'

import chimera1 from '../assets/sprites/chimera-1.png'
import chimera2 from '../assets/sprites/chimera-2.png'
import chimera3 from '../assets/sprites/chimera-3.png'
import chimera4 from '../assets/sprites/chimera-4.png'




class PlayerCharacter {

    constructor(id, name, level, maxHealth, health, img, physicalAttack, physicalDefense, magicAttack, magicDefense, gold, experience, floor, levelScale, inventory){
        this.id = id;
        this.name = name;
        this.level = level;
        this.maxHealth = maxHealth;
        this.health = health;
        this.img = img;
        this.physicalAttack = physicalAttack;
        this.physicalDefense = physicalDefense;
        this.magicAttack = magicAttack;
        this.magicDefense = magicDefense;
        this.gold = gold;
        this.experience = experience;
        this.floor = floor;
        this.levelScale = levelScale;
        this.inventory = inventory;
    }

    get getId(){return this.id}
    set setId(id){return this.id = id;}
    get getName(){return this.name}
    set setName(name){return this.name = name;}
    get getLevel(){return this.level}
    set setLevel(level){return this.level = level;}
    get getMaxHealth(){return this.maxHealth}
    set setMaxHealth(maxHealth){return this.maxHealth = maxHealth;}
    get getHealth(){return this.health}
    set setHealth(health){return this.health = health;}
    get getImg(){return this.img}
    set setImg(img){return this.img = img;}
    get getPhysicalAttack(){return this.physicalAttack}
    set setPhysicalAttack(physicalAttack){return this.physicalAttack = physicalAttack;}
    get getPhysicalDefense(){return this.physicalDefense}
    set setPhysicalDefense(physicalDefense){return this.physicalDefense = physicalDefense;}
    get getMagicAttack(){return this.getMagicAttack}
    set setMagicAttack(magicAttack){return this.magicAttack = magicAttack;}
    get getMagicDefense(){return this.magicDefense}
    set setMagicDefense(magicDefense){return this.magicDefense = magicDefense;}
    get getExperience(){return this.experience}
    set setExperience(experience){return this.experience = experience;}
    get getGold(){return this.gold}
    set setGold(gold){return this.gold = gold;}
    get getFloor(){return this.floor}
    set setFloor(floor){return this.floor = floor;}
    get getLevelScale(){return this.levelScale}
    set setLevelScale(levelScale){return this.levelScale = levelScale;}
    get getInventory(){return this.inventory}
    set setInventory(inventory){return this.inventory = inventory;}

}

// export const playerStats = {
//     level: 1,
//     maxHealth: 100,
//     health: 100,
//     name: 'Captain',
//     img: captain,

//     attack: 50,
//     defense: 30,
//     magicAttack: 32,
//     magicDefense: 50
// }

// export const opponentStats = {
//     level: 1,
//     maxHealth: 100,
//     name: 'Skeleton',
//     img: skeleton,

//     attack: 32,
//     defense: 20,
//     magicAttack: 40,
//     magicDefense: 58
// }





export const assassinStats = {
    level: 1,
    maxHealth: 20,
    health: 20,
    name: 'Assassin',
    img: assassin,
    physicalAttack: 100,
    physicalDefense: 20,
    magicAttack: 20,
    magicDefense: 20,
    experience: 0,
    gold: 0,
    levelScale: [1, 4, 1, 2, 1],
    inventory : []
}
export const banditStats = {
    level: 1,
    maxHealth: 25,
    health: 25,
    name: 'Bandit',
    img: bandit,
    physicalAttack: 25,
    physicalDefense: 20,
    magicAttack: 20,
    magicDefense: 20,
    experience: 0,
    gold: 0,
    levelScale: [3, 3, 1, 2, 1],
    inventory: []
}
export const knightStats = {
    level: 1,
    maxHealth: 20,
    health: 20,
    name: 'Knight',
    img: knight,
    physicalAttack: 25,
    physicalDefense: 25,
    magicAttack: 20,
    magicDefense: 20,
    experience: 0,
    gold: 0,
    levelScale: [2, 3, 3, 1, 1]
}
export const warriorStats = {
    level: 1,
    maxHealth: 20,
    health: 20,
    name: 'General',
    img: warrior,
    physicalAttack: 25,
    physicalDefense: 30,
    magicAttack: 20,
    magicDefense: 15,
    experience: 0,
    gold: 0,
    levelScale: [3, 2, 3, 1, 1]
}
export const magicianStats = {
    level: 1,
    maxHealth: 20,
    health: 20,
    name: 'Mage',
    img: magician,
    physicalAttack: 20,
    physicalDefense: 10,
    magicAttack: 40,
    magicDefense: 15,
    experience: 0,
    gold: 0,
    levelScale: [1, 1, 1, 4, 2]
}
export const shamanStats = {
    level: 1,
    maxHealth: 20,
    health: 20,
    name: 'Shaman',
    img: shaman,
    physicalAttack: 25,
    physicalDefense: 15,
    magicAttack: 20,
    magicDefense: 15,
    experience: 0,
    gold: 0,
    levelScale: [2, 1, 1, 3, 3]
}



export const ratStats = {
    level: 1,
    maxHealth: 15,
    name: 'Giant Rat',
    img: "",
    imgGallery: [rat1, rat2, rat3, rat4],
    physicalAttack: 10,
    physicalDefense: 10,
    magicAttack: 5,
    magicDefense: 10,
    reward: 10,
    size: "small",
    levelScale: [3, 3, 0, 1, 0]
}
export const batStats = {
    level: 1,
    maxHealth: 10,
    name: 'Rabid Bat',
    img: "",
    imgGallery: [bat1, bat2, bat3, bat4],
    physicalAttack: 15,
    physicalDefense: 5,
    magicAttack: 15,
    magicDefense: 5,
    reward: 10,
    size: "small",
    levelScale: [2, 4, 0, 1, 0]
}
export const goblinStats = {
    level: 1,
    maxHealth: 15,
    name: 'Goblin',
    img: "",
    imgGallery: [goblin1, goblin2, goblin3, goblin4],
    physicalAttack: 15,
    physicalDefense: 5,
    magicAttack: 10,
    magicDefense: 5,
    reward: 10,
    size: "small",
    levelScale: [3, 4, 0, 0, 0]
}
export const slimeStats = {
    level: 1,
    maxHealth: 20,
    name: 'Slime',
    img: "",
    imgGallery: [slime1, slime2, slime3, slime4],
    physicalAttack: 5,
    physicalDefense: 10,
    magicAttack: 10,
    magicDefense: 5,
    reward: 10,
    size: "small",
    levelScale: [4, 1, 2, 0, 0]
}
export const skeletonStats = {
    level: 1,
    maxHealth: 15,
    name: 'Skeleton',
    img: "",
    imgGallery: [skeleton1, skeleton2, skeleton3, skeleton4],
    physicalAttack: 25,
    physicalDefense: 25,
    magicAttack: 20,
    magicDefense: 15,
    reward: 20,
    size: "medium",
    levelScale: [2, 5, 5, 3, 2]
}
export const zombieStats = {
    level: 1,
    maxHealth: 30,
    name: 'Zombie',
    img: "",
    imgGallery: [zombie1, zombie2, zombie3, zombie4],
    physicalAttack: 20,
    physicalDefense: 20,
    magicAttack: 15,
    magicDefense: 15,
    reward: 20,
    size: "medium",
    levelScale: [4, 4, 4, 2, 2]
}
export const ogreStats = {
    level: 1,
    maxHealth: 30,
    name: 'Ogre',
    img: "",
    imgGallery: [ogre1, ogre2, ogre3, ogre4],
    physicalAttack: 15,
    physicalDefense: 25,
    magicAttack: 10,
    magicDefense: 20,
    reward: 20,
    size: "medium",
    levelScale: [3, 2, 4, 2, 3]
}
export const lamiaStats = {
    level: 1,
    maxHealth: 25,
    name: 'Lamia',
    img: "",
    imgGallery: [lamia1, lamia2, lamia3, lamia4],
    physicalAttack: 15,
    physicalDefense: 15,
    magicAttack: 25,
    magicDefense: 20,
    reward: 20,
    size: "medium",
    levelScale: [3, 3, 3, 4, 3]
}
export const behemothStats = {
    level: 1,
    maxHealth: 40,
    name: 'Behemoth',
    img: "",
    imgGallery: [behemoth1, behemoth2, behemoth3, behemoth4],
    physicalAttack: 20,
    physicalDefense: 35,
    magicAttack: 20,
    magicDefense: 35,
    reward: 30,
    size: "large",
    levelScale: [4, 3, 4, 2, 3]
}
export const chimeraStats = {
    level: 1,
    maxHealth: 30,
    name: 'Chimera',
    img: "",
    imgGallery: [chimera1, chimera2, chimera3, chimera4],
    physicalAttack: 35,
    physicalDefense: 30,
    magicAttack:350,
    magicDefense: 20,
    reward: 30,
    size: "large",
    levelScale: [3, 4, 2, 4, 2]
}



export default PlayerCharacter