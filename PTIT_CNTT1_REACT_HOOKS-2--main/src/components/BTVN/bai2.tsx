import React, { useMemo } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

export default function Bai2() {

  const users: User[] = [
    { id: 1, name: "Nguyễn Văn A", age: 19 },
    { id: 2, name: "Nguyễn Văn A", age: 20 },
    { id: 3, name: "Nguyễn Văn A", age: 22 },
  ];

  const filterUsers = useMemo(() => {

    return users.filter(user => user.age > 18);

  }, [users]);

  return (
    < >
      <h3>Danh sách người dùng trên 18 tuổi</h3>

      {filterUsers.length > 0 ? (
        <ul>
          {filterUsers.map(user => (
            <li key={user.id}>
              {user.name} - {user.age} tuổi
            </li>
          ))}
        </ul>
      ) : (
        <p>Không có người dùng nào trên 18 tuổi</p>
      )}
    </>
  );
}
