# Real-time Python Interview Questions

This section contains real-time interview questions for freshers, covering both basic and advanced Python topics. Each question is designed to test practical knowledge and problem-solving skills.

## Expanded Interview Questions & Answers

1. **What is the difference between a list and a tuple in Python?**
   - Lists are mutable, tuples are immutable.
2. **How do you handle exceptions in Python? Give an example.**
   - Use try/except blocks. Example:
     ```python
     try:
         1/0
     except ZeroDivisionError:
         print('Error')
     ```
3. **Write a function to reverse a string in Python.**
   - `def reverse(s): return s[::-1]`
4. **How do you remove duplicates from a list?**
   - Convert to a set: `list(set(mylist))`
5. **Explain the use of decorators with an example.**
   - Decorators modify function behavior. Example:
     ```python
     def dec(f):
         def wrap():
             print('A'); f(); print('B')
         return wrap
     @dec
def f(): print('C')
f()
     ```
6. **What is a lambda function? Where would you use it?**
   - Anonymous function, used for short, simple functions.
7. **How do you read and write files in Python?**
   - Use `with open('file') as f:` and `f.read()` or `f.write()`.
8. **What is the purpose of the 'with' statement in file handling?**
   - Ensures files are closed automatically.
9. **How do you implement a queue using collections.deque?**
   - `from collections import deque; q = deque(); q.append(1); q.popleft()`
10. **What is the Global Interpreter Lock (GIL)?**
    - A mutex that prevents multiple native threads from executing Python bytecodes at once.
11. **What is a dictionary and how do you use it?**
    - Key-value pairs, access with `d[key]`.
12. **What is a set and how is it different from a list?**
    - Unordered, unique elements.
13. **How do you merge two dictionaries?**
    - `{**d1, **d2}` or `d1.update(d2)`.
14. **What is a generator?**
    - An iterator that yields values using `yield`.
15. **How do you use list comprehensions?**
    - `[x for x in range(5)]`
16. **What is the difference between '==' and 'is'?**
    - '==' checks value, 'is' checks identity.
17. **How do you check if a key exists in a dictionary?**
    - `key in d`
18. **What is a module and how do you import one?**
    - A Python file; use `import module`.
19. **How do you handle missing keys in a dictionary?**
    - Use `dict.get(key, default)`.
20. **What is a class in Python?**
    - Blueprint for creating objects.
21. **How do you create a custom exception?**
    - Subclass `Exception`.
22. **What is inheritance?**
    - Deriving a new class from an existing one.
23. **How do you check the type of an object?**
    - Use `type(obj)` or `isinstance(obj, type)`.
24. **What is polymorphism?**
    - Same interface, different implementations.
25. **How do you use super() in Python?**
    - To call methods from a parent class.
26. **What is encapsulation?**
    - Restricting access to methods/variables.
27. **What is a static method?**
    - Method not bound to instance or class; use `@staticmethod`.
28. **What is a class method?**
    - Method bound to class, not instance; use `@classmethod`.
29. **What is the difference between append() and extend()?**
    - `append()` adds one item, `extend()` adds all items from an iterable.
30. **How do you reverse a list?**
    - `mylist[::-1]` or `mylist.reverse()`.
31. **What is slicing?**
    - Extracting a portion of a sequence.
32. **How do you sort a list?**
    - `sorted(list)` or `list.sort()`.
33. **What is a property in Python?**
    - Managed attribute using `@property`.
34. **How do you use map(), filter(), and reduce()?**
    - `map(f, iterable)`, `filter(f, iterable)`, `reduce(f, iterable)`.
35. **What is a closure?**
    - Function that remembers variables from enclosing scope.
36. **How do you handle command-line arguments?**
    - Use `sys.argv` or `argparse`.
37. **What is the difference between deep copy and shallow copy?**
    - Deep copy copies nested objects; shallow copy does not.
38. **How do you create a virtual environment?**
    - `python -m venv env`
39. **What is pip?**
    - Python package installer.
40. **How do you install a package?**
    - `pip install package`
41. **What is unittest?**
    - Python's built-in testing framework.
42. **How do you write a docstring?**
    - Triple quotes below function/class definition.
43. **What is the use of __init__.py?**
    - Marks a directory as a Python package.
44. **How do you serialize and deserialize data?**
    - Use `pickle`, `json`, or `marshal`.
45. **What is a context manager?**
    - Object that defines `__enter__` and `__exit__` for use with `with`.
46. **How do you use logging in Python?**
    - Use the `logging` module.
47. **What is a thread?**
    - Smallest unit of a process; use `threading` module.
48. **How do you handle dates and times?**
    - Use `datetime` module.
49. **What is a decorator?**
    - Function that modifies another function's behavior.
50. **How do you use assert statements?**
    - `assert condition, 'message'`

## Real-time Project Example
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
