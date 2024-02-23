---
aliases:
  - ReLU
tags:
  - "#ActivationFunction"
---
The Rectified Linear Unit (ReLU) is a commonly used activation function in neural networks. It is defined mathematically as:

$f(x) = max(0, x)$

Where:
- $x$ is the input to the function.
- $f(x)$ is the output of the ReLU function.

In other words, ReLU returns the input $x$ if it is positive, and returns zero otherwise.

Here's the implementation of ReLU in Python:

```python
import numpy as np
import matplotlib.pyplot as plt  


# Define the ReLU function
def relu(x):
    return np.maximum(0, x)


# Generate x values
x = np.linspace(-5, 5, 100)
  

# Compute the corresponding y values using ReLU
y = relu(x)
  

# Plot the ReLU function
plt.plot(x, y, label='ReLU', color='blue')
  

# Add labels and title
plt.xlabel('x')
plt.ylabel('ReLU(x)')
plt.title('ReLU Function')

  
# Add a grid
plt.grid(True)
  

# Add a legend
plt.legend()
  

# Show the plot
plt.show()
```

Output:


![[ReLU.png]]