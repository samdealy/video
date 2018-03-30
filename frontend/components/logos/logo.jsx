import React from 'react';

export default ({ src, className, href, alt }) => {
  return(
    <a target='_blank' href={href}>
      <img alt={alt} className={className} src={src}></img>
    </a>
  )
}
