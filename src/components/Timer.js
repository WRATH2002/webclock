import { useState, useEffect, useTransition } from "react";
import LiveClock from "./LiveClock";
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";
import { IoIosFlag } from "react-icons/io";
import { BsFillStopFill } from "react-icons/bs";
import { addTimeFlag, clearTimeFlag } from "../utils/timeSlice";
// import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { RxLapTimer } from "react-icons/rx";
import endtimer from "../assets/audio/endtimer.mp3";

const Timer = () => {
  const [flag, setFlag] = useState(false);
  const [mainFlag, setMainFlag] = useState(false);
  const [stopwatch, setStopwatch] = useState();
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  const [milisecond, setMilisecond] = useState("");

  useEffect(() => {
    if (flag === true) {
      const i = setInterval(() => {
        // increase();
        // var tempSecond = parseInt(second);
        // tempSecond = tempSecond + 1;

        // setSecond(tempSecond);

        var tempSecond = parseInt(second);
        tempSecond = tempSecond - 1;
        if (
          tempSecond === 0 ||
          tempSecond === 1 ||
          tempSecond === 2 ||
          tempSecond === 3 ||
          tempSecond === 4 ||
          tempSecond === 5 ||
          tempSecond === 6 ||
          tempSecond === 7 ||
          tempSecond === 8 ||
          tempSecond === 9
        ) {
          var tmps = "0" + tempSecond;
          setSecond(tmps);
        } else if (tempSecond === -1) {
          var tempMinute = parseInt(minute);
          tempMinute = tempMinute - 1;

          if (
            tempMinute === 0 ||
            tempMinute === 1 ||
            tempMinute === 2 ||
            tempMinute === 3 ||
            tempMinute === 4 ||
            tempMinute === 5 ||
            tempMinute === 6 ||
            tempMinute === 7 ||
            tempMinute === 8 ||
            tempMinute === 9
          ) {
            var tmpm = "0" + tempMinute;
            setMinute(tmpm);
            setSecond("59");
          } else if (tempMinute === -1) {
            var tempHour = parseInt(hour);
            tempHour = tempHour - 1;

            if (
              tempHour === 0 ||
              tempHour === 1 ||
              tempHour === 2 ||
              tempHour === 3 ||
              tempHour === 4 ||
              tempHour === 5 ||
              tempHour === 6 ||
              tempHour === 7 ||
              tempHour === 8 ||
              tempHour === 9
            ) {
              var tmph = "0" + tempHour;
              setHour(tmph);
              setMinute("59");
              setSecond("59");
            } else if (tempHour === -1) {
              // setMinute("59");
              setFlag(false);
              setMainFlag(false);
              playEndAudio();
              setMinute("");
              setHour("");
              setSecond("");
            } else {
              var tmph = tempHour;
              setHour(tmph);
              setMinute("59");
            }
          } else {
            var tmpm = tempMinute;
            setMinute(tmpm);
            setSecond("59");
          }
        } else {
          var tmps = tempSecond;
          setSecond(tmps);
        }
      }, 1000);

      return () => clearInterval(i);
    } else {
      setFlag(false);
    }
  });

  const dispatch = useDispatch();
  const cartItemInfo = useSelector((store) => store.time.timeFlag);
  console.log(cartItemInfo);

  function playEndAudio() {
    new Audio(endtimer).play();
  }

  function checkMinute(value) {
    var temp = parseInt(value);
    if (temp > 60) {
      setMinute("60");
    } else {
      setMinute(value);
    }
  }

  function checkSecond(value) {
    var temp = parseInt(value);
    if (temp > 60) {
      setSecond("60");
    } else {
      setSecond(value);
    }
  }

  function checkAll() {
    forSecond();
    forMinute();
    forHour();
  }

  function forMinute() {
    if (minute === "") {
      setMinute("00");
      // setMainFlag(false);
      // setFlag(false);
    } else {
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
        var subtemp = "0" + temp;
        setMinute(subtemp);
      } else {
        var subtemp = temp.toString();
        setMinute(subtemp);
      }
    }
  }

  function forSecond() {
    if (second === "") {
      setSecond("00");
      // setMainFlag(false);
      // setFlag(false);
    } else {
      var temp = parseInt(second);
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
        var subtemp = "0" + temp;
        setSecond(subtemp);
      } else {
        var subtemp = temp.toString();
        setSecond(subtemp);
      }
    }
  }

  function forHour() {
    if (hour === "") {
      setHour("00");
      // setMainFlag(false);
      // setFlag(false);
    } else {
      var temp = parseInt(hour);

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
        var subtemp = "0" + temp;
        setHour(subtemp);
      } else {
        var subtemp = temp.toString();
        setHour(subtemp);
      }
    }
  }

  return (
    <>
      <div className="w-full lg:w-[calc(100%-85px)] md:w-[calc(100%-85px)]  h-[calc(100%-75px)] lg:h-full md:h-full  rounded-2xl flex flex-col items-center justify-center">
        <div
          className="w-full h-[50px] lg:h-[80px] md:h-[100px]   flex justify-center items-center "
          style={{ transition: ".5s" }}
        >
          <div
            className="w-full h-full flex  justify-center items-center font-[timer]  text-white text-[30px] tracking-[3px] "
            style={{ transition: ".5s" }}
          >
            {mainFlag === false ? (
              <>
                <input
                  className="w-[60px] rounded-lg outline-none  bg-[#2e384f] text-white px-[15px] h-[40px] text-[23px] "
                  value={hour}
                  placeholder="00"
                  type="number"
                  onChange={(e) => setHour(e.target.value)}
                ></input>
                :
                <input
                  className="w-[60px] rounded-lg outline-none  bg-[#2e384f] text-white px-[15px] h-[40px] text-[23px] "
                  value={minute}
                  placeholder="00"
                  type="number"
                  onChange={(e) => {
                    // setMinute(e.target.value);
                    checkMinute(e.target.value);
                  }}
                ></input>
                :
                <input
                  className="w-[60px] rounded-lg outline-none  bg-[#2e384f] text-white px-[15px] h-[40px] text-[23px] "
                  value={second}
                  placeholder="00"
                  type="number"
                  onChange={(e) => {
                    // setSecond(e.target.value);
                    checkSecond(e.target.value);
                  }}
                ></input>
              </>
            ) : (
              <div
                className="w-full h-full flex flex-col justify-center items-center font-[timer2]  text-white text-[30px] tracking-[3px] drop-shadow-lg"
                style={{ transition: ".5s" }}
              >
                {hour}:{minute}:{second}
              </div>
            )}
          </div>
        </div>
        <div
          className="w-full h-0 mb-[20px] flex justify-start items-center flex-col overflow-y-scroll"
          style={{ transition: ".3s" }}
        >
          {/* {cartItemInfo.map((item, index) => {
            return <Flag key={index} datatwo={index} data={item} />;
            console.log(e.id);
          })} */}
        </div>
        <div
          className="w-full h-[50px]  lg:h-[90px] md:h-[90px] flex justify-center items-center "
          style={{ transition: ".5s" }}
        >
          {mainFlag === true ? (
            <div className="w-full flex justify-center items-center   ">
              <div
                className="w-[40px] h-[40px] bg-[#293040] text-white drop-shadow-lg flex justify-center items-center rounded-full text-[20px] font-bold mx-[5px] cursor-pointer hover:bg-[#28abe4]"
                style={{ transition: ".3s" }}
                onClick={() => {
                  setFlag(false);
                  setMainFlag(false);
                  setHour("");
                  setSecond("");
                  setMinute("");
                  // cleartimeflag();
                }}
              >
                <BsFillStopFill className="drop-shadow-lg" />
              </div>
              {flag === false ? (
                <>
                  <div
                    className="w-[40px] h-[40px] bg-[#293040] text-white drop-shadow-lg flex justify-center items-center rounded-full text-[20px] font-bold mx-[5px] cursor-pointer hover:bg-[#28abe4]"
                    style={{ transition: ".3s" }}
                    onClick={() => setFlag(true)}
                  >
                    <BsFillPlayFill className="drop-shadow-lg" />
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="w-[40px] h-[40px] bg-[#293040] text-white drop-shadow-lg flex justify-center items-center rounded-full text-[20px] font-bold mx-[5px] cursor-pointer hover:bg-[#28abe4]"
                    style={{ transition: ".3s" }}
                    onClick={() => setFlag(false)}
                  >
                    <BsFillPauseFill className="drop-shadow-lg" />
                  </div>
                </>
              )}
            </div>
          ) : (
            <>
              <button
                className="bg-[#28abe4] text-white text-[14px] h-[40px] px-[20px] py-[5px] flex justify-center items-center rounded-full font-semibold"
                onClick={() => {
                  setMainFlag(true);
                  setFlag(!flag);
                  checkAll();
                }}
              >
                START
              </button>
            </>
          )}
        </div>

        {/* <LiveClock /> */}
      </div>
    </>
  );
};

export default Timer;
