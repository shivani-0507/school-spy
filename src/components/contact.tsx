import React from "react";
import { Box, Typography, TextField, Button, Container, Divider } from "@mui/material";

const Contact: React.FC = () => {
  return (
    <div style = {{backgroundColor: '#FADADD',  backgroundSize: "cover", width: "100%",height: "100vh", }}>
    <Container maxWidth="md" sx={{ marginTop: "0px", textAlign: "center" ,  backgroundColor: '#FADADD', }}>
      <Typography variant="h3" gutterBottom>
        Contact Us
      </Typography>
      <Divider sx={{ marginBottom: "20px" }} />

      <Typography variant="body1" paragraph>
        We’d love to hear from you! Whether you have questions, suggestions, or want to
        provide feedback, feel free to reach out. At School Spy, your input is invaluable in
        making the platform better for everyone.
      </Typography>

      <Typography variant="body1" paragraph>
        You can contact us via the following methods:
      </Typography>

      <Box sx={{ marginTop: "20px" }}>
        <Typography variant="h6">Email</Typography>
        <Typography variant="body1">support@schoolspy.com</Typography>

        <Typography variant="h6" sx={{ marginTop: "20px" }}>Phone</Typography>
        <Typography variant="body1">+1 (800) 123-4567</Typography>
      </Box>

      <Divider sx={{ marginY: "20px" }} />

      <Typography variant="h6">Or, send us a message directly:</Typography>

      <Box sx={{ marginTop: "20px", textAlign: "left" }}>
        <TextField
          fullWidth
          label="Your Name"
          variant="outlined"
          sx={{ marginBottom: "15px" }}
        />
        <TextField
          fullWidth
          label="Your Email"
          variant="outlined"
          sx={{ marginBottom: "15px" }}
        />
        <TextField
          fullWidth
          label="Your Message"
          variant="outlined"
          multiline
          rows={4}
          sx={{ marginBottom: "15px" }}
        />
        <Button variant="contained" color="primary" sx={{ padding: "10px 20px" }}>
          Send Message
        </Button>
      </Box>

      <Typography variant="body2" sx={{ marginTop: "30px", color: "gray" }}>
        * We strive to respond to all inquiries within 24-48 hours.
      </Typography>
    </Container>
    </div>
  );
};

export default Contact;
