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
        Cell Biology of Viral Infection Laboratory
      </h1>

      <h2>About the group...</h2>

      <p style={{ lineHeight: "1.7" }}>
        The CBR-UCP is located at the Instituto Gulbenkian de Ciência (IGC) and benefits from world-class infrastructure through a collaboration agreement between the UCP and the Gulbenkian Foundation. Facilities of the IGC are used, under the collaboration agreement. These include rodent facility, histopathology unit and cell imaging (flow cytometry).
      </p>

      <h2 style={{ marginTop: "50px" }}>Members</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        {/* Marta */}
        <div style={{ textAlign: "center" }}>
          <Image
            src="/Marta.png"
            alt="Marta Alenquer"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />

          <h3>Marta Alenquer, PhD</h3>

          <p>CiênciaID: A11D-CC4E-83E8</p>
        </div>

        {/* InesL */}
        <div style={{ textAlign: "center" }}>
          <Image
            src="/InesL.png"
            alt="Ines Lopes"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />

          <h3>Inês Lopes, PhD student, MD</h3>

          <p>CiênciaID: 191F-32DD-1901</p>
        </div>

        </div>
      </div>
    </main>
  );
}
