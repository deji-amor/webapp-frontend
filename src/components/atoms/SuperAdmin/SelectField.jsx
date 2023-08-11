import { FormControl, MenuItem, TextField } from "@mui/material";
import { useEffect } from "react";
import { addErrorIntoField } from "../../../utilis";
import ErrorMessage from "../../atoms/SuperAdmin/ErrorMessage";

const SelectFields = ({
  errors,
  countryProp,
  location,
  countryStates,
  handleChange,
  setCountryStates,
}) => {
  const { country, state } = location;

  const countryList = [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "MX", name: "Mexico" },
  ];

  useEffect(() => {
    if (country) {
      const countryStates = fetchStatesForCountry(country);
      setCountryStates(countryStates);
    }
  }, [country]);

  const fetchStatesForCountry = (country) => {
    const stateData = {
      US: ["California", "New York", "Texas"],
      CA: ["Ontario", "Quebec", "British Columbia"],
      MX: ["Jalisco", "Quintana Roo", "Nuevo León"],
    };

    return stateData[country] || [];
  };

  const handleCountryChange = (event) => {
    handleChange(event);
    if (errors[countryProp]) {
      errors[countryProp] = null;
    }
  };

  return (
    <FormControl
      fullWidth
      sx={{
        mb: "0.5rem",
        color: "#4F4F4F",
        fontSize: "14px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "6px",
          background: "#FFFFFF",
          color: "#2B2E72",
          fontSize: "15px",
          fontWeight: "400",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#B5B5BD",
          borderWidth: "1px",
          borderStyle: "solid",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#898989",
          color: "#828282",
        },
      }}
    >
      <label style={{ color: "#4F4F4F", fontSize: "14px", fontWeight: "500" }}>Country</label>
      <TextField
        {...addErrorIntoField(errors[countryProp])}
        select
        name="country"
        value={country}
        onChange={handleCountryChange}
        InputLabelProps={{
          style: { color: "#898989" },
        }}
      >
        <MenuItem value="">Select Country</MenuItem>
        {countryList.map((country) => (
          <MenuItem key={country.code} value={country.code}>
            {country.name}
          </MenuItem>
        ))}
      </TextField>
      {errors[countryProp] ? (
        <ErrorMessage message={errors[countryProp].message} />
      ) : null}

      {country && (
        <>
          <label style={{ marginTop: "25px", color: "#4F4F4F", fontSize: "14px", fontWeight: "500" }}>State</label>
          <TextField
            select
            name="state"
            value={state}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              style: { color: "#898989" },
            }}
          >
            <MenuItem value="">Select State</MenuItem>
            {countryStates.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </TextField>
        </>
      )}
    </FormControl>
  );
};

export default SelectFields;
