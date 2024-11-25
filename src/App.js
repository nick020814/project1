import './App.css';
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import React, { useReducer, useEffect, useRef, useState, useCallback, useContext } from 'react';
import Even from "./component/Even";


export const CountContext = React.createContext();
export const SetCountContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "SET":
      return action.value;
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  const [text, setText] = useState("");
  const didMountRef = useRef(false);

  const handleSetCount = useCallback((value) => {
    dispatch({ type: "SET", value });
  }, []);

  const handleChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    // console.log("업데이트: ", text, count);
  }, [text, count]);

  useEffect(() => {
    // console.log("컴포넌트 마운트");
  }, []);

  useEffect(() => {
    const intervalID = setInterval(() => {
      // console.log("깜빡");
    }, 1000);
    return () => {
      // console.log("클린업");
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className="App">
      <h1>Simple Counter Version 2</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <CountContext.Provider value={count}>
        <SetCountContext.Provider value={handleSetCount}>
          <section>
            <Viewer />
            {count % 2 === 0 && <Even />}
          </section>
          <section>
            <Controller />
          </section>
        </SetCountContext.Provider>
      </CountContext.Provider>
    </div>
  );
}

export default App;
