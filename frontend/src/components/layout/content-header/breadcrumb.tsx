import React, {Fragment} from "react";
import {ChevronRight} from "lucide-react";

type BreadcrumbProps = {
    items: string[];
};

/** The trail to the current page; the last item is the page itself. */
const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = ({items}) => {
    return (
        <nav aria-label="Breadcrumb" className="ml-6 hidden text-sm sm:block">
            <ol className="flex items-center">
                {items.map((item, index) => {
                    if (index === items.length - 1) {
                        return (
                            <li key={item} aria-current="page" className="text-muted-foreground">
                                {item}
                            </li>
                        );
                    }

                    return (
                        <Fragment key={item}>
                            <li>
                                <a href="#" className="text-foreground">
                                    {item}
                                </a>
                            </li>
                            <li aria-hidden="true" className="px-2 text-muted-foreground">
                                <ChevronRight className="size-3"/>
                            </li>
                        </Fragment>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
