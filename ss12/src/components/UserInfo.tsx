// bài 3
export const UserInfo = () => {
    
    const user = {
    fullName: 'Nguyễn Văn A',
    gender: 'Nam',
    birthDate: '06/03/2024',
    email: 'nva@gmail.com',
    address: 'Thanh Xuân, Hà Nội',
    };

  return (
   <div>
      <h2>Thông tin cá nhân</h2>
      <ul>
        <li>Họ và tên: {user.fullName}</li>
        <li>Giới tính: {user.gender}</li>
        <li>Ngày sinh: {user.birthDate}</li>
        <li>Email: {user.email}</li>
        <li>Địa chỉ: {user.address}</li>
      </ul>
    </div>
  )
}

export default UserInfo;
