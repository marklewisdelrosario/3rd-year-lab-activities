const prompt = require("prompt-sync")();

let total = 0;
let prices = [64, 84, 123];

function order() {
    console.log("\nChicken Meals");
    console.log("1. K2 2pcs Chicken w/ Rice & Drink - P64");
    console.log("2. K3 3pcs Chicken w/ Rice & Drink - P84");
    console.log("3. K5 5pcs Chicken w/ Rice & Drink - P123");

    let choice = Number(prompt("Choose: "));
    let quantity = Number(prompt("Quantity: "));
    let price;

    if (choice == 1) {
        price = prices[0];
        console.log("\nYou selected K2 Chicken.");
    }
    else if (choice == 2) {
        price = prices[1];
        console.log("\nYou selected K3 Chicken.");
    }
    else if (choice == 3) {
        price = prices[2];
        console.log("\nYou selected K5 Chicken.");
    }
    else {
        console.log("\nInvalid choice!");
        return;
    }

    if (quantity <= 0) {
        console.log("Invalid quantity!");
        return;
    }
    else {
        console.log("You ordered " + quantity + " meals.");
    }

    total = total + price * quantity;

    let again = prompt("\nDo you want to add more? (y/n): ");

    if (again == "y") {
        order();
    }
    else {
        console.log("\nFinal Total: P" + total);
        console.log("Thank you for your order!");
    }
}

order();