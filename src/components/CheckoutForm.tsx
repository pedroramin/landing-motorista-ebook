"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  BadgeCheck,
  CheckCircle2,
  CreditCard,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";
import { mainOffer, orderBumpOffer } from "@/lib/offers";

const moneyToNumber = (value: string) =>
  Number(value.replace("R$", "").replace(".", "").replace(",", ".").trim());

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function CheckoutForm() {
  const [withBump, setWithBump] = useState(true);
  const [error, setError] = useState("");

  const total = useMemo(() => {
    const ebook = moneyToNumber(mainOffer.price);
    const bump = withBump ? moneyToNumber(orderBumpOffer.price) : 0;
    return formatCurrency(ebook + bump);
  }, [withBump]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setError("Preencha nome, email e telefone para continuar.");
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      orderBump: withBump,
      total,
    };

    console.info("Checkout simulado pronto para backend:", payload);
    window.location.href = "/upsell";
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <section className="rounded-[8px] border border-[#dde5d8] bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] sm:p-7">
        <div className="mb-6 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-[8px] bg-[#149447] text-white">
            <LockKeyhole className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-[#151515] sm:text-3xl">
              Checkout seguro
            </h1>
            <p className="text-sm font-medium text-[#66705f]">
              Acesso imediato apos a confirmacao simulada.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <label className="grid gap-2 text-sm font-bold text-[#20251f]">
            Nome completo
            <span className="relative">
              <User className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#73806d]" />
              <input
                required
                name="name"
                autoComplete="name"
                className="h-13 w-full rounded-[8px] border border-[#ccd8c6] bg-[#fbfcfa] pl-11 pr-4 text-base outline-none transition focus:border-[#149447] focus:ring-4 focus:ring-[#149447]/12"
                placeholder="Seu nome"
              />
            </span>
          </label>

          <label className="grid gap-2 text-sm font-bold text-[#20251f]">
            Email
            <span className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#73806d]" />
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                className="h-13 w-full rounded-[8px] border border-[#ccd8c6] bg-[#fbfcfa] pl-11 pr-4 text-base outline-none transition focus:border-[#149447] focus:ring-4 focus:ring-[#149447]/12"
                placeholder="voce@email.com"
              />
            </span>
          </label>

          <label className="grid gap-2 text-sm font-bold text-[#20251f]">
            Telefone
            <span className="relative">
              <Phone className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#73806d]" />
              <input
                required
                name="phone"
                inputMode="tel"
                autoComplete="tel"
                className="h-13 w-full rounded-[8px] border border-[#ccd8c6] bg-[#fbfcfa] pl-11 pr-4 text-base outline-none transition focus:border-[#149447] focus:ring-4 focus:ring-[#149447]/12"
                placeholder="(11) 99999-9999"
              />
            </span>
          </label>
        </div>

        <div className="mt-7">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.08em] text-[#596354]">
            Pagamento
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Pix", "Cartao", "Boleto"].map((method) => (
              <button
                key={method}
                type="button"
                className="flex h-13 items-center justify-center gap-2 rounded-[8px] border border-[#ccd8c6] bg-[#fbfcfa] text-sm font-black text-[#151515]"
              >
                <CreditCard className="h-4 w-4 text-[#149447]" aria-hidden="true" />
                {method}
              </button>
            ))}
          </div>
        </div>
      </section>

      <aside className="rounded-[8px] border border-[#dde5d8] bg-[#f7f9f4] p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] sm:p-7">
        <div className="flex items-start justify-between gap-4 border-b border-[#dde5d8] pb-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#149447]">
              Produto principal
            </p>
            <h2 className="mt-2 text-xl font-black text-[#151515]">
              {mainOffer.name}
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#596354]">
              Ebook digital com acesso imediato.
            </p>
          </div>
          <p className="shrink-0 text-lg font-black text-[#151515]">
            {mainOffer.price}
          </p>
        </div>

        <label className="mt-5 flex cursor-pointer gap-4 rounded-[8px] border-2 border-[#ffd43b] bg-white p-4 shadow-[0_14px_35px_rgba(255,212,59,0.15)]">
          <input
            type="checkbox"
            checked={withBump}
            onChange={(event) => setWithBump(event.target.checked)}
            className="mt-1 h-5 w-5 accent-[#149447]"
          />
          <span>
            <span className="mb-2 inline-flex items-center gap-2 rounded-[8px] bg-[#fff3bf] px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-[#6b5100]">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              Adicionar ao pedido
            </span>
            <span className="block text-base font-black text-[#151515]">
              {orderBumpOffer.name}
            </span>
            <span className="mt-2 block text-sm leading-6 text-[#596354]">
              Adicione por apenas {orderBumpOffer.price} e tenha uma lista
              pratica para nunca mais esquecer os pequenos gastos que comem seu
              lucro.
            </span>
          </span>
        </label>

        <div className="mt-6 space-y-3 border-t border-[#dde5d8] pt-5">
          <div className="flex justify-between text-sm font-bold text-[#596354]">
            <span>Ebook</span>
            <span>{mainOffer.price}</span>
          </div>
          <div className="flex justify-between text-sm font-bold text-[#596354]">
            <span>Order bump</span>
            <span>{withBump ? orderBumpOffer.price : "R$ 0,00"}</span>
          </div>
          <div className="flex items-center justify-between text-2xl font-black text-[#151515]">
            <span>Total</span>
            <span>{total}</span>
          </div>
        </div>

        {error ? (
          <p className="mt-4 rounded-[8px] bg-[#ffe3e3] p-3 text-sm font-bold text-[#9b1c1c]">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          className="mt-6 flex min-h-14 w-full items-center justify-center gap-3 rounded-[8px] bg-[#149447] px-5 py-4 text-base font-black text-white shadow-[0_16px_36px_rgba(20,148,71,0.22)] transition hover:bg-[#0f7d3a]"
        >
          Finalizar compra
          <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="mt-5 grid gap-2 text-sm font-semibold text-[#596354]">
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#149447]" aria-hidden="true" />
            Compra simulada para demonstracao do funil.
          </span>
          <span className="flex items-center gap-2">
            <LockKeyhole className="h-4 w-4 text-[#149447]" aria-hidden="true" />
            Estrutura pronta para integrar gateway de pagamento.
          </span>
        </div>
      </aside>
    </form>
  );
}
