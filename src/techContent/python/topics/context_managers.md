# Context Managers in Python

## Key Concepts
- **Definition:** Context managers handle setup and cleanup actions, commonly used with the `with` statement.
- **Custom Context Managers:** Implemented using `__enter__` and `__exit__` methods.
- **Resource Management:** Ensures resources (files, DB connections, locks) are released properly.
- **contextlib Module:** Use `contextlib.contextmanager` for simpler context managers with generators.
- **Nested Contexts:** Multiple context managers can be used in a single `with` statement.
- **Exception Handling:** Context managers can handle exceptions that occur within their block.

## Real-World Examples
- **File Handling:**
```python
with open('file.txt', 'r') as f:
    data = f.read()
```
- **Database Connection:**
```python
class DBConnection:
    def __enter__(self):
        print('Connect to DB')
        return self
    def __exit__(self, exc_type, exc_val, exc_tb):
        print('Disconnect from DB')

with DBConnection():
    print('Querying DB')
```
- **Lock Management (threading):**
```python
from threading import Lock
lock = Lock()
with lock:
    # critical section
    pass
```
- **Temporary Directory:**
```python
import tempfile
with tempfile.TemporaryDirectory() as tmpdirname:
    print('Created temp dir:', tmpdirname)
```

## Best Practices
- Always use context managers for file, network, and database operations.
- Prefer `with` over manual open/close or acquire/release.
- Use `contextlib` for simple cases.
- Handle exceptions in `__exit__` to avoid resource leaks.

## 50+ Interview Questions and Answers

**Q1: What is a context manager?**
A: An object that defines the runtime context to be established when executing a `with` statement.

**Q2: How do you create a custom context manager?**
A: By defining `__enter__` and `__exit__` methods in a class or using the `contextlib` module.

**Q3: What is the advantage of using context managers?**
A: They ensure resources are properly managed and released, even if errors occur.

**Q4: What does the `__enter__` method do?**
A: It sets up the context and returns the resource to be used in the `with` block.

**Q5: What does the `__exit__` method do?**
A: It handles cleanup actions and can suppress exceptions if needed.

**Q6: How do you use multiple context managers in one line?**
A: Separate them with commas: `with open('a') as f1, open('b') as f2:`

**Q7: What is the `contextlib` module?**
A: A standard library module that provides utilities for working with context managers.

**Q8: How do you write a context manager using a generator?**
A: Use the `@contextlib.contextmanager` decorator and yield the resource.

**Q9: Give an example of a context manager for timing code execution.**
A:
```python
import time
from contextlib import contextmanager
@contextmanager
def timer():
    start = time.time()
    yield
    print('Elapsed:', time.time() - start)
with timer():
    time.sleep(1)
```

**Q10: How can a context manager handle exceptions?**
A: The `__exit__` method receives exception type, value, and traceback, and can suppress or log them.

**Q11: What happens if `__exit__` returns True?**
A: The exception is suppressed and not propagated.

**Q12: Can you use context managers with network sockets?**
A: Yes, to ensure sockets are closed after use.

**Q13: What is a real-world use of context managers in web frameworks?**
A: Managing database sessions or transactions.

**Q14: How do you ensure a file is closed after reading?**
A: Use a context manager: `with open('file') as f:`

**Q15: What is the output of this code?
```python
class C:
    def __enter__(self): print('enter'); return self
    def __exit__(self, *a): print('exit')
with C(): print('body')
```
A: Prints 'enter', 'body', 'exit'.

**Q16: How do you create a context manager for a database transaction?**
A: Implement `__enter__` to begin and `__exit__` to commit/rollback.

**Q17: What is the benefit of using `with` for locks?**
A: Ensures locks are always released, even if an error occurs.

**Q18: Can you nest context managers?**
A: Yes, you can nest `with` statements.

**Q19: How do you suppress exceptions in a context manager?**
A: Return True from `__exit__`.

**Q20: What is the difference between `try/finally` and context managers?**
A: Context managers are more concise and reusable.

**Q21: How do you use a context manager for temporary files?**
A: Use `with tempfile.TemporaryFile() as f:`

**Q22: What is the purpose of the `as` keyword in `with`?**
A: It assigns the value returned by `__enter__` to a variable.

**Q23: Can you use context managers for logging?**
A: Yes, to set up and tear down logging handlers.

**Q24: How do you handle exceptions inside a context manager?**
A: Use try/except inside the `with` block or handle in `__exit__`.

**Q25: What is the output if an exception is raised in the `with` block?**
A: `__exit__` is always called, even if an exception occurs.

**Q26: How do you implement a context manager as a function?**
A: Use `@contextlib.contextmanager` and yield.

**Q27: What is the use of `contextlib.closing`?**
A: It turns objects with a `close()` method into context managers.

**Q28: Can you use context managers for environment variables?**
A: Yes, to temporarily set and restore environment variables.

**Q29: How do you chain context managers?**
A: Use multiple `with` statements or commas.

**Q30: What is the role of `yield` in a generator-based context manager?**
A: It separates setup and cleanup code.

**Q31: How do you test a context manager?**
A: Use unit tests to check resource acquisition and release.

**Q32: Can you use context managers for GUI resources?**
A: Yes, for managing windows, dialogs, etc.

**Q33: What is the output if `__exit__` raises an exception?**
A: The exception propagates up the call stack.

**Q34: How do you use context managers for transactions in ORMs?**
A: Begin transaction in `__enter__`, commit/rollback in `__exit__`.

**Q35: What is the use of `contextlib.suppress`?**
A: It suppresses specified exceptions within a block.

**Q36: Can you use context managers for temporary configuration changes?**
A: Yes, to set and restore configs.

**Q37: How do you use context managers for profiling code?**
A: Start profiler in `__enter__`, stop and report in `__exit__`.

**Q38: What is the use of `contextlib.ExitStack`?**
A: It manages a dynamic number of context managers.

**Q39: Can you use context managers for file locking?**
A: Yes, to acquire and release file locks.

**Q40: How do you use context managers for resource pools?**
A: Acquire resource in `__enter__`, release in `__exit__`.

**Q41: What is the use of `contextlib.redirect_stdout`?**
A: Temporarily redirects stdout to another file or object.

**Q42: Can you use context managers for temporary directories?**
A: Yes, with `tempfile.TemporaryDirectory()`.

**Q43: How do you use context managers for network connections?**
A: Open in `__enter__`, close in `__exit__`.

**Q44: What is the use of `contextlib.nullcontext`?**
A: Provides a no-op context manager.

**Q45: Can you use context managers for database cursors?**
A: Yes, to ensure cursors are closed after use.

**Q46: How do you use context managers for file uploads?**
A: Open file in `__enter__`, close in `__exit__`.

**Q47: What is the use of `contextlib.suppress`?**
A: Suppresses specified exceptions.

**Q48: Can you use context managers for thread pools?**
A: Yes, to manage pool lifecycle.

**Q49: How do you use context managers for subprocesses?**
A: Start process in `__enter__`, terminate in `__exit__`.

**Q50: What is the use of `contextlib.AsyncExitStack`?**
A: Manages async context managers in async code.

## References
- [Context Managers - Real Python](https://realpython.com/python-with-statement/)
- [Python Context Managers - Programiz](https://www.programiz.com/python-programming/context-manager)
- [PEP 343 -- The "with" Statement](https://peps.python.org/pep-0343/)
