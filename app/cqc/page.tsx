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

      <p style={{ lineHeight: "1.7" }}>
        The Organic Chemistry Group at CQC is fully equipped with the
        necessary equipment and glassware for synthetic organic chemistry
        work. The laboratory equipment includes synthetic organic chemistry
        equipment such as microwave reactor, flow chemistry equipment,
        flash vacuum pyrolysis and ball mill. A variety of analytical tools
        are available in the laboratory, including elemental analysis,
        chiral HPLC, chiral GC, ATR-FTIR and UV/Vis spectroscopy.
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
        {/* Teresa */}
        <div style={{ textAlign: "center" }}>
          <Image
            src="/Teresa.png"
            alt="Teresa Pinho e Melo"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />

          <h3>Teresa Pinho e Melo, PhD, MD</h3>

          <p>CiênciaID: 9A1E-2767-EEE1</p>
        </div>

        {/* Américo */}
        <div style={{ textAlign: "center" }}>
          <Image
            src="/Americo.png"
            alt="Americo Alves"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />

          <h3>Américo Alves, PhD, MD</h3>

          <p>CiênciaID: A018-F2DF-D0C4</p>
        </div>

        {/* MSc researcher */}
        <div style={{ textAlign: "center" }}>
          <Image
            src="/Unknown.png"
            alt="MSc researcher"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />

          <h3>MSc researcher</h3>

          <p>To be recruited</p>
        </div>
      </div>
    </main>
  );
}
