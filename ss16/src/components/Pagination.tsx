// import React, { Component } from "react";
// import type { Student } from "../interfaces/student.interface";
// import { StudentStatus } from "../enums/student.enum";

// const students: Student[] = [
//   {
//     id: 1,
//     studentCode: "SV001",
//     fullName: "Nguyễn Văn A",
//     dateOfBirth: "21/02/2023",
//     email: "nva@gmail.com",
//     status: "ACTIVE",
//   },
//   {
//     id: 2,
//     studentCode: "SV002",
//     fullName: "Trần Thị B",
//     dateOfBirth: "15/03/2022",
//     email: "ttb@gmail.com",
//     status: StudentStatus.INACTIVE,
//   },
//   {
//     id: 3,
//     studentCode: "SV003",
//     fullName: "Lê Quang C",
//     dateOfBirth: "10/04/2021",
//     email: "lqc@gmail.com",
//     status: "ACTIVE",
//   },
//   {
//     id: 4,
//     studentCode: "SV004",
//     fullName: "Phạm Minh D",
//     dateOfBirth: "05/05/2020",
//     email: "pmd@gmail.com",
//     status: "ACTIVE",
//   },
//   {
//     id: 5,
//     studentCode: "SV005",
//     fullName: "Hoàng Mai E",
//     dateOfBirth: "12/06/2022",
//     email: "hme@gmail.com",
//     status: "INACTIVE",
//   },
//   {
//     id: 6,
//     studentCode: "SV006",
//     fullName: "Ngô Thu F",
//     dateOfBirth: "08/07/2021",
//     email: "ntf@gmail.com",
//     status: "ACTIVE",
//   },
//   {
//     id: 7,
//     studentCode: "SV007",
//     fullName: "Vũ Minh G",
//     dateOfBirth: "22/08/2020",
//     email: "vmg@gmail.com",
//     status: "INACTIVE",
//   },
//   {
//     id: 8,
//     studentCode: "SV008",
//     fullName: "Đỗ Thanh H",
//     dateOfBirth: "17/09/2019",
//     email: "dth@gmail.com",
//     status: "ACTIVE",
//   },
//   {
//     id: 9,
//     studentCode: "SV009",
//     fullName: "Bùi Tuấn I",
//     dateOfBirth: "29/10/2021",
//     email: "bti@gmail.com",
//     status: "ACTIVE",
//   },
//   {
//     id: 10,
//     studentCode: "SV010",
//     fullName: "Lương Thanh J",
//     dateOfBirth: "03/11/2020",
//     email: "ltj@gmail.com",
//     status: "INACTIVE",
//   },
//   {
//     id: 11,
//     studentCode: "SV011",
//     fullName: "Trần Thị K",
//     dateOfBirth: "14/12/2022",
//     email: "ttk@gmail.com",
//     status: "ACTIVE",
//   },
//   {
//     id: 12,
//     studentCode: "SV012",
//     fullName: "Nguyễn Minh L",
//     dateOfBirth: "23/01/2021",
//     email: "nml@gmail.com",
//     status: "INACTIVE",
//   },
//   {
//     id: 13,
//     studentCode: "SV013",
//     fullName: "Phan Thi M",
//     dateOfBirth: "02/02/2020",
//     email: "ptm@gmail.com",
//     status: "ACTIVE",
//   },
//   {
//     id: 14,
//     studentCode: "SV014",
//     fullName: "Lê Thanh N",
//     dateOfBirth: "18/03/2023",
//     email: "ltn@gmail.com",
//     status: "ACTIVE",
//   },
//   {
//     id: 15,
//     studentCode: "SV015",
//     fullName: "Đỗ Quang O",
//     dateOfBirth: "30/04/2021",
//     email: "dqo@gmail.com",
//     status: "INACTIVE",
//   },
//   {
//     id: 16,
//     studentCode: "SV016",
//     fullName: "Ngô Minh P",
//     dateOfBirth: "22/05/2022",
//     email: "nmp@gmail.com",
//     status: "ACTIVE",
//   },
//   {
//     id: 17,
//     studentCode: "SV017",
//     fullName: "Bùi Thị Q",
//     dateOfBirth: "10/06/2020",
//     email: "btq@gmail.com",
//     status: "ACTIVE",
//   },
//   {
//     id: 18,
//     studentCode: "SV018",
//     fullName: "Vũ Thanh R",
//     dateOfBirth: "03/07/2021",
//     email: "vtr@gmail.com",
//     status: "INACTIVE",
//   },
//   {
//     id: 19,
//     studentCode: "SV019",
//     fullName: "Nguyễn Thị S",
//     dateOfBirth: "11/08/2022",
//     email: "nts@gmail.com",
//     status: "ACTIVE",
//   },
//   {
//     id: 20,
//     studentCode: "SV020",
//     fullName: "Phan Minh T",
//     dateOfBirth: "26/09/2020",
//     email: "pmt@gmail.com",
//     status: "INACTIVE",
//   },
//   {
//     id: 21,
//     studentCode: "SV021",
//     fullName: "Phan Minh K",
//     dateOfBirth: "26/09/2020",
//     email: "pmt@gmail.com",
//     status: "INACTIVE",
//   },
// ];

