import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://landing-motorista-ebook.vercel.app"),
  title: "Motorista no Azul | Ebook para motoristas de aplicativo",
  description:
    "Ebook pratico para motoristas de aplicativo controlarem gastos, calcularem lucro real, custo por km e organizarem o dinheiro do carro.",
  openGraph: {
    title: "Motorista no Azul",
    description:
      "Pare de dirigir no escuro: descubra para onde seu dinheiro esta indo.",
    images: ["/hero-motorista-financas.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full bg-[#f7f9f4]">
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`window.pixelId = "69fd0928e0900bcd8663df37";
var a = document.createElement("script");
a.setAttribute("async", "");
a.setAttribute("defer", "");
a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
document.head.appendChild(a);`}
        </Script>
        {children}
      </body>
    </html>
  );
}
