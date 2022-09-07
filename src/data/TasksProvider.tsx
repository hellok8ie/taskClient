import axios from "axios";
import { useEffect, useState } from "react";
import TasksContext from "./TasksContext";

export const TasksProvider = (props:any) => {

    const [ tasks, setTasks ] = useState([]);
    const baseUrl = "http://localhost:3000/api/tasks/";

    useEffect(() => {
        async function fetchData() {
            await getTasks();
        }
        fetchData();
    }, []);

    function getTasks() {
        return axios.get(baseUrl).then(response => setTasks(response.data));
    }

    return ( 
        <TasksContext.Provider value={{
            tasks,
            getTasks
        }}>
            { props.children }
        </TasksContext.Provider>
    )
}
