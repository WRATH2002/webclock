import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import LiveClock from "./components/LiveClock";
import Clock from "./components/Clock";
import Stopwatch from "./components/Stopwatch";
import Alarm from "./components/Alarm";
import { MdTimer } from "react-icons/md";
import { BiSolidAlarm } from "react-icons/bi";
import { RxLapTimer } from "react-icons/rx";
import Timer from "./components/Timer";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  const [mode, setMode] = useState(1);
  // const dispatch = useDispatch();

  return (
    <>
      <Provider store={store}>
        <div
          className="w-full h-[60px] lg:h-[80px] md:h-[80px] fixed bg-[#293040] drop-shadow-lg px-[40px]"
          style={{ zIndex: "5" }}
        >
          <span className="drop-shadow-lg flex justify-start items-center h-full font-[timer] font-extrabold text-white text-[18px] tracking-[3px]">
            WEBCLOCK.io
          </span>
        </div>
        <div className="w-[100%]   h-[100vh] flex justify-center items-center bg-[#1d212d]">
          {/* <LiveClock /> */}
          <div className="w-[70%] lg:w-[40%] md:w-[40%] h-[550px] lg:h-[350px] md:h-[350px] bg-[#232937] flex flex-col  lg:flex-row md:flex-row justify-between lg:justify-between md:justify-between items-between lg:items-center md:lg:items-center p-[15px] lg:p-[25px] md:p-[25px] drop-shadow-xl rounded-3xl">
            {mode === 1 ? <Alarm /> : mode === 2 ? <Stopwatch /> : <Timer />}
            <div className="w-[100%] lg:w-[60px] md:w-[60px] mt-[25px] lg:mt-0 md:mt-0   h-[50px] lg:h-full md:h-full  ml-0 lg:ml-[25px] md:ml-[25px] flex flex-row lg:flex-col md:flex-col justify-center items-center">
              {mode === 1 ? (
                <div
                  className="w-[50px] lg:w-full md:w-full  mx-[10px] lg:mx-0 md:mx-0 h-[50px] lg:h-[60px] md:h-[60px] my-[15px]  drop-shadow-lg rounded-xl flex justify-center items-center cursor-pointer bg-[#28abe4]"
                  style={{ transition: ".3s" }}
                  onClick={() => setMode(1)}
                >
                  <BiSolidAlarm className="text-[20px] lg:text-[26px] md:text-[26px] text-white  drop-shadow-lg " />
                </div>
              ) : (
                <div
                  className="w-[50px] lg:w-full md:w-full  mx-[10px] lg:mx-0 md:mx-0 h-[50px] lg:h-[60px] md:h-[60px] my-[15px] bg-[#282f3f] drop-shadow-lg rounded-xl flex justify-center items-center cursor-pointer hover:bg-[#28abe4]"
                  style={{ transition: ".3s" }}
                  onClick={() => setMode(1)}
                >
                  <BiSolidAlarm className="text-[20px] lg:text-[26px] md:text-[26px] text-white  drop-shadow-lg " />
                </div>
              )}
              {mode === 2 ? (
                <div
                  className="w-[50px] lg:w-full md:w-full  mx-[10px] lg:mx-0 md:mx-0 h-[50px] lg:h-[60px] md:h-[60px] my-[15px]  drop-shadow-lg rounded-xl flex justify-center items-center cursor-pointer bg-[#28abe4]"
                  style={{ transition: ".3s" }}
                  onClick={() => setMode(2)}
                >
                  <MdTimer className="text-[20px] lg:text-[26px] md:text-[26px] text-white  drop-shadow-lg " />
                </div>
              ) : (
                <div
                  className="w-[50px] lg:w-full md:w-full  mx-[10px] lg:mx-0 md:mx-0 h-[50px] lg:h-[60px] md:h-[60px] my-[15px] bg-[#282f3f] drop-shadow-lg rounded-xl flex justify-center items-center cursor-pointer hover:bg-[#28abe4]"
                  style={{ transition: ".3s" }}
                  onClick={() => setMode(2)}
                >
                  <MdTimer className="text-[20px] lg:text-[26px] md:text-[26px] text-white  drop-shadow-lg " />
                </div>
              )}
              {mode === 3 ? (
                <div
                  className="w-[50px] lg:w-full md:w-full  mx-[10px] lg:mx-0 md:mx-0 h-[50px] lg:h-[60px] md:h-[60px] my-[15px]  drop-shadow-lg rounded-xl flex justify-center items-center cursor-pointer bg-[#28abe4]"
                  style={{ transition: ".3s" }}
                  onClick={() => setMode(3)}
                >
                  <RxLapTimer className="text-[20px] lg:text-[26px] md:text-[26px] text-white  drop-shadow-lg " />
                </div>
              ) : (
                <div
                  className="w-[50px] lg:w-full md:w-full  mx-[10px] lg:mx-0 md:mx-0 h-[50px] lg:h-[60px] md:h-[60px] my-[15px] bg-[#282f3f] drop-shadow-lg rounded-xl flex justify-center items-center cursor-pointer hover:bg-[#28abe4]"
                  style={{ transition: ".3s" }}
                  onClick={() => setMode(3)}
                >
                  <RxLapTimer className="text-[20px] lg:text-[26px] md:text-[26px] text-white  drop-shadow-lg " />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* bg-[#28abe4] */}
      </Provider>
    </>
  );
}

export default App;
