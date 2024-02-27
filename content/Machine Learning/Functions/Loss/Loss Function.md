A loss function, also known as a cost function or objective function, is a measure that quantifies the difference between the predicted values of a model and the actual values in the training data. The goal of training a machine learning model is to minimize this loss function, which indicates how well the model is performing on the training data.

In [[Supervised Learning]] tasks like [[Regression Problem|regression]] and [[Classification Problem|classification]], the loss function is used to optimize the parameters of the model during the training process. Different loss functions are used depending on the type of problem and the nature of the data.

Here are some common loss functions used in machine learning:

1. **[[Mean Squared Error]]**: Used in regression tasks, MSE measures the average squared difference between the predicted values and the actual values.

2. **[[Binary Cross-Entropy Loss]]**: Used in binary classification tasks, this loss function measures the difference between the predicted probabilities and the true binary labels.

3. **[[Categorical Cross-Entropy Loss]]**: Used in multi-class classification tasks, this loss function measures the difference between the predicted class probabilities and the true one-hot encoded labels.

4. **[[Hinge Loss]]**: Used in binary classification tasks, hinge loss is commonly associated with [[Support Vector Machine|SVM]] and measures the margin between the predicted scores and the true labels.

5. **[[Huber Loss]]**: A robust loss function used in regression tasks, Huber loss combines the best properties of [[Mean Squared Error|MSE]] and absolute error loss by being less sensitive to outliers.

6. **[[Kullback-Leibler Divergence]]**: Used in probabilistic models, KL divergence measures how one probability distribution diverges from a second, expected probability distribution.

The choice of loss function depends on the specific problem you are trying to solve and the characteristics of the data. It's important to select a loss function that aligns with the objectives of your task and the properties of your model.