import { useState } from 'react';
import "./Donation.css";

function Donation() {
    const [amount, setAmount] = useState('');
    const [selectedAmount, setSelectedAmount] = useState('10');

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleRadioChange = (e) => {
        setSelectedAmount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            amount: amount || selectedAmount,
        };

        fetch(" ", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Authorization: "Bearer " + token, // Uncomment if you need to include an auth token
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log("Success:", data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };

    return (
        <>
            <div data-scroll-index="1" className="make_donation_area section_padding">
                <div className="container">
                    <div className="row justify-content-center" style={{display:"block"}}>
                        <div className="col-lg-6">
                            <div className="section_title text-center mb-55">
                                <h3><span>Make a Donation</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center"style={{display:"block"}}>
                        <div className="col-lg-6">
                            <form onSubmit={handleSubmit} className="donation_form">
                                <div className="row align-items-center" >
                                    <div className="col-md-4">
                                        <div className="single_amount">
                                            <div className="input_field">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1">$</span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="40,200"
                                                        aria-label="Amount"
                                                        aria-describedby="basic-addon1"
                                                        value={amount}
                                                        onChange={handleAmountChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="single_amount">
                                            <div className="fixed_donat d-flex align-items-center justify-content-between">
                                                <div className="select_prise">
                                                    <h4>Select Amount:</h4>
                                                </div>
                                                <div className="single_doonate">
                                                    <input
                                                        type="radio"
                                                        id="blns_1"
                                                        name="radio-group"
                                                        value="10"
                                                        checked={selectedAmount === '10'}
                                                        onChange={handleRadioChange}
                                                    />
                                                    <label htmlFor="blns_1">10</label>
                                                </div>
                                                <div className="single_doonate">
                                                    <input
                                                        type="radio"
                                                        id="blns_2"
                                                        name="radio-group"
                                                        value="30"
                                                        checked={selectedAmount === '30'}
                                                        onChange={handleRadioChange}
                                                    />
                                                    <label htmlFor="blns_2">30</label>
                                                </div>
                                                <div className="single_doonate">
                                                    <input
                                                        type="radio"
                                                        id="Other"
                                                        name="radio-group"
                                                        value="Other"
                                                        checked={selectedAmount === 'Other'}
                                                        onChange={handleRadioChange}
                                                    />
                                                    <label htmlFor="Other">Other</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{display:"block"}}>
                                    <div className="col-12">
                                        <div className="donate_now_btn text-center">
                                            <button type="submit" className="boxed-btn4">Donate Now</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Donation;
