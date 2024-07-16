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

//QUÉ MENÚ ESCOGERÁ SEGÚN LA HORA 
    getMenuType(hora) {
        if (hora >= 8 && hora < 13) return "breakfast";
        else if (hora >= 13 && hora < 18) return "lunch";
        else if (hora >= 18 && hora < 23) return "dinner";
        else return "closed"
    }

    //
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

    getOrder(hora) {
        const tipoMenu = this.getMenuType(hora);
        if (tipoMenu === 'closed') {
            alert("Sorry, the restaurant is closed.");
            return;
        } else {
             this.printMenu(tipoMenu);
       }
}


    greeting() {
        var hora = prompt("Porfavor seleccione una hora");
    }

}



const skj = new menuDinerBottega();

skj.getMenuType();
skj.printMenu();
skj.selections();
skj.getOrder();
skj.greeting();
