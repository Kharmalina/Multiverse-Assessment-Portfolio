import { useContext, useEffect, useState } from "react";
import SmallMap from "./SmallMap";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import ReactPaginate from "react-paginate";

function Hangouts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [hangouts, setHangouts] = useState([]);
  const [filteredHangouts, setFilteredHangouts] = useState([]);
  const [allUsers, setAllUsers] = useState({});
  const { user } = useContext(UserContext);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2; // Change this value to the desired number of items per page

  // if user is null, redirect to main page
  if (!user) {
    window.location.href = "/mainpage";
  }

  // get user name for a userId
  const getUserName = async (id) => {
    const response = await fetch(
      `https://high-paw-production.up.railway.app/profile/${id}`,
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
    const data = await response.json();
    // set users by spreading all prev users and adding the new user by key
    setAllUsers((prev) => {
      return { ...prev, [id]: data.name };
    });
  };

  useEffect(() => {
    const getHangouts = async () => {
      const response = await fetch(
        `https://high-paw-production.up.railway.app/hangout/all`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      const data = await response.json();
      setHangouts(data.hangouts);
      setFilteredHangouts(data.hangouts);
      const users = [];

      for (let hangout of data.hangouts) {
        users.push(hangout.userId);
      }

      // remove duplicates
      const uniqueUsers = [...new Set(users)];
      // console.log(uniqueUsers);

      for (let userId of uniqueUsers) {
        getUserName(userId);
      }
    };
    getHangouts(); // Call the getHangouts function to fetch the hangouts data
  }, []);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
    // setCurrentPage(selectedPage);
  };

  useEffect(() => {
    // filter hangouts by user name
    const filteredHangouts = hangouts.filter((hangout) => {
      for (let user in allUsers) {
        if (searchTerm === "") return hangout;

        if (allUsers[user].toLowerCase().includes(searchTerm.toLowerCase())) {
          return hangout.userId === user;
        }
      }
    });
    setFilteredHangouts(filteredHangouts);
  }, [searchTerm]);

  // Calculate the total number of pages based on the filtered hangouts and items per page
  // const totalPages = Math.ceil(filteredHangouts.length / itemsPerPage);

  // // Generate an array of page numbers for rendering the pagination
  // const pageNumbers = [];
  // if (totalPages <= 5) {
  //   for (let i = 0; i < totalPages; i++) {
  //     pageNumbers.push(i);
  //   }
  // } else {
  //   if (currentPage < 3) {
  //     for (let i = 0; i < 4; i++) {
  //       pageNumbers.push(i);
  //     }
  //     pageNumbers.push("...");
  //     pageNumbers.push(totalPages - 1);
  //   } else if (currentPage >= totalPages - 3) {
  //     pageNumbers.push(0);
  //     pageNumbers.push("...");
  //     for (let i = totalPages - 4; i < totalPages; i++) {
  //       pageNumbers.push(i);
  //     }
  //   } else {
  //     pageNumbers.push(0);
  //     pageNumbers.push("...");
  //     for (let i = currentPage - 1; i <= currentPage + 1; i++) {
  //       pageNumbers.push(i);
  //     }
  //     pageNumbers.push("...");
  //     pageNumbers.push(totalPages - 1);
  //   }
  // }
  return (
    <div className="parent-container w-screen">
      <div className="search flex justify-center ">
        <input
          type="text"
          placeholder="Search hangouts by user..."
          className="w-11/12 md:w-8/12 border rounded-md px-4 py-2 mt-10 focus:outline-green-500 transition text-xs shadow-md cursor-pointer hover:border-green-400"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredHangouts
        .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
        // needs to be fixed
        // filter by user name to show hangouts created by that user

        .map((hangout, index) => (
          <div
            className={` shadow-md w-11/12  md:w-8/12 md:h-52 h-36 bg-white rounded-md m-auto mt-16 flex  justify-between  border-l-2 border-t border-green-500 ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
            key={hangout._id}
          >
            <div className="hangout  w-3/4 px-6 ">
              <Link to={`/hangout/${hangout._id}`}>
                <h2 className="title md:text-2xl text-lg text-green-700  md:mb-6 mb-1 md:animate-pulse">
                  {hangout.title.slice(0, 20)}...
                </h2>
              </Link>
              <p className="description text-stone-600 text-sm">
                {hangout.description.slice(0, 100)}...
              </p>
              {/* show user name if it is in  all users
               */}
              {allUsers[hangout.userId] && (
                <p className="text-xs  text-green-600 md:mt-24 mt-16">
                  <em className="font-bold underline cursor-pointer mr-5">
                    {allUsers[hangout.userId]}
                  </em>
                </p>
              )}
              {/* <p>{hangout.userId}</p> */}
            </div>
            <div className="img   w-3/12 h-auto ">
              {/* <img src={hangout.img} alt="hangout" /> */}
              <SmallMap latLong={hangout.latLong} />
            </div>
          </div>
        ))}

      <ReactPaginate
        className="flex justify-center mt-10 md:gap-4 gap-2 mb-6"
        pageCount={Math.ceil(filteredHangouts.length / itemsPerPage)}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="text-green-500 font-bold scale-150"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="text-green-500 border border-green-500 rounded-md px-4 py-2 m-2 hover:bg-green-500 hover:text-white transition-all"
        nextClassName="page-item"
        nextLinkClassName="text-green-500 border border-green-500 rounded-md px-4 py-2 m-2 hover:bg-green-500 hover:text-white transition-all"
        breakLabel="..."
        pageRangeDisplayed={0}
        marginPagesDisplayed={2}
      />
    </div>
  );
}

export default Hangouts;
