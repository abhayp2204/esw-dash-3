import "./App.css";
import React from "react"
import { Stack, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers"

function CustomDateTimePicker(props) {
    return (
        <Stack spacing={2} sx={{width: "250px"}}>
            <DateTimePicker
                label="Date Time Picker"
                renderInput={(params) => <TextField {...params}/>}
                value={props.dateTime}
                onChange={(t) => props.setDateTime(t)}
            />
        </Stack>
    );
}

export default CustomDateTimePicker;
