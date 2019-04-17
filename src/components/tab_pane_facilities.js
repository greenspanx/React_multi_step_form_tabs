import React from 'react';

const TabPaneFacilities = (props) => {
  return (
    <div className="tab-pane" id="facilities">
        <h4 className="info-text">Tell us more about facilities. </h4>
        <div className="row">
            <div className="col-sm-5 col-sm-offset-1">
              <div className="form-group">
                  <label>Your place is good for</label>
                  <select className="form-control">
                    <option disabled="" selected="">- type -</option>
                    <option>Business</option>
                    <option>Vacation </option>
                    <option>Work</option>
                  </select>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-group">
                  <label>Is air conditioning included ?</label>
                  <select className="form-control">
                    <option disabled="" selected="">- response -</option>
                    <option>Yes</option>
                    <option>No </option>
                  </select>
              </div>
             </div>
             <div className="col-sm-5 col-sm-offset-1">
              <div className="form-group">
                  <label>Does your place have wi-fi?</label>
                  <select className="form-control">
                    <option disabled="" selected="">- response -</option>
                    <option>Yes</option>
                    <option>No </option>
                  </select>
               </div>
              </div>
              <div className="col-sm-5">
               <div className="form-group">
                  <label>Is breakfast included?</label>
                  <select className="form-control">
                    <option disabled="" selected="">- response -</option>
                    <option>Yes</option>
                    <option>No </option>
                  </select>
               </div>
              </div>
        </div>
    </div>
  );
}

export default TabPaneFacilities;
