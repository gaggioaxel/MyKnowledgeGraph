---
aliases:
  - IDF
tags:
  - CountBasedEmbedding
---

is a measure used in natural language processing and information retrieval to evaluate the importance of a term in a collection of documents.

It is calculated as the logarithm of the ratio of the total number of documents in the corpus to the number of documents containing the term, often with the addition of a smoothing factor to avoid division by zero.

Mathematically, IDF is defined as:

$\text{IDF}(t) = \log \left( \frac{N}{\text{df}(t)} \right)$

Where:

- $N$ is the total number of documents in the corpus.
- $df(t)$ is the number of documents containing term $t$.

The IDF value increases proportionally to the rarity of the term in the corpus. Terms that appear in many documents will have a lower IDF value, indicating that they are less informative or discriminative.

IDF is commonly used in conjunction with [[Term-Frequency]] (TF) to calculate TF-IDF [[Score]], which measure the importance of a term in a specific document relative to its frequency in the corpus.