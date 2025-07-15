# Python Interview Questions and Answers

This file contains categorized Python interview questions and answers for freshers and experienced candidates.

## Basic Interview Questions

**Q1: What is Python?**
A: Python is a high-level, interpreted programming language known for its readability and versatility.

**Q2: What are variables and how are they declared in Python?**
A: Variables are containers for storing data. In Python, you simply assign a value to a variable name (e.g., `x = 5`).

**Q3: What is the difference between a list and a tuple?**
A: Lists are mutable, tuples are immutable.

**Q4: How do you write comments in Python?**
A: Use `#` for single-line comments and triple quotes for multi-line comments.

**Q5: What is indentation and why is it important in Python?**
A: Indentation defines code blocks. Python uses indentation instead of braces.

**Q6: What is a function and how do you define one?**
A: A function is a reusable block of code. Define it using `def` keyword.

**Q7: What are *args and **kwargs?**
A: *args allows variable number of positional arguments, **kwargs allows variable number of keyword arguments.

**Q8: How do you handle exceptions in Python?**
A: Use try-except blocks.

**Q9: What is a dictionary and how do you use it?**
A: A dictionary stores key-value pairs. Access values using keys.

**Q10: What is a lambda function?**
A: An anonymous function defined with the `lambda` keyword.

---

## Intermediate Interview Questions

**Q1: What is a module and how do you import one?**
A: A module is a Python file containing code. Use `import module` to import it.

**Q2: How do you read and write files in Python?**
A: Use `with open('file') as f:` and `f.read()` or `f.write()`.

**Q3: What is a set and how is it different from a list?**
A: A set is an unordered collection of unique elements.

**Q4: How do you merge two dictionaries?**
A: Use `{**d1, **d2}` or `d1.update(d2)`.

**Q5: What is a generator?**
A: An iterator that yields values using `yield`.

**Q6: How do you use list comprehensions?**
A: `[x for x in range(5)]`

**Q7: What is the difference between '==' and 'is'?**
A: '==' checks value, 'is' checks identity.

**Q8: How do you check if a key exists in a dictionary?**
A: Use `key in d`.

**Q9: What is inheritance?**
A: Deriving a new class from an existing one.

**Q10: How do you check the type of an object?**
A: Use `type(obj)` or `isinstance(obj, type)`.

---

## Advanced Interview Questions

**Q1: What are decorators and how are they used?**
A: Decorators are functions that modify the behavior of other functions. Use `@decorator_name` syntax.

**Q2: What is a generator?**
A: A generator is an iterator that yields items one at a time using the `yield` keyword.

**Q3: Explain the Global Interpreter Lock (GIL).**
A: GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at once.

**Q4: How do you manage dependencies in a Python project?**
A: Use virtual environments and `pip` for dependency management.

**Q5: How do you test your Python code?**
A: Use `unittest` or `pytest` frameworks for writing and running tests.

**Q6: What is a context manager?**
A: An object that defines `__enter__` and `__exit__` for use with `with`.

**Q7: What is a closure?**
A: A function that remembers variables from its enclosing scope.

**Q8: How do you use map(), filter(), and reduce()?**
A: `map(f, iterable)`, `filter(f, iterable)`, `reduce(f, iterable)`.

**Q9: What is a property in Python?**
A: Managed attribute using `@property`.

**Q10: How do you use logging in Python?**
A: Use the `logging` module.

---

## Real-World Project Example
Suppose you are asked to process a CSV file and extract unique email addresses:

```python
import csv
emails = set()
with open('users.csv', 'r') as file:
    reader = csv.DictReader(file)
    for row in reader:
        emails.add(row['email'])
print(emails)
```

## References
- [Top Python Interview Questions - GeeksforGeeks](https://www.geeksforgeeks.org/python-interview-questions/)
- [Python Interview Questions - Real Python](https://realpython.com/interview-questions-python/)
- [Python Interview Questions - InterviewBit](https://www.interviewbit.com/python-interview-questions/)
