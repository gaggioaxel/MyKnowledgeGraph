---
aliases:
  - CV
tags:
  - CountBasedEmbedding
---
is a technique used in natural language processing to represent text data numerically. It involves converting a collection of text documents into a matrix, where each row corresponds to a document and each column corresponds to a unique word in the entire corpus. 

The values in the matrix represent the frequency of each word's occurrence in the corresponding document. Therefore, each document is represented as a vector of word counts.

For example, consider the following two documents:

1. "The cat sat on the mat."
2. "The dog chased the cat."

With count vectorization, these documents might be represented as:

|  | cat | chased | dog | mat | on | sat | the |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Document 1 | 1 | 0 | 0 | 1 | 1 | 1 | 2 |
| Document 2 | 1 | 1 | 1 | 0 | 0 | 0 | 2 |

Count vectorization is a simple and effective way to convert text data into a format that can be used for machine learning algorithms, such as [[Classification]] and [[Clustering]]. 

Cons: It does not consider the semantic meaning of words or their order in the document.
