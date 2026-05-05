# Motorista no Azul

Landing page, checkout simulado, order bump, upsell e calculadora funcional para vender um ebook voltado a motoristas de aplicativo no Brasil.

## Rotas

- `/` - Landing page principal do ebook.
- `/checkout` - Checkout simulado com order bump.
- `/upsell` - Oferta pos-compra da Calculadora Mensal do Motorista.

## Desenvolvimento

```bash
npm.cmd run dev
```

Abra `http://localhost:3000`.

## Validacao

```bash
npm.cmd run lint
npm.cmd run build
```

## Observacao

O checkout e demonstrativo. A estrutura de formulario e payload ja esta pronta para futura integracao com gateway de pagamento, backend e entrega automatica do acesso.
