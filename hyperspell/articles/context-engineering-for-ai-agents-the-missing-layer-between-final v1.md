# Context Engineering for AI Agents: The Missing Layer Between Prompts and Memory

You ask your AI agent to schedule a meeting with your co-founder. The model is top-tier, the prompt is well-crafted, the tools are connected. The agent creates a calendar invite for Tuesday at 10 AM. The problem? Your co-founder is in Tokyo, you never take meetings before noon, and there's already a board prep session in that slot. The agent had reasoning ability. It had tools. What it lacked was context.

This failure is everywhere in production AI agents. The model itself is capable. The instructions are clear. But the agent operates in a vacuum, disconnected from the user's actual world. Every interaction starts from zero.

Context engineering is the emerging discipline of designing what information an AI agent receives, when, and how. It sits above prompt engineering and beyond RAG. For teams building agentic products, it's becoming the single biggest determinant of whether an agent feels useful or feels broken.

## What Context Engineering Actually Means

Context engineering is the set of strategies for curating and maintaining the optimal set of information during LLM inference. That includes prompts, but also everything else that lands in the context window: user data, conversation history, retrieved documents, tool outputs, and metadata.

The distinction from prompt engineering matters. Prompts are instructions: "You are a helpful sales assistant. Always be concise." Context is knowledge: the user's last five deals, their CRM pipeline stage, the email thread from yesterday. Prompt engineering tells the model how to behave. Context engineering gives the model what it needs to behave well.

The distinction from RAG matters too. Retrieval-augmented generation is one technique within context engineering, not the whole picture. RAG fetches documents. Context engineering decides which documents to fetch, what other data to include, how to format it all, and what to leave out. RAG is a component. Context engineering is the architecture.

Anthropic's engineering team put it clearly in their guide on effective context engineering: building with language models "is becoming less about finding the right words and phrases for your prompts, and more about answering the broader question of what configuration of context is most likely to generate your model's desired behavior" (Anthropic, 2025). That framing captures the shift. We went from prompt engineering (2022-2023), where the focus was crafting the right instructions, to RAG (2023-2024), where the focus was retrieving relevant documents, to context engineering (2024-2025), where the focus is orchestrating all available information into a coherent picture.

## The Four Layers of Agent Context

Not all context is the same. When we work with teams building AI agents, we see four distinct layers, and most builders only address the first two.

**Layer 1: Instruction context** covers system prompts, tool definitions, and behavioral rules. This is prompt engineering's domain. Necessary, but not sufficient.

**Layer 2: Knowledge context** covers documents, data, and prior conversations retrieved at query time. This is what RAG addresses. Better, but still incomplete.

**Layer 3: Relational context.** Now we're in territory most agents never reach. This layer captures who the user is: their relationships, organizational structure, preferences, communication patterns. The scheduling agent from the intro failed here. It didn't know the co-founder's timezone, the user's meeting preferences, or the existing calendar. Without relational context, every user looks the same to the agent.

**Layer 4: Temporal context** adds the dimension of time. What happened recently, what's changing, what's upcoming. An agent that knows your biggest client sent a frustrated email two hours ago handles your next support ticket differently than one operating from last week's snapshot. Live data feeds, recent interactions, and approaching deadlines all live here.

The gap between Layers 2 and 3 is where most agents break. They can retrieve documents. They can follow instructions. But they don't know the user. As one builder told us, "My agent has no idea who the user is." That's a context engineering problem, not a model problem.

## Why Context Window Size Doesn't Solve This

Context windows keep growing. Gemini offers 1 million tokens. Some models advertise 10 million. The temptation is obvious: if the window is big enough, just put everything in.

This doesn't work, for three reasons.

First, cost and latency scale with input size. Processing a million tokens on every request gets expensive fast, and response times balloon. For production agents handling thousands of concurrent users, the economics collapse.

Second, signal-to-noise ratio degrades. Liu et al. demonstrated in "Lost in the Middle" (2024) that language models struggle to use information positioned in the middle of long contexts, even when that information is directly relevant to the query. Performance follows a U-shaped curve: models attend to the beginning and end of their input, but the middle fades. Chroma Research's "Context Rot" report (2025) confirmed this extends to current models, finding that even simple tasks show "non-uniform performance degradation as input length increases," and that real-world conditions with distractors and low-similarity matches are worse than benchmarks suggest.

Third, and most importantly, the challenge is selection, not capacity. A human with perfect recall still needs judgment about which memories matter right now. An agent with a 10-million-token window still needs to decide what goes in it. Context engineering is that decision-making layer.

A bigger hard drive doesn't make your computer faster. Better file retrieval does.

## Building a Context Engineering Stack

What does a practical context engineering stack look like for production agents? Five components, each solving a distinct problem.

**Data ingestion** connects agents to where user data actually lives: email, Slack, documents, CRM, calendar. Most teams underestimate this step. Each data source requires OAuth handling, API pagination, rate limiting, and schema normalization. Teams building from scratch typically spend 3-6 months here before writing a single line of agent logic. If you've heard the complaint "we're spending all our time on OAuth instead of building our product," this is the layer they're stuck on.

**Indexing and retrieval** transforms raw data into something an agent can search. Semantic search alone isn't enough for most production use cases. Knowledge graphs capture relationships between entities (people, projects, companies) that vector similarity misses entirely. Hybrid approaches tend to outperform pure vector retrieval.

**Memory management** determines what the agent remembers, what it forgets, and how it updates over time. This goes beyond conversation history. A good memory system tracks user preferences, organizational relationships, and evolving context across sessions. The hard part isn't storing everything; it's deciding what matters.

