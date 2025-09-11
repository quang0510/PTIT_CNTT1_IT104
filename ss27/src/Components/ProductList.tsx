import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image?: string;
}

const products: Product[] = [

  {
    id: "1",
    name: "Laptop Dell XPS 13",
    price: "35.000.000 VND",
    description: "Laptop cao cấp với thiết kế mỏng nhẹ, hiệu năng mạnh mẽ.",
    image: "https://nhatminhlaptop.com/Upload/Editor/2022/6/14/dellxps93154-c75f.jpg",
  },
  {
    id: "2",
    name: "iPhone 14 Pro",
    price: "30.000.000 VND",
    description: "Điện thoại cao cấp với chip A16, màn hình ProMotion.",
    image: "https://cdn2.cellphones.com.vn/x/media/catalog/product/t/_/t_m_12_1_3_2.png",
  },
  {
    id: "3",
    name: "Samsung Galaxy S22",
    price: "25.000.000 VND",
    description: "Hiệu năng mạnh mẽ, camera chụp đêm xuất sắc.",
    image: "https://cdn.tgdd.vn/Products/Images/42/231110/samsung-galaxy-s22-090222-102419-600x600.jpg"
  },
  {
    id: "4",
    name: "Tai nghe Sony WH-1000XM4",
    price: "7.000.000 VND",
    description: "Tai nghe chống ồn tốt nhất, pin lâu dài.",
    image: "https://store.sony.com.vn/cdn/shop/products/WHM4_400x.png?v=1694056028",
  },
  {
    id: "5",
    name: "Apple Watch Series 8",
    price: "12.000.000 VND",
    description: "Đồng hồ thông minh theo dõi sức khỏe toàn diện.",
    image: "https://cdn2.cellphones.com.vn/x/media/catalog/product/1/_/1_268_5_2.jpg",
  },
];

export default function ProductList() {

  return (
    <div className="p-4">

      <h2 className="text-center text-xl font-bold mb-4">Danh sách sản phẩm</h2>
      <div className="grid grid-cols-3 gap-4">

        {products.map((p) => (

          <div key={p.id} className="border p-4 rounded shadow">
            {p.image && <img src={p.image} alt={p.name} className="mb-2" />}

            <h3 className="font-semibold">{p.name}</h3>
            <p>Giá: {p.price}</p>

            <Link className="text-blue-500" to={`/products/${p.id}`}>
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
