import React from 'react';
import HOCG from './HOCG';
function TextG({ Den }) {
  return (
    <div>
      {Den.map((ele) => {
        return (
          <>
            <p>{ele}</p>
          </>
        );
      })}
      <h1>Hello GREEN! </h1>
      <p>Start editing to see some magic happen:)</p>
    </div>
  );
}

export default HOCG(TextG);
