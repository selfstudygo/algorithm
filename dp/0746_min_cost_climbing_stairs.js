const minCostClimbingStairs = function(cost) {
    const r = [];
    if (cost.length < 3) {return Math.min(cost[0]|| 0, cost[1]|| 0); }
    r[0] = cost[0];
    r[1] = cost[1];
    for (let i = 2; i< cost.length + 1; i++) {
        r[i] = Math.min(r[i-1] , r[i-2]) + (cost[i] || 0);
    }
    return r.pop();
};

// need only last 2 record but wasting memory and do one more loop


const minCostClimbingStairsBetter = function(cost) {
    if (cost.length < 3) {return Math.min(cost[0]|| 0, cost[1]|| 0); }
    let c1 = cost[0];
    let c2 = cost[1];
    for (let i = 2; i< cost.length; i++) {
        const sum = Math.min(c1 , c2) + cost[i];
        c1 = c2;
        c2 = sum;
    }
    return Math.min(c1, c2);
};