#include <iostream>
using namespace std;

int total = 0;
int prices[] = {64, 84, 123};

void order() {
    cout << "\nChicken Meals" << endl;
    cout << "1. K2 2pcs Chicken w/ Rice & Drink - P64" << endl;
    cout << "2. K3 3pcs Chicken w/ Rice & Drink - P84" << endl;
    cout << "3. K5 5pcs Chicken w/ Rice & Drink - P123" << endl;

    int choice, quantity, price;

    cout << "Choose: ";
    cin >> choice;

    cout << "Quantity: ";
    cin >> quantity;

    if (choice == 1) {
        price = prices[0];
        cout << "You selected K2 Chicken." << endl;
    }
    else if (choice == 2) {
        price = prices[1];
        cout << "You selected K3 Chicken." << endl;
    }
    else if (choice == 3) {
        price = prices[2];
        cout << "You selected K5 Chicken." << endl;
    }
    else {
        cout << "Invalid choice!" << endl;
        return;
    }

    if (quantity <= 0) {
        cout << "Invalid quantity!" << endl;
        return;
    }
    else {
        cout << "You ordered " << quantity << " meals." << endl;
    }

    total = total + price * quantity;

    char again;

    cout << "Do you want to add more? (y/n): ";
    cin >> again;

    if (again == 'y') {
        order();
    }
    else {
        cout << "\nFinal Total: P" << total << endl;
        cout << "Thank you for your order!" << endl;
    }
}

int main() {
    order();

    return 0;
}