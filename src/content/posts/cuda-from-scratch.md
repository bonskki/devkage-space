---
title: "CUDA from scratch — what they don't tell you"
date: 2026-06-10
excerpt: "The mental model shift from CPU-first to GPU-parallel. Thread blocks, warps, and why memory layout matters more than you think."
tags: ["cuda", "hpc", "cpp"]
---

Every CUDA tutorial starts the same way: "GPUs have thousands of cores." Cool. That sentence taught me nothing useful for the first three weeks.

## The thing that finally clicked

A GPU is not a CPU with more lanes. It's a **throughput machine** that hides memory latency by swapping between warps. If you don't feed it coalesced reads, you're using a Ferrari to deliver pizza on a footpath.

## A minimal first kernel

```cpp
__global__ void add(int n, float* x, float* y) {
    int i = blockIdx.x * blockDim.x + threadIdx.x;
    if (i < n) y[i] = x[i] + y[i];
}
```

That `if (i < n)` saved me from segfaults more times than I want to admit when `n` wasn't a perfect multiple of the block size.

## What I'd tell past me

- Profile first, optimise second. `nsight-compute` is not optional.
- Coalesced access > clever algorithms.
- Shared memory is your friend, until bank conflicts make it your enemy.
