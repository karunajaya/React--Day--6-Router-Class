import React from "react";

function Contact() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <label htmlFor="">Name</label>
                    <input type="text" name="" className="form-control" />
                </div>
                <div className="col-lg-6">
                    <label htmlFor="">Email</label>
                    <input type="text" name="" className="form-control" />
                </div>
                <div className="col-lg-12">
                    <label htmlFor="">Message</label>
                    <input type="text" name="" className="form-control" />
                </div>
                <div className="col-lg-12 mt-2">
                    <input className="btn btn-primary" type="submit" value={"submit"}/>
                </div>
            </div>
        </div>
    );
}

export default Contact;
