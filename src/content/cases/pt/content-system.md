---
slug: content-system
lang: pt
order: 3
domain: CONTENT
title: 'Um sistema operacional de conteúdo: um brief, todos os formatos'
summary: Como pesquisa, produção persona-first e revisão automatizada transformam um único brief em carrossel, legenda, blog post e roteiro de reel, sem perder a voz da marca.
stack:
  - Claude Code (skills customizadas)
  - briefs e personas em markdown
  - Obsidian como workspace
  - Nuvemshop (blog)
  - Instagram
related:
  - ai-operation
  - inventory-pipeline
---

## Contexto

A Da Capo é um varejo de moda feminina com loja física no Rio de Janeiro e o e-commerce que lancei em dez/2025. Conteúdo é parte central da operação digital: Instagram, blog na Nuvemshop e email pedem produção constante. O time é enxuto e não tem redator dedicado; a produção de conteúdo é minha, ampliada pelas automações que construí com Claude Code.

## O problema

Produzir conteúdo canal a canal não escala. Cada post começava do zero: pesquisar o mesmo tema de novo, reescrever o mesmo argumento em outro formato, torcer para a voz sair consistente. E texto de IA sem estrutura falha de dois jeitos: soa genérico (qualquer marca poderia assinar) ou inventa (afirma coisas sobre a peça que não são verdade). Eu precisava de volume com consistência de marca, e de um controle de qualidade que não dependesse de eu reler tudo na mão.

## O que construí

Um sistema de conteúdo em três camadas, implementado como skills de Claude Code e organizado pelo princípio COPE: create once, publish everywhere.

- **Pesquisa:** uma skill pesquisa o tema e sintetiza tudo em um brief reutilizável: tese, três a cinco ângulos, a objeção mais comum com o reframe, fatos confirmados e sementes de SEO.
- **Produção:** uma skill por formato (carrossel, legenda, blog post, roteiro de reel), cada uma partindo do brief e escrevendo "como" uma persona consultora definida em arquivo próprio.
- **Revisão:** uma camada de qualidade separada da produção, com revisão de marca e revisão linguística.

## Como funciona

O fluxo acompanha um tema da pesquisa à publicação:

- **Brief.** A skill de pesquisa lê o material disponível (referências externas, dados de produto, posicionamento) e escreve o brief. Eu reviso e aprovo a tese antes de seguir. Aprovado, o mesmo brief alimenta todos os formatos, sem nova pesquisa por formato.
- **Persona.** Cada skill de produção escreve como uma persona consultora em vez de seguir um checklist de regras de voz. A persona destila o guia de voz da marca: o guia completo documenta todas as vozes que a marca usa; a persona carrega só a que fala no conteúdo educativo. O resultado é um texto com ponto de vista consistente.
- **Fatos.** As skills de produção só afirmam o que está no arquivo do produto ou visível na foto. Esses arquivos (nome comercial, descrição, campos de SEO, alt text) são gerados pelo mesmo sistema, pela skill de descrições, e servem de fonte de fatos para as skills de produção.
- **Revisão.** Duas skills separadas da produção: a revisão de marca valida o texto contra o posicionamento, os termos proibidos e os padrões estruturais vedados (aponta o desvio, não reescreve); a revisão linguística caça anglicismos, calques e construções traduzidas do inglês. Quem escreve não avalia o próprio texto.
- **Evals.** Antes de uma skill virar oficial, um workspace de iteração roda os mesmos pedidos com e sem a skill e dá nota aos outputs por critérios explícitos: nada inventado, português natural, contagem de palavras no intervalo, qualidade da abertura. A skill só é promovida quando o ganho aparece na comparação.

## Resultados

Uma sessão de pesquisa vira quatro formatos: carrossel, legenda, blog post e roteiro de reel saem do mesmo brief, cada um no seu canal e todos sustentando o mesmo argumento. A voz sai consistente entre canais sem reescrita manual.

A campanha de inverno atual roda inteira nesse sistema: onze temas no total, sete já em produção, cada um com brief próprio, referências e formatos derivados.

E o workspace de evals significa que eu sei o que cada skill melhora antes de confiar nela: o hábito de engenharia de testar antes de promover, aplicado a conteúdo de marketing.

Uma versão generalizada deste framework, sem a marca, sai em breve como projeto open-source.
