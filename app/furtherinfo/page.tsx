export default function Information() {
  const updates = [
    {
      date: "10 September 2026",
      category: "Scientific Publication",
      title: "New findings on the antiviral activity of spiro-β-lactams",
      text: "SPIRAVIRE researchers continue to advance the understanding of spiro-β-lactams as promising broad-spectrum antiviral compounds against respiratory RNA viruses.",
    },
    {
      date: "26 November 2025",
      category: "Intellectual Property",
      title: "European patent EP 3625238 B1 granted",
      text: "The European patent covering novel spiro-lactam compounds, processes and therapeutic uses was granted, strengthening the intellectual property portfolio supporting the spiro-β-lactam platform.",
    },
    {
      date: "22 May 2025",
      category: "Intellectual Property",
      title: "New international patent application published",
      text: "The international patent application WO 2025/104683 A1, covering spiro-penicillanate compounds for the treatment of respiratory infections, was published.",
    },
    {
      date: "2025",
      category: "Conference Presentation",
      title: "SPIRAVIRE research presented at ESCMID Global 2025",
      text: "New findings on the broad-spectrum antiviral activity of spiro-β-lactams against SARS-CoV-2, influenza and HIV were presented at ESCMID Global 2025 in Vienna, Austria.",
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
          color: "#1e293b",
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
