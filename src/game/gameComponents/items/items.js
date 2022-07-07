

class Item {
    
    constructor(id, name, type, description, value, paMod, pdMod, maMod, mdMod, effect, img, quantity, durability){
        this.id = id;
        this.name = name;
        this.type = type;
        this.description = description;
        this.value = value;
        this.paMod = paMod;
        this.pdMod = pdMod;
        this.maMod = maMod;
        this.mdMod = mdMod;
        this.effect = effect;
        this.img = img;
        this.quantity = quantity;
        this.durability = durability;
    }

}

// flint and steel
// incense
// torch
// lockpick
// health drop

export const lockpick = {
    name: "Lockpick",
    type: "Tool",
    description: "A fragile pick that can help you open locks.",
    value: 30,
    paMod: 0,
    pdMod: 0,
    maMod: 0,
    mdMod: 0,
    effect: {},
    img: "",
    quantity: 1,
    durability: 1
}
export const torch = {
    name: "Torch",
    type: "Tool",
    description: "If lit by a fire source, it will provide substantial light.",
    value: 20,
    paMod: 0,
    pdMod: 0,
    maMod: 0,
    mdMod: 0,
    effect: {},
    img: "",
    quantity: 1,
    durability: 1
}
export const incense = {
    name: "Incense",
    type: "Tool",
    description: "If burned by a fire source, it's smoke will ward evil.",
    value: 20,
    paMod: 0,
    pdMod: 0,
    maMod: 0,
    mdMod: 0,
    effect: {},
    img: "",
    quantity: 1,
    durability: 1
}
export const flintAndSteel = {
    name: "Flint and Steel",
    type: "Tool",
    description: "Strike together to light fires. Breaks after some use.",
    value: 100,
    paMod: 0,
    pdMod: 0,
    maMod: 0,
    mdMod: 0,
    effect: {},
    img: "",
    quantity: 1,
    durability: 5
}
export const holyWater = {
    name: "Holy Water",
    type: "Tool",
    description: "A vial of holy water, capable of cleansing curses.",
    value: 50,
    paMod: 0,
    pdMod: 0,
    maMod: 0,
    mdMod: 0,
    effect: {},
    img: "",
    quantity: 1,
    durability: 1
}
export const healthDrop = {
    name: "Health Drop",
    type: "Tool",
    description: "A vial of healing syrup.",
    value: 50,
    paMod: 0,
    pdMod: 0,
    maMod: 0,
    mdMod: 0,
    effect: {},
    img: "",
    quantity: 1,
    durability: 1
}
