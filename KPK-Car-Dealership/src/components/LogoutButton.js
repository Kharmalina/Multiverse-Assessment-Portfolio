function LogoutButton({ setToken, setCarsList }) {
  function logoutUser() {
    localStorage.removeItem("token");
    setToken(null);
    setCarsList(null);
  }
  return (
    <button
      className="btn btn-outline-danger mx-2 px-3"
      onClick={() => logoutUser()}
    >
      Log out
    </button>
  );
}

export default LogoutButton;
