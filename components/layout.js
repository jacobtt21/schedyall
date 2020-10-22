import Head from "next/head";
import Header from "../components/header";
import styles from "./layout.module.css";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Schedyall</title>
      <link rel="icon" href="/favicon.JPG" />
    </Head>
    <Header />


    <div className={styles.container}>{children}</div>
  </>
);

export default Layout;
