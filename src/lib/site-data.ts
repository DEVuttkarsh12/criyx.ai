export const CAL_LINK = "https://cal.com/your-link-here";

export const MAIN_NAV_LINKS = [
  { label: "About", href: "/#positioning" },
  { label: "Services", href: "/#services" },
  { label: "Flow", href: "/#automation-flow" },
  { label: "FAQ", href: "/#faq" },
] as const;

export type ProductPageDefinition = {
  slug: string;
  title: string;
  navLabel: string;
  eyebrow: string;
  teaser: string;
  description: string;
  heroPanelTitle: string;
  heroPanelCopy: string;
  industrySignals: string[];
  fit: string[];
  capabilities: Array<{
    title: string;
    copy: string;
  }>;
  workflow: Array<{
    stage: string;
    detail: string;
  }>;
};

export const PRODUCT_PAGES: ProductPageDefinition[] = [
  {
    slug: "ai-voice-agent",
    title: "AI Voice Agent",
    navLabel: "AI Voice Agent",
    eyebrow: "Voice System",
    teaser:
      "Inbound and outbound call flows that qualify, confirm, and hand off cleanly.",
    description:
      "Criyx builds AI voice agents for businesses that need immediate call handling, qualification, reminders, and escalation without leaving response quality to chance.",
    heroPanelTitle: "Conversation coverage without staffing lag.",
    heroPanelCopy:
      "Built for call intake, reminders, reactivation, and qualification so the phone channel keeps moving even when the team is busy elsewhere.",
    industrySignals: ["Inbound triage", "Confirmations", "Reactivation"],
    fit: [
      "Teams missing calls after hours or during delivery-heavy periods.",
      "Sales and operations workflows where qualification should happen before a human steps in.",
      "Businesses that need consistent confirmation, reminder, or follow-up calls at scale.",
    ],
    capabilities: [
      {
        title: "Call intake and routing",
        copy:
          "The agent answers, captures caller context, handles routine questions, and routes high-value intent to the right person or next system step.",
      },
      {
        title: "Qualification on voice",
        copy:
          "Scripted logic plus dynamic prompts collect timing, need, urgency, fit, and booking readiness before the team spends manual time.",
      },
      {
        title: "Reminder and follow-up loops",
        copy:
          "No-shows, confirmations, payment nudges, and operational reminders can run on schedule with clear escalation rules.",
      },
    ],
    workflow: [
      {
        stage: "Answer instantly",
        detail:
          "Incoming calls get immediate structured handling with the right opening context and business logic.",
      },
      {
        stage: "Capture and decide",
        detail:
          "The system gathers the right inputs, updates records, and determines whether to route, book, follow up, or escalate.",
      },
      {
        stage: "Hand off cleanly",
        detail:
          "Qualified outcomes move into calendar, CRM, or human follow-through with notes attached instead of verbal guesswork.",
      },
    ],
  },
  {
    slug: "ai-marketing-agent",
    title: "AI Marketing Agent",
    navLabel: "AI Marketing Agent",
    eyebrow: "Demand System",
    teaser:
      "Campaign-side automation that captures intent, organizes demand, and keeps response speed high.",
    description:
      "Criyx builds AI marketing agents that coordinate inbound demand, lead follow-up, routing, and campaign-response handling so more interest turns into usable pipeline.",
    heroPanelTitle: "Marketing response built like an operating layer.",
    heroPanelCopy:
      "This is for teams generating attention but losing momentum between click, conversation, qualification, and booked next step.",
    industrySignals: ["Lead reply", "Campaign routing", "Nurture logic"],
    fit: [
      "Ad-driven businesses where speed-to-lead materially changes conversion rates.",
      "Teams managing inbound across forms, social DMs, WhatsApp, and landing pages.",
      "Operators who need campaign response quality without scaling manual inbox work.",
    ],
    capabilities: [
      {
        title: "Instant lead response",
        copy:
          "The agent responds across channels with approved messaging, source-aware context, and a clear next action while intent is still fresh.",
      },
      {
        title: "Qualification and segmentation",
        copy:
          "Early questions, scoring logic, and routing rules separate low-signal curiosity from leads worth immediate human attention.",
      },
      {
        title: "Campaign feedback loop",
        copy:
          "The system captures response quality, lead movement, and booking performance so campaigns can be optimized against actual downstream outcomes.",
      },
    ],
    workflow: [
      {
        stage: "Capture demand",
        detail:
          "Every campaign touchpoint lands in one response layer with source context preserved from the first moment.",
      },
      {
        stage: "Drive the next step",
        detail:
          "The agent qualifies, routes, and keeps follow-up moving until the lead is ready to book or gets pushed into nurture.",
      },
      {
        stage: "Report what matters",
        detail:
          "The workflow writes back into CRM and reporting so marketing sees more than clicks and form fills.",
      },
    ],
  },
  {
    slug: "ai-content-agent",
    title: "AI Content Agent",
    navLabel: "AI Content Agent",
    eyebrow: "Content System",
    teaser:
      "A production layer for idea capture, drafting, repurposing, and distribution readiness.",
    description:
      "Criyx builds AI content agents that keep brand content moving from idea to draft to multi-channel distribution without turning the workflow into a loose pile of prompts.",
    heroPanelTitle: "Content output with structure, not chaos.",
    heroPanelCopy:
      "Designed for teams that need a reliable pipeline for thought leadership, campaign content, repurposing, and publishing support.",
    industrySignals: ["Drafting", "Repurposing", "Publishing support"],
    fit: [
      "Founders and teams trying to publish consistently without constant creative reset.",
      "Marketing operations that need one source idea turned into multiple usable assets.",
      "Brands that want content quality controls embedded into the workflow.",
    ],
    capabilities: [
      {
        title: "Idea-to-draft pipeline",
        copy:
          "The agent turns notes, calls, offers, and campaign themes into structured first drafts matched to the right content format.",
      },
      {
        title: "Repurposing logic",
        copy:
          "Long-form thoughts can be broken into email, social, landing, and nurture-ready variants without losing the core message.",
      },
      {
        title: "Review and publishing prep",
        copy:
          "Approvals, revisions, metadata, and distribution packaging happen inside one system so content does not stall between draft and release.",
      },
    ],
    workflow: [
      {
        stage: "Capture source material",
        detail:
          "Ideas, transcripts, offers, and priorities enter a consistent content intake instead of being scattered across tools.",
      },
      {
        stage: "Build the asset set",
        detail:
          "The system drafts, repurposes, and structures deliverables for the channels that matter to the business.",
      },
      {
        stage: "Queue for release",
        detail:
          "Ready assets move into review, scheduling, or handoff so the pipeline stays alive without manual project chasing.",
      },
    ],
  },
  {
    slug: "whatsapp-agent",
    title: "WhatsApp Agent",
    navLabel: "WhatsApp Agent",
    eyebrow: "Messaging System",
    teaser:
      "Lead capture, qualification, reminders, and routing inside the channel people already use.",
    description:
      "Criyx builds WhatsApp agents that manage first response, qualification, reminders, booking support, and escalation inside the messaging channel customers already prefer.",
    heroPanelTitle: "WhatsApp becomes an operating surface, not just a chat inbox.",
    heroPanelCopy:
      "The goal is structured movement from first message into lead state, next step, and CRM visibility without relying on manual admin.",
    industrySignals: ["Lead capture", "Booking support", "Routing"],
    fit: [
      "Service businesses already receiving serious buying intent through WhatsApp.",
      "Teams that need faster messaging response without staffing the inbox all day.",
      "Operators who want CRM updates and follow-up logic tied directly to message behavior.",
    ],
    capabilities: [
      {
        title: "Instant conversational response",
        copy:
          "The agent replies with structured prompts, approved language, and qualification logic right inside WhatsApp.",
      },
      {
        title: "State changes and reminders",
        copy:
          "Lead stages, reminder triggers, booking nudges, and escalation conditions move automatically instead of depending on memory.",
      },
      {
        title: "CRM and team handoff",
        copy:
          "Useful context, notes, and next-step status sync into internal systems so humans step in with better information.",
      },
    ],
    workflow: [
      {
        stage: "Start the conversation",
        detail:
          "The first reply lands immediately with channel-appropriate tone and the right qualifying path.",
      },
      {
        stage: "Move the lead forward",
        detail:
          "The system gathers signal, sends reminders, and routes the conversation based on readiness and business rules.",
      },
      {
        stage: "Sync the operation",
        detail:
          "Records, notes, and follow-up outcomes stay current across CRM and internal coordination layers.",
      },
    ],
  },
  {
    slug: "exhibition-agent",
    title: "Exhibition Agent",
    navLabel: "Exhibition Agent",
    eyebrow: "Event System",
    teaser:
      "An event-side agent for booth lead capture, qualification, routing, and post-show follow-up.",
    description:
      "Criyx builds exhibition agents for events, expos, and booths where lead capture, qualification, routing, and follow-up need to happen fast while the team is actively meeting people.",
    heroPanelTitle: "Trade-show energy translated into an actual follow-up system.",
    heroPanelCopy:
      "Instead of loose badge scans and forgotten notes, the event channel becomes a structured revenue workflow from booth interaction to post-show action.",
    industrySignals: ["Booth capture", "On-site qualification", "Post-event follow-up"],
    fit: [
      "Teams exhibiting at events where lead quality varies and follow-up speed matters.",
      "Operators that need booth interactions routed by product, region, or buyer readiness.",
      "Sales teams tired of post-event spreadsheets with weak context and delayed outreach.",
    ],
    capabilities: [
      {
        title: "On-site lead capture",
        copy:
          "The agent standardizes how booth interactions are recorded so context, interest level, and next-step intent are captured immediately.",
      },
      {
        title: "Qualification and routing",
        copy:
          "The workflow can segment by buyer profile, urgency, product interest, or territory and hand off accordingly.",
      },
      {
        title: "Post-event follow-up",
        copy:
          "After the event, follow-up sequences, reminders, and CRM updates start automatically while the interaction is still fresh.",
      },
    ],
    workflow: [
      {
        stage: "Capture on the floor",
        detail:
          "Lead details and notes enter a structured system in real time while the team is still in the booth flow.",
      },
      {
        stage: "Prioritize and assign",
        detail:
          "The system scores what happened, routes by relevance, and flags the leads that deserve immediate next-day action.",
      },
      {
        stage: "Follow up without lag",
        detail:
          "Automated sequences and CRM sync keep post-show execution tight instead of letting event value decay.",
      },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCT_PAGES.find((product) => product.slug === slug);
}
