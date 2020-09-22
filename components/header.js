import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const Header = () => {
  const router = useRouter();

  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data: user, mutate: mutateUser } = useSWR("/api/user", fetcher);

  const logout = async () => {
    const res = await fetch("/api/logout");
    if (res.ok) {
      mutateUser(null);
      router.push("/login");
    }
  };

  return (
    <div className="div">
      <header>
        <nav>
          <ul>
            {user ? (
              <>
                <div className="btns">
                  <button onClick={logout}>
                    <b>Logout</b>
                  </button>
                </div>
                <div className="btns">
                  <Link href="/profile">
                    <a>{user.email}</a>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="row">
                  <div className="logo">
                    <Link href="/">
                      <a>Schedyall</a>
                    </Link>
                  </div>
                  <div className="btns">
                    <Link href="/login">
                      <a>
                        <b>Login</b>
                      </a>
                    </Link>
                  </div>
                  <div className="btns">
                    <Link href="/signup">
                      <a>
                        <b>Sign Up</b>
                      </a>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </ul>
        </nav>
      </header>
      <style jsx>
        {`
          .div {
            background-color: none;
            position: fixed;
            width: 100%;
          }
          a {
            color: black;
            font-size: 125%;
          }
          .logo {
            float: left;
            margin-left: 0%;
          }
          .btns {
            border: 1px solid #232b2b;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            padding: 1rem;
            float: right;
            margin-right: 3%;
          }
          .btns:hover,
          .btns:focus,
          .btns:active {
            color: #eaeaea;
            border-color: #eaeaea;
          }
          button {
            font-size: inherit;
            font-family: inherit;
            border: 0;
            padding: 0;
            background: none;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