**Context assembly** is the orchestration layer: given a user's question, what combination of instructions, documents, relational data, and temporal signals will produce the best response? This is where the four layers come together.

**Continuous learning** closes the loop. When users correct agents, when interactions succeed or fail, those signals should improve future context selection. Without feedback loops, context quality plateaus.

At Hyperspell, we built this stack as managed infrastructure because we watched teams spend months on the plumbing instead of building their actual product. As Anna Yuan, CEO at Scale Agentic, put it: her team "went from concept to paid pilots in 48 hours." That tells you how much of the typical timeline is infrastructure, not intelligence.

## Context Engineering in Practice

The difference between good and bad context engineering shows up in concrete ways. Three scenarios we see repeatedly:

**Customer support without relational context.** A user writes: "The export is broken again." Without Layer 3 context, the agent asks which product, which export feature, and what "again" refers to. The user (already frustrated) has to re-explain their entire history. With relational context, the agent knows this user reported a CSV export bug last week on the Enterprise plan, the ticket was marked resolved, and the same user has three open support cases. The agent can respond: "I see the CSV export issue from last week may have resurfaced. Let me check the latest logs for your account." That's a different experience.

**Sales agent with temporal context.** A rep asks their AI assistant to prep for a call with Acme Corp. The generic version surfaces the company overview and last quarter's notes. The context-engineered version also flags that Acme's CFO posted about budget freezes on LinkedIn yesterday, their contract renewal is in 18 days, and a competitor just announced a feature Acme has been requesting. Same model, same prompt. The prep goes from generic to actionable because the agent has Layer 4 access.

**Code assistant with project history.** A developer asks for help refactoring an authentication module. A context-poor agent suggests a standard OAuth flow. One with project history knows the team already tried and rejected OAuth in favor of API keys due to their embedded deployment model, that the current implementation has a known session timeout bug tracked in issue #247, and that the lead architect prefers functional patterns. The suggestion shifts from textbook to team-aware.

In each case, the model didn't change. The prompt didn't change. The context changed, and with it, the output quality.

## What Comes Next

Context engineering is still early as a discipline. The term barely existed before 2024. Anthropic's context engineering guide has become the most-cited resource in the space, but most of the tooling and best practices are still being figured out in production.

What's clear is that the teams investing in their context layer now are building compounding advantages. Every interaction generates data. Every correction improves future retrieval. Every connected data source deepens the agent's picture of its users. These are moats that grow with usage, not advantages that can be copied overnight.

The shift from prompt engineering to context engineering mirrors a broader pattern in software: the hard problems move from logic to data. The model is the engine. The context is the fuel. Teams that treat context as an afterthought, dumping raw documents into an oversized context window, will keep building agents that fail at simple scheduling tasks. Teams that engineer their context will build agents that actually know their users.

If you're building an AI agent and spending more time on data pipelines than on agent logic, that's a signal. The context layer is the product. [Explore how Hyperspell approaches this](https://hyperspell.com).

---

## Sources

- Anthropic. "Effective Context Engineering for AI Agents." 2025. https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- Liu, Nelson F. et al. "Lost in the Middle: How Language Models Use Long Contexts." Transactions of the Association for Computational Linguistics, 2024. https://arxiv.org/abs/2307.03172
- Hong, Kelly, Anton Troynikov, and Jeff Huber. "Context Rot." Chroma Research, 2025. https://research.trychroma.com/context-rot

---

Meta Title: Context Engineering for AI Agents: Beyond Prompts & RAG
Meta Description: Context engineering is the discipline of designing what information AI agents receive. Learn the four layers, why big context windows aren't enough, and how to build a context stack.
Primary Keyword: context engineering for AI agents
Secondary Keywords: context engineering AI, AI agent context, context layer AI agents, AI agent memory, context window, RAG vs context engineering

---

## Changelog

- **Liu et al. citation year**: Changed from 2023 to 2024. The paper was published in Transactions of the Association for Computational Linguistics in 2024 (arxiv preprint was 2023).
- **Four Layers structure varied**: Layers 1-2 compressed to single sentences each. Layer 3 expanded with a "now we're in territory most agents never reach" bridge. Layer 4 restructured to lead with the time dimension rather than repeating the Layer 1-2 template.
- **Practice section without/with pattern broken**: Example 1 keeps without/with structure. Example 2 reframed as "generic version vs. context-engineered version" (no without/with). Example 3 reframed as "context-poor agent vs. one with project history."
- **Context Stack parallelism varied**: Data ingestion expanded with customer pain phrase ("we're spending all our time on OAuth"). Indexing and retrieval compressed. Context assembly shortened to 2 sentences. Variation in depth across the five components.
- **Anna Yuan attribution added**: The proof point "concept to paid pilots in 48 hours" now attributed to Anna Yuan, CEO at Scale Agentic, rather than presented as an anonymous general claim.
- **"state-of-the-art" replaced**: Changed to "top-tier" in opening. Less buzzword-y.
- **"fundamentally" replaced**: Changed to "most importantly" in the context window section. Plainer.
- **"significantly" cut**: Removed from Chroma Research reference. Filler.
- **"Think of it this way:" removed**: Corporate transition. The analogy now stands on its own.
- **"So what does" simplified**: Opening of Context Stack section tightened from "So what does... Five components" to "What does... Five components."
- **"Here are three scenarios" tightened**: Changed to "Three scenarios we see repeatedly:" — removes formulaic intro.
- **"agent's understanding" changed**: "deepens the agent's understanding of its users" changed to "deepens the agent's picture of its users" to avoid borderline anthropomorphization per company-context Section 6 taboos.
