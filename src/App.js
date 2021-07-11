import { useDispatch } from 'react-redux';
import { addLaunchs } from './redux/actions/launch';

import { useQuery } from '@apollo/client';
import { LAST_LAUNCHES } from './querys';

import MainLayout from './components/layout';
import LastLaunches from './components/views/LastLaunches';

import './styles/styles.css';
import Mission from './components/views/Mission';

function App() {
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(LAST_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  dispatch(addLaunchs(data.launchesPast));
  return (
    <MainLayout>
      <LastLaunches />
      <Mission />
    </MainLayout>
  );
}

export default App;
