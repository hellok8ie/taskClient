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

    function getTaskById(id:ITask) {
        return axios.get(baseUrl + id).then(response => {
            return new Promise(resolve => resolve(response.data));
        });
    };

    function addTask(task:ITask) {
        return axios.post(baseUrl, task).then(response => {
            getTasks();
            return new Promise(resolve => resolve(response.data));
        });
    }

    function editTask(task:ITask) {
        return axios.put(baseUrl + task._id, task)
            .then(response => {
                getTasks()
                return new Promise(resolve => resolve(response.data));
            })
    }

    function deleteTask(id:ITask) {
        return axios.delete(baseUrl + id).then(response => {
            getTasks();
            return new Promise(resolve => resolve(response.data));
        });
    }

    return ( 
        <TasksContext.Provider value={{
            tasks,
            getTasks,
            addTask,
            editTask,
            deleteTask
        }}>
            { props.children }
        </TasksContext.Provider>
    )
}
