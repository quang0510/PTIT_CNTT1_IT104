export interface Student {
  id: string;
  name: string;
  age: number;
  gender: 'Nam' | 'Nữ';
  birthday?: string;
  hometown?: string;
  address?: string;
}
