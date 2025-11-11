import React from "react";
import "./porfolio.css";
import { Brain, FileText, MessageSquare, PenTool } from "lucide-react";
import { BsPatchCheckFill } from "react-icons/bs";

const projects = [
  {
    title: "Rapid Access to Production Defect Data in Manufacturing",
    description:
      "Designed a multi-agent chatbot orchestrator using an MCP server and Azure AI Connected Agents, enabling production teams to query defect data and perform root-cause analysis through natural language prompts. This solution provides real-time insights into internal and external quality issues.",
    icon: MessageSquare,
  },
  {
    title: "OCR Agentic Invoice Reader with Azure AI Document Intelligence",
    description:
      "Developed an automated workflow combining RPA bots, AI document processing, and approval logic to extract key data from incoming invoices and route them to ERP systems or reporting dashboards.",
    icon: FileText,
  },
  {
    title: "Digital Signature Integration",
    description:
      "Integrated a secure digital signing solution into MES workflows, allowing internal users and external contractors to approve documents digitally. This strengthened security, compliance, and trust within enterprise-grade systems.",
    icon: PenTool,
  },
  {
    title: "Work-Order Scheduling Optimization",
    description:
      "Built an AI agent system that helps managers optimize daily, weekly, and monthly work-order scheduling using Azure AI Foundry LLMs and prompt engineering. The system dynamically balances capacity and deadlines to maximize efficiency.",
    icon: Brain,
  },
];

const ProjectsSection = () => {
  return (
    <section id="porfolio">
      <h5>My Recent Work</h5>
      <h2 className="section-title">Projects</h2>
      <div className="container">

        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div className="project-card" key={index}>
                <div className="card-icon">
                  <Icon className="icon" />
                </div>
                <article className="experience__details" key={index}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4 style={{ color: '#fff' }}>{project.title}</h4>
                    <small className="text-light"></small>
                  </div>
                </article>
                <p className="card-description ">{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
