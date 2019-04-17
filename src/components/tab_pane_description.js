import React from 'react';

const TabPaneDescription = (props) => {
  return (
    <div className="tab-pane" id="description">
        <div className="row">
            <h4 className="info-text"> Drop us a small description. </h4>
            <div className="col-sm-6 col-sm-offset-1">
               <div className="form-group">
                  <label>Place description</label>
                  <textarea className="form-control" placeholder="" rows="9">
                  </textarea>
                </div>
            </div>
            <div className="col-sm-4">
               <div className="form-group">
                  <label>Example</label>
                  <p className="description">"The place is really nice. We use it every sunday when we go fishing. It is so awesome."</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default TabPaneDescription;
