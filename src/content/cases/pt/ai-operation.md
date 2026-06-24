---
slug: ai-operation
lang: pt
order: 1
domain: OPS
title: Operação de e-commerce ampliada por IA
summary: Como lancei e opero um e-commerce de moda com equipe enxuta e 16+ automações construídas com Claude Code.
stack:
  - Claude Code (skills customizadas)
  - Python (pandas, openpyxl)
  - Nuvemshop
  - Bling
  - GA4
  - Obsidian como workspace
related:
  - inventory-pipeline
  - content-system
---

## Contexto

A Da Capo é um varejo de moda feminina com loja física no Rio de Janeiro. Entrei como Head de E-commerce e Marketing (PJ, jun/2025) com a missão de lançar e operar o canal digital do zero. O e-commerce foi ao ar em dez/2025 na Nuvemshop, integrado ao ERP Bling, com o ERP legado da loja física como fonte de dados de estoque e vendas.

## O problema

Operar um canal digital completo significa cuidar de cadastro de produtos, estoque, produção de conteúdo, mídia paga e CRM, tudo ao mesmo tempo. O time é enxuto: uma agência de tráfego, uma designer, a expedição e as vendedoras da loja. Sem desenvolvedor na equipe. O gargalo era claro: trabalho operacional repetitivo que consome horas toda semana e não escala contratando mais gente.

## O que construí

Construí 16+ automações com Claude Code, organizadas em três frentes. Cada uma nasceu de uma dor real da operação e foi refinada no uso semanal.

- **Dados e estoque:** rotina semanal de estoque (sete módulos Python com testes) que transforma o export cru do ERP em decisões priorizadas; ETL do ERP legado para o Bling com deduplicação por SKU; forecast de demanda de 60 dias por SKU; além de utilitários menores para extração de romaneios em PDF, remanejamento entre filiais e limpeza de exports.
- **Conteúdo:** pipeline COPE em que a pesquisa vira um brief, e o brief vira carrossel, legenda, blog post e roteiro de reel; descrições de produto com SEO e alt text; revisão de marca automatizada; revisão linguística; uma skill de consultoria de branding; workspace de evals para testar as skills antes de promover ao uso oficial.
- **Imagem:** redimensionamento de fotos em lote com detecção automática do tipo de foto (produto isolado vs. lifestyle) e crop 2:3.

## Resultados

Os pedidos cresceram ~5× em 4 meses, de 45 para ~217 por mês, com a mesma equipe enxuta do dia do lançamento. Somadas, as automações devolvem horas por semana à operação. O exemplo mais nítido é a rotina de estoque: uma análise manual que ocupava uma tarde inteira virou um ritual de minutos, com as decisões já priorizadas.
