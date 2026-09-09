"use client";

import { useState } from "react";

const objectives = [
  {
    number: "1",
    title: "In Vitro and Ex Vivo Antiviral Evaluation",
    text: "Comprehensive investigation of antiviral activity of selected spiro-β-lactams against a panel of human and animal respiratory RNA viruses in cell culture and human cell explants.",
  },
  {
    number: "2",
    title: "Efficacy in Mouse Model",
    text: "Evaluation of lead compounds in a mouse model of Influenza A infection, measuring viral load reduction, disease severity, and immune response modulation.",
  },
  {
    number: "3",
    title: "Mechanism of Action and Cellular Targets",
    text: "Identification of cellular targets and elucidation of mechanism of action using single-cell RNA sequencing, qPCR, proteomics, and genetic validation models.",
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
