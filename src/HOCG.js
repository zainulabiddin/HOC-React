import React from 'react';
const HOCG = (School) => {
  const ChildHOC = () => {
    const Den = ['rahim', 'rahul', 'zainul'];
    return (
      <>
        <div style={{ backgroundColor: 'blue', color: '#fff' }}>
          <School Den={Den} />
        </div>
      </>
    );
  };
  return ChildHOC;
};

export default HOCG;
