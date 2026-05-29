---
title: "How I'm approaching my HPC dissertation"
date: 2026-11-02
excerpt: "Finding a small, real gap in existing CUDA research on arXiv and improving it. My strategy for an MSc dissertation that actually contributes something."
tags: ["hpc", "cuda", "york"]
---

The temptation in an MSc dissertation is to pick something huge and fail beautifully. I'm going the other way.

## My method, in three steps

1. **Pick a recent arXiv paper in a narrow CUDA niche** (sparse matmul, fused attention variants — whatever).
2. **Reproduce their numbers.** If you can't, you've already found a contribution: report what doesn't replicate.
3. **Find one knob.** Block size, memory tiling, mixed precision — change one thing, measure rigorously.

## What I'm avoiding

- "Survey of GPU optimisation techniques." Nobody reads these.
- "A new framework for..." No. Not in 12 months.
- Anything that requires hardware I don't have.

## The honest goal

A small, defensible delta. A reproducible repo. A 30-page document my supervisor signs off without rewrites.

If it later becomes an arXiv preprint, great. If not, I shipped.
