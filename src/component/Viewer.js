import React, {useContext} from "react";
import { CountContext } from "../App";

const Viewer = () => {
    const count = useContext(CountContext);
    console.log("Viewer");
    return (
        <div>
            <div>현재 카운트: </div>
            <h1>{count}</h1>
        </div>
    )
}
export default React.memo(Viewer);