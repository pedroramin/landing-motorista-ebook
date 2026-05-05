"use client";

import { FormEvent, useState } from "react";
import { AlertTriangle, Calculator, RotateCcw, TrendingUp } from "lucide-react";

type CalculatorFields = {
  grossRevenue: string;
  fuel: string;
  maintenance: string;
  wash: string;
  food: string;
  parking: string;
  insurance: string;
  taxes: string;
  carPayment: string;
  kilometers: string;
  days: string;
  hours: string;
};

type CalculatorResult = {
  totalCost: number;
  netProfit: number;
  costPerKm: number;
  profitPerKm: number;
  profitPerDay: number;
  profitPerHour: number;
  expensePercent: number;
  nextDailyGoal: number;
  alert: string;
};

const initialFields: CalculatorFields = {
  grossRevenue: "",
  fuel: "",
  maintenance: "",
  wash: "",
  food: "",
  parking: "",
  insurance: "",
  taxes: "",
  carPayment: "",
  kilometers: "",
  days: "",
  hours: "",
};

const fieldGroups = [
  ["grossRevenue", "Ganho bruto do mes", "R$"] as const,
  ["fuel", "Combustivel", "R$"] as const,
  ["maintenance", "Manutencao", "R$"] as const,
  ["wash", "Lavagem", "R$"] as const,
  ["food", "Alimentacao na rua", "R$"] as const,
  ["parking", "Estacionamento", "R$"] as const,
  ["insurance", "Seguro", "R$"] as const,
  ["taxes", "IPVA/licenciamento", "R$"] as const,
  ["carPayment", "Financiamento/aluguel do carro", "R$"] as const,
  ["kilometers", "Quilometros rodados", "km"] as const,
  ["days", "Dias trabalhados", "dias"] as const,
  ["hours", "Horas trabalhadas", "h"] as const,
];

const toNumber = (value: string) => Number(value.replace(",", ".")) || 0;

const currency = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const decimal = (value: number) =>
  value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export function DriverCalculator() {
  const [fields, setFields] = useState(initialFields);
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [error, setError] = useState("");

  function updateField(key: keyof CalculatorFields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function calculate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const grossRevenue = toNumber(fields.grossRevenue);
    const kilometers = toNumber(fields.kilometers);
    const days = toNumber(fields.days);
    const hours = toNumber(fields.hours);

    if (!grossRevenue || !kilometers || !days || !hours) {
      setError(
        "Preencha pelo menos ganho bruto, quilometros, dias e horas trabalhadas."
      );
      setResult(null);
      return;
    }

    const totalCost =
      toNumber(fields.fuel) +
      toNumber(fields.maintenance) +
      toNumber(fields.wash) +
      toNumber(fields.food) +
      toNumber(fields.parking) +
      toNumber(fields.insurance) +
      toNumber(fields.taxes) +
      toNumber(fields.carPayment);

    const netProfit = grossRevenue - totalCost;
    const expensePercent = (totalCost / grossRevenue) * 100;
    const nextDailyGoal = (totalCost + Math.max(netProfit, 0) * 1.1) / days;

    let alert = "Seus custos estao dentro de uma faixa mais controlavel.";
    if (expensePercent >= 70) {
      alert =
        "Alerta vermelho: seus custos estao consumindo boa parte do faturamento.";
    } else if (expensePercent >= 50) {
      alert =
        "Atenção: mais da metade do faturamento esta indo embora em despesas.";
    }

    setError("");
    setResult({
      totalCost,
      netProfit,
      costPerKm: totalCost / kilometers,
      profitPerKm: netProfit / kilometers,
      profitPerDay: netProfit / days,
      profitPerHour: netProfit / hours,
      expensePercent,
      nextDailyGoal,
      alert,
    });
  }

  function clearData() {
    setFields(initialFields);
    setResult(null);
    setError("");
  }

  return (
    <section id="calculadora" className="bg-[#f7f9f4] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-[#149447]">
            Calculadora funcional
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[#151515] sm:text-5xl">
            Coloque seus numeros e veja quanto realmente sobrou.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#596354]">
            Informe o que entrou, o que saiu e a sua rotina de trabalho. A conta
            aparece em cards simples, sem planilha complicada.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={calculate}
            className="rounded-[8px] border border-[#dde5d8] bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] sm:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {fieldGroups.map(([key, label, suffix]) => (
                <label
                  key={key}
                  className="grid gap-2 text-sm font-bold text-[#20251f]"
                >
                  {label}
                  <span className="relative">
                    <input
                      value={fields[key]}
                      onChange={(event) => updateField(key, event.target.value)}
                      inputMode="decimal"
                      type="number"
                      step="0.01"
                      min="0"
                      className="h-13 w-full rounded-[8px] border border-[#ccd8c6] bg-[#fbfcfa] px-4 pr-14 text-base outline-none transition focus:border-[#149447] focus:ring-4 focus:ring-[#149447]/12"
                      placeholder="0"
                    />
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-black uppercase text-[#74806e]">
                      {suffix}
                    </span>
                  </span>
                </label>
              ))}
            </div>

            {error ? (
              <p className="mt-5 rounded-[8px] bg-[#ffe3e3] p-3 text-sm font-bold text-[#9b1c1c]">
                {error}
              </p>
            ) : null}

            <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
              <button
                type="submit"
                className="flex min-h-14 items-center justify-center gap-3 rounded-[8px] bg-[#149447] px-5 py-4 text-base font-black text-white shadow-[0_16px_36px_rgba(20,148,71,0.22)] transition hover:bg-[#0f7d3a]"
              >
                Calcular meu lucro
                <Calculator className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={clearData}
                className="flex min-h-14 items-center justify-center gap-3 rounded-[8px] border border-[#ccd8c6] bg-white px-5 py-4 text-base font-black text-[#151515] transition hover:border-[#149447]"
              >
                Limpar dados
                <RotateCcw className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </form>

          <aside className="rounded-[8px] border border-[#dde5d8] bg-[#111] p-5 text-white shadow-[0_18px_60px_rgba(15,23,42,0.12)] sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-[8px] bg-[#ffd43b] text-[#151515]">
                <TrendingUp className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-black">Resultado do mes</h3>
                <p className="text-sm font-semibold text-white/62">
                  Lucro nao e o mesmo que faturamento.
                </p>
              </div>
            </div>

            {result ? (
              <>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["Lucro liquido", currency(result.netProfit)],
                    ["Custo total", currency(result.totalCost)],
                    ["Custo por km", currency(result.costPerKm)],
                    ["Lucro por km", currency(result.profitPerKm)],
                    ["Lucro por dia", currency(result.profitPerDay)],
                    ["Lucro por hora", currency(result.profitPerHour)],
                    [
                      "Despesas do faturamento",
                      `${decimal(result.expensePercent)}%`,
                    ],
                    ["Meta diaria sugerida", currency(result.nextDailyGoal)],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-[8px] border border-white/10 bg-white/8 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.08em] text-[#ffd43b]">
                        {label}
                      </p>
                      <p className="mt-2 text-2xl font-black">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-3 rounded-[8px] bg-[#ffd43b] p-4 text-[#151515]">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
                  <p className="text-sm font-black leading-6">{result.alert}</p>
                </div>
              </>
            ) : (
              <div className="rounded-[8px] border border-white/10 bg-white/8 p-5">
                <p className="text-lg font-black text-[#ffd43b]">
                  Seus cards aparecem aqui.
                </p>
                <p className="mt-2 leading-7 text-white/70">
                  A calculadora mostra custo total, lucro liquido, custo por km,
                  lucro por hora e uma meta diaria para o proximo mes.
                </p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
