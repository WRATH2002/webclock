import { AiOutlinePlus } from "react-icons/ai";
import { MdTimer } from "react-icons/md";
import { BiSolidAlarm } from "react-icons/bi";
import { RxLapTimer } from "react-icons/rx";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";

const Alarm = () => {
  const [pop, setPop] = useState(false);
  const [slider, setSlider] = useState(false);
  return (
    <>
      <div className="w-[100%] lg:w-[calc(100%-85px)] md:w-[calc(100%-85px)] h-full  rounded-2xl flex flex-col items-center justify-center">
        {pop === true ? (
          <div
            className="w-full h-[240px]  overflow-hidden  mb-[20px] bg-[#293040] rounded-xl drop-shadow-lg"
            style={{ transition: ".5s" }}
          >
            <div className="p-[25px] flex justify-center items-center">
              <span className="flex justify-center items-center mx-[30px]">
                <input
                  min={0}
                  max={12}
                  className="h-[30px] w-[70px] rounded-md outline-none px-[15px]"
                  type="number"
                ></input>
                <BiChevronDown className="text-[20px] text-black ml-[-25px] h-[30px]  cursor-pointer" />
              </span>
              <span className="flex justify-center items-center mx-[30px]">
                <input
                  min="0"
                  max="24"
                  className="h-[30px] w-[70px] rounded-md outline-none px-[15px]"
                  type="number"
                ></input>
                <BiChevronDown className="text-[20px] text-black ml-[-25px] h-[30px]  cursor-pointer" />
              </span>
              <span className="flex justify-center items-center mx-[30px]">
                <input
                  className="h-[30px] w-[70px] rounded-md outline-none px-[15px]"
                  type="text"
                ></input>
                <BiChevronDown className="text-[20px] text-black ml-[-25px] h-[30px]  cursor-pointer" />
              </span>

              {/* <input className="h-[30px] w-[70px] mx-[20px] outline-none px-[15px]"></input>
              <input className="h-[30px] w-[70px] mx-[20px] outline-none px-[15px]"></input> */}
            </div>
            <span className="w-full"></span>
          </div>
        ) : (
          <>
            <div className="w-full h-[240px]  overflow-hidden  mb-[20px]">
              <div className="w-full h-[60px] bg-[#282f3f] drop-shadow-lg rounded-xl flex justify-between items-center mb-[17px]">
                <div className="w-[50%] h-full flex justify-start items-center px-[50px] font-[timer] tracking-[3px] font-bold text-[white]">
                  7:30 AM
                </div>
                <div className="w-[50%] h-full flex justify-end items-center px-[50px]">
                  {slider === false ? (
                    <div
                      className="w-[50px] h-[20px] bg-[#415167] rounded-full  flex   items-center drop-shadow-lg cursor-pointer"
                      style={{ transition: ".3s" }}
                      onClick={() => setSlider(!slider)}
                    >
                      <div
                        className="w-[13px] h-[13px] ml-[3.5px] bg-white rounded-full "
                        style={{ transition: ".3s" }}
                      ></div>
                    </div>
                  ) : (
                    <div
                      className="w-[50px] h-[20px] bg-[#28abe4] rounded-full  flex  items-center drop-shadow-lg cursor-pointer"
                      style={{ transition: ".3s" }}
                      onClick={() => setSlider(!slider)}
                    >
                      <div
                        className="w-[13px] h-[13px] ml-[33.5px] bg-white rounded-full "
                        style={{ transition: ".3s" }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full h-[60px] bg-[#282f3f] drop-shadow-lg rounded-xl flex justify-between items-center mb-[17px]">
                <div className="w-[50%] h-full flex justify-start items-center px-[50px] font-[timer] tracking-[3px] font-bold text-[white]">
                  7:30 AM
                </div>
                <div className="w-[50%] h-full flex justify-end items-center px-[50px]">
                  <div
                    className="w-[23px] h-[23px] bg-black rounded-full mr-[-20px] z-3"
                    style={{ zIndex: "3" }}
                  ></div>
                  <div className="w-[50px] h-[20px] bg-slate-500 rounded-full"></div>
                </div>
              </div>
              <div className="w-full h-[60px] bg-[#282f3f] drop-shadow-lg rounded-xl flex justify-between items-center mb-[17px]">
                <div className="w-[50%] h-full flex justify-start items-center px-[50px] font-[timer] tracking-[3px] font-bold text-[white]">
                  7:30 AM
                </div>
                <div className="w-[50%] h-full flex justify-end items-center px-[50px]">
                  <div
                    className="w-[23px] h-[23px] bg-black rounded-full mr-[-20px] z-3"
                    style={{ zIndex: "3" }}
                  ></div>
                  <div className="w-[50px] h-[20px] bg-slate-500 rounded-full"></div>
                </div>
              </div>
              <div className="w-full h-[60px] bg-[#282f3f] drop-shadow-lg rounded-xl flex justify-between items-center mb-[17px]">
                <div className="w-[50%] h-full flex justify-start items-center px-[50px] font-[timer] tracking-[3px] font-bold text-[white]">
                  7:30 AM
                </div>
                <div className="w-[50%] h-full flex justify-end items-center px-[50px]">
                  <div
                    className="w-[23px] h-[23px] bg-black rounded-full mr-[-20px] z-3"
                    style={{ zIndex: "3" }}
                  ></div>
                  <div className="w-[50px] h-[20px] bg-slate-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <div
              className="w-full h-0  overflow-hidden  mb-[20px] bg-slate-400 "
              style={{ transition: ".5s" }}
            ></div>
          </>
        )}

        <div className="w-full flex justify-center items-center   ">
          {pop === true ? (
            <div
              className="w-[40px] h-[40px] bg-[#293040] hover:bg-[#28abe4] flex justify-center items-center rounded-full text-[20px] font-bold cursor-pointer  drop-shadow-lg"
              style={{ transition: ".3s" }}
              onClick={() => setPop(!pop)}
            >
              <AiOutlinePlus
                className="rotate-[135deg] text-white  drop-shadow-lg"
                style={{ transition: ".3s" }}
              />
            </div>
          ) : (
            <div
              className="w-[40px] h-[40px] bg-[#293040] hover:bg-[#28abe4] flex justify-center items-center rounded-full text-[20px] font-bold cursor-pointer  drop-shadow-lg"
              style={{ transition: ".3s" }}
              onClick={() => setPop(!pop)}
            >
              <AiOutlinePlus
                className="rotate-[0] text-white  drop-shadow-lg"
                style={{ transition: ".3s" }}
              />
            </div>
          )}
        </div>
      </div>

      {/* <div className="w-[60px] h-full  ml-[25px]">
        <div className="w-full h-[60px] my-[30px] bg-[#282f3f] drop-shadow-lg rounded-xl flex justify-center items-center cursor-pointer">
          <BiSolidAlarm className="text-[26px] text-white" />
        </div>
        <div className="w-full h-[60px] my-[30px] bg-[#282f3f] drop-shadow-lg rounded-xl flex justify-center items-center cursor-pointer">
          <MdTimer className="text-[26px] text-white" />
        </div>
        <div className="w-full h-[60px] my-[30px] bg-[#282f3f] drop-shadow-lg rounded-xl flex justify-center items-center cursor-pointer">
          <RxLapTimer className="text-[26px] text-white" />
        </div>
      </div> */}
      {/* <span>hello</span> */}
    </>
  );
};

// #282f3f

export default Alarm;
