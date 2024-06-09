import React from "react";
import {
  Slider,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Pagination,
} from "@mui/material";
import ChemicalList from "./search/ChemicalList";
import MainHeader from "./search/MainHeader";
import styles from "./styles/SearchPage.module.scss";

const SearchPageTemplate = () => {
  // Example chemicals data
  const chemicals = [
    { id: 1, name: "Sodium Chloride", description: "Common salt.", casNumber: "7647-14-5" },
    { id: 2, name: "Ethanol", description: "Alcohol found in beverages.", casNumber: "64-17-5" },
    { id: 3, name: "Acetic Acid", description: "Vinegar's main component.", casNumber: "64-19-7" }
  ];

  return (
    <div>
      <MainHeader />
      <div className={styles["main-content"]}>
        <div className={styles["job-filters"]}>
          {/* Filter components here */}
        </div>
        <div className={styles["job-list"]}>
          <ChemicalList chemicals={chemicals}></ChemicalList>
          <div className={styles["pagination-container"]}>
            <Pagination
              count={10}
              variant="outlined"
              shape="rounded"
              size="large"
              showFirstButton
              showLastButton
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPageTemplate;
