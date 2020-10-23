# Bellman-Ford算法

## 样题
给定一个n个点m条边的有向图，图中可能存在重边和自环， 边权可能为负数。
请你求出从1号点到n号点的最多经过k条边的最短距离，如果无法从1号点走到n号点，输出impossible。
注意：图中可能 存在**负权回路** 。

## 算法思路

n个点，m条边

- 循环n次
  - 遍历所有边**u->v,权w** (松弛操作)
    - dist[v]=min(dist[v], dist[u]+w) //类似于 DP

## 应用

- 有边数限制的最短路，只能用Bellman-Ford算法，不能用spfa算法
- 如果有负权回路，最短路不一定存在
- Bellman-Ford算法可以求出是否有**负环**
  - 第n循环后，还有更新，说明路径上有n+1个点，也就是存在环，还有更新，说明环是负环
- 循环n次后, 所有的边`u->v,权w`满足三角不等式:`dist[v]<=dist[u]+w`

## 代码实现

- [LeetCode 787. Cheapest Flights Within K Stops (medium)](https://demo.codimd.org/s/Hy20JB3wP)

Bellman-Ford算法

```cpp
class Solution {
public:
    int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int K) {
        const int INF = 1e9;
        vector<int> cost(n, INF);
        cost[src] = 0;
        
        for(int i=0; i<= K; i++){
            vector<int> tmp(cost);
            for(const auto& p: flights){
                tmp[p[1]] = min(tmp[p[1]], cost[p[0]]+p[2]);
            }
            cost.swap(tmp);
        }
        return cost[dst] >= INF ? -1:cost[dst];
    }
};
```




