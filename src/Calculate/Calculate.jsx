import React from "react";
// import { useState } from "react";
// import axios from "axios"
// import { Link, useNavigate } from "react-router-dom";


function Calculate() {

    // const navigate = useNavigate ();
    // const [FormData, setFormData] = useState ({
    //     data1 : '',
    //     data2 : '',
    //     data3 : '',
    //     data4 : ''
    // });

    // const [prediction, setPrediction] = useState(null);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.post("http://127.0.0.1:5000//predict", FormData).then(Response => {
    //         const prediction = Response.data.prediction;
    //         setPrediction (prediction);

    //         navigate ()

    //     })
    // }




    return (
        <div className="form" id="form">
            <form action='http://127.0.0.1:5000//predict' method="post">


                <fieldset class="row mb-3">
                    <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="M" checked />
                            <label class="form-check-label" for="gridRadios1">
                                Male
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="F" />
                            <label class="form-check-label" for="gridRadios2">
                                Female
                            </label>
                        </div>
                        <div class="form-check disabled">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                            <label class="form-check-label" for="gridRadios3">
                                Other genders (disabled due to data limitations)
                            </label>
                        </div>
                    </div>
                </fieldset>
                <div class="row mb-3">
                    <label for="age" class="col-sm-2 col-form-label">Age</label>
                    <div class="col-sm-10">
                        <input name="age" type="text" placeholder="Please Enter Your Age" class="form-control" id="age" style={{ width: '50%' }} required />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="height" class="col-sm-2 col-form-label">Height</label>
                    <div class="col-sm-10">
                        <input name="height" type="text" placeholder="Please Enter Your Height (in metres)" class="form-control" id="height" required />
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="weight" class="col-sm-2 col-form-label">Weight</label>
                    <div class="col-sm-10">
                        <input placeholder="Please Enter Your Weight" name="weight" type="text" class="form-control" id="weight" required />
                    </div>
                </div>

                <fieldset class="row mb-3">
                    <legend class="col-form-label col-sm-2 pt-0">Your Activity Level</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadiosxyz" id="gridRadios4" value="1.2" checked />
                            <label class="form-check-label" for="gridRadios1">
                                Sedentary (little to no exercise, desk job)
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadiosxyz" id="gridRadios5" value="1.375" />
                            <label class="form-check-label" for="gridRadios2">
                                Lightly active (light exercise/sports 1-3 days/week)
                            </label>
                        </div>
                        <div class="form-check disabled">
                            <input class="form-check-input" type="radio" name="gridRadiosxyz" id="gridRadios6" value="1.55" />
                            <label class="form-check-label" for="gridRadios3">
                                Moderately active (moderate exercise/sports 6-7 days)
                            </label>
                        </div>
                        <div class="form-check disabled">
                            <input class="form-check-input" type="radio" name="gridRadiosxyz" id="gridRadios7" value="1.725" />
                            <label class="form-check-label" for="gridRadios3">
                                Very active (hard exercise every day, or 2 xs/day)
                            </label>
                        </div>
                        <div class="form-check disabled">
                            <input class="form-check-input" type="radio" name="gridRadiosxyz" id="gridRadios8" value="1.9" />
                            <label class="form-check-label" for="gridRadios3">
                                Extra active (hard exercise 2 or more times per day)
                            </label>
                        </div>
                    </div>
                </fieldset>

                <button type="submit" class="submit btn btn-success">GET HEALTHY!</button>
            </form>

        </div>
    )
}

export default Calculate;