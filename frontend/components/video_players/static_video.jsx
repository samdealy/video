import React from "react";


export default ({ videoSrc, idName, type }) => {

  return(
    <video className="background-video" autoPlay muted loop id={idName}>
      <source src={videoSrc} type={type}/>
    </video>
  )
}
