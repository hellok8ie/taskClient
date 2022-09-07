import React from "react";
import { TaskContextType } from "../types/taskType";

export const TasksContext = React.createContext<TaskContextType | null>(null);
