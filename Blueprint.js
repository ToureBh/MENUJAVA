class menuDinerBottega {
    constructor () {
        this.menus = {
            breakfast: {
                starters: [
                    { name: "Fruit mix", price: 4},
                    { name: "Chocolate", price: 4},
                    { name: "Gelato mix", price: 4}
                ],
                mains: [
                    { name: "Bacon & Eggs", price: 4},
                    { name: "Sweets", price: 4},
                    { name: "Biscuit", price: 4}
                ],
                drinks: [
                    { name: "Coffee", price: 4},
                    { name: "Milk", price: 4},
                    { name: "Tea", price: 4}
                ]
            },
            lunch: {
                starters: [
                    { name: "Ham and Cheese", price: 4},
                    { name: "Bread ", price: 4},
                    { name: "Butter", price: 4}
                ],
                mains: [
                    { name: "Bistec", price: 4},
                    { name: "Mash potatoes", price: 4},
                    { name: "Lasagna", price: 4}
                ],
                drinks: [
                    { name: "Aperol", price: 4},
                    { name: "Coffe", price: 4},
                    { name: "Beer", price: 4}
                ]
            },
            dinner:{
                starters: [
                    { name: "Dry fruits", price: 4},
                    { name: "Bread", price: 4},
                    { name: "Coconut", price: 4}
                ],
                mains: [
                    { name: "Pizza", price: 4},
                    { name: "Pasta", price: 4},
                    { name: "Lasagna", price: 4}
                ],
                drinks: [
                    { name: "Aperol", price: 4},
                    { name: "Beer", price: 4},
                    { name: "Cocktails", price: 4}
                ]
            },
        
        };
        this.comments = [
            "Well well... somebody knows a thing or two!!",
            "I would do the same Sir!",
            "Please!! it is a good choice",
            "I think you choose the best!",
            "Let me ask in the kitchen butI think it is fine"
        ];
    }


    // Función para determinar el momento de la comida basado en la hora ingresada
    getMenuType(hora) {
        if (hora >= 8 && hora < 13) return "breakfast";
        else if (hora >= 13 && hora < 18) return "lunch";
        else if (hora >= 18 && hora < 23) return "dinner";
        else return "closed"
    }

    // Función para seleccionar un comentario aleatorio
    obtenerComentarioAleatorio(comments) {
    const indice = Math.floor(Math.random() * comments.length);
    return comments[indice];
    }

    getOrder(hora) {
        const tipoMenu = this.getMenuType(hora);
        if (tipoMenu === 'closed') {
            alert("Sorry, the restaurant is closed.");
            return;
        } else {
            this.printMenu(tipoMenu);
        }
    }

    // Función para mostrar el menú completo y permitir la selección
    printMenu(tipoMenu) {
        const menu = this.menus[tipoMenu];
        let menuString = `${tipoMenu.charAt(0).toUpperCase() + tipoMenu.slice(1)} Menu. \n\Starters:\n`;
        menu.starters.forEach(item => {
            menuString += `${item.name}: ${item.price}€\n`;
        });
        menuString += `\nMains:\n`;
        menu.mains.forEach(item => {
            menuString += `${item.name}: ${item.price}€\n`;
        });
        menuString += `\nDesserts:\n`;
        menu.mains.forEach(item => {
            menuString += `${item.name}: ${item.price}€\n`;
        });

        alert(menuString);
    }

    selections(menu, category){
        let item = null;
        while (!item) {
            let selectionPrompt = `Please select a ${category.slice(0, -1)}`
            menu[category].forEach( item => {
                selectionPrompt += `${item.name} (${item.price})`
            });
            const selection = prompt(selectionPrompt);
            item = menu[category].find(item => item.name.toLowerCase())
            if (item) {
                const comment = this.comments[Math.random()];
                alert(`You selected ${item.name}. ${comment}. It costs ${item.price}`)
            } else {
                alert("Item not found. Please choose a valid item")
            }
        }
        return item;
    }

    // Función principal para ejecutar el menú
    ejecutarMenu() {
    let momentoComida = null;
    while (!momentoComida) {
        const horaSeleccionada = prompt("Bienvenido a Bottega fast Food, horario atencion 8am a 23pm, Ingresa la hora (HH) para seleccionar tu comida:");
        if (horaSeleccionada === null) {
            alert("Proceso cancelado.");
            return;
        }
        momentoComida = this.getMenuType(horaSeleccionada);
        if (!momentoComida) {
            alert("Hora no válida. Por favor, ingresa una hora dentro de las franjas horarias permitidas.");
            }
        }

        // Selección de plato principal
        const platoStarters = this.printMenu(this.menus[tipoMenu].starters, 'starter', momentoComida);
        if (!platoStarters) return;  // Si el usuario cancela


        // Selección de guarniciones
        const platoMain = this.printMenu(this.menus[tipoMenu].mains, 'plato principal', momentoComida);
        if (!platoMain) return;  // Si el usuario cancela


        const opcionDrinks = this.printMenu(this.menus[tipoMenu].drinks, 'bebida', momentoComida);
        if (!opcionDrinks) return;  // Si el usuario cancela


        // Sumar el costo total
        const costoTotal = platoStarters.price + platoMain.price + opcionDrinks.price;
        alert(`Bottega Fast Food\n\nRecibo venta\n${platoStarters.name} = €${platoStarters.price}\n${platoMain.name} = €${platoMain.price}\n${opcionDrinks.name} = €${opcionDrinks.price} \n\nCosto total: €${costoTotal.toFixed(2)}\nGracias por Visitarnos`);
    }

};


skj = new menuDinerBottega;

skj.ejecutarMenu();