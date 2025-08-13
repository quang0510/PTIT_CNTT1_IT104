// Generic với Mảng
const numbers: number[] = [];
const studentNames: Array<string> = [];

const user: Record<string, string | number> = {
  id: "1",
  name: "A",
  age: 1,
};

interface CreateUserDto {
  id: number;
  name: string;
  age: number;
}

const partialCreateUser: Partial<CreateUserDto> = {};

interface Point {
  x: number;
  y: number;
}

const point: Readonly<Point> = {
  x: 10,
  y: 20,
};

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  dateOfBirth: string;
  address: string;
}

const cloneUser: Pick<User, "id" | "name" | "age"> = {
  id: 1,
  name: "A",
  age: 20,
};

const omitUser: Omit<User, "id"> = {
  address: "Hà Nội",
  age: 21,
  dateOfBirth: "11/11/2023",
  email: "nva@gmail.com",
  name: "A",
};