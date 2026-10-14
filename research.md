---
layout: default
title: Research
permalink: /research/
---

# Research

My research focuses on **AI-assisted software verification and debugging**.
It builds on my work in software engineering, software verification,
and machine learning, with an emphasis on investigating program behavior
and reasoning about correctness.

## AI-assisted Software Verification and Debugging

I study how learning-based methods and automated verification can support
the detection and analysis of software bugs. My work on neural bug detection
examines what models learn from developer mistakes and how their performance
depends on the bugs used for training. My work on software verification
investigates how different analysis techniques can be combined to reason
about program correctness.

At the intersection of these areas, I investigate how AI can assist
verification, including the use of language models to propose loop invariants
that verification tools can check. I am interested in the capabilities and
limitations of these methods and how to assess their reliability.

## Neural Bug Detection

I have investigated how machine learning models can learn
from developer mistakes to detect and repair software bugs.

This includes work on training neural bug detectors with
artificial and real-world bugs, as well as the development
of [RealiT](https://github.com/cedricrupb/nbfbaselines).

This work examines how training data affects bug detection and compares
neural detectors with developers on variable misuse bugs. The TSSB-3M
dataset provides mined single-statement bugs for studying these questions.

Selected publications:

- [How to Train Your Neural Bug Detector: Artificial vs Real Bugs (ASE 2023)]({{ '/publications/' | relative_url }}#neural2023)
- [Are Neural Bug Detectors Comparable to Software Developers on Variable Misuse Bugs? (ASE 2022)]({{ '/publications/' | relative_url }}#developers2022)
- [Learning Realistic Mutations: Bug Creation for Neural Bug Detectors (ICST 2022)]({{ '/publications/' | relative_url }}#mutations2022)
- [TSSB-3M: Mining Single Statement Bugs at Massive Scale (MSR 2022)]({{ '/publications/' | relative_url }}#tssb2022)

## Cooperative Software Verification

Another focus of my research is improving automated
software verification by combining and coordinating
different verification techniques.

Our ICSE 2025 work investigates dynamic program splitting: dividing a
verification task into smaller programs on demand and coordinating existing
verifiers to analyze them. Related work studies how to construct verifier
combinations from existing components and how to parallelize analysis by
splitting program paths into ranges.

My work includes verification tools such as
[PeSCo-CPA](https://link.springer.com/chapter/10.1007/978-3-030-17502-3_19)
and
[BubaaK-SpLit](https://link.springer.com/chapter/10.1007/978-3-031-57256-2_20).

These tools achieved third place in the ReachSafety category
at SV-COMP 2019 and second place in the SoftwareSystems
category at SV-COMP 2024, respectively.

Selected publications:

- [Cooperative Software Verification via Dynamic Program Splitting (ICSE 2025)]({{ '/publications/' | relative_url }}#icse2025)
- [Construction of verifier combinations from off-the-shelf components (Formal Methods in System Design, 2025)]({{ '/publications/' | relative_url }}#fmsd2025)
- [BUBAAK: Dynamic Cooperative Verification (TACAS 2025)]({{ '/publications/' | relative_url }}#bubaak2025)
- [Parallel program analysis on path ranges (Science of Computer Programming, 2024)]({{ '/publications/' | relative_url }}#ranges2024)
- [Bubaak-SpLit: Split what you cannot verify (TACAS 2024)]({{ '/publications/' | relative_url }}#bubaak2024)
- [PeSCo: Predicting Sequential Combinations of Verifiers (TACAS 2019)]({{ '/publications/' | relative_url }}#pesco2019)

## Learning-Based Methods and Formal Verification

I also investigate how learning-based systems and formal
verification techniques can complement each other.

Published work includes learning to select verification algorithms from
program representations and studying whether ChatGPT can propose loop
invariants that established verification tools can check.

Selected publications:

- [Can ChatGPT support software verification? (FASE 2024)]({{ '/publications/' | relative_url }}#chatgpt2024)
- [Attend and Represent: A Novel View on Algorithm Selection for Software Verification (ASE 2020)]({{ '/publications/' | relative_url }}#attention2020)
- [Algorithm selection for software validation based on graph kernels (Automated Software Engineering, 2020)]({{ '/publications/' | relative_url }}#kernels2020)

## Testing Software Verification Tools

Verification tools themselves need testing. Our work on robustness testing
examines how changes that preserve a program's semantics affect verifier
results, helping identify weaknesses in verification tools.

Selected publication:

- [Robustness Testing of Software Verifiers (SEFM 2023)]({{ '/publications/' | relative_url }}#robustness2023)
