import Link from "next/link";
import styles from "./page.module.css"; // Removing the import fixes the problem
const x = styles;

export default function Home() {
  return (
    <main>
      {items.map((item, id) => (
        <div key={id}>{item}</div>
      ))}
      <Link href="/about">about</Link>
    </main>
  );
}

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
