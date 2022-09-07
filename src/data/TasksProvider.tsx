import axios from "axios";
import React, { useEffect, useState } from "react";
import { ITask } from "../types/taskType";
import {TasksContext} from "./TasksContext";

export const TasksProvider = (props:any) => {

    const [ tasks, setTasks ] = useState<ITask[]>([]);
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

    function addTask(task:ITask) {
        return axios.post(baseUrl, task).then(response => {
            getTasks();
            return new Promise(resolve => resolve(response.data));
        });
    }

    return ( 
        <TasksContext.Provider value={{
            tasks,
            getTasks,
            addTask
        }}>
            { props.children }
        </TasksContext.Provider>
    )
}
