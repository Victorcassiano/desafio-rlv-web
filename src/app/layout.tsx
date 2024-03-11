import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ProviderTanstack } from "@/provider/ProviderTanstack";
import { Toaster } from "@/components/ui/toaster"
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}

export const metadata: Metadata = {
  title: "Notícias do dia",
  description: "Notícias do Dia: Mantenha-se Atualizado com os Eventos Mais Relevantes. De política a tecnologia, passando por entretenimento e saúde, nossas manchetes trazem as histórias mais recentes e impactantes. Descubra o que está moldando o mundo ao seu redor, com análises imparciais e cobertura abrangente. Seja o primeiro a saber, mergulhe nas Notícias do Dia.",
  keywords: ['News', 'IBGE']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Sidebar />
        <ProviderTanstack>
          {children}
          <Toaster />
        </ProviderTanstack>
        <Footer />
      </body>
    </html>
  );
}
