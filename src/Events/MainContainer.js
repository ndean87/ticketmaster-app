import React, { Component } from 'react';
import EventForm from './EventForm';
import EventList from './EventList';

export default class MainContainer extends Component {
  constructor() {
    super()

    this.state = {
      searchField: '',
      events: [],
      clickedEventId: null,
      showError: null,
      isSearching: false,
    }
  }

  handleInputChange = (event) => {
    this.setState({
      searchField: event.target.value
    })
  }

  handleFetch = (event) => {
    event.preventDefault();
    const postalCode = this.state.searchField;

    this.setState({
      showError: null,
      isSearching: true,
    });

    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?postalCode=${postalCode}&apikey=DhwhlfhAGStRsrMQAEZXBAIq2LJW0EMr`)
    .then(res => res.json())
    .then(json => {
      if(json._embedded){
        this.setState({
          events: json._embedded.events,
          isSearching: false,
        })
      } else {
        this.setState({
          showError: "No events in this area, try a different zipcode!",
          events: [],
          isSearching: false,
        })
      }
    })
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
        <div className="container">
        <h2 className="event-list">What Cool Events I have Around Me.... damn</h2>
        {
          this.state.showError ?
            <div className="alert alert-danger text-center" role="alert">
              {this.state.showError}
            </div> :
            ''
        }
          <EventForm
            handleInputChange={this.handleInputChange}
            handleFetch={this.handleFetch}
            isSearching={this.state.isSearching}
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
