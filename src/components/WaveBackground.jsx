import React from "react";
import Wave from "react-wavify";

function WaveBackground() {
  return (
    <Wave
      options={{
        height: 200,
        amplitude: 100,
        speed: 0.2,
        points: 5,
      }}
      fill='#A1CCD1'
      className='w-full h-full border absolute bottom-0 z-[1]'
    />
  );
}

export default WaveBackground;
