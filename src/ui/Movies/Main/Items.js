import MovieCard from "./MovieCard";


export default function Items({items}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 cursor-pointer">
      {items.map((item, index) => (
        <MovieCard key={item.id} title={item.title} genre={item.genre} release_date={item.release_date} image_url={item.image_url} id={item.id} index={index}/>
      ))}
    </div>
  );
}
