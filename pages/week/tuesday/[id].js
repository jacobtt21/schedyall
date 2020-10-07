import { useRouter } from "next/router";
import useSWR from "swr";
import { gql } from "graphql-request";
import Layout from "../../../components/layout";
import EditFormTuesday from "../../../components/edit-form-Tuesday";
import { graphQLClient } from "../../../utils/graphql-client";
import { getAuthCookie } from "../../../utils/auth-cookies";

const Tuesday = ({ token }) => {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = async (query) =>
    await graphQLClient(token).request(query, { id });

  const query = gql`
    query FindATuesdayByID($id: ID!) {
      findTuesdayByID(id: $id) {
        event
      }
    }
  `;

  const { data, error } = useSWR([query, id], fetcher);

  if (error) return <div>failed to load</div>;

  return (
    <Layout>
      <h1>Edit Tuesday</h1>

      {data ? (
        <EditFormTuesday
          defaultValues={data.findTuesdayByID}
          id={id}
          token={token}
        />
      ) : (
        <div>loading...</div>
      )}
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const token = getAuthCookie(ctx.req);
  return { props: { token: token || null } };
}

export default Tuesday;
