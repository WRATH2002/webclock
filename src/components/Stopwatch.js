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

const Flag = (props) => {
  return (
    <>
      <div className="flex justify-center items-center h-[30px] max-h-[30px] min-h-[30px]">
        {props.datatwo + 1 === 1 ||
        props.datatwo + 1 === 2 ||
        props.datatwo + 1 === 3 ||
        props.datatwo + 1 === 4 ||
        props.datatwo + 1 === 5 ||
        props.datatwo + 1 === 6 ||
        props.datatwo + 1 === 7 ||
        props.datatwo + 1 === 8 ||
        props.datatwo + 1 === 9 ? (
          <span className="text-[#b5b5b5]">0{props.datatwo + 1}</span>
        ) : (
          <span className="text-[#b5b5b5]">{props.datatwo + 1}</span>
        )}

        <span className="text-[#b5b5b5] ml-[20px]">
          {props.data.minute}:{props.data.second}:{props.data.milisecond}
        </span>
      </div>
    </>
  );
};

const Stopwatch = () => {
  const [flag, setFlag] = useState(false);
  const [mainFlag, setMainFlag] = useState(false);
  const [stopwatch, setStopwatch] = useState();
  const [milisecond, setMilisecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");

  const dispatch = useDispatch();
  const cartItemInfo = useSelector((store) => store.time.timeFlag);
  console.log(cartItemInfo);

  useEffect(() => {
    if (flag === true) {
      const i = setInterval(() => {
        // increase();
        // var tempSecond = parseInt(second);
        // tempSecond = tempSecond + 1;

        // setSecond(tempSecond);

        var tempMilisecond = parseInt(milisecond);
        tempMilisecond = tempMilisecond + 1;
        if (
          tempMilisecond === 1 ||
          tempMilisecond === 2 ||
          tempMilisecond === 3 ||
          tempMilisecond === 4 ||
          tempMilisecond === 5 ||
          tempMilisecond === 6 ||
          tempMilisecond === 7 ||
          tempMilisecond === 8 ||
          tempMilisecond === 9
        ) {
          var tmpms = "0" + tempMilisecond;
        } else {
          var tmpms = tempMilisecond;
        }
        if (tempMilisecond === 100) {
          var tempSecond = parseInt(second);
          tempSecond = tempSecond + 1;

          if (
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
          } else {
            var tmps = tempSecond;
          }
          if (tempSecond === 60) {
            var tempMinute = parseInt(minute);
            tempMinute = tempMinute + 1;

            if (
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
            } else {
              var tmpm = tempMinute;
            }
            setMinute(tmpm);
            setSecond("00");
          } else {
            setSecond(tmps);
          }
          setMilisecond("00");
        } else {
          setMilisecond(tmpms);
        }

        // setMilisecond(tempMilisecond);
      }, 10);

      return () => clearInterval(i);
    } else {
      setFlag(false);
    }
    // setInterval(() => setTime(new Date()), 1000);
  });

  function increase() {
    var temp = parseInt(second);
    temp = temp + 1;
    setSecond(toString(temp));
  }

  function toggleStopwatch() {
    setFlag(!flag);
    // console.log(flag);
  }

  function setTimeFlag() {
    dispatch(addTimeFlag({ minute, second, milisecond }));
  }

  function cleartimeflag() {
    dispatch(clearTimeFlag());
  }

  console.log(flag);
  return (
    <>
      <div className="w-full lg:w-[calc(100%-85px)] md:w-[calc(100%-85px)]  h-[calc(100%-75px)] lg:h-full md:h-full  rounded-2xl flex flex-col items-center justify-center">
        <div
          className="w-full h-[50px] lg:h-[80px] md:h-[100px]   flex justify-center items-center "
          style={{ transition: ".5s" }}
        >
          <div
            className="w-full h-full flex flex-col justify-center items-center font-[timer2] font-thin  text-white text-[30px] tracking-[3px] drop-shadow-lg"
            style={{ transition: ".5s" }}
          >
            {minute}:{second}:{milisecond}
          </div>
        </div>
        {/* <button
          className="bg-[#28abe4] text-white px-[20px] py-[5px] flex justify-center items-center mt-[20px] rounded-full"
          onClick={() => setFlag(!flag)}
        >
          Start
        </button> */}
        {cartItemInfo.length === 0 ? (
          <div
            className="w-full h-0 mb-[20px] flex justify-start items-center flex-col overflow-y-scroll"
            style={{ transition: ".3s" }}
          >
            {cartItemInfo.map((item, index) => {
              return <Flag key={index} datatwo={index} data={item} />;
              // console.log(e.id);
            })}
          </div>
        ) : (
          <div
            className="w-full h-[calc(100%-60px)] lg:h-[calc(100%-137px)] md:h-[calc(100%-130px)]  mt-[23px] lg:mt-0 md:mt-0 mb-[35px] lg:mb-[15px] md:mb-[15px] flex justify-start items-center flex-col overflow-y-scroll"
            style={{ transition: ".5s" }}
          >
            {cartItemInfo.map((item, index) => {
              return <Flag key={index} datatwo={index} data={item} />;
              // console.log(e.id);
            })}
          </div>
        )}
        <div
          className="w-full h-[50px]  lg:h-[90px] md:h-[90px] flex justify-center items-center "
          style={{ transition: ".5s" }}
        >
          {flag === true || mainFlag === true ? (
            <div className="w-full flex justify-center items-center   ">
              {flag === false ? (
                <>
                  <div
                    className="w-[40px] h-[40px] bg-[#293040] text-white drop-shadow-lg flex justify-center items-center rounded-full text-[20px] font-bold mx-[5px] cursor-pointer hover:bg-[#28abe4]"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setFlag(false);
                      setMainFlag(false);
                      setMilisecond("00");
                      setSecond("00");
                      setMinute("00");
                      cleartimeflag();
                    }}
                  >
                    <BsFillStopFill className="drop-shadow-lg" />
                  </div>
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
                    onClick={() => setTimeFlag()}
                  >
                    <IoIosFlag className="drop-shadow-lg" />
                  </div>
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

export default Stopwatch;
