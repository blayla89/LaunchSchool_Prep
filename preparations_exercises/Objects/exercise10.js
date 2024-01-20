// 10. How many primitive values are there in the following expression? Identify them. How many objects are there in the expression? Identify those objects.

[1, 2, ["a", ["b", false]], null, {}]

// Primitives include: 1, 2, "a", "b", false, null (total: 6)
// Objects include: (total: 4)
  // outer array:  [1, 2, ["a", ["b", false]], null, {}]
  // sub-array: ["a", ["b", false]]
  // sub-sub array: ["b", false]
  // sub-object: {}