is a popular technique for generating distributed representations of words in a continuous vector space. It learns these representations by training a shallow [[Neural Network]] on a large corpus of text data.

There are two main architectures for training Word2Vec models:

1. [[Continuous Bag of Words]] (CBOW)**: The model predicts the current word based on the context words within a fixed window size.
    
2. **Skip-gram**: The model predicts the context words given a current word.
    

Once trained, the Word2Vec model provides dense vector representations for each word in the vocabulary, where words with similar meanings are closer together in the vector space.

These word embeddings capture semantic relationships between words, allowing for tasks such as word similarity, analogy completion, and feature representation for downstream natural language processing tasks like text classification and sentiment analysis.
#TODO finire