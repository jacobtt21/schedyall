//Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go." - Joshua 1:9

import Link from "next/link";
import useSWR from "swr";
import { gql } from "graphql-request";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import { graphQLClient } from "../utils/graphql-client";
import { getAuthCookie } from "../utils/auth-cookies";

const Home = ({ token }) => {
  const fetcher = async (query) => await graphQLClient(token).request(query);

  const { data, error, mutate } = useSWR(
    gql`
      {
        allTodos {
          data {
            _id
            task
            completed
          }
        }
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

  const toggleTodo = async (id, completed) => {
    const mutation = gql`
      mutation PartialUpdateTodo($id: ID!, $completed: Boolean!) {
        partialUpdateTodo(id: $id, data: { completed: $completed }) {
          _id
          completed
        }
      }
    `;

    const variables = {
      id,
      completed: !completed,
    };

    try {
      await graphQLClient(token)
        .setHeader("X-Schema-Preview", "partial-update-mutation")
        .request(mutation, variables);
      mutate();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteATodo = async (id) => {
    const mutation = gql`
      mutation DeleteATodo($id: ID!) {
        deleteTodo(id: $id) {
          _id
        }
      }
    `;

    try {
      await graphQLClient(token).request(mutation, { id });
      mutate();
    } catch (error) {
      console.error(error);
    }
  };

  if (error)
    return (
      <Layout>
        <main>
          <h1 className="title">
            Let's{" "}
            <Link href="../login">
              <a>get to WORK!</a>
            </Link>
          </h1>

          <p className="description">
            Let Schedyall help you by giving you a tool to manage your busy
            schedules, plan study or work sessions, build to do lists, and share
            documents with others!
          </p>

          <div className="grid">
            <a href="/login" className="card">
              <h3>Schedule &rarr;</h3>
              <p>Save and build your schedule to be accessed from anywhere.</p>
            </a>

            <a href="/login" className="card">
              <h3>To do list &rarr;</h3>
              <p>Create to do lists and prioritize what needs to be done.</p>
            </a>

            <a href="/login" className="card">
              <h3>Groups &rarr;</h3>
              <p>
                Have meetings or study with friends, classmates, or anyone else.
              </p>
            </a>

            <a href="/login" className="card">
              <h3>Doc share &rarr;</h3>
              <p>Share documents between others to easy access.</p>
            </a>
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

          .description {
            line-height: 1.5;
            width: 70%;
            font-size: 1.5rem;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #232b2b;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #eaeaea;
            border-color: #eaeaea;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
            animation: bounce; /* referring directly to the animation's @keyframe declaration */
            animation-duration: 2s; /* don't forget to set a duration! */
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
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
      <h2>Your Schedule!</h2>
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
          <h4>SATURDAY/SUNDAY</h4>
          <Link href="/new-week/new-Saturday">
            <a>Add to Saturday &rarr;</a>
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
      <h2>Your To-do list</h2>

      <Link href="/new">
        <a>Add to your list &rarr;</a>
      </Link>

      {data ? (
        <ul>
          {data.allTodos.data.map((todo) => (
            <li key={todo._id} className={styles.todo}>
              <span
                onClick={() => toggleTodo(todo._id, todo.completed)}
                style={
                  todo.completed
                    ? { textDecorationLine: "line-through" }
                    : { textDecorationLine: "none" }
                }
              >
                {todo.task}
              </span>
              <span className={styles.edit}>
                <Link href="/todo/[id]" as={`/todo/${todo._id}`}>
                  <a>Edit</a>
                </Link>
              </span>
              <span
                onClick={() => deleteATodo(todo._id)}
                className={styles.delete}
              >
                Delete
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div>loading...</div>
      )}
      <style jsx>{`
        a {
          color: black;
        }
        .row:after {
          content: "";
          display: table;
          clear: both;
        }
        .column {
          float: left;
          padding: 10px;
          text-align: center;
          background-color: white;
          margin: 0.1rem;
          border-radius: 10%;
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
