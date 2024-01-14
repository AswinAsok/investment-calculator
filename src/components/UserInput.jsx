import { useState } from "react";

const UserInput = ({ handleChange, userInput }) => {
    return (
        <>
            <div id="user-input">
                <div className="input-group">
                    <p>
                        <label htmlFor="">Inital Investment</label>
                        <input
                            onChange={(e) => {
                                handleChange(
                                    "initialInvestment",
                                    e.target.value
                                );
                            }}
                            value={userInput.initialInvestment}
                            type="number"
                            name=""
                            id=""
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="">Annual Investment</label>
                        <input
                            onChange={(e) => {
                                handleChange(
                                    "annualInvestment",
                                    e.target.value
                                );
                            }}
                            type="number"
                            value={userInput.annualInvestment}
                            id=""
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="">Expected Return</label>
                        <input
                            onChange={(e) => {
                                handleChange("expectedReturn", e.target.value);
                            }}
                            type="number"
                            value={userInput.expectedReturn}
                            name=""
                            id=""
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="">Duration</label>
                        <input
                            onChange={(e) => {
                                handleChange("duration", e.target.value);
                            }}
                            value={userInput.duration}
                            type="number"
                            name=""
                            id=""
                            required
                        />
                    </p>
                </div>
            </div>
        </>
    );
};

export default UserInput;
