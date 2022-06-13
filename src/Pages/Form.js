import React from "react";
function Form() {
    return (
        <section>
            <div class="container">
                <div class="form-section-title">
                    <h4 class="dont-hesitate">Don’t Hesitate To Ask</h4>
                    <h3 class="">FREE CONSULTATION</h3>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <form action="">
                            <div>
                                <label for="">Name</label>
                                <input type="text"  class="label-length"/>
                            </div>
                            <div class="labels-padding">
                                <label for="">Email</label>
                                <input type="text" class="label-length"/>
                            </div>
                            <div class="labels-padding">
                                <label for="">Phone Number</label>
                                <input type="text" class="label-length"/>
                            </div>
                            <div class="labels-padding">
                                <label for="">Message</label>
                                <textarea name="" id="" cols="30" rows="10" class="textarea-height"></textarea>
                            </div>
                        </form>
                        <button class="send-button">SEND</button>
                    </div>
                    <div class="col-md-6">
                        <img src="Components/images/form-img.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Form;