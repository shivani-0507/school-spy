import React from "react";
import { observer } from "mobx-react";
import counterStore from "../store/counterStore";
import { Typography, Button, Box } from "@mui/material";
import { Add, Remove, Refresh } from "@mui/icons-material";

const CounterStatus: React.FC = observer(() => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" gutterBottom>
        Current Count: {counterStore.count}
      </Typography>
      <Typography
        variant="body1"
        color={counterStore.count % 2 === 0 ? "green" : "red"}
      >
        {counterStore.count % 2 === 0 ? "Count is even" : "Count is odd"}
      </Typography>
      <Box display="flex" justifyContent="center" gap={2} marginTop={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => counterStore.increment()}
        >
          Increment
        </Button>

        <Button
          variant="contained"
          color="secondary"
          startIcon={<Remove />}
          onClick={() => counterStore.decrement()}
        >
          Decrement
        </Button>

        <Button
          variant="outlined"
          startIcon={<Refresh />}
          onClick={() => counterStore.reset()}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
});

export default CounterStatus;
