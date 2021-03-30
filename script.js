//Create message material
const messBeg1 = "There is only one Lord of the Ring";
const messBeg2 = "The time of the Elves is over";
const messBeg3 = "The board is set the pieces are moving ";
const messBeg4 = "But in the end it’s only a passing thing ";
const messBeg5 = "Maybe the paths that you each shall tread are already laid before your feet";

const messEnd1 = "And he does not share power"
const messEnd2 = "we let them stand alone"
const messEnd3 = "We come to it at last the great battle of our time"
const messEnd4 = "this shadow even darkness must pass"
const messEnd5 = "He arrives precisely when he means to"

//Create a source to take messages from
const messagesBeg = [messBeg1, messBeg2, messBeg3, messBeg4,messBeg5];
//console.log(messagesBeg);
const messageEnd = [messEnd1, messEnd2, messEnd3, messEnd4, messEnd5];
//Create a method to make a quite of the day by mixing up two parts of message:

const quoteMixer = (beginningArr, endingArr) => {

    let newBeginning = beginningArr[Math.floor(Math.random() * beginningArr.length)];
    let newEnding = endingArr[Math.floor(Math.random() * endingArr.length)];

    
    return `${newBeginning} ${newEnding}`;
}

console.log(quoteMixer(messagesBeg, messageEnd));


//Method to create message about special item of the day(using random day generator)
const dayItem = ['One Ring', 'Mithril Shirt', 'Glamdring', 'Leaves of Lorien', 'Gendalf"s fireworks', 'Horn of Gondor', 'Elven rope'];
const weekDays = ['Monday', 'Teusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

