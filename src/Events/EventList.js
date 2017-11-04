import React from 'react';
import EventModal from './EventModal'

function EventList({
  events,
  handleOpenModal,
  showModal,
  handleToggleModal,
  clickedEventId
}) {


  const showEvents = () => {
    return events.map((event, idx) => {
      return (
      <li
        key={idx}
        className="event-wrapper col-md-6 col-lg-4 offset-lg-1"
      >
      <div className="card">
        <img className="event-image card-img-top" src={event.images[0].url} alt="Card image cap"/>
        <div className="card-body text-center">
          <h4 className="event-name card-title">{event.name}</h4>
          <div className="event-venue card-text">
            Where:
            <strong> {event._embedded.venues[0].name}</strong>
          </div>
          <button
            type="button"
            className="btn btn-link details-button"
            onClick={() => handleToggleModal(idx)}
          >
            Find Out More
          </button>
          <EventModal
            handleToggleModal={handleToggleModal}
            clickedEventId={clickedEventId}
            modalKey={idx}
            date={event.dates.start.dateTime}
            eventName={event.name}
            eventAddress={event._embedded.venues[0].address.line1}
            eventState={event._embedded.venues[0].state.name}
            eventVenue={event._embedded.venues[0].name}
          />
        </div>
      </div>

      </li>
    )})
  }
  console.log("trying for events", events)

    return (
    <div >
      <ul className="row events-list">
        {showEvents()}
      </ul>
    </div>
  )
}

export default EventList
