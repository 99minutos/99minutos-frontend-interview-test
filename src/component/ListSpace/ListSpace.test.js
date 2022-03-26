import { render, screen } from "@testing-library/react";
import ListSpace from ".";
import SpaceProvider from "../../context/SpaceProvider";

describe('List Space', () => {
    const title = 'Last Launches';
    let List = null;
    const items = [
          {
              id:1,
              mission_name: "Starlink-15 (v1.0)",
              launch_date_local: "2020-10-24T11:31:00-04:00",
              links: {
                flickr_images: []
              },
              details: null,
          },
      ]

      beforeEach(()=> {List = render(<SpaceProvider data={items}>
        <ListSpace title={title}/>
    </SpaceProvider>)});

    it('should render component with title', ()=>{
        
        expect(screen.getByText(/Last Launches/i)).toBeInTheDocument();
    });

    it('should render a list of items', ()=>{
        const renderItems = screen.getAllByRole("listitem");
        expect(renderItems).toMatchSnapshot();
        expect(renderItems.length).toEqual(items.length);
        
    })
})