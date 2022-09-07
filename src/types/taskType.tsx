export interface ITask {
    title: string;
    completed?: boolean;
}

export type TaskContextType = {
    tasks: ITask[];
    getTasks: (tasks: ITask) => void;
    addTask: (task: ITask) => void;
}