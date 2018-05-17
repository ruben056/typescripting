//target must be es6 in tsconfig.ini!!!

const inventory = [
{name: 'apples', quantity: 2},
{name: 'bananas', quantity: 0},
{name: 'cherries', quantity: 5}
];

const apples = inventory.find(e => e.name === 'apples');
console.log(!!apples ? apples.quantity : 0);

// ONLY RETURNS FIRST MATCH!!!!!
const allButCheries = inventory.find(e => e.name !== 'cherries');
console.log(JSON.stringify(allButCheries)); //--> only apples
