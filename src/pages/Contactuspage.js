import { Box } from "@mui/material";
import React from "react";
import Contactsus from "../components/contsctsus/Contactsus";
import Header from "../components/heder/Header";

const Contactuspage = () => {
  return (
    <div>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "50%" ,padding:"40px", marginTop:"40px"}}>
          <Contactsus />
        </Box>
      </Box>
    </div>
  );
};

export default Contactuspage;
