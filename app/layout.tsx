import Image from "next/image";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "SPIRAVIRE Consortium",
  description: "Host-directed antivirals against RNA respiratory viruses",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo + nome */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <Image
                src="/SPIRAVIRE_log.png"
                alt="SPIRAVIRE logo"
                width={80}
                height={70}
              />

              <div>
                <h2 style={{ margin: 0 }}>
                  SPIRAVIRE
                </h2>

                <p
                  style={{
                    margin: "4px 0 0 0",
                    fontSize: "14px",
                    color: "#309bae",
                  }}
                >
                  Host-Directed Antivirals for RNA Respiratory Viruses
                </p>
              </div>
            </div>

            {/* Navegação */}
            <nav
              style={{
                display: "flex",
                gap: "24px",
              }}
            >
              <a href="/">Home</a>
              <a href="/objectives">Objectives</a>
              <a href="/publications">Publications</a>
            </nav>
          </div>
        </header>

        <main>
          {children}
        </main>

        {/* Footer */}
        <footer
          style={{
            maxWidth: "1000px",
            margin: "60px auto 0",
            padding: "40px 20px",
            color: "#309bae",
            fontSize: "14px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "40px",
            }}
          >
            {/* Consortium Hub */}
            <div>
              <h3>CONSORTIUM HUB</h3>
              <p>Project Overview</p>
              <p>Research Objectives</p>
              <p>Publications & Related</p>
            </div>

            {/* Partner Institutions */}
            <div>
              <h3>PARTNER INSTITUTIONS</h3>
              <p>CQC - Coimbra University</p>
              <p>iMed.ULisboa - Faculty of Pharmacy, ULisboa</p>
              <p>CBR - Portuguese Catholic University</p>
            </div>

            {/* Project Financing */}
            <div>
              <h3>PROJECT FINANCING</h3>
              <p>FCT - Fundação da Ciência e Tecnologia</p>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "40px",
              paddingTop: "20px",
              borderTop: "1px solid #ddd",
            }}
          >
            © {new Date().getFullYear()} SPIRAVIRE Consortium. All rights
            reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
