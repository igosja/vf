import { getPaths } from "../../utils";

export const directMessages = () => {
  const images = getPaths("contact");
  const WRAPPER = document.getElementById("top-messages");

  if (WRAPPER) {
    let list = "";
    const DATA = [
      {
        message: "Can you send me the files?",
        read: true,
        time: "3 secs ago",
        img: "2",
        sender: "Emma Wilson",
      },
      {
        message: "Let's review the presentation.",
        read: false,
        time: "10 secs ago",
        cap: "B",
        bg: "bg-pink",
        sender: "Brandon Lewis",
      },
      {
        message: "Can we reschedule?",
        read: true,
        time: "15 secs ago",
        cap: "M",
        bg: "bg-warning",
        sender: "Michael Taylor",
      },
      {
        message: "See you at the event!",
        read: false,
        time: "30 secs ago",
        img: "8",
        sender: "James Martinez",
      },
      {
        message: "Hey, how are you?",
        read: true,
        time: "2 mins ago",
        img: "1",
        sender: "Alice Johnson",
      },
      {
        message: "I need those files ASAP.",
        read: false,
        time: "5 mins ago",
        img: "10",
        sender: "Lily King",
      },
      {
        message: "Need your feedback on this.",
        read: true,
        time: "10 mins ago",
        img: "7",
        sender: "Sophia Lewis",
      },
      {
        message: "Thanks for your help!",
        read: false,
        time: "25 mins ago",
        cap: "C",
        bg: "bg-lime",
        sender: "Chloe Anderson",
      },
      {
        message: "Good morning!",
        read: true,
        time: "20 mins ago",
        cap: "K",
        bg: "bg-success",
        sender: "Karen Smith",
      },
      {
        message: "Let's catch up soon!",
        read: false,
        time: "30 mins ago",
        cap: "S",
        bg: "bg-primary",
        sender: "Sarah Lee",
      },
      {
        message: "Lunch on me today!",
        read: true,
        time: "45 mins ago",
        cap: "L",
        bg: "bg-danger",
        sender: "Laura Wilson",
      },
      {
        message: "Can we talk later?",
        read: true,
        time: "50 mins ago",
        cap: "T",
        bg: "bg-indigo",
        sender: "Tom Harris",
      },
      {
        message: "Are you available for a call?",
        read: false,
        time: "1 hour ago",
        img: "4",
        sender: "David Brown",
      },
      {
        message: "Meeting has been moved.",
        read: true,
        time: "1 hour ago",
        cap: "G",
        bg: "bg-teal",
        sender: "Grace Walker",
      },
      {
        message: "Can we finalize the report?",
        read: false,
        time: "40 mins ago",
        img: "9",
        sender: "Daniel White",
      },
      {
        message: "Don't forget our meeting tomorrow.",
        read: true,
        time: "5 hours ago",
        cap: "J",
        bg: "bg-info",
        sender: "John Doe",
      },
      {
        message: "Reminder for our call later.",
        read: false,
        time: "2 hours ago",
        cap: "A",
        bg: "bg-purple",
        sender: "Andrew Scott",
      },
      {
        message: "Check out this picture.",
        read: true,
        time: "3 hours ago",
        img: "3",
        sender: "Bob Martin",
      },
      {
        message: "Happy Birthday!",
        read: false,
        time: "2 hours ago",
        img: "5",
        sender: "Olivia Davis",
      },
      {
        message: "Here is the document.",
        read: true,
        time: "3 secs ago",
        img: "6",
        sender: "Ethan Clark",
      },
    ];

    // Filter unread and read items
    const UNREAD_ITEMS = [];
    const READ_ITEMS = [];
    DATA.forEach((item) => {
      if (!item.read) {
        UNREAD_ITEMS.push(item);
      } else {
        READ_ITEMS.push(item);
      }
    });

    // Function to return item
    const dmItem = (sender, img, cap, bg, time, read = true, message) => {
      return `<a href="" class="bg-hover d-flex align-items-center gap-3 py-2.5 px-6">
						${img ? `<img class="avatar avatar-md" src="${images[img]}" alt="${sender}">` : `<div class="avatar avatar-md text-invert ${bg}">${cap}</div>`}

						<div class="flex-grow-1">
							<div class="fs-7 ${read ? "text-body-emphasis fw-medium" : "text-body"}">${message}</div>
							<div class="fs-8 text-body-secondary">${time}</div>
						</div>

						${read ? '<i class="w-1.5 h-1.5 rounded-circle mb-4 bg-primary"></i>' : ""}
					</a>`;
    };

    // Concatenate read items after unread items
    READ_ITEMS.forEach((item) => {
      list += `${dmItem(item.sender, item.img, item.cap, item.bg, item.time, true, item.message)}`;
    });

    // Concatenate unread items at the beginning
    UNREAD_ITEMS.forEach((item) => {
      list += `${dmItem(item.sender, item.img, item.cap, item.bg, item.time, false, item.message)}`;
    });

    WRAPPER.innerHTML = list;
  }
};
