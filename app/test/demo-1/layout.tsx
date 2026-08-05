export default function DemoOneLayout({
  children,
  drawer,
}: Readonly<{
  children: React.ReactNode;
  drawer: React.ReactNode;
}>) {
  return (
    <>
      {children}
      {drawer}
    </>
  );
}
