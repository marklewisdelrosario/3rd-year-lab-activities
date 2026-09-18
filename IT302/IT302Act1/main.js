const prompt = require("prompt-sync")();

let total = 0;

function order() {
    console.log("\nChicken Meals");
    console.log("1. K2 2pcs Chicken w/ Rice & Drink - P64");
    console.log("2. K3 3pcs Chicken w/ Rice & Drink - P84");
    console.log("3. K5 5pcs Chicken w/ Rice & Drink - P123");

    let choice = prompt("Choose: ");
    let quantity = prompt("Quantity: ");

    let price;

    if (choice == 1)
        price = 64;
    else if (choice == 2)
        price = 84;
    else if (choice == 3)
        price = 123;
    else {
        console.log("Invalid choice!");
        order();
        return;
    }

    total = total + price * Number(quantity);

        console.log("\nTotal: P" + total);
}

order();