import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechStart',
      message: 'This platform has completely transformed how we operate. The features are incredible and the support team is outstanding!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      message: 'The development experience is unmatched. We\'ve cut our deployment time by 50% since switching to this platform.',
      rating: 5
    },
    {
      name: 'Lisa Anderson',
      role: 'Product Manager',
      message: 'Intuitive, powerful, and reliable. Everything you need to scale your business effectively.',
      rating: 5
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What People Say</h2>
          <p className="text-xl text-gray-600">Join our satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-indigo-400 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.message}</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;