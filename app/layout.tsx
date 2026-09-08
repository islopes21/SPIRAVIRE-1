import "./globals.css";
import { ReactNode } from "react";
import Image from "next/image";

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
          <div style={{maxWidth: "1000px", margin: "0 auto", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <Image 
                src="/SPIRAVIRE_log.png" 
                alt="SPIRAVIRE" 
                width={50} 
                height={50} 
              />
            <div>
  <h2 style={{ margin: 0 }}>SPIRAVIRE</h2>
  <div style={{ fontSize: "14px", color: "#666" }}>
    Host-Directed Antivirals for RNA Respiratory Viruses
  </div>
</div>

            <nav>
              <a href="/">Home</a>
              <a href="/objectives">Objectives</a>
              <a href="/publications">Publications</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          © {new Date().getFullYear()} SPIRAVIRE Consortium
        </footer>
      </body>
    </html>
  );
}
