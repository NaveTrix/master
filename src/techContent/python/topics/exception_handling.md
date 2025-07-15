# Exception Handling in Python

## Key Concepts
- **try/except:** Catch and handle exceptions.
- **finally:** Code that always runs, for cleanup.
- **else:** Runs if no exception occurs.
- **raise:** Manually raise exceptions.
- **Custom Exceptions:** Define by subclassing `Exception`.
- **Exception Hierarchy:** Built-in exceptions inherit from `BaseException`.
- **Multiple except Blocks:** Handle different exceptions separately.
- **Exception Chaining:** Use `raise ... from ...` to chain exceptions.

## Real-World Examples
- **File Handling:**
```python
try:
    with open('data.txt') as f:
        data = f.read()
except FileNotFoundError:
    print("File not found!")
```
- **User Input Validation:**
```python
try:
    age = int(input("Enter age: "))
except ValueError:
    print("Invalid input!")
```
- **Database Transactions:**
```python
try:
    db.begin()
    db.execute('...')
    db.commit()
except Exception:
    db.rollback()
```

## Best Practices
- Catch specific exceptions, not all.
- Use `finally` for cleanup (closing files, DB connections).
- Avoid bare `except:` unless re-raising or logging.
- Log exceptions for debugging.
- Use custom exceptions for clarity.

## 50+ Interview Questions and Answers

**Q1: What is the difference between 'except Exception' and 'except'?**
A: 'except Exception' catches most built-in exceptions, while a bare 'except' catches all exceptions, including system-exiting ones (not recommended).

**Q2: How do you raise a custom exception?**
A: Use the `raise` statement with an exception class: `raise ValueError('message')`.

**Q3: What is the purpose of the 'finally' block?**
A: Code in the 'finally' block always runs, regardless of whether an exception was raised.

**Q4: How do you catch multiple exception types?**
A: Use multiple except blocks or a tuple: `except (TypeError, ValueError):`

**Q5: What is exception chaining?**
A: Using `raise ... from ...` to indicate one exception was caused by another.

**Q6: How do you log exceptions?**
A: Use the `logging` module in the except block.

**Q7: What is the output of this code?
```python
try:
    1/0
except ZeroDivisionError:
    print('Error')
finally:
    print('Done')
```
A: Error, Done

**Q8: How do you suppress exceptions?**
A: Use `contextlib.suppress` or catch and pass.

**Q9: What is the base class for all exceptions?**
A: `BaseException`.

**Q10: How do you re-raise an exception?**
A: Use `raise` with no arguments inside an except block.

**Q11: What is the use of the 'else' block in exception handling?**
A: Runs if no exception occurs in the try block.

**Q12: How do you handle exceptions in a loop?**
A: Place the try/except inside the loop.

**Q13: What is the output of this code?
```python
try:
    x = int('a')
except ValueError:
    print('fail')
else:
    print('ok')
```
A: fail

**Q14: How do you define a custom exception?**
A: Subclass `Exception` and optionally override `__init__`.

**Q15: What is the output of this code?
```python
try:
    print(1/0)
except Exception as e:
    print(type(e))
```
A: <class 'ZeroDivisionError'>

**Q16: How do you catch all exceptions except system-exiting ones?**
A: Use `except Exception:`

**Q17: What is the use of `assert`?**
A: Raises `AssertionError` if the condition is false.

**Q18: How do you handle exceptions in a function?**
A: Use try/except inside the function.

**Q19: What is the output of this code?
```python
try:
    print('A')
finally:
    print('B')
```
A: A, B

**Q20: How do you propagate an exception?**
A: Let it bubble up or use `raise`.

**Q21: What is the use of `try`/`finally`?**
A: Ensures cleanup code runs after a block, even if an error occurs.

**Q22: How do you catch and ignore an exception?**
A: Use `except Exception: pass`

**Q23: What is the output of this code?
```python
try:
    print(1/0)
except ZeroDivisionError:
    print('fail')
else:
    print('ok')
finally:
    print('done')
```
A: fail, done

**Q24: How do you handle nested exceptions?**
A: Use nested try/except blocks.

**Q25: What is the use of `contextlib.suppress`?**
A: Suppresses specified exceptions in a block.

**Q26: How do you handle exceptions in threads?**
A: Catch exceptions inside the thread function.

**Q27: What is the output of this code?
```python
try:
    raise ValueError('x')
except ValueError as e:
    print(e)
```
A: x

**Q28: How do you handle exceptions in async code?**
A: Use try/except in async functions.

**Q29: What is the use of `sys.exc_info()`?**
A: Returns info about the most recent exception.

**Q30: How do you handle exceptions in context managers?**
A: The `__exit__` method receives exception info and can handle or suppress it.

**Q31: What is the output of this code?
```python
try:
    print('A')
    1/0
except:
    print('B')
finally:
    print('C')
```
A: A, B, C

**Q32: How do you catch multiple exceptions in one block?**
A: Use a tuple: `except (TypeError, ValueError):`

**Q33: What is the use of `raise ... from ...`?**
A: Chains exceptions for better traceback.

**Q34: How do you handle exceptions in file operations?**
A: Use try/except around file code.

**Q35: What is the output of this code?
```python
try:
    print('A')
    raise Exception('B')
except Exception as e:
    print(e)
finally:
    print('C')
```
A: A, B, C

**Q36: How do you handle exceptions in recursive functions?**
A: Use try/except inside the recursive call.

**Q37: What is the use of `logging.exception()`?**
A: Logs the exception traceback.

**Q38: How do you handle exceptions in generators?**
A: Use try/except inside the generator function.

**Q39: What is the output of this code?
```python
try:
    print('A')
    1/0
except ZeroDivisionError:
    print('B')
finally:
    print('C')
```
A: A, B, C

**Q40: How do you handle exceptions in decorators?**
A: Use try/except in the wrapper function.

**Q41: What is the use of `Exception.args`?**
A: Stores arguments passed to the exception.

**Q42: How do you handle exceptions in contextlib.contextmanager?**
A: Use try/except around the yield statement.

**Q43: What is the output of this code?
```python
try:
    print('A')
    raise Exception('B')
except Exception as e:
    print(e)
finally:
    print('C')
```
A: A, B, C

**Q44: How do you handle exceptions in multiprocessing?**
A: Catch exceptions in the worker function and communicate via queues.

**Q45: What is the use of `BaseException`?**
A: The base class for all exceptions.

**Q46: How do you handle exceptions in property methods?**
A: Use try/except inside the property method.

**Q47: What is the output of this code?
```python
try:
    print('A')
    raise Exception('B')
except Exception as e:
    print(e)
finally:
    print('C')
```
A: A, B, C

**Q48: How do you handle exceptions in lambda functions?**
A: Use try/except inside the lambda or wrap the call.

**Q49: What is the use of `traceback` module?**
A: Prints or formats exception tracebacks.

**Q50: How do you handle exceptions in class methods?**
A: Use try/except inside the method.

## References
- [Python Exceptions - Programiz](https://www.programiz.com/python-programming/exception-handling)
- [Python Exception Handling - Real Python](https://realpython.com/python-exceptions/)
- [PEP 3134 -- Exception Chaining and Embedded Tracebacks](https://peps.python.org/pep-3134/)
