import Head from "next/head";
import styles from "./layout2.module.css";
import Header from "../components/header";

const Layout2 = ({ children }) => (
  <>
    <Head>
      <title>Schedyall</title>
      <link rel="icon" href="/favicon.JPG" />
    </Head>

    <Header />

    <main>
      <div className={styles.container}>
        {children}
        <footer>
          <img src="/fb.png" alt="Facebook Logo" className="logo" />
          <img src="/insta.png" alt="Facebook Logo" className="logo" />
          <img src="/twitter.png" alt="Facebook Logo" className="logo" />
          &#169; 2020 Schedyall
        </footer>
      </div>
    </main>
    <style jsx>{`
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #232b2b;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0px;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .logo {
        height: 1em;
      }
    `}</style>
  </>
);

export default Layout2;
