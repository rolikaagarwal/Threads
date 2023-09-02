import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-[80vh] flex items-center justify-center ">{children}</div>;
}
