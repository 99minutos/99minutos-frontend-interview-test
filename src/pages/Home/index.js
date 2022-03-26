import { Grid } from '@material-ui/core';
import MainLayout from '../../layout/MainLayout';
import ListSpace from '../../component/ListSpace';
import Wireframe from '../../component/wireframe';

function Home() {

  return (
    <MainLayout>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item md={4} xs={12} className="List">
            <ListSpace title="Last Launches"/>
          </Grid>
          <Grid item md={8} style={{ textAlign:'center' }} className="display-mobile">
            <Wireframe/>
          </Grid>
        </Grid>
    </MainLayout>
  );
}

export default Home;
