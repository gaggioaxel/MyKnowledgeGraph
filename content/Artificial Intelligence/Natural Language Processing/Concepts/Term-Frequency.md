---
aliases:
  - TF
---
The term frequency (TF) representation of a phrase, sentence, or document is obtained by summing the [[One-Hot-Encoding]] representations of its individual words. In [[ExampleSentencesNLP]], using the given one-hot encoding scheme, the sentence "Fruit flies like time flies a fruit" would have the TF representation (1, 2, 2, 1, 1, 0, 0, 0). Each entry in this representation denotes the count of occurrences of the corresponding word in the sentence (or corpus).