import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <h1 className="header">About Swasth</h1>

      <section className="section">
        <h2 className="subHeader">Our Mission</h2>
        <p className="paragraph">
          At Swasth, we believe in empowering individuals to take control of
          their health and well-being. Our mission is to provide a holistic
          platform that integrates physical, nutritional, and mental health
          support, making health management accessible and personalized for
          everyone.
        </p>
      </section>

      <section className="section">
        <h2 className="subHeader">Our Values</h2>
        <p className="paragraph">
          We are committed to integrity, innovation, and inclusivity. Our goal
          is to create a supportive community where individuals can find the
          resources they need to achieve their health goals, all while promoting
          sustainable and healthy lifestyles.
        </p>
      </section>

      <section className="section">
        <h2 className="subHeader">Meet Our Team</h2>
        <div className="teamSection">
          <div className="teamMember">
            <img
              src="https://www.isleep.com/wp-content/uploads/2022/03/jane-doe-512px.jpg"
              alt="Team Member 1"
              className="teamImage"
            />
            <h3>Dr. Jane Doe</h3>
            <p>Chief Health Officer</p>
          </div>
          <div className="teamMember">
            <img
              src="https://registered-dietitians-services.com/wp-content/uploads/2019/05/team-img-500x580-1.jpg"
              alt="Team Member 2"
              className="teamImage"
            />
            <h3>John Smith</h3>
            <p>Nutrition Specialist</p>
          </div>
          <div className="teamMember">
            <img
              src="https://registered-dietitians-services.com/wp-content/uploads/2019/05/team-img-500x580-1.jpg"
              alt="Team Member 3"
              className="teamImage"
            />
            <h3>Lisa Ray</h3>
            <p>Fitness Coach</p>
          </div>
          <div className="teamMember">
            <img
              src="https://registered-dietitians-services.com/wp-content/uploads/2019/05/team-img-500x580-1.jpg"
              alt="Team Member 4"
              className="teamImage"
            />
            <h3>Michael Lee</h3>
            <p>Mental Wellness Expert</p>
          </div>
          <div className="teamMember">
            <img
              src="https://registered-dietitians-services.com/wp-content/uploads/2019/05/team-img-500x580-1.jpg"
              alt="Team Member 5"
              className="teamImage"
            />
            <h3>Emily Johnson</h3>
            <p>Health Technology Specialist</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="subHeader">User Testimonials</h2>
        <div className="testimonials">
          <p className="testimonial">
            "Swasth has transformed my approach to health. The personalized
            plans and tracking features have made a real difference!" - Sarah K.
          </p>
          <p className="testimonial">
            "I love the community support and expert advice. It's like having a
            personal health coach!" - Mike L.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
