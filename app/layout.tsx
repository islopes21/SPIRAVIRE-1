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

        <footer
          style={{
            textAlign: "center",
            padding: "40px 20px",
            color: "#666",
            fontSize: "14px",
          }}
        >
          © {new Date().getFullYear()} SPIRAVIRE Consortium
        </footer>

      </body>
    </html>
  );
}
