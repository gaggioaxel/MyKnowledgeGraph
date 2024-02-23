**Part-of-speech tagging**
Assigning grammatical information (e.g., noun, verb, adjective) to words in a sentence.

Example:

``` python
import spacy

# Load English language model
nlp = spacy.load("en_core_web_sm")

# Input text
text = u"My cat ate an apple"

# Process the text with the language model
doc = nlp(text)

# Iterate through each token in the processed document and print its part-of-speech tag
for token in doc:
	print('{} - {}'.format(token, token.pos_))
```
Output:
``` bash
My ­- PRON 
cat -­ NOUN 
ate ­- VERB 
an -­ DET 
apple -­ NOUN
```
