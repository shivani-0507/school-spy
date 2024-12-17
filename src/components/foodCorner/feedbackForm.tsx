import React, { useState } from "react";
import styled from "styled-components";
import {
  TextField,
  Button,
  Checkbox,
  Rating,
  Slider,
  Switch,
  ToggleButton,
  ButtonGroup,
  Fab,
  Tooltip,
  Radio,
  RadioGroup,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Paper,
  Autocomplete,
  Box,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import { Add, Edit, Favorite } from "@mui/icons-material";

const StyledHeading = styled.h1`
  color: black;
  font-family: Arial, sans-serif;
  font-size: 32px;
  text-align: center;
  margin: 20px 0;
`;
const FeedbackForm: React.FC = () => {
  const [rating, setRating] = useState<number | null>(2);
  const [switchState, setSwitchState] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<number>(30);
  const [selectedValue, setSelectedValue] = useState<string>("male");
  const [checked, setChecked] = useState<boolean>(true);
  const [toggle, setToggle] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState(false); // To track the Snackbar visibility
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  // Left and Right list for Transfer List
  const [leftItems, setLeftItems] = useState<string[]>([
    "Pizza",
    "Burger",
    "Pasta",
    "Sushi",
    "Salad",
  ]);
  const [rightItems, setRightItems] = useState<string[]>([]);

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchState(event.target.checked);
  };
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  const handleToggleChange = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setToggle(!toggle);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleMoveRight = (item: string) => {
    setLeftItems(leftItems.filter((i) => i !== item));
    setRightItems([...rightItems, item]);
  };

  const handleMoveLeft = (item: string) => {
    setRightItems(rightItems.filter((i) => i !== item));
    setLeftItems([...leftItems, item]);
  };

  const handleFabClick = () => {
    setOpenSnackbar(true); // Show the Snackbar when the FAB is clicked
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Close the Snackbar after a few seconds
  };

  const handleSubmit = () => {
    setMessage("Your feedback has been submitted!");
  };

  return (
    <div style={{ backgroundColor: "#FADADD",   backgroundSize: "cover", }}>
    <Paper
      elevation={24}
      sx={{
        padding: 4,
        maxWidth: "900px",
        margin: "40px auto",
        borderRadius: "8px",
      }}
    >
      <StyledHeading>Food Feedback Form</StyledHeading>

      {/* Radio Buttons */}
      <div style={{ marginBottom: "30px" }}>
        <h3>Gender</h3>
        <RadioGroup
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          sx={{
            display: "flex",
            flexDirection: "coloum",
            marginBottom: "20px",
          }}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </div>

      {/* Checkbox */}
      <div>
        <h3>Newsletter Subscription</h3>
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={handleCheckboxChange} />
          }
          label="Subscribe to newsletter"
          sx={{
            backgroundColor: "#f0f0f0",
            padding: "10px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            width: "400px",
          }}
        />
      </div>

      {/* Rating */}
      <h3>Rate Your Food Experience</h3>
      <Rating
        value={rating}
        onChange={(event, newValue) => setRating(newValue)}
      />

      {/* Slider */}
      <h3>How likely are you to recommend this food?</h3>
      <Slider
        value={sliderValue}
        onChange={handleSliderChange}
        min={0}
        max={100}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `${value}%`}
      />

      {/* Switch */}
      <h3>Enable Notifications</h3>
      <Switch checked={switchState} onChange={handleSwitchChange} />

      {/* Toggle Button */}
      <h3>Is your feedback anonymous?</h3>
      <ToggleButton
        value="check"
        selected={toggle}
        onChange={handleToggleChange}
        sx={{ marginBottom: "40px", width: "80px", length: "30px" }}
      >
        {toggle ? "Yes" : "No"}
      </ToggleButton>

      <br />
      {/* Floating Action Button (FAB) */}
      <Tooltip
        title="Did our food just steal your heart?"
        sx={{ marginTop: "10px" }}
      >
        <Fab color="primary" aria-label="add" onClick={handleFabClick}>
          <Favorite />
        </Fab>
      </Tooltip>

      {/* Snackbar for Feedback */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          You just made our food feel special!
        </Alert>
      </Snackbar>

      {/* Autocomplete */}
      <h3>Choose Your Favorite Food</h3>
      <Autocomplete
        multiple
        value={selectedValues} // the selected values
        onChange={(event, newValue) => setSelectedValues(newValue)}
        options={["Pizza", "Burger", "Sushi", "Pasta", "Tacos"]}
        renderInput={(params) => (
          <TextField {...params} label="Select Favorite Foods" />
        )}
      />

      {/* Transfer List for Food Selection */}
      <div>
        <h3>Select Items You Want to Review</h3>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <List
            style={{ width: "45%", border: "1px solid #ccc", padding: "10px" }}
          >
            {leftItems.map((item) => (
              <ListItem
                key={item}
                component="button"
                onClick={() => handleMoveRight(item)}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Buttons to move items between lists */}
            <Button onClick={() => handleMoveRight("Pizza")}>Move Right</Button>
            <Divider style={{ margin: "10px 0" }} />
            <Button onClick={() => handleMoveLeft("Pizza")}>Move Left</Button>
          </div>

          {/* Right List (Selected items) */}
          <List
            style={{ width: "45%", border: "1px solid #ccc", padding: "10px" }}
          >
            {rightItems.map((item) => (
              <ListItem
                key={item}
                component="button"
                onClick={() => handleMoveLeft(item)}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>

      {/* Text Field for Additional Feedback */}
      <h3>Your Feedback</h3>
      <TextField
        label="Your Feedback"
        multiline
        rows={4}
        variant="outlined"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        fullWidth
      />

      {/* Submit Button */}
      <div>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            alert("Your feedback has been submitted!");
          }}
          sx={{
            marginTop: 4,
            marginRight: 3,
            "&:hover": { backgroundColor: "#1565c0" },
          }}
        >
          Submit
        </Button>

        {message && <p>{message}</p>}
      </div>
    </Paper>
    </div>
  );
};

export default FeedbackForm;
