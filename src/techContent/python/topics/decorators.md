# Decorators in Python

## Key Concepts
- **Definition:** Decorators are functions that modify the behavior of other functions or classes.
- **Syntax:** Use `@decorator_name` above a function definition.
- **Function Decorators:** Modify or enhance functions.
- **Class Decorators:** Modify or enhance classes.
- **Chaining Decorators:** Multiple decorators can be stacked.
- **Decorator with Arguments:** Decorators can accept arguments by adding another wrapper function.
- **functools.wraps:** Preserves metadata of the original function.

## Real-World Examples
- **Logging Function Calls:**
```python
def log_access(func):
    def wrapper(*args, **kwargs):
        print(f"Accessing {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@log_access
def get_user():
    print("User data")

get_user()
```
- **Authentication Decorator:**
```python
def require_login(func):
    def wrapper(*args, **kwargs):
        if not user_is_logged_in():
            raise Exception("Login required")
        return func(*args, **kwargs)
    return wrapper
```
- **Timing Decorator:**
```python
import time
def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"Elapsed: {time.time() - start}")
        return result
    return wrapper
```

## Best Practices
- Use `functools.wraps` to preserve function metadata.
- Keep decorators simple and focused.
- Document decorator behavior clearly.
- Avoid side effects in decorators.

## 50+ Interview Questions and Answers

**Q1: What is a decorator in Python?**
A: A function that takes another function and extends or modifies its behavior without explicitly changing it.

**Q2: How do you write a decorator that accepts arguments?**
A: Use an extra wrapper function to accept arguments and return the actual decorator.

**Q3: What are some common use cases for decorators?**
A: Logging, access control, memoization, timing, and validation.

**Q4: What is the output of this code?
```python
def dec(func):
    def wrap():
        print('A')
        func()
        print('B')
    return wrap
@dec
def f():
    print('C')
f()
```
A: A, C, B

**Q5: How do you chain multiple decorators?**
A: Stack them above the function definition.

**Q6: What is `functools.wraps` used for?**
A: To preserve the original function's metadata (name, docstring, etc.).

**Q7: How do you write a class decorator?**
A: Define a function that takes a class and returns a modified class.

**Q8: What is a parameterized decorator?**
A: A decorator that takes arguments and returns a decorator function.

**Q9: How do you apply a decorator to all methods in a class?**
A: Manually decorate each method or use a metaclass.

**Q10: What is the output of this code?
```python
def dec(func):
    def wrap(*a, **k):
        print('X')
        return func(*a, **k)
    return wrap
@dec
def f(x):
    print(x)
f(5)
```
A: X, 5

**Q11: How do you use a decorator to cache results?**
A: Use `functools.lru_cache` or write a custom memoization decorator.

**Q12: What is the difference between a decorator and a higher-order function?**
A: All decorators are higher-order functions, but not all higher-order functions are decorators.

**Q13: How do you pass arguments to a decorator?**
A: Use a wrapper function that returns the decorator.

**Q14: What is the use of `@staticmethod` and `@classmethod`?**
A: They are built-in decorators for static and class methods.

**Q15: How do you debug a decorator?**
A: Use print statements or a debugger inside the wrapper.

**Q16: What is the output of this code?
```python
def dec(func):
    def wrap():
        print('before')
        func()
        print('after')
    return wrap
@dec
def f():
    print('hello')
f()
```
A: before, hello, after

**Q17: How do you use a decorator to validate arguments?**
A: Check arguments in the wrapper before calling the function.

**Q18: What is the use of `@property`?**
A: It turns a method into a read-only attribute.

**Q19: How do you remove a decorator from a function?**
A: Redefine the function without the decorator.

**Q20: What is the output of this code?
```python
def dec(func):
    def wrap():
        print('A')
        func()
    return wrap
@dec
def f():
    print('B')
f()
```
A: A, B

**Q21: How do you use a decorator to enforce permissions?**
A: Check user permissions in the wrapper before calling the function.

**Q22: What is the use of `@abstractmethod`?**
A: Marks a method as abstract in an abstract base class.

**Q23: How do you use a decorator to retry a function?**
A: Implement retry logic in the wrapper.

**Q24: What is the output of this code?
```python
def dec(func):
    def wrap():
        print('1')
        func()
        print('2')
    return wrap
@dec
def f():
    print('3')
f()
```
A: 1, 3, 2

**Q25: How do you use a decorator to time a function?**
A: Record start and end time in the wrapper.

**Q26: What is the use of `@dataclass`?**
A: Automatically adds special methods to classes.

**Q27: How do you use a decorator to log function arguments?**
A: Print or log `args` and `kwargs` in the wrapper.

**Q28: What is the output of this code?
```python
def dec(func):
    def wrap():
        print('start')
        func()
        print('end')
    return wrap
@dec
def f():
    print('middle')
f()
```
A: start, middle, end

**Q29: How do you use a decorator to enforce types?**
A: Check types in the wrapper and raise errors if needed.

**Q30: What is the use of `@singledispatch`?**
A: Enables function overloading based on argument type.

**Q31: How do you use a decorator to count function calls?**
A: Increment a counter in the wrapper.

**Q32: What is the output of this code?
```python
def dec(func):
    def wrap():
        print('foo')
        func()
    return wrap
@dec
def f():
    print('bar')
f()
```
A: foo, bar

**Q33: How do you use a decorator to modify return values?**
A: Change the return value in the wrapper before returning.

**Q34: What is the use of `@total_ordering`?**
A: Adds missing comparison methods to classes.

**Q35: How do you use a decorator to restrict access?**
A: Check conditions in the wrapper and raise exceptions if not met.

**Q36: What is the output of this code?
```python
def dec(func):
    def wrap():
        print('hi')
        func()
    return wrap
@dec
def f():
    print('bye')
f()
```
A: hi, bye

**Q37: How do you use a decorator to cache results?**
A: Store results in a dict or use `functools.lru_cache`.

**Q38: What is the use of `@staticmethod`?**
A: Defines a static method that does not access class or instance data.

**Q39: How do you use a decorator to enforce singleton pattern?**
A: Return the same instance from the decorator.

**Q40: What is the output of this code?
```python
def dec(func):
    def wrap():
        print('x')
        func()
    return wrap
@dec
def f():
    print('y')
f()
```
A: x, y

**Q41: How do you use a decorator to throttle function calls?**
A: Add timing logic in the wrapper to limit call frequency.

**Q42: What is the use of `@classmethod`?**
A: Defines a method that receives the class as the first argument.

**Q43: How do you use a decorator to enforce input validation?**
A: Check arguments in the wrapper and raise errors if invalid.

**Q44: What is the output of this code?
```python
def dec(func):
    def wrap():
        print('start')
        func()
    return wrap
@dec
def f():
    print('end')
f()
```
A: start, end

**Q45: How do you use a decorator to profile a function?**
A: Measure execution time and log or print it.

**Q46: What is the use of `@property`?**
A: Turns a method into a read-only attribute.

**Q47: How do you use a decorator to enforce authentication?**
A: Check authentication in the wrapper before calling the function.

**Q48: What is the use of `@abstractmethod`?**
A: Marks a method as abstract in an abstract base class.

**Q49: How do you use a decorator to retry on failure?**
A: Implement retry logic in the wrapper.

**Q50: What is the use of `@lru_cache`?**
A: Caches function results for faster repeated calls.

## References
- [Python Decorators - Real Python](https://realpython.com/primer-on-python-decorators/)
- [Decorators - Programiz](https://www.programiz.com/python-programming/decorator)
- [functools — Higher-order functions and operations on callable objects](https://docs.python.org/3/library/functools.html)
