# Useful Standard Libraries in Python

Python's standard library offers many useful modules.

```python
import os
import sys
import datetime
import collections
import itertools
import functools

print(os.getcwd())
print(datetime.datetime.now())
```

**Key Points:**
- No need to install, included with Python.
- Explore documentation for more modules.

## Real-time Project Example
Counting word frequency in a file:

```python
from collections import Counter
with open('text.txt') as f:
    words = f.read().split()
    freq = Counter(words)
print(freq)
```

## Interview Questions & Answers
**Q1: What is the use of the `os` module?**
A: It provides functions for interacting with the operating system, such as file and directory operations.

**Q2: How do you get the current date and time in Python?**
A: Use `datetime.datetime.now()` from the `datetime` module.

**Q3: What is the purpose of the `itertools` module?**
A: It provides functions for efficient looping and working with iterators.

## References
- [Python Standard Library - Official Docs](https://docs.python.org/3/library/)
- [Standard Library - Real Python](https://realpython.com/python-standard-library/)
