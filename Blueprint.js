const menus = {
    breakfast: {
        starters: [
            { name: "Fruit mix", price: 4.99},
            { name: "Chocolate", price: 2.30},
            { name: "Gelato mix", price: 1.50}
        ],
        mains: [
            { name: "Bacon & Eggs", price: 6.60},
            { name: "Sweets", price: 6.50},
            { name: "Biscuit", price: 1.50}
        ],
        drinks: [
            { name: "Coffee", price: 1.50},
            { name: "Milk", price: 1.50},
            { name: "Tea", price: 2.50}
        ]
    },
    lunch: {
        starters: [
            { name: "Ham and Cheese", price: 7.60},
            { name: "Bread ", price: 3.00},
            { name: "Butter", price: 1.40}
        ],
        mains: [
            { name: "Bistec", price: 19.50},
            { name: "Mash potatoes", price: 12.10},
            { name: "Lasagna", price: 8.50}
        ],
        drinks: [
            { name: "Aperol", price: 6.50},
            { name: "Coffe", price: 1.50},
            { name: "Beer", price: 4.00}
        ]
    },
    dinner:{
        starters: [
            { name: "Dry fruits", price: 5.50},
            { name: "Bread", price: 1.50},
            { name: "Coconut", price: 4.00}
        ],
        mains: [
            { name: "Pizza", price: 10.20},
            { name: "Pasta", price: 9.60},
            { name: "Lasagna", price: 8.50}
        ],
        drinks: [
            { name: "Aperol", price: 6.50},
            { name: "Beer", price: 4.00},
            { name: "Cocktails", price: 7.60}
        ]
    }
};
       

// Comentarios de la camarera
const comments = [
    "Well well... somebody knows a thing or two!!",
    "I would do the same Sir!",
    "Please!! it is a good choice",
    "I think you choose the best!",
    "Let me ask in the kitchen butI think it is fine"
];


// Función para seleccionar un comentario aleatorio
function obtenerComentarioAleatorio(comments) {
    const indice = Math.floor(Math.random() * comments.length);
    return comments[indice];
}


// Función para mostrar el menú completo y permitir la selección
function seleccionarArticulo(menu, tipo, tiempo) {
    let mensaje = `${tiempo.charAt(0).toUpperCase() + tiempo.slice(1)} Menu - ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}:\n\n`;
    menu.forEach((articulo, index) => {
        mensaje += `${index + 1}. ${articulo.name} - €${articulo.price.toFixed(2)}\n`;
    });

    let seleccionNumerica = NaN;
    while (isNaN(seleccionNumerica) || seleccionNumerica < 1 || seleccionNumerica > menu.length) {
        let seleccion = prompt(`\n${mensaje}\nSelect a ${tipo} (1-${menu.length}):`);
        if (seleccion === null) {
            alert("Proceso cancelado.");
            return null;
        }
        seleccionNumerica = parseInt(seleccion, 10);
        if (isNaN(seleccionNumerica) || seleccionNumerica < 1 || seleccionNumerica > menu.length) {
            alert("Invalid input. Please, enter a vaalid number inside the menu.");
        }
    }

    const articulo = menu[seleccionNumerica - 1];
    alert(obtenerComentarioAleatorio(comments));
    return articulo;
}


// Función para determinar el momento de la comida basado en la hora ingresada
function obtenerMomentoComida(hora) {
    const [hours, minutes] = hora.split(':').map(Number);
    
    if (hours < 8 || hours >= 24 || (hours === 23 && minutes > 0) || isNaN(hours) || isNaN(minutes)) {
        return null;
    }
    
    if (hours >= 8 && hours <= 10) {
        return 'breakfast';
    } else if (hours >= 11 && hours <= 16) {
        return 'lunch';
    } else if (hours >= 17 && hours <= 23) {
        return 'dinner';
    } else {
        return null;
    }
}


// Función principal para ejecutar el menú
function ejecutarMenu() {
    let momentoComida = null;
    while (!momentoComida) {
        const horaSeleccionada = prompt("Welcome to the Bottega fast Food Restaurant, opening hours are from 08:00am to 23:00pm, Please enter current time (HH:MM) to select the menu:");
        if (horaSeleccionada === null) {
            alert("Process cancelled.");
            return;
        }
        momentoComida = obtenerMomentoComida(horaSeleccionada);
        if (!momentoComida) {
            alert("this time input is not valid. Please, enter a valid time with the correct format (HH:MM)");
        }
    }

    const menu = menus[momentoComida];

    // Selección de plato principal
    const platoStarters = seleccionarArticulo(menu.starters, 'starters', momentoComida);
    if (!platoStarters) return;  // Si el usuario cancela


    // Selección de guarniciones
    const platoMain = seleccionarArticulo(menu.mains, 'mains', momentoComida);
    if (!platoMain) return;  // Si el usuario cancela


    const platoDrinks = seleccionarArticulo(menu.drinks, 'drinks', momentoComida);
    if (!platoDrinks) return;  // Si el usuario cancela


    // Sumar el costo total
   const costoTotal = platoStarters.price + platoMain.price + platoDrinks.price;
    alert(`Bottega Fast Food\n\nCheck\n${platoStarters.name} = €${platoStarters.price}\n${platoMain.name} = €${platoMain.price}\n${platoDrinks.name} = €${platoDrinks.price} \n\nTotal price: €${costoTotal.toFixed(2)}\nThanks for visiting!!`);
}


// Ejecutar el menú
ejecutarMenu();