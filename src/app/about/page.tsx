import Head from "next/head";
import Link from "next/link";
export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">About Me</h1>
        <p className="mt-3 text-2xl">
          Hello! I'm<b> Umer Gul Kaleem </b>, a 21-year-old Computer Science
          student currently studying at DHA Suffa University. My journey in the
          tech world is fueled by a genuine passion for innovation and
          problem-solving. I completed my intermediate education from Cadet
          College Petaro, which played a significant role in shaping my
          discipline and commitment towards achieving my goals. I live in the
          vibrant city of Karachi, Pakistan, a place that continually inspires
          me with its rich culture and dynamic energy. When I'm not diving deep
          into algorithms or debugging code, I enjoy exploring new technologies,
          reading about the latest trends, and contributing to various tech
          communities. I'm always eager to learn and grow, and I look forward to
          making a meaningful impact in the tech world.
        </p>
        <Link href="/" className="text-4xl text-red-400">
          <p>Home</p>
        </Link>
      </main>
    </div>
  );
}
