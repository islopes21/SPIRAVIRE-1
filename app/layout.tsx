import Image from "next/image";
import Link from "next/link";
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
              maxWidth: "1600px",
              margin: "0 auto",
              padding: "20px 40px",
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
                width={90}
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
                    color: "#666",
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
              <a href="/project">Overview</a>
              <a href="/objectives">Objectives</a>
              <a href="/publications">Publications</a>
            </nav>
          </div>
        </header>

        <main
  style={{
    maxWidth: "1600px",
    margin: "0 auto",
    padding: "50px 40px",
    boxSizing: "border-box",
  }}
>
  {children}
</main>
        {/* Footer */}
        <footer
          style={{
            maxWidth: "1600px",
            margin: "60px auto 0",
            padding: "40px",
            color: "#666",
            fontSize: "12px",
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

              <Link href="/project" className="footer-link">
                Project Overview
              </Link>

              <Link href="/objectives" className="footer-link">
                Research Objectives
              </Link>

              <Link href="/publications" className="footer-link">
                Publications & Related
              </Link>
            </div>

            {/* Partner Institutions */}
            <div>
              <h3>PARTNER INSTITUTIONS</h3>

              <Link href="/cqc" className="footer-link">
                CQC - Coimbra University
              </Link>

              <Link href="/imed" className="footer-link">
                iMed.ULisboa - Faculty of Pharmacy, ULisboa
              </Link>

              <Link href="/CBR" className="footer-link">
                CBR - Portuguese Catholic University
              </Link>
            </div>

            {/* Project Financing */}
            <div>
              <h3>PROJECT FINANCING</h3>

              <a
  href="https://sciproj.ptcris.pt/177835PRJ"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-link"
              >
                FCT - Fundação da Ciência e Tecnologia
              </a>
            </div>
          </div>

          {/* Copyright */}
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
