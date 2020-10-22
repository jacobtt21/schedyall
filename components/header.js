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
                  <Link href="/soon">
                    <a>{user.email}</a>
                  </Link>
                </div>
                <div className="btns">
                  <Link href="/soon">
                    <a>To-do Lists</a>
                  </Link>
                </div>
                <div className="btns">
                  <Link href="/soon">
                    <a>Groups</a>
                  </Link>
                </div>
                <div className="btns">
                  <Link href="/">
                    <a>Schedule</a>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="row">
                  <div className="logo">
                    <Link href="/">
                      <a>Schedyall BETA</a>
                    </Link>
                    </div>
                    <div className="btnss">
                    <Link href="/jobs">
                      <a>
                        <b>Company</b>
                      </a>
                    </Link>
                    </div>
                    <div className="btnss">
                    <Link href="/soon">
                      <a>
                        <b>Blog</b>
                      </a>
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
            margin-top: 25px;
            background-color: none;
            width: 100%;
            position: absolute;
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
            padding: 1rem;
            float: right;
            margin-right: 3%;
            font-size: inherit;
            font-family: inherit;
            border: 0;
            padding: 0;
            background: none;
            cursor: pointer;
            -webkit-transition-duration: 0.4s;
            transition-duration: 0.4s;
          }
          .btnss {
            padding: 1rem;
            float: left;
            margin-left: 3%;
            font-size: inherit;
            font-family: inherit;
            border: 0;
            padding: 0;
            background: none;
            cursor: pointer;
            -webkit-transition-duration: 0.4s;
            transition-duration: 0.4s;
          }
          button {
            background-color: inherit;
            border: none;
            border-radius: 10px;
            color: black;
            font-size: inherit;
            font-family: inherit;
            padding: 1px;
          }
          .btns:hover,
          .btns:focus,
          .btns:active {
            border-radius: 10px;
            background-color: #CBCBCB;
            padding: 10px;
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
          }
          .btnss:hover,
          .btnss:focus,
          .btnss:active {
            border-radius: 10px;
            background-color: #CBCBCB;
            padding: 10px;
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
          }
        `}
      </style>
    </div>
  );
};

export default Header;
