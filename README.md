# Lyra OS — Site

Site institucional/marketing do Lyra OS, construído com [Astro](https://astro.build).

## Rodando localmente

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # gera dist/
npm run preview   # serve o build de produção
```

## Pendências antes do lançamento (TODO)

Este site foi implementado a partir de `PROMPT-LYRA-SITE.md`, mas alguns
documentos/assets de origem citados na especificação não estavam
disponíveis no momento do build. Procure por `TODO(branding-sync)`,
`TODO(release-sync)` e `TODO(link-real)` no código para a lista completa.
Os principais pontos:

- **`src/styles/tokens.css`** — o degradê `--lyra-sapphire` / `--lyra-violet`
  é um placeholder. Sincronizar com `branding/palette.json` real.
- **Imagens** — todas as artes do Lyro, screenshots e do Fino usam o
  componente `PlaceholderArt.astro` como placeholder visual. Substituir
  pelos arquivos reais de `branding/mascot/` e `branding/screenshots/`.
- **`src/pages/download.astro`** — nome/versão da ISO, tamanho do arquivo e
  comandos de verificação SHA-256/GPG são placeholders. Substituir pelo
  texto exato de `PROMPT-LYRA-RELEASE-SHELIAK.md §2.2`.
- **`src/pages/comunidade.astro`** e o link do AUR em `src/pages/vega.astro**
  — URLs reais (GitHub Discussions, Telegram, pacote AUR do Vega, canal de
  report de problema) ainda não foram confirmadas.
- **`astro.config.mjs`** — domínio (`site`) definido como `lyraos.org`,
  a confirmar.

## Estrutura

Segue a estrutura definida na especificação (`PROMPT-LYRA-SITE.md` §6):
componentes reutilizáveis em `src/components/`, páginas em `src/pages/`,
tokens de marca em `src/styles/tokens.css`.
