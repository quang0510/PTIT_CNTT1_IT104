interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: string;
  department: string;
}

type StaffMember = Person & Employee;

const printStaffInfo = (staff: StaffMember): void => {
  console.log(`Nhan vien: ${staff.name} , ${staff.age} tuoi, ma nhan vien: ${staff.employeeId}, phong: ${staff.department}`);
};

const staffMember: StaffMember = {
  name: "quang",
  age: 99,
  employeeId: "abc123",
  department: "Kế toán"
};


printStaffInfo(staffMember);
