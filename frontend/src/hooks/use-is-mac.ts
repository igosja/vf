import {useSyncExternalStore} from "react";

const subscribe = () => () => {};

const detectMac = () => {
    const nav = navigator as Navigator & {userAgentData?: {platform?: string}};
    return /mac/i.test(nav.userAgentData?.platform ?? nav.platform ?? "");
};

const useIsMac = () => useSyncExternalStore(subscribe, detectMac, () => false);

export default useIsMac;
