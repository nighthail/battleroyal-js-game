//Player Stats
export const player =
{
  NAME: "YOU",
  HP: 7,
  AP: 7,
  AG: 10,
  ST: 10,
  PE: 10,
  HD: 10,
  WEAPON: 2
}

//Enemy Stats
export const enemy =
{
  NAME: "Zombie Girl",
  HP: 10,
  AP: 6,
  AG: 10,
  ST: 10,
  PE: 10,
  WEAPON: 2,
  INTRO: "A random zombie appears!"
}

export const start =
{
  PLACE: "shed",
  INJURIES: [""],
  HOUR: 0,
  INVENTORY: [""], // import item-class?
  EQUIPPED_WEAPON: "",
  EQUIPPED_BUFF: "",
}

//WEAPONS
//Game started


//randomize given weapon but only once
let allWeapons = ["knife", 'meat cleaver', 'baseballbat']

const givenWeapon = "knife" //allWeapons[Math.floor(Math.random() * allWeapons.length)]
//localStorage.setItem("currentWeapon", givenWeapon)


/*
KNIFE = {
  NAME: "KNIFE",
  AP: 3,
  DMG: MATH.FLOOR(3 * player.ST / 9),
}

CLEAVER = {
  NAME: "MEAT CLEAVER",
  AP: 4,
  DMG: MATH.FLOOR(4 * player.ST / 9),
}
BASEBALLBAT = {
  NAME: "BASEBALL BAT",
  AP: 3,
  DMG: MATH.FLOOR(4 * player.ST / 9),
}


/*
All WEAPONS:

KNIFE [AP:3, MATH.FLOOR(DMG:3 * ST /9)]
MEAT CLEAVER [AP:4, MATH.FLOOR(DMG:4 * ST /9)]
BASEBALL BAT [AP:3, MATH.FLOOR(DMG:3 * ST /9)]
GOLF IRON [AP:3, MATH.FLOOR(DMG:2 * ST /9)]
MACE [AP:5, MATH.FLOOR(DMG:5 * ST /9)]
KATANA [AP:3, MATH.FLOOR(DMG:5 * ST /9)]
BRANCH [AP:4, MATH.FLOOR(DMG:2 * ST /9)]


NO WEAPON:
[AP:3, MATH.FLOOR(DMG:1 * ST /9)]

ALL BUFFS:
LEATHER JACKET + HP
RUNNING SHOES + AG
BINOCULARS + PE
GUILLE SUIT + HIDING
GLOWING ROCK +HP +AG +PE +ST +AP -HIDING


ALL FOOD/HEALTH ITEMS:
BANDAGE +2 HP (-1) INJURY
FIRST AID +3 HP (-1) INJURY
MORPHINE +3 HP -PE +ST
BANDAID + 1HP
ENERGY DRINK +2HP +AG
POTATO CHIPS +2HP
CAN OF BEANS +3HP
BEEF JERKY +3HP

ALL INJURIES
BROKEN ANKLE -AG -AP
TORN MUSCLE -AP -ST
HEAVY BLEEDING -HIDING -AP
CONCUSION -AG -PE
SPRAIN -AG

KEY ITEMS
RUSTY KEY
GASOLINE -AG -HD
*/


/*

has to be saved between sessions:
player:
hp
ag
st
pe
ap
hi


injuries


place:
currentPlace
hour

inventory_item(s)
current_weapon
current_buff


*/
