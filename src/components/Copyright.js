import React from 'react';
import moment from 'moment';

export const Copyright = () => {
  let year = moment().format('yyyy');

  return (
    <>
      <div className="copyright py-4 text-center text-white">
        <div className="container"><small>Copyright © Radega  { year } </small></div>
      </div>

      <div className="scroll-to-top d-lg-none position-fixed">
        <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up"></i></a>
      </div>
    </>
  )
}
