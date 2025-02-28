import Homepage from "./Homepage";
import NavBar from "../components/NavBar";

// Homepage which includes both homepage and nav bar.
export default function Home() {
  return (
    <div>
      <Homepage />

      <NavBar></NavBar>
    </div>
  );
}
