import { useState } from "react";
import '../Styles/Tasks.css';
function Tasks(){
    const [tasklist,settasks]=useState([]);
    function deleteEle(x){const f= tasklist.filter(
        (plant) => plant !== x)
        settasks(f);
    }
    return(
        <div className="tasks-div">
           <h2>Tasks:</h2>
           <ul>
           {tasklist.map(ele=>(<li>{ele.data}<button className="tasks-buttons" onClick={()=>deleteEle(ele)}> <i class="far fa-trash-alt"></i></button></li>))}
           </ul>
           <input id="input" maxLength="30" autoComplete="off"></input><button className="tasks-buttons" onClick={()=>{settasks([...tasklist,{data:document.getElementById("input").value,check:false}]);document.getElementById("input").value=""}}><i class="fas fa-plus"></i></button>
        </div>
    );
}
export default Tasks;