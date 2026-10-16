export const CHAT_DATA = [
  { id: 1, title: "Q3 sales performance summary", starred: true },
  { id: 2, title: "Onboarding email sequence for new users", starred: true },
  { id: 3, title: "Refactor dashboard chart components" },
  { id: 4, title: "Customer churn analysis by plan" },
  { id: 5, title: "Product launch checklist" },
  { id: 6, title: "Explain OAuth 2.0 refresh tokens" },
  { id: 7, title: "Weekly team standup notes" },
  { id: 8, title: "Pricing page copy ideas" },
  { id: 9, title: "Fix flexbox overflow in sidebar" },
  { id: 10, title: "Quarterly OKRs draft" },
  { id: 11, title: "Translate support macros to Spanish" },
  { id: 12, title: "Compare Postgres vs MySQL for analytics" },
  { id: 13, title: "Job description for senior designer" },
  { id: 14, title: "Summarize customer interview transcripts" },
];

// Search palette: everything besides chats
export const SEARCH_DATA = [
  { type: "project", title: "Marketing site redesign", meta: "8 chats" },
  { type: "project", title: "Q4 planning", meta: "5 chats" },
  { type: "project", title: "Customer research", meta: "12 chats" },
  { type: "image", title: "Logo concepts for Materia", meta: "4 images" },
  { type: "image", title: "Isometric office hero illustration", meta: "2 images" },
  { type: "image", title: "Product mockup on a desk", meta: "3 images" },
  { type: "scheduled", title: "Morning brief", meta: "Daily, 8:00 AM" },
  { type: "scheduled", title: "Weekly metrics digest", meta: "Mondays, 9:00 AM" },
  { type: "scheduled", title: "Competitor news roundup", meta: "Fridays, 4:00 PM" },
  { type: "action", title: "New chat", icon: "ph-plus-circle", href: "ai-agent.html" },
  { type: "action", title: "New project", icon: "ph-folder-plus" },
  { type: "action", title: "Schedule a task", icon: "ph-calendar-plus" },
];

export const SUGGESTION_DATA = [
  {
    label: "Write",
    icon: "ph-pen-nib",
    prompts: [
      "Draft a follow-up email to a client after a demo call",
      "Write release notes for our latest dashboard update",
      "Create a short bio for my LinkedIn profile",
      "Turn these bullet points into a project update",
    ],
  },
  {
    label: "Learn",
    icon: "ph-graduation-cap",
    prompts: [
      "Explain how JSON Web Tokens work",
      "What's the difference between OKRs and KPIs?",
      "Teach me the basics of cohort analysis",
      "How does a CDN speed up a website?",
    ],
  },
  {
    label: "Code",
    icon: "ph-code",
    prompts: [
      "Write a debounce function in JavaScript",
      "Convert this CSS to Bootstrap utility classes",
      "Explain this regular expression step by step",
      "Write a SQL query for monthly active users",
    ],
  },
  {
    label: "Analyze",
    icon: "ph-chart-line-up",
    prompts: [
      "Find trends in last month's sales data",
      "Summarize the key points from a PDF report",
      "Compare our pricing with three competitors",
      "Spot anomalies in this traffic report",
    ],
  },
  {
    label: "Plan",
    icon: "ph-calendar-check",
    prompts: [
      "Plan a two-week sprint for a small team",
      "Create a launch checklist for a new feature",
      "Build an agenda for a quarterly review meeting",
      "Outline a 30-60-90 day plan for a new hire",
    ],
  },
];

// Demo reply streamed in when a new message is sent
export const DEMO_REPLY = [
  "Good question. Here's how I'd approach it:",
  "1. **Clarify the goal.** Decide what a good result looks like before starting, so you can measure progress against it.",
  "2. **Gather the inputs.** Pull together the data, documents or context you already have. Gaps usually show up here.",
  "3. **Draft, then refine.** Get a rough version done quickly, then iterate on the parts that matter most.",
  "Want me to go deeper on any of these steps, or turn this into a checklist?",
];
