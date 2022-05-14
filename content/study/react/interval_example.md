import styled from "styled-components";
import {
useRef,
useState,
useEffect,
useCallback,
useLayoutEffect
} from "react";
import { useNavigate } from "react-router-dom";

const First = () => {
const timer = useRef(null);
const [seconds, setSeconds] = useState(90);
let [count, setCount] = useState(100);
const navigate = useNavigate();

useLayoutEffect(() => {
const countdown = setInterval(() => {
if (parseInt(seconds) === 90) {
clearInterval(countdown);
setSeconds(seconds - 1);
}

      if (parseInt(seconds) > 0 && parseInt(seconds) < 90) {
        setSeconds(parseInt(seconds) - 1);
      } else {
        clearInterval(countdown);
        // navigate("/next");
      }
    }, 900);
    return () => {
      clearInterval(countdown);
      console.log("카운트 끝");
    };

}, [seconds]);

useLayoutEffect(() => {
let bgFillAnimation = setInterval(function () {
if (!timer.current) {
return;
}

      if (count === 100) {
        clearInterval(bgFillAnimation);
        setCount(count - 1);
        console.log(100);
        return;
      }
      if (count > 0 && count < 100) {
        setCount(() => {
          bgFill(count);
          count--;
        });
        console.log(99);
      } else {
        clearInterval(bgFillAnimation);
        console.log(0);
      }
    }, 900);

}, [count]);

// const countDownChart = useCallback(() => {
// let bgFillAnimation = setInterval(function () {
// if (!timer.current) {
// return;
// }

// if (count > 0) {
// setCount(() => {
// bgFill(count);
// count--;
// console.log(count);
// });
// } else {
// clearInterval(bgFillAnimation);
// }
// }, 900);

// return () => {
// clearInterval(bgFillAnimation);
// };
// }, [count]);

const bgFill = (percent) => {
timer.current.style.background = `conic-gradient(skyblue 0% ${percent}%, #000e33 ${percent}% 100%)`;
};

return (
<div>
<h1>카운트다운</h1>
<h2>{seconds < 10 ? `0${seconds}` : seconds}</h2>
<TimerBackground ref={timer} />
<button
onClick={() => {
setSeconds(90);
setCount(100);
}} >
다시하기
</button>
<br />
<button>다음 페이지로가기</button>
</div>
);
};

export default First;

const TimerBackground = styled.div` position: absolute; left: 50%; top: 2.8%; transform: translateX(-50%); width: 236px; height: 236px; background: skyblue; border: 1px solid #202137; border-radius: 50%;`;
