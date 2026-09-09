export default function Publications() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-6">
      <h1 className="text-3xl font-semibold mb-6">Publications</h1>

      <p>No publications yet.</p>

      <p>Please read the Related bibliography to learn more!</p>

      {/* Separador */}
      <div
        style={{
          height: "1px",
          backgroundColor: "#e5e7eb",
          margin: "60px 0",
        }}
      />

      <h1 className="text-3xl font-semibold mb-6">
        Related Bibliography
      </h1>

      <p>
        1. Alves AJS, Alves NG, Bártolo I, Fontinha D, Caetano S,
        Prudêncio M, et al. Unveiling a family of spiro-β-lactams with
        anti-HIV and antiplasmodial activity via phosphine-catalyzed
        [3+2] annulation of 6-alkylidene-penicillanates and allenoates.
        Front Chem. 2022 Oct 7;10:1017250.{" "}
        <a
          href="https://doi.org/10.3389/fchem.2022.1017250"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
          style={{ display: "inline" }}
        >
          doi:10.3389/fchem.2022.1017250
        </a>
      </p>

      <p>
        2. Alves NG, Bártolo I, Alves AJS, Fontinha D, Francisco D,
        Lopes SMM, et al. Synthesis and structure-activity relationships
        of new chiral spiro-β-lactams highly active against HIV-1 and
        Plasmodium. European Journal of Medicinal Chemistry. 2021
        Jul;219:113439.{" "}
        <a
          href="https://doi.org/10.1016/j.ejmech.2021.113439"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
          style={{ display: "inline" }}
        >
          doi:10.1016/j.ejmech.2021.113439
        </a>
      </p>

      <p>
        3. Bártolo I, Santos BS, Fontinha D, Machado M, Francisco D,
        Sepodes B, et al. Spiro-β-lactam BSS-730A Displays Potent
        Activity against HIV and Plasmodium. ACS Infect Dis. 2021 Feb
        12;7(2):421–34.{" "}
        <a
          href="https://doi.org/10.1021/acsinfecdis.0c00768"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
          style={{ display: "inline" }}
        >
          doi:10.1021/acsinfecdis.0c00768
        </a>
      </p>

      <p>
        4. Alves AJS, Alves NG, Caratão CC, Esteves MIM, Fontinha D,
        Bártolo I, et al. Spiro-Lactams as Novel Antimicrobial Agents.
        CTMC. 2020 Feb 19;20(2):140–52.{" "}
        <a
          href="https://doi.org/10.2174/1568026619666191105110049"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
          style={{ display: "inline" }}
        >
          doi:10.2174/1568026619666191105110049
        </a>
      </p>

      <p>
        5. Bártolo I, Moranguinho I, Gonçalves P, Diniz AR, Borrego P,
        Martin F, et al. High Instantaneous Inhibitory Potential of
        Bictegravir and the New Spiro-β-Lactam BSS-730A for HIV-2
        Isolates from RAL-Naïve and RAL-Failing Patients. IJMS. 2022
        Nov 18;23(22):14300.{" "}
        <a
          href="https://doi.org/10.3390/ijms232214300"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
          style={{ display: "inline" }}
        >
          doi:10.3390/ijms232214300
        </a>
      </p>
    </main>
  );
}
