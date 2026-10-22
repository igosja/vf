import {TODO_DATA} from "./mock-data";

/** Tasks still in progress, for the nav bar. Swap the mock for a backend request later. */
export const getOngoingTasks = (limit = 8) => TODO_DATA.slice(0, limit);
