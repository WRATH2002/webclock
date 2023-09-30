import { useState } from "react";
import { useEffect } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  });
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center text-white drop-shadow-xl">
        <span className="font-[timer] tracking-[5px] font-bold text-[28px] drop-shadow-xl">
          {time.toLocaleTimeString()}
        </span>
        {/* <span className="font-[timer] tracking-[5px] font-bold text-[28px] drop-shadow-xl">
          01:23:45 AM
        </span> */}
        <button className="bg-[#28abe4] text-white px-[20px] py-[5px] flex justify-center items-center mt-[20px] rounded-full">
          Start
        </button>
      </div>
      {/* <span>{time.toLocaleTimeString()}</span> */}
    </>
  );
};

export default LiveClock;
