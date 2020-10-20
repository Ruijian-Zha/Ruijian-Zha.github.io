# 堆优化版的Dijkstra算法

## 样题
我们从某个节点 K 发出一个信号。需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回 -1。

## 思路
集合S：当前已经确定最短距离的点
- dist[1] = 0, dist[i] = 正无穷
- for v: 1 ~ n 
  - t <- 不在s中的 与起始点距离最近的点 ；小顶堆维护 O(logN)
  - s <- t; O(1)
  - 用t更新其他点的距离 ; O(mlogN)

稀疏图用堆优化版的Dijkstra算法

## 时间复杂度

O(mlogN)

## 代码实现

堆优化版的Dijkstra算法有点像宽搜

```cpp
class Solution {
public:
    int networkDelayTime(vector<vector<int>>& times, int N, int K) {
        const int INF = 0x3f3f3f3f;
        typedef pair<int, int> PII; // first:距离; second: 几号点
        vector<bool> st(N+1, false); // 是否已得到最短距离
        vector<int> dist(N+1, INF); // 距离起始点的最短距离
        unordered_map<int, vector<PII>> graph; // 邻接表；u->v,权重w
        priority_queue<PII, vector<PII>, greater<PII>> heap; // 小顶堆；维护到起始点的最短距离和点

        for (auto &t: times){ // 初始化邻接表
            graph[t[0]].push_back({t[2],t[1]});
        }
        heap.push({0, K});
        dist[K] = 0;
        while(heap.size()){
            auto t = heap.top();
            heap.pop();
            int nxt = t.second, distance = t.first;
            if (st[nxt]) continue; // 之前更新过，是冗余备份
            st[nxt] = true;
            for (auto &p: graph[nxt]){
                if (dist[p.second] > distance + p.first){ // 用t去更新其他点到起始点的最短距离
                    dist[p.second] = distance + p.first;
                    // 因为我们改变不了 heap 里面的数值，我们只能放一个更有效率的进去，让另外一个变成冗余
                    heap.push({dist[p.second], p.second});
                }
            }
        }
        int ans = 0;
        for (int i = 1; i<=N; i++){
            ans = max(ans, dist[i]);
        }
        if (ans == INF) return -1;
        return ans;
    }
};
```

## 题目

- LeetCode 1368. Minimum Cost to Make at Least One Valid Path in a Grid (hard)
