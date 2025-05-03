import { FaStar, FaRegEye } from "react-icons/fa";
import { format } from "date-fns";
import { IoMdShare } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    total_view,
    rating,
    thumbnail_url,
    published_date,
    details,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md ">
      <div className="flex items-center justify-between px-4 pt-4 bg-base-300">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {format(new Date(news.author.published_date), "dd-MM-yyyy")}
            </p>
          </div>
        </div>
        <div className="text-gray-500">
          <button className="btn btn-ghost btn-sm">
          <CiBookmark size={24} />
          </button>
          <button className="btn btn-ghost btn-sm">
          < IoMdShare size={24} />
          </button>
        </div>
      </div>
      <div className="">
         <h2 className="card-title text-lg  mt-4 pl-2 font-bold">{title}</h2></div>

      <figure>
        <img
          src={thumbnail_url}
          alt="News"
          className="w-full h-56 object-cover mt-4"
        />
      </figure>

      <div className="card-body">
       
        <p className="text-gray-600 text-sm">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
        </p>
        <p className="text-secondary font-medium cursor-pointer">Read More</p>

        <div className="flex justify-between items-center mt-2 text-sm">
          <div className="flex items-center gap-1 text-orange-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={i < rating.number ? "text-orange-400" : "text-gray-300"}
              />
            ))}
            <span className="text-gray-700 font-medium ml-1">
              {rating.number}
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FaRegEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;