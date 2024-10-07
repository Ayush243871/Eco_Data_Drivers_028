// src/Components/LandingPage.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import mainimg from "../../assets/mainimg.jpeg";
import logo from "../../assets/LogoWhite.jpg";
// import About from "./About";
import Footer from "../Footer/footer";
import "../../index.css";
import { Button, Flex, Box, Image } from "@chakra-ui/react";
const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const initAOS = () => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 200, // Offset (in px) from the original trigger point
      once: true, // Whether animation should happen only once
    });
  };
  useEffect(() => {
    initAOS();
  }, []);

  const handleGetStarted = () => {
    navigate("/AuthComponent");
  };

  return (
    <>
     
<Flex
  as="nav"
  className="navbar sticky"
  p={4}
  bg="rgb(38,121,120)" /* Slightly darker shade of the footer color for better contrast */
  color="white"
  justify="space-between"
  align="center"
>
  <Image src={logo} boxSize="50px" /* Adjust the size of the logo */
  borderRadius={10} />
  <Button colorScheme="blue" onClick={handleGetStarted}>
    Login / Sign Up
  </Button>
</Flex>


      {/* <About/> */}
      {/* landing page main content start  */}
      <main>
        <div
          className="profile-intro container"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "2rem",
          }}>
          {/* Left Side - Image */}
          <div
            className="text-center"
            data-aos="fade-right"
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <img
              src="https://www.fittr.com/static-content/phone_screens_c32895c20c.webp"
              alt="App preview"
              style={{ width: "75%", height: "auto" }}
              data-aos="fade-right"
            />
          </div>

          {/* Right Side - Text Content */}
          <div
            className="text-center"
            data-aos="fade-left"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              textAlign: "left",
              padding: "0 1rem",
            }}>
            <h1>Introducing the App</h1>
            <p>
              Coaches, Community, Customised Plans. Plus loads of free tools
              like Calorie Counter, Diet Tool, Step Counter, Water Reminder,
              Exercise Library, Articles, and much more!
            </p>
            <button className="btn btn-warning mb-4" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>

        <div
          className="users container position-relative z-0 text-light mb-4"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "20px 0",
          }}>
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            src={mainimg}
            alt="Community Judgement Free"
            className="img-fluid mt-2 pt-2 mx-4 px-4"
            style={{ height: "700px" }}
          />
          <h1
            data-aos="fade-left"
            data-aos-anchor-placement="bottom-bottom"
            className="position-absolute top-0 start-0 z-1 pt-4 ms-4 ps-4 mt-4  "
            style={{
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              maxWidth: "35vw",
              lineHeight: "1.2",
            }}>
            {/* <b>A judgement-free space for everyone</b> */}
          </h1>
        </div>

        <div className="container gympngs">
          <div className="row gympngs-1 container" style={{ display: "flex" }}>
            <div className=" col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-item-center text-center ">
              <img
                data-aos="fade-left"
                src="https://cdn-icons-png.flaticon.com/256/10/10618.png"
                alt="Consistency Over Intensity"
                className="img-fluid mb-1  d-flex "
              />
              <p data-aos="fade-up" className="text-wrap paragraph-adjust">
                Consistency Over Intensity: Focus on regular workouts rather
                than pushing too hard in a single session. Small, consistent
                efforts yield long-term results.
              </p>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column  text-center ">
              <img
                data-aos="fade-left"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfN8B-XLAu8DWyg_evevcYAaMpQuOtrUgwsmXvpQIeY8NUI6KWfdmnpkoE2qnrsshNx_8&usqp=CAU"
                alt="Mind-Muscle Connection"
                className="img-fluid mb-1"
              />
              <p data-aos="fade-up" className="text-wrap  paragraph-adjust">
                Mind-Muscle Connection: Concentrate on the muscles you're
                working during each exercise. This improves form and maximizes
                gains from every rep.
              </p>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column text-center ">
              <img
                data-aos="fade-left"
                src="https://cdn-icons-png.flaticon.com/256/10/10699.png"
                alt="Rest and Recovery"
                className="img-fluid mb-1"
              />
              <p
                data-aos="fade-up"
                className="text-wrap text-md paragraph-adjust">
                Rest and Recovery: Ensure you get adequate rest between
                workouts. Muscles grow and repair during recovery, making rest
                just as important as exercise.
              </p>
            </div>
          </div>
        </div>

        <div className="container gymImgs">
          <div className="row" style={{ display: "flex" }}>
            <div className="col-12 col-md-4 mb-3" style={{ margin: "10px" }}>
              <img
                data-aos="fade-right"
                src="https://i.pinimg.com/564x/af/79/13/af7913e85a417f47d3b3aaba25b80678.jpg"
                alt="Strong Muscular Men"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-4 mb-3" style={{ margin: "10px" }}>
              <img
                data-aos="fade-up"
                src="https://i.pinimg.com/736x/fa/df/0f/fadf0f3874191c07ba7af1d6c6bf2526.jpg"
                alt="Bearded Shirtless Bodybuilder"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-4 mb-3" style={{ margin: "10px" }}>
              <img
                data-aos="fade-left"
                src="https://i.pinimg.com/564x/80/fe/97/80fe975458af5387ec60d93eeaf691e4.jpg"
                alt="Three Bodybuilders"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div
            className="row row-in"
            style={{ display: "flex", flexDirection: "row" }}>
            <div
              data-aos="zoom-in"
              className="col-12 col-md-4 text-center mb-2">
              <img
                src="https://www.fittr.com/static-content/goal_f9007586c4.png"
                alt=""
                className="img-fluid"
              />
              <h6>Wellness is a connection of paths: knowledge and action</h6>
              <p>
                Get expert help and guidance and achieve the results you desire
              </p>
            </div>
            <div
              data-aos="zoom-in"
              className="col-12 col-md-4 text-center mb-2">
              <img
                src="https://www.fittr.com/static-content/goal_f9007586c4.png"
                alt=""
                className="img-fluid"
              />
              <h6>Customised plans for your goals</h6>
              <p>
                Forget the one-size-fits-all approach! Personalised diet and
                workout plans that work for YOU!
              </p>
            </div>
            <div
              data-aos="zoom-in"
              className="col-12 col-md-4 text-center mb-2">
              <img
                src="https://www.fittr.com/static-content/30_day_d0ce88bbd0.png"
                alt=""
                className="img-fluid"
              />
              <h6>30-day money-back guarantee</h6>
              <p>
                Try FITTR risk-free, with our 'no questions asked' refund policy
              </p>
            </div>
          </div>
        </div>

        {/* <div className="container guidlines mt-4 pt-5">
          <div
            className="guidlines-img row text-center d-flex justify-content-center"
            style={{ display: "flex" }}>
            <div data-aos="fade-up" className="col-lg-6 mb-4">
              <h1>Building Sustainable Habits</h1>
              <p>
                Getting fit is the easy part, staying fit is the real deal. We
                at FITTR realize this and integrate fitness into your existing
                lifestyle gradually to ensure you don’t lose the results.
              </p>
              <img
                data-aos="fade-up"
                src="https://www.healthifyme.com/in/images/Meal-and-Workout-Mobile-1-p-500.png"
                alt=""
                width={"75%"}
                className=" img-fluid px-5 "
              />
            </div>
            <div data-aos="fade-up" className="col-lg-6 mb-4">
              <h1>Monitoring and Accountability</h1>
              <p>
                Our expert coaches don’t just give you diet and training plans -
                they stay by your side as a guide and help you navigate your
                fitness journey.
              </p>
              <img
                data-aos="fade-up"
                src="https://www.healthifyme.com/in/images/Ba-p-800.png"
                alt=""
                width={"75%"}
                className="img-fluid px-5"
              />
            </div>
          </div>
        </div> */}
