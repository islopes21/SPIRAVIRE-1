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
          marginBottom: "40px",
        }}
      >
        Microbiology and Infectious Diseases
      </h1>

      <section>
        <h2>About the group...</h2>

        <p
          style={{
            lineHeight: "1.7",
            marginTop: "20px",
          }}
        >
          The Research on Microbiology and Infectious Diseases group focuses
          on human, food and environmental microbiology, with particular
          emphasis on human health and disease. Its research aims to improve
          the understanding, monitoring and control of microbial infections,
          including antimicrobial-resistant pathogens, by investigating their
          virulence mechanisms and developing strategies for their prevention
          and control.
        </p>
      </section>

      {/* Egas Moniz */}

      <section
        style={{
          marginTop: "70px",
          padding: "35px",
          backgroundColor: "#f3f7fb",
          border: "1px solid #dbe5ee",
          borderRadius: "16px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "25px",
          }}
        >
          Egas Moniz
        </h2>

        <Image
          src="/egas2.png"
          alt="Egas Moniz logo"
          width={200}
          height={100}
          style={{
            objectFit: "contain",
          }}
        />

        <p
          style={{
            maxWidth: "750px",
            margin: "25px auto 0 auto",
            lineHeight: "1.7",
            color: "#475569",
          }}
        >
          Responsible for the overall management and coordination of the
          SPIRAVIRE project, including the coordination of consortium
          activities, timelines and project implementation.
        </p>
      </section>

      {/* Members */}

      <section
        style={{
          marginTop: "80px",
        }}
      >
        <h2>Members</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "45px",
            marginTop: "35px",
          }}
        >
          {/* Nuno */}

          <div
            style={{
              textAlign: "center",
            }}
          >
            <Image
              src="/Nuno.png"
              alt="Nuno Taveira"
              width={200}
              height={200}
              style={{
                objectFit: "contain",
              }}
            />

            <h3>Nuno Taveira, PhD, MD</h3>

            <p>CiênciaID: 7111-3383-A926</p>
          </div>

          {/* Paloma */}

          <div
            style={{
              textAlign: "center",
            }}
          >
            <Image
              src="/Paloma.png"
              alt="Paloma Gonçalves"
              width={200}
              height={200}
              style={{
                objectFit: "contain",
              }}
            />

            <h3>Paloma Gonçalves, PhD Student, MD</h3>

            <p>CiênciaID: 6415-95F4-6D51</p>
          </div>

          {/* Inês */}

          <div
            style={{
              textAlign: "center",
            }}
          >
            <Image
              src="/InesL.png"
              alt="Inês Lopes"
              width={200}
              height={200}
              style={{
                objectFit: "contain",
              }}
            />

            <h3>Inês Lopes, PhD Student, MD</h3>

            <p>CiênciaID: 191F-32DD-1901</p>
          </div>
        </div>
      </section>
    </main>
  );
}

