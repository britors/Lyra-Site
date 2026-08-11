# Cronograma de releases do Lyra OS — prompt para atualização do site

Use este documento como prompt/fonte para atualização da página de roadmap do
site do Lyra OS.

## Contexto

O Lyra OS está reorganizando seu esquema de versionamento. A build atual, que
era rotulada `Beta 2`, foi rebaixada para `Alpha 2` — reconhecendo que ainda
havia correções de funcionalidade core do instalador em andamento (partição
de disco, sudo, permissões pkexec), não apenas estabilização. A tag pública
já publicada `v2026.08-beta2-stable-20260809` permanece como registro
histórico; o próximo ciclo de beta recomeça em `beta1`.

O número de iterações por estágio abaixo é um teto, não uma promessa fixa: a
promoção de estágio é liberada por critério de saída (nenhum item crítico
aberto no gate de release do estágio), não apenas pela data. Se um estágio
fechar mais cedo, a próxima fase começa mais cedo — as datas assumem o
cenário em que todo o teto é usado.

## Cronograma — Lyra OS 1.0 (base openSUSE Leap 16.0)

| Estágio | Cadência | Janela |
|---|---|---|
| Alpha 3 | 3 semanas | 11 ago 2026 – 01 set 2026 |
| Alpha 4 | 3 semanas | 01 set 2026 – 22 set 2026 |
| Alpha 5 | 3 semanas | 22 set 2026 – 13 out 2026 |
| Beta 1 | 4 semanas | 13 out 2026 – 10 nov 2026 |
| Beta 2 | 4 semanas | 10 nov 2026 – 08 dez 2026 |
| Beta 3 | 4 semanas | 08 dez 2026 – 05 jan 2027 |
| RC 1 | 2 semanas | 05 jan 2027 – 19 jan 2027 |
| RC 2 | 2 semanas | 19 jan 2027 – 02 fev 2027 |
| **Final — Lyra OS 1.0** | buffer 2 semanas | **~16 fev 2027** (alvo interno: janeiro; fevereiro é folga, não prazo prometido) |

Se a fase alpha fechar antecipadamente em Alpha 4 (sem pendência crítica), a
final sai em torno de **~26 jan 2027**.

## Cronograma — Lyra OS 1.1 (rebase para openSUSE Leap 16.1)

Início em março de 2027, cerca de 1 mês após a final do 1.0. A base muda de
Leap 16.0 para Leap 16.1 (GA em 3 nov 2026), exigindo revalidação de
disponibilidade de pacotes, ABI, shim de Secure Boot e matriz de hardware —
não é um bump cosmético. O funil é mais enxuto que o do 1.0 porque o tooling
de release e o processo de gate já existem; só a base precisa de
requalificação.

| Estágio | Cadência | Janela |
|---|---|---|
| Alpha 1 | 3 semanas | 01 mar 2027 – 22 mar 2027 |
| Alpha 2 | 3 semanas | 22 mar 2027 – 12 abr 2027 |
| Alpha 3 | 3 semanas | 12 abr 2027 – 03 mai 2027 |
| Beta 1 | 4 semanas | 03 mai 2027 – 31 mai 2027 |
| Beta 2 | 4 semanas | 31 mai 2027 – 28 jun 2027 |
| RC 1 | 2 semanas | 28 jun 2027 – 12 jul 2027 |
| RC 2 | 2 semanas | 12 jul 2027 – 26 jul 2027 |
| **Final — Lyra OS 1.1** | buffer 2 semanas | **~09 ago 2027** |

## Observação de nomenclatura

"1.0" e "1.1" são nomes de produto para os ciclos de release, complementares
à versão de calendário (`AAAA.MM`) usada internamente pelo `release.toml`.
Não existe hoje um campo formal de versão semântica major.minor no schema de
release — isso ainda é uma decisão em aberto, caso o site precise expor esse
número de forma estruturada (ex.: JSON de roadmap consumido pela página).
