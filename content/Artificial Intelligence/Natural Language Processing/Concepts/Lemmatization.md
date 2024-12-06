is the process of reducing words to their base or dictionary form, called a lemma. Unlike [[Stemming]], lemmatization considers the context and meaning of a word. For example, the lemma of "running" is "run", and the lemma of "better" is "good".
Sometimes, it can be beneficial to simplify the tokens to their lemmas in order to minimize the dimensionality of the vector representation.

An operative example using spaCy, a Python library for advance Natural Language Processing:

``` python
import spacy

  
# Load English language model
nlp = spacy.load("en_core_web_sm")
  

# Input text
text = u"The cats are chasing mice around the house, causing chaotic vibes and unnecessary noise."

  
# Process the text with the language model
doc = nlp(text)

  
# Iterate through each token in the processed document and print its lemma
for token in doc:
    print('{} -> {}'.format(token, token.lemma_))
```
Output:
``` bash
The -> the 
cats -> cat 
are -> be 
chasing -> chase 
mice -> mouse 
around -> around 
the -> the 
house -> house 
, -> , 
causing -> cause 
chaotic -> chaotic 
vibes -> vibe 
and -> and 
unnecessary -> unnecessary 
noise -> noise 
. -> .
```

spaCy employs a predefined lexicon called WordNet for lemma extraction, but lemmatization can also be conceptualized as a machine learning challenge that demands knowledge of the language's morphology.