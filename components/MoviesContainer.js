const MoviesContainer = ({ title, movies, isTop }) => {
  return (
    <div className="flex flex-col px-2 mt-4 ">
      <h2 className="text-gray-100 font-medium mb-1">{title}</h2>

      <div className="flex overflow-x-auto scrollbar-hide gap-x-2">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={` ${
              isTop ? "min-w-top-rate-poster-card" : "min-w-poster-card"
            }  rounded cursor-pointer`}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.original_title}`}
              className="rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesContainer;
