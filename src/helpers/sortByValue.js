function sortByValue(items, value, order=1) {
  return items.sort(function (a, b) {
    if (a[value] > b[value]) {
      return order ? 1 : -1;
    }
    if (b[value] > a[value]) {
      return order ? -1 : 1;
    }
    return 0;
  });
}

export default sortByValue;
