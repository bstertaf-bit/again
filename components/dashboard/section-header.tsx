export function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="mb-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-slate-300">{subtitle}</p>
    </header>
  );
}
