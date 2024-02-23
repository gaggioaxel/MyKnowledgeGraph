---
tags:
  - "#Non-Parametric"
aliases:
  - KNN
---
The k-nearest neighbors algorithm is a simple and intuitive non-parametric [[Supervised Learning|supervised learning]] algorithm used for [[Classification Problem|classification]] and [[Regression Problem|regression]] tasks. 

In the context of classification:

1. **Training**: The algorithm memorizes the feature vectors and corresponding class labels of the training data.

2. **Prediction**: To predict the class of a new data point, the algorithm finds the k nearest neighbors to the data point in the feature space based on a distance metric (e.g., Euclidean distance). 

3. **Majority voting**: For classification, the algorithm assigns the class label that is most common among the k nearest neighbors. In the case of ties, it may break them randomly or using other rules.

4. **Parameter tuning**: The choice of the parameter k, the number of neighbors to consider, is crucial in KNN. Larger values of k can provide smoother decision boundaries but may lead to misclassification of complex patterns, while smaller values of k can be more sensitive to noise.

KNN is a non-parametric method, meaning it does not assume any underlying probability distributions of the data. It is also instance-based, as it does not explicitly learn a model during training but rather stores the entire training dataset for prediction.

Here's a simple example of using KNN for classification in Python using scikit-learn:

```python
from sklearn.neighbors import KNeighborsClassifier

# Create a KNN classifier with k=3
knn = KNeighborsClassifier(n_neighbors=3)

# Training data (features and labels)
X_train = [[1, 2], [3, 4], [5, 6]]
y_train = ['a', 'b', 'a']

# Fit the classifier to the training data
knn.fit(X_train, y_train)

# Test data
X_test = [[2, 3], [4, 5]]

# Predict the class labels for the test data
y_pred = knn.predict(X_test)

print("Predicted labels:", y_pred)
```


#TODO inserire esempi e calcolo diretto