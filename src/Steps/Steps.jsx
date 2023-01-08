import React from "react";


function Steps() {
    return (
        // <div>
        // <p className="stepara">Calculate number of steps to walk per day, to maintain a healthy lifestyle!</p>

        // </div>
        <div className="row">
            <div className="col-lg-6 md-6 sm-12">
                <p className="stepara">Calculate <u>number of steps</u> to walk per day, to maintain a healthy lifestyle!</p>
                <p className="beta">In Beta mode, the calculation might not be very accurate due to data limitations.</p>

            </div>
            <div className="step-form col-lg-6 md-6 sm-12">
                <form action='https://shawshank1104.pythonanywhere.com//predictSteps' method="post" style={{display: 'inline-block'}}>
                    <div class="row mb-3">
                        <label for="height" class="col-sm-2 col-form-label">Height</label>
                        <div class="col-sm-10">
                            <input name="height" type="text" placeholder="Please Enter Your Height (in cm)" class="form-control" id="height"  required />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="weight" class="col-sm-2 col-form-label">Weight</label>
                        <div class="col-sm-10">
                            <input placeholder="Please Enter Your Weight" name="weight" type="text" class="form-control" id="weight"  required />
                        </div>
                    </div>

                    <button type="submit" class="submit btn btn-success">Calculate</button>
                </form>
            </div>

        </div>
    )
}

export default Steps;