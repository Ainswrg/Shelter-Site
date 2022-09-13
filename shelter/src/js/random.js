export const random = (array, pages, cut) => {
  const mixedArray = [];

  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const generateArr = function (arr) {
    const res = [];
    const addedIndex = [];
    for (; addedIndex.length < arr.length; ) {
      let index = getRandom(0, arr.length);
      if (!addedIndex.includes(index)) {
        res.push(arr[index]);
        addedIndex.push(index);
      }
    }
    return res;
  };

  for (let i = 0; i < pages; i++) {
    mixedArray.push(...generateArr(array).slice(cut));
  }
  return mixedArray;
};
