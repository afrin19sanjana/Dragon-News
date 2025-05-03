import { FaStar, FaRegEye } from "react-icons/fa";
import { format } from "date-fns";

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
    <div className="card bg-base-100 shadow-md border">
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <div className="text-gray-500">
          <button className="btn btn-ghost btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>

      <figure>
        <img
          src={thumbnail_url}
          alt="News"
          className="w-full h-56 object-cover mt-4"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">{title}</h2>
        <p className="text-gray-600 text-sm">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
        </p>
        <p className="text-primary font-medium cursor-pointer">Read More</p>

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