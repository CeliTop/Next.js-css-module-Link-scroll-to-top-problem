import Link from "next/link";

export default function Home() {
  return (
    <main>
      {items.map((item, id) => (
        <div key={id}>{item}</div>
      ))}
      <Link href="/">Home</Link>
    </main>
  );
}

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
