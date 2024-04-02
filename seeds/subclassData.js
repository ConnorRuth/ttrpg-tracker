const { Subclass } = require('../models');


const subclassData =[
    {
        "subclass_name": "Alchemist"
    },
    {
        "subclass_name": "Armorer"
    },
    {
        "subclass_name": "Artillerist"
    },
    {
        "subclass_name": "Battle Smith"
    },
    {
        "subclass_name": "Path of the Ancestral Guardian"
    },
    {
        "subclass_name": "Path of the Battlerager"
    },
    {
        "subclass_name": "Path of the Beast"
    },
    {
        "subclass_name": "Path of the Berserker"
    },
    {
        "subclass_name": "Path of the Giant"
    },
    {
        "subclass_name": "Path of the Storm Herald"
    },
    {
        "subclass_name": "Path of the Totem Warrior"
    },
    {
        "subclass_name": "Path of Wild Magic"
    },
    {
        "subclass_name": "Path of the Zealot"
    },
    {
        "subclass_name": "College of Creation"
    },
    {
        "subclass_name": "College of Eloquence"
    },
    {
        "subclass_name": "College of Glamour"
    },
    {
        "subclass_name": "College of Lore"
    },
    {
        "subclass_name": "College of Spirits"
    },
    {
        "subclass_name": "College of Swords"
    },
    {
        "subclass_name": "College of Valor"
    },
    {
        "subclass_name": "College of Whispers"
    },
    {
        "subclass_name": "Arcana Domain"
    },
    {
        "subclass_name": "Death Domain"
    },
    {
        "subclass_name": "Forge Domain"
    },
    {
        "subclass_name": "Grave Domain"
    },
    {
        "subclass_name": "Knowledge Domain"
    },
    {
        "subclass_name": "Life Domain"
    },
    {
        "subclass_name": "Light Domain"
    },
    {
        "subclass_name": "Nature Domain"
    },
    {
        "subclass_name": "Order Domain"
    },
    {
        "subclass_name": "Peace Domain"
    },
    {
        "subclass_name": " Tempest Domain"
    },
    {
        "subclass_name": "Trickery Domain"
    },
    {
        "subclass_name": "Twilight Domain"
    },
    {
        "subclass_name": "War Domain"
    },
    {
        "subclass_name": "Circle of Dreams"
    },
    {
        "subclass_name": "Circle of the Land"
    },
    {
        "subclass_name": "Circle of the Moon"
    },
    {
        "subclass_name": "Circle of the Shepherd"
    },
    {
        "subclass_name": "Circle of Spores"
    },
    {
        "subclass_name": "Circle of Stars"
    },
    {
        "subclass_name": "Circle of Wildfire"
    },
    {
        "subclass_name": "Arcane Archer"
    },
    {
        "subclass_name": "Banneret"
    },
    {
        "subclass_name": "Battle Master"
    },
    {
        "subclass_name": "Cavalier"
    },
    {
        "subclass_name": "Champion"
    },
    {
        "subclass_name": "Echo Knight"
    },
    {
        "subclass_name": "Eldritch Knight"
    },
    {
        "subclass_name": "Psi Warrior"
    },
    {
        "subclass_name": "Rune Knight"
    },
    {
        "subclass_name": "Samurai"
    },
    {
        "subclass_name": "Way of Mercy"
    },
    {
        "subclass_name": "Way of the Ascendant Dragon"
    },
    {
        "subclass_name": "Way of the Astral Self"
    },
    {
        "subclass_name": "Way of the Drunken Master"
    },
    {
        "subclass_name": "Way of the Four Elements"
    },
    {
        "subclass_name": "Way of the Kensei"
    },
    {
        "subclass_name": "Way of the Long Death"
    },
    {
        "subclass_name": "Way of the Open Hand"
    },
    {
        "subclass_name": "Way of Shadow"
    },
    {
        "subclass_name": "Way of the Sun Soul"
    },
    {
        "subclass_name": "Oath of the Ancients"
    },
    {
        "subclass_name": "Oath of Conquest"
    },
    {
        "subclass_name": "Oath of the Crown"
    },
    {
        "subclass_name": "Oath of Devotion"
    },
    {
        "subclass_name": "Oath of Glory"
    },
    {
        "subclass_name": "Oath of Redemption"
    },
    {
        "subclass_name": "Oath of Vengeance"
    },
    {
        "subclass_name": "Oath of the Watchers"
    },
    {
        "subclass_name": "Oathbreaker"
    },
    {
        "subclass_name": "Beast Master Conclave"
    },
    {
        "subclass_name": "Drakewarden"
    },
    {
        "subclass_name": "Fey Wanderer"
    },
    {
        "subclass_name": "Gloom Stalker Conclave"
    },
    {
        "subclass_name": "Horizon Walker Conclave"
    },
    {
        "subclass_name": "Hunter Conclave"
    },
    {
        "subclass_name": "Monster Slayer Conclave"
    },
    {
        "subclass_name": "Swarmkeeper"
    },
    {
        "subclass_name": "Arcane Trickster"
    },
    {
        "subclass_name": "Assassin"
    },
    {
        "subclass_name": "Inquisitive"
    },
    {
        "subclass_name": "Mastermind"
    },
    {
        "subclass_name": "Phantom"
    },
    {
        "subclass_name": "Scout"
    },
    {
        "subclass_name": "Soulknife"
    },
    {
        "subclass_name": "Swashbuckler"
    },
    {
        "subclass_name": "Thief"
    },
    {
        "subclass_name": "Aberrant Mind"
    },
    {
        "subclass_name": "Clockwork Soul"
    },
    {
        "subclass_name": "Draconic Bloodline"
    },
    {
        "subclass_name": "Divine Soul"
    },
    {
        "subclass_name": "Lunar Sorcery"
    },
    {
        "subclass_name": "Shadow Magic"
    },
    {
        "subclass_name": "Storm Sorcery"
    },
    {
        "subclass_name": "Wild Magic"
    },
    {
        "subclass_name": "Archfey"
    },
    {
        "subclass_name": "Celestial"
    },
    {
        "subclass_name": "Fathomless"
    },
    {
        "subclass_name": "Fiend"
    },
    {
        "subclass_name": "The Genie"
    },
    {
        "subclass_name": "Great Old One"
    },
    {
        "subclass_name": "Hexblade"
    },
    {
        "subclass_name": "Undead"
    },
    {
        "subclass_name": "Undying"
    },
    {
        "subclass_name": "School of Abjuration"
    },
    {
        "subclass_name": "School of Bladesinging"
    },
    {
        "subclass_name": "School of Chronurgy"
    },
    {
        "subclass_name": "School of Conjuration"
    },
    {
        "subclass_name": "School of Divination"
    },
    {
        "subclass_name": "School of Enchantment"
    },
    {
        "subclass_name": "School of Evocation"
    },
    {
        "subclass_name": "School of Graviturgy"
    },
    {
        "subclass_name": "School of Illusion"
    },
    {
        "subclass_name": "School of Necromancy"
    },
    {
        "subclass_name": "Order of Scribes"
    },
    {
        "subclass_name": "School of Transmutation"
    },
    {
        "subclass_name": "School of War Magic"
    }
];

const seedSubclasses= () => Subclass.bulkCreate(subclassData);

module.exports = seedSubclasses;