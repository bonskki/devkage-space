---
title: "C# to C++ — the transition nobody warns you about"
date: 2026-07-22
excerpt: "Coming from .NET, manual memory management and pointer arithmetic felt like a different universe. Here's what clicked for me."
tags: ["cpp", "cs"]
---

In C#, you `new` something and forget about it. In C++, `new` is the start of a contract you must honour.

## The three things I had to unlearn

- **`var` is not `auto`.** Sometimes it is. Other times it costs you a copy you didn't expect.
- **There is no garbage collector.** Smart pointers (`unique_ptr`, `shared_ptr`) are the replacement, and they're better once you trust them.
- **Headers and translation units.** The compilation model is its own thing — learn the include graph or get burned by build times.

## What surprised me (in a good way)

RAII. Once you internalise that a destructor runs at scope exit, exception safety stops being scary. C# `using` is just RAII with extra steps.
