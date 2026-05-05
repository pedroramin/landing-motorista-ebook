import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CarFront,
  CheckCircle2,
  Gauge,
  WalletCards,
} from "lucide-react";
import { DriverCalculator } from "@/components/DriverCalculator";
import { Footer } from "@/components/Footer";
import { upsellOffer } from "@/lib/offers";

const upsellBenefits = [
  { icon: WalletCards, label: "Lucro liquido e custo total" },
  { icon: Gauge, label: "Custo por km e lucro por km" },
  { icon: BookOpen, label: "Meta diaria para o proximo mes" },
];

export default function UpsellPage() {
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
          <p className="hidden text-sm font-black text-[#149447] sm:block">
            Ebook reservado
          </p>
        </div>
      </header>

      <section className="bg-[#101010] px-5 py-14 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-[8px] bg-[#ffd43b] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#151515]">
              <Calculator className="h-4 w-4" aria-hidden="true" />
              Oferta pos-compra
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
              Agora que voce aprendeu o controle, quer calcular seu lucro
              automaticamente todo mes?
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/74">
              Com a {upsellOffer.name}, voce coloca seus numeros e descobre em
              segundos quanto realmente sobrou.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href="#calculadora"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-[8px] bg-[#ffd43b] px-6 py-4 text-center text-base font-black text-[#151515] shadow-[0_16px_36px_rgba(255,212,59,0.24)] transition hover:bg-[#ffe066]"
              >
                Sim, quero adicionar a calculadora
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <Link
                href="/"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-[8px] border border-white/18 px-6 py-4 text-center text-base font-black text-white transition hover:border-[#ffd43b] hover:text-[#ffd43b]"
              >
                Nao, obrigado. Quero apenas o ebook.
              </Link>
            </div>
          </div>

          <aside className="rounded-[8px] border border-white/10 bg-white/7 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-[#ffd43b]">
              {upsellOffer.name}
            </p>
            <p className="mt-3 text-5xl font-black">{upsellOffer.price}</p>
            <p className="mt-4 leading-7 text-white/70">
              Um app simples para transformar seus gastos do mes em numeros
              claros: lucro liquido, custo por km, lucro por hora e meta diaria.
            </p>
            <div className="mt-6 grid gap-3">
              {upsellBenefits.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <CheckCircle2
                    className="h-5 w-5 text-[#149447]"
                    aria-hidden="true"
                  />
                  <Icon className="h-5 w-5 text-[#ffd43b]" aria-hidden="true" />
                  <span className="font-bold">{label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <DriverCalculator />

      <section className="bg-white px-5 py-14">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black leading-tight sm:text-5xl">
            O ebook ensina o metodo. A calculadora acelera a conta.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#596354]">
            Esta pagina ja mostra a primeira versao funcional do app. No futuro,
            ela pode ganhar login, historico mensal e integracao com pagamento.
          </p>
          <a
            href="#calculadora"
            className="mt-7 inline-flex min-h-14 items-center justify-center gap-3 rounded-[8px] bg-[#149447] px-6 py-4 text-center text-base font-black text-white shadow-[0_16px_36px_rgba(20,148,71,0.22)] transition hover:bg-[#0f7d3a]"
          >
            Testar a calculadora agora
            <Calculator className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
