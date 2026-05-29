---
title: "MPI basics — distributing work across nodes"
date: 2026-08-18
excerpt: "My notes from the first MPI assignment on Viking HPC. Scatter, gather, reduce — explained simply with real code."
tags: ["hpc", "cpp", "york"]
---

MPI is older than I am, and somehow still the standard for cluster compute. There's a reason.

## The mental model

Every MPI program runs **N copies of itself**, one per rank. Each rank knows its own ID (`MPI_Comm_rank`) and the total count (`MPI_Comm_size`). The whole game is deciding who does what.

## The four operations you'll actually use

- `MPI_Scatter` — root splits an array and hands a slice to each rank.
- `MPI_Gather` — the reverse; everyone sends back to root.
- `MPI_Reduce` — combine values (sum, max, etc.) from all ranks into one.
- `MPI_Bcast` — root sends the same value to everyone.

## What bit me first

Buffer mismatches. Sender says `MPI_INT`, receiver says `MPI_FLOAT`, and MPI happily delivers garbage. The runtime won't save you.
