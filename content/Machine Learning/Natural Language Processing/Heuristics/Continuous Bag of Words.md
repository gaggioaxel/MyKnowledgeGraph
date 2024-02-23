---
aliases:
  - CBoW
tags:
  - PredictiveEmbedding
---
The Continuous Bag of Words model is a type of [[Word2Vec]] model used for generating word embeddings. In CBoW, the model predicts the target word based on the context words within a fixed window size.

Here's how the model works:

1. [[Input Layer]]: The input layer receives one-hot encoded vectors representing the context words.

2. [[Projection Layer]]: The input vectors are then projected onto a hidden layer of smaller dimensionality using a weight matrix.

3. [[Hidden Layer]]: The hidden layer computes the average of the projected input vectors.

4. [[Output Layer]]: The hidden layer passes its output to the output layer, which computes the probability distribution over the vocabulary to predict the target word.

5. [[Training]]: The model is trained using a [[Softmax]] function and [[Cross-Entropy Loss]] to minimize the difference between the predicted probability distribution and the actual distribution (one-hot encoded target word).

By training on a large corpus of text data, the CBOW model learns to generate dense vector representations for words, capturing semantic relationships between them. These embeddings can be used in various natural language processing tasks such as [[Word Similarity]], [[Analogy Completion]], and [[Feature Representation]] for downstream tasks.
#TODO completare