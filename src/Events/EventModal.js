import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

function EventModal({
  clickedEventId,
  modalKey,
  handleToggleModal,
  date,
  eventName,
  eventAddress,
  eventVenue,
  eventState
}) {
  return(
    <Modal isOpen={modalKey === clickedEventId} toggle={handleToggleModal}>
      <ModalHeader toggle={handleToggleModal}>{eventName}</ModalHeader>
        <ModalBody>
          <div>
            <h4>Venue: {eventVenue}</h4>
          </div>
          <div>
            Address: {eventAddress}
          </div>
          <div>
            State: {eventState}
          </div>
          <div>
            Date: {date}
          </div>
        </ModalBody>
    </Modal>
  )

}

export default EventModal
