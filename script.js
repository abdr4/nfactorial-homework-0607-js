let korzina = [];
const NAME = "Ovoshnaya Dalidy";
console.log(`Salem, bul ${NAME}`);
while (true) {
    console.log("0 - Exit");
    console.log("1 - Ovoshi")
    console.log("2 - Korzinany koru")
    console.log("3 - Udalit chto to iz korziny")
    console.log("4 - Oplatit")
    
    let choice = prompt("Tandanyz kaisysy");
    
    switch (choice) {
        case 0:
            exit(0);
        case 1:
            showMenu();
            let choice1 = prompt("Ne alasyz?");
            korzina.push(menu[choice1 - 1]);
            break;
        case 2:
            showBusket();
            break;
        case 3:
            showBusket();
            let choice2 = prompt("Chto hotite udalit?");
            korzina.splice(choice2, choice2);
            showBusket();
            break;
        case 4:
            showBusket();
            let sum = 0;
            for (const o of korzina) {
                sum += o.price;
            }
            console.log(`K oplate ${sum}`);
            break;
    
        default:
            break;
    }
    
}
function showBusket() {
    for (let index = 0; index < korzina.length; index++) {
        console.log((index + 1) + `${korzina[i].name}`);
    }
}

let menu = [
    {
        name : "Kartoha",
        price : 400
    }, {
        name : "Luk",
        price : 350
    }, {
        name : "Chesnok",
        price : 500
    }, {
        name : "Baklazhan",
        price : 600
    }
];

function showMenu() {
    for (let i = 0; i < menu.length; i++) {
        console.log((i + 1) + `. ${menu[i].name}, bagasy ${menu[i].price}`);
    }
}

// P.S Sorry za hrenovyi code, ya eto piwu 2 chasa nochi(((, no lecture top