import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import Loading from './components/Loading';
import Elon from './components/Elon'
import { useDispatch } from 'react-redux';
import { initialData } from './redux/accion'
import DenseAppBar from './components/DenseAppBar';
import Layout from './layout/Layout'
import { LAUNCH } from './Apollo/query'

function App() {
  const { loading, data } = useQuery(LAUNCH);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialData(data?.launchesPast))
  }, [loading,data,dispatch])
  return (
    <div>
      <Elon/>
      <Loading text="Loading" loading={loading} />
      <DenseAppBar />
      <div style={{ paddingBottom: "1cm" }} />
      <Layout />
    </div>
  );
}

export default App;
