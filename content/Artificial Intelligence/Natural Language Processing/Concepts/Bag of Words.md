---
aliases:
  - BoW
---
The Bag of Words model is a simple and widely used technique in natural language processing for representing text data ([[Categorical Variable]]).

In the BoW model, a document is represented as a multiset (or "bag") of its words, disregarding grammar and word order but maintaining multiplicity.

For example, consider the sentence: "The cat sat on the mat."

Its BoW representation might look like:

json

`{    "The": 1,    "cat": 1,    "sat": 1,    "on": 1,    "the": 1,    "mat": 1 }`

Here, each unique word in the document is represented as a key, and its value is the count of occurrences of that word in the document.

The BoW model is often used as a feature representation for text data ([[Text Classification]]) in various machine learning tasks such as [[Document Classification]], [[Sentiment Analysis]], and [[Information Retrieval]].