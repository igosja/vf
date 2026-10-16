import "../scss/style.scss";

import { sidebar } from "./layout/sidebar";
import { notifications } from "./layout/header/notifications";
import { tasks } from "./layout/header/tasks";
import { search } from "./layout/header/search/search";
import { sales } from "./views/sales/sales";
import { crm } from "./views/crm/crm";
import { saas } from "./views/saas/saas";
import { analytics } from "./views/analytics/analytics";
import { userConnections } from "./views/user/connections";
import { userPhotos } from "./views/user/photos";
import { contacts } from "./views/contacts/contacts";
import { fileManager } from "./views/file-manager/fileManager";
import { mail } from "./views/mail/mail";
import { messages } from "./views/messages/messages";
import { aiAgent } from "./views/ai-agent/aiAgent";
import { photos } from "./views/photos/photos";
import { todoList } from "./views/todo-lists/todoLists";
import { calendarPage } from "./views/calendar/calendar";
import { searchResults } from "./views/search-results/searchResults";
import { faq } from "./views/faq/faq";
import { teams } from "./views/team/team";
import { billing } from "./views/billing/billing";
import { demo } from "./demo";
import { icons } from "./views/icons/icons";
import { charts } from "./views/charts/charts";
import { colorMode } from "./layout/header/colorMode";
import { header } from "./layout/header";
import { emailMarketing } from "./views/email-marketing/emailMarketing";
import { projectManagement } from "./views/project-management/projectManagement";
import { maps } from "./views/maps/maps";
import { pageLoader } from "./layout/pageLoader";
import { directMessages } from "./layout/header/directMessages";
import { misc } from "./misc";

// Misc
misc();

// Views
sales();
crm();
saas();
analytics();
emailMarketing();
projectManagement();
userConnections();
userPhotos();
contacts();
fileManager();
mail();
messages();
aiAgent();
photos();
todoList();
calendarPage();
searchResults();
faq();
teams();
billing();
icons();
charts();
maps();

// Layout
colorMode();
sidebar();
search();
notifications();
directMessages();
tasks();
header();
pageLoader();

// Demo
demo();
