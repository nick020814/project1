import React, { useRef, useEffect, useContext } from "react";
import { CountContext, SetCountContext } from "../App";

const Controller = () => {
    const handleSetCount = useContext(SetCountContext)
    const count = useContext(CountContext)
    console.log("Controller");
    const btnCount = useRef(0);
    const textRef = useRef();
    const handleOnChange = (e) => {
        handleSetCount(Number(e.target.value));
    };
    const handleOnClick = () => {
        textRef.current.value = "";
    }
    useEffect(()=>{
        //console.log("버튼 클릭 횟수: ", btnCount.current);
    });
    return(
        <div>
            <div>
                <button onClick={()=>{handleSetCount(count-1); btnCount.current++;}}>-1</button>
                <button onClick={()=>{handleSetCount(count-10); btnCount.current++;}}>-10</button>
                <button onClick={()=>{handleSetCount(count-100); btnCount.current++;}}>-100</button>
                <button onClick={()=>{handleSetCount(0); btnCount.current++;}}>0</button>
                <button onClick={()=>{handleSetCount(count+100); btnCount.current++;}}>+100</button>
                <button onClick={()=>{handleSetCount(count+10); btnCount.current++;}}>+10</button>
                <button onClick={()=>{handleSetCount(count+1); btnCount.current++;}}>+1</button>
            </div>
            <div style={{marginTop: 20}}>
                입력: <input ref={textRef} type="number" onChange={handleOnChange} />
                <button onClick={handleOnClick}>Clear</button>
            </div>
        </div>

    )
}
export default React.memo(Controller);