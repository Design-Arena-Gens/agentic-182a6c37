import styles from "./page.module.css";
import { NodeCard } from "./components/NodeCard";
import type { NodeAccent } from "./components/NodeCard";

type SpecialistAgent = {
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  accent: NodeAccent;
};

const specialistAgents: SpecialistAgent[] = [
  {
    title: "Research Agent",
    subtitle: "Signal Intelligence",
    description: "Harvests market data, trends, and disruptive signals to feed upstream planning.",
    items: ["Real-time competitive sweeps", "Insight summarization", "Trusted source graph"],
    accent: "cyan"
  },
  {
    title: "Creative Agent",
    subtitle: "Narrative Studio",
    description: "Synthesizes brand-safe messaging, campaigns, and assets across formats.",
    items: ["Storyboarding & scripting", "Multimodal asset briefs", "Persona-targeted messaging"],
    accent: "magenta"
  },
  {
    title: "Tech Agent",
    subtitle: "Engineering Core",
    description: "Designs, validates, and ships product increments with automated QA.",
    items: ["Spec decomposition", "Code generation & reviews", "Integration & regression suites"],
    accent: "lime"
  },
  {
    title: "Sales Agent",
    subtitle: "Pipeline Engine",
    description: "Activates go-to-market playbooks, sequences outreach, and monitors conversions.",
    items: ["ICP segmentation", "Cadence drafting", "Deal health diagnostics"],
    accent: "orange"
  },
  {
    title: "Support Agent",
    subtitle: "Customer Shield",
    description: "Triages tickets, proposes resolutions, and captures product feedback loops.",
    items: ["Sentiment clustering", "Solution drafting", "Feedback tagging"],
    accent: "purple"
  }
];

const orchestratorStreams = [
  {
    title: "Mission Lifecycle",
    phase: "Plan → Execute → Review",
    steps: [
      "Scope mission with human orchestrator and set guardrails from command center knowledge.",
      "Master orchestrator decomposes objectives into agent-specific jobs with success metrics.",
      "Specialist agents iterate until outputs pass policy checks; escalations routed automatically."
    ]
  },
  {
    title: "Adaptive Feedback Loop",
    phase: "Observe → Learn → Reinforce",
    steps: [
      "Monitoring dashboard captures telemetry, risk triggers, and performance signatures.",
      "Master orchestrator refines prompts, tools, or workflows based on deviation analysis.",
      "Command center sources refresh to keep context hubs aligned with latest intelligence."
    ]
  }
];

const capabilityPanels = [
  {
    title: "Command Center Intelligence Fabric",
    bullets: [
      "Integrates Notion, Sheets, data warehouses, and knowledge graphs.",
      "Maintains canonical playbooks, SOPs, and continuously learned embeddings.",
      "Versioned decision logs enable compliance-grade traceability."
    ]
  },
  {
    title: "Autonomy Safety & Governance",
    bullets: [
      "Policy guardrails, RBAC, and human-in-the-loop checkpoints configurable per mission.",
      "Automated red teaming and bias probes for critical path outputs.",
      "Escalation ladder funnels unresolved exceptions to human orchestrator."
    ]
  },
  {
    title: "Operational Telemetry & Insights",
    bullets: [
      "Streaming observability across agents: latency, quality score, risk flags.",
      "Scenario simulators forecast impact of agent decisions before deployment.",
      "Executive dashboard distills KPIs, bottlenecks, and opportunity hotspots."
    ]
  }
];

export default function Page() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.tags}>
          <span className={styles.tag}>Autonomous enterprise OS</span>
          <span className={styles.tag}>Multi-agent orchestration</span>
          <span className={styles.tag}>Human-in-the-loop</span>
        </div>
        <h1>LUXOR9 Orchestration Layer</h1>
        <p>
          Luxor9 is the control plane for orchestrating human and AI collaboration at scale. It
          coordinates strategic intent, tactical execution, and continuous monitoring across a
          federation of specialist agents, ensuring every mission delivers measurable outcomes with
          audit-ready governance.
        </p>
      </section>

      <section className={styles.diagramSection}>
        <div className={styles.diagramGrid}>
          <div className={styles.topRow}>
            <NodeCard
              title="Human Orchestrator"
              subtitle="Strategic Oversight"
              description="Defines missions, approves escalations, and steers prioritization with human judgment."
              items={[
                "Set mission intent & KPIs",
                "Approve critical outputs",
                "Trigger escalation protocols"
              ]}
              accent="cyan"
            />
            <NodeCard
              title="Command Center"
              subtitle="Knowledge Spine"
              description="Unified knowledge fabric spanning Notion, Sheets, CRMs, and data warehouses."
              items={["Context packs & playbooks", "Decision library", "Dynamic guardrails"]}
              accent="magenta"
            />
            <NodeCard
              title="Monitoring Dashboard"
              subtitle="Operational Telemetry"
              description="Live observability of throughput, quality, sentiment, and risk signatures."
              items={["Mission heatmaps", "Anomaly detection", "Compliance snapshots"]}
              accent="lime"
            />
          </div>

          <div className={styles.centerColumn}>
            <NodeCard
              title="Master Orchestrator Agent"
              subtitle="Autonomous Conductor"
              description="Coordinates workstream execution, validates deliverables, and orchestrates fallback strategies leveraging GPT-4o/Claude."
              items={[
                "Dynamic task routing",
                "Output QA & evaluation",
                "Self-healing error recovery",
                "Multi-agent negotiation"
              ]}
              accent="blue"
              layout="tall"
            />
          </div>

          <div className={styles.satelliteRow}>
            {specialistAgents.map((agent) => (
              <NodeCard
                key={agent.title}
                title={agent.title}
                subtitle={agent.subtitle}
                description={agent.description}
                items={agent.items}
                accent={agent.accent}
                layout="tall"
              />
            ))}
          </div>

          <div className={styles.streams}>
            {orchestratorStreams.map((stream) => (
              <div className={styles.stream} key={stream.title}>
                <div className={styles.streamTitle}>
                  <h4>{stream.title}</h4>
                  <span>{stream.phase}</span>
                </div>
                <ul className={styles.timeline}>
                  {stream.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.capabilities}>
        {capabilityPanels.map((panel) => (
          <div className={styles.capabilityCard} key={panel.title}>
            <h4>{panel.title}</h4>
            <ul>
              {panel.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <p className={styles.footerNote}>Luxor9 orchestrates continuous delivery of mission outcomes.</p>
    </main>
  );
}
