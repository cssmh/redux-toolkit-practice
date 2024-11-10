import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
const Home = () => {
  const count = useSelector((state) => state.counter.count);
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
    </div>
  );
};

export default Home;
