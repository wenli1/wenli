let john = { name: "John", surname: "Smith", id: 1 };
 
let pete = { name: "Pete", surname: "Hunt", id: 2 };
 
let mary = { name: "Mary", surname: "Key", id: 3 };
 

 
let users = [ john, pete, mary ];
 

 
let usersMapped = users.map(user =>({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));
usersMapped = [

  { fullName: "John Smith", id: 1 },

  { fullName: "Pete Hunt", id: 2 },

  { fullName: "Mary Key", id: 3 }

]

alert( usersMapped[0].id ) 

alert( usersMapped[0].fullName ) 
console.log( usersMapped[0].id ); 
console.log( usersMapped[0].fullName );