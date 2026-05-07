import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  Banknote,
  Calculator,
  CarFront,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Fuel,
  Gauge,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Utensils,
  WalletCards,
  Wrench,
} from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { EbookMockup } from "@/components/EbookMockup";
import { Footer } from "@/components/Footer";
import { checkoutUrl, mainOffer } from "@/lib/offers";

const painCards = [
  {
    icon: Fuel,
    title: "Combustivel levando boa parte do ganho",
    text: "O app mostra o bruto. A bomba mostra a realidade.",
  },
  {
    icon: Wrench,
    title: "Manutencao aparecendo de surpresa",
    text: "Oleo, pneu, freio e alinhamento chegam sem avisar.",
  },
  {
    icon: Utensils,
    title: "Alimentacao na rua virando gasto invisivel",
    text: "Um lanche aqui, um cafe ali, e o lucro vai embora.",
  },
  {
    icon: WalletCards,
    title: "Dinheiro da casa misturado com dinheiro do carro",
    text: "Quando tudo cai na mesma conta, fica dificil saber o que sobrou.",
  },
  {
    icon: Gauge,
    title: "Falta de meta diaria realista",
    text: "Rodar ate cansar nao e o mesmo que bater uma meta de lucro.",
  },
  {
    icon: Clock3,
    title: "Trabalhar muito e ver pouco resultado",
    text: "Horas no volante, pouco dinheiro limpo no fim do mes.",
  },
];

const modules = [
  ["Como calcular seu lucro real", Calculator],
  ["Como descobrir seu custo por km", Gauge],
  ["Como separar gastos pessoais dos gastos do trabalho", WalletCards],
  ["Como montar uma meta diaria inteligente", TrendingUp],
  ["Como prever manutencao antes que ela vire divida", Wrench],
  ["Como organizar combustivel, alimentacao, seguro, impostos e reserva", ReceiptText],
  ["Como saber se uma corrida compensa", CarFront],
  ["Como fechar o mes sabendo exatamente quanto sobrou", ClipboardCheck],
] as const;

const before = [
  "Faturamento confundido com lucro.",
  "Gastos anotados de cabeca.",
  "Manutencao sempre vira susto.",
  "Sem reserva.",
  "Meta baseada em achismo.",
];

const after = [
  "Lucro liquido claro.",
  "Gastos separados por categoria.",
  "Previsao de custos.",
  "Reserva planejada.",
  "Meta baseada em numeros reais.",
];

const bonuses = [
  ["Checklist de gastos do motorista", ClipboardCheck],
  ["Modelo simples de controle semanal", ReceiptText],
  ["Lista dos gastos invisiveis que mais comem o lucro", AlertTriangle],
  ["Guia rapido para definir meta diaria", TrendingUp],
] as const;


const testimonials = [
  {
    initials: "RS",
    name: "Rafael S.",
    profile: "Motorista de app • São Paulo/SP",
    text:
      "Eu achava que estava indo bem porque o aplicativo mostrava um bom valor no fim do dia. Depois que comecei a separar combustível, alimentação e manutenção, entendi quanto realmente ficava para mim.",
  },
  {
    initials: "MC",
    name: "Marcos C.",
    profile: "Motorista de app • Belo Horizonte/MG",
    text:
      "O que mais me ajudou foi parar de misturar dinheiro da casa com dinheiro do carro. Agora eu olho para o lucro real, não só para o faturamento bruto.",
  },
  {
    initials: "JL",
    name: "João L.",
    profile: "Motorista de app • Curitiba/PR",
    text:
      "Antes eu rodava até cansar. Agora comecei a pensar em meta diária, custo por km e nos horários que realmente compensam. Só isso já mudou minha forma de trabalhar.",
  },
] as const;

