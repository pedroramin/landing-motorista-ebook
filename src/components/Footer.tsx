export function Footer() {
  return (
    <footer className="border-t border-[#dde5d8] bg-white px-5 py-8 text-sm text-[#5e675c]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-black text-[#151515]">Motorista no Azul</p>
          <p className="mt-1">Produto digital educativo para motoristas de app.</p>
        </div>
        <p className="max-w-3xl leading-6">
          Este material tem carater educativo e nao garante aumento de ganhos.
          Os resultados dependem da rotina, cidade, custos, veiculo, estrategia
          e disciplina de cada motorista.
        </p>
      </div>
    </footer>
  );
}
