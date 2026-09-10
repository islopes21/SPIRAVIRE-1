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
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "20px",
        }}
      >
        Project Updates
      </h1>

      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto 45px auto",
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

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {updates.map((update, index) => (
          <div
            key={index}
            style={{
              padding: "25px 30px",
              borderRadius: "12px",
              backgroundColor: "#f8fafc",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                color: "#64748b",
                marginBottom: "8px",
              }}
            >
              {update.date} · {update.category}
            </div>

            <h2
              style={{
                fontSize: "22px",
                margin: "0 0 10px 0",
                color: "#1e293b",
              }}
            >
              {update.title}
            </h2>

            <p
              style={{
                margin: 0,
                lineHeight: "1.6",
                color: "#475569",
              }}
            >
              {update.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
