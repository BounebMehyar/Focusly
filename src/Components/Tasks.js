import { useState } from "react";
import '../Styles/Tasks.css';
function Tasks(){
    const [tasklist,settasks]=useState(localStorage.getItem('list') ==='' ? []:localStorage.getItem('list').split(','));

    var addToLocalStorageArray = function (name, value) {
        var existing = localStorage.getItem(name);
        existing = existing ? existing.split(',') : [];
        existing.push(value);
        localStorage.setItem(name, existing.toString());
    };

    function addEle(){
        addToLocalStorageArray("list",document.getElementById("input").value);
        settasks(localStorage.getItem("list").split(','));
        document.getElementById("input").value="";
    }

    var removefromLocalStorageArray = function (name, value) {
        var existing = localStorage.getItem(name).split(',');
        const f= existing.filter(
            (plant) => plant !== value);
        localStorage.setItem(name, f.toString());
    };


    function deleteEle(x){removefromLocalStorageArray('list',x);
        if(localStorage.getItem("list")===""){settasks([]);}
        else{settasks(localStorage.getItem("list").split(','));}
    }
    return(
        <div className="tasks-div">
           <h2>Tasks:</h2>
           <ul>
           {tasklist.map(ele=>(<li>{ele}<button className="tasks-buttons" onClick={()=>deleteEle(ele)}> <i class="far fa-trash-alt"></i></button></li>))}
           </ul>
           <input id="input" maxLength="30" autoComplete="off"></input><button className="tasks-buttons" onClick={addEle}><i class="fas fa-plus"></i></button>
        </div>
    );
}
export default Tasks;