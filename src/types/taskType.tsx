export interface ITask {
    _id: string;
    title: string;
    completed: boolean;
    _v: boolean
}

export type TaskContextType = {
    tasks: ITask[];
    getTasks: (tasks: ITask) => void;
}