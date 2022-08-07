import Head from "next/head";
import Navbar from "../Navbar";

export default function Container({ children }) {
  return (
    <div>
      <Head>
        <title>Mark Anthony Lapada</title>
        <meta name="description" content="Let's build something together!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="p-3 flex justify-center h-screen">
        <div className="lg:w-[60%]">{children}</div>
      </main>
    </div>
  );
}
