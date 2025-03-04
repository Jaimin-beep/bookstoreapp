import React from 'react'
import Cards from "./Cards"
import { Link } from "react-router-dom";
import list from "../../public/list.json"

function Course() {
  return (
    <>
     <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          Whether you're just getting started or looking to sharpen your skills, our courses are designed to provide you with the knowledge and tools you need to succeed. We offer a wide range of courses that cater to all levels, from beginners to advanced professionals. Dive into the world of web development, design, and more, with hands-on lessons and expert guidance.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div> 
    </>
  )
}

export default Course