# Generators in Python

## Key Concepts
- **Definition:** Generators are iterators that yield items one at a time using the `yield` keyword.
- **Yield vs. Return:** `yield` produces a value and suspends the function, while `return` exits the function.
- **Generator Expressions:** Similar to list comprehensions but use parentheses.
- **Memory Efficiency:** Generators do not store all values in memory.
- **Statefulness:** Generators maintain their state between yields.
- **StopIteration:** Raised when the generator is exhausted.
- **Chaining Generators:** Generators can be composed for pipelines.
- **Send/Throw Methods:** Generators can receive values and exceptions.

## Real-World Examples
- **Reading Large Files:**
```python
def read_large_file(file_path):
    with open(file_path) as f:
        for line in f:
            yield line
```
- **Infinite Sequence:**
```python
def count_up():
    n = 0
    while True:
        yield n
        n += 1
```
- **Data Pipeline:**
```python
def filter_even(numbers):
    for n in numbers:
        if n % 2 == 0:
            yield n
```
- **Generator Expression:**
```python
squares = (x*x for x in range(10))
```

## Best Practices
- Use generators for large or infinite data streams.
- Prefer generator expressions for simple cases.
- Always handle `StopIteration` if manually iterating.
- Use `itertools` for advanced generator utilities.

## 50+ Interview Questions and Answers

**Q1: What is a generator in Python?**
A: An iterator that yields items one at a time using the `yield` keyword.

**Q2: How do you create a generator?**
A: Define a function with `yield` or use a generator expression.

**Q3: What is the difference between `yield` and `return`?**
A: `yield` produces a value and suspends the function; `return` exits the function.

**Q4: How do you use a generator expression?**
A: Use parentheses: `(x*x for x in range(5))`.

**Q5: What are the advantages of generators?**
A: Memory efficiency and lazy evaluation.

**Q6: How do you iterate over a generator?**
A: Use a for loop or `next()`.

**Q7: What is the output of this code?
```python
def gen():
    yield 1
    yield 2
for x in gen():
    print(x)
```
A: 1, 2

**Q8: How do you stop a generator?**
A: When it runs out of values, it raises `StopIteration`.

**Q9: How do you chain generators?**
A: Pass one generator's output to another.

**Q10: What is the use of `itertools`?**
A: Provides advanced generator-based utilities.

**Q11: How do you use `send()` with a generator?**
A: Use `g.send(value)` to send a value to the generator.

**Q12: What is the output of this code?
```python
def g():
    yield 1
    yield 2
print(list(g()))
```
A: [1, 2]

**Q13: How do you use `throw()` with a generator?**
A: Use `g.throw(Exception)` to raise an exception inside the generator.

**Q14: What is the use of `yield from`?**
A: Delegates part of a generator to another generator.

**Q15: How do you use a generator for infinite sequences?**
A: Use a while True loop with yield.

**Q16: What is the output of this code?
```python
def g():
    for i in range(3):
        yield i
print(next(g()))
```
A: 0

**Q17: How do you use a generator to filter data?**
A: Use an if condition with yield.

**Q18: What is the use of `next()`?**
A: Retrieves the next value from a generator.

**Q19: How do you use a generator to read a file line by line?**
A: Yield each line in a loop.

**Q20: What is the output of this code?
```python
def g():
    yield 1
    return
print(list(g()))
```
A: [1]

**Q21: How do you use a generator to flatten a list of lists?**
A: Yield items from each sublist.

**Q22: What is the use of `StopIteration`?**
A: Signals the end of a generator.

**Q23: How do you use a generator to produce Fibonacci numbers?**
A: Use a loop and yield the next number.

**Q24: What is the output of this code?
```python
def g():
    yield 1
    yield 2
    yield 3
for x in g():
    print(x)
```
A: 1, 2, 3

**Q25: How do you use a generator to process large data?**
A: Yield data in chunks.

**Q26: What is the use of `yield from` in Python 3.3+?**
A: Delegates part of a generator to another generator or iterable.

**Q27: How do you use a generator to implement coroutines?**
A: Use `send()` to send values into the generator.

**Q28: What is the output of this code?
```python
def g():
    yield 1
    yield 2
print(sum(g()))
```
A: 3

**Q29: How do you use a generator to generate prime numbers?**
A: Use a loop and yield primes.

**Q30: What is the use of `yield` in recursion?**
A: Allows recursive generators for tree traversal, etc.

**Q31: How do you use a generator to paginate results?**
A: Yield a page of results at a time.

**Q32: What is the output of this code?
```python
def g():
    yield 1
    yield 2
    yield 3
print(list(g()))
```
A: [1, 2, 3]

**Q33: How do you use a generator to merge sorted lists?**
A: Use `heapq.merge()` or custom logic.

**Q34: What is the use of `yield` in event-driven programming?**
A: Pause and resume execution based on events.

**Q35: How do you use a generator to implement pipelines?**
A: Chain multiple generators together.

**Q36: What is the output of this code?
```python
def g():
    yield 1
    yield 2
    yield 3
for x in g():
    print(x)
```
A: 1, 2, 3

**Q37: How do you use a generator to process streaming data?**
A: Yield data as it arrives.

**Q38: What is the use of `yield` in asynchronous programming?**
A: Used in async generators and coroutines.

**Q39: How do you use a generator to implement a state machine?**
A: Yield states and transition based on input.

**Q40: What is the output of this code?
```python
def g():
    yield 1
    yield 2
    yield 3
print(next(g()))
```
A: 1

**Q41: How do you use a generator to process log files?**
A: Yield each log entry.

**Q42: What is the use of `yield` in data science?**
A: Efficiently process large datasets.

**Q43: How do you use a generator to implement lazy evaluation?**
A: Yield values only when needed.

**Q44: What is the output of this code?
```python
def g():
    yield 1
    yield 2
    yield 3
print(list(g()))
```
A: [1, 2, 3]

**Q45: How do you use a generator to process API responses?**
A: Yield each response item.

**Q46: What is the use of `yield` in machine learning?**
A: Stream training data in batches.

**Q47: How do you use a generator to implement infinite streams?**
A: Use a while True loop with yield.

**Q48: What is the output of this code?
```python
def g():
    yield 1
    yield 2
    yield 3
for x in g():
    print(x)
```
A: 1, 2, 3

**Q49: How do you use a generator to process sensor data?**
A: Yield each sensor reading.

**Q50: What is the use of `yield` in web development?**
A: Stream responses to clients.

## References
- [Python Generators - Programiz](https://www.programiz.com/python-programming/generator)
- [Generators - Real Python](https://realpython.com/introduction-to-python-generators/)
- [Python Generators - GeeksforGeeks](https://www.geeksforgeeks.org/generators-in-python/)
