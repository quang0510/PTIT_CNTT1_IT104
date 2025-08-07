"use strict";
const printStaffInfo = (staff) => {
    console.log(`Nhan vien: ${staff.name} , ${staff.age} tuoi, ma nhan vien: ${staff.employeeId}, phong: ${staff.department}`);
};
const staffMember = {
    name: "quang",
    age: 99,
    employeeId: "abc123",
    department: "Kế toán"
};
printStaffInfo(staffMember);
