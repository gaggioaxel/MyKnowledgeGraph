---
aliases:
  - shallow parsing
---
Chunking, also known as shallow parsing, is a natural language processing technique used to identify and group words into meaningful syntactic units, such as noun phrases or verb phrases. 

In chunking, a parser analyzes a sentence's grammatical structure and identifies phrases that serve specific syntactic functions. These phrases are then grouped together as chunks.

For example, in the sentence "The black cat chased the mouse," chunking might identify the following chunks:
- "The black cat" (noun phrase)
- "chased" (verb phrase)
- "the mouse" (noun phrase)

Chunking is often used as an intermediate step in natural language processing tasks such as information extraction, [[Named Entity Recognition]], and [[Text Summarization]]. It helps to break down text into manageable units for further analysis and processing.

An operative example using spaCy:
``` python
import spacy

# Load English language model
nlp = spacy.load("en_core_web_sm")

# Input text
text = u"My cat ate an apple"

# Process the text with the language model
doc = nlp(text)

# Iterate through each noun chunk in the processed document and print its label
for chunk in doc.noun_chunks:
	print ('{} - {}'.format(chunk, chunk.label_))
```

Output:
``` bash
My cat - ­ NP 
an apple - ­ NP
```
