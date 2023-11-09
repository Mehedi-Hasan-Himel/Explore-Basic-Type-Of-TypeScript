// Learning Function
// Normal Function
// Arrow Function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

// add(7, "7");

const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};

// object --> function --> method.

const poorUser = {
  name: "Himel",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is : ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 4, 10];

const newArray: number[] = arr.map((elem: number):number => elem * elem);


// console.log(newArray);


