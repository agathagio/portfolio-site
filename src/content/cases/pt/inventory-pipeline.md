---
slug: inventory-pipeline
lang: pt
order: 2
domain: DATA
title: Pipeline de decisão de estoque
summary: Como sete módulos Python transformam o export semanal do ERP legado em decisões priorizadas de reposição, transferência e saldão.
stack:
  - Python (pandas, openpyxl)
  - pytest
  - Claude Code
  - configuração em markdown + yaml
  - Obsidian como workspace
related:
  - ai-operation
  - content-system
---

## Contexto

A Da Capo opera estoque em dois canais: a loja física no Rio de Janeiro e o e-commerce que lancei em dez/2025. A fonte de verdade é o ERP legado da loja física, que exporta um snapshot semanal de todas as filiais: um CSV em latin-1, separador ";", em layout largo, com uma coluna por tamanho. Toda decisão de estoque da semana (o que repor, o que mover entre canais, o que liquidar) parte desse arquivo.

## O problema

Ler esse CSV na mão significava cruzar estoque por filial, tamanho e coleção em centenas de produtos. A análise completa ocupava uma tarde inteira, então nem sempre acontecia, e pular a semana tinha custo concreto: tamanho zerado na loja enquanto o e-commerce segurava unidades paradas, grade furada sem reposição pedida, peça antiga ocupando espaço sem plano de saída. A operação não precisava de uma planilha melhor, precisava chegar na segunda-feira com as decisões prontas.

## O que construí

Um pipeline em Python, construído com Claude Code, que roda como ritual semanal: entra o CSV do ERP, saem uma planilha xlsx de 5 abas e um briefing em markdown com os candidatos priorizados nas três alavancas do estoque (reposição, transferência do e-commerce para a loja, gestão de saldão). São sete módulos, cada um com uma única responsabilidade, cobertos por uma suíte pytest com fixtures sintéticas que protege as regras de negócio a cada ajuste.

## Como funciona

O fluxo é linear e cada módulo faz uma coisa:

- **config** lê os parâmetros (coleção vigente, limites de reposição por tipo de produto, janelas de saldão, tamanho do briefing) de um bloco yaml dentro de um arquivo markdown. O mesmo arquivo serve de documentação para humanos e de configuração para o pipeline.
- **loader** faz o parsing e a normalização do CSV: encoding latin-1, separador ";", e a expansão do layout largo, em que cada grade mapeia colunas posicionais para tamanhos reais (vestuário, calçado, tamanho único).
- **categorize** classifica cada linha por filial (loja, e-commerce, demais) e por situação de coleção: vigente, permanente ou antiga.
- **metrics** agrega por produto e cor e calcula os sinais de decisão: ritmo de venda (dias desde a última saída), cobertura de grade (quantos tamanhos restam e onde a grade furou), e a mesma visão no nível SKU e tamanho, que alimenta a transferência.
- **alavancas** aplica as três regras de negócio. A mais simples ilustra o espírito: a transferência binária diz que, quando a loja física zera um tamanho que o e-commerce tem em 2 ou mais unidades, move 1 unidade, mantendo sempre pelo menos 1 online. Reposição e saldão seguem a mesma lógica de critérios explícitos, configuráveis e testados: o saldão, por exemplo, separa as peças antigas em descontinuar, atenção e saudável por janelas de dias sem venda (mais de 60 dias sem vender manda a peça para descontinuar).
- **outputs** gera a planilha de 5 abas (sumário, reposição, transferência, saldão, alertas) e o briefing markdown com o top N de cada alavanca.

Um orquestrador amarra tudo de ponta a ponta.

## Resultados

A análise que ocupava uma tarde inteira agora leva minutos, então acontece toda semana de fato. Tão importante quanto o tempo: o output são decisões priorizadas, não uma planilha crua. O briefing abre com os números principais e o top N de cada alavanca; a planilha de 5 abas fica disponível para quando eu quiser cavar. E como as regras vivem em código testado, as decisões saem consistentes de uma semana para a outra, em vez de depender de quem teve tempo de olhar.

## Código

Uma versão sanitizada e generalizada deste pipeline, com marca fictícia e dados totalmente sintéticos, está publicada como repositório open-source: [github.com/agathagio/estoque-pipeline](https://github.com/agathagio/estoque-pipeline).
