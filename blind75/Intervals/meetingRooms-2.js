var intervals = [
  [9, 12],
  [9, 14],
  [9, 16],
];

const splitIntervals = (intervals, start = [], end = []) => {
  for (const [startTime, endTime] of intervals) {
    start.push(startTime);
    end.push(endTime);
  }

  const comparator = (a, b) => a - b;

  start.sort(comparator);
  end.sort(comparator);

  return { start, end };
};

var minMeetingRooms = function (intervals) {
  const { start, end } = splitIntervals(intervals);
  let [minRooms, startIndex, endIndex] = [0, 0, 0];

  while (startIndex < intervals.length) {
    if (start[startIndex] < end[endIndex]) {
      startIndex += 1;
      minRooms += 1;
    } else {
      endIndex += 1;
      minRooms -= 1;
    }
  }

  return minRooms;
};

console.log(minMeetingRooms(intervals));
