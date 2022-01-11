import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import MainPoster from "../components/MainPoster";
import MoviesContainer from "../components/MoviesContainer";
import NavBar from "../components/NavBar";
import getGenres from "../lib/getGenres";

export default function Home({ fetchedMain, genresOfMain }) {
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    (async () => {
      const { results: fetchedPopular } = await (
        await fetch(`http://localhost:3000/api/movies/popular`)
      ).json();
      setPopular(fetchedPopular);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { results: fetchedNowPlaying } = await (
        await fetch(`http://localhost:3000/api/movies/upcoming`)
      ).json();
      setNowPlaying(fetchedNowPlaying);
    })();
  }, [popular]);

  useEffect(() => {
    (async () => {
      const { results: fetchedTopRated } = await (
        await fetch(`http://localhost:3000/api/movies/top-rated`)
      ).json();
      setTopRated(fetchedTopRated);
    })();
  }, [nowPlaying]);

  return (
    <div className="relative flex flex-col bg-black pb-16">
      <NavBar />
      <MainPoster
        url={`https://image.tmdb.org/t/p/w500${fetchedMain.poster_path}`}
        alt={fetchedMain.original_title}
        genresArr={genresOfMain}
      />
      {popular && (
        <MoviesContainer
          title="넷플릭스 인기 콘텐츠"
          movies={popular}
          isTop={false}
        />
      )}
      {nowPlaying && (
        <MoviesContainer
          title="지금 상영 중"
          movies={nowPlaying}
          isTop={false}
        />
      )}
      {topRated && (
        <MoviesContainer title="TOP 콘텐츠" movies={topRated} isTop={true} />
      )}
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
