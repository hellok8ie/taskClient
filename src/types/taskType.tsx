export interface ITask {
    _id: string | null;
    title: string;
    completed: boolean;
}

export type TaskContextType = {
    tasks: ITask[];
    getTasks: (tasks: ITask) => void;
    addTask: (task: ITask) => void;
    editTask: (task: ITask) => void;
}