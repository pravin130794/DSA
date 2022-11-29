var containsDuplicate = (nums, numsSet = new Set()) => {
  for (const num of nums) {
    /* Time O(N) */
    if (numsSet.has(num)) return true;

    numsSet.add(num); /* Space O(N) */
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 4]));
