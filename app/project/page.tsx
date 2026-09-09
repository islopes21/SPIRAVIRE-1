"use client";

import { useState } from "react";

export default function ProjectPage() {
  const topics = [
    {
      number: "1",
      title: "Addressing an Important Public Health Challenge",
      text: "The SPIRAVIRE project aims to develop a new generation of broad-spectrum antiviral therapies based on spiro-β-lactam compounds for the prevention and treatment of respiratory infections caused by RNA viruses. Respiratory viruses such as influenza viruses, SARS-CoV-2 and respiratory syncytial virus represent a major and continuing threat to public health, while emerging zoonotic viruses have the potential to cause future epidemics and pandemics. Current antiviral treatments are often virus-specific, have a limited therapeutic window, and may lose effectiveness due to the emergence of drug-resistant variants.",
    },
    {
      number: "2",
      title: "Developing Innovative Broad-Spectrum Antivirals",
      text: "SPIRAVIRE addresses these challenges by investigating spiro-β-lactams with activity against multiple respiratory viruses and potentially acting through host-related cellular mechanisms. This approach could provide a more robust therapeutic strategy than virus-specific antivirals and may reduce the likelihood of resistance. The project builds on promising preliminary results showing that selected spiro-β-lactams have potent antiviral activity against influenza A and B and SARS-CoV-2, including activity against drug-resistant influenza strains.",
    },
    {
      number: "3",
      title: "Advancing Knowledge and Therapeutic Development",
      text: "By combining chemical optimisation, advanced antiviral models, in vivo evaluation and molecular studies, SPIRAVIRE will identify and characterise the most promising compounds for further therapeutic development. The project will also generate new knowledge on the cellular pathways involved in antiviral activity, contributing to a better understanding of host–virus interactions and potentially revealing new therapeutic targets.",
    },
    {
      number: "4",
      title: "Improving Public Health and Healthcare Resilience",
      text: "The development of broad-spectrum antivirals could improve the ability to prevent and treat respiratory viral infections, particularly when vaccines are unavailable, ineffective against newly emerging variants, or require time to develop and deploy. Such therapies could contribute to reducing disease severity, hospitalisation and mortality, while helping to maintain the resilience of healthcare systems during epidemics and pandemics.",
    },
    {
      number: "5",
      title: "Strengthening Pandemic Preparedness",
      text: "SPIRAVIRE is particularly relevant to preparedness for future infectious disease outbreaks. A broad-spectrum antiviral platform could provide a flexible therapeutic approach that may be useful against emerging respiratory viruses, including zoonotic viruses for which effective treatment options are currently limited. This could help reduce the time required to respond to new viral threats and complement existing vaccination and public-health strategies.",
    },
    {
      number: "6",
      title: "Scientific, Technological and Economic Impact",
      text: "Beyond its direct health benefits, the project will strengthen scientific and technological capacity in medicinal chemistry, antiviral drug discovery, molecular biology and translational research. The identification of novel antiviral compounds and mechanisms may create opportunities for intellectual property protection, technology transfer, licensing and future pharmaceutical development, contributing to innovation and economic value creation in the health and biotechnology sectors.",
    },
    {
      number: "7",
      title: "Overall Societal Impact",
      text: "Overall, SPIRAVIRE has the potential to contribute to healthier and more resilient societies by addressing an important unmet medical need and strengthening preparedness for emerging respiratory viruses. By creating the scientific and technological foundations for innovative broad-spectrum antiviral therapies, the project could deliver long-term benefits for public health, pandemic preparedness, scientific innovation and the development of new therapeutic solutions.",
    },
  ];

  const [openTopic, setOpenTopic] = useState<string | null>(null);

  const toggleTopic = (number: string) => {
    setOpenTopic(openTopic === number ? null : number);
  };

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
        <h2
          style={{
            textAlign: "center",
            fontSize: "25px",
            marginBottom: "35px",
          }}
        >
          Project Impact & Rationale
        </h2>

        {/* Os 7 tópicos */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          {topics.map((topic) => {
            const isOpen = openTopic === topic.number;

            return (
              <div
                key={topic.number}
                style={{
                  backgroundColor: "#f3f7fb",
                  border: "1px solid #dbe5ee",
                  borderRadius: "14px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Título clicável */}
                <button
                  onClick={() => toggleTopic(topic.number)}
                  style={{
                    width: "100%",
                    border: "none",
                    background: "transparent",
                    padding: "22px 25px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "left",
                    gap: "16px",
                  }}
                >
                  {/* Número */}
                  <div
                    style={{
                      minWidth: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#0D9488",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    {topic.number}
                  </div>

                  {/* Título */}
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "19px",
                      fontWeight: "600",
                      color: "#0F172A",
                      lineHeight: "1.4",
                      flex: 1,
                    }}
                  >
                    {topic.title}
                  </h3>

                  {/* Seta */}
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "300",
                      color: "#0D9488",
                      width: "25px",
                      textAlign: "center",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Texto que aparece ao abrir */}
                {isOpen && (
                  <div
                    style={{
                      padding: "0 25px 25px 81px",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: "15px",
                        lineHeight: "1.75",
                        color: "#475569",
                      }}
                    >
                      {topic.text}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
