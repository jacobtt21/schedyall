//Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go." - Joshua 1:9

import Link from "next/link";
import useSWR from "swr";
import { gql } from "graphql-request";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import { graphQLClient } from "../utils/graphql-client";
import { getAuthCookie } from "../utils/auth-cookies";
import { motion } from "framer-motion"

const Home = ({ token }) => {
  const fetcher = async (query) => await graphQLClient(token).request(query);

  const { data, error, mutate } = useSWR(
    gql`
      {
        allMondays {
          data {
            _id
            event
          }
        }
        allTuesdays {
          data {
            _id
            event
          }
        }
        allWednesdays {
          data {
            _id
            event
          }
        }
        allThursdays {
          data {
            _id
            event
          }
        }
        allFridays {
          data {
            _id
            event
          }
        }
        allSaturdays {
          data {
            _id
            event
          }
        }
        allSundays {
          data {
            _id
            event
          }
        }
      }
    `,
    fetcher
  );

  if (error)
    return (
      <Layout>
        <main>
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
            scale: .8,
            opacity: 0
            },
            visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .6
            }
          },
          }}>
            <div className="title">
              <div className="row">
              <div className="words">
                  <h1>The smarter way
                  to plan your day</h1>
                  </div>
                <div className="words">
            <img src="/BLACK.JPG"/>
              </div>
            </div>
            </div>
          </motion.div>
          <div className="Personal">
          <div className="words">
              <div className="sched">
              <h4>MONDAY</h4>
            <a>Add to Monday &rarr;</a>
            <ol>
                <li className={styles.todo}>
                  <span>Read Assignment</span>
                  <span className={styles.edit}>
                      <a>Edit</a>
                  </span>
                  </li>
                  <li className={styles.todo}>
                  <span>Dinner with John</span>
                  <span className={styles.edit}>
                      <a>Edit</a>
                  </span>
                </li>
            </ol>
              </div>
              <div className="sched">
              <h4>TUESDAY</h4>
            <a>Add to Tuesday &rarr;</a>
            <ol>
                <li className={styles.todo}>
                  <span>Math @ 12</span>
                  <span className={styles.edit}>
                      <a>Edit</a>
                  </span>
                </li>
                <li className={styles.todo}>
                  <span>English Due tonight!</span>
                  <span className={styles.edit}>
                      <a>Edit</a>
                  </span>
                  </li>
                  <li className={styles.todo}>
                  <span>Meeting with Chris</span>
                  <span className={styles.edit}>
                      <a>Edit</a>
                  </span>
                </li>
            </ol>
              </div>
            </div>
            <div className="words">
              <h3>Schedyall For you</h3>
              <p>With Schedyall, you can plan your days with ease and help get yourself organized for everything to come.</p>
            </div>
          </div>
          <div className="Business">
            <div className="words">
              <h3>Schedyall For Buiness</h3>
              <p>With so many features, Schedyall can help you organize appointments, track logistics, add to team schedules, and so much more.</p>
            </div>
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
            justify-content: center;
            align-items: center;
            margin: auto;
            width: 100%;
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
          .title {
            margin-bottom: 2%;
            line-height: 1.15;
            font-size: 2.5rem;
            text-align: center;
            background: none;
            border-radius: 10px;
            padding: 5%;
            width: 95%;
            height: 50vh;

          }

          h1 {
            margin-bottom: 0;
          }

          .Personal {
            margin-bottom: 2%;
            line-height: 1.15;
            font-size: 2.5rem;
            text-align: center;
            background: linear-gradient(#89fffd, #ef32d9);
            border-radius: 10px;
            padding: 5%;
            width: 95%;
            color: white;
          }

          .Business {
            margin-bottom: 2%;
            line-height: 1.15;
            font-size: 2.5rem;
            text-align: center;
            background: linear-gradient(#FC5C7D, #6A82FB);
            border-radius: 10px;
            padding: 5%;
            width: 95%;
            color: white;
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
          .row:after {
            content: "";
            display: table;
            clear: both;
          }
          .words{
            float: left;
            width: 50%;
            padding: 10px;
            text-align: center;
          }
          .sched {
            float: left;
            text-align: center;
            font-size: 40%;
            color: black;
            background:white;
            padding: 5px;
            border-radius: 10px;
            margin:auto;
          }
        `}</style>
      </Layout>
    );

  return (
    <Layout>
      <main>
      <div className="add">
        &larr; Edit Week &rarr;
      </div>
      <div className="row">
        <div className="column">
          <h4>MONDAY</h4>
          <Link href="/new-week/new-Monday">
            <a>Add to Monday &rarr;</a>
          </Link>
          {data ? (
            <ol>
              {data.allMondays.data.map((mon) => (
                <li key={mon._id} className={styles.todo}>
                  <span>{mon.event}</span>
                  <span className={styles.edit}>
                    <Link
                      href="/week/monday/[id]"
                      as={`/week/monday/${mon._id}`}
                    >
                      <a>Edit</a>
                    </Link>
                  </span>
                </li>
              ))}
            </ol>
          ) : (
            <div>loading...</div>
          )}
        </div>
        <div className="column">
          <h4>TUESDAY</h4>
          <Link href="/new-week/new-Tuesday">
            <a>Add to Tuesday &rarr;</a>
          </Link>
          {data ? (
            <ol>
              {data.allTuesdays.data.map((tue) => (
                <li key={tue._id} className={styles.todo}>
                  <span>{tue.event}</span>
                  <span className={styles.edit}>
                    <Link
                      href="/week/tuesday/[id]"
                      as={`/week/tuesday/${tue._id}`}
                    >
                      <a>Edit</a>
                    </Link>
                  </span>
                </li>
              ))}
            </ol>
          ) : (
            <div>loading...</div>
          )}
        </div>
        <div className="column">
          <h4>WEDNESDAY</h4>
          <Link href="/new-week/new-Wednesday">
            <a>Add to Wednesday &rarr;</a>
          </Link>
          {data ? (
            <ol>
              {data.allWednesdays.data.map((wed) => (
                <li key={wed._id} className={styles.todo}>
                  <span>{wed.event}</span>
                  <span className={styles.edit}>
                    <Link
                      href="/week/wednesday/[id]"
                      as={`/week/wednesday/${wed._id}`}
                    >
                      <a>Edit</a>
                    </Link>
                  </span>
                </li>
              ))}
            </ol>
          ) : (
            <div>loading...</div>
          )}
        </div>
        <div className="column">
          <h4>THURSDAY</h4>
          <Link href="/new-week/new-Thursday">
            <a>Add to Thursday &rarr;</a>
          </Link>
          {data ? (
            <ol>
              {data.allThursdays.data.map((thur) => (
                <li key={thur._id} className={styles.todo}>
                  <span>{thur.event}</span>
                  <span className={styles.edit}>
                    <Link
                      href="/week/thursday/[id]"
                      as={`/week/thursday/${thur._id}`}
                    >
                      <a>Edit</a>
                    </Link>
                  </span>
                </li>
              ))}
            </ol>
          ) : (
            <div>loading...</div>
          )}
        </div>
        <div className="column">
          <h4>FRIDAY</h4>
          <Link href="/new-week/new-Friday">
            <a>Add to Friday &rarr;</a>
          </Link>
          {data ? (
            <ol>
              {data.allFridays.data.map((fri) => (
                <li key={fri._id} className={styles.todo}>
                  <span>{fri.event}</span>
                  <span className={styles.edit}>
                    <Link
                      href="/week/friday/[id]"
                      as={`/week/friday/${fri._id}`}
                    >
                      <a>Edit</a>
                    </Link>
                  </span>
                </li>
              ))}
            </ol>
          ) : (
            <div>loading...</div>
          )}
        </div>
        <div className="column">
          <h4>THE WEEKEND</h4>
          <Link href="/new-week/new-Saturday">
            <a>Add to the Weekend &rarr;</a>
          </Link>
          {data ? (
            <ol>
              {data.allSaturdays.data.map((sat) => (
                <li key={sat._id} className={styles.todo}>
                  <span>{sat.event}</span>
                  <span className={styles.edit}>
                    <Link
                      href="/week/saturday/[id]"
                      as={`/week/saturday/${sat._id}`}
                    >
                      <a>Edit</a>
                    </Link>
                  </span>
                </li>
              ))}
            </ol>
          ) : (
            <div>loading...</div>
          )}
        </div>
      </div>
        </main>
        <style jsx>{`
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 1.5rem;;
          }
          a {
            color: #232b2b;
            text-decoration: none;
          }
          .row:after {
          content: "";
          display: table;
          clear: both;
        }
        .column {
          float: left;
          text-align: center;
          font-size: 80%;
        }
        .add{
          margin-bottom: 2rem;
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
        .add:hover,
          .btns:focus,
          .btns:active {
            border-radius: 10px;
            background-color: #CBCBCB;
            padding: 10px;
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
          }
          @media (max-width: 600px) {
            .row {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>
      </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const token = getAuthCookie(ctx.req);
  return { props: { token: token || null } };
}

export default Home;
