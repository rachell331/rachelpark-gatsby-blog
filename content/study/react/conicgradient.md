## conic-gradient와 useEffect & setInterval을 활용해서 반시계방향으로 떨어지는 차트 만들기

```
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
  const retrybtn = useRef();
  const [seconds, setSeconds] = useState(90);
  let [count, setCount] = useState(100);
  const navigate = useNavigate();

  useEffect(() => {
   const handleClick = () => {
   setCount(100);
   console.log("클릭이벤트", count);
   };
   retrybtn.current.addEventListener("click", handleClick);

return () => {
    if (retrybtn.current)
    retrybtn.current.removeEventListener("click", handleClick);
    };
   });

  useLayoutEffect(() => {
    let bgFillAnimation = setInterval(function () {
      if (count >= 0 && count < 100) {
        setCount(count - 1);
        bgFill(count);
        console.log(99, count);
      }
      if (count === 100) {
        clearInterval(bgFillAnimation);
        setCount(count - 1);
        console.log(100, count);
      }
      if (count === 0) {
        clearInterval(bgFillAnimation);
        console.log("return", count);
      }
    }, 900);

    return () => {
      clearInterval(bgFillAnimation);
    };
  }, [count]);

  const bgFill = (percent) => {
    timer.current.style.background = `conic-gradient(skyblue 0% ${percent}%, #000e33 ${percent}% 100%)`;
  };

  return (
    <div>
      <TimerBackground ref={timer} />
      <button ref={retrybtn}>다시하기</button>
      <br />
      <button>다음 페이지로가기</button>
    </div>
  );
};

export default First;

const TimerBackground = styled.div`
  position: absolute;
  left: 50%;
  top: 2.8%;
  transform: translateX(-50%);
  width: 236px;
  height: 236px;
  background: skyblue;
  border: 1px solid #202137;
  border-radius: 50%;
`;

```
