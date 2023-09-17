import React from "react";

function Container({ children }) {
  return (
    <div className='w-1/2 h-full rounded-2xl p-pad-2 shadow-md bg-white'>
      {children}
    </div>
  );
}

export default Container;
