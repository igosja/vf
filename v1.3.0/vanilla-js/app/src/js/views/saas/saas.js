import { churnReasons } from "./churnReasons";
import { cohortRetention } from "./cohortRetention";
import { mrrMovement } from "./mrrMovement";
import { planMix } from "./planMix";
import { productEngagement } from "./productEngagement";
import { recentSubscriptions } from "./recentSubscriptions";
import { trialFunnel } from "./trialFunnel";

export const saas = () => {
  mrrMovement();
  planMix();
  productEngagement();
  trialFunnel();
  cohortRetention();
  recentSubscriptions();
  churnReasons();
};
