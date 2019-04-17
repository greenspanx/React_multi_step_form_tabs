import React from 'react';
import TabPaneLocation from "./tab_pane_location";
import TabPaneType from "./tab_pane_type";
import TabPaneFacilities from "./tab_pane_facilities";
import TabPaneDescription from "./tab_pane_description";
import TabPaneFooter from "./tab_pane_footer";
import TabPaneNavigation from "./tab_pane_navigation";

const Content = (props) => {
  return (

    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <div className="wizard-container">
            <div className="card wizard-card" data-color="green" id="wizard">
              <form action="" method="">
                <TabPaneNavigation />
                <div className="tab-content">
                  <TabPaneLocation />
                  <TabPaneType />
                  <TabPaneFacilities />
                  <TabPaneDescription />
                </div>
                <TabPaneFooter />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
