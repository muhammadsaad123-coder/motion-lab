// components/FeaturedCourses.jsx
'use client';


import CourseCard from './CourseCard';
import { useEffect, useState } from "react";


const courses = [
  {
    id: 1,
    title: 'The Complete Guide to the Global Markets',
    lessons: 16,
    duration: '15h 20m',
    students: 3,
    rating: 5,
    reviews: 1,
    price: 82,
    tag: 'Map Animation ',
    tagColor: 'bg-teal-500',
    image: '/images/dev.jpg',
  },
  
  {
    id: 2,
    title: 'The Complete Guide to the Global Markets',
    lessons: 16,
    duration: '15h 20m',
    students: 3,
    rating: 5,
    reviews: 1,
    price: 82,
    tag: 'Documentary Style Editing',
    tagColor: 'bg-teal-500',
    image: '/images/dev.jpg',
  },
  {
    id: 3,
    title: 'Instagram Reels Editing Masterclass',
    lessons: 14,
    duration: '10h 00m',
    students: 25,
    rating: 4,
    reviews: 2,
    price: 60,
    tag: 'Reels Editing',
    tagColor: 'bg-pink-500',
    image: '/images/dev.jpg',
  },
  {
    id: 4,
    title: 'YouTube Automation Secrets',
    lessons: 18,
    duration: '12h 45m',
    students: 47,
    rating: 5,
    reviews: 6,
    price: 90,
    tag: 'YouTube Automation',
    tagColor: 'bg-red-500',
    image: '/images/dev.jpg',
  },
  {
    id: 5,
    title: 'How to Start Freelancing in 2025',
    lessons: 12,
    duration: '8h 30m',
    students: 32,
    rating: 4,
    reviews: 3,
    price: 50,
    tag: 'Freelancing',
    tagColor: 'bg-indigo-600',
    image: '/images/dev.jpg',
  },
  // {
  //   id: 6,
  //   title: 'UI/UX Design Basics for Beginners',
  //   lessons: 12,
  //   duration: '10h 45m',
  //   students: 19,
  //   rating: 4,
  //   reviews: 5,
  //   price: 0,
  //   tag: 'Free',
  //   tagColor: 'bg-blue-600',
  //   image: '/images/dev.jpg',
  // },
  
];



const filterOptions = ['All', 'Map Animation ', 'Documentary Style Editing', 'Reels Editing', 'YouTube Automation', 'Freelancing'];

export default function FeaturedCourses() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateClass, setAnimateClass] = useState("");

  // 🌟 Detect hash in URL and auto-set filter
  useEffect(() => {
    const hash = window.location.hash; // e.g. #map-animation
    if (hash) {
      const targetTag = hash.replace('#', '').replace(/-/g, ' ').toLowerCase().trim(); // e.g. "map animation"

      const matchedOption = filterOptions.find(option =>
        option.toLowerCase().trim() === targetTag
      );

      if (matchedOption) {
        setActiveFilter(matchedOption);
      }
    }
  }, []);

  // Animate underline
  useEffect(() => {
    setTimeout(() => setAnimateClass("underline-animate"), 100);
  }, []);

  // 🔎 Filter the courses based on activeFilter
  const filteredCourses = courses.filter(course => {
    if (activeFilter === 'All') return true;
    return course.tag.toLowerCase().trim() === activeFilter.toLowerCase().trim();
  });

  return (
    <section className="w-full bg-gray-50 py-16" id="featured-courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="text-left">
            <p className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-[10px] text-sm font-medium mb-3">
              Welcome our Property.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between mb-8 gap-4">
            <h2 className="text-3xl md:text-3xl font-bold text-slate-900">
              Our{' '}
              <span className={`highlight underline-svg ${animateClass}`}>
                Featured
                {/* SVG underline */}
              </span>{' '}
              Courses
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1 text-sm">
              {filterOptions.map(option => (
                <button
                  key={option}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    activeFilter === option
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                  onClick={() => setActiveFilter(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filtered Courses */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">
  {filteredCourses.length > 0 ? (
    filteredCourses.map(course => {
      const tagId = course.tag.toLowerCase().trim().replace(/\s+/g, '-'); // e.g. "Reels Editing" → "reels-editing"

      return (
        <div key={course.id} id={tagId}>
          <CourseCard {...course} />
        </div>
      );
    })
  ) : (
    <p className="text-center col-span-full text-gray-500">No courses found.</p>
  )}
</div>
      </div>
    </section>
  );
}