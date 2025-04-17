import MainLayout from '@/components/layout/MainLayout';

export default function PSDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}

