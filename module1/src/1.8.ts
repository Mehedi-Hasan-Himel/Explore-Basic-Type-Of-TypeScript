// destructuring

{
  const user = {
    id: 345,
    name: {
      firstName: "Mehedi",
      middleName: "Hasan",
      lastName: "Himel",
    },
    contactNo: "0170000000",
    address: "bangladesh",
  };

  const {
    contactNo,
    name: { middleName : midName},
   } = user;
   

   // array destructuring
   const myFriends = ['chandler', 'joey', 'ross', 'rachel','monica','phoebe']
   
   const[,,bestFriend,...rest] = myFriends



}
