import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  multiply,
} from "../features/counter/counterSlice";

const Home = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center h-screen gap-6">
      <button
        className="bg-blue-500 text-white p-4 rounded-lg"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        className="bg-blue-500 text-white p-4 rounded-lg"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="bg-blue-500 text-white p-4 rounded-lg"
        onClick={() => dispatch(multiply(15))}
      >
        multiply
      </button>
      <button
        className="bg-blue-500 text-white p-4 rounded-lg"
        onClick={() => dispatch(incrementByAmount(7))}
      >
        incrementByAmount
      </button>
    </div>
  );
};

export default Home;
