"use client";

import { useState } from "react";

const objectives = [
  {
    number: "1",
    title: "Project management and dissemination of results",
    text: "The project will ensure comprehensive administrative, technical, financial, communication, and dissemination oversight. This includes coordinating meetings and records, managing the consortium website, monitoring technical progress and expenditure, identifying risks and implementing corrective actions, developing and monitoring dissemination and exploitation strategies, and ensuring effective communication through conference calls, meeting minutes, and regular financial and scientific reporting.",
  },
  {
    number: "2",
    title: "Production and optimization of spiro-β-Lactams for better Antiviral Efficacy and Medicinal Chemistry Properties",
    text: "The project will use flow chemistry as the primary method for the gram-scale synthesis of the lead compound BSS730A and its most promising derivatives, while developing new spiro-β-lactams with improved drug-like properties. Previous studies identified nine bioactive compounds among 60 BSS730A derivatives, providing valuable structure–activity relationship and pharmacophoric insights. Further optimisation will focus on modifying the cyclopentenyl ring and reducing hydrophobicity to improve solubility. Antiviral activity and mechanism-of-action studies will guide subsequent structural optimisation, supported by computer-aided molecular design. By Month 3, BSS730A and 4–5 promising derivatives will be synthesised; by Month 12, gram-scale flow-synthesis conditions will be established for compounds required for in vivo studies; and by Month 18, new spiro-β-lactam derivatives with enhanced drug-like properties will be generated.",
  },
  {
    number: "3",
    title: "Evaluating antiviral activity across human and zoonotic respiratory viruses with pandemic potential",
    text: "The antiviral activity of BSS730A and its derivatives will be evaluated against a broad range of human and animal respiratory viruses, including Influenza A and B, SARS-CoV-2, RSV A and B, H5N1, H7N9 and SADS-CoV. Compounds will be tested in appropriate BSL-2 and BSL-3 laboratory models using established cell-based assays, with viral replication assessed by plaque assays and/or qPCR. Their antiviral potency and selectivity will be determined through IC50, IC90 and maximum percentage inhibition measurements, including evaluation against single and mixed viral infections. From Months 7–12, selected compounds will also be assessed in MucilAir human airway epithelial models to confirm antiviral efficacy in a physiologically relevant environment. **By Month 12 (M9), the in vitro and ex vivo antiviral activity and cytotoxicity profiles of BSS730A and its derivatives against human and animal respiratory viruses will be fully established.",
  },
  {
    number: "4",
    title: "Capacity of spiro-β-lactams to prevent influenza A infection and/or disease in C57BL/6 mice",
    text: "The objective of this work package is to **evaluate the in vivo efficacy and mechanism of action of selected spiro-β-lactam compounds against Influenza A infection and associated disease**. The studies will assess their ability to prevent or reduce viral infection, disease severity and viral replication, while characterising their effects on lung pathology, inflammation and innate immune responses. The work will provide evidence of therapeutic potential and identify the most promising compounds for further antiviral development.",
  },
  {
    number: "5",
    title: "Characterization of the antiviral mechanism of action of  spiro-β-lactams",
    text: "The objective of this work package is to **elucidate the mechanism of action of BSS730A and its most promising derivatives** by identifying the cellular targets and molecular pathways involved in their antiviral activity. Single-cell RNA sequencing will be used to characterise changes in gene expression in respiratory virus-susceptible cells and primary immune cells, enabling the identification of differentially expressed genes, affected cellular pathways and potential molecular targets. Key findings will then be validated at the RNA and protein levels using qPCR and Western blotting, while CRISPR/Cas9, RNA interference and plasmid-based overexpression approaches will be employed to functionally confirm the involvement of candidate targets. This integrated approach will establish the molecular basis of antiviral activity and provide a comprehensive understanding of the therapeutic potential of the compounds.",
  },  
];

export default function Objectives() {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent((current) =>
      current === 0 ? objectives.length - 1 : current - 1
    );
  };

  const next = () => {
    setCurrent((current) =>
      current === objectives.length - 1 ? 0 : current + 1
    );
  };

  const objective = objectives[current];

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-12 text-center">
        Project Objectives
      </h1>

      {/* Carrossel */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {/* Seta esquerda */}
        <button
          onClick={previous}
          aria-label="Previous objective"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "1px solid #dbe5ee",
            backgroundColor: "#ffffff",
            color: "#0D9488",
            fontSize: "28px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          ←
        </button>

        {/* Carta */}
        <section
          style={{
            width: "100%",
            minHeight: "300px",
            padding: "40px",
            borderRadius: "16px",
            backgroundColor: "#f3f7fb",
            border: "1px solid #dbe5ee",
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.06)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#0D9488",
              marginBottom: "12px",
              letterSpacing: "1px",
            }}
          >
            OBJECTIVE {objective.number}
          </div>

          <h2
            style={{
              fontSize: "26px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            {objective.title}
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              margin: 0,
              color: "#475569",
            }}
          >
            {objective.text}
          </p>
        </section>

        {/* Seta direita */}
        <button
          onClick={next}
          aria-label="Next objective"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "1px solid #dbe5ee",
            backgroundColor: "#ffffff",
            color: "#0D9488",
            fontSize: "28px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          →
        </button>
      </div>

      {/* Indicadores */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "25px",
        }}
      >
        {objectives.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to objective ${index + 1}`}
            style={{
              width: "9px",
              height: "9px",
              borderRadius: "50%",
              border: "none",
              padding: 0,
              cursor: "pointer",
              backgroundColor:
                index === current ? "#0D9488" : "#cbd5e1",
            }}
          />
        ))}
      </div>
    </main>
  );
}
