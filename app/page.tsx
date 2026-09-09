"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  "/P3.png",
  "/cqclab.png",
  "/cbrlab.png",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((current) => (current + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      style={{
        maxWidth: "1500px",
        margin: "0 auto",
        padding: "60px 24px",
      }}
    >
      {/* Introdução com imagem à esquerda e texto à direita */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          alignItems: "center",
        }}
      >
        {/* Slideshow */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "350px",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {images.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt="SPIRAVIRE research"
              fill
              style={{
                objectFit: "cover",
                opacity: index === currentImage ? 1 : 0,
                transition: "opacity 1.5s ease-in-out",
              }}
            />
          ))}
        </div>

        {/* Texto introdutório */}
        <div>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginBottom: "24px",
            }}
          >
            SPIRAVIRE Consortium
          </h1>

          <p
            style={{
              lineHeight: "1.7",
              margin: 0,
            }}
          >
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
        </div>
      </div>

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
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Get to know us!
        </h2>

        {/* Três colunas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {/* CQC */}
          <div
            style={{
              padding: "24px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f3f7fb",
              textAlign: "center",
              minHeight: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "12px",
              }}
            >
              <Link href="/cqc" className="institution-link">
                Coimbra Chemistry Center (CQC)
              </Link>
            </h3>

            <Image
              src="/cqc.png"
              alt="CQC logo"
              width={90}
              height={70}
            />

            <h4
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "12px",
              }}
            >
              Group of Organic Chemistry
              <br />
              (PI: Prof. Teresa Pinho e Melo)
            </h4>

            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              Responsible for the production and optimization of
              spiro-β-lactams for better antiviral efficacy and
              medicinal chemistry properties.
            </p>
          </div>

          {/* iMed */}
          <div
            style={{
              padding: "24px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f3f7fb",
              textAlign: "center",
              minHeight: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "12px",
              }}
            >
              <Link href="/imed" className="institution-link">
                iMed.ULisboa (Faculty of Pharmacy, ULisboa)
              </Link>
            </h3>

            <Image
              src="/imed.png"
              alt="iMedULisboa logo"
              width={100}
              height={70}
            />

            <h4
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "12px",
              }}
            >
              HEEP group
              <br />
              (PI: Prof. Nuno Taveira)
            </h4>

            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              Evaluating antiviral activity across human and zoonotic
              respiratory viruses with pandemic potential.
            </p>
          </div>

          {/* Católica */}
          <div
            style={{
              padding: "24px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              backgroundColor: "#f3f7fb",
              textAlign: "center",
              minHeight: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "12px",
              }}
            >
              <Link href="/CBR" className="institution-link">
                Católica Biomedical Research Center (CBR)
              </Link>
            </h3>

            <Image
              src="/CBR-Logo.png"
              alt="CBR logo"
              width={110}
              height={70}
            />

            <h4
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "12px",
              }}
            >
              Cell Biology of Viral Infection Laboratory
              <br />
              (PI: Prof. Marta Alenquer)
            </h4>

            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              Strengthening defenses against emerging viral respiratory
              infections and global health threats.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
