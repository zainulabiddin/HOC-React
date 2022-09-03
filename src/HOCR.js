import React from 'react';
const HOCR = (School) => {
  const ChildHOC = () => {
    return (
      <>
        <div style={{ backgroundColor: 'red' }}>
          <School />
        </div>
      </>
    );
  };
  return ChildHOC;
};

export default HOCR;
