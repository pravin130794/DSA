var intervals = [
  [9, 12],
  [11, 14],
  [14, 16],
];

function meetingRooms(intervals) {
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  let prev = intervals.shift();

  for (const curr of intervals) {
    const [prevStart, prevEnd] = prev;
    const [currStart, currEnd] = curr;

    const hasOverlap = currStart < prevEnd;
    if (hasOverlap) return false;

    prev = curr;
  }

  return true;
}
console.log(meetingRooms(intervals));
