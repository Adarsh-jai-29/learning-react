import './App.js';
export default function Child({myname,tooltip}){
return(
<>
    <h2>i am from App {myname}</h2>
    <button title = {tooltip} >click me</button>
</>
)
}


