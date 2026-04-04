import "./globals.css";

export const metadata = {
  title: "Lumina Labs",
  description: "Games that entertain, educate, and keep people coming back.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
