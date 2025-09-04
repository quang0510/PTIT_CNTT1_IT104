import { Button, Calendar, Rate } from "antd";
import TodoList from "./components/Todolist";
import Bai1 from "./components/BTVN/Bai1";
import Bai2 from "./components/BTVN/Bai2";
import Bai3 from "./components/BTVN/Bai3";
import Bai4 from "./components/BTVN/Bai4";
import Bai5 from "./components/BTVN/Bai5";
import Bai6 from "./components/BTVN/Bai6";
// import DefaultLayout from "./components/DefaultLayout";
// import Bai1 from "./components/BTVN/Bai1";
// import Demo from "./components/bt";


export default function App() {
  return (
    <div>
      {/* <h1 className="text-3xl text-blue-600 font-semibold text-center bg-red-300 p-9 m-9">
        Welcome to Rikkei Education
      </h1>
      <h1 className="text-3xl text-blue-600 font-semibold text-center bg-red-300 p-9 m-9">
        Welcome to Rikkei Education
      </h1>

      <Button type="primary" danger>
        Button Primary
      </Button>

      <Button type="primary" shape="circle">
        A
      </Button>

      <Rate onChange={(value) => console.log("Value: ", value)} />

      <Calendar /> */}
      {/* <DefaultLayout/> */}
      {/* <Bai1/> */}
      {/* <Demo/> */}
      {/* <Bai1/> */}
      {/* <Bai2/> */}
      {/* <Bai3/> */}
      {/* <Bai4/> */}
      {/* <Bai5/> */}
      <Bai6/>
    </div>
  );
}