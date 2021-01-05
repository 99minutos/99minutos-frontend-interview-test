import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

// Api Calls
import { GET_LAUNCHES } from "graphql/get-launches";

// Components
import Card from "ui/components/Card";

const Dashboard = () => {
  const { data } = useQuery(GET_LAUNCHES, {
    variables: { limit: 10, order: "desc" },
  });
  return (
    <>
      <h1>Last Launches</h1>
      <br />
      {data ? (
        data.launchesPast.map((launch) => (
          <Link
            style={{ textDecoration: "none" }}
            key={launch.id}
            to={`/mission/${launch.id}`}
          >
            <Card launch={launch} />
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Dashboard;
