# Prim算法

- dist[i] <- 正无穷
- for (i=0; i < n; i++) // 迭代n次，加入n个点
  - t <- 找到集合外距离最近的点
  - 用 t 更新其他点到**集合**的距离 (Dijkstra: 更新到起点的距离)
  - s[t] = true

## 朴素版Prim算法

### 代码实现

- [Leetcode 1584. 连接所有点的最小费用](https://demo.codimd.org/GSDaH6UkQOC1Z79wcn28PA?view)

```cpp
int minimumCost(int n, vector<vector<int>>& nums) {
	vector<int> dist(n, INT_MAX);
    dist[0] = 0;
    int ans = 0;
    int cur = 0;
    vector<bool> st(n, false);
    //逐次添加 n 个结点
    for(int i = 0; i < n; i ++){
        int minDist = INT_MAX;
        //找出未访问过的最近结点
        for(int i = 0; i < n; i ++){
            if(!st[i] && dist[i] < minDist){
                minDist = dist[i];
                cur = i;
            }
        }
        //标记为访问过
        st[cur] = true;
        ans += dist[cur];
        //更新其他结点的距离
        for(int i = 0; i < n; i ++){
            if(!st[i] && nums[cur][i] < dist[i]){
                dist[i] = nums[cur][i];
            }
        }
    }
    return ans;
}
```

### 时间复杂度

朴素版Prim O(n^2) 

适用于`稠密图`

## 堆优化版Prim算法

基本不用，只需要掌握 **朴素版Prim算法** 和 **Kruskal算法**





