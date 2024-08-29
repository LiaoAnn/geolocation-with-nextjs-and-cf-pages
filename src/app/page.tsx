import { headers } from "next/headers";

export const runtime = "edge";

export default function Home() {
  const headerList = headers();
  console.log(headerList);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>Header List</div>
      <code>{JSON.stringify(headerList)}</code>
    </main>
  );
}
