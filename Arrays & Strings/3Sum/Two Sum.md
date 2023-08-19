# Two Sum

![98605cf3d66cdfb3aac9cc132077c7fb.png](../_resources/98605cf3d66cdfb3aac9cc132077c7fb.png)

![5979d5f7cd8e282786ab8e2d54d1dd88.png](../_resources/5979d5f7cd8e282786ab8e2d54d1dd88.png)

![7dd71c1a7c1e5a454d38734d3f5596ad.png](../_resources/7dd71c1a7c1e5a454d38734d3f5596ad.png)
 

### Approach : One-pass Hash Table
### Algorithm

It turns out we can do it in one-pass. While we are iterating and inserting elements into the hash table, we also look back to check if current element's complement already exists in the hash table. If it exists, we have found a solution and return the indices immediately.

![9e7f410191607680536656c179a2cac6.png](../_resources/9e7f410191607680536656c179a2cac6.png)