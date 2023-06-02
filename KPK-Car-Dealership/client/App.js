import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/NavBar";
import LoginRegisterPage from "./components/LoginRegisterPage";
import Sidebar from "./components/Sidebar";

function App() {
  const [carsList, setCarsList] = useState(null);
  const [carsFilteredList, setCarsFilteredList] = useState(null);
  const [filteredList, setFilteredList] = useState(null);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const fetchData = async (tokenParam) => {
    if (tokenParam) {
      const res = await fetch("https://kpk-car-dealership.onrender.com/cars", {
        headers: {
          Authorization: `Bearer ${tokenParam}`,
        },
      })
        .then(async (response) => {
          const data = await response.json();
          if (data.error) {
            // return error for error handling
            return data;
          } else {
            data.map((car) => {
              car.name = `${car.year} ${car.make} ${car.model}`;
            });
            setCarsList(data);
            setCarsFilteredList(data);

            return data;
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
      return res;
    }
  };

  // Handles search functionality
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const regex = RegExp(value, "gi");
    const filteredList = carsList.filter((newList) => {
      return newList.name.match(regex);
    });

    setCarsFilteredList([...filteredList]);
  };

  // Handles checkbox filter functionality
  const handleCheck = (e) => {
    e.preventDefault();
    const value = e.target.name;

    // Checks if checkbox has been clicked or unclicked
    if (e.target.checked) {
      const regex = RegExp(value, "gi");
      const filterList = carsList.filter((newList) => {
        return newList.name.match(regex);
      });
      setFilteredList([...filterList, ...carsFilteredList]);

      // Checks if a box has already been selected before filtering results
      if (carsFilteredList.length != carsList.length) {
        setCarsFilteredList([...filterList, ...carsFilteredList]);
      } else {
        setCarsFilteredList([...filterList]);
      }
    } else {
      // Updates list as checkboxes get unchecked, can select and unselect multiple checkboxes
      const filterList = carsFilteredList.filter((newList) => {
        return !newList.name.match(value);
      });
      setFilteredList([...filterList]);

      if (filterList.length === 0) {
        setCarsFilteredList(carsList);
      } else {
        setCarsFilteredList([...filterList]);
      }
    }
  };

  useEffect(() => {
    // Handles persisting user visit through page reload
    if (token) {
      fetchData(token);
    } else {
      // Renders page if token is stored in localstorage
      const handleExistingVisit = JSON.parse(localStorage.getItem("token"));
      async function handleExistingData() {
        // Will eventually check if token is valid and handle logging user out if session has expired
        if (handleExistingVisit) {
          setToken(handleExistingVisit);
          const data = await fetchData(handleExistingVisit);
          navigate("/home");
        } else {
          // Navigates back to login page when not logged in
          navigate("/");
        }
      }
      handleExistingData();
    }
  }, [token]);

  return (
    <>
      <main>
        <Routes>
          {!carsFilteredList ? (
            <Route
              exact
              path="/"
              element={
                <LoginRegisterPage
                  loading={loading}
                  setToken={setToken}
                  setLoading={setLoading}
                />
              }
            />
          ) : (
            <Route
              path="/home"
              element={[
                <Navbar
                  setToken={setToken}
                  setCarsList={setCarsList}
                  setCarsFilteredList={setCarsFilteredList}
                  setLoading={setLoading}
                />,
                <Sidebar
                  handleChange={handleChange}
                  handleCheck={handleCheck}
                  carsFilteredList={carsFilteredList}
                />,
              ]}
            />
          )}
        </Routes>
      </main>
    </>
  );
}

export { App };
