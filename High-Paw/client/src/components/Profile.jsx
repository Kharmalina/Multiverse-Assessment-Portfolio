import React from "react";

import { UserContext } from "../App";
import { useContext, useEffect } from "react";
import { useState } from "react";

import { useParams } from "react-router-dom";
import { useThemeContext } from "./ThemeProvider";
// import Community from "./Community";

function Profile() {
  const [profile, setProfile] = useState(null);
  // use inside of chlidren to the browser router
  // get the the id of the prpofile from the url params (id is the name of the variable in the url)
  let { id } = useParams();
  const { user } = useContext(UserContext);
  const { theme } = useThemeContext();
  // useEffect(() => {
  // if user is null, redirect to login page
  if (!user) {
    window.location.href = "/mainpage";
  }
  // }, [user]);

  if (!id) {
    id = user.user._id;
  }
  useEffect(() => {
    const getProfile = async () => {
      const response = await fetch(
        `https://high-paw-production.up.railway.app/profile/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      const data = await response.json();
      setProfile(data);
    };
    getProfile();
  }, []);

  const userStorage = localStorage.getItem("user");

  return (
    <div
      className={`w-screen  z-0 ${
        theme === "light" ? "bg-white text-gray-700" : "bg-black text-white"
      }   md:flex-1  m-auto mt-14 `}
    >
      {profile && (
        <div className="parent_div md:flex-col  lg:flex-row items-center h-auto justify-start m-0 px-0 flex flex-col relative">
          <div className="blop  w-4/5 md:w-3/5 lg:w-2/5  h-auto ">
            <svg
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full "
            >
              <defs>
                <clipPath id="a">
                  <path fill="currentColor">
                    <animate
                      attributeName="d"
                      dur="10s"
                      repeatCount="indefinite"
                      values="M857 655.5q14 155.5-134.5 209t-300.5 44Q270 899 223.5 758T154 491.5Q131 366 244 309t223.5-155q110.5-98 178 34.5t132.5 222q65 89.5 79 245Z;

                    M866.5 647Q851 794 707 826t-241-33.5Q369 727 205.5 697T123 529.5Q204 392 259.5 286t180-126.5Q564 139 718.5 163t159 180.5Q882 500 866.5 647Z;
                    
                    M755 602.5Q744 705 664.5 843t-239 100.5Q266 906 196 771t-14.5-251Q237 404 266 274.5t164.5-138Q566 128 723.5 154t100 186Q766 500 755 602.5Z;


                    M857 655.5q14 155.5-134.5 209t-300.5 44Q270 899 223.5 758T154 491.5Q131 366 244 309t223.5-155q110.5-98 178 34.5t132.5 222q65 89.5 79 245Z"
                    ></animate>
                  </path>
                </clipPath>
              </defs>
              <g clipPath="url(#a)">
                <path stroke="green" strokeWidth="20">
                  <animate
                    attributeName="d"
                    dur="10s"
                    repeatCount="indefinite"
                    values="M857 655.5q14 155.5-134.5 209t-300.5 44Q270 899 223.5 758T154 491.5Q131 366 244 309t223.5-155q110.5-98 178 34.5t132.5 222q65 89.5 79 245Z;

                    M866.5 647Q851 794 707 826t-241-33.5Q369 727 205.5 697T123 529.5Q204 392 259.5 286t180-126.5Q564 139 718.5 163t159 180.5Q882 500 866.5 647Z;
                    
                    M755 602.5Q744 705 664.5 843t-239 100.5Q266 906 196 771t-14.5-251Q237 404 266 274.5t164.5-138Q566 128 723.5 154t100 186Q766 500 755 602.5Z;


                    M857 655.5q14 155.5-134.5 209t-300.5 44Q270 899 223.5 758T154 491.5Q131 366 244 309t223.5-155q110.5-98 178 34.5t132.5 222q65 89.5 79 245Z"
                  ></animate>
                </path>
              </g>
              <image
                href={profile.picture}
                alt="profile picture"
                clipPath="url(#a)"
                width="100%"
                height="100%"
                // strech image size
              />
            </svg>
          </div>
          {/* add glow */}
          <div
            className="blop  w-4/5 md:w-3/5 lg:w-2/5  h-auto absolute -z-10 "
            // style={{ filter: "blur(15px)" }}
            style={{
              filter:
                theme === "light"
                  ? "blur(15px)"
                  : "blur(15px) brightness(5.6) saturate(.5) hue-rotate(40deg)",
            }}
          >
            <svg
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full "
            >
              <defs>
                <clipPath id="a">
                  <path fill="currentColor">
                    <animate
                      attributeName="d"
                      dur="10s"
                      repeatCount="indefinite"
                      values="M857 655.5q14 155.5-134.5 209t-300.5 44Q270 899 223.5 758T154 491.5Q131 366 244 309t223.5-155q110.5-98 178 34.5t132.5 222q65 89.5 79 245Z;

                    M866.5 647Q851 794 707 826t-241-33.5Q369 727 205.5 697T123 529.5Q204 392 259.5 286t180-126.5Q564 139 718.5 163t159 180.5Q882 500 866.5 647Z;
                    
                    M755 602.5Q744 705 664.5 843t-239 100.5Q266 906 196 771t-14.5-251Q237 404 266 274.5t164.5-138Q566 128 723.5 154t100 186Q766 500 755 602.5Z;


                    M857 655.5q14 155.5-134.5 209t-300.5 44Q270 899 223.5 758T154 491.5Q131 366 244 309t223.5-155q110.5-98 178 34.5t132.5 222q65 89.5 79 245Z"
                    ></animate>
                  </path>
                </clipPath>
              </defs>
              <g clipPath="url(#a)">
                <path stroke="#444cf7" strokeWidth="20">
                  <animate
                    attributeName="d"
                    dur="10s"
                    repeatCount="indefinite"
                    values="M857 655.5q14 155.5-134.5 209t-300.5 44Q270 899 223.5 758T154 491.5Q131 366 244 309t223.5-155q110.5-98 178 34.5t132.5 222q65 89.5 79 245Z;

                    M866.5 647Q851 794 707 826t-241-33.5Q369 727 205.5 697T123 529.5Q204 392 259.5 286t180-126.5Q564 139 718.5 163t159 180.5Q882 500 866.5 647Z;
                    
                    M755 602.5Q744 705 664.5 843t-239 100.5Q266 906 196 771t-14.5-251Q237 404 266 274.5t164.5-138Q566 128 723.5 154t100 186Q766 500 755 602.5Z;


                    M857 655.5q14 155.5-134.5 209t-300.5 44Q270 899 223.5 758T154 491.5Q131 366 244 309t223.5-155q110.5-98 178 34.5t132.5 222q65 89.5 79 245Z"
                  ></animate>
                </path>
              </g>
              <image
                href={profile.picture}
                alt="profile picture"
                clipPath="url(#a)"
                width="100%"
                height="100%"
              />
            </svg>
          </div>
          <div className="info">
            <h1 className="my-8 text-5xl ">My profile</h1>

            <div className="name-div mb-4 ">
              <h3>
                Name: <span className="font-semibold">{profile.name}</span>
              </h3>
            </div>

            <div className="age-div mb-4 ">
              <h3>
                Age:<span className="font-semibold">{profile.age}</span>
              </h3>
            </div>
            <div className="breed-div mb-4 ">
              <h3>
                Breed: <span className="font-semibold">{profile.breed}</span>
              </h3>
            </div>

            <div className="city-div mb-4 ">
              <h3>
                City: <span className="font-semibold">{profile.city}</span>
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
