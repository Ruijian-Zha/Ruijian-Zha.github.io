# Kruskal算法

- 将所有边按权重从小到大排序 O(mlogm)
- 枚举每条边`u <--> v`,权重w
  - if a,b不连通
    - 将这条边加入集合中

## 应用场景

稀疏图的 最小生成树

## 代码实现

- [Leetcode 1584. 连接所有点的最小费用（medium)](https://demo.codimd.org/s/ByaOsWkuD)

```cpp
class Solution {
private:
    vector<int> parent;
    int part = 0;
public:
    struct Edge{
        int a, b, w;
        bool operator<(const Edge& e) const {
            return w < e.w;
        }
    };

    int minCostConnectPoints(vector<vector<int>>& points) {
        int n = points.size();
        if(n <= 1) return 0;
        //connect每一行是两个顶点和权重
        vector<Edge> connect;
        for(int i = 0; i < n; i ++){
            for(int j = i + 1; j < n; j ++){
                connect.push_back({i, j, 
                abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1])});
            }
        }
        return minCost(n, connect);
    }
    
    int find(int a) {
        if (parent[a] == a)
            return a;
        parent[a] = find(parent[a]);
        return parent[a];
    }
    void uni(int a, int b) {
        int pa = find(a);
        int pb = find(b);
        if (pa == pb)
            return;
        parent[pa] = pb;
        part --;
    }
    
    int minCost(int n, vector<Edge>& connect) {
        part = n;
        parent = vector<int>(n, 0);
        for (int i = 0; i < n; ++i)
            parent[i] = i;
        //把所有边按权值进行排序
        sort(connect.begin(), connect.end());
        int res = 0;
        for (Edge& conn : connect) {
            int pa = find(conn.a);
            int pb = find(conn.b);
            if (pa != pb) {
                uni(conn.a, conn.b);
                res += conn.w;
            }
            if (part == 1)
                return res;
        }
        return -1;
    }
};
```
