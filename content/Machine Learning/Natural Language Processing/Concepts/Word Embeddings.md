are dense, high-dimensional representations of words in a continuous vector space, where each word is mapped to a vector. These embeddings capture semantic relationships between words, such as similarity and analogy. For example, in a word embedding space, similar words like "cat" and "dog" are closer together, and relationships like "king - man + woman = queen" can be represented.

![[Pasted image 20240219120521.png]]
source: [rude.io](https://www.ruder.io/word-embeddings-1/)

There are several types of word embeddings used in natural language processing, each with its own characteristics and strengths:

1. **Count-based Embeddings**:
   - [[Term-Frequency|TF]]: Represents the importance of a word in a document collection.
   - [[Count Vectorization|CV]]: Represents each document as a vector of word counts.

2. **Predictive Embeddings**:
   - [[Word2Vec]]: Learns distributed representations of words by predicting words in context using shallow neural networks.
   - **[[Global Vectors for Word Representation|GloVe]]**: Learns word vectors by factorizing the logarithm of the word co-occurrence matrix.
   - **[[FastText]]**: Similar to Word2Vec but also considers character n-grams, enabling it to generate embeddings for out-of-vocabulary words.

3. **Contextual Embeddings**:
   - **[[Embeddings from Language Models|ELMo]]**: Generates contextual word embeddings by combining representations from all layers of a bidirectional language model.
   - **[[Bidirectional Encoder Representations from Transformers|BERT]]**: Pretrained on a large corpus using a transformer architecture, capturing bidirectional context information for each word.

Each type of word embedding has its own advantages and is suitable for different tasks and scenarios in natural language processing.