//Create message material
const messBeg1 = "There is only one Lord of the Ring";
const messBeg2 = "The time of the Elves is over";
const messBeg3 = "The board is set the pieces are moving ";
const messBeg4 = "But in the end it’s only a passing thing ";
const messBeg5 = "Maybe the paths that you each shall tread are already laid before your feet";

const messEnd1 = "And he does not share power"
const messEnd2 = "we let them stand alone"
const messEnd3 = "We come to it at last the great battle of our time"
const messEnd4 = "even darkness must pass"
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

//console.log(quoteMixer(messagesBeg, messageEnd));


//Method to create message about special item of the day(using random day generator)
const getRandomItem = () => {

    const items = ['One Ring', 'Mithril Shirt', 'Glamdring', 'Leaves of Lorien', 'Gendalf"s fireworks', 'Horn of Gondor', 'Elven rope'];
    const weekDays = ['Monday', 'Teusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    let randomDay = weekDays[Math.floor(Math.random() * weekDays.length)];
    let dayItem;

    switch(randomDay){
        case 'Monday':
            dayItem = items[0];
            break;
        case 'Teusday':
            return dayItem = items[1];
            break;
        case 'Wednesday':
            dayItem = items[2];
            break;
        case 'Thursday':
            dayItem = items[3];
            break;
        case 'Friday':
            dayItem = items[4];
            break;
        case 'Saturday':
            dayItem = items[5];
            break;
        case 'Sunday':
            dayItem = items[6];
            break;
    }

    return dayItem;

}

//Method to create a random question by deciding the day's lucky number

const getluckyNumber = () => {

    let luckyNumber; 
    const rings = [3, 7, 9, 1];//Number of rings given to each race
    const returnOfTheKing = [52, 1488, 3, 263, 11, 6];//Notable numbers of making of third movie The Return of the King

    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');

    if(day % 2 == 0){
        luckyNumber = rings[Math.floor(Math.random() * rings.length)];
    }else{
        luckyNumber = returnOfTheKing[Math.floor(Math.random() * returnOfTheKing.length)];
    }

    return luckyNumber;
}

//Method to get a question based on the time of the day
const getQuestion = () => {

    const question1 = "Where was Gondor when Westfold fell?";
    const question2 = "What about second breakfast?";
    const question3 = "What's 'taters' precious? What's 'taters', eh?";
    const question4 = "Can one simply walk into Mordor?";

    let questionAsked;
    let time = getDayTime();
    switch(time){
        case 'morning':
            questionAsked = question4;
            break;
        case 'afternoon':
            questionAsked = question2;
            break;
        case 'evening':
            questionAsked = question3;
            break;
        case 'night':
            questionAsked = question1;
            break;
    }

    return questionAsked;
     
}

//Method to get current time of the day
const getDayTime = () => {

    let currentTime;
    let d = new Date();
    //const currentHour = parseInt(d.getHours());
    let currentHour = 12;
    if(currentHour >= 6 && currentHour < 12){
        currentTime = 'morning';
        }else if(currentHour >= 12 && currentHour < 18){
        currentTime = 'afternoon';
        }else if(currentHour >= 18 && currentHour < 22){
        currentTime = 'evening';
        }else{
        currentTime = 'night';
        }

    return currentTime;
     
}


let quoteOfTheDay = quoteMixer(messagesBeg,messageEnd);
let luckyNumberOfTheDay = getluckyNumber();
let itemOfTheDay = getRandomItem();
let questionOfTheDay = getQuestion();

const message = `Welcome to the "Gandalf and friends" inspirations for the day!
    \nOur quote for you today is '${quoteOfTheDay}'. We hope it inspires you.
    \nThe number to bring you luck today is ${luckyNumberOfTheDay}.
    \nYou should carry ${itemOfTheDay} with you today. It might come in hand!
    \nAnd you should question yourself about ${questionOfTheDay}
    \nWe really hope you appreciate our insight.`

console.log(message);
//getDayTime();
//console.log(getDayTime());