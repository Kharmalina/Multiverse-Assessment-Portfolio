import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Default from "../components/assets/Default.jpg";
import { useThemeContext } from "./ThemeProvider";

function SingleFact() {
  const { theme } = useThemeContext();

  const [dog, setDog] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchSingleDogData = async () => {
      try {
        const res = await fetch(
          `https://api.thedogapi.com/v1/breeds/search?q=${name}`
        );
        const data = await res.json();
        setDog(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleDogData();
  }, [name]);

  return (
    <>
      <section className="max-w-5xl mx-auto flex items-center justify-center h-screen">
        {dog.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:place-items-center"
          >
            <article>
              <figure
                className={`overflow-hidden rounded-lg shadow-lg ${
                  theme === "light" ? "shadow-gray-600" : "shadow-green-200"
                }`}
              >
                <img
                  className="shadow-lg rounded-lg hover:scale-125 cursor-pointer transition duration-150"
                  src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
                  alt={item.name}
                  onError={(e) => {
                    e.target.src = Default;
                  }}
                />
              </figure>
            </article>
            <article>
              <h1
                className={`text-3xl font-bold  mb-8 lg:text-5xl ${
                  theme === "light"
                    ? "bg-white text-stone-700"
                    : "bg-black opacity-80 text-green-100 z-50"
                }`}
              >
                {item.name}
              </h1>
              {item.description && (
                <p
                  className={` mb-8 text-sm lg:text-base leading-loose lg:leading-relaxed ${
                    theme === "light"
                      ? "bg-white text-stone-700"
                      : "bg-black opacity-80 text-green-100 "
                  }`}
                >
                  {item.description}
                </p>
              )}

              <ul className="text-sm text-slate-800 leading-loose lg:text-base lg:leading-relaxed">
                <li
                  className={`${
                    theme === "light"
                      ? "bg-white text-stone-700"
                      : "bg-black opacity-80 text-green-100 z-50"
                  }`}
                >
                  <span
                    className="font-bold 
                     
                    "
                  >
                    Bred For:
                  </span>{" "}
                  {item.bred_for}
                </li>
                <li
                  className={`${
                    theme === "light"
                      ? "bg-white text-stone-700"
                      : "bg-black opacity-80 text-green-100 z-50"
                  }`}
                >
                  <span className="font-bold ">Height:</span>{" "}
                  {item.height.metric} cm
                </li>
                <li
                  className={`${
                    theme === "light"
                      ? "bg-white text-stone-700"
                      : "bg-black opacity-80 text-green-100 z-50"
                  }`}
                >
                  <span className="font-bold">Weight:</span>{" "}
                  {item.weight.metric} kgs
                </li>
                <li
                  className={`${
                    theme === "light"
                      ? "bg-white text-stone-700"
                      : "bg-black opacity-80 text-green-100 z-50"
                  }`}
                >
                  <span className="font-bold ">Breed Group:</span>{" "}
                  {item.breed_group}
                </li>
                <li
                  className={`${
                    theme === "light"
                      ? "bg-white text-stone-700"
                      : "bg-black opacity-80 text-green-100 z-50"
                  }`}
                >
                  <span className="font-bold ">Lifespan:</span> {item.life_span}
                </li>
                <li
                  className={`${
                    theme === "light"
                      ? "bg-white text-stone-700"
                      : "bg-black opacity-80 text-green-100 z-50"
                  }`}
                >
                  <span className="font-bold ">Temperament:</span>{" "}
                  {item.temperament}
                </li>
              </ul>

              <Link
                to="/facts"
                className="inline-block btn bg-green-600 py-2 px-6 rounded mt-8 text-slate-50 hover:bg-green-700 transition-all duration-200"
              >
                &larr; Back
              </Link>
            </article>
          </div>
        ))}
      </section>
    </>
  );
}
export default SingleFact;
