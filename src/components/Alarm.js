import { AiOutlinePlus } from "react-icons/ai";
import { MdTimer } from "react-icons/md";
import { BiSolidAlarm } from "react-icons/bi";
import { RxLapTimer } from "react-icons/rx";
import { AiTwotoneEdit } from "react-icons/ai";
import { GiAlarmClock } from "react-icons/gi";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addAlarmInfo, fiterinfo } from "../utils/timeSlice";
import endtimer from "../assets/audio/endtimer.mp3";
import { useEffect } from "react";

const AlarmContainer = (props) => {
  const [slider, setSlider] = useState(false);
  const dispatch = useDispatch();

  function removeitem(fid) {
    console.log("inside remove function");
    console.log(fid);
    dispatch(fiterinfo({ fid }));
  }

  return (
    <>
      <div className="w-full  font-[timer2] font-thin h-[60px] bg-[#282f3f] drop-shadow-lg rounded-xl flex justify-between items-center mb-[17px] px-[20px] ">
        <div className="w-[100px] h-full flex justify-start items-center  tracking-[1px]  text-[white]">
          {props.data.hour}:{props.data.minute} {props.data.dayflag}
        </div>
        <div className=" w-[calc(100%-185px)] mx-[15px]  text-[14px] hidden lg:flex md:flex justify-start items-start text-white h-[21px] overflow-y-hidden ">
          {props.data.label}
        </div>
        <div className="w-[55px] text-[20px]  h-full flex justify-between overflow-x-hidden text-ellipsis items-center ">
          {/* {slider === false ? (
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
          )} */}
          <AiTwotoneEdit
            className="text-white cursor-pointer hover:text-[#28abe4]"
            style={{ transition: ".3s" }}
          />
          <AiFillDelete
            className="text-white cursor-pointer hover:text-[#28abe4]"
            style={{ transition: ".3s" }}
            onClick={() => {
              var temp = props.data.indexid;
              console.log("inside onclick");
              removeitem(temp);
            }}
          />
        </div>
      </div>
    </>
  );
};

