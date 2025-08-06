let firstName:string = `Nguyễn`;
let lastName:string = `Quang`;

firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

let fullName:string = [firstName,lastName].join(" ");

console.log(fullName);