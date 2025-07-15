# Introduction to Pandas & Numpy in Python

Pandas and Numpy are popular libraries for data analysis and numerical computing.

```python
import pandas as pd
import numpy as np

# Numpy array
arr = np.array([1, 2, 3])
print(arr.mean())

# Pandas DataFrame
import pandas as pd
data = {'name': ['Alice', 'Bob'], 'age': [25, 30]}
df = pd.DataFrame(data)
print(df)
```

**Key Points:**
- Use Numpy for fast array operations.
- Use Pandas for tabular data.

## Real-time Project Example
Reading and analyzing a CSV file:

```python
import pandas as pd
df = pd.read_csv('data.csv')
print(df.describe())
```

## Interview Questions & Answers
**Q1: What is the difference between Pandas and Numpy?**
A: Numpy is mainly for numerical array operations, while Pandas is for tabular data with labeled axes.

**Q2: How do you read a CSV file using Pandas?**
A: Use `pd.read_csv('filename.csv')`.

**Q3: What is a DataFrame?**
A: A DataFrame is a 2-dimensional labeled data structure in Pandas, similar to a spreadsheet or SQL table.

## References
- [Pandas Documentation](https://pandas.pydata.org/docs/)
- [Numpy Documentation](https://numpy.org/doc/)
