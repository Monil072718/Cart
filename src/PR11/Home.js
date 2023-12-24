import React from "react";


const Home = () => {
  // const [currentUser, setCurrentUser] = useState(null);
  // const navigate = useNavigate();
  // const apiFetch = () => {
  //   fetch("http://localhost:5000/currentUser")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       if (Object.keys(json).length > 0) {
  //         setCurrentUser(json);
  //       } else {
  //         setCurrentUser(null);
  //       }
  //     });
  // };
  // console.log(currentUser);
  // useEffect(() => {
  //   apiFetch();
  // }, []);

  // const handleLogout = () => {
  //   console.log("Logout");
  //   setCurrentUser(null); // Simulate logout by clearing the currentUser state
  //   navigate("/Home");
  // };

  return (
    <div>
      <h1>Home</h1>

    </div>
  );
};

export default Home;
