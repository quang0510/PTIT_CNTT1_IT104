
import "./Bài8.css";

class Account {
  fullname: string;
  dateOfBirth: string;
  gender: string;
  address: string;

  constructor(fullname: string, dateOfBirth: string, gender: string, address: string) {
    this.fullname = fullname;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.address = address;
  }
}

export const ListAccount = () => {
  const accountList: Account[] = [
    new Account("quang", "1/1/2099", "Nam", "Hà Nội"),
    new Account("huy", "2/2/2222", "Nam", " Hồ chí minh"),
  ];
  return (
    <>
      <table>
        <thead>
          <th>STT</th>
          <th>Họ và tên</th>
          <th>Ngày sinh</th>
          <th>Giới tính</th>
          <th>Địa chỉ</th>
          <th colSpan={2}>Hành động</th>

        </thead>
        <tbody>
          {accountList &&
            accountList.map((account: Account, index: number) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{account.fullname}</td>
                  <td>{account.dateOfBirth}</td>
                  <td>{account.gender}</td>
                  <td>{account.address}</td>
                  <td>
                    <button className="edit-btn">Sửa</button>
                  </td>
                  <td>
                    <button className="del-btn">Xóa</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default ListAccount;