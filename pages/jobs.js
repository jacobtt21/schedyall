//Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go." - Joshua 1:9

import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";
import Link from "next/link";

const Jobs = () => {
  return (
    <Layout>
      <main>
        <h1 className="title">
          Want to join the team at  {" "}
          <Link href="../">
            <a>Schedyall?</a>
          </Link>
        </h1>
        <h2>Here at Schedyall we are looking for a motivated individual who wants to gain experience in the fields of Business, Web Development, and JAMstack.</h2>
        <p text-align="center">Click on position to apply</p>
        <div className="cover">
          <h4><a href="https://forms.gle/o9an3gxyDbCuyvey6">Frontend Developer &rarr;</a></h4>
            <h4><a href="https://forms.gle/o9an3gxyDbCuyvey6">Backend Developer &rarr;</a></h4>
          <h4><a href="https://forms.gle/o9an3gxyDbCuyvey6">Marketing Consultant &rarr;</a></h4>
          <p>As a marketing consultant you would be in charge of spreading the word about Schedyall.</p>
          <h4><a href="https://forms.gle/o9an3gxyDbCuyvey6">Brand Ambassador &rarr;</a></h4>
          <p>As a brand ambassador you would help spread the word about Schedyall in your local school, businesses.</p>
          <h4><a href="https://forms.gle/o9an3gxyDbCuyvey6">Business Manager &rarr;</a></h4>
          <p>As a businesses manager you would work closely with all schedyall teams to ensure operations are running smoothly and goals are being met.</p>
        </div>
      </main>
      <footer>
        <img src="/fb.png" alt="Facebook Logo" className="logo" />
        <img src="/insta.png" alt="Facebook Logo" className="logo" />
        <img src="/twitter.png" alt="Facebook Logo" className="logo" />
        &#169; 2020 Schedyall
      </footer>
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

       .cover{
         background-color: white;
         padding: 2%;
         border-radius: 10px;
         text-align: center;
       }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #232b2b;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }
        
        h2{
          text-align: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: #232b2b;
          text-decoration: none;
        }

        .title a {
          color: #eaeaea;
          text-decoration: none;
          background-image: linear-gradient(currentColor, currentColor);
          background-position: 0% 100%;
          background-repeat: no-repeat;
          background-size: 0% 2px;
          transition: background-size 0.3s;
        }

        .title a:hover,
        a:focus {
          background-size: 100% 2px;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Jobs;