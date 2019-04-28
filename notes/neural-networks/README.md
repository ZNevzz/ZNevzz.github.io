# Neural Network

## Working
  A-NN we do the sum of products of inputs(X) and their corresponding Weights(W) and apply a Activation function f(x) to it to get the output of that layer and feed it as an input to the next layer.

## Activation Functions

- RELU, SoftMax, Linear, Sigmoid, TanH
- RELU used for all hidden layers
- SoftMax/ Linear for output layer

## Example
```python

input_data_hidden1= [10, 20]

weights['hidden0_node0'] = [1,2]
weights['hidden0_node1'] = [1,2]
weights['output'] = [1,2]

output_node0 = max(0, (input_data * weights['hidden0_node0']).sum() )
output_node1 = max(0, (input_data * weights['hidden0_node1']).sum() )

input_data_output = [output_node0, output_node1]
output = max(0, (input_data_output * weights['output']).sum() ) # used ReLu for output layer too
```
