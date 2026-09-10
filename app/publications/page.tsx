export default function Publications() {
  const publications = [
    {
      type: "Original Article",
      year: "2022",
      title:
        "Unveiling a family of spiro-β-lactams with anti-HIV and antiplasmodial activity via phosphine-catalyzed [3+2] annulation of 6-alkylidene-penicillanates and allenoates.",
      citation:
        "Alves AJS, Alves NG, Bártolo I, Fontinha D, Caetano S, Prudêncio M, et al. Unveiling a family of spiro-β-lactams with anti-HIV and antiplasmodial activity via phosphine-catalyzed [3+2] annulation of 6-alkylidene-penicillanates and allenoates. Front Chem. 2022 Oct 7;10:1017250.",
      doi: "10.3389/fchem.2022.1017250",
      abstract: "Abstract to be added.",
    },
    {
      type: "Original Article",
      year: "2021",
      title:
        "Synthesis and structure-activity relationships of new chiral spiro-β-lactams highly active against HIV-1 and Plasmodium.",
      citation:
        "Alves NG, Bártolo I, Alves AJS, Fontinha D, Francisco D, Lopes SMM, et al. Synthesis and structure-activity relationships of new chiral spiro-β-lactams highly active against HIV-1 and Plasmodium. European Journal of Medicinal Chemistry. 2021 Jul;219:113439.",
      doi: "10.1016/j.ejmech.2021.113439",
      abstract: "Abstract to be added.",
    },
    {
      type: "Original Article",
      year: "2021",
      title:
        "Spiro-β-lactam BSS-730A Displays Potent Activity against HIV and Plasmodium.",
      citation:
        "Bártolo I, Santos BS, Fontinha D, Machado M, Francisco D, Sepodes B, et al. Spiro-β-lactam BSS-730A Displays Potent Activity against HIV and Plasmodium. ACS Infect Dis. 2021 Feb 12;7(2):421–34.",
      doi: "10.1021/acsinfecdis.0c00768",
      abstract: "Abstract to be added.",
    },
    {
      type: "Review Article",
      year: "2020",
      title: "Spiro-Lactams as Novel Antimicrobial Agents.",
      citation:
        "Alves AJS, Alves NG, Caratão CC, Esteves MIM, Fontinha D, Bártolo I, et al. Spiro-Lactams as Novel Antimicrobial Agents. CTMC. 2020 Feb 19;20(2):140–52.",
      doi: "10.2174/1568026619666191105110049",
      abstract: "Abstract to be added.",
    },
    {
      type: "Original Article",
      year: "2022",
      title:
        "High Instantaneous Inhibitory Potential of Bictegravir and the New Spiro-β-Lactam BSS-730A for HIV-2 Isolates from RAL-Naïve and RAL-Failing Patients.",
      citation:
        "Bártolo I, Moranguinho I, Gonçalves P, Diniz AR, Borrego P, Martin F, et al. High Instantaneous Inhibitory Potential of Bictegravir and the New Spiro-β-Lactam BSS-730A for HIV-2 Isolates from RAL-Naïve and RAL-Failing Patients. IJMS. 2022 Nov 18;23(22):14300.",
      doi: "10.3390/ijms232214300",
      abstract: "Abstract to be added.",
    },
  ];

  return (
    <div>
      {/* Título da página */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "20px",
        }}
      >
        Publications
      </h1>

      <p
        style={{
          maxWidth: "850px",
          margin: "0 auto 50px auto",
          textAlign: "center",
          lineHeight: "1.7",
          color: "#475569",
        }}
      >
        Publications and related scientific literature supporting the
        development of broad-spectrum antiviral therapies based on
        spiro-β-lactam compounds.
      </p>

      {/* Lista de publicações */}
      <section
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        {publications.map((publication, index) => (
          <article
            key={publication.doi}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #dbe5ee",
              borderRadius: "18px",
              padding: "30px 35px",
              boxShadow: "0 6px 22px rgba(0, 0, 0, 0.05)",
              boxSizing: "border-box",
            }}
          >
            {/* Tipo + ano */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "18px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  backgroundColor: "#e6f4f5",
                  color: "#0D9488",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.4px",
                  textTransform: "uppercase",
                }}
              >
                {publication.type}
              </span>

              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#64748b",
                }}
              >
                {publication.year}
              </span>
            </div>

            {/* Número + título */}
            <div
              style={{
                display: "flex",
                gap: "15px",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#0D9488",
                  minWidth: "25px",
                  paddingTop: "4px",
                }}
              >
                {index + 1}.
              </span>

              <h2
                style={{
                  margin: 0,
                  fontSize: "23px",
                  lineHeight: "1.4",
                  fontWeight: "600",
                  color: "#0F172A",
                }}
              >
                {publication.title}
              </h2>
            </div>

            {/* Separador */}
            <div
              style={{
                height: "1px",
                backgroundColor: "#e5e7eb",
                margin: "25px 0",
              }}
            />

            {/* Citação completa */}
            <div>
              <h3
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#0D9488",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Full citation
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: "1.7",
                  color: "#475569",
                }}
              >
                {publication.citation}
              </p>

              {/* DOI */}
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "13px",
                }}
              >
                <a
                  href={`https://doi.org/${publication.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#0D9488",
                    textDecoration: "none",
                    fontWeight: "600",
                  }}
                >
                  doi:{publication.doi}
                </a>
              </p>
            </div>

            {/* Caixa do Abstract */}
            <div
              style={{
                marginTop: "25px",
                padding: "18px 20px",
                backgroundColor: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
              }}
            >
              <h3
                style={{
                  margin: "0 0 8px 0",
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#0D9488",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Abstract
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  lineHeight: "1.7",
                  color: "#64748b",
                }}
              >
                {publication.abstract}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
