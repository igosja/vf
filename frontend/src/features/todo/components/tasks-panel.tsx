import React from "react";
import {AppWindow, CircleCheck, Settings} from "lucide-react";

import NavButton from "@/components/layout/nav-bar/nav-button";
import NavPanel from "@/components/layout/nav-bar/nav-panel";
import {Badge} from "@/components/ui/badge";
import {Checkbox} from "@/components/ui/checkbox";
import IconButton from "@/components/ui/icon-button";

import {TODO_LABEL_VARIANT} from "../constants";
import {getOngoingTasks} from "../queries";

/** Nav bar panel with the ongoing tasks. Hidden below sm. */
const TasksPanel: React.FunctionComponent = () => {
    const tasks = getOngoingTasks();

    return (
        <li className="hidden sm:block">
            <NavPanel
                title="Ongoing Tasks"
                trigger={
                    <NavButton>
                        <CircleCheck/>
                        <span className="sr-only">Tasks</span>
                    </NavButton>
                }
                actions={
                    <>
                        <IconButton>
                            <AppWindow/>
                            <span className="sr-only">Open tasks</span>
                        </IconButton>
                        <IconButton>
                            <Settings/>
                            <span className="sr-only">Settings</span>
                        </IconButton>
                    </>
                }
            >
                <div className="-mx-6 no-scrollbar flex-1 overflow-y-auto pt-2">
                    {tasks.map((item) => (
                        <label key={item.id} className="flex gap-3 px-6 py-1">
                            <Checkbox className="mt-0.5"/>
                            <span className="min-w-0 flex-1 pb-3.5">
                                <span className="mb-1 block truncate text-sm text-emphasis-foreground">{item.title}</span>
                                <span className="flex items-center text-muted-foreground">
                                    <Badge variant={TODO_LABEL_VARIANT[item.label]} className="truncate">
                                        {item.label}
                                    </Badge>
                                    {item.due.date && (
                                        <>
                                            <span className="mx-2">-</span>
                                            <span className="text-xs">{item.due.date}</span>
                                        </>
                                    )}
                                    <span className="mx-2">-</span>
                                    <span className="text-xs font-medium">{item.priority}</span>
                                </span>
                            </span>
                        </label>
                    ))}
                </div>
            </NavPanel>
        </li>
    );
};

export default TasksPanel;
