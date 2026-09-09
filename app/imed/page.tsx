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
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        HIV Evolution, Epidemiology and Prevention (HEEP) group
      </h1>

      <h2>About the group...</h2>

      <p style={{ lineHeight: "1.7" }}>
        The iMEd.ULisboa infrastructures include a fully equipped BLS2 and BSL3 laboratory, that will be used for all virological work. The RNA transcriptome analysis will be performed by a specialized CRO in Germany, and the subsequent molecular biology work will be performed at iMEd.Ulisboa and Egas Moniz School of Health and Science (CiiEM). These research centers are equipped with state of the art facilities for proteomic analysis, gene editing and cell culture work. 
      </p>

      <h2 style={{ marginTop: "50px" }}>Members</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        {/* Nuno */}
        <div style={{ textAlign: "center" }}>
          <Image
            src="/Nuno.png"
            alt="Nuno Taveira"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />

          <h3>Nuno Taveira, PhD, MD</h3>

          <p>CiênciaID: 7111-3383-A926</p>
        </div>

        {/* InesB */}
        <div style={{ textAlign: "center" }}>
          <Image
            src="/InesB.png"
            alt="Ines Bartolo"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />

          <h3>Inês Bártolo, PhD, MD</h3>

          <p>CiênciaID: 661E-F5CB-F85A</p>
        </div>

        {/* Paloma */}
        <div style={{ textAlign: "center" }}>
          <Image
            src="/Paloma.png"
            alt="Paloma Goncalves"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />

          <h3>Paloma Gonçalves, PhD Student, MD</h3>

          <p>CiênciaID: 6415-95F4-6D51</p>
        </div>
      </div>
    </main>
  );
}
