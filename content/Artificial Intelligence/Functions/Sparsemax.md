---
tags: 
aliases: 
title: Sparsemax
---
# Summary

Sparsemax is a generalization of the softmax function used in machine learning and neural networks. It is designed to produce sparse outputs, meaning that most of the elements in the output vector are zero.


## Description:

Sparsemax is an activation function that is akin to the softmax function but with a crucial difference: it encourages sparsity in the output. In scenarios where a model needs to make a selection among a set of alternatives, Sparsemax proves to be particularly useful. For instance, in tasks like multi-label classification, where each input can belong to multiple categories simultaneously, Sparsemax can help in producing more interpretable and meaningful outputs.
The function is calculated in this way:
$$
\text{sparsemax}\left(z\right) = \arg_{p∈\Delta^{K−1}}\min||\mathbf{p} - \mathbf{z}||^{2}
$$

## Key Points:

- Sparsemax is similar to softmax but tends to produce more sparse outputs.
- It is useful in tasks where the model needs to make a selection among a set of alternatives.
- The output of sparsemax is a probability distribution with non-negative values that sum to one, like softmax.
- Sparsemax encourages sparsity in the output by penalizing large elements in the input vector.

## Implementation:

```python
import numpy as np

def sparsemax(x):
    """Sparsemax activation function."""
    sorted_x = np.sort(x)[::-1]
    cumsum = np.cumsum(sorted_x)
    rho = np.where(sorted_x > (cumsum - 1) / np.arange(1, len(x) + 1))[0][-1]
    threshold = (cumsum[rho] - 1) / (rho + 1)
    return np.maximum(x - threshold, 0)

# Example usage
x = np.array([0.5, 1.0, 0.3, 0.2])
output = sparsemax(x)
print(output)
```