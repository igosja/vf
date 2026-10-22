import {TODO_DATA} from "./mock-data";

export const getOngoingTasks = (limit = 8) => TODO_DATA.slice(0, limit);
