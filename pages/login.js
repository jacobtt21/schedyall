import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";
import Link from "next/link";

const Login = () => {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = handleSubmit(async (formData) => {
    if (errorMessage) setErrorMessage("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  });

  return (
    <Layout>
      <main>
        <h1 className="title">
          Login to{" "}
          <Link href="../">
            <a>Schedyall</a>
          </Link>
        </h1>

        <form onSubmit={onSubmit} className={utilStyles.form}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              ref={register({ required: "Email is required" })}
            />
            {errors.email && (
              <span role="alert" className={utilStyles.error}>
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              ref={register({ required: "Password is required" })}
            />
            {errors.password && (
              <span role="alert" className={utilStyles.error}>
                {errors.password.message}
              </span>
            )}
          </div>

          <div className={utilStyles.submit}>
            <button type="submit">Log in</button>
          </div>
        </form>

        {errorMessage && (
          <p role="alert" className={utilStyles.errorMessage}>
            {errorMessage}
          </p>
        )}
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

export default Login;
