//priority:999


import { $ItemStack$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ItemEffect } from "packages/se/mickelus/tetra/effect/$ItemEffect"
import { $ModularItem } from "packages/se/mickelus/tetra/items/modular/$ModularItem"

/**
 * @typedef {"bone"|"fabric"|"fibre"|"gem"|"rod"|"metal"|"misc"|"scale"|"skin"|"socket"|"stone"|"wood"} categoryType
 */



/**@type {new basic_tetra_} */
let basic_tetra = function () {
    this.json = {}
}
basic_tetra.prototype.modifyJson = function (callback) {
    callback(this.json)
    return this
}
basic_tetra.prototype.showJson = function () {
    console.log(this.json)
    Client.tell(this.json)
    return this
}

/**@type {new( key:string , category:categoryType , primary:number , secondary:number , tertiary:number , durability:number , integrityCost:number , integrityGain:number , magicCapacity:number , toolLevel:number , toolEfficiency:number , textures:("default"|"wood")[] , material:({ items?:$ItemStack$Type[] , tag?:string , count?:number , nbt?:{} }) , tints:{ glyph:string , texture:string } )tetra_materials_} */
let tetra_materials = function (
    key,
    category,
    primary,
    secondary,
    tertiary,
    durability,
    integrityCost,
    integrityGain,
    magicCapacity,
    toolLevel,
    toolEfficiency,
    textures,
    material,
    tints
) {
    this.json = {
        key: key,
        category: category,
        primary: primary,
        secondary: secondary,
        tertiary: tertiary,
        durability: durability,
        integrityGain: integrityGain,
        integrityCost: integrityCost,
        magicCapacity: magicCapacity,
        toolLevel: toolLevel,
        toolEfficiency: toolEfficiency,
        textures: textures,
        material: material,
        tints: tints
    }
}
tetra_materials.prototype.setRequiredTools = function (requiredTools) {
    this.json.requiredTools = requiredTools
    return this
}
tetra_materials.prototype.setExperienceCost = function (cost) {
    this.json.experienceCost = cost
    return this
}
tetra_materials.prototype.setAttributes = function (attributes) {
    this.json.attributes = attributes
    return this
}
tetra_materials.prototype.setEffects = function (effects) {
    this.json.effects = effects
    return this
}
tetra_materials.prototype.sethidden = function (boolean) {
    boolean === undefined ? this.json.hidden = true : this.json.hidden = boolean
    return this
}
tetra_materials.prototype.setReplace = function (boolean) {
    boolean === undefined ? this.json.replace = true : this.json.replace = boolean
    return this
}
tetra_materials.prototype.builder = function (event) {
    let category = this.json.category
    this.json.category = category == 'rod' ? 'misc' : category
    event.addJson(`tetra:materials/${category}/${this.json.key}`, this.json)
}
//继承原型
Object.assign(tetra_materials.prototype, basic_tetra.prototype)






ServerEvents.highPriorityData(e => {
    new tetra_materials(
        'magebloom_fiber',
        'fibre',//纤维
        1.8,
        1.3,
        2.9,
        264,
        1,
        5,
        124,
        0,
        0,
        [
            "default"
        ],
        { items: ['ars_nouveau:magebloom_fiber'] },
        {
            glyph: Color.rgba(215, 38, 231, 0.75).getHexJS().substring(1),
            texture: Color.rgba(223, 53, 212, 0.75).getHexJS().substring(1)
        }
    ).setReplace(true)
        .setAttributes({ 'ars_nouveau:ars_nouveau.perk.max_mana': 76, 'ars_nouveau:ars_nouveau.perk.mana_regen': 0.2 })
        .setExperienceCost(50)
        .setRequiredTools({ cut: 2 })
        .builder(e)

    new tetra_materials(
        'infused_silk',
        'fabric',
        0.9,
        2.5,
        3.1,
        59,
        1,
        4,
        85,
        0,
        0,
        [
            "default"
        ],
        { items: ['mna:infused_silk'] },
        {
            glyph: Color.rgba(38, 115, 231, 0.75).getHexJS().substring(1),
            texture: Color.rgba(51, 108, 242, 0.75).getHexJS().substring(1)
        }
    ).setReplace(true)
        .setRequiredTools({ cut: 2 })
        .builder(e)

    new tetra_materials(
        'infused_thread',
        'fibre',
        1.5,
        1.4,
        1.7,
        139,
        1,
        4,
        98,
        0,
        0,
        [
            "default"
        ],
        { items: ['mna:infused_thread'] },
        {
            glyph: Color.rgba(38, 112, 231, 0.75).getHexJS().substring(1),
            texture: Color.rgba(53, 130, 223, 0.75).getHexJS().substring(1)
        }
    ).setReplace(true)
        .setEffects({ 'yi:power': 20680 })
        .setRequiredTools({ cut: 2 })
        .builder(e)

        new tetra_materials(
            'energy_cell',
            'socket',
            0,
            0,
            0,
            46,
            1,
            0,
            0,
            0,
            0,
            ['default'],
            {
                items:['ae2:energy_cell'],
                nbt:`{internalCurrentPower:200000.0d,internalMaxPower:200000.0d}`
            },
            {
                glyph: Color.rgba(38, 112, 231, 0.75).getHexJS().substring(1),
                texture: Color.rgba(53, 130, 223, 0.75).getHexJS().substring(1)
            }
        )
        .setEffects({'yi:power':10086})
        .modifyJson(j=>{
            j.aspects = {"throwable":2}
        })
        .setExperienceCost(15)
        .builder(e)

        new tetra_materials(
            'crystal_resonance_generator',
            'socket',
            0,
            0,
            0,
            46,
            1,
            0,
            5000,
            0,
            0,
            ['default'],
            {
                items:['ae2:crystal_resonance_generator'],
            },
            {
                glyph: Color.rgba(38, 112, 231, 0.75).getHexJS().substring(1),
                texture: Color.rgba(53, 130, 223, 0.75).getHexJS().substring(1)
            }
        )
        .modifyJson(j=>{
            j.aspects = {throwable:1}
        })
        .setEffects({'yi:vibration':10,'yi:mana_addition':5,'yi:mana_drain':20,'yi:energy_addition':5,'yi:energy_drain':20})
        .setExperienceCost(15)
        .builder(e)





})
/*
ItemEvents.rightClicked(e => {
    let t = e.item.getItem()
    if (t instanceof $ModularItem) {
        e.player.tell(t.getEffectLevel(e.item, $ItemEffect.get('yi:power')))
        e.player.tell(t.getEffectEfficiency(e.item, $ItemEffect.get('yi:power')))
    }

})*/


