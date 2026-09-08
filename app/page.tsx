import Image from "next/image";
export default function Home() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "60px 24px",
      }}
    >

      {/* Título principal */}
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "24px",
        }}
      >
        SPIRAVIRE Consortium
      </h1>

      {/* Texto introdutório */}
      <p
        style={{
          textAlign: "center",
          lineHeight: "1.7",
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        The SPIRAVIRE consortium aims to develop innovative,
        broad-spectrum, host-directed antivirals against respiratory
        diseases caused by RNA viruses based on spiro-β-lactam compounds.
        This effort was prompted by the landmark discovery that some
        spiro-β-lactams have remarkable activity against diverse viruses,
        including HIV-1, HIV-2, influenza A and B viruses and SARS-CoV-2.
        The urgency for such broad-spectrum antivirals is highlighted by
        the need to improve global preparedness for potential epidemics
        caused by RNA respiratory viruses.
      </p>

      {/* Separador */}
      <div
        style={{
          height: "1px",
          backgroundColor: "#e5e7eb",
          margin: "60px 0",
        }}
      />

      {/* Consortium */}
      <section>

        <h2
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Get to know us!
        </h2>

        {/* Três colunas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            alignItems: "stretch",
          }}
          >

          {/* CQC */}
         
          <div
            style={{
              padding: "24px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f9fafb",
              textAlign: "center",
              minHeight: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxSizing: "border-box",
            }}
            >
            }}
          >
             
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "12px",
              }}
            >
              Coimbra Chemistry Center (CQC)
            </h3>
            <Image
               src="/cqc.png"
               alt="CQC logo"
               width={70}
               height={70}
               />
            <h4
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "12px",
              }}
            >
              Group of Organic Chemistry
              <br />
              (PI: Prof. Teresa Pinho e Melo)
            </h4>

            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Responsible for the production and optimization of
              spiro-β-lactams for better antiviral efficacy and
              medicinal chemistry properties.
            </p>
          </div>

          {/* iMed */}
          <div
            style={{
              padding: "24px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f9fafb",
              textAlign: "center",
              minHeight: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxSizing: "border-box",
            }}
            >
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "12px",
              }}
            >
              iMed.ULisboa
            </h3>
            <Image
               src="/imed.png"
               alt="iMedULisboa logo"
               width={70}
               height={50}
               />
            <h4
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "12px",
              }}
            >
              HEEP group
              <br />
              (PI: Prof. Nuno Taveira)
            </h4>

            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Evaluating antiviral activity across human and zoonotic
              respiratory viruses with pandemic potential.
            </p>
          </div>

          {/* Católica */}
          <div
            style={{
              padding: "24px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f9fafb",
              textAlign: "center",
              minHeight: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxSizing: "border-box",
            }}
            >
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "12px",
              }}
            >
              Católica Biomedical Research Center
            </h3>
            <Image
               src="/CBR-Logo.png"
               alt="CBR logo"
               width={70}
               height={50}
               />
            <h4
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "12px",
              }}
            >
              Cell Biology of Viral Infection Laboratory
              <br />
              (PI: Prof. Marta Alenquer)
            </h4>

            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Strengthening defenses against emerging viral respiratory
              infections and global health threats.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}