const faqs = [
  {
    question: "Serve para quem roda so de vez em quando?",
    answer:
      "Serve sim. Quem roda pouco tambem precisa saber se a corrida esta pagando o custo do carro e do tempo.",
  },
  {
    question: "Preciso saber matematica?",
    answer:
      "Nao. O ebook usa contas simples, exemplos diretos e linguagem de motorista para motorista.",
  },
  {
    question: "Funciona para Uber, 99 e outros apps?",
    answer:
      "Sim. O controle e baseado no seu dinheiro, nos seus custos e nos seus quilometros. Nao depende de um app especifico.",
  },
  {
    question: "O ebook e fisico?",
    answer:
      "Nao. E um ebook digital. Voce acessa pelo celular, computador ou tablet.",
  },
  {
    question: "Em quanto tempo recebo?",
    answer:
      "O acesso e imediato apos a confirmacao da compra na gateway de pagamento.",
  },
  {
    question: "E se eu nao tiver planilha?",
    answer:
      "Nao tem problema. O material ensina um controle simples e tambem entrega modelos para voce comecar.",
  },
  {
    question: "Isso vai me fazer ganhar mais automaticamente?",
    answer:
      "Nao existe promessa de ganho garantido. O objetivo e te dar clareza para tomar decisoes melhores com o dinheiro que voce ja movimenta todos os dias.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#f7f9f4] text-[#151515]">
      <section className="relative min-h-[88svh] overflow-hidden bg-[#111] text-white">
        <Image
          src="/hero-motorista-financas.png"
          alt="Motorista de aplicativo olhando o celular com elementos de combustivel, manutencao e grafico financeiro"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[63%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.78)_42%,rgba(0,0,0,0.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f7f9f4] to-transparent" />

        <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link href="/" className="flex items-center gap-3 font-black">
            <span className="grid h-10 w-10 place-items-center rounded-[8px] bg-[#ffd43b] text-[#151515]">
              <CarFront className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">Motorista no Azul</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-bold text-white/78 md:flex">
            <a href="#aprenda" className="hover:text-[#ffd43b]">
              O que aprende
            </a>
            <a href="#oferta" className="hover:text-[#ffd43b]">
              Oferta
            </a>
            <a href="#faq" className="hover:text-[#ffd43b]">
              Dúvidas
            </a>
          </nav>
          <Link
            href={checkoutUrl}
            className="hidden rounded-[8px] bg-white px-4 py-3 text-sm font-black text-[#151515] transition hover:bg-[#ffd43b] sm:inline-flex"
          >
            Comprar agora
          </Link>
        </header>

        <div className="relative z-10 mx-auto flex max-w-6xl px-5 pb-20 pt-12 sm:pt-20">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-[8px] bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#ffd43b] ring-1 ring-white/15">
              <AlertTriangle className="h-4 w-4" aria-hidden="true" />
              Primeiro descubra o lucro real
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
              Pare de dirigir no escuro: descubra para onde seu dinheiro esta
              indo.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/82 sm:text-xl">
              Voce nao precisa rodar mais sem saber o que sobra. Aprenda a
              separar faturamento de lucro, calcular seus custos e tratar suas
              corridas como um negocio.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href={checkoutUrl}>Quero controlar meus gastos agora</CTAButton>
              <p className="text-sm font-bold text-white/70">
                Ebook digital | Acesso imediato | Linguagem simples
              </p>
            </div>
            <p className="mt-7 max-w-xl border-l-4 border-[#149447] pl-4 text-xl font-black leading-8 text-white">
              Voce nao precisa rodar mais. Primeiro, precisa descobrir quanto
              esta realmente sobrando.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-[#149447]">
              O problema que quase ninguem calcula
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Se o app mostra que voce faturou bem, por que o dinheiro nao
              sobra?
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#596354]">
              O problema talvez nao seja so a quantidade de corridas. Pode ser a
              falta de controle sobre o que entra, o que sai e o que realmente
              fica.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {painCards.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-[8px] border border-[#dde5d8] bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.06)]"
              >
                <Icon className="h-7 w-7 text-[#149447]" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-black leading-7">{title}</h3>
                <p className="mt-3 leading-7 text-[#596354]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="aprenda" className="bg-[#111] px-5 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.12em] text-[#ffd43b]">
                O que voce vai aprender
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
                Um guia direto para parar de confundir corrida com lucro.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                Nada de promessa facil. A proposta e colocar numero onde hoje
                tem achismo: combustivel, manutencao, alimentacao, taxas e
                reserva.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {modules.map(([title, Icon]) => (
                <article
                  key={title}
                  className="rounded-[8px] border border-white/10 bg-white/7 p-5"
                >
                  <Icon className="h-6 w-6 text-[#ffd43b]" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-black leading-7">{title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-[#149447]">
              Antes e depois
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              A mudanca nao e dirigir com sorte. E dirigir com clareza.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <ComparisonColumn
              title="Antes do ebook"
              quote="Rodo o dia todo e nao sei para onde foi o dinheiro."
              items={before}
              tone="warning"
            />
            <ComparisonColumn
              title="Depois do ebook"
              quote="Sei quanto entrou, quanto saiu e quanto realmente ficou para mim."
              items={after}
              tone="success"
            />
          </div>
        </div>
      </section>

      <section id="oferta" className="bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <EbookMockup />

          <div>
            <p className="text-sm font-black uppercase tracking-[0.12em] text-[#149447]">
              Oferta especial
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              {mainOffer.name}: controle o dinheiro das suas corridas sem
              complicacao.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#596354]">
              {mainOffer.subtitle}
            </p>

            <div className="mt-7 rounded-[8px] border border-[#dde5d8] bg-[#f7f9f4] p-5">
              <p className="text-sm font-bold text-[#596354]">
                De{" "}
                <span className="text-lg font-black line-through">
                  {mainOffer.originalPrice}
                </span>
              </p>
              <p className="mt-1 text-5xl font-black text-[#151515]">
                {mainOffer.price}
              </p>
              <p className="mt-3 text-lg font-black leading-7 text-[#20251f]">
                Por menos que o valor de uma corrida media, voce pode aprender a
                controlar o dinheiro de todas as suas corridas do mes.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href={checkoutUrl} icon={Banknote}>
                Comprar agora e acessar o ebook
              </CTAButton>
              <p className="text-sm font-bold text-[#596354]">
                Garantia de 7 dias. Acesso digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-[#149447]">
              Bonus digitais
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Alem do ebook, voce recebe ferramentas simples para comecar.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bonuses.map(([title, Icon]) => (
              <article
                key={title}
                className="rounded-[8px] border border-[#dde5d8] bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.06)]"
              >
                <Icon className="h-7 w-7 text-[#149447]" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-black leading-7">{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101010] px-5 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-[#ffd43b]">
              Prova social
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Motoristas que começaram a olhar para os números com mais clareza.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Situações comuns de quem para de olhar só para o faturamento do app
              e começa a entender combustível, manutenção, tempo e lucro real.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[18px] border border-white/10 bg-white/[0.07] p-6 shadow-[0_18px_54px_rgba(0,0,0,0.24)]"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#ffd43b] to-[#149447] text-sm font-black text-[#151515]">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white">
                      {testimonial.name}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-white/52">
                      {testimonial.profile}
                    </p>
                  </div>
                </div>

                <div className="mt-5 text-lg tracking-[0.18em] text-[#ffd43b]">
                  ★★★★★
                </div>

                <p className="mt-4 text-base font-medium leading-8 text-white/78">
                  “{testimonial.text}”
                </p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm font-bold leading-6 text-white/45">
            Relatos ilustrativos baseados em situações comuns de motoristas de
            aplicativo. Substitua por depoimentos reais quando tiver autorização
            dos compradores.
          </p>
        </div>
      </section>

      <section id="faq" className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-[#149447]">
            Perguntas comuns
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
            Duvidas antes de comprar
          </h2>
          <div className="mt-8 divide-y divide-[#dde5d8] rounded-[8px] border border-[#dde5d8] bg-white shadow-[0_12px_36px_rgba(15,23,42,0.06)]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">
                  {faq.question}
                  <Sparkles
                    className="h-5 w-5 shrink-0 text-[#149447] transition group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-4 leading-7 text-[#596354]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-[8px] bg-[#149447] text-white">
              <ShieldCheck className="h-8 w-8" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.12em] text-[#149447]">
                Garantia
              </p>
              <h2 className="mt-1 text-3xl font-black">7 dias</h2>
            </div>
          </div>
          <p className="text-xl font-black leading-8 text-[#20251f]">
            Garantia de 7 dias: se voce sentir que o conteudo nao te ajudou,
            pode solicitar reembolso dentro do prazo.
          </p>
        </div>
      </section>

      <section className="bg-[#111] px-5 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-[#ffd43b]">
            Comece pelo controle
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
            Comece hoje a tratar seu volante como um negocio.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/72">
            Descubra quanto voce realmente ganha e pare de deixar seu lucro
            escapar sem perceber.
          </p>
          <div className="mt-8">
            <CTAButton href={checkoutUrl}>Quero meu ebook agora</CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ComparisonColumn({
  title,
  quote,
  items,
  tone,
}: {
  title: string;
  quote: string;
  items: string[];
  tone: "warning" | "success";
}) {
  const isSuccess = tone === "success";

  return (
    <article
      className={`rounded-[8px] border p-6 shadow-[0_12px_36px_rgba(15,23,42,0.06)] ${
        isSuccess
          ? "border-[#b9dfc7] bg-[#effaf1]"
          : "border-[#f2d999] bg-[#fff8dc]"
      }`}
    >
      <p
        className={`text-sm font-black uppercase tracking-[0.12em] ${
          isSuccess ? "text-[#149447]" : "text-[#8a6500]"
        }`}
      >
        {title}
      </p>
      <h3 className="mt-3 text-2xl font-black leading-8">{quote}</h3>
      <ul className="mt-6 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-base font-bold leading-7">
            <CheckCircle2
              className={`mt-1 h-5 w-5 shrink-0 ${
                isSuccess ? "text-[#149447]" : "text-[#b58400]"
              }`}
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
