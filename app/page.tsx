import Image from "next/image";
export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      />

      <h1 className="text-4xl font-bold mb-6">SPIRAVIRE Consortium</h1>

      </p>

      <p className="mt-4">
        The SPIRAVIRE consortium aims to develop innovative, broad-spectrum, host-directed antivirals against respiratory diseases caused by RNA viruses based on spiro-β-lactam compounds. This effort was prompted by the landmark discovery that some spiro-β-lactams have remarkable activity against diverse viruses, including HIV-1, HIV-2, influenza A and B viruses and SARS-CoV-2. The urgency for such broad-spectrum antivirals is highlighted by the need to improve global preparedness for potential epidemics caused by RNA respiratory viruses.
      </p>
      <h1 className="text-4xl font-bold mb-6">Get to know us!</h2>
    
      </p>

      <p className="mt-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="p-5 border rounded-lg bg-gray-50">
          <h3 className="font-bold text-lg mb-2">Coimbra Chemistry Center (CQC)</h3>
          <h4 className="font-bold text-lg mb-2">Group of the Organic Chemistry (PI: Prof. Teresa Pinho e Melo)</h4>
          <p className="text-sm">Responsible for the production and optimization of spiro-β-Lactams for better Antiviral Efficacy and Medicinal Chemistry Properties.</p>
        </div>

        <div className="p-5 border rounded-lg bg-gray-50">
          <h3 className="font-bold text-lg mb-2">iMed.ULisboa</h3>
          <h4 className="font-bold text-lg mb-2">HEEP group (PI: Prof. Nuno Taveira)</h4>
          <p className="text-sm">Evaluating antiviral activity across human and zoonotic respiratory viruses with pandemic potential.</p>
        </div>

        <div className="p-5 border rounded-lg bg-gray-50">
          <h3 className="font-bold text-lg mb-2">Católica Biomedical Research Center</h3>
          <h4 className="font-bold text-lg mb-2">Cell Biology of Viral Infection Laboratory (PI: Prof. Marta Alenquer)</h4>
          <p className="text-sm">Strengthening defenses against emerging viral respiratory infections and global health threats.</p>
        </div>
    
    </main>
  );
}
