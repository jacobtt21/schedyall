//Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go." - Joshua 1:9

import { useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { gql } from "graphql-request";
import { useForm } from "react-hook-form";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { graphQLClient } from "../../utils/graphql-client";
import { getAuthCookie } from "../../utils/auth-cookies";
import Link from "next/link";

const NewSaturday = ({ token }) => {
  const router = useRouter();

  const { data: user } = useSWR("/api/user");

  const [errorMessage, setErrorMessage] = useState("");

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = handleSubmit(async ({ event }) => {
    if (errorMessage) setErrorMessage("");

    const mutation = gql`
      mutation CreateASaturday($event: String!, $owner: ID!) {
        createSaturday(data: { event: $event, owner: { connect: $owner } }) {
          event
          owner {
            _id
          }
        }
      }
    `;

    const variables = {
      event,
      owner: user && user.id,
    };

    try {
      await graphQLClient(token).request(mutation, variables);
      router.push("/");
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  });

  return (
    <Layout>
      <h1>Create New Saturday</h1>
      <Link href="/">
        <a>&larr; Just kidding? Go back</a>
      </Link>

      <form onSubmit={onSubmit} className={utilStyles.form}>
        <div>
          <label>Event</label>
          <input
            type="text"
            name="event"
            placeholder="12:00 - Math"
            ref={register({ required: "Event is required" })}
          />
          {errors.task && (
            <span role="alert" className={utilStyles.error}>
              {errors.task.message}
            </span>
          )}
        </div>

        <div className={utilStyles.submit}>
          <button type="submit">Create</button>
        </div>
      </form>

      {errorMessage && (
        <p role="alert" className={utilStyles.errorMessage}>
          {errorMessage}
        </p>
      )}
      <style jsx>{`
        a {
          color: black;
        }
        form {
          margin-top: 0.7rem;
        }
      `}</style>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const token = getAuthCookie(ctx.req);
  return { props: { token: token || null } };
}

export default NewSaturday;
