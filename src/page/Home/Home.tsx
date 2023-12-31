import UseTitle from "../../hooks/UseTitle";
import AllBooks from "../Books/AllBooks";

export default function Home() {
  UseTitle("Home");
  return (
    <div>
      <AllBooks></AllBooks>
    </div>
  );
}
