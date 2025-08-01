// components/FeaturedCourses.jsx
'use client';

import { useState } from 'react';

import CourseCard from './CourseCard';

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
    tag: '3D & Animation',
    tagColor: 'bg-teal-500',
    image: '/images/dev.jpg',
  },
  {
    id: 2,
    title: 'Web Development Fully Complete Guideline',
    lessons: 14,
    duration: '18h 20m',
    students: 47,
    rating: 5,
    reviews: 6,
    price: 90,
    tag: 'Development',
    tagColor: 'bg-slate-600',
    image: '/images/dev.jpg',
  },
  {
    id: 3,
    title: 'Photography training for the Artist in you',
    lessons: 14,
    duration: '13h 20m',
    students: 27,
    rating: 5,
    reviews: 3,
    price: 75,
    tag: 'Business',
    tagColor: 'bg-yellow-400',
    image: '/images/dev.jpg',
  },
  {
    id: 4,
    title: 'UI/UX Design Basics for Beginners',
    lessons: 12,
    duration: '10h 45m',
    students: 19,
    rating: 4,
    reviews: 5,
    price: 0, // Free
    tag: 'Design',
    tagColor: 'bg-blue-600',
    image: '/images/dev.jpg',
  },
  {
    id: 5,
    title: 'Mastering Digital Marketing in 2025',
    lessons: 18,
    duration: '20h 00m',
    students: 54,
    rating: 5,
    reviews: 8,
    price: 0, // Free
    tag: 'Marketing',
    tagColor: 'bg-green-600',
    image: '/images/dev.jpg',
  },
  {
    id: 6,
    title: 'Beginner’s Guide to Graphic Design',
    lessons: 11,
    duration: '9h 30m',
    students: 35,
    rating: 4,
    reviews: 4,
    price: 0, // Free
    tag: 'Graphic Design',
    tagColor: 'bg-purple-600',
    image: '/images/dev.jpg',
  },
];


const filterOptions = ['All', 'Business', 'Design', 'Graphic Design', 'Marketing', 'Free'];

export default function FeaturedCourses() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter logic
  const filteredCourses = courses.filter(course => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Free') return course.price === 0;
    return course.tag === activeFilter;
  });

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="text-left">
            <p className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-[10px] text-sm font-medium mb-3">
              Welcome our Propertyy.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between mb-8 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our{' '}
              <span className="text-blue-600 relative">
                Featured
                <svg
                  className="absolute left-0 -bottom-1 w-full h-2"
                  viewBox="0 0 200 15"
                  fill="none"
                >
                  <path
                    d="M2 10C50 5 100 2 198 8"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              Courses
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-3 text-sm">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <CourseCard key={course.id} {...course} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No courses found.</p>
          )}
        </div>
      </div>
    </section>
  );
}