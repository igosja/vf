import { activeUsersUpdate } from "../../views/analytics/activeUsers";
import { visitDurationUpdate } from "../../views/analytics/averageVisitDurarion";
import { sessionsByCountryUpdate } from "../../views/analytics/sessionsByCountry";
import { userAcquisitionChartUpdate } from "../../views/analytics/userAcquisition";
import { visitsBySourceUpdate } from "../../views/analytics/visitsBySource";
import { chartsUpdate } from "../../views/charts/charts";
import { convertedLeadsUpdate } from "../../views/crm/convertedLeads";
import { leadsByIndustryUpdate } from "../../views/crm/leadsByIndustry";
import { leadsGenerationRateUpdate } from "../../views/crm/leadsGenerationRate";
import { leadsSourcesUpdate } from "../../views/crm/leadsSources";
import { outboundCallsUpdate } from "../../views/crm/outboundCalls";
import { resolutionByChannelUpdate } from "../../views/crm/resolutionByChannel";
import { campaignReachUpdate } from "../../views/email-marketing/campaignReach";
import { campaignSalesUpdate } from "../../views/email-marketing/campaignSales";
import { deliveredVsOpenUpdate } from "../../views/email-marketing/deliveredVsOpen";
import { sentVsNotSentUpdate } from "../../views/email-marketing/sentVsNotSent";
import { budgetExpensesUpdate } from "../../views/project-management/budgetExpenses";
import { budgetUtilizationUpdate } from "../../views/project-management/budgetUtilization";
import { plannedVsActualUpdate } from "../../views/project-management/plannedVsActual";
import { projectsByStatusUpdate } from "../../views/project-management/projectsByStatus";
import { ticketsReopenedUpdate } from "../../views/project-management/ticketsReopened";
import { salesHistoryUpdate } from "../../views/sales/salesHistory";
import { storeSessionsUpdate } from "../../views/sales/storeSessions";

const TOGGLE_EL = document.getElementById("color-mode-toggle");

// Some of the charts need to updated on color mode change
const updateWidgets = () => {
	salesHistoryUpdate();
	storeSessionsUpdate();
	leadsGenerationRateUpdate();
	convertedLeadsUpdate();
	leadsByIndustryUpdate();
	leadsSourcesUpdate();
	sessionsByCountryUpdate();
	visitsBySourceUpdate();
	userAcquisitionChartUpdate();
	activeUsersUpdate();
	visitDurationUpdate();
	resolutionByChannelUpdate();
	outboundCallsUpdate();
	deliveredVsOpenUpdate();
	campaignSalesUpdate();
	campaignReachUpdate();
	projectsByStatusUpdate();
	budgetUtilizationUpdate();
	budgetExpensesUpdate();
	ticketsReopenedUpdate();
	plannedVsActualUpdate();
	sentVsNotSentUpdate();
	chartsUpdate();
};

export const colorMode = () => {
	if (TOGGLE_EL) {
		// Set color mode on toggle click
		TOGGLE_EL.addEventListener("click", () => {
			color === "dark" ? (color = "light") : (color = "dark");
			localStorage.setItem("color-mode", color);
			document.documentElement.setAttribute("data-bs-theme", color);

			updateWidgets();
		});
	}
};
