// components/FeaturedCourses.jsx
'use client';
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
];

export default function FeaturedCourses() {
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
            
            {/* Navigation Pills */}
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium">
                New
              </span>
              <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                All Courses
              </button>
              <button className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                Business
              </button>
              <button className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                Design
              </button>
              <button className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                Graphic Design
              </button>
              <button className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                Marketing
              </button>
            </div>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
