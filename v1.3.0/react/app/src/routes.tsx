import type { RouteObject } from "react-router";

import { AppShell } from "@/components/layout/app-shell";
import { BlankShell } from "@/components/layout/blank-shell";

/** Every page is a lazy route, so each one ships in its own chunk. */
export const routes: RouteObject[] = [
	{
		path: "/",
		Component: AppShell,
		// The app renders on the client only, so there is nothing to show while the first route loads.
		HydrateFallback: () => null,
		children: [
			{
				index: true,
				lazy: async () => ({ Component: (await import("@/pages/dashboards/e-commerce/page")).default }),
			},
			{
				path: "dashboards/analytics",
				lazy: async () => ({ Component: (await import("@/pages/dashboards/analytics/page")).default }),
			},
			{
				path: "dashboards/project-management",
				lazy: async () => ({ Component: (await import("@/pages/dashboards/project-management/page")).default }),
			},
			{
				path: "dashboards/crm",
				lazy: async () => ({ Component: (await import("@/pages/dashboards/crm/page")).default }),
			},
			{
				path: "dashboards/email-marketing",
				lazy: async () => ({ Component: (await import("@/pages/dashboards/email-marketing/page")).default }),
			},
			{
				path: "dashboards/saas",
				lazy: async () => ({ Component: (await import("@/pages/dashboards/saas/page")).default }),
			},
			{
				path: "user/profile",
				lazy: async () => ({ Component: (await import("@/pages/user/profile/page")).default }),
			},
			{
				path: "user/timeline",
				lazy: async () => ({ Component: (await import("@/pages/user/timeline/page")).default }),
			},
			{
				path: "user/photos",
				lazy: async () => ({ Component: (await import("@/pages/user/photos/page")).default }),
			},
			{
				path: "user/connections",
				lazy: async () => ({ Component: (await import("@/pages/user/connections/page")).default }),
			},
			{
				path: "user/preferences",
				lazy: async () => ({ Component: (await import("@/pages/user/preferences/page")).default }),
			},
			{
				path: "apps/file-manager",
				lazy: async () => ({ Component: (await import("@/pages/apps/file-manager/page")).default }),
			},
			{
				path: "apps/contacts",
				lazy: async () => ({ Component: (await import("@/pages/apps/contacts/page")).default }),
			},
			{
				path: "apps/mail",
				lazy: async () => ({ Component: (await import("@/pages/apps/mail/page")).default }),
			},
			{
				path: "apps/messages",
				lazy: async () => ({ Component: (await import("@/pages/apps/messages/page")).default }),
			},
			{
				path: "apps/photos",
				lazy: async () => ({ Component: (await import("@/pages/apps/photos/page")).default }),
			},
			{
				path: "apps/todo-lists",
				lazy: async () => ({ Component: (await import("@/pages/apps/todo-lists/page")).default }),
			},
			{
				path: "apps/calendar",
				lazy: async () => ({ Component: (await import("@/pages/apps/calendar/page")).default }),
			},
			{
				path: "apps/ai-agent",
				lazy: async () => ({ Component: (await import("@/pages/apps/ai-agent/page")).default }),
			},
			{
				path: "apps/ai-agent/chat",
				lazy: async () => ({ Component: (await import("@/pages/apps/ai-agent/chat/page")).default }),
			},
			{
				path: "forms/elements",
				lazy: async () => ({ Component: (await import("@/pages/forms/elements/page")).default }),
			},
			{
				path: "forms/input-groups",
				lazy: async () => ({ Component: (await import("@/pages/forms/input-groups/page")).default }),
			},
			{
				path: "forms/layouts",
				lazy: async () => ({ Component: (await import("@/pages/forms/layouts/page")).default }),
			},
			{
				path: "forms/templates",
				lazy: async () => ({ Component: (await import("@/pages/forms/templates/page")).default }),
			},
			{
				path: "forms/validation",
				lazy: async () => ({ Component: (await import("@/pages/forms/validation/page")).default }),
			},
			{
				path: "pages/invoice",
				lazy: async () => ({ Component: (await import("@/pages/pages/invoice/page")).default }),
			},
			{
				path: "pages/pricing-tables",
				lazy: async () => ({ Component: (await import("@/pages/pages/pricing-tables/page")).default }),
			},
			{
				path: "pages/billing",
				lazy: async () => ({ Component: (await import("@/pages/pages/billing/page")).default }),
			},
			{
				path: "pages/search-results",
				lazy: async () => ({ Component: (await import("@/pages/pages/search-results/page")).default }),
			},
			{
				path: "pages/faq",
				lazy: async () => ({ Component: (await import("@/pages/pages/faq/page")).default }),
			},
			{
				path: "pages/teams",
				lazy: async () => ({ Component: (await import("@/pages/pages/teams/page")).default }),
			},
			{
				path: "content/typography",
				lazy: async () => ({ Component: (await import("@/pages/content/typography/page")).default }),
			},
			{
				path: "content/figures",
				lazy: async () => ({ Component: (await import("@/pages/content/figures/page")).default }),
			},
			{
				path: "content/images",
				lazy: async () => ({ Component: (await import("@/pages/content/images/page")).default }),
			},
			{
				path: "content/tables",
				lazy: async () => ({ Component: (await import("@/pages/content/tables/page")).default }),
			},
			{
				path: "content/icons",
				lazy: async () => ({ Component: (await import("@/pages/content/icons/page")).default }),
			},
			{
				path: "components/accordion",
				lazy: async () => ({ Component: (await import("@/pages/components/accordion/page")).default }),
			},
			{
				path: "components/alert",
				lazy: async () => ({ Component: (await import("@/pages/components/alert/page")).default }),
			},
			{
				path: "components/badge",
				lazy: async () => ({ Component: (await import("@/pages/components/badge/page")).default }),
			},
			{
				path: "components/breadcrumb",
				lazy: async () => ({ Component: (await import("@/pages/components/breadcrumb/page")).default }),
			},
			{
				path: "components/button",
				lazy: async () => ({ Component: (await import("@/pages/components/button/page")).default }),
			},
			{
				path: "components/card",
				lazy: async () => ({ Component: (await import("@/pages/components/card/page")).default }),
			},
			{
				path: "components/carousel",
				lazy: async () => ({ Component: (await import("@/pages/components/carousel/page")).default }),
			},
			{
				path: "components/collapsible",
				lazy: async () => ({ Component: (await import("@/pages/components/collapsible/page")).default }),
			},
			{
				path: "components/combobox",
				lazy: async () => ({ Component: (await import("@/pages/components/combobox/page")).default }),
			},
			{
				path: "components/date-picker",
				lazy: async () => ({ Component: (await import("@/pages/components/date-picker/page")).default }),
			},
			{
				path: "components/dialog",
				lazy: async () => ({ Component: (await import("@/pages/components/dialog/page")).default }),
			},
			{
				path: "components/dropdown-menu",
				lazy: async () => ({ Component: (await import("@/pages/components/dropdown-menu/page")).default }),
			},
			{
				path: "components/input-otp",
				lazy: async () => ({ Component: (await import("@/pages/components/input-otp/page")).default }),
			},
			{
				path: "components/item",
				lazy: async () => ({ Component: (await import("@/pages/components/item/page")).default }),
			},
			{
				path: "components/pagination",
				lazy: async () => ({ Component: (await import("@/pages/components/pagination/page")).default }),
			},
			{
				path: "components/popover",
				lazy: async () => ({ Component: (await import("@/pages/components/popover/page")).default }),
			},
			{
				path: "components/progress",
				lazy: async () => ({ Component: (await import("@/pages/components/progress/page")).default }),
			},
			{
				path: "components/rich-text-editor",
				lazy: async () => ({ Component: (await import("@/pages/components/rich-text-editor/page")).default }),
			},
			{
				path: "components/sheet",
				lazy: async () => ({ Component: (await import("@/pages/components/sheet/page")).default }),
			},
			{
				path: "components/skeleton",
				lazy: async () => ({ Component: (await import("@/pages/components/skeleton/page")).default }),
			},
			{
				path: "components/slider",
				lazy: async () => ({ Component: (await import("@/pages/components/slider/page")).default }),
			},
			{
				path: "components/sonner",
				lazy: async () => ({ Component: (await import("@/pages/components/sonner/page")).default }),
			},
			{
				path: "components/spinner",
				lazy: async () => ({ Component: (await import("@/pages/components/spinner/page")).default }),
			},
			{
				path: "components/tabs",
				lazy: async () => ({ Component: (await import("@/pages/components/tabs/page")).default }),
			},
			{
				path: "components/tooltip",
				lazy: async () => ({ Component: (await import("@/pages/components/tooltip/page")).default }),
			},
			{
				path: "charts",
				lazy: async () => ({ Component: (await import("@/pages/components/charts/page")).default }),
			},
			{
				path: "maps",
				lazy: async () => ({ Component: (await import("@/pages/components/maps/page")).default }),
			},
			{
				path: "*",
				lazy: async () => ({ Component: (await import("@/pages/not-found")).default }),
			},
		],
	},
	{
		// Pages that stand alone, without the sidebar and nav bar: sign-in, coming soon, error.
		path: "/pages",
		Component: BlankShell,
		HydrateFallback: () => null,
		children: [
			{
				path: "login",
				lazy: async () => ({ Component: (await import("@/pages/pages/login/page")).default }),
			},
			{
				path: "register",
				lazy: async () => ({ Component: (await import("@/pages/pages/register/page")).default }),
			},
			{
				path: "forgot-password",
				lazy: async () => ({ Component: (await import("@/pages/pages/forgot-password/page")).default }),
			},
			{
				path: "coming-soon",
				lazy: async () => ({ Component: (await import("@/pages/pages/coming-soon/page")).default }),
			},
			{
				path: "error",
				lazy: async () => ({ Component: (await import("@/pages/pages/error/page")).default }),
			},
		],
	},
];
