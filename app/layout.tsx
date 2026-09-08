import "./globals.css";
import Image from "next/image";
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
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Image
              src="/SPIRAVIRE_log.png"
              alt="SPIRAVIRE logo"
              width={70}
              height={70}
            />

            <div>
              <h2 style={{ margin: 0 }}>SPIRAVIRE</h2>

              <div style={{ fontSize: "14px", color: "#666" }}>
                Host-Directed Antivirals for RNA Respiratory Viruses
              </div>
            </div>
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
