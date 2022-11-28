var groupAnagrams = (words, map = new Map()) => {
  if (!words.length) return [];

  let res = {};
  for (let str of words) {
    let count = new Array(26).fill(0);
    for (let char of str) count[char.charCodeAt() - 97]++;
    let key = count.join('#');
    res[key] ? res[key].push(str) : (res[key] = [str]);
  }
  return Object.values(res);
};

console.log(groupAnagrams(['eat', 'tea', 'tan']));
