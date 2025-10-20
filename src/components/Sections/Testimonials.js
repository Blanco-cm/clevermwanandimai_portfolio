import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Product Manager",
      content: "Excellent work! Delivered beyond expectations.",
      avatar: "👨‍💼",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      content: "Highly skilled developer with great attention to detail.",
      avatar: "👩‍💻",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;