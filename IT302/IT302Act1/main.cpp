#include <iostream>
using namespace std;

int main() {
    int choice, quantity;
    int price, total = 0;

    cout << "\nChicken Meals" << endl;
    cout << "1. K2 2pcs Chicken w/ Rice & Drink - P64" << endl;
    cout << "2. K3 3pcs Chicken w/ Rice & Drink - P84" << endl;
    cout << "3. K5 5pcs Chicken w/ Rice & Drink - P123" << endl;

    cout << "Choose: ";
    cin >> choice;

    cout << "Quantity: ";
    cin >> quantity;

    if (choice == 1)
        price = 64;
    else if (choice == 2)
        price = 84;
    else if (choice == 3)
        price = 123;
    else {
        cout << "Invalid choice!" << endl;
        return 0;
    }

    total = total + price * quantity;

    cout << "\nTotal: P" << total << endl;

    return 0;
}