function filterByValue(items, value, directorsIds, actorsIds) {
  switch (value) {
    case "all":
      return items;
    case "directors":
      return items.filter((item) => directorsIds.includes(item.id));
    case "actors":
      return items.filter((item) => actorsIds.includes(item.id));
    case "drama":
      return items.filter((item) => item.genre.toLowerCase() === value);
    case "horror":
      return items.filter((item) => item.genre.toLowerCase() === value);
    case "comedy":
      return items.filter((item) => item.genre.toLowerCase() === value);
    // case "5actorsover":
    //   return items.filter((item) => );
    default:
      return items;
  }
}

export default filterByValue;
