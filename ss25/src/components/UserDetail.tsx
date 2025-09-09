import { useParams } from "react-router-dom";

interface User {

  id: number;
  name: string;
  email: string;
  address: string;

}

const users: User[] = [

  { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
  { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
  { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" },

];

export default function UserDetail() {

  const { id } = useParams(); 
  
  const user = users.find((u) => u.id === Number(id));

  if (!user) return <h2>User không tồn tại</h2>;

  return (

    <div style={{ padding: "20px" }}>

      <h2>Thông tin chi tiết</h2>
      <div style={{ border: "1px solid gray", padding: "10px", width: "250px" }}>
        <p><b>Id:</b> {user.id}</p>
        <p><b>UserName:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Address:</b> {user.address}</p>
        <button>Xem chi tiết</button>
      </div>
    </div>
  );
}
