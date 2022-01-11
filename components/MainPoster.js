import { AiOutlinePlus } from "react-icons/ai";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GrPlayFill } from "react-icons/gr";

const MainPoster = ({ url, alt, genresArr }) => {
  return (
    <div>
      <img src={url} alt={alt} />
      <div className="flex justify-center items-center gap-x-2 z-10 -mt-3 bg-black bg-opacity-50">
        {genresArr?.map((genre, index) =>
          index !== genresArr.length - 1 ? (
            <div key={index} className="flex items-center gap-x-2">
              <span className="text-white">{genre}</span>
              <div className="w-1 h-1 rounded-full bg-yellow-500 last:disabled: "></div>
            </div>
          ) : (
            <span key={index} className="text-white">
              {genre}
            </span>
          )
        )}
      </div>
      <div className="flex justify-around mt-3">
        <div className="flex flex-col items-center text-white -ml-3">
          <AiOutlinePlus className=" text-2xl" />
          <h3 className="text-xs">내가 찜한 콘텐츠</h3>
        </div>
        <div className="flex items-center bg-white px-4 h-8 gap-x-2 -ml-8 rounded-sm">
          <GrPlayFill className=" text-xl" />
          <h3 className="text-sm font-medium tracking-wider">재생</h3>
        </div>
        <div className="flex flex-col items-center text-white">
          <IoIosInformationCircleOutline className=" text-2xl" />
          <h3 className="text-xs">정보</h3>
        </div>
      </div>
    </div>
  );
};

export default MainPoster;
