import React from 'react';

function Event({whatevsProps}) {
  return (
    <h1>An Event</h1>
  )
}

export default Event;

<Route exact path="/" component={MainContainer}/>
<Route path="/event/:id" component={Event}/>
