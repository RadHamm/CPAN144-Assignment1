import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/items">Items</Link>
        </li>
        <li>
          <Link href="/Counter">Counter</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
