import { BookOpen, Calculator, CarFront, Gauge, WalletCards } from "lucide-react";
import { mainOffer } from "@/lib/offers";

const coverFeatures = [
  { icon: WalletCards, label: "Lucro real" },
  { icon: Gauge, label: "Custo por km" },
  { icon: Calculator, label: "Meta diaria" },
  { icon: BookOpen, label: "Metodo simples" },
];

export function EbookMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] pt-6">
      <div className="absolute left-10 top-0 h-24 w-24 rounded-full bg-[#ffd43b]/30 blur-2xl" />
      <div className="absolute bottom-8 right-2 h-28 w-28 rounded-full bg-[#159947]/20 blur-2xl" />
      <div className="relative aspect-[3/4] rounded-[8px] bg-[#101010] p-5 shadow-[18px_24px_0_#2d2d2d,0_24px_70px_rgba(0,0,0,0.32)]">
        <div className="flex h-full flex-col justify-between rounded-[6px] border border-white/10 bg-[linear-gradient(150deg,#171717_0%,#222_45%,#0e3b22_100%)] p-5 text-white">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-[8px] bg-[#ffd43b] px-3 py-2 text-xs font-black uppercase tracking-[0.08em] text-[#151515]">
              <CarFront className="h-4 w-4" aria-hidden="true" />
              Ebook digital
            </div>
            <p className="text-sm font-semibold text-[#ffd43b]">Guia pratico</p>
            <h3 className="mt-2 text-4xl font-black leading-[0.92]">
              Motorista no Azul
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/78">
              Controle gastos, descubra o lucro real e dirija com numero na
              mao.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm font-bold">
            {coverFeatures.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-[8px] border border-white/10 bg-white/8 p-3"
              >
                <Icon className="mb-2 h-5 w-5 text-[#ffd43b]" aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-9 text-center text-sm font-semibold text-[#4e574c]">
        {mainOffer.fullName}
      </p>
    </div>
  );
}
