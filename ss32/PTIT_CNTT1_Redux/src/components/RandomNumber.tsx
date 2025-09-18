import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/stores/store";

export default function RandomNumber() {

  const result = useSelector((state: RootState) => state.random);

  const dispatch = useDispatch();

  const handleRandom = () => {
    dispatch({ type: "RANDOM", payload: Math.ceil(Math.random() * 10) });
  };
  return (
    <div>
      <br />
      <h2>Random: {JSON.stringify(result)}</h2>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
}