import React from 'react';

const TabPaneFooter = (props) => {
  return (
    <div className="wizard-footer">
      <div className="pull-right">
        <input type='button' className='btn btn-next btn-fill btn-success btn-wd btn-sm' name='next' value='Next' />
        <input type='button' className='btn btn-finish btn-fill btn-success btn-wd btn-sm' name='finish' value='Finish' />
      </div>
      <div className="pull-left">
        <input type='button' className='btn btn-previous btn-fill btn-default btn-wd btn-sm' name='previous' value='Previous' />
      </div>
      <div className="clearfix"></div>
    </div>
  );
}

export default TabPaneFooter;
