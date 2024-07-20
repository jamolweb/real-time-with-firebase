// pages/index.js
import Head from "next/head";
import Chat from "../../components/Chat";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Live Chat App</title>
      </Head>
      <main>
        <h1>Live Chat App</h1>
        <Chat />
      </main>
    </div>
  );
}
