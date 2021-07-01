import React from 'react'

const Card = ({photo, name, detail, date, video}) => {
    return (
      <div className="w-full rounded overflow-hidden shadow-lg my-2">
        {photo!=null?
         <div className="flex justify-center">
          <img className="h-60 max-h-full md:max-h-screen bg-auto bg-no-repeat bg-center" src={photo} alt="Sunset in the mountains"/>
         </div>
        : null}
      <div className="px-6 py-4">
       <div className="font-bold text-xl mb-2">{name}</div>
       <p className="text-grey-darker text-base">
        {detail}
       </p>
       <div className="flex flex-row-reverse">
        {date!=null?
         <p className="text-grey-darker text-base">
           {date}
         </p>
        : null}
       </div>
       {video!=null?
        <div className="flex justify-center">
          <a
           href={video}
           rel="noopener noreferrer"
           target="_blank"
           aria-describedby="link-new-window"
          >
           <button className="btn btn-blue btn-blue:hover">See more</button>
           </a>
        </div>
        : null}
      </div>
    </div>
    )
}

export default Card
