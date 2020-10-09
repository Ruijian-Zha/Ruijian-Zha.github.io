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

```cpp
vector<int> Build(const string& p){
/*
    Args:
    	p: pattern to build  
*/
    int m = p.size();
    vector<int> nxt = {0, 0};
    for(int i=1, j=0; i<m; i++){
        while(j>0 && p[i]!=p[j]){
            j = nxt[j];
        }
        if(p[i]==p[j]) j++;
        nxt.push_back(j);
    }
    return nxt;
}
```

```cpp
vector<int> KMP(const string& s, const string& p){
/*
    Args:
	s: input string
	p: pattern to search
*/
    int n = s.size();
    int m = p.size();
    vector<int> nxt = Build(p); //build next table
    vector<int> ans;  //matched dices
    for(int i=0, j=0; i<n; i++){  //# O(n) i, j: pointer of s and p respectively
        while(j>0 && s[i]!=p[j]){ //# O(n) fail then jump until a match or j==0
            j = nxt[j];
        }
        if(s[i]==p[j]) j++; //match then check next pair (i++, j++)
        if(j == m){  //found a full mathch
            ans.push_back(i-m+1);
            j = nxt[j];  //jump as it failed
        }
    }
    return ans;
}
```

## next table <br>
![next](/next.png)

Define: 这个字符前面的字符串，前缀又是后缀的长度是多少

## 样例解释

![kmp2](/kmp2.png) <br>
当i前进到第13个字符的位置时，发现了内容不匹配。在next数组中，第6位D对应的数字是2，j将重新指向第二个字符串的index 2



## Leetcode 

[Leetcode 28. Implement strStr()](https://www.yuque.com/docs/share/bc327c57-4723-49a8-9815-99941b0a2602?#)

> C++ 公式的直接使用

Leetcode 459. Repeated Substring Pattern

Leetcode 1392. Longest Happy Prefix





