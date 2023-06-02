import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import PaginatedItems from "./PaginatedItems";

function Sidebar({ carsFilteredList, handleChange, handleCheck }) {
  return (
    <>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid sx={{ m: 2, flexDirection: "column" }}>
          <TextField
            id="filled-basic"
            label="Search"
            variant="filled"
            type="search"
            onChange={handleChange}
          />
          <hr></hr>
          <h5>Make</h5>
          <FormGroup>
            <FormControlLabel
              onChange={handleCheck}
              control={<Checkbox />}
              label="Honda"
              name="Honda"
            />
            <FormControlLabel
              name="Toyota"
              onChange={handleCheck}
              control={<Checkbox />}
              label="Toyota"
            />
            <FormControlLabel
              name="Cadillac"
              onChange={handleCheck}
              control={<Checkbox />}
              label="Cadillac"
            />
            <FormControlLabel
              name="Hyundai"
              onChange={handleCheck}
              control={<Checkbox />}
              label="Hyundai"
            />
            <FormControlLabel
              name="Subaru"
              onChange={handleCheck}
              control={<Checkbox />}
              label="Subaru"
            />
            <FormControlLabel
              name="Kia"
              onChange={handleCheck}
              control={<Checkbox />}
              label="Kia"
            />
            <FormControlLabel
              name="Acura"
              onChange={handleCheck}
              control={<Checkbox />}
              label="Acura"
            />
            <FormControlLabel
              name="Audi"
              onChange={handleCheck}
              control={<Checkbox />}
              label="Audi"
            />
            <FormControlLabel
              name="Infiniti"
              onChange={handleCheck}
              control={<Checkbox />}
              label="Infiniti"
            />
            <FormControlLabel
              name="Chevy"
              onChange={handleCheck}
              control={<Checkbox />}
              label="Chevy"
            />
            <FormControlLabel
              name="Nissan"
              onChange={handleCheck}
              control={<Checkbox />}
              label="Nissan"
            />
          </FormGroup>
        </Grid>
        <Grid>
          <PaginatedItems
            sx={{ m: 2 }}
            itemsPerPage={4}
            carsFilteredList={carsFilteredList}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Sidebar;