const Alarm = () => {
  const [pop, setPop] = useState(false);
  const [indexid, setIndexid] = useState(0);
  const [found, setFound] = useState(false);
  const [foundindex, setFoundindex] = useState(0);
  const [foundsound, setfoundsound] = useState(false);

  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [dayflag, setDayflag] = useState("");
  const [label, setLabel] = useState("");

  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const alarminfo = useSelector((store) => store.time.alarmInfo);
  console.log(alarminfo);

  const [time, setTime] = useState(new Date());

  const [liveHour, setLiveHour] = useState(new Date());
  const [liveMinute, setLiveMinute] = useState(new Date());
  const [liveMilisecond, setLiveMilisecond] = useState(new Date());
  useEffect(() => {
    if (foundsound === true) {
      // playEndAudio();
    }
    setInterval(() => {
      getdate();
      checkAlarm();
    }, 1000);
  });

  function checkAlarm() {
    var tempDayFlag;
    var tempLiveHour = parseInt(liveHour);
    var tempLiveMinute = parseInt(liveMinute);

    if (tempLiveHour > 12) {
      var subtempLiveHour = parseInt(liveHour) - 12;
      tempDayFlag = "PM";
    } else {
      var subtempLiveHour = parseInt(liveHour);
      tempDayFlag = "AM";
    }
    // console.log(tempDayFlag);

    alarminfo.forEach((info) => {
      if (info.dayflag == tempDayFlag) {
        // console.log(true);
        var alarmHour = parseInt(info.hour);
        if (alarmHour == subtempLiveHour) {
          var alarmMinute = parseInt(info.minute);
          if (alarmMinute == tempLiveMinute) {
            var fid = info.indexid;
            setfoundsound(true);
            dispatch(fiterinfo({ fid }));
          }
        }
      } else {
        // console.log(false);
      }
    });

    // ------------------

    // if (templivehour > 12) {
    //   var temp = parseInt(liveHour) - 12;
    //   alarminfo.forEach((info) => {
    //     var temptwo = parseInt(info.hour);
    //     if (temp === temptwo) {
    //       playEndAudio();
    //       var isLiveMinute = parseInt(liveMinute);
    //       var isTempMinute = parseInt(info.minute);
    //       if (isLiveMinute == isTempMinute) {
    //         var fid = info.indexid;
    //         dispatch(fiterinfo({ fid }));
    //       }
    //     }
    //   });
    // } else {
    //   var tempp = parseInt(liveHour);
    //   alarminfo.forEach((info) => {
    //     var temptwoo = parseInt(info.hour);
    //     if (tempp === temptwoo) {
    //       var isLiveMinute = parseInt(liveMinute);
    //       var isTempMinute = parseInt(info.minute);
    //       if (isLiveMinute == isTempMinute) {
    //         var fid = info.indexid;
    //         dispatch(fiterinfo({ fid }));
    //       }
    //       playEndAudio();
    //     }
    //   });
    // }
  }

  function playEndAudio() {
    new Audio(endtimer).play();
    setfoundsound(false);
  }

  function getdate() {
    const date = new Date();
    const lhour = date.getHours();
    const lminute = date.getMinutes();
    const lmilisecond = date.getMilliseconds();
    setLiveHour(lhour);
    setLiveMinute(lminute);
    setLiveMilisecond(lmilisecond);
  }

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
    setLabel("");
    setDayflag("");
  }

  function checkAll() {
    // forSecond();
    forMinute();
    forHour();
  }

  function forMinute() {
    // var temp = parseInt(minute);
    // if (
    //   temp === 0 ||
    //   temp === 1 ||
    //   temp === 2 ||
    //   temp === 3 ||
    //   temp === 4 ||
    //   temp === 5 ||
    //   temp === 6 ||
    //   temp === 7 ||
    //   temp === 8 ||
    //   temp === 9
    // ) {
    //   var subtemp = "0" + temp.toString();
    //   setMinute(subtemp);
    // }
    if (minute.length != 2) {
      var sub = parseInt(minute);
      console.log("sub");
      console.log(sub);
      if (sub < 10) {
        var subtemp = sub.toString();
        var temp = "0".concat(subtemp);
        setMinute(temp);
        console.log("temp");
        console.log(minute);
      } else {
        var subtemp = sub.toString();
        setMinute(subtemp);
      }
    }
  }

  function forHour() {
    // console.log(hour);
    // var temp = parseInt(hour);
    // setHour("");
    // console.log("0" + temp.toString());

    // if (
    //   temp === 1 ||
    //   temp === 2 ||
    //   temp === 3 ||
    //   temp === 4 ||
    //   temp === 5 ||
    //   temp === 6 ||
    //   temp === 7 ||
    //   temp === 8 ||
    //   temp === 9
    // ) {
    //   var q = temp.toString();
    //   var zero = "0";
    //   var subtemp = zero.concat(q);
    //   console.log(typeof subtemp);
    //   setHour(subtemp);
    //   console.log(hour);
    // }
    if (hour.length != 2) {
      var sub = parseInt(hour);
      console.log("sub");
      console.log(sub);
      if (sub < 10) {
        var subtemp = sub.toString();
        var temp = "0".concat(subtemp);
        setHour(temp);
        console.log("temp");
        console.log(hour);
      } else {
        var subtemp = sub.toString();
        setHour(subtemp);
      }
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
    if (hour != "" && minute != "" && dayflag.length === 2) {
      forMinute();
      forHour();
      if (hour == "00") {
        setHour("12");
      }
      dispatch(addAlarmInfo({ hour, minute, dayflag, label, indexid }));
      setIndexid(indexid + 1);
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
                <div className="w-full font-[timer2]   font-thin text-white text-[30px] tracking-[3px]   h-[80px] p-[25px] flex justify-center items-center">
                  <input
                    className="w-[60px] h-[40px] rounded-lg outline-none  bg-transparent  text-[20px] flex justify-center placeholder:text-center text-white px-[17px]"
                    value={hour}
                    placeholder="00"
                    type="number"
                    onChange={(e) => {
                      checkHour(e.target.value);
                      // forHour();
                    }}
                  ></input>
                  <span className="">:</span>
                  <input
                    className="w-[60px] h-[40px] rounded-lg outline-none  bg-transparent  text-[20px] flex justify-center items-center placeholder:text-center text-white px-[17px]"
                    value={minute}
                    placeholder="00"
                    type="number"
                    onChange={(e) => {
                      checkMinute(e.target.value);
                    }}
                  ></input>
                  <input
                    className="ml-[20px] lg:ml-[30px]  md:ml-[30px] w-[60px] h-[40px] rounded-lg outline-none  bg-transparent  text-[20px] flex justify-center items-center placeholder:text-center text-white px-[16px]"
                    value={dayflag}
                    placeholder="AM"
                    type="text"
                    onChange={(e) => {
                      // setSecond(e.target.value);
                      checkDayflag(e.target.value);
                      forHour();
                      forMinute();
                    }}
                  ></input>
                </div>

                <div className="w-full flex justify-center items-center  font-[timer2] font-thin ">
                  <input
                    value={label}
                    onChange={(e) => {
                      setLabel(e.target.value);
                      // forHour();
                      // forMinute();
                    }}
                    placeholder="Label ( Optional )"
                    className="font-[timer] w-[90%] h-[40px] rounded-lg outline-none  bg-transparent text-white px-[15px]"
                  ></input>
                </div>
                {/* <div className="text-white">
                  {liveHour}:{liveMinute}:{liveMilisecond}
                </div> */}

                <div className="w-full flex justify-center items-center mt-[15px] font-semibold">
                  {error === true ? (
                    <span className="text-[#ff6300]  font-[timer2] font-thin">
                      Enter proper Time
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
                    // forHour();

                    sendAlarmInfo();
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
                <>
                  <div className="w-full h-full flex justify-center items-center text-[110px] text-[#ffffff57]">
                    <GiAlarmClock />
                  </div>
                </>
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
