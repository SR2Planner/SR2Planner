const placeholderType = { name: "None", image: "placeholder.png" };

const largoableSlimeTypes = [
  { name: "Angler Slime", image: "slimes/angler.png" },
  { name: "Batty Slime", image: "slimes/batty.png" },
  { name: "Boom Slime", image: "slimes/boom.png" },
  { name: "Cotton Slime", image: "slimes/cotton.png" },
  { name: "Crystal Slime", image: "slimes/crystal.png" },
  { name: "Dervish Slime", image: "slimes/dervish.png" },
  { name: "Flutter Slime", image: "slimes/flutter.png" },
  { name: "Honey Slime", image: "slimes/honey.png" },
  { name: "Hunter Slime", image: "slimes/hunter.png" },
  { name: "Hyper Slime", image: "slimes/hyper.png" },
  { name: "Phosphor Slime", image: "slimes/phosphor.png" },
  { name: "Pink Slime", image: "slimes/pink.png" },
  { name: "Ringtail Slime", image: "slimes/ringtail.png" },
  { name: "Rock Slime", image: "slimes/rock.png" },
  { name: "Saber Slime", image: "slimes/saber.png" },
  { name: "Sloomber Slime", image: "slimes/sloomber.png" },
  { name: "Tabby Slime", image: "slimes/tabby.png" },
  { name: "Tangle Slime", image: "slimes/tangle.png" },
  { name: "Twin Slime", image: "slimes/twin.png" },
];

const yolkySlimeType = { name: "Yolky Slime", image: "slimes/yolky.png" };

const meatTypes = [
  { name: "Briar Hen", image: "meats/briarHen.png" },
  { name: "Candied Hen", image: "meats/candiedHen.png" },
  { name: "Hen Hen", image: "meats/henHen.png" },
  { name: "Painted Hen", image: "meats/paintedHen.png" },
  { name: "Sea Hen", image: "meats/seaHen.png" },
  { name: "Stony Hen", image: "meats/stonyHen.png" },
  { name: "Thundercluck", image: "meats/thundercluck.png" },
  { name: "Mixed Meats", image: "meats/mixedMeats.png" },
];

export const coopTypes = [...meatTypes, yolkySlimeType, placeholderType];

export const fruitTypes = [
  { name: "Cuberry", image: "fruits/cuberry.png" },
  { name: "Mint Mango", image: "fruits/mintMango.png" },
  { name: "Pogofruit", image: "fruits/pogofruit.png" },
  { name: "Pomegranite", image: "fruits/pomegranite.png" },
  { name: "Polaricherry", image: "fruits/polaricherry.png" },
  { name: "Prickle Pear", image: "fruits/pricklePear.png" },
  placeholderType,
];

export const veggieTypes = [
  { name: "Carrot", image: "veggies/carrot.png" },
  { name: "Heart Beat", image: "veggies/heartBeat.png" },
  { name: "Odd Onion", image: "veggies/oddOnion.png" },
  { name: "Turbo Tater", image: "veggies/turboTater.png" },
  { name: "Water Lettuce", image: "veggies/waterLettuce.png" },
  placeholderType,
];

export const corralSlimeTypes = [...largoableSlimeTypes, yolkySlimeType, placeholderType]

export const freeRangeTypes = [...largoableSlimeTypes, yolkySlimeType, ...meatTypes, placeholderType];

export const incineratorSlimeTypes = [
  { name: "Fire", image: "slimes/fire.png" },
  placeholderType,
];

export const pondSlimeTypes = [
  { name: "Puddle", image: "slimes/puddle.png" },
  placeholderType,
];

export const plotTypes = [
  { name: "Corral", image: "plots/corral.png" },
  { name: "Coop", image: "plots/coop.png" },
  { name: "Fruit Tree", image: "plots/garden.png" },
  { name: "Veggie Patch", image: "plots/garden.png" },
  { name: "Incinerator", image: "plots/incinerator.png" },
  { name: "Pond", image: "plots/pond.png" },
  { name: "Silo", image: "plots/silo.png" },
  placeholderType,
];
