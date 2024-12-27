import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <a className="text-blue-600">Umer Gul Kaleem Portfolio!</a>
        </h1>
        <div className=" text-2xl flex gap-6 font-medium text-red-500 mt-4">
          <Link href="/about">
            <p>About</p>
          </Link>
          <Link href="/contact">
            <p>Contact</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
