// components/CourseCard.jsx
import Image from 'next/image';
import { Book, Clock3, Users, Star } from 'lucide-react';

export default function CourseCard({
  image,
  tag,
  tagColor,
  title,
  lessons,
  duration,
  students,
  rating,
  reviews,
  price,
  instructor = "Eduvalt"
}) {
  return (
    <div style={{ all: 'unset' }}>
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <div className="relative w-full h-48 md:h-56 lg:h-64">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
        <span
          className={`absolute top-3 left-3 text-white text-xs md:text-sm font-medium px-3 py-1 rounded-full ${tagColor}`}
        >
          {tag}
        </span>
      </div>
      
      <div className=" text-left p-4 md:p-5">
        {/* Meta Information */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Book size={16} className="text-gray-400" />
            <span>{lessons} Lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock3 size={16} className="text-gray-400" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} className="text-gray-400" />
            <span>{students} Students</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg  font-semibold text-slate-800 leading-snug mb-4 min-h-[3rem]">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {Array.from({ length: 5 }, (_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
              />
            ))}
          </div>
          <span className="text-gray-500 text-sm">({reviews})</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
              <Image
                src="/images/avatar.png"
                alt={instructor}
                width={32}
                height={32}
                className="rounded-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-blue-500 rounded-full items-center justify-center text-white text-sm font-medium hidden">
                {instructor.charAt(0)}
              </div>
            </div>
            <span className="text-gray-600 text-sm font-medium">{instructor}</span>
          </div>
         <div className="text-blue-600 font-bold text-lg md:text-xl">
  {price === 0 ? 'Free' : `$${price.toFixed(2)}`}
</div>

        </div>
      </div>
    </div>
    </div>
  );
}
