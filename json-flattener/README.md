# JSON Flattener

For the purpose of this exercise,
flattening a JSON means only allowing
numbers, strings and empty arrays / objects to be values, everything
else must be encoded in the new JSON's keys in such a way that it describes the original path by which one could reach the value in the original JSON.

For example, the following path:

```javascript
"a.b.0.2.c"
```

Encodes the following path:

key `a` which points to an object with
key `b` which points to an array, whose
first `0` element is another array, whose
third `2` element is an object with a key `c`


Example:

Input:

```json
  {
    "a": {
      "b": {
        "c": 1
      },
      "d": [ 2, { "e": 3 } ],
      "f": [],
      "g": {}
    }
  }
```

Output:

```json
  {
    "a.b.c": 1,
    "a.d.0": 2,
    "a.d.2.e": 3,
    "a.f": [],
    "a.g": {}
  }
```