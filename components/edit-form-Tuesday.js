import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { gql } from "graphql-request";
import { useForm } from "react-hook-form";
import utilStyles from "../styles/utils.module.css";
import { graphQLClient } from "../utils/graphql-client";

const EditFormTuesday = ({ defaultValues, id, token }) => {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");

  const { handleSubmit, register, reset, errors } = useForm({
    defaultValues: {
      ...defaultValues,
    },
  });

  const onSubmit = handleSubmit(async ({ event }) => {
    if (errorMessage) setErrorMessage("");

    const mutation = gql`
      mutation UpdateATuesday($id: ID!, $event: String!) {
        updateTuesday(id: $id, data: { event: $event }) {
          event
        }
      }
    `;

    const variables = {
      id,
      event,
    };

    try {
      await graphQLClient(token).request(mutation, variables);
      router.push("/");
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  });

  useEffect(() => {
    reset(defaultValues); // asynchronously reset your form values
  }, [reset, defaultValues]);

  return (
    <>
      <form onSubmit={onSubmit} className={utilStyles.form}>
        <div>
          <label>Task</label>
          <input
            type="text"
            name="event"
            ref={register({ required: "Event is required" })}
          />
          {errors.task && (
            <span role="alert" className={utilStyles.error}>
              {errors.task.message}
            </span>
          )}
        </div>

        <div className={utilStyles.submit}>
          <button type="submit">Update</button>
        </div>
      </form>

      {errorMessage && (
        <p role="alert" className={utilStyles.errorMessage}>
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default EditFormTuesday;
