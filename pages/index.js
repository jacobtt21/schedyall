//Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go." - Joshua 1:9
import Head from 'next/head'
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
            <img src="/asd.png" />
                  <h1>The smarter way
                  to plan your day</h1>
              <br />
              <br />
                  </div>
          </motion.div>
          <br />
          <div className="Personal">
            <h1>Schedyall for You</h1>
            <br />
            <br />
          <div className="row">
          <div className="column">
            <div className="add">
            <h2>Schedules &rarr;</h2>
            </div>
              <p>Save and build your schedule to be accessed from anywhere.</p>
          </div>
          <div className="column">
          <div className="sched1">
              <h4>MONDAY</h4>
            <a>Add to Monday &rarr;</a>
            <ol>
                <li className={styles.todo}>
                  <span>Spanish @ 7:00</span>
                  <span className={styles.edit}>
                      <a>Edit</a>
                  </span>
                  </li>
                  <li className={styles.todo}>
                  <span>Math @ 12:00</span>
                  <span className={styles.edit}>
                      <a>Edit</a>
                  </span>
                  </li>
                  <li className={styles.todo}>
                  <span>Chemistry @ 3:00</span>
                  <span className={styles.edit}>
                      <a>Edit</a>
                  </span>
                </li>
            </ol>
                </div>
                <div className="sched1">
              <h4>TUESDAY</h4>
            <a>Add to Tuesday &rarr;</a>
            <ol>
                <li className={styles.todo}>
                  <span>English @ 11:00</span>
                  <span className={styles.edit}>
                      <a>Edit</a>
                  </span>
                  </li>
                  <li className={styles.todo}>
                  <span>History @ 12:45</span>
                  <span className={styles.edit}>
                      <a>Edit</a>
                  </span>
                  </li>
            </ol>
                </div>
          </div>
            </div>
          <div className="row">
              <div className="column">
              <div className="sched2">
              <h4>TODO LIST</h4>
                  <a>Add to your Todo List &rarr;</a>
                  <br />
                  <br />
            <li className={styles.todo}>
                  <span>Call Mom :)</span>
                  <span className={styles.edit}>
                      <a>Edit</a>
                  </span>
                </li>
                <li className={styles.todo}>
                  <span><strike>Math Homework due tommorrow!</strike></span>
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
                  <span>Read Chemistry textbook</span>
                  <span className={styles.edit}>
                      <a>Edit</a>
                  </span>
                </li>
              </div>
            </div>
              <div className="column">
              <div className="add">
            <h2>&larr; To do Lists</h2>
            </div>
              <p>Create to do lists and prioritize what needs to be done.</p>
            </div>
            </div>
            <div className="row">
              <div className="column">
              <div className="add">
            <h2>Groups &rarr;</h2>
            </div>
              <p>
                Have meetings or study with friends, classmates, or anyone else.
              </p>
            </div>
              <div className="column">
                <div className="sched2">
                  <h3>JACOB'S GROUPS</h3>
                </div>
              <div className="sched3">
                  <h4><li>Study Group</li></h4>
                  <p>10+ Notifications</p>
                  <p><b>Study Group&rarr;</b></p>
                </div>
                <div className="sched3">
                  <h4><li>Work</li></h4>
                  <p>5 Notifications</p>
                  <p><b>Work&rarr;</b></p>
                </div>
                <div className="sched3">
                  <h4><li>Family</li></h4>
                  <p>2 Notifications</p>
                  <p><b>Family&rarr;</b></p>
              </div>
            </div>
          </div>
          </div>
          <div className="Business">
          <h3>Schedyall for Business</h3>
              <img src="/X.png"/>
            <p>Use the technology behind IODEFI intergrated with Schedyall to help you track logisitics, employees, order, and so much more.</p>
            <div className="add">
            <b>Learn more Here</b>
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

          .add{
            margin-bottom: 2rem;
            padding: 1rem;
            float: center;
            font-size: 110%;
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
            margin-bottom: 15rem;;
          }

          h1 {
            margin-bottom: 1.5rem;
          }

          .Personal {
            margin-bottom: 2%;
            font-size: 1.5rem;
            line-height: 1.15;
            text-align: center;
            background: linear-gradient(#6A82FB, #FC5C7D);
            border-radius: 10px;
            padding: 5%;
            width: 95%;
            color: white;
          }

          .sched1 {
            float: left;
            text-align: center;
            font-size: 70%;
            color: black;
            background:white;
            padding: 5px;
            border-radius: 10px;
            margin:2px;
            width: 49%;
          }

          .sched2 {
            float: left;
            text-align: center;
            font-size: 70%;
            color: black;
            background:white;
            padding: 5px;
            border-radius: 10px;
            margin:2px;
            width: 100%;
          }

          .sched3 {
            float: left;
            text-align: center;
            font-size: 70%;
            color: black;
            background:white;
            padding: 5px;
            border-radius: 10px;
            margin:2px;
            width: 32.6%;
          }

          .column {
            float: left;
            width: 50%;
            padding: 10px;
          }
          
          .row:after {
            content: "";
            display: table;
            clear: both;
            margin-bottom: 4rem;
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
          
          img {
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
