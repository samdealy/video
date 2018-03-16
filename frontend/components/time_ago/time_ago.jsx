import React from 'react';
import TimeAgo from 'react-timeago';

export default ({ timeStamp }) => {
  const date = new Date(timeStamp);
  return(
    <TimeAgo date={date} />
  )
}
