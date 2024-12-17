import React from "react";
import { Container, Typography, Divider } from "@mui/material";
import Banner from "./banner"; // Assuming you have a Banner component

const About: React.FC = () => {
  return (
    <div style={{backgroundColor: '#FADADD',  backgroundSize: "cover", }}>
      <Container
        maxWidth="md"
        sx={{
          marginTop: 0,
          textAlign: "center",
          backgroundColor: '#FADADD', // Ensure background is set here
          color: "black", // Text color white on black background
          padding: "40px 20px", // Add some padding for spacing
          borderRadius: "8px", // Optionally, round the corners
          zIndex: 1, // Ensure it's not covered by other elements
          minHeight: "100vh", // Ensure it covers full screen height
        }}
      >
        {/* <Banner /> */}
        <Typography variant="h3" gutterBottom>
          About School Spy
        </Typography>
        <Divider sx={{ marginBottom: "20px" }} />

        <Typography variant="body1" paragraph>
          Welcome to <strong>School Spy</strong>, your trusted platform for
          discovering the best schools based on real, honest feedback. Whether
          you’re a student, teacher, or parent, your experiences matter in
          helping others make informed choices about education.
        </Typography>

        <Typography variant="body1" paragraph>
          Our mission is to bridge the gap between schools and parents by
          gathering and showcasing feedback. We aim to empower parents and
          children to make better decisions while encouraging schools to improve
          and innovate through constructive reviews.
        </Typography>

        <Typography variant="h6" sx={{ marginTop: "20px" }}>
          Why Choose School Spy?
        </Typography>
        <Typography variant="body2" paragraph>
          - Genuine reviews from students, teachers, and parents.
          <br />
          - Transparent ratings for a variety of schools.
          <br />
          - A platform to share and explore experiences that matter.
          <br />- Helping families choose the perfect school with confidence.
        </Typography>

        <Divider sx={{ marginY: "20px" }} />
        <Typography variant="h6">
          Let’s shape the future of education together!
        </Typography>
      </Container>
    </div>
  );
};

export default About;
