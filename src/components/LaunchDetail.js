import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Card from 'react-bootstrap/Card';
import Media from 'react-bootstrap/Media';
import { useQuery } from '@apollo/client';
import { GET_LAUNCH } from '../graphql/launches';

const LaunchDetail = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_LAUNCH, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Card className='text-center mt-3'>
      <Card.Header>
        <h3>Launch Details</h3>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <h1>{data.launch.mission_name}</h1>
        </Card.Title>
        <Media id='player'>
          <ReactPlayer url={data.launch.links.video_link} />
        </Media>
        <Card.Text className='mt-3 mb-3'>{data.launch.details}</Card.Text>
        <a className='btn btn-primary' href={data.launch.links.article_link}>
          Launch Details
        </a>
      </Card.Body>
    </Card>
  );
};

export default LaunchDetail;
