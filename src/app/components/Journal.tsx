import Image from 'next/image'
import React from 'react'

function Journal() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Journal</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((num) => (
            <li key={num} className="bg-white rounded-lg shadow-md overflow-hidden">
              <article className="flex flex-col h-full">
                <a href="#" className="block">
                  <div className="relative h-64">
                    <Image
                      fill
                      className="object-cover"
                      src={`/images/journal/${num}.jpg`}
                      alt={`Article ${num} image`}
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-sm text-blue-600 font-semibold mb-2">Category</p>
                    <h2 className="text-xl font-bold mb-3 line-clamp-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                    <div className="text-gray-600">
                      <p className="line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Journal