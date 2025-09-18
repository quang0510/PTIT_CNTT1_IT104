import React from 'react';
import { useSelector } from 'react-redux';
import type { User } from '../redux/reducers/userReducer';
import type { RootState } from '../redux/stores/store';

export default function ListUser() {
  const users = useSelector((state: RootState) => state.users);

  return (
    <table border={1} cellPadding={5} style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: User) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.userName}</td>
            <td>{user.gender}</td>
            <td>{user.dateBirth}</td>
            <td>{user.address}</td>
            <td>
              <button>Sửa</button>
              <button>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
