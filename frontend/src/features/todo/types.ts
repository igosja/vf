export type TodoItem = {
    id: number;
    label: string;
    color: string;
    title: string;
    description: string;
    completed: boolean;
    due: {date: string; time: string};
    files: {name: string; size: string}[];
    priority: string;
};
