import Homelink from '@/components/homelink';

type MdxExampleLayoutProps = { children: React.ReactNode };

export default function MdxExampleLayout({ children }: MdxExampleLayoutProps) {
  return (
    <>
      {children}
      <Homelink />
    </>
  );
}
