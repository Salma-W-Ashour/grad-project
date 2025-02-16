import React from "react";

export default function OurVision() {
  return (
    <>
      <section
        class="relative bg-cover bg-center h-[50vh]"
        style="background-image: url('imgs/nav-and-hero-final (1).jpg')"
      ></section>
      <div class="text-center text-white flex-grow">
        <h1 class="text-4xl font-bold mb-4">Find Your Perfect Hotel</h1>
        <p class="mb-8 text-lg">
          Explore hotels, resorts, and more around the world.
        </p>

        <form class="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-4 max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Destination or Hotel Name"
            class="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3 md:mb-0 md:mr-3"
          />
          <input
            type="date"
            class="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3 md:mb-0 md:mr-3"
          />
          <button
            type="submit"
            class="bg-blue-900 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}
