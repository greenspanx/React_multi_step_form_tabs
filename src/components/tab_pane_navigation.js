import React from 'react';

const TabPaneNavigation = (props) => {
  return (
    <div>
      <div className="wizard-header">
        <h3>
           <b>LIST</b> YOUR PLACE <br/>
           <small>This information will let us know more about your place.</small>
        </h3>
      </div>
      <div className="wizard-navigation">
         <ul>
            <li><a href="#location" data-toggle="tab">Location</a></li>
            <li><a href="#type" data-toggle="tab">Type</a></li>
            <li><a href="#facilities" data-toggle="tab">Facilities</a></li>
            <li><a href="#description" data-toggle="tab">Description</a></li>
         </ul>
      </div>
    </div>
  );
}

export default TabPaneNavigation;
