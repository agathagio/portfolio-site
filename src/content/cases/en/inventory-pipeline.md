---
slug: inventory-pipeline
lang: en
order: 2
domain: DATA
title: An inventory decision pipeline for omnichannel retail
summary: How seven Python modules turn a weekly legacy-ERP export into prioritized restock, transfer, and clearance decisions.
stack:
  - Python (pandas, openpyxl)
  - pytest
  - Claude Code
  - markdown + yaml configuration
  - Obsidian as the workspace
related:
  - ai-operation
  - content-system
---

## Context

Da Capo runs inventory across two channels: a physical store in Rio de Janeiro and the e-commerce operation I launched in December 2025. The system of record is the physical store's legacy ERP, which exports a weekly cross-location snapshot: a latin-1 encoded CSV, semicolon-separated, in a wide layout with one column per size. Every inventory decision of the week (what to restock, what to move between channels, what to mark down) starts from that file.

## The problem

Reading that CSV by hand meant cross-referencing stock by location, size, and collection across hundreds of products. A full pass took an entire afternoon, so some weeks it simply didn't happen, and skipping it had a real cost: a size sold out in the store while the online store sat on idle units, broken size runs with no restock ordered, aging pieces taking up space with no exit plan. The operation didn't need a better spreadsheet; it needed to start the week with the decisions already made.

## What I built

A Python pipeline, built with Claude Code, that runs as a weekly ritual: the ERP CSV goes in; a 5-tab xlsx workbook and a markdown briefing come out, with prioritized candidates across the three inventory levers (restock, e-commerce-to-store transfers, clearance management). Seven modules, each with a single responsibility, covered by a pytest suite with synthetic fixtures that guards the business rules through every change.

## How it works

The flow is linear and each module does one thing:

- **config** reads the parameters (current collection, restock thresholds per product type, clearance windows, briefing size) from a yaml block inside a markdown file. The same file works as documentation for humans and as configuration for the pipeline.
- **loader** parses and normalizes the CSV: latin-1 encoding, semicolon separator, and the wide-layout expansion where each size grid maps positional columns to actual sizes (apparel, footwear, one-size).
- **categorize** classifies every row by location (store, e-commerce, other) and by collection status: current, permanent, or past-season.
- **metrics** aggregates by product and color and computes the decision signals: sales pace (days since the last sale), size-grid coverage (how many sizes remain and where the run is broken), plus the same view at SKU-and-size level, which feeds the transfer lever.
- **levers** (named `alavancas` in the code) applies the three business rules. The simplest one, the binary transfer rule, captures the approach: when the store sells out of a size the online store holds 2 or more units of, move 1 unit over, always keeping at least 1 online. Restock and clearance follow the same pattern: explicit, configurable, tested criteria. Clearance, for instance, sorts past-season pieces into discontinue, watch, and healthy based on days-without-sale windows (more than 60 days without a sale sends a piece to discontinue).
- **outputs** writes the 5-tab workbook (summary, restock, transfers, clearance, alerts) and the markdown briefing with the top N for each lever.

An orchestrator ties it all together end to end.

## Results

The analysis that used to take a full afternoon now takes minutes, so it actually happens every week. Just as important as the time: the output is a set of prioritized decisions, not a raw spreadsheet. The briefing opens with the headline numbers and the top N per lever; the 5-tab workbook is there for when I want to dig. And because the rules live in tested code, the decisions come out consistent from one week to the next, instead of depending on who had time to look.

## Code

A sanitized, generalized version of this pipeline, with a fictional brand and fully synthetic data, is published as an open-source repository: [github.com/agathagio/estoque-pipeline](https://github.com/agathagio/estoque-pipeline).
