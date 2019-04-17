import React from 'react';

const TabPaneType = (props) => {
  return (
    <div className="tab-pane" id="type">
        <h4 className="info-text">What type of location do you have? </h4>
        <div className="row">
            <div className="col-sm-10 col-sm-offset-1">
                <div className="col-sm-4 col-sm-offset-2">
                  <div className="choice" data-toggle="wizard-radio" rel="tooltip" title="Select this option if you have a house.">
                    <input type="radio" name="type" value="House"/>
                    <div className="icon">
                        <i className="fa fa-home"></i>
                    </div>
                    <h6>House</h6>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="choice" data-toggle="wizard-radio" rel="tooltip" title="Select this option if you have an appartment">
                    <input type="radio" name="type" value="Appartment"/>
                    <div className="icon">
                        <i className="fa fa-building"></i>
                    </div>
                    <h6>Appartment</h6>
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default TabPaneType;
