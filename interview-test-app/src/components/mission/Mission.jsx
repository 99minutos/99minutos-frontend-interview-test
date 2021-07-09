import { useState, useEffect } from "react";

export const Mission = ({ apiData, selectedMission }) => {
  useEffect(() => {
    console.log(selectedMission);
  }, [selectedMission]);

  return (
    <div className="derecha">
      <div className="top">img</div>
      <div className="bottom">
        <h1>{selectedMission.mission_name}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          odit quaerat a quas error, quos impedit quia aspernatur obcaecati vel
          ut quam, eos alias dolorum molestias nam deserunt ad temporibus! Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Enim, aperiam.
          Exercitationem adipisci enim dolorem similique laudantium? Velit
          sapiente, iure tempore provident veniam dolor ducimus, laboriosam nemo
          accusamus consequuntur itaque id.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, in molestias recusandae velit quibusdam maiores nesciunt. Architecto sed quo a, accusamus, ut, iste impedit sit commodi nisi asperiores culpa quos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nulla maxime aperiam magni magnam temporibus cupiditate similique odio ut reprehenderit laborum natus ipsum ipsa a optio nam dolorem eum modi.
        </p>
        <a href="http://www.google.com/" target="_blank" rel="noreferrer">
        <button>See More</button>
</a>
      </div>
    </div>
  );
};

export default Mission;
