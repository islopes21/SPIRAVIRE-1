export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      {/* Título principal */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        SPIRAVIRE Consortium
      </h1>

      {/* Introdução */}
      <p className="mt-4 text-center">
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

        <h2 className="text-4xl font-bold mb-10 text-center">
          Get to know us!
        </h2>

        {/* 3 colunas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >

          {/* Coimbra Chemistry Center */}
          <div className="p-5 border rounded-lg bg-gray-50">

            <h3 className="font-bold text-center mb-3">
              Coimbra Chemistry Center (CQC)
            </h3>

            <h4 className="font-bold text-center mb-3">
              Group of Organic Chemistry
              <br />
              (PI: Prof. Teresa Pinho e Melo)
            </h4>

            <p className="text-center text-sm">
              Responsible for the production and optimization of
              spiro-β-lactams for better antiviral efficacy and
              medicinal chemistry properties.
            </p>

          </div>

          {/* iMed.ULisboa */}
          <div className="p-5 border rounded-lg bg-gray-50">

            <h3 className="font-bold text-center mb-3">
              iMed.ULisboa
            </h3>

            <h4 className="font-bold text-center mb-3">
              HEEP group
              <br />
              (PI: Prof. Nuno Taveira)
            </h4>

            <p className="text-center text-sm">
              Evaluating antiviral activity across human and zoonotic
              respiratory viruses with pandemic potential.
            </p>

          </div>

          {/* Católica Biomedical Research Center */}
          <div className="p-5 border rounded-lg bg-gray-50">

            <h3 className="font-bold text-center mb-3">
              Católica Biomedical Research Center
            </h3>

            <h4 className="font-bold text-center mb-3">
              Cell Biology of Viral Infection Laboratory
              <br />
              (PI: Prof. Marta Alenquer)
            </h4>

            <p className="text-center text-sm">
              Strengthening defenses against emerging viral respiratory
              infections and global health threats.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}
