
//HAGO UNA FUNCIÓN
//HAGO UNA PROMESA QUE DEBA RETORNAR ESA FUCNIÓN
//HAGO LA OTRA FUNCIÓN
//HAGO UNA PROMESA QUE DEBA ESPERAR A QUE SE REALICE LA PRIMERA FUNCIÓN 


let totalAmount = []; 
function mainDishOffer () {

alert("Welcome to the Bottega Diner!");

const mains = [
    { name: "Pizza", Price: 10 },
    { name: "Hamburger", Price: 8 },
    { name: "Pasta", Price: 15 },
    { name: "Lasagna", Price: 9 },
    { name: "Vegetable Mix", Price: 12 },
]

var i = 0;

function hola () {
  while (i < mains.length) {
    console.log(mains[i].name);
    i++;
  }
}


hola();

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(hola()), 1000)
  });

  let result = await promise; 
  let mainChoice = prompt("Please, select a dish from the Main Menu");
    
if (mainChoice.toLowerCase() === "pizza") {
  alert("Wow! I'm a Pizza lover too!");
  totalAmount.push(10);
} else if (mainChoice.toLowerCase() === "hamburger") {
  alert("Gutten elektionen Frauline!!");
  totalAmount.push(8);
} else if (mainChoice.toLowerCase() === "pasta") {
  alert("Ohhh Italian food... ");
  totalAmount.push(15);
} else if (mainChoice.toLowerCase() === "lasagna") {
  alert("Uhhmmm are you sure you are ready, Sir??"); 
  totalAmount.push(9);
} else if (mainChoice.toLowerCase() === "vegetable mix") {
  alert("Okayy, marchando una Operación bikini!!");
  totalAmount.push(12);
} else {
  //ENCONTRAR LA MANERA DE QUE SI NO ESCOGEN UN ITEM DEL MENÚ SE VUEKVA A MANDAR EL EMNSAJE UNA Y OTRA VEZ
  let mainChoice = prompt("Please, select a  dish from the Main Menu");
}

console.log(`That would be ${totalAmount[0]} Euros!`);

}

f();
}


//sides

function sideDishOffer () {

  alert("These are our sides, please pick two:");
  
  const sides = [
    { name: "Ham and Cheese", Price: 4 },
    { name: "Lettuce flower", Price: 5 },
    { name: "Mouse bites", Price: 7 },
    { name: "Cucumber Puré", Price: 3 },
]
  
  var i = 0;
  
  function hola () {
    while (i < sides.length) {
      console.log(sides[i].name);
      i++;
    }
  }
  
  
  hola();

  
  async function f() {
  
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(hola()), 1000)
    });
  
    let result = await promise; 
    let sideChoice1 = prompt("Please, select Dish 1:");
      
  if (sideChoice1.toLowerCase() === "ham and cheese") {
    alert("Wow! It is gonna be interesting...!");
    totalAmount.push(4);
  } else if (sideChoice1.toLowerCase() === "lettuce flower") {
    alert("Eating healthy... I see...");
    totalAmount.push(5);
  } else if (sideChoice1.toLowerCase() === "mouse bites") {
    alert("The best option Sir!... ");
    totalAmount.push(7);
  } else if (sideChoice1.toLowerCase() === "cucumber puré") {
    alert("Idon't know if we have any left..."); 
    totalAmount.push(3);
  } else {
    //ENCONTRAR LA MANERA DE QUE SI NO ESCOGEN UN ITEM DEL MENÚ SE VUEKVA A MANDAR EL EMNSAJE UNA Y OTRA VEZ
    let mainChoice = prompt("Please, select a  dish from the Main Menu");
  }
  
  console.log(`That would be ${totalAmount[0] + totalAmount[1] + totalAmount[2]} Euros!`);
  
  }
  
  f();
}
  


const showMain = () => {
  return new Promise((resolve, reject) => {
      resolve(mainDishOffer());
  });
}

const showSide = () => {
  return new Promise((resolve, reject) => {
      resolve(sideDishOffer());
  });
}

async function showMenu() {
  const mainDish = await showMain();
  mainDish();

  const sideDish = await showSide();
  sideDish();
}

showMenu();