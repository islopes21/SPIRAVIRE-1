export default function Information() {
  const updates = [
    {
      date: "1 October 2026",
      category: "Fellowship Call - Candidate Selection",
      title: "Selection of the Applicant - MSc student for iMed.ULisboa",
      text: "A fellowship call was launched within the SPIRAVIRE project to recruit a researcher to support the research activities to be carried out at iMed.ULisboa. Following the selection process, Paloma Gonçalves, PhD student, was selected to join the project and contribute to the implementation of its research objectives, particularly in the evaluation and characterisation of the antiviral activity of spiro-β-lactam compounds against respiratory viruses.",
    },
    {
      date: "11 August 2026",
      category: "Fellowship Call",
      title: "Call for Applications - MSc student for iMed.ULisboa",
      text: "A fellowship call was launched within the SPIRAVIRE project to recruit a researcher to support the activities to be carried out at iMed.ULisboa. The fellowship will contribute to the implementation of the project’s research objectives, particularly in the evaluation and characterisation of the antiviral activity of spiro-β-lactam compounds against respiratory viruses.",
      link: "https://ciiem.egasmoniz.edu.pt/careers/call-for-applications-for-the-award-of-a-research-fellowship-bi-1",
    },
    {
      date: "20 April 2026",
      category: "Training & Capacity Building",
      title: "Course on Laboratory Animal Science in Rodents (for Functions A+C+D)",
      text: "As part of the SPIRAVIRE project, Inês Lopes, PhD student, attended the Course on Laboratory Animal Science in Rodents (for Functions A+C+D). This training provided the necessary knowledge and competencies to support the responsible and appropriate use of laboratory animals and enabled her to fulfil the training requirements associated with one of the project’s objectives involving in vivo studies.",
    },
    {
      date: "1 January 2026",
      category: "Team Meeting",
      title: "Kick-off Meeting",
      text: "The SPIRAVIRE project officially commenced with a kick-off meeting bringing together the consortium partners to establish a common framework for the project’s implementation. The meeting focused on aligning the project timelines, defining key milestones and deliverables, and coordinating the activities and responsibilities of each partner. This initial discussion provided an important foundation for effective time management, collaboration and monitoring of progress throughout the project.",
    },
    {
      date: "26 November 2025",
      category: "Intellectual Property",
      title: "European patent EP 3625238 B1 granted",
      text: "The European patent covering novel spiro-lactam compounds, processes and therapeutic uses was granted, strengthening the intellectual property portfolio supporting the spiro-β-lactam platform.",
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      {/* Page title */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "20px",
        }}
      >
        Project Updates
      </h1>

      {/* Introduction */}
      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto 55px auto",
          textAlign: "center",
          lineHeight: "1.7",
          color: "#475569",
        }}
      >
        This section presents the latest updates and developments related to
        the SPIRAVIRE project. It highlights scientific achievements,
        publications, intellectual property, dissemination activities,
        collaborations, and other relevant developments throughout the project.
      </p>

      {/* Updates */}
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "35px",
        }}
      >
        {updates.map((update, index) => (
          <div key={index}>
            {/* Date and category */}
            <div
              style={{
                fontSize: "13px",
                color: "#64748b",
                marginBottom: "9px",
                marginLeft: "20px",
                letterSpacing: "0.2px",
              }}
            >
              {update.date} · {update.category}
            </div>

            {/* Speech bubble */}
            <div
              style={{
                position: "relative",
                backgroundColor: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "18px",
                padding: "24px 30px",
                maxWidth: "760px",
                boxShadow: "0 3px 10px rgba(15, 23, 42, 0.06)",
              }}
            >
              {/* Bubble tail */}
              <div
                style={{
                  position: "absolute",
                  left: "24px",
                  bottom: "-11px",
                  width: 0,
                  height: 0,
                  borderTop: "12px solid #e2e8f0",
                  borderLeft: "12px solid transparent",
                  borderRight: "12px solid transparent",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: "25px",
                  bottom: "-9px",
                  width: 0,
                  height: 0,
                  borderTop: "11px solid #f8fafc",
                  borderLeft: "11px solid transparent",
                  borderRight: "11px solid transparent",
                }}
              />

              {/* Update title */}
              <h2
                style={{
                  fontSize: "21px",
                  fontWeight: "600",
                  margin: "0 0 10px 0",
                  color: "#1e293b",
                  lineHeight: "1.4",
                }}
              >
                {update.title}
              </h2>

              {/* Update text */}
              <p
                style={{
                  margin: 0,
                  lineHeight: "1.65",
                  color: "#475569",
                  fontSize: "15px",
                }}
              >
                {update.text}
              </p>

              {/* External link */}
              {update.link && (
                <a
                  href={update.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "16px",
                    color: "#2563eb",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Read more →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
