# File Handling in Python

## Key Concepts
- **Opening Files:** Use `open()` with modes: 'r', 'w', 'a', 'b', 'x', '+'.
- **Reading Files:** Use `read()`, `readline()`, `readlines()`.
- **Writing Files:** Use `write()`, `writelines()`.
- **Closing Files:** Always close files or use `with` for automatic closing.
- **File Modes:**
  - 'r': Read (default)
  - 'w': Write (overwrite)
  - 'a': Append
  - 'b': Binary
  - 'x': Create, fail if exists
  - '+': Read and write
- **Exception Handling:** Use try/except for robust file operations.
- **File Paths:** Use absolute or relative paths; use `os.path` for portability.
- **Working with Large Files:** Read in chunks or use generators.
- **Temporary Files:** Use `tempfile` module.
- **CSV, JSON, and Binary Files:** Use `csv`, `json`, and `pickle` modules for structured data.

## Real-World Examples
- **Saving User Logs:**
```python
user = 'alice'
with open('user_logs.txt', 'a') as log:
    log.write(f'{user} logged in\n')
```
- **Reading a Large File Line by Line:**
```python
with open('bigfile.txt') as f:
    for line in f:
        process(line)
```
- **Writing JSON Data:**
```python
import json
data = {'name': 'Alice', 'age': 30}
with open('user.json', 'w') as f:
    json.dump(data, f)
```
- **Handling File Not Found:**
```python
try:
    with open('nofile.txt') as f:
        data = f.read()
except FileNotFoundError:
    print('File not found!')
```
- **Temporary File:**
```python
import tempfile
with tempfile.NamedTemporaryFile(delete=False) as tmp:
    tmp.write(b'Hello')
    print(tmp.name)
```

## Best Practices
- Always use `with` for file operations.
- Handle exceptions for missing or locked files.
- Use modules for structured data (csv, json, pickle).
- Avoid reading large files into memory at once.
- Use `os.path` for cross-platform paths.

## 50+ Interview Questions and Answers

**Q1: What is the difference between 'w' and 'a' modes in file handling?**
A: 'w' mode overwrites the file if it exists, while 'a' mode appends to the file.

**Q2: How do you read a file line by line in Python?**
A: Use a for loop: `for line in open('file.txt'): `

**Q3: What is the use of the 'with' statement in file handling?**
A: It ensures the file is properly closed after its suite finishes, even if an exception is raised.

**Q4: How do you write binary data to a file?**
A: Open the file in 'wb' mode and use `write()` with bytes.

**Q5: How do you check if a file exists?**
A: Use `os.path.exists('filename')`.

**Q6: How do you delete a file in Python?**
A: Use `os.remove('filename')`.

**Q7: How do you read a file in chunks?**
A: Use `f.read(size)` in a loop.

**Q8: How do you handle file encoding?**
A: Pass the `encoding` parameter to `open()`.

**Q9: How do you copy a file?**
A: Use `shutil.copy('src', 'dst')`.

**Q10: How do you move a file?**
A: Use `shutil.move('src', 'dst')`.

**Q11: How do you list all files in a directory?**
A: Use `os.listdir('dirname')` or `glob.glob()`.

**Q12: How do you read a CSV file?**
A: Use the `csv` module.

**Q13: How do you write JSON data to a file?**
A: Use `json.dump(data, f)`.

**Q14: How do you read a file with a specific encoding?**
A: Use `open('file', encoding='utf-8')`.

**Q15: How do you handle file not found errors?**
A: Use try/except with `FileNotFoundError`.

**Q16: How do you append to a file?**
A: Open in 'a' mode and use `write()`.

**Q17: How do you read a file into a list of lines?**
A: Use `f.readlines()`.

**Q18: How do you write multiple lines to a file?**
A: Use `writelines()` with a list of strings.

**Q19: How do you get the current file position?**
A: Use `f.tell()`.

**Q20: How do you change the file position?**
A: Use `f.seek(offset)`.

**Q21: How do you close a file manually?**
A: Use `f.close()`.

**Q22: How do you open a file for both reading and writing?**
A: Use 'r+' or 'w+' mode.

**Q23: How do you read a file backwards?**
A: Read all lines and reverse the list, or use a library.

**Q24: How do you get file size?**
A: Use `os.path.getsize('filename')`.

**Q25: How do you rename a file?**
A: Use `os.rename('old', 'new')`.

**Q26: How do you create a new file only if it does not exist?**
A: Use 'x' mode with `open()`.

**Q27: How do you read a file as bytes?**
A: Open in 'rb' mode.

**Q28: How do you write a list to a file?**
A: Use `writelines()`.

**Q29: How do you read a file into a string?**
A: Use `f.read()`.

**Q30: How do you check if a file is open?**
A: Check `f.closed` attribute.

**Q31: How do you handle permission errors?**
A: Use try/except with `PermissionError`.

**Q32: How do you read a file with unknown encoding?**
A: Try 'utf-8', then fallback to 'latin-1' or use `chardet`.

**Q33: How do you read a file from a URL?**
A: Use `requests.get(url).text` or `urllib`.

**Q34: How do you write to a file in a different directory?**
A: Provide the full or relative path in `open()`.

**Q35: How do you read a file using a generator?**
A: Yield lines in a function.

**Q36: How do you read a file as JSON?**
A: Use `json.load(f)`.

**Q37: How do you write a dictionary to a file?**
A: Use `json.dump()` or `str()` and `write()`.

**Q38: How do you read a file with a BOM?**
A: Use `utf-8-sig` encoding.

**Q39: How do you check if a file is readable or writable?**
A: Use `f.readable()` and `f.writable()`.

**Q40: How do you read a file in binary mode?**
A: Open in 'rb' mode.

**Q41: How do you write a file in binary mode?**
A: Open in 'wb' mode.

**Q42: How do you read a file as a list of lines?**
A: Use `f.readlines()`.

**Q43: How do you write a string to a file?**
A: Use `f.write(string)`.

**Q44: How do you read a file with a context manager?**
A: Use `with open('file') as f:`.

**Q45: How do you handle file encoding errors?**
A: Use the `errors` parameter in `open()`.

**Q46: How do you read a file in chunks?**
A: Use `f.read(size)` in a loop.

**Q47: How do you write a file in append mode?**
A: Open in 'a' mode.

**Q48: How do you read a file as a dictionary?**
A: Use `csv.DictReader` or `json.load()`.

**Q49: How do you write a list of dictionaries to a file?**
A: Use `csv.DictWriter` or `json.dump()`.

**Q50: How do you read a file with a specific newline character?**
A: Use the `newline` parameter in `open()`.

## References
- [Python File Handling - W3Schools](https://www.w3schools.com/python/python_file_handling.asp)
- [Reading and Writing Files - Real Python](https://realpython.com/read-write-files-python/)
- [Python File Handling - GeeksforGeeks](https://www.geeksforgeeks.org/file-handling-python/)
