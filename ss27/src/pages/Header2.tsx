import { NavLink, Outlet } from "react-router-dom";

export default function Header2() {
  return (
    <header>
      <h1 style={{display: "flex" , flexDirection: 'column' , gap: "4px"}} className="bg-blue-500 text-white text-center py-4 text-2xl font-bold ">
        Trang Chi Tiết Sản Phẩm

        <NavLink style={{fontSize: "14px"}} to="products">Danh sách sản phẩm</NavLink>
      </h1>
      <Outlet/>
      
    </header>
  );
}
