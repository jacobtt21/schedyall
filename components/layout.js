import Head from "next/head";
import Header from "../components/header";
import styles from "./layout.module.css";
import { NextSeo } from 'next-seo';

const Layout = ({ children }) => (
  <>
    <NextSeo
      title="Schedyall"
      description="A better way to plan your day!"
    />
    <Head>
      <title>Schedyall</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />


    <div className={styles.container}>{children}</div>
  </>
);

export default Layout;
