export default function InnovationPage() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "20px",
        }}
      >
        Innovation & Intellectual Property
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
        SPIRAVIRE builds on an established research programme in
        spiro-β-lactam chemistry and antiviral drug discovery. The project
        benefits from intellectual property generated through previous
        research, while contributing to the continued development and
        translation of this innovative compound class towards antiviral
        applications.
      </p>

      <section
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
          padding: "40px",
          backgroundColor: "#ffffff",
          border: "1px solid #dbe5ee",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.06)",
          boxSizing: "border-box",
        }}
      >
        {/* Foundational Patent */}

        <article
          style={{
            padding: "30px",
            backgroundColor: "#f3f7fb",
            border: "1px solid #dbe5ee",
            borderRadius: "14px",
            marginBottom: "25px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "12px",
              color: "#0D9488",
            }}
            <a
              href="https://patents.google.com/patent/EP3625238B1/en"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
            Foundational Patent — EP 3625238
          </h2>

          <h3
            style={{
              fontSize: "20px",
              marginBottom: "18px",
              color: "#0F172A",
            }}
          >
              Novel spiro-lactam compounds, process and uses thereof
            </a>
          </h3>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.75",
              color: "#475569",
            }}
          >
            The European patent <strong>EP 3625238</strong> protects a series
            of novel spiro-lactam compounds, their preparation and their
            therapeutic applications. This intellectual property represents
            an important foundation for the development of the spiro-β-lactam
            platform and builds on research demonstrating the biological
            potential of these compounds, including antiviral activity against
            HIV.
          </p>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.75",
              color: "#475569",
            }}
          >
            The patent was initially published as{" "}
            <strong>EP 3625238 A1</strong> in 2020 and subsequently granted as{" "}
            <strong>EP 3625238 B1</strong> in 2025, strengthening the
            intellectual property protection of the underlying technology.
          </p>

          <div
            style={{
              marginTop: "20px",
              paddingTop: "18px",
              borderTop: "1px solid #dbe5ee",
              fontSize: "14px",
              lineHeight: "1.8",
              color: "#475569",
            }}
          >
            <div>
              <strong>Patent:</strong> EP 3625238 B1
            </div>
            <div>
              <strong>Publication:</strong> 26 November 2025
            </div>
            <div>
              <strong>Status:</strong> European patent granted
            </div>
          </div>
        </article>

        {/* Respiratory Antiviral Patent */}

        <article
          style={{
            padding: "30px",
            backgroundColor: "#f3f7fb",
            border: "1px solid #dbe5ee",
            borderRadius: "14px",
            marginBottom: "35px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "12px",
              color: "#0D9488",
            }}
          >
            Respiratory Antiviral Patent — WO 2025/104683
          </h2>

          <h3
            style={{
              fontSize: "20px",
              marginBottom: "18px",
              color: "#0F172A",
            }}
          >
            <a
              href="https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2025104683"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Spiro-penicillanate compounds for the treatment of respiratory
              infections
            </a>
          </h3>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.75",
              color: "#475569",
            }}
          >
            The international patent application{" "}
            <strong>WO 2025/104683</strong> represents a more recent
            development of the spiro-β-lactam platform, focusing specifically
            on novel spiro-penicillanate compounds for the treatment of
            respiratory viral infections. The invention includes applications
            against important respiratory viruses such as influenza viruses
            and coronaviruses.
          </p>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.75",
              color: "#475569",
            }}
          >
            With a priority date in 2023 and international publication in
            2025, this patent is particularly relevant to the scientific and
            technological objectives of SPIRAVIRE, which seeks to advance
            spiro-β-lactams as broad-spectrum antiviral candidates against
            respiratory RNA viruses.
          </p>

          <div
            style={{
              marginTop: "20px",
              paddingTop: "18px",
              borderTop: "1px solid #dbe5ee",
              fontSize: "14px",
              lineHeight: "1.8",
              color: "#475569",
            }}
          >
            <div>
              <strong>Patent application:</strong> WO 2025/104683 A1
            </div>
            <div>
              <strong>Publication:</strong> 22 May 2025
            </div>
            <div>
              <strong>Status:</strong> International patent application
              published
            </div>
          </div>
        </article>

        {/* Final section */}

        <section>
          <h2
            style={{
              fontSize: "25px",
              marginBottom: "15px",
              color: "#0D9488",
            }}
          >
            From Discovery to Therapeutic Innovation
          </h2>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.75",
              color: "#475569",
              margin: 0,
            }}
          >
            Together, these intellectual property assets illustrate the
            progression of the spiro-β-lactam research programme from the
            discovery and development of novel chemical scaffolds to their
            application in the treatment of respiratory viral infections.
            SPIRAVIRE builds on this foundation by further investigating
            antiviral activity, mechanisms of action and therapeutic
            potential, supporting the future translation of these compounds
            into innovative broad-spectrum antiviral therapies.
          </p>
        </section>
      </section>
    </div>
  );
}
