import { render, screen } from "@testing-library/react"
import CardSpace from './index';

describe('CardSpace', ()=>{

    const data = {
        id:1,
        mission_name: 'test',
        details: 'lorem ipsum',
        links:{flickr_image:''},
    }

    let card = null;

    it('should render empty data', ()=>{
        render(<CardSpace space={{}}/>)
        expect(screen.getByText(/No Data Available/i)).toBeInTheDocument();
    })
    it('should render card with data', ()=>{
        card = render(<CardSpace 
            space={data}
            />);
        expect(screen.getByText(`${data.mission_name}`)).toBeInTheDocument();
        expect(screen.getByText(`${data.details}`)).toBeInTheDocument();
        expect(card).toMatchSnapshot()
    });
})