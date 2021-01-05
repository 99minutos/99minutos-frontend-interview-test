import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

// Styles
import { Center } from "globalStyles";

// Api Calls
import { GET_LAUNCH } from "graphql/get-launches";

// Components
import DetailCard from "ui/components/DetailCard";

const Mission = () => {
  const { id } = useParams(); // Get the id
  const { data } = useQuery(GET_LAUNCH, {
    variables: { id },
  });
  return <Center>{data && <DetailCard details={data.launch} />}</Center>;
};

export default Mission;
