# Motorista no Azul

Landing page, upsell e calculadora funcional para vender um ebook voltado a motoristas de aplicativo no Brasil.

## Rotas

- `/` - Landing page principal do ebook.
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

## Checkout

Os botoes de compra usam a variavel `NEXT_PUBLIC_CHECKOUT_URL`.

Crie um arquivo `.env.local` com o link da sua gateway:

```bash
NEXT_PUBLIC_CHECKOUT_URL=https://seu-link-de-pagamento.com
```

Na Vercel, adicione a mesma variavel em Project Settings > Environment Variables e faca um novo deploy.
