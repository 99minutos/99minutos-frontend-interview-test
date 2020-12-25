import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { LAST_LAUNCHES } from '../graphql/launches';
import Card from 'react-bootstrap/Card';

const Launches = () => {
  const { loading, error, data } = useQuery(LAST_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h1 className='mt-3'>Last Launches &#128640;</h1>
      {data.launchesPast.map((ele) => {
        return (
          <Card className='mt-3 mb-3'>
            <Card.Body>
              <Card.Title>
                <Link to={`/${ele.id}`}>{ele.mission_name}</Link>
              </Card.Title>
              <Card.Text as='div'>
                <h6>Launched from: </h6>
                {ele.launch_site.site_name_long}
              </Card.Text>
              <Card.Subtitle className='mb-2 text-muted text-right'>
                {new Date(ele.launch_date_utc).toLocaleDateString()}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default Launches;
