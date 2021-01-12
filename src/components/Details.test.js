import { render } from '@testing-library/react';
import Details from "./Details"
import {BrowserRouter as Router, Route} from "react-router-dom"

const dummyData = {
    mission_name: "Name",
    details: "Details",
    links: {
        flickr_images: [
            "Image1"
        ],
        video_link: "videoLink",
        article_link: "articleLink"
    }
}
test("Details get Correct Info", () => {
    const {getByText, getByRole} = render(
        <Details launch={dummyData}/>
    )
    expect(getByText(/Name/i)).toBeInTheDocument()
    expect(getByText(/Details/i)).toBeInTheDocument()
    expect(getByText(/See More/i)).toBeInTheDocument()
    expect(getByRole('img')).toHaveAttribute('src', 'Image1')
})

