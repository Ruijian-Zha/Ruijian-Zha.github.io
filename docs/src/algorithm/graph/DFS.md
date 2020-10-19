# DFS

### 递归

递归即为闭包

```
func dfs(){
    doSomeThing()
    dfs()
    doAnotherThing()
}
```

### 回溯

回溯法，又称 **试探法**，当探索到 某一步 时，发现原先 选择的路径 到不了目标，就退回一步重新选择，这种走不通就退回再走的方法叫做**回溯法**

```
func dfs(){
    change()
    dfs()
    unchange()
}
```

### dfs 递归 回溯 剪枝

```
function dfs(){ // 深搜
    doCounter() // 统计结果
    doCut() // 剪枝
    for all router { // 遍历所有路径
        doSomeThing()   // 搜索处理，保存当前状态等
        change()    // 当前棋盘变化
        dfs()       // 递归
        unchange()  // 回溯棋盘变化（恢复现场）
        doAnotherThing()
    }
}
```

## 适用于解决的问题特征

- 深度优先搜索经常用来处理数据量非常庞大的问题
  > 比如数独问题，用宽搜搜不完的
- 常用于解决**树形问题**
- **宽度优先搜索**经常用来处理最短路径，或最短距离
- 深度搜索不一定等于递归，也可以用循环来实现
- 所谓回溯就是恢复初始状态（恢复现场）
  > 如果我们的状态是整个棋盘，就需要恢复现场，如果是某一个格子，就不需要恢复现场

## 经典问题

引入几个简单问题，帮助大家理解概念

- 递归经典问题：汉诺塔
- 回溯经典问题：八皇后

### 递归经典：汉诺塔

三座塔A, B, C，求移动的最小次数

分三步：

1. 把上面的n-1，从`A->B`;
2. 把最下面的盘子，从`A->C`;
3. 把B上的n-1，从`B->A`;

- [面试题 08.06. 汉诺塔问题](https://demo.codimd.org/s/r10l9dOPv)

所有递归问题都可以转化为递推求解

> 比如题目LeetCode 62. Unique Paths (medium)可以使用递归求路径总数，也可以用动态规划，根据状态转换方程，递推求解

我的习惯是如果方便使用递推求解，可以直接递推，如果递归更容易理解，也可以递归

递归的问题是：容易出现爆栈，而且一旦逻辑出错，定位问题的难度也要高于递推

### 回溯经典：八皇后

**八皇后问题**是讲解**回溯**的经典案例

- [LeetCode 51. N-Queens (hard)](https://demo.codimd.org/s/ByDu_VKPP)

## 七天学会DFS

### 排列、组合、子集问题

排列、组合、子集问题是dfs中一类常见的问题，我们用接下来的三天时间练习这三种问题

题目特征：

- 组合、排列、子集 问题 属于一类基础问题，有一些问题也可以**抽象**成求解组合、排列、子集
- 这类问题**数据量不会太大**
- 往往可以用**DFS**进行**暴搜**求解

#### 第一天（排列问题）

题目特征: 请枚举所有排列

- LeetCode 46. Permutations (medium)

- LeetCode 47. Permutations II (medium)

拓展：

- LeetCode 996. Number of Squareful Arrays (hard

#### 第二天（组合问题）

求所有组合方案; 如果存在重复，则需要排序，过滤重复位置

题目特征: 请枚举所有组合

- LeetCode 77. Combinations (medium)

- LeetCode 39. Combination Sum (medium)

- LeetCode 40. Combination Sum II (medium)

- LeetCode 216. Combination Sum III (medium)

拓展：

- LeetCode 93. Restore IP Addresses (medium)

- LeetCode 131. Palindrome Partitioning (medium)

#### 第三天（子集问题）

题目特征: 请枚举所有子集

- LeetCode 78. Subsets (medium)

- LeetCode 90. Subsets II (medium)

### 棋盘搜索

棋盘搜索一般配合 `DFS + memorization`

记忆化：记录中间状态，回溯的时候能够按照某种规则依次迭代所有状态

#### 第四天（让我们来玩小游戏吧）

- LeetCode 51. N-Queens (hard)

- LeetCode 52. N-Queens II (hard)

- LeetCode 37. Sudoku Solver (hard)

- LeetCode 679. 24 Game (hard)

- LeetCode 529. Minesweeper (medium)

#### 第五天（解决点实际问题吧）

- [LeetCode 17. Letter Combinations of a Phone Number (medium)

- [LeetCode 351. Android Unlock Patterns (medium)

- [LeetCode 473. Matchsticks to Square (medium)

#### 第六天（迷宫问题）

- [LeetCode 79. Word Search (medium)

- [LeetCode 329. Longest Increasing Path in a Matrix (hard)

- [LeetCode 490. The Maze (medium)

- [LeetCode 505. The Maze II (medium)

#### 第七天（表达式中的DFS）

- LeetCode 22. Generate Parentheses (medium)

- LeetCode 282. Expression Add Operators (hard)

- LeetCode 131. Palindrome Partitioning (medium)

- LeetCode 301. Remove Invalid Parentheses (hard)

- LeetCode 306. Additive Number (medium)

#### 第八天（树形DFS)

- LeetCode 440. K-th Smallest in Lexicographical Order (hard)

### 其他问题

- LeetCode 526. Beautiful Arrangement (medium)



