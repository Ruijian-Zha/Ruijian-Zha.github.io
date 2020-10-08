# KMP 算法

::: tip
内容来源 ：bilibili 花花酱 :tada:

[视频链接](https://www.bilibili.com/video/BV1PA411h7VY?from=search&seid=14633182677430781061)

:::

```
String searching problem:
	Given a string s and a pattern p, find the all occurences of p in s.
Eg.
	a = "aba", b = "ababa" => [0, 2] 
```

**Guaranteed worst case** : O(m+n)

Two stage:

- Pre-processing : table building O(m)
- Matching: O(n)

Space complexity: O(m)

## 代码模板

```python
def Build(p: str) -> List[int]:
	m = len(p)
	nxt = [0,0]
	j = 0
	for i in range(1, m):
        while j>0 and p[i] != p[j]:
            j = nxt[j]
        if p[i] == p[j]:
            j += 1
        nxt.append(j)
    return nxt
```

```python
def Math(s: str, p: str) -> List[int]:
"""
Args:
	s: input string
	p: pattern to search
"""
	n, m = len(s), len(p)				
	nxt = Build(p) 	#build next table
	ans = []   #matched dices
	j = 0		
	for i in range(n):  #i, j: pointer of s and p respectively
		while j > 0 and s[i] != p[j]: # fail then jump until a match or j==0
			j = nxt[j]
		if s[i] == p[j]  # match then check next pair (i++, j++)
			j+= 1
		if j == m:	# found a full mathch
			ans.append(i-m+1)
			j = nxt[j]  # jump as it failed
	return ans
```









