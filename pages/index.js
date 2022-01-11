import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import MainPoster from "../components/MainPoster";
import NavBar from "../components/NavBar";
import getGenres from "../lib/getGenres";

export default function Home({ fetchedMain, genresOfMain }) {
  const [popular, setPopular] = useState([]);

  // console.log(fetchedMain);

  useEffect(() => {
    (async () => {
      const { results: fetchedPopular } = await (
        await fetch(`http://localhost:3000/api/movies/popular`)
      ).json();
      setPopular(fetchedPopular);
    })();
  }, []);

  return (
    <div className="relative flex flex-col bg-black">
      <NavBar />
      <MainPoster
        url={`https://image.tmdb.org/t/p/w500${fetchedMain.poster_path}`}
        alt={fetchedMain.original_title}
        genresArr={genresOfMain}
      />

      <div className="flex flex-col px-3 mt-4 ">
        <h2 className="text-gray-100 text-lg mb-1">popular contents</h2>

        <div className="flex overflow-x-auto scrollbar-hide gap-x-3">
          {popular?.map((movie) => (
            <div
              key={movie.id}
              className="min-w-poster-card rounded cursor-pointer"
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
    </div>
  );
}

export async function getServerSideProps() {
  const {
    results: [, fetchedMain],
  } = await (await fetch(`http://localhost:3000/api/movies/upcoming`)).json();

  const genresOfMain = getGenres(fetchedMain.genre_ids);

  return {
    props: {
      fetchedMain,
      genresOfMain,
    },
  };
}
