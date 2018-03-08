import React from "react";


export default ({ src, idName, type }) => {
  const opts = {
     height: '390',
     width: '640',
     playerVars: {
       autoplay: 0,
       loop: 1,
       controls: 0,
       disablekb: 1,
       showinfo: 0,
       modestbranding: 1,
       start: '345',
       end: '390'
     }
   };

  return(
    <video className="background-video" autoPlay muted loop id={idName}>
      <source src={src} type={type}/>
    </video>
  )
}
