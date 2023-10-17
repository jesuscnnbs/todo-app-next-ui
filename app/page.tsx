import { Link } from "@nextui-org/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Link href="/todo-list" color="primary">
        To App
      </Link>
    </main>
  );
}
