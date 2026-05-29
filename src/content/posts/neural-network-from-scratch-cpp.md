---
title: "Neural network from scratch in C++"
date: 2026-09-12
excerpt: "Implementing forward pass and backprop without any framework. Slow but you learn more than any course will teach you."
tags: ["ai", "cpp"]
---

I spent a weekend building a 2-layer MLP without Torch, without Eigen — just `std::vector<float>` and a will to suffer.

## What you learn that PyTorch hides

- **Why row-major vs column-major matters.** Get it wrong and your matmul is 4x slower than it should be.
- **Numerical stability is not free.** Softmax overflows without the `- max(x)` trick. Cross-entropy underflows without log-sum-exp.
- **Initialisation matters more than the optimiser.** Xavier vs. He vs. uniform — pick wrong and the network never learns.

## The result

71% on MNIST in 12 epochs. Embarrassing by 2026 standards. The point wasn't the score.

The point was: I'll never again type `loss.backward()` without knowing what those two words actually do.
