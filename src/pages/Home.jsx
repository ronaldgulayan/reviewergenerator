import React from "react";
import WaveBackground from "../components/WaveBackground";

function Home() {
  return (
    <div className='w-full h-screen relative bg-lightest'>
      <WaveBackground />
      <div className='w-full relative z-[2] h-screen flex items-center gap-y-5 px-pad-2 md:px-pad-5 justify-center flex-col'>
        <h1 className='text-darkest text-5xl font-roboto-condence'>
          <span className='underline decoration-green-500'>R</span>eviewer{" "}
          <span className='underline decoration-green-500'>G</span>
          enerator
        </h1>
        <q className='text-center font-roboto-regular text-zinc-700'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </q>
        <button className='border-2 font-roboto-bold border-green-500 px-7 py-3 bg-green-500 duration-100 hover:bg-green-600 active:bg-green-700 shadow-md rounded-md select-none text-lightest'>
          GET STARTED
        </button>
      </div>
    </div>
  );
}

export default Home;
