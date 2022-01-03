function filterByValue(items, value, directorsIds) {
    switch (value) {
        case "all":
            return items
        case "directors":
            return items.filter(item => directorsIds.includes(item.id))
        case "drama":
            console.log('fi')
            return items.filter(item => item.genre.toLowerCase() === value)    
        case "horror":
            return items.filter(item => item.genre.toLowerCase()  === value)    
        case "comedy":
            return items.filter(item => item.genre.toLowerCase()  === value)    
        default:
            return items;
    }
  }
  
  export default filterByValue;
  