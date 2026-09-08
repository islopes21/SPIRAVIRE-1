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
        Group of Organic Chemistry
      </h1>

      <h2>About the group...</h2>

      <p>
        The Organic Chemistry Group at CQC is fully equipped with the necessary equipment and glassware for synthetic organic chemistry work. The laboratory equipment includes synthetic organic chemistry equipment such as microwave reactor, flow chemistry equipment, flash vacuum pyrolysis and ball mill. A variety of analytical tools are available in the laboratory, including elemental analysis, chiral HPLC, chiral GC, ATR-FTIR and UV/Vis spectroscopy.
      </p>

      <h2>Members:</h2>
      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "30px",
  }}
>
  {/* Coluna 1 */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "60px",
    }}
    >
    <Image
      src="/research.jpg"
      alt="Research"
      width={400}
      height={250}
    />
    <h2>Teresa Pinho e Melo, PhD, MD
      (CiênciaID: 9A1E-2767-EEE1)</h2>

  </div>

  {/* Coluna 2 */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "60px",
    }}
    >
    <Image
      src="/research.jpg"
      alt="Research"
      width={400}
      height={250}
    />
    <h2>Américo Alves, PhD, MD
      (CiênciaID: A018-F2DF-D0C4)</h2>
  </div>
    </main>
  );
}
