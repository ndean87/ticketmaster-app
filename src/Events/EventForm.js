import React from 'react';

function EventForm({ handleFetch, handleInputChange, isSearching }) {

  return (
    <div className="row">
      <div className="col-sm-6 offset-sm-3">
        <div className="form-group">
          <form onSubmit={handleFetch}>
            <label htmlFor="search">Search Events:</label>
            <input type="text" onChange={handleInputChange} id="search" className="form-control" placeholder="Enter a valid zipcode"/>
            <div className="button-wrapper">
              <button
                type="submit"
                className="btn btn-primary submit-button" 
              >
                {
                  isSearching ? 'Loading...' : 'Search'
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EventForm;
