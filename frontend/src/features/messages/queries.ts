import {DIRECT_MESSAGES} from "./mock-data";

/** Direct messages. Read items come first on purpose: they are the threads still waiting on a reply. */
export const getDirectMessages = () => [
    ...DIRECT_MESSAGES.filter((item) => item.read),
    ...DIRECT_MESSAGES.filter((item) => !item.read),
];
