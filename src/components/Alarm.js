import { AiOutlinePlus } from "react-icons/ai";
import { MdTimer } from "react-icons/md";
import { BiSolidAlarm } from "react-icons/bi";
import { RxLapTimer } from "react-icons/rx";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addAlarmInfo } from "../utils/timeSlice";

const AlarmContainer = (props) => {
  const [slider, setSlider] = useState(false);
  return (
    <>
      <div className="w-full h-[60px] bg-[#282f3f] drop-shadow-lg font-[timer] rounded-xl flex justify-between items-center mb-[17px] px-[20px] ">
        <div className="w-[100px] h-full flex justify-start items-center font-[timer] tracking-[3px] font-bold text-[white]">
          {props.data.hour}:{props.data.minute} {props.data.dayflag}
        </div>
        <div className="w-[calc(100%-200px)] mx-[15px] font-semibold text-[14px] flex justify-start items-start text-white h-[21px] overflow-y-hidden ">
          {props.data.label}
        </div>
        <div className="w-[70px] h-full flex justify-end items-center ">
          {slider === false ? (
            <div
              className="w-[50px] h-[20px] bg-[#415167] rounded-full  flex   items-center drop-shadow-lg cursor-pointer select-none"
              style={{ transition: ".5s" }}
              onClick={() => setSlider(!slider)}
            >
              <div
                className="w-[13px] h-[13px] ml-[3.5px] bg-white rounded-full "
                style={{ transition: ".5s" }}
              ></div>
            </div>
          ) : (
            <div
              className="w-[50px] h-[20px] bg-[#28abe4] rounded-full  flex  items-center drop-shadow-lg cursor-pointer select-none"
              style={{ transition: ".5s" }}
              onClick={() => setSlider(!slider)}
            >
              <div
                className="w-[13px] h-[13px] ml-[33.5px] bg-white rounded-full "
                style={{ transition: ".5s" }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const Alarm = () => {
  const [pop, setPop] = useState(false);

  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [dayflag, setDayflag] = useState("");
  const [label, setLabel] = useState("");

  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const alarminfo = useSelector((store) => store.time.alarmInfo);
  console.log(alarminfo);

  function checkMinute(value) {
    var temp = parseInt(value);
    if (temp > 59) {
      setMinute("59");
    } else {
      setMinute(value);
    }
  }
  function checkHour(value) {
    var temp = parseInt(value);
    if (temp > 12) {
      setHour("12");
    } else {
      setHour(value);
    }
  }

  function reset() {
    setHour("");
    setMinute("");
  }

  function checkAll() {
    // forSecond();
    forMinute();
    forHour();
  }

  function forMinute() {
    var temp = parseInt(minute);
    if (
      temp === 0 ||
      temp === 1 ||
      temp === 2 ||
      temp === 3 ||
      temp === 4 ||
      temp === 5 ||
      temp === 6 ||
      temp === 7 ||
      temp === 8 ||
      temp === 9
    ) {
      var subtemp = "0" + temp.toString();
      setMinute(subtemp);
    }
  }

  function forHour() {
    console.log(hour);
    var temp = parseInt(hour);
    console.log("0" + temp.toString());

    if (
      temp === 1 ||
      temp === 2 ||
      temp === 3 ||
      temp === 4 ||
      temp === 5 ||
      temp === 6 ||
      temp === 7 ||
      temp === 8 ||
      temp === 9
    ) {
      var subtemp = "0" + temp.toString();
      console.log(typeof subtemp);
      setHour(subtemp);
      console.log(hour);
    }
  }

  function checkDayflag(value) {
    var temp = dayflag;
    console.log(temp);
    console.log(value);
    if (
      value == "a" ||
      value == "A" ||
      value == "p" ||
      value == "P" ||
      value == ""
    ) {
      var result = value.toUpperCase();
      setDayflag(result);
    }

    if (dayflag == "") {
      if (value == "a" || value == "A" || value == "p" || value == "P") {
        var result = value.toUpperCase();
        setDayflag(result);
      }
    } else if (dayflag === "A" || dayflag === "P") {
      if (value == "Am" || value == "AM" || value == "Pm" || value == "PM") {
        var result = value.toUpperCase();
        setDayflag(result);
      }
    }
  }

  function sendAlarmInfo() {
    if (hour != "" && minute != "" && dayflag != "") {
      forMinute();
      forHour();
      if (hour == "00") {
        setHour("12");
      }
      dispatch(addAlarmInfo({ hour, minute, dayflag, label }));
      setPop(false);
      setHour("");
      setMinute("");
      setDayflag("");
      setLabel("");
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <>
      <div className="w-[100%] lg:w-[calc(100%-85px)] md:w-[calc(100%-85px)] h-full  rounded-2xl flex flex-col items-center justify-center">
        {pop === true ? (
          <>
            <div
              className="w-full h-full lg:h-[240px] md:h-[240px] flex flex-col justify-between  items-center overflow-hidden  mb-[20px] bg-[#293040] rounded-xl drop-shadow-lg"
              // style={{ transition: ".5s" }}
            >
              <div className="w-full">
                <div className="w-full font-[timer] text-white text-[30px] tracking-[3px] drop-shadow-lg  h-[80px] p-[25px] flex justify-center items-center">
                  <input
                    className="w-[60px] h-[40px] rounded-lg outline-none  bg-[#2e384f] text-[20px] flex justify-center placeholder:text-center text-white px-[17px]"
                    value={hour}
                    placeholder="00"
                    type="number"
                    onChange={(e) => {
                      checkHour(e.target.value);
                      // forHour();
                    }}
                  ></input>
                  <span className="mx-[5px]">:</span>
                  <input
                    className="w-[60px] h-[40px] rounded-lg outline-none  bg-[#2e384f] text-[20px] flex justify-center items-center placeholder:text-center text-white px-[17px]"
                    value={minute}
                    placeholder="00"
                    type="number"
                    onChange={(e) => {
                      checkMinute(e.target.value);
                    }}
                  ></input>
                  <input
                    className="ml-[20px] lg:ml-[30px]  md:ml-[30px] w-[60px] h-[40px] rounded-lg outline-none  bg-[#2e384f] text-[20px] flex justify-center items-center placeholder:text-center text-white px-[16px]"
                    value={dayflag}
                    placeholder="AM"
                    type="text"
                    onChange={(e) => {
                      // setSecond(e.target.value);
                      checkDayflag(e.target.value);
                    }}
                  ></input>
                </div>

                <div className="w-full flex justify-center items-center ">
                  <input
                    value={label}
                    onChange={(e) => {
                      setLabel(e.target.value);
                      forHour();
                      forMinute();
                    }}
                    placeholder="Label ( Optional )"
                    className="font-[timer] w-[90%] h-[40px] rounded-lg outline-none drop-shadow-lg bg-[#2e384f] text-white px-[15px]"
                  ></input>
                </div>

                <div className="w-full flex justify-center items-center mt-[15px] font-semibold">
                  {error === true ? (
                    <span className="text-[#ff6300] font-[timer]">
                      Enter values to necessary fields
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="w-full flex justify-center items-center mb-[20px] ">
                <button
                  className="bg-[#28abe4] text-white text-[14px] h-[40px] px-[20px] py-[5px] flex justify-center items-center rounded-full font-semibold"
                  onClick={() => {
                    sendAlarmInfo();
                    // setPop(false);
                    // setHour("");
                    // setMinute("");
                    // setDayflag("");
                    // setLabel("");
                  }}
                >
                  ADD
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full h-[385px]  lg:h-[240px] md:h-[240px]  overflow-y-scroll ">
              {alarminfo.length === 0 ? (
                <></>
              ) : (
                <>
                  {alarminfo.map((info) => {
                    return <AlarmContainer data={info} />;
                  })}
                </>
              )}
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
              className="w-[40px] h-[40px] bg-[#293040] hover:bg-[#28abe4] flex justify-center items-center rounded-full text-[20px] font-bold cursor-pointer  drop-shadow-lg select-none"
              // style={{ transition: ".3s" }}
              onClick={() => {
                setPop(!pop);
                reset();
                setError(false);
              }}
            >
              <AiOutlinePlus
                className="rotate-[135deg] text-white  drop-shadow-lg"
                style={{ transition: ".3s" }}
              />
            </div>
          ) : (
            <div
              className="w-[40px] h-[40px] bg-[#293040] hover:bg-[#28abe4] flex justify-center items-center rounded-full text-[20px] font-bold cursor-pointer  drop-shadow-lg select-none"
              // style={{ transition: ".3s" }}
              onClick={() => {
                setPop(!pop);
                reset();
                setError(false);
              }}
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
