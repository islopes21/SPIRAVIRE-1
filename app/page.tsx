import Image from 'public/SPIRAVIRE_log.png';
export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Image src="public/SPIRAVIRE_log.png" alt="SPIRAVIRE" width={300} height={100} priority />
      <h1 className="text-4xl font-bold mb-6">SPIRAVIRE Consortium</h1>
      <p>
        Exploring Spiro-β-lactams as Therapeutic Agents Against RNA Virus-Induced Respiratory Infections.
      </p>
      <p className="mt-4">
        The SPIRAVIRE consortium develops broad-spectrum, host-directed antivirals against RNA respiratory viruses to improve global preparedness.
      </p>
    </main>
  );
}