<div className="container guidlines mt-4 pt-5">
  <div className="guidlines-img row text-center d-flex justify-content-center">
    <div data-aos="fade-up" className="col-lg-6 col-md-6 mb-4">
      <h1>Building Sustainable Habits</h1>
      <p>
        Getting fit is the easy part, staying fit is the real deal. We
        at FITTR realize this and integrate fitness into your existing
        lifestyle gradually to ensure you don’t lose the results.
      </p>
      <img
        data-aos="fade-up"
        src="https://www.healthifyme.com/in/images/Meal-and-Workout-Mobile-1-p-500.png"
        alt=""
        className="img-fluid"
      />
    </div>
    <div data-aos="fade-up" className="col-lg-6 col-md-6 mb-4">
      <h1>Monitoring and Accountability</h1>
      <p>
        Our expert coaches don’t just give you diet and training plans -
        they stay by your side as a guide and help you navigate your
        fitness journey.
      </p>
      <img
        data-aos="fade-up"
        src="https://www.healthifyme.com/in/images/Ba-p-800.png"
        alt=""
        className="img-fluid"
      />
    </div>
  </div>
</div>

        <div
          className="text-center my-5 pt-5"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            margin: "30px",
          }}>
          <h1>Develop healthy habits</h1>
          <p>
            Count your calories, ensure you're meeting nutrient targets, and see
            your progress over time.
          </p>
        </div>

        <div className="container my-4">
          <div className=" habbits row text-center">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className=" col-md-6 col-lg-4 mb-4">
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-11.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Track up to 82 micronutrients</h5>
              <p>Log your meals and track all your macro and micronutrients.</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className="col-md-6 col-lg-4 mb-4">
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-14.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Log meals and exercise</h5>
              <p>
                Plus, you can create custom foods, recipes, exercises and
                biometrics!
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className="col-md-6 col-lg-4 mb-4">
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-16.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Custom diet settings</h5>
              <p>Set weight, macro & nutrient targets to meet your goals.</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className="col-md-6 col-lg-4 mb-4">
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-15.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Fasting timer</h5>
              <p>
                Track your intermittent fasts and see their effect over time.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className="col-md-6 col-lg-4 mb-4">
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-12.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Diet support</h5>
              <p>
                Whether your Keto, Vegan, or on one recommended by your doctor.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className="col-md-6 col-lg-4 mb-4">
              <img
                src="https://cdn1.cronometer.com/webflow/cronometer-features-15.svg"
                alt=""
                className="img-fluid mb-3"
              />
              <h5>Fasting timer</h5>
              <p>
                Track your intermittent fasts and see their effect over time.
              </p>
            </div>
          </div>
        </div>

       
      </main>
      {/* landing page end  */}

      <Footer />
    </>
  );
};

export default LandingPage;
