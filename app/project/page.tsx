export default function ProjectPage() {
  const topics = [
    "Addressing an Important Public Health Challenge",
    "Developing Innovative Broad-Spectrum Antivirals",
    "Advancing Knowledge and Therapeutic Development",
    "Improving Public Health and Healthcare Resilience",
    "Strengthening Pandemic Preparedness",
    "Scientific, Technological and Economic Impact",
    "Overall Societal Impact",
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
        Project Overview
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
        The SPIRAVIRE project aims to develop a new generation of
        broad-spectrum antiviral therapies based on spiro-β-lactam compounds
        for the prevention and treatment of respiratory infections caused by
        RNA viruses.
      </p>

      {/* Caixa principal */}
      <section
        style={{
          maxWidth: "950px",
          margin: "0 auto 65px auto",
          padding: "35px 40px",
          backgroundColor: "#ffffff",
          border: "1px solid #dbe5ee",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.06)",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "24px",
            marginBottom: "30px",
          }}
        >
          Project Impact & Rationale
        </h2>

        {/* Os 7 tópicos */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {topics.map((topic, index) => (
            <div
              key={topic}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                padding: "18px 22px",
                backgroundColor: "#f3f7fb",
                border: "1px solid #dbe5ee",
                borderRadius: "12px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  minWidth: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  backgroundColor: "#0D9488",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                {index + 1}
              </div>

              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  lineHeight: "1.4",
                  color: "#0F172A",
                }}
              >
                {topic}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 1 */}
      <section style={{ marginBottom: "55px" }}>
        <h2 style={{ fontSize: "25px", marginBottom: "18px" }}>
          1. Addressing an Important Public Health Challenge
        </h2>

        <p style={{ lineHeight: "1.8", color: "#475569" }}>
          The SPIRAVIRE project aims to develop a new generation of
          broad-spectrum antiviral therapies based on spiro-β-lactam compounds
          for the prevention and treatment of respiratory infections caused by
          RNA viruses. Respiratory viruses such as influenza viruses,
          SARS-CoV-2 and respiratory syncytial virus represent a major and
          continuing threat to public health, while emerging zoonotic viruses
          have the potential to cause future epidemics and pandemics. Current
          antiviral treatments are often virus-specific, have a limited
          therapeutic window, and may lose effectiveness due to the emergence
          of drug-resistant variants.
        </p>
      </section>

      {/* 2 */}
      <section style={{ marginBottom: "55px" }}>
        <h2 style={{ fontSize: "25px", marginBottom: "18px" }}>
          2. Developing Innovative Broad-Spectrum Antivirals
        </h2>

        <p style={{ lineHeight: "1.8", color: "#475569" }}>
          SPIRAVIRE addresses these challenges by investigating spiro-β-lactams
          with activity against multiple respiratory viruses and potentially
          acting through host-related cellular mechanisms. This approach could
          provide a more robust therapeutic strategy than virus-specific
          antivirals and may reduce the likelihood of resistance. The project
          builds on promising preliminary results showing that selected
          spiro-β-lactams have potent antiviral activity against influenza A
          and B and SARS-CoV-2, including activity against drug-resistant
          influenza strains.
        </p>
      </section>

      {/* 3 */}
      <section style={{ marginBottom: "55px" }}>
        <h2 style={{ fontSize: "25px", marginBottom: "18px" }}>
          3. Advancing Knowledge and Therapeutic Development
        </h2>

        <p style={{ lineHeight: "1.8", color: "#475569" }}>
          By combining chemical optimisation, advanced antiviral models, in
          vivo evaluation and molecular studies, SPIRAVIRE will identify and
          characterise the most promising compounds for further therapeutic
          development. The project will also generate new knowledge on the
          cellular pathways involved in antiviral activity, contributing to a
          better understanding of host–virus interactions and potentially
          revealing new therapeutic targets.
        </p>
      </section>

      {/* 4 */}
      <section style={{ marginBottom: "55px" }}>
        <h2 style={{ fontSize: "25px", marginBottom: "18px" }}>
          4. Improving Public Health and Healthcare Resilience
        </h2>

        <p style={{ lineHeight: "1.8", color: "#475569" }}>
          The development of broad-spectrum antivirals could improve the
          ability to prevent and treat respiratory viral infections,
          particularly when vaccines are unavailable, ineffective against
          newly emerging variants, or require time to develop and deploy. Such
          therapies could contribute to reducing disease severity,
          hospitalisation and mortality, while helping to maintain the
          resilience of healthcare systems during epidemics and pandemics.
        </p>
      </section>

      {/* 5 */}
      <section style={{ marginBottom: "55px" }}>
        <h2 style={{ fontSize: "25px", marginBottom: "18px" }}>
          5. Strengthening Pandemic Preparedness
        </h2>

        <p style={{ lineHeight: "1.8", color: "#475569" }}>
          SPIRAVIRE is particularly relevant to preparedness for future
          infectious disease outbreaks. A broad-spectrum antiviral platform
          could provide a flexible therapeutic approach that may be useful
          against emerging respiratory viruses, including zoonotic viruses
          for which effective treatment options are currently limited. This
          could help reduce the time required to respond to new viral threats
          and complement existing vaccination and public-health strategies.
        </p>
      </section>

      {/* 6 */}
      <section style={{ marginBottom: "55px" }}>
        <h2 style={{ fontSize: "25px", marginBottom: "18px" }}>
          6. Scientific, Technological and Economic Impact
        </h2>

        <p style={{ lineHeight: "1.8", color: "#475569" }}>
          Beyond its direct health benefits, the project will strengthen
          scientific and technological capacity in medicinal chemistry,
          antiviral drug discovery, molecular biology and translational
          research. The identification of novel antiviral compounds and
          mechanisms may create opportunities for intellectual property
          protection, technology transfer, licensing and future pharmaceutical
          development, contributing to innovation and economic value creation
          in the health and biotechnology sectors.
        </p>
      </section>

      {/* 7 */}
      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "25px", marginBottom: "18px" }}>
          7. Overall Societal Impact
        </h2>

        <p style={{ lineHeight: "1.8", color: "#475569" }}>
          Overall, SPIRAVIRE has the potential to contribute to healthier and
          more resilient societies by addressing an important unmet medical
          need and strengthening preparedness for emerging respiratory
          viruses. By creating the scientific and technological foundations
          for innovative broad-spectrum antiviral therapies, the project could
          deliver long-term benefits for public health, pandemic preparedness,
          scientific innovation and the development of new therapeutic
          solutions.
        </p>
      </section>
    </div>
  );
}
