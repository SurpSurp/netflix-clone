import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

export default function Home({ result }) {
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  useEffect(() => {
    (async () => {
      const { fetchedPopular } = await (
        await fetch(`http://localhost:3000/api/movies/popular`)
      ).json();
      setPopular(fetchedPopular);
      const { fetchedUpcoming } = await (
        await fetch(`http://localhost:3000/api/movies/upcoming`)
      ).json();
      setUpcoming(fetchedUpcoming);
    })();
  }, []);
  console.log(upcoming);
  return (
    <div className=" flex flex-col bg-black h-screen">
      <NavBar />
      <div className="flex flex-col px-3 ">
        <h2 className="text-gray-100 text-2xl mb-3">인기 콘텐츠</h2>

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

// export async function getServerSideProps() {
//   const { results } = await (
//     await fetch(`http://localhost:3000/api/movies`)
//   ).json();
//   return {
//     props: {
//       results,
//     },
//   };
// }
