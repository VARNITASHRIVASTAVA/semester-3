// Student Record System using Object-Oriented Programming (C++)
#include <iostream>
#include <string>
using namespace std;

// Class Definition
class StudentInfo
{
private:
    int rollNo;
    string name;
    float marks;

public:
    // Function to input student details
    void getData()
    {
        cout << "Enter Roll Number: ";
        cin >> rollNo;

        cin.ignore(); // Clear input buffer
        cout << "Enter Student Name: ";
        getline(cin, name);

        cout << "Enter Marks: ";
        cin >> marks;
    }

    // Function to display student details
    void displayData()
    {
        cout << "\n----- Student Record -----" << endl;
        cout << "Roll Number : " << rollNo << endl;
        cout << "Name        : " << name << endl;
        cout << "Marks       : " << marks << endl;
    }

    // Function to calculate grade
    void calculateGrade()
    {
        cout << "Grade       : ";

        if (marks >= 90)
            cout << "A+" << endl;
        else if (marks >= 80)
            cout << "A" << endl;
        else if (marks >= 70)
            cout << "B" << endl;
        else if (marks >= 60)
            cout << "C" << endl;
        else
            cout << "Fail" << endl;
    }
};

// Main Function
int main()
{
    StudentInfo s1;   // Object creation

    s1.getData();
    s1.displayData();
    s1.calculateGrade();

    return 0;
}
