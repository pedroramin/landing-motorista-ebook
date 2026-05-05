import Link from "next/link";
import { ArrowLeft, CarFront, ShieldCheck } from "lucide-react";
import { CheckoutForm } from "@/components/CheckoutForm";
import { Footer } from "@/components/Footer";
import { mainOffer } from "@/lib/offers";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#f7f9f4] text-[#151515]">
      <header className="border-b border-[#dde5d8] bg-white px-5 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 font-black">
            <span className="grid h-10 w-10 place-items-center rounded-[8px] bg-[#ffd43b] text-[#151515]">
              <CarFront className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>Motorista no Azul</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-black text-[#596354] hover:text-[#149447]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar
          </Link>
        </div>
      </header>

      <section className="px-5 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.12em] text-[#149447]">
                Ultimo passo
              </p>
              <h1 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
                Preencha seus dados para acessar o ebook {mainOffer.name}.
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#596354]">
                Checkout simulado, limpo e pronto para integrar Pix, cartao,
                boleto e envio automatico do acesso.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-[8px] border border-[#b9dfc7] bg-[#effaf1] px-4 py-3 text-sm font-black text-[#0f7137]">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              Ambiente demonstrativo
            </div>
          </div>

          <CheckoutForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
