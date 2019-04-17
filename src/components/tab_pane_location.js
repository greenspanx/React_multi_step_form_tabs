import React from 'react';

const TabPaneLocation = (props) => {
  return (
    <div className="tab-pane" id="location">
      <div className="row">
          <div className="col-sm-12">
            <h4 className="info-text"> Let's start with the basic details</h4>
          </div>
          <div className="col-sm-5 col-sm-offset-1">
              <div className="form-group">
                <label>City</label>
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Where is your place located?"/>
              </div>
          </div>
          <div className="col-sm-5">
            <div className="form-group">
               <label>Country</label><br/>
               <select name="country" className="form-control">
                  <option disabled="" selected="">- country -</option>
                  <option value="Australia"> Australia </option>
                  <option value="New Zealand"> New Zealand </option>
               </select>
            </div>
          </div>
          <div className="col-sm-5 col-sm-offset-1">
            <div className="form-group">
              <label>Accommodates</label>
              <select className="form-control">
                <option disabled="" selected="">- persons -</option>
                <option>1 Person</option>
                <option>2 Persons </option>
                <option>3 Persons</option>
                <option>4 Persons</option>
                <option>5 Persons</option>
                <option>6+ Persons</option>
              </select>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="form-group">
              <label>Rent price</label>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Rent price per day"/>
                <span className="input-group-addon">$</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default TabPaneLocation;
