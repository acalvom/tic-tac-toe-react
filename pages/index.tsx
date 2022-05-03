import type { NextPage } from "next";
import Head from "next/head";
import Board from "../components/Board";
import styles from "../styles/App.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TIC TAC TOE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>TIC TAC TOE</h1>
        <Board />
      </main>
    </div>
  );
};

export default Home;
