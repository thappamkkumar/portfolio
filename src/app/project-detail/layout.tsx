import SecondaryHeader from '@/components/header/SecondaryHeader';  

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SecondaryHeader />
      {children}
    </>
  );
}
