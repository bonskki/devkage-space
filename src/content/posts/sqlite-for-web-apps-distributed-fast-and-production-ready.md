---
title: "SQLite for Web Apps: Distributed, Fast, and Production-Ready?"
date: 2025-04-05
excerpt: "Can SMEs run a secure, maintainable web app for under $10/month? Rediscovering SQLite for production with Litestream, LiteFS, Docker, and Traefik."
tags: ["sqlite", "swe"]
---

Lately, I've been intrigued by a simple but important question: **How can we make databases less painful and more affordable for small-scale web applications?** Surprisingly, the answer might just be **SQLite**.

This question arose while I was thinking about the digitalization journey of startups, small and medium enterprises (SMEs) in Indonesia. Many SMEs want to build apps to make their business operations smoother, but they often face three main challenges: **cost**, **security**, and **maintainability**.

In most cases, these businesses don't have a dedicated software team to manage their applications. That means they need a solution that's simple, low-maintenance, secure, and most importantly, affordable. This led me to a deeper exploration: **Can SMEs in Indonesia run a secure, maintainable, and useful web application for under $10 per month?**

## The Stack: Lightweight and Cost-Effective

Popular web frameworks like **Django**, **ASP.NET**, or **Laravel** are excellent choices to get started. But one of the most critical components is the **database**, especially when you consider security and backups. Running a separate server just for the database adds complexity and cost, both of which are hard to justify for SMEs with limited resources.

So the next logical question was: **Can we host the entire application, including the database, on a single server, while keeping it secure, easy to update, and maintain?**

## The New Wave: Serverless SQLite + Modern Infrastructure

In today's cloud-native world, we have more options than ever. Tools like **Docker**, and newer serverless database providers such as **Cloudflare D1** or **Turso**, offer compelling solutions. These services are significantly more affordable compared to traditional cloud providers like AWS or DigitalOcean.

With a $5 server and a free or low-cost tier from services like Turso, you can easily keep your monthly cost under **$10**.

But I kept wondering: **Can we go even cheaper and still maintain reliability?**

## Rediscovering SQLite for Production

That's when **SQLite** re-entered the picture. Known for its simplicity and speed, SQLite can be a great production-ready option, especially when paired with modern tools that address its traditional limitations. SQLite is zero-config, and can run as a library inside your app.

By running the SQLite database on the same server using Docker, and integrating tools like **Litestream** (for real-time streaming backups to the cloud) or **LiteFS** (for distributed SQLite with replication), we can build systems that are both **resilient** and **cost-effective**.

## Sample Architecture: SQLite for Production on a Single Server

![Sample architecture using SQLite, ASP.NET, Docker, Traefik, and Litestream](/images/sqlite-architecture.png)

To make SQLite production-ready and reliable on a single server setup, here's the architecture I use:

- **Traefik** as an internal load balancer and reverse proxy. It handles routing to different containers and supports automatic HTTPS via Let's Encrypt.
- **Docker** to containerize and orchestrate the application components.
- **ASP.NET Core** as the web framework: lightweight, fast, and perfect for container deployment.
- **SQLite** as the main relational database, running inside the same container or alongside the app container for fast local access.
- **Litestream** for real-time replication of the SQLite database to an **S3-compatible storage**. This ensures disaster recovery and backup capabilities with minimal setup and cost.

This setup allows me to:

- Run the entire application stack on a **single $5/month VPS**.
- Achieve **high performance and low latency** by colocating the app and database.
- Maintain **data durability and backup** using Litestream with minimal operational overhead.
- Scale horizontally later if needed, by adding replicas or using **LiteFS** for distributed reads.

## Benefits

There are several benefits to using **SQLite** for web apps in production. SQLite is fast because there's no network latency for local reads: the database resides on the same server as your application. This setup also improves simplicity, as developers can focus on the application server without the need to manage a separate database server. Additionally, data resilience and replication can be achieved in a straightforward way using tools like **Litestream** and **LiteFS**.

## Tradeoffs

Using SQLite with Litestream or LiteFS is honestly pretty compelling for web apps, especially if you want a simpler, faster setup without managing heavy database infrastructure. With Litestream, you get continuous backups via WAL streaming (usually to S3), and LiteFS gives you distributed reads with a single write-primary model. But there are tradeoffs. Writes still go through one node, so it won't scale well for high-write apps. Reads on replicas can be slightly stale due to async replication, which might matter depending on your use case. You also lose some features you'd get with Postgres, like stricter types, better JSON support, parallel queries, and more advanced indexing. And while you avoid running a DB server, you take on the operational complexity of managing replication, failover, and consistency yourself. So yeah, it works great for read-heavy apps and edge deployments, but if you need strong consistency, real-time updates, or lots of writes, you'll probably feel the limits.

## Final Thoughts

SQLite isn't just for local apps or side projects anymore. With the right setup, it can power real-world web applications, especially those built for SMEs looking for a balance between **affordability**, **performance**, and **simplicity**.

This journey has opened up new possibilities, and I'm excited to explore more about how SQLite can be leveraged in distributed and production-grade environments, without breaking the bank.
