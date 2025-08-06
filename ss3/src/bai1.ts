const userName: string = "quang";
const age: number = 21;
const job: string = "sinh vien";


const printInfo = (name: string, age: number, job: string): void => {

  console.log(`Ten: ${name}`);

  console.log(`Tuoi: ${age}`);

  console.log(`Nghe nghiep : ${job}`);
  
};

printInfo(userName, age, job);
