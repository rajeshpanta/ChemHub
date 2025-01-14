import React from "react";
import "./LeftSidebar.css"; // Import the corresponding CSS file
import { Stack, Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const LeftSidebar = () => {
  return (
    <div className="left-section">
      <div className="profile-card">
        <img
          src="/path/to/companyLogo.png"
          alt="Company Logo"
          className="company-logo"
        />
        <p className="company-name">ChemTech Solutions</p>
        <div className="company-info">
          <p> Established 1999</p>
          <p> ISO 9001 Certified</p>
          <p> Over 10,000 Clients Worldwide</p>
          <Stack spacing={2} direction="column">
            <Button variant="contained" color="success">
              Documents
            </Button>
            <Button variant="contained" color="success">
              Products
            </Button>
            <Button
              variant="contained"
              color="success"
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
          </Stack>
        </div>
      </div>
      <div className="quick-actions-card">
        <h4>QUICK ACTIONS</h4>
        <Stack spacing={2} direction="column" alignItems="left">
          <Button
            variant="contained"
            style={{ fontSize: "0.8rem", padding: "8px 12px" }}
          >
            Request sample
          </Button>
          <Button
            variant="contained"
            style={{ fontSize: "0.8rem", padding: "8px 12px" }}
          >
            Chat to Expert
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default LeftSidebar;
