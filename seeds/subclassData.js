const  Subclass  = require('../models/subclass');


const subclassData =[
    {
        "subclass_name": "Alchemist",
        "associated_class": 1
    },
    {
        "subclass_name": "Armorer",
        "associated_class": 1
    },
    {
        "subclass_name": "Artillerist",
        "associated_class": 1
    },
    {
        "subclass_name": "Battle Smith",
        "associated_class": 1
    },
    {
        "subclass_name": "Path of the Ancestral Guardian",
        "associated_class": 3
    },
    {
        "subclass_name": "Path of the Battlerager",
        "associated_class": 3
    },
    {
        "subclass_name": "Path of the Beast",
        "associated_class": 3
    },
    {
        "subclass_name": "Path of the Berserker",
        "associated_class": 3
    },
    {
        "subclass_name": "Path of the Giant",
        "associated_class": 3
    },
    {
        "subclass_name": "Path of the Storm Herald",
        "associated_class": 3
    },
    {
        "subclass_name": "Path of the Totem Warrior",
        "associated_class": 3
    },
    {
        "subclass_name": "Path of Wild Magic",
        "associated_class": 3
    },
    {
        "subclass_name": "Path of the Zealot",
        "associated_class": 3
    },
    {
        "subclass_name": "College of Creation",
        "associated_class": 2
    },
    {
        "subclass_name": "College of Eloquence",
        "associated_class": 2
    },
    {
        "subclass_name": "College of Glamour",
        "associated_class": 2
    },
    {
        "subclass_name": "College of Lore",
        "associated_class": 2
    },
    {
        "subclass_name": "College of Spirits",
        "associated_class": 2
    },
    {
        "subclass_name": "College of Swords",
        "associated_class": 2
    },
    {
        "subclass_name": "College of Valor",
        "associated_class": 2
    },
    {
        "subclass_name": "College of Whispers",
        "associated_class": 2
    },
    {
        "subclass_name": "Arcana Domain",
        "associated_class": 4
    },
    {
        "subclass_name": "Death Domain",
        "associated_class": 4
    },
    {
        "subclass_name": "Forge Domain",
        "associated_class": 4
    },
    {
        "subclass_name": "Grave Domain",
        "associated_class": 4
    },
    {
        "subclass_name": "Knowledge Domain",
        "associated_class": 4
    },
    {
        "subclass_name": "Life Domain",
        "associated_class": 4
    },
    {
        "subclass_name": "Light Domain",
        "associated_class": 4
    },
    {
        "subclass_name": "Nature Domain",
        "associated_class": 4
    },
    {
        "subclass_name": "Order Domain",
        "associated_class": 4
    },
    {
        "subclass_name": "Peace Domain",
        "associated_class": 4
    },
    {
        "subclass_name": " Tempest Domain",
        "associated_class": 4
    },
    {
        "subclass_name": "Trickery Domain",
        "associated_class": 4
    },
    {
        "subclass_name": "Twilight Domain",
        "associated_class": 4
    },
    {
        "subclass_name": "War Domain",
        "associated_class": 4
    },
    {
        "subclass_name": "Circle of Dreams",
        "associated_class": 5
    },
    {
        "subclass_name": "Circle of the Land",
        "associated_class": 5
    },
    {
        "subclass_name": "Circle of the Moon",
        "associated_class": 5
    },
    {
        "subclass_name": "Circle of the Shepherd",
        "associated_class": 5
    },
    {
        "subclass_name": "Circle of Spores",
        "associated_class": 5
    },
    {
        "subclass_name": "Circle of Stars",
        "associated_class": 5
    },
    {
        "subclass_name": "Circle of Wildfire",
        "associated_class": 5
    },
    {
        "subclass_name": "Arcane Archer",
        "associated_class": 6
    },
    {
        "subclass_name": "Banneret",
        "associated_class": 6
    },
    {
        "subclass_name": "Battle Master",
        "associated_class": 6
    },
    {
        "subclass_name": "Cavalier",
        "associated_class": 6
    },
    {
        "subclass_name": "Champion",
        "associated_class": 6
    },
    {
        "subclass_name": "Echo Knight",
        "associated_class": 6
    },
    {
        "subclass_name": "Eldritch Knight",
        "associated_class": 6
    },
    {
        "subclass_name": "Psi Warrior",
        "associated_class": 6
    },
    {
        "subclass_name": "Rune Knight",
        "associated_class": 6
    },
    {
        "subclass_name": "Samurai",
        "associated_class": 6
    },
    {
        "subclass_name": "Way of Mercy",
        "associated_class": 7
    },
    {
        "subclass_name": "Way of the Ascendant Dragon",
        "associated_class": 7
    },
    {
        "subclass_name": "Way of the Astral Self",
        "associated_class": 7
    },
    {
        "subclass_name": "Way of the Drunken Master",
        "associated_class": 7
    },
    {
        "subclass_name": "Way of the Four Elements",
        "associated_class": 7
    },
    {
        "subclass_name": "Way of the Kensei",
        "associated_class": 7
    },
    {
        "subclass_name": "Way of the Long Death",
        "associated_class": 7
    },
    {
        "subclass_name": "Way of the Open Hand",
        "associated_class": 7
    },
    {
        "subclass_name": "Way of Shadow",
        "associated_class": 7
    },
    {
        "subclass_name": "Way of the Sun Soul",
        "associated_class": 7
    },
    {
        "subclass_name": "Oath of the Ancients",
        "associated_class": 8
    },
    {
        "subclass_name": "Oath of Conquest",
        "associated_class": 8
    },
    {
        "subclass_name": "Oath of the Crown",
        "associated_class": 8
    },
    {
        "subclass_name": "Oath of Devotion",
        "associated_class": 8
    },
    {
        "subclass_name": "Oath of Glory",
        "associated_class": 8
    },
    {
        "subclass_name": "Oath of Redemption",
        "associated_class": 8
    },
    {
        "subclass_name": "Oath of Vengeance",
        "associated_class": 8
    },
    {
        "subclass_name": "Oath of the Watchers",
        "associated_class": 8
    },
    {
        "subclass_name": "Oathbreaker",
        "associated_class": 8
    },
    {
        "subclass_name": "Beast Master Conclave",
        "associated_class": 9
    },
    {
        "subclass_name": "Drakewarden",
        "associated_class": 9
    },
    {
        "subclass_name": "Fey Wanderer",
        "associated_class": 9
    },
    {
        "subclass_name": "Gloom Stalker Conclave",
        "associated_class": 9
    },
    {
        "subclass_name": "Horizon Walker Conclave",
        "associated_class": 9
    },
    {
        "subclass_name": "Hunter Conclave",
        "associated_class": 9
    },
    {
        "subclass_name": "Monster Slayer Conclave",
        "associated_class": 9
    },
    {
        "subclass_name": "Swarmkeeper",
        "associated_class": 9
    },
    {
        "subclass_name": "Arcane Trickster",
        "associated_class": 10
    },
    {
        "subclass_name": "Assassin",
        "associated_class": 10
    },
    {
        "subclass_name": "Inquisitive",
        "associated_class": 10
    },
    {
        "subclass_name": "Mastermind",
        "associated_class": 10
    },
    {
        "subclass_name": "Phantom",
        "associated_class": 10
    },
    {
        "subclass_name": "Scout",
        "associated_class": 10
    },
    {
        "subclass_name": "Soulknife",
        "associated_class": 10
    },
    {
        "subclass_name": "Swashbuckler",
        "associated_class": 10
    },
    {
        "subclass_name": "Thief",
        "associated_class": 10
    },
    {
        "subclass_name": "Aberrant Mind",
        "associated_class": 11
    },
    {
        "subclass_name": "Clockwork Soul",
        "associated_class": 11
    },
    {
        "subclass_name": "Draconic Bloodline",
        "associated_class": 11
    },
    {
        "subclass_name": "Divine Soul",
        "associated_class": 11
    },
    {
        "subclass_name": "Lunar Sorcery",
        "associated_class": 11
    },
    {
        "subclass_name": "Shadow Magic",
        "associated_class": 11
    },
    {
        "subclass_name": "Storm Sorcery",
        "associated_class": 11
    },
    {
        "subclass_name": "Wild Magic",
        "associated_class": 11
    },
    {
        "subclass_name": "Archfey",
        "associated_class": 12
    },
    {
        "subclass_name": "Celestial",
        "associated_class": 12
    },
    {
        "subclass_name": "Fathomless",
        "associated_class": 12
    },
    {
        "subclass_name": "Fiend",
        "associated_class": 12
    },
    {
        "subclass_name": "The Genie",
        "associated_class": 12
    },
    {
        "subclass_name": "Great Old One",
        "associated_class": 12
    },
    {
        "subclass_name": "Hexblade",
        "associated_class": 12
    },
    {
        "subclass_name": "Undead",
        "associated_class": 12
    },
    {
        "subclass_name": "Undying",
        "associated_class": 12
    },
    {
        "subclass_name": "School of Abjuration",
        "associated_class": 13
    },
    {
        "subclass_name": "School of Bladesinging",
        "associated_class": 13
    },
    {
        "subclass_name": "School of Chronurgy",
        "associated_class": 13
    },
    {
        "subclass_name": "School of Conjuration",
        "associated_class": 13
    },
    {
        "subclass_name": "School of Divination",
        "associated_class": 13
    },
    {
        "subclass_name": "School of Enchantment",
        "associated_class": 13
    },
    {
        "subclass_name": "School of Evocation",
        "associated_class": 13
    },
    {
        "subclass_name": "School of Graviturgy",
        "associated_class": 13
    },
    {
        "subclass_name": "School of Illusion",
        "associated_class": 13
    },
    {
        "subclass_name": "School of Necromancy",
        "associated_class": 13
    },
    {
        "subclass_name": "Order of Scribes",
        "associated_class": 13
    },
    {
        "subclass_name": "School of Transmutation",
        "associated_class": 13
    },
    {
        "subclass_name": "School of War Magic",
        "associated_class": 13
    }
];

const seedSubclasses= () => Subclass.bulkCreate(subclassData);

module.exports = seedSubclasses;