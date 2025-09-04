import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Bai3() {
  const products = [
    {
      title: "MacBook Air 2018",
      img: "https://media.wired.com/photos/65ea34d70264b0ad869cbc18/master/w_2560%2Cc_limit/MacBook-Air-M3-Review-Featured-Gear.jpg",
      description:
        "The reason I am selling the machine is because it is too much power for what I need",
      price: "30.000.000 đ",
    },
    {
      title: "MacBook Pro 2019",
      img: "https://media.wired.com/photos/65ea34d70264b0ad869cbc18/master/w_2560%2Cc_limit/MacBook-Air-M3-Review-Featured-Gear.jpg",
      description:
        "The reason I am selling the machine is because it is too much power for what I need.",
      price: "30.000.000 đ",
    },
  ];

  return (
    <div className="d-flex gap-4">
      {products.map((product, index) => (
        <Card key={index} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.img} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <Button variant="primary">Xem chi tiết</Button>
              <span>{product.price}</span>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}