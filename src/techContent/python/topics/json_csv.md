# Working with JSON and CSV in Python

## Key Concepts
- **JSON (JavaScript Object Notation):** Hierarchical, human-readable data format. Use `json` module.
- **CSV (Comma-Separated Values):** Tabular, plain-text data format. Use `csv` module.
- **Reading JSON:** `json.load(f)` for files, `json.loads(s)` for strings.
- **Writing JSON:** `json.dump(obj, f)` for files, `json.dumps(obj)` for strings.
- **Reading CSV:** `csv.reader(f)` for rows, `csv.DictReader(f)` for dicts.
- **Writing CSV:** `csv.writer(f)` for rows, `csv.DictWriter(f)` for dicts.
- **Handling File Operations:** Always use `with` for safe file handling.
- **Encoding:** Specify encoding for non-ASCII data.
- **Error Handling:** Use try/except for robust parsing.
- **Data Conversion:** Convert between Python dict/list and JSON/CSV.

## Real-World Examples
- **Reading User Data from CSV:**
```python
import csv
with open('users.csv') as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row['email'])
```
- **Writing Data to JSON:**
```python
import json
data = {'name': 'Alice', 'age': 25}
with open('user.json', 'w') as f:
    json.dump(data, f)
```
- **Reading JSON from API Response:**
```python
import requests
response = requests.get('https://api.example.com/data')
data = response.json()
```
- **Converting CSV to JSON:**
```python
import csv, json
with open('data.csv') as f:
    reader = csv.DictReader(f)
    rows = list(reader)
with open('data.json', 'w') as f:
    json.dump(rows, f)
```

## Best Practices
- Always handle file encoding and errors.
- Use `with` for file operations.
- Validate data before processing.
- Use `DictReader`/`DictWriter` for structured CSV data.
- Avoid loading large files fully into memory; process in chunks if needed.

## 50+ Interview Questions and Answers

**Q1: How do you convert a Python dictionary to a JSON string?**
A: Use `json.dumps(dictionary)`.

**Q2: How do you read a CSV file as a list of dictionaries?**
A: Use `csv.DictReader(file)`.

**Q3: What is the difference between JSON and CSV?**
A: JSON is hierarchical, supports nested structures; CSV is flat and tabular.

**Q4: How do you write a list of dictionaries to a CSV file?**
A: Use `csv.DictWriter` and `writerows()`.

**Q5: How do you read JSON from a file?**
A: Use `json.load(f)`.

**Q6: How do you write JSON to a file?**
A: Use `json.dump(obj, f)`.

**Q7: How do you handle non-ASCII characters in JSON?**
A: Use `ensure_ascii=False` in `json.dump()` or `json.dumps()`.

**Q8: How do you handle missing fields in CSV?**
A: Use `DictReader` and check for missing keys.

**Q9: How do you convert a CSV file to a list of dictionaries?**
A: Use `csv.DictReader` and `list(reader)`.

**Q10: How do you convert a JSON string to a Python object?**
A: Use `json.loads(s)`.

**Q11: How do you handle large CSV files?**
A: Process line by line using a for loop.

**Q12: How do you pretty-print JSON?**
A: Use `json.dumps(obj, indent=2)`.

**Q13: How do you handle CSV files with different delimiters?**
A: Pass `delimiter` argument to `csv.reader` or `csv.writer`.

**Q14: How do you read a CSV file with headers?**
A: Use `csv.DictReader`.

**Q15: How do you write a CSV file with headers?**
A: Use `csv.DictWriter` and call `writeheader()`.

**Q16: How do you handle JSON decoding errors?**
A: Use try/except with `json.JSONDecodeError`.

**Q17: How do you handle CSV parsing errors?**
A: Use try/except with `csv.Error`.

**Q18: How do you convert a list to a CSV string?**
A: Use `csv.writer` with `io.StringIO`.

**Q19: How do you convert a dictionary to a JSON file?**
A: Use `json.dump(dictionary, file)`.

**Q20: How do you read a CSV file with a specific encoding?**
A: Use `open('file.csv', encoding='utf-8')`.

**Q21: How do you handle nested JSON data?**
A: Access nested fields with multiple keys.

**Q22: How do you convert JSON to CSV?**
A: Load JSON, flatten if needed, and write with `csv.DictWriter`.

**Q23: How do you skip rows in a CSV file?**
A: Use `next(reader)` to skip header or unwanted rows.

**Q24: How do you merge multiple CSV files?**
A: Read each file and write rows to a new file.

**Q25: How do you validate JSON data?**
A: Use a schema validator or manual checks.

**Q26: How do you handle blank lines in CSV?**
A: Use `csv.reader(f, skipinitialspace=True)` or filter out empty rows.

**Q27: How do you write a list of lists to a CSV file?**
A: Use `csv.writer` and `writerows()`.

**Q28: How do you read a CSV file as a list of lists?**
A: Use `csv.reader` and `list(reader)`.

**Q29: How do you handle JSON with comments?**
A: Standard JSON does not support comments; preprocess to remove them.

**Q30: How do you handle CSV files with quoted fields?**
A: The `csv` module handles quoted fields by default.

**Q31: How do you write a dictionary to a JSON string?**
A: Use `json.dumps(dictionary)`.

**Q32: How do you read a JSON string from a file?**
A: Use `f.read()` then `json.loads()`.

**Q33: How do you write a CSV file with a custom delimiter?**
A: Pass `delimiter` to `csv.writer`.

**Q34: How do you handle JSON arrays?**
A: Parse as a list in Python.

**Q35: How do you handle CSV files with missing values?**
A: Check for empty strings or use `DictReader`.

**Q36: How do you write a list of dictionaries to a JSON file?**
A: Use `json.dump(list_of_dicts, f)`.

**Q37: How do you read a CSV file with a BOM?**
A: Use `utf-8-sig` encoding.

**Q38: How do you write a CSV file with line terminators?**
A: Pass `lineterminator` to `csv.writer`.

**Q39: How do you handle JSON with datetime objects?**
A: Convert to string before dumping, or use a custom encoder.

**Q40: How do you read a CSV file with multiple delimiters?**
A: Preprocess the file or use regex.

**Q41: How do you write a JSON file with sorted keys?**
A: Use `sort_keys=True` in `json.dump()`.

**Q42: How do you read a CSV file with comments?**
A: Skip lines starting with `#`.

**Q43: How do you write a CSV file with Unicode data?**
A: Use `utf-8` encoding.

**Q44: How do you handle JSON with circular references?**
A: Avoid or flatten the structure; standard JSON does not support circular references.

**Q45: How do you read a CSV file with a header row?**
A: Use `csv.DictReader`.

**Q46: How do you write a CSV file with a header row?**
A: Use `csv.DictWriter` and call `writeheader()`.

**Q47: How do you handle JSON with large numbers?**
A: Use `int` or `float` in Python; be aware of precision limits.

**Q48: How do you read a CSV file with embedded newlines?**
A: The `csv` module handles quoted fields with newlines.

**Q49: How do you write a JSON file with indentation?**
A: Use `indent` parameter in `json.dump()`.

**Q50: How do you read a CSV file with a custom quote character?**
A: Pass `quotechar` to `csv.reader` or `csv.writer`.

## References
- [Python JSON - Programiz](https://www.programiz.com/python-programming/json)
- [Python CSV - Real Python](https://realpython.com/python-csv/)
- [Python CSV - GeeksforGeeks](https://www.geeksforgeeks.org/working-csv-files-python/)
- [Python JSON - W3Schools](https://www.w3schools.com/python/python_json.asp)
