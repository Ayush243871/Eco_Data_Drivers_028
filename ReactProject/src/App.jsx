import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated } from "./store/AuthSlice";
import LandingPage from "./Components/LandingPage/LandingPage";
import Main from "./Components/HomePage/MainPage";
import WellnessTips from "./Components/Wellness";
import AuthComponent from "./Components/AuthComponent";
import PrivateRoute from "./Components/PrivateRoute";
import NavBar from "./Components/HomePage/NavBar";
import MealWrapper from "./Components/Meals/MealWrapper";
import HealthForm from "./Components/Healthform/HealthForm";
import GoalForm from "./Components/GoalForm/GoalForm";
import Exercise from "./Components/GoalForm/Exercise";
import Meals from "./Components/GoalForm/Meals";
import FoodPlan from "./Components/GoalForm/FoodPlan";

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Get last visited route from localStorage or default to "/Main"
  const Url = localStorage.getItem("lastRoute") || "/Main";

  // Check and set authentication status from localStorage
  useEffect(() => {
    const storedAuthStatus = localStorage.getItem("isAuthenticated");
    if (storedAuthStatus === "true") {
      dispatch(setAuthenticated());
    }
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route exact path="/" element={<LandingPage />} />

        {/* Authentication Component Route */}
        <Route
          path="/AuthComponent"
          element={
            isAuthenticated ? (
              <Navigate to={Url} />
            ) : (
              <AuthComponent setIsAuthenticated={() => dispatch(setAuthenticated())} />
            )
          }
        />

        {/* Main Page Route */}
        <Route
          exact path="/Main"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <NavBar />
              <Main />
            </PrivateRoute>
          }
        />

        {/* Wellness Tips Route */}
        <Route
          exact path="/Main/wellness"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <NavBar />
              <WellnessTips />
            </PrivateRoute>
          }
        />

        {/* Meal Wrapper Route */}
        <Route
          exact path="/Main/MealWrapper"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <NavBar />
              <MealWrapper />
            </PrivateRoute>
          }
        />

        {/* Health Form Route */}
        <Route
          exact path="/Main/HealthForm"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <NavBar />
              <HealthForm />
            </PrivateRoute>
          }
        />

        {/* Goal Form Route */}
        <Route
          exact path="/Main/GoalForm"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <NavBar />
              <GoalForm />
            </PrivateRoute>
          }
        />

        {/* Nested Routes for GoalForm */}
        <Route
          exact path="/Main/GoalForm/Exercise"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <NavBar />
              <Exercise />
            </PrivateRoute>
          }
        />
        <Route
          exact path="/Main/GoalForm/Meals"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <NavBar />
              <Meals />
            </PrivateRoute>
          }
        />
        <Route
          exact path="/Main/GoalForm/FoodPlan"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <NavBar />
              <FoodPlan />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

















// import { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setAuthenticated } from "./store/AuthSlice";
// import LandingPage from "./Components/LandingPage/LandingPage";
// import Main from "./Components/HomePage/MainPage";
// import WellnessTips from "./Components/Wellness";
// import AuthComponent from "./Components/AuthComponent";
// import PrivateRoute from "./Components/PrivateRoute";
// import NavBar from "./Components/HomePage/NavBar";
// import MealWrapper from "./Components/Meals/MealWrapper";
// import HealthForm from "./Components/Healthform/HealthForm";
// import GoalForm from "./Components/GoalForm/GoalForm";
// import Exercise from "./Components/GoalForm/Exercise";
// import Meals from "./Components/GoalForm/Meals";
// import FoodPlan from "./Components/GoalForm/FoodPlan";

// const App = () => {
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

// const Url = localStorage.getItem("lastRoute") || "/Main" ;

//   // Check and set authentication status from localStorage
//   useEffect(() => {
//     const storedAuthStatus = localStorage.getItem("isAuthenticated");
//     if (storedAuthStatus === "true") {
//       dispatch(setAuthenticated());
//     }
//   }, [dispatch]);



  

//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/"   element={<LandingPage  />}  />

//         <Route
//           path="/AuthComponent"
//           element={
//             isAuthenticated ? (
//               <Navigate to={Url} />
//             ) : (
//               <AuthComponent setIsAuthenticated={() => dispatch(setAuthenticated())} />
//             )
//           }
//         />

//         <Route
//           exact  path="/Main"
//           element={
//             <PrivateRoute isAuthenticated={isAuthenticated}>
//               <NavBar />
//               <Main />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           exact  path="/Main/wellness"
//           element={
//             <PrivateRoute isAuthenticated={isAuthenticated}>
//               <NavBar />
//               <WellnessTips />
//             </PrivateRoute>
//           }
//         />
//         <Route
//          exact   path="/Main/MealWrapper"
//           element={
//             <PrivateRoute isAuthenticated={isAuthenticated}>
//               <NavBar />
//               <MealWrapper />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           exact  path="/Main/HealthForm"
//           element={
//             <PrivateRoute isAuthenticated={isAuthenticated}>
//               <NavBar />
//               <HealthForm />
//             </PrivateRoute>
//           }
//         />
//         <Route
//          exact   path="/Main/GoalForm"
//           element={
//             <PrivateRoute isAuthenticated={isAuthenticated}>
//               <NavBar />
//               <GoalForm />
//             </PrivateRoute>
//           }
//         />

//       </Routes>
    
//     </Router>
//   );
// };

// export default App;
