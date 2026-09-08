import Image from "next/image";
export default function Home() {
  return (
    <Image
        src="/SPIRAVIRE_log.png"
        alt="SPIRAVIRE"
        width={300}
        height={100}
    <main className="max-w-4xl mx-auto px-6 py-16">
      />

      <h1 className="text-4xl font-bold mb-6">SPIRAVIRE Consortium</h1>

      <p>
        Exploring Spiro-β-lactams as Therapeutic Agents Against RNA Virus-Induced
        Respiratory Infections.
      </p>

      <p className="mt-4">
        The SPIRAVIRE consortium aims to develop innovative, broad-spectrum, host-directed antivirals against respiratory diseases caused by RNA viruses based on spiro-β-lactam compounds. This effort was prompted by the landmark discovery that some spiro-β-lactams have remarkable activity against diverse viruses, including HIV-1, HIV-2, influenza A and B viruses and SARS-CoV-2. The urgency for such broad-spectrum antivirals is highlighted by the need to improve global preparedness for potential epidemics caused by RNA respiratory viruses.
      </p>
    </main>
  );
}
