# Unit Testing in Python

Unit testing ensures your code works as expected. Python provides `unittest` and `pytest` frameworks.

```python
import unittest

def add(a, b):
    return a + b

class TestAdd(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)

if __name__ == '__main__':
    unittest.main()
```

**Key Points:**
- Use assertions to check expected outcomes.
- `pytest` offers a simpler syntax and more features.

## Real-time Project Example
Testing a function in a web app:

```python
def get_user(id):
    # Simulate DB call
    return {"id": id, "name": "Alice"}

def test_get_user():
    assert get_user(1)["name"] == "Alice"
```

## Interview Questions & Answers
**Q1: What is the difference between unittest and pytest?**
A: `unittest` is built-in and uses classes, while `pytest` is third-party and supports simpler function-based tests and more features.

**Q2: How do you mock objects in Python tests?**
A: Use the `unittest.mock` module to replace parts of your system under test with mock objects.

**Q3: What is test discovery in pytest?**
A: pytest automatically finds tests by looking for files and functions that start with `test_`.

## References
- [Python Unit Testing - Programiz](https://www.programiz.com/python-programming/unit-test)
- [Getting Started With Testing in Python - Real Python](https://realpython.com/python-testing/)
