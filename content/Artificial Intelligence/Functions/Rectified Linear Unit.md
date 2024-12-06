---
title: Rectified Linear Unit
aliases:
  - ReLU
tags:
  - "#ActivationFunction"
---
The Rectified Linear Unit (ReLU) is a commonly used activation function in neural networks. It is defined mathematically as:
$$
f(x) = max(0, x)
$$
Where:
- $x$ is the input to the function.
- $f(x)$ is the output of the ReLU function.

In other words, ReLU returns the input $x$ if it is positive, and returns zero otherwise.

## Live plot

The following is a live plot implemented in javascript
(feel free to inspect the element for the implementation)




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
		width: 80%;
		margin: 0 0;
	}
</style>
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
	console.log(theme)
	var slider = document.getElementById('slider');
	var sliderValue = document.getElementById('sliderValue' );
	var x = document.getElementById('x');
	var f_x = document.getElementById('f(x)');
	
	// Function to calculate ReLU values for given x values
	function calculateReLU(xValues) {
		return xValues.map(value => Math.max(0, value));
	}
	
	const xMin = parseFloat(slider.min);
	const xMax = parseFloat(slider.max);
	const step = parseFloat(slider.step);
	const xValues = Array.from({ length: Math.floor((xMax - xMin) / step) + 1 }, (_, index) => xMin + index * step);

	var trace = {
		x: xValues,
		y: calculateReLU(xValues),
		type: 'line',
		name: 'ReLU',
		color: '#7b97aa'
	};
	
	// Add a scatter trace for the dot
	var dotTrace = {
		x: [slider.value],
		y: [calculateReLU([slider.value])[0]],
		mode: 'markers',
		marker: {
			size: 12,
			color: '#7b97aa'
		},
		type: 'scatter',
		name: 'cursor'
	};

	var layout = {
		title: 'Interactive ReLU Plot',
		xaxis: {
			title: 'x'
		},
		yaxis: {
			title: 'ReLU(x)'
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
	
	slider.addEventListener('input', function () {
		var inputValue = parseFloat(slider.value);
		var relu = calculateReLU([inputValue])[0];
		
		// Update the dot position
		Plotly.restyle('plot', {
			x: [[inputValue]],
			y: [[relu]]
		}, 1);
		
		sliderValue.textContent = inputValue;
		x.textContent = inputValue;
		f_x.textContent = relu;
	});

</script>
</div>



## Python implementation

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
