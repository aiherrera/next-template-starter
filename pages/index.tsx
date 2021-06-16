import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
export default function Home(): JSX.Element {
  return (
    <>
      <Typography variant="h1"> Winter is comming! </Typography>

      <Button variant="contained" color="primary">
        Burn them all!
      </Button>
    </>
  );
}
