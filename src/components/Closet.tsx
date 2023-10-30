// import { useState } from "react";
import TShirt from "./TShirt"

export default function Closet() {
    // const [tShirts, setTShirts] = useState([]);
    
    return (<>
                <div className="closet">
                {<div><TShirt left='40%'/></div>}
                {<div><TShirt left='36%'/></div>}
                {<div><TShirt left='32%'/></div>}
                {<div><TShirt left='28%'/></div>}
                {<div><TShirt left='24%'/></div>}
                {<div><TShirt left='20%'/></div>}
                {<div><TShirt left='16%'/></div>}
                {<div><TShirt left='12%'/></div>}
                {<div><TShirt left='8%'/></div>}
                    <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 58 58" >
                        <g>
                        <rect x="12" y="1" fill='#847059' width="34" height="54"/>
                        <polygon fill='#847059' points="7,1 0,1 0,58 3,58 3,55 3,3 	"/>
                        <polygon fill='#847059' points="51,1 55,3 55,55 55,58 58,58 58,1 	"/>
                        </g>
                        <rect x="12" y="4" fill='#665646' width="17" height="48"/>
                        <rect x="29" y="4" fill='#54473B' width="17" height="48"/>
                        <polygon fill='#9E8771' points="9,58 3,55 3,3 9,0 "/>
                        <rect x="9" y="0" fill='#AF9680' width="3" height="58"/>
                        <polygon fill='#9E8771' points="49,58 55,55 55,3 49,0 "/>
                        <rect x="46" y="0" fill='#AF9680' width="3" height="58"/>
                        <line fill='none' stroke='#382016' strokeWidth='2' strokeMiterlimit='10' x1="46" y1="9" x2="12" y2="9"/>
                        <rect x="12.007" y="43" fill='#9E8771' width="33.994" height="2"/>
                     </svg>
                </div>
            </>)
}