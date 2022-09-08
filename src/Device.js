import React, { useState } from "react"
import axios from "axios"
import Plot from "react-plotly.js"
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import CustomDateTimePicker from "./CustomDateTimePicker"
import "./Device.css"
import { parseWithOptions } from "date-fns/fp"

function Device(props) {
    const [res, setRes] = useState(null)
    const [time1, setTime1] = useState(null)
    const [time2, setTime2] = useState(null)

    let X
    let Y

    async function getData() {
        try {
            // get data fron thingspeak asynchronously
            const response = await axios.get(`https://api.thingspeak.com/channels/1848149/fields/${props.field}.json`)
            return response
        } catch (error) {
            console.log(error)
        }
    }

    function filterFeeds(feeds) {
        const feedsFiltered = time1? feeds.filter(feed => {
            const time = feed["created_at"]
            const leftBound = time1? time > timeFormatter(time1) : true
            const rightBound = time2? time < timeFormatter(time2) : true
            return leftBound && rightBound
        }) : feeds
        return feedsFiltered
    }

    function timeFormatter(date) {
        if(!date) return ""
        let str = ""
        str += date.getFullYear() + "-"

        if(1 + date.getMonth() < 10) {
            str += "0"
        }
        str += (1 + date.getMonth()) + "-"

        if(date.getDate() < 10) {
            str += "0"
        }
        str += date.getDate() + "T"

        if(date.getHours() < 10) {
            str += "0"
        }
        str += date.getHours() + ":" 

        if(date.getMinutes() < 10) {
            str += "0"
        }
        str += date.getMinutes() + ":"
        str += "00Z"
        return str
    }

    // if statement to avoid infinite render loop
    if (!res) {
        getData()
        // set res to rerender after receiving the response
        .then(res => setRes(res))
        .catch(err => console.log(err)) 
    }
    else {
        const feedsRaw = res.data.feeds
        const feeds = filterFeeds(feedsRaw)
        // const feeds = feedsRaw
        console.log(feeds)

        X = feeds.map((value, index) => {return value["created_at"]})
        Y = feeds.map((value, index) => {return value[`field${props.field}`]})
    }

    return (
        <div className="device">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
                {!res && <div>loading...</div>}
                {res &&
                    <div className="devicee">
                        {console.log("Y = ", Y)}
                        <Plot
                            data={[
                                {
                                    x: X,
                                    y: Y,
                                    type: "scatter",
                                    mode: "lines+markers",
                                    marker: {color: "red"},
                                    name: "Kettle"
                                },
                            ]}
                            layout={{
                                width: 1200,
                                height: 450,
                                title: props.name,
                                xaxis: {title: "Timeline"},
                                yaxis: {title: "Current"},
                            }}
                        />
                        <div className="time-container ctr">
                            <CustomDateTimePicker dateTime={time1} setDateTime={setTime1} />
                            <CustomDateTimePicker dateTime={time2} setDateTime={setTime2} />
                        </div>
                    </div>
                }
        </LocalizationProvider>
        </div>
    )
}

export default Device