

class Event {
    
    constructor(level, img, name, description, itemKey, skillKey, pass, fail){
        this.level = level;
        this.img = img;
        this.name = name;
        this.description = description;
        this.itemKey = itemKey;
        this.skillKey = skillKey;
        this.pass = pass;
        this.fail = fail;
    }

}

// flint and steel : pDef : Brambles
// incense : mDef : plague
// torch : mAtk : Darkness
// lockpick : pAtk : Locked Door


export const lockedDoor = {
    level: 1,
    img: "",
    name: "Locked Door",
    description: "The path is blocked by a large door, sealed by an intimidating lock. A lockpick could make quick work of it. Otherwise, you'll have no choice but to breakthrough somehow.",
    itemKey: "Lockpick",
    skillKey: "pAtk",
    pass: {},
    fail: {},
    options: ["Use a Lockpick", "Break it down"]
}
export const thorns = {
    level: 1,
    img: "",
    name: "Darkworld Thorns",
    description: "A sprawling thicket of vicious thorns curl and wretch before you, blocking the path. You might have luck burning them away, or you could attempt to navigate through them. You'll need thick skin to get through without serious injuries.",
    itemKey: "Flint-and-Steel",
    skillKey: "pDef",
    pass: {},
    fail: {},
    options: ["Use a Flint-and-Steel", "Push through them"]
}
export const darkness = {
    level: 1,
    img: "",
    name: "Unsettling Darkness",
    description: "The room before you is pitch black and the darkness hums ominously. With fire and a torch, you might make it through unscathed. Without it, you are easy prey to whatever lurks within.",
    itemKey: "Flint-and-Steel, Torch",
    skillKey: "mAtk",
    pass: {},
    fail: {},
    options: ["Light a torch", "Navigate the darkness"]
}
export const miasma = {
    level: 1,
    img: "",
    name: "Weeping Miasma",
    description: "Malicious fumes spill across the room; fingers of the Weeping Plague. Burning incense could cleanse the air and grant you safe passage. Trudging through without it will expose you to plague.",
    itemKey: "Flint-and-Steel, Incense",
    skillKey: "mDef",
    pass: {},
    fail: {},
    options: ["Burn Incense", "Hold your breath and run through"]
}

export const lockedChest = {
    level: 1,
    img: "",
    name: "Locked Chest",
    description: "An locked and battered chest, still intact inspite of obvious attempts to break it open, lies before you.",
    itemKey: "Lockpick",
    skillKey: "",
    pass: {},
    fail: {},
    options: ["Use a Lockpick", "Ignore the chest"]
}

export const cursedIdol = {
    level: 1,
    img: "",
    name: "Cursed Idol",
    description: "The idol of a strange god stands before you. It's curse is fatal, but if cleansed it could offer otherworldly power.",
    itemKey: "Holy Water",
    skillKey: "",
    pass: {},
    fail: {},
    options: ["Use Holy Water", "Ignore the Idol"]
}
export const emptyRoom = {
    level: 1,
    img: "",
    name: "Empty Room",
    description: "The way before you is clear of obstacles. This would be a good place to rest, if you so choose.",
    itemKey: "",
    skillKey: "",
    pass: {},
    fail: {},
    options: ["Rest awhile", "Carry on"]
}

