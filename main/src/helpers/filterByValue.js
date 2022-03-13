function filterByValue(items, value, directorsIds, actorsIds, actors) {
  const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
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
    case "older50":
      return items.filter((item) => getAge(item.birth_date) > 50 );
    case "younger50":
      return items.filter((item) => getAge(item.birth_date) <= 50 );  
    case '5actorsover':
      return items.filter((item) => actors.filter(x => x.movie_id === item.id).length > 5);
    case '5actorsless':
      return items.filter((item) => actors.filter(x => x.movie_id === item.id).length < 5);
    default:
      return items;
  }
}

export default filterByValue;
