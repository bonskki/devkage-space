---
title: "How LLM inference actually works under the hood"
date: 2026-07-04
excerpt: "KV cache, batching, quantization — what happens between you pressing Enter and the token appearing. A free deep dive."
tags: ["ai", "hpc"]
---

You press Enter. A token appears. Magic? No — it's a very efficient memory dance.

## The three stages

1. **Prefill** — your entire prompt is processed in one parallel pass. This is compute-bound.
2. **Decode** — one token at a time, autoregressively. This is *memory-bound*.
3. **KV cache** — the key/value tensors from previous tokens are stored so we don't recompute them.

## Why decode is the hard part

Generating the 1000th token re-reads the entire model weights from VRAM for **one** matmul. That's why batching matters: spread the cost of weight loads across many concurrent requests.

## Quantization, in one paragraph

INT8 / INT4 quantization shrinks the weights. Smaller weights = less memory bandwidth = faster decode. The trade-off is accuracy, which good quantization schemes (AWQ, GPTQ) reclaim almost entirely.
