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

| Estágio | Cadência | Janela | Política |
|---|---|---|---|
| Alpha 3 | 3 semanas | 11 ago 2026 – 01 set 2026 | Fechamento do instalador e da publicação. |
| Alpha 4 | 3 semanas | 01 set 2026 – 22 set 2026 | Infraestrutura de internacionalização; Lyra Installer, Vega, Fina e Sheliak em pt-BR e en-US; instalação opcional pós-instalação do driver NVIDIA pelo Vega. A ISO padrão continua sem driver proprietário. |
| Alpha 5 | 3 semanas | 22 set 2026 – 13 out 2026 | Internacionalização de Beam, Chord, Sulafat, Aladfar, Prosa, Calco, postgres-draco, vega-cli, vega-web e vegad; integração dos RPMs; QA nos dois idiomas; fechamento total de features. |
| Beta 1 | 4 semanas | 13 out 2026 – 10 nov 2026 | **Feature freeze:** nenhuma feature, idioma, componente ou infraestrutura nova. Somente correções de bugs, regressões, segurança, desempenho e traduções existentes. |
| Beta 2 | 4 semanas | 10 nov 2026 – 08 dez 2026 | Estabilidade, atualizações e regressões. Nenhuma feature nova. |
| Beta 3 | 4 semanas | 08 dez 2026 – 05 jan 2027 | QA linguístico e correções finais. Corrigir catálogos e traduções existentes; não criar infraestrutura, traduzir novo componente nem adicionar idioma. |
| RC 1 | 2 semanas | 05 jan 2027 – 19 jan 2027 | Somente bloqueadores P0/P1 e repetição do gate. |
| RC 2 | 2 semanas | 19 jan 2027 – 02 fev 2027 | Somente bloqueadores P0/P1 e repetição do gate. |
| **Final — Lyra OS 1.0** | buffer 2 semanas | **~16 fev 2027** | Publicação condicionada ao gate de qualidade. |

Idiomas obrigatórios até a Alpha 5: **pt-BR e en-US**. Todas as features e a
infraestrutura de i18n fecham em 13/10/2026; Betas e RCs servem apenas para
correções. Alpha 4 e Alpha 5 são obrigatórias para concluir features e
internacionalização. A Beta 1 inicia o congelamento funcional em 13 de outubro
de 2026. Fevereiro é a margem máxima de segurança; a promoção continua
condicionada ao gate de qualidade.

## Política do Lyra OS Server 1.0

O Server mantém ciclo e gate independentes. Seu inventário de pacotes não é
derivado automaticamente do Desktop. Na Beta 3, o objetivo é: **QA linguístico
dos componentes já internacionalizados e correções finais; nenhuma feature
nova.**

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
