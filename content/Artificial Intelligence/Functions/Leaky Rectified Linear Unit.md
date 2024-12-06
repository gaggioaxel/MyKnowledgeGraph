---
aliases:
  - Leaky ReLU
tags:
  - ActivationFunction
title: Leaky Rectified Linear Unit
---
The Leaky Rectified Linear Unit (Leaky ReLU) is a variant of the [[Rectified Linear Unit|ReLU]] activation function that allows a small, positive slope for negative input values, rather than setting them to zero. It is defined as:

$f(x) = \begin{cases} x & \text{if } x > 0 \\ \alpha x & \text{otherwise} \end{cases}$

Where:
- $x$ is the input to the function.
- $\alpha$ is a small positive slope (typically a small constant, e.g., 0.01).


## Explanation

Leaky ReLU is used as an alternative to the traditional ReLU activation function for several reasons:

1. **Prevent Dying ReLU Problem**: In traditional ReLU, neurons may become "dead" during training, where they consistently output zero for all inputs. Leaky ReLU addresses this issue by allowing a small, non-zero gradient for negative input values, which prevents neurons from becoming inactive.

2. **Avoid Zero Gradient**: ReLU sets all negative values to zero, resulting in zero gradients during the backward pass in training. Leaky ReLU ensures that there is always a non-zero gradient, which helps in learning even when the input is negative.

3. **Reduced Sensitivity to [[Hyperparameter|Hyperparameters]]**: Leaky ReLU introduces a small slope parameter (typically a small constant like 0.01). This parameter is less sensitive to changes compared to the threshold parameter in ReLU, making Leaky ReLU more robust to variations in hyperparameters.

4. **Sparse Activation**: Leaky ReLU allows for sparse activation by allowing negative values to propagate through the network, which can be beneficial for certain types of data and tasks.

Overall, Leaky ReLU is preferred over traditional ReLU in scenarios where the dying ReLU problem is observed, or where a non-zero gradient for negative inputs is desirable for improved training stability and convergence.


## Live example
#TODO impelement theme change

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Interactive ReLU Plot</title>
<script src="https://cdn.plot.ly/plotly-2.32.0.min.js" charset="utf-8"></script>
<script type="text/javascript" src="https://unpkg.com/default-passive-events"></script>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 6vh;
	}
	#slider {
		width: 100%;
		margin: 0 0;
	}
</style>
<div class="container">
  <label> alpha =&nbsp;</label>
	<select id="alpha",  onchange='updateAlpha()' > 
    <option value=0.1>0.1</option>
    <option value=0.5>0.5</option>
    <option value=1>1</option>
  </select>
</div>
<div class="container">
	<label for="slider">x = <span id="sliderValue">0</span></label>
</div>
<div class="container" style="height: 2vh;">
	<label>f ( <span id="x">0</span> ) = <span id="f(x)">0</span></label>
</div>
<div class="container">
	<input type="range" min="-1" max="1" value="0" step="0.1" id="slider">
</div>
<div id="plot"></div>
<div>
<script>

	var theme = document.documentElement.getAttribute('saved-theme');
	console.log(theme);
	const slider = document.getElementById('slider');
	var alpha = Array.from(document.getElementById('alpha').selectedOptions).map(option => option.value)[0];
	const sliderValue = document.getElementById('sliderValue');
	const x_txt = document.getElementById('x');
	const f_x = document.getElementById('f(x)');
	const xMin = parseFloat(slider.min);
	const xMax = parseFloat(slider.max);
	const step = parseFloat(slider.step);
	const xValues = Array.from({ length: Math.floor((xMax - xMin) / step) + 1 }, (_, index) => xMin + index * step);
	

	function updateAlpha() { 
		const selectElement = document.getElementById('alpha'); 
		const selectedOptions = Array.from(selectElement.selectedOptions); 
		alpha = selectedOptions.map(option => option.value)[0]; 
		plot(alpha)
		const x_loc = parseFloat(slider.value);
		console.log(x_loc);
		const y_loc = Math.round(calculateLeakyReLU([x_loc],alpha)[0] *100) / 100;
		setText( x_loc, y_loc);
	}
	
	// Function to calculate ReLU values for given x values
	function calculateLeakyReLU(xValues, alpha) {
		return xValues.map(value => Math.max(alpha*value, value));
	}
	
	function plot(alpha) {		
		var trace = {
			x: xValues,
			y: calculateLeakyReLU(xValues, alpha),
			type: 'line',
			name: 'LeakyReLU'
		};
		
		// Add a scatter trace for the dot
		var dotTrace = {
			x: [slider.value],
			y: [calculateLeakyReLU([slider.value], alpha)[0]],
			mode: 'markers',
			marker: {
				size: 8,
				color: '#7b97aa'
			},
			type: 'scatter',
			name: 'cursor'
		};
	
		var layout = {
			title: 'Interactive LeakyReLU Plot',
			xaxis: {
				title: 'x'
			},
			yaxis: {
				title: 'LeakyReLU(x)'
			},
			plot_bgcolor: '#161618',
	        paper_bgcolor: '#161618',
			font: {
	          	color: 'white'
			}
			
		};
	
		const config = {
			displayModeBar: true,
			staticPlot: true
		};
	
		Plotly.newPlot('plot', [trace, dotTrace], layout, config);
	}
	
	function setText(x,y) {
		sliderValue.textContent = x;
		x_txt.textContent = x;
		f_x.textContent = y;
	}
	
	slider.addEventListener('input', function () {
		var inputValue = parseFloat(slider.value);
		var relu = Math.round(calculateLeakyReLU([inputValue], alpha)[0] * 100) / 100;
		
		// Update the dot position
		Plotly.restyle('plot', {
			x: [[inputValue]],
			y: [[relu]]
		}, 1);
		
		setText(inputValue, relu)
	});
	plot(alpha)

</script>
</div>


## Python implementation

Here's how you can implement the Leaky ReLU function in Python:

```python
import numpy as np
import matplotlib.pyplot as plt
  

# Define the Leaky ReLU function
def leaky_relu(x, alpha=0.1):
    return np.maximum(alpha * x, x)
  

# Generate x values
x = np.linspace(-5, 5, 100)
  

# Compute the corresponding y values using Leaky ReLU
y = leaky_relu(x)
  

# Plot the Leaky ReLU function
plt.plot(x, y, label='Leaky ReLU', color='blue')
  

# Add labels and title
plt.xlabel('x')
plt.ylabel('Leaky ReLU(x)')
plt.title('Leaky ReLU Function')
  

# Add a grid
plt.grid(True)
  

# Add a legend
plt.legend()
  

# Show the plot
plt.show()
```

Output:

![[Leaky ReLU.png]]