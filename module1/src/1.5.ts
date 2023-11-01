// Reference Type --> Object

const user: {
  company: "Universe Soft"; // type --> literal types with direct value.
  readonly firstName: string;
  middleName?: string; //optional type with ?.
  lastName: string;
  isMarried: boolean;
} = {
  company: "Universe Soft",
  firstName: "Mehedi",
  //   middleName: "Hasan",
  lastName: "Himel",
  isMarried: false,
};

// user.firstName = "Rajib"; --> access modifier (readonly) property can't be modified. 


