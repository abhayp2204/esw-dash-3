import "./App.css";
import React, { useState } from "react"
import { Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers"

function App() {
    const [selectedDate, setSelectedDate] = useState(null)

    function timeFilter(feed) {
        return true
        // return feed["created_at"] < formatTime(dateValue)
    }

    function formatTime(date) {
        let str = ""
        str += date.getFullYear() + "-"
        str += (1 + date.getMonth()) + "-"
        str += date.getDate() + "T"
        str += date.getHours() + ":"
        str += date.getMinutes() + ":"
        str += "00Z"
        return str
    }

    return (
        <Stack>
            <DatePicker
                label="Date Picker"
                renderInput={(params) => <TextField {...params}/>}
                value={selectedDate}
                onChange={(newSelectedDate) => setSelectedDate(newSelectedDate)}
            />
        </Stack>
    );
}

export default App;
