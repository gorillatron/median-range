median-range
============

## install
```
npm install median-range
```

Create a median range with lower and upper bounds. Useful for creating paginations.

```
medianrange(10, 3) === [9, 10, 11]
```

with lower bounds
```
medianrange(10, 5, 9) === [9,10,11,12,13]
```

with upper bounds
```
medianrange(10, 5, 0, 11) === [7,8,9,10,11]
```
