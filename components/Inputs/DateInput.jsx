import React from "react";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import "dayjs/locale/es";
const locales = ["es"];
const DateInput = (clean) => {
  const [locale, setLocale] = React.useState("es");
  const [value, setValue] = React.useState(
    dayjs(
      new Date().getDate() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getFullYear()
    )
  );

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    setValue(
      dayjs(
        new Date().getDate() +
          "-" +
          (new Date().getMonth() + 1) +
          "-" +
          new Date().getFullYear()
      )
    )
    
  }, [clean]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
      <Stack spacing={3} style={{ width: "100%" }} >
        <DesktopDatePicker
          required
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default DateInput;
