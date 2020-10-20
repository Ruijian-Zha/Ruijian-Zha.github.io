# 朴素的Dijkstra算法

## 样题
我们从某个节点 K 发出一个信号。需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回 -1。

## 思路
集合S：当前已经确定最短距离的点
- dist[1] = 0, dist[i] = 正无穷
- for v: 1 ~ n
  - t <- 不在s中的距离最近的点
  - s <- t
  - 用t更新其他点的距离

朴素的Dijkstra算法往往是稠密图，用邻接矩阵来存储

## 算法模板

```cpp
int networkDelayTime(vector<vector<int>>& times,int N, int K){
    int g[N+1][N+1];
    memset(g, 0x3f, sizeof g);
    int dist[N+1];
    memset(dist, 0x3f, sizeof dist);
    dist[K]=0;
    
    for(auto t:times){
        g[t[0]][t[1]] = t[2];
    }
    bool st[N+1];
    memset(st, false, sizeof st);
    
    for(int i=0; i<N-1; i++){
        int t = -1;
        
        for(int j=1; j<=N; j++){
            if(!st[j] && (t==-1 || dist[j]<dist[t]))
                t = j;
        }
        
        st[t] = true;
        
        for(int j=1; j<=N; j++){
            dist[j] = min(dist[j], dist[t]+g[t][j]);
        }
    }
    
    int res = 0;
    for(int i=1; i<=N; i++){
        res = max(res, dist[i]);
    }
    if(res == 0x3f3f3f3f/2) return -1;
    return res;
}
```

时间复杂是 O(n2+m), n 表示点数，m 表示边数

## 题目

- [LeetCode 743. Network Delay Time (medium)](https://demo.codimd.org/s/r1wc025PP)
