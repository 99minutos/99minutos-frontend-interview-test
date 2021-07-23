//import Carousel from 'react-bootstrap/Carousel';
import Space from '../../assets/space.png';
import './pictures.css';

const Pictures = (props) => (
  <>
    {props.item?.ships[0]?.image?.length >0 ? 
      (
        <div className='imageMission'>
          <img src={props.item.ships[0].image} alt="Mission" />
        </div>
      )
     : 
     (
      <div className="withoutImage">
        <img src={Space} alt='Space'/>
      </div> 
      )
    }
  </>
);

export default Pictures;