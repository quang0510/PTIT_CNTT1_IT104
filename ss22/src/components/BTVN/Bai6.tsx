import Spinner from "react-bootstrap/Spinner";

export default function Bai6() {
  return (
    <div className="d-flex flex-column gap-4">
      <Spinner animation="border" variant="primary"></Spinner>
      <Spinner animation="border" variant="secondary"></Spinner>
      <Spinner animation="border" variant="success"></Spinner>
    </div>
  );
}