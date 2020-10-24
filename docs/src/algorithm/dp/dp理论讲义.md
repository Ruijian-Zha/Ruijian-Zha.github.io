# dp理论讲义

::: tip
内容来源 ：bilibili 花花酱Leetcode :tada:
:::

**DP:** Dynamic Programming

1. **optimal substructure**
    - 将主问题分成子问题，找到每个子问题的最优解然后拼在一起
2. **overlapping sub-problems**
    - 子问题 only compute once and store the solution for future use
    - reduce time complexity (exponential to polynomial)
    - if sub-problem don't overlap -> "divide and conquer"
3. **No-after effect**
    - the optimal solution of a subproblem will not change when it war used to solve a bigger problem optimally

**结构理解**：<br>
**Top-down**: recursion with memoization <br>
**Bottom-up**: DP

**Leetcode**:
[Leetcode 70. 爬楼梯(easy)](https://demo.codimd.org/s/Hy35wVZOw)
> 递归 --> 记忆化递归 --> dp


