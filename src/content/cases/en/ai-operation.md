---
slug: ai-operation
lang: en
order: 1
domain: OPS
title: An AI-amplified e-commerce operation
summary: How I launched and run a fashion e-commerce with a lean team and 16+ automations built with Claude Code.
stack:
  - Claude Code (custom skills)
  - Python (pandas, openpyxl)
  - Nuvemshop
  - Bling
  - GA4
  - Obsidian as the workspace
related:
  - inventory-pipeline
  - content-system
---

## Context

Da Capo is a women's fashion retailer with a brick-and-mortar store in Rio de Janeiro. I joined as Head of E-commerce and Marketing (contractor, June 2025) to launch and run the digital channel from scratch. The online store went live in December 2025 on Nuvemshop, integrated with the Bling ERP, with the physical store's legacy ERP as the source of inventory and sales data.

## The problem

Running a full digital channel means handling catalog setup, inventory, content production, paid media and CRM, all at once. The team is lean: a paid-media agency, a designer, one person handling fulfillment, and the store's salespeople. No developer on staff. The bottleneck was clear: repetitive operational work that eats hours every week and doesn't scale by adding headcount.

## What I built

I built 16+ automations with Claude Code, grouped into three fronts. Each one started from a real operational pain point and was hardened in weekly use.

- **Data and inventory:** a weekly inventory routine (seven Python modules with tests) that turns the raw ERP export into prioritized decisions; an ETL from the legacy ERP into Bling with SKU-level deduplication; 60-day demand forecasting per SKU; plus smaller utilities for packing-list extraction, inter-store transfers, and export cleanup.
- **Content:** a COPE pipeline where research becomes a brief, and the brief becomes a carousel, a caption, a blog post and a reel script; product descriptions with SEO and alt text; automated brand review; language review; a branding-consultant skill; an evals workspace to test skills before promoting them to production.
- **Images:** batch photo resizing with automatic detection of photo type (isolated product vs. lifestyle) and 2:3 cropping.

## Results

Orders grew ~5× in 4 months, from 45 to ~217 per month, with the same lean team we had on launch day. Combined, the automations give hours back to the operation every week. The clearest example is the inventory routine: a manual analysis that used to take a full afternoon became a few minutes' work, with the decisions already prioritized.
