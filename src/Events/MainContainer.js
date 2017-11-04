import React, { Component } from 'react';
import EventForm from './EventForm';
import EventList from './EventList';

export default class MainContainer extends Component {
  constructor() {
    super()

    this.state = {
      searchField: '',
      events: [],
      clickedEventId: null
    }
  }

  handleInputChange = (event) => {
    this.setState({
      searchField: event.target.value
    })
  }

  handleFetch = (event) => {
    event.preventDefault();
    console.log("whats this", this.state.searchField)
    const postalCode = this.state.searchField
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?postalCode=${postalCode}&apikey=DhwhlfhAGStRsrMQAEZXBAIq2LJW0EMr`)
    .then(res => res.json())
    .then(json => this.setState({
      events: json._embedded.events
    }))
  }

  handleToggleModal = (idx) => {
    console.log("this id", idx)
    this.setState({
      clickedEventId: !this.state.clickedEventId ? idx : null
    })
  }

  render() {
    return(
      <div>
        <div className="jumbotron event-jumbotron">
          <h1 className="jumbotron-text display-1">Search Events By Zipcode!</h1>
        </div>
        <h2 className="event-list">What Cool Events I have Around Me.... damn</h2>
        <div className="container">
          <EventForm
            handleInputChange={this.handleInputChange}
            handleFetch={this.handleFetch}
          />
          <EventList
            events={this.state.events}
            handleOpenModal={this.handleOpenModal}
            clickedEventId={this.state.clickedEventId}
            handleToggleModal={this.handleToggleModal}
          />
        </div>
      </div>
    )
  }

}
