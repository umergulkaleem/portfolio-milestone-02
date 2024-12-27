import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Contact Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Contact Me</h1>
        <p className="mt-3 text-2xl">
          Feel free to connect with me on
          <Link
            className="hover:text-blue-600"
            href="https://github.com/umergulkaleem"
            target="blank"
          >
            &nbsp; GitHub &nbsp;
          </Link>
          and
          <Link
            className="hover:text-blue-600"
            href="https://www.linkedin.com/in/umer-gul-kaleem-10b507243/"
            target="blank"
          >
            &nbsp; LinkedIn
          </Link>
          . I look forward to collaborating and connecting with like-minded
          individuals!
        </p>
        <Link href="/" className="text-4xl text-red-400">
          <p>Home</p>
        </Link>
      </main>
    </div>
  );
}
