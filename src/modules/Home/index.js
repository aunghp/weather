import { Navigation } from "../../shares/Navigation"
import Indonesia from "../../data/Indonesia.json";
import Malaysia from "../../data/Malaysia.json";
import Singapore from "../../data/Singapore.json";
import {useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import moment from 'moment';
import "./style.css";



export const Home = () => {
    const hourInterval = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];

    const countries = [Indonesia, Malaysia, Singapore];

    const [country, setCountry] = useState("NA");
    const [chooseDate, setChooseDate] = useState(moment().format("YYYY-MM-DD"));
    const [forecast, setForecast] = useState([]);

    const countryHandler = (e) => {
        setCountry(e);
        let chooseForecast = countries.filter(value => value.country === e);
        setForecast(chooseForecast);
    }

    useEffect(() => {
        setForecast(countries);
    }, []);
    return (
        <>
            <Navigation />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 mt-3">
                        <Form.Select onChange={(e) => countryHandler(e.target.value)}>
                            <option value="NA"> Choose Country </option>
                            <option value="Indonesia"> Indonesia </option>
                            <option value="Malaysia"> Malaysia </option>
                            <option value="Singapore"> Singapore </option>
                        </Form.Select>
                    </div>

                    <div className="col-12 col-md-3 mt-3">
                        <Form.Control type="date" value={chooseDate} onChange={(e) => setChooseDate(e.target.value)} />
                    </div>

                    {/* <div className="col-12forecastInfo.hour col-md-3 mt-3">
                        <Button onClick={() => submitHandler()}> Submit </Button>
                    </div> */}
                </div>


                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="forecast-wrapper mt-3">
                            <div className="forecast-data">
                                {forecast && forecast.map((value, index) => {
                                    let dailyforecast = [];

                                    value.dailyforecast.map((data) => {
                                        let checkHour = data.hour.split(" ")[1];
                                        if (moment(data.date).format("YYYY-MM-DD") === moment(chooseDate).format("YYYY-MM-DD") && hourInterval.includes(checkHour)) {
                                            dailyforecast.push(data);
                                        }
                                        return data;
                                    });

                                    console.log(dailyforecast);
                                    return (
                                        <div key={`country_id_${index}`} className="forecast-data-row">
                                            <label className="country-label">  {value.country} </label>
                                            <div className="forecast-data-info">
                                                {dailyforecast.length > 0 && dailyforecast.map((forecastInfo, index) => {
                                                    return (
                                                        <div key={`forecastInfo_id_${index}`} className="forecast-data-icon">
                                                            <label> {moment(forecastInfo.hour).format("HH:mm")} </label>
                                                            <img className="status-icon" src={forecastInfo.statusIcon} alt="" title="" />
                                                            <label> {forecastInfo.temperatureC} C / {forecastInfo.temperatureF} F</label>
                                                        </div>

                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}