are contiguous sequences of n items from a given sample of text or speech. In the context of natural language processing, these items are typically words, but they can also be characters or other linguistic units.

For example, consider the sentence: "The quick brown fox jumps over the lazy dog". After tokenization into single words separated by a space:

- 1-grams (unigrams): `[["The"],["quick"],["brown"],["fox"],["jumps"],["over"],["the"],["lazy"],["dog"]
- 2-grams (bigrams): `[["The","quick"], ["quick","brown"],["brown","fox"],["fox","jumps"], ["jumps","over"],["over","the"],["the","lazy"],["lazy",dog"]]`
- 3-grams (trigrams): `[["The","quick","brown"],["quick","brown","fox"],["brown","fox","jumps"],["fox","jumps","over"],["jumps","over","the"],["over","the","lazy"],["the","lazy","dog"]]`

N-grams are commonly used in natural language processing tasks such as language modeling, text generation, and feature extraction. They capture local word patterns and contextual information that can be useful for understanding and processing text data.