// type StateTypes = {
//   currentPage: number;
//   pageSize: number;
//   studentPaginationed: Student[];
// };

// export default class Pagination extends Component<object, StateTypes> {
//   constructor(props: object) {
//     super(props);

//     // Khai báo State
//     this.state = {
//       currentPage: 1,
//       pageSize: 5,
//       studentPaginationed: this.getStudentPaginationed(1),
//     };
//   }

//   // Hàm lấy ra danh sách sinh viên đã được phân trang
//   getStudentPaginationed = (currentPage: number) => {
//     // Vị trí bắt đầu và kết thúc
//     const startIndex = (currentPage - 1) * 5;
//     const endIndex = startIndex + 5;
//     return students.slice(startIndex, endIndex);
//   };

//   // Hàm quay về trang trước
//   handlePrevious = () => {
//     if (this.state.currentPage > 1) {
//       this.setState({
//         currentPage: this.state.currentPage - 1,
//         studentPaginationed: this.getStudentPaginationed(
//           this.state.currentPage - 1
//         ),
//       });
//     }
//   };

//   // Hàm tiến trang tiếp theo
//   handleNextPage = () => {
//     // Tính số trang dựa vào tổng số bản ghi và số bản ghi / trang
//     const totalPage = Math.ceil(students.length / this.state.pageSize);
//     if (this.state.currentPage < totalPage) {
//       this.setState({
//         currentPage: this.state.currentPage + 1,
//         studentPaginationed: this.getStudentPaginationed(
//           this.state.currentPage + 1
//         ),
//       });
//     }
//   };

//   // Hàm đến trang được click vào
//   handlePageClicked = (page: number) => {
//     this.setState({
//       currentPage: page,
//       studentPaginationed: this.getStudentPaginationed(page),
//     });
//   };

//   // Hàm render danh sách các trang
//   renderPage = (): React.ReactNode => {
//     const pages: number[] = [];
//     // Tính số trang dựa vào tổng số bản ghi và số bản ghi / trang
//     const totalPage = Math.ceil(students.length / this.state.pageSize);

//     for (let index = 0; index < totalPage; index++) {
//       pages.push(index + 1);
//     }

//     return pages.map((page) => (
//       <button
//         key={page}
//         style={{
//           backgroundColor: this.state.currentPage === page ? "red" : "",
//           color: this.state.currentPage === page ? "white" : "",
//         }}
//         onClick={() => this.handlePageClicked(page)}
//       >
//         {page}
//       </button>
//     ));
//   };

//   render() {
//     return (
//       <div>
//         <table border={1}>
//           <thead>
//             <tr>
//               <th>STT</th>
//               <th>Mã sinh viên</th>
//               <th>Tên sinh viên</th>
//               <th>Ngày sinh</th>
//               <th>Email</th>
//               <th>Trạng thái</th>
//               <th>Chức năng</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.studentPaginationed.map(
//               (student: Student, index: number) => (
//                 <tr key={student.id}>
//                   <td>{index + 1}</td>
//                   <td>{student.studentCode}</td>
//                   <td>{student.fullName}</td>
//                   <td>{student.dateOfBirth}</td>
//                   <td>{student.email}</td>
//                   <td>
//                     {student.status === StudentStatus.ACTIVE
//                       ? "Đang hoạt động"
//                       : "Ngừng hoạt động"}
//                   </td>
//                   <td>
//                     <button>Chặn</button>
//                     <button>Sửa</button>
//                     <button>Xóa</button>
//                   </td>
//                 </tr>
//               )
//             )}
//           </tbody>
//         </table>
//         <div
//           style={{
//             display: "flex",
//             gap: 10,
//             marginTop: 20,
//             justifyContent: "center",
//           }}
//         >
//           <button onClick={this.handlePrevious}>&#60;</button>
//           {this.renderPage()}
//           <button onClick={this.handleNextPage}>&#62;</button>
//         </div>
//       </div>
//     );
//   }
// }