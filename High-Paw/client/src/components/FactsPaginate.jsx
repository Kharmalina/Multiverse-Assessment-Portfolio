import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Default from "../components/assets/Default.jpg";
import ReactPaginate from "react-paginate";
import { useThemeContext } from "./ThemeProvider";

function FactsPaginate({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const [dogs, setDogs] = useState([]);
  const [input, setInput] = useState("");
  const [filteredDogs, setFilteredDogs] = useState([]);

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await res.json();
        // console.log(data);
        setDogs(data);
        setFilteredDogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDogData();
  }, []);

  useEffect(() => {
    // console.log("input", input);
    const filtered = dogs.filter((dog) => {
      return dog.name.toLowerCase().includes(input.toLowerCase());
    });
    setFilteredDogs(filtered);
  }, [input]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dogs.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = filteredDogs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredDogs.length / itemsPerPage);

  return (
    <div className="w-screen">
      <section className="p-8 w-full">
        <div className=" h-20 flex justify-center  my-auto ">
          <form
            className="flex justify-center items-center w-full "
            autoComplete="off"
          >
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for a dog by breed..."
              className="w-11/12 md:w-8/12 border rounded-md p-2  h-10 text-sm focus:outline-green-500 transition  shadow-md cursor-pointer hover:border-green-400 text-gray-700"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 my-10 lg:my-20">
          <Facts filteredDogs={currentItems} />
        </div>
        <ReactPaginate
          className="flex justify-center mt-10 md:gap-4 gap-2 mb-6 w-full m-auto "
          activeClassName="text-green-500 font-bold scale-150"
          previousLinkClassName="text-green-500 border border-green-500 rounded-md px-4 py-2 m-2 hover:bg-green-500 hover:text-white transition-all"
          nextLinkClassName="text-green-500 border border-green-500 rounded-md px-4 py-2 m-2 hover:bg-green-500 hover:text-white transition-all"
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={0}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </section>
    </div>
  );
}

function Facts({ filteredDogs }) {
  const { theme } = useThemeContext();
  return (
    <>
      {filteredDogs.map((dog) => (
        <Link
          to={`/facts/${dog.name}`}
          key={dog.id}
          className="p-4 rounded hover:bg-green-500 transition-all duration-200"
        >
          <article>
            <img
              className={`rounded md:h-80 w-full object-fit shadow-lg  ${
                theme === "light" ? "shadow-gray-600" : "shadow-green-200"
              }`}
              src={dog.image.url}
              alt={dog.name}
              loading="lazy"
              onError={(e) => {
                e.target.src = Default;
              }}
            />
            <h3
              className={`text-lg font-bold mt-4 ${
                theme === "light"
                  ? "bg-white text-stone-700"
                  : "bg-black opacity-80 text-green-100 z-50"
              }`}
            >
              {dog.name}
            </h3>
            <p
              className={` ${
                theme === "light"
                  ? "bg-white text-stone-700"
                  : "bg-black opacity-80 text-green-100 z-50"
              }`}
            >
              Bred For: {dog.bred_for}
            </p>
          </article>
        </Link>
      ))}
    </>
  );
}

export default FactsPaginate;
