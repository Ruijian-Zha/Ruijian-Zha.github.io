# Floyd-Warshall算法

多源汇最短路

- for (k = 1; k<=n ; k++)
  - for (i = 1; i<= n; i++)
    - for (j = 1; j<=n; j++)
      - d[i,j] = min(d[i,j], d[i,k]+d[k,j]) 

## 算法原理

floyd算法是基于动态规划的

d[k, i, j] 表示 从i出发，只经过1~k到达j点的最短距离

## 题目

- [Leetcode 1334. 阈值距离内邻居最少的城市](https://demo.codimd.org/s/rkplz1kuw)

```cpp
// Author: Huahua
class Solution {
public:
  int findTheCity(int n, vector<vector<int>>& edges, int distanceThreshold) {
    // INT_MAX/2 两个数相加也不会overflow
    vector<vector<int>> dp(n, vector<int>(n, INT_MAX / 2));
    for (const auto& e : edges)      
      dp[e[0]][e[1]] = dp[e[1]][e[0]] = e[2];    
    
    for (int k = 0; k < n; ++k)
      for (int u = 0; u < n; ++u)
        for (int v = 0; v < n; ++v)
          dp[u][v] = min(dp[u][v], dp[u][k] + dp[k][v]);
    
    int ans = -1;
    int min_nb = INT_MAX;
    for (int u = 0; u < n; ++u) {
      int nb = 0;
      for (int v = 0; v < n; ++v)
        if (v != u && dp[u][v] <= distanceThreshold)
          ++nb;
      if (nb <= min_nb) {
        min_nb = nb;
        ans = u;
      }
    }
    
    return ans;
  }
};
```