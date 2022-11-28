var isAnagram = (s, t) => {
  const isEqual = s.length === t.length;
  if (!isEqual) return false;

  return reorder(s) === reorder(t); /* Time O(N * logN) | Space O(N) */
};

const reorder = (str) =>
  str
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');

console.log(isAnagram('cat', 'car'));

console.log(isAnagram('anagram', 'nagaram'));
