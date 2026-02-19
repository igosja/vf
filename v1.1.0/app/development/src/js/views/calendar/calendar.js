import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { DATA } from "./data";
import { Datepicker } from "vanillajs-datepicker";
import { sidebarToggle } from "../../layout/sidebar";

export const calendarPage = () => {
  const CALENDAR_EL = document.getElementById("calendar");

  // Check if the calendar view is changed via any fullcalendar calls.
  // This is required in order to maintain the day of the datepicker when
  // the calendar view is changed via the datepicker.
  let isViewChanged = false;

  // Get the current calendar view date
  let currentViewDate = {
    month: "",
    year: "",
  };

  let sidebarToggleBtn = `<button type="button" class="sidebar-toggle icon">
								<svg class="pe-none" width="15" height="12" viewBox="0 0 16 13" fill="none">
									<path d="M1 1H15M1 6.25H10.5455M1 11.5H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
								<span class="visually-hidden">Open Sidebar</span>
							</button>`;

  if (CALENDAR_EL) {
    //-----------------------------------
    // Main Calendar
    //-----------------------------------
    // Initiate main calendar
    const CALENDAR_VIEW = new Calendar(CALENDAR_EL, {
      plugins: [dayGridPlugin, timeGridPlugin],
      initialView: "dayGridMonth",
      dayMaxEventRows: true,
      views: {
        dayGrid: {
          dayMaxEventRows: 4,
        },
      },
      buttonIcons: {
        prev: " ph ph-arrow-left", // Space is required at the beginning
        next: " ph ph-arrow-right",
        today: " ph ph-calendar-check",
        dayGridMonth: " ph ph-squares-four",
        timeGridWeek: " ph ph-rows",
        timeGridDay: " ph ph-rectangle",
      },
      customButtons: {
        sidebarToggle: {
          text: "",
        },
      },
      headerToolbar: {
        left: "sidebarToggle title",
        center: "",
        right: "prev next dayGridMonth timeGridWeek timeGridDay",
      },
      events: DATA,
      height: "100%",
      datesSet: (info) => {
        // Get the current start date of the view
        let date = info.view.currentStart;

        // Pass the current start date values to the common object,
        // so the datepicker can utilize it
        currentViewDate = {
          month: info.view.currentStart.getMonth() + 1,
          year: info.view.currentStart.getFullYear(),
        };

        // Set the datepicker date to match the calendar date
        isViewChanged && DATEPICKER.setDate(date);

        // Calendar view is changed via the fullcalendar call, so set this to true
        isViewChanged = true;
      },
      viewDidMount: function (info) {
        CALENDAR_EL.querySelectorAll(".fc-button").forEach((button) => {
          if (button.classList.contains("fc-sidebarToggle-button")) {
            button.classList.add("d-xl-none", "ms-n2", "me-3", "d-none", "d-sm-flex", "d-xl-none");
            button.innerHTML = sidebarToggleBtn;

            sidebarToggle();
          }
        });
      },
    });

    // Render the calendar
    setTimeout(() => {
      CALENDAR_VIEW.render();
    }, 300);

    //-----------------------------------
    // Datepicker Calendar
    //-----------------------------------
    const CALENDAR_NAVIGATE_EL = document.getElementById("calendar-navigate");

    // Initiate the date picker
    const DATEPICKER = new Datepicker(CALENDAR_NAVIGATE_EL, {
      maxView: 0,
      prevArrow: "west",
      nextArrow: "east",
      buttonClass: "btn",
      nextArrow: "<i class='ph ph-arrow-right'></i>",
      prevArrow: "<i class='ph ph-arrow-left'></i>",
    });

    // Change the calendar view via datepicker,
    // when a the date is changed
    CALENDAR_NAVIGATE_EL.addEventListener("changeDate", (event) => {
      let date = DATEPICKER.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      // Calendar view is not changed via the fullcalendar call, so set this to false
      isViewChanged = false;

      // Change the calendar view to the datepicker date
      if (!(currentViewDate.month === month && currentViewDate.year === year)) {
        CALENDAR_VIEW.gotoDate(date);
      }
    });
  }

  //-----------------------------------
  // List of events
  //-----------------------------------
  const EVENTS_EL = document.getElementById("calendar-events");
  let listEvents = "";

  if (EVENTS_EL) {
    DATA.slice(0, 10).map((item) => {
      let date = new Date(item.start);

      listEvents += `<a href="" class="hstack gap-3 p-2 rounded bg-hover mb-0.5">
								<i class="w-1 h-8 rounded ${item.allDay ? "bg-primary" : "bg-active"}"></i>
								<div class="flex-grow-1 text-truncate">
									<div class="text-body-emphasis text-body text-truncate mb-0.5 fw-medium">${item.title}</div>
									<div class="text-body-secondary fs-9">${item.start}</div>
								</div>
							</a>`;
    });

    EVENTS_EL.innerHTML = listEvents;
  }
};
