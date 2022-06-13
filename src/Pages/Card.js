import React from 'react';

 function Card() {
    return(
        <div>
              <div className=" cardSection">
        <h1>WHY INITIATIVE COMPANY</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
            at its layout. The point of using Lorem</p>
        <div className=" row cards">
            <div className="col">
                <div className="aboutCard  ">
                    <div className="imgcard">
                        <img src="Components/images/card-img-1.png" alt="card-img-1" />
                    </div>
                    <div className="cardtittle">
                        <h2>10 YEARS EXPERIENCE</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                    </div>
                    <div className="cardbtn">
                        <a href="" className=" cardbutton">Read Me</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="aboutCard  ">
                    <div className="imgcard">
                        <img src="Components/images/card-img-2.png" alt="card-img-2" />
                    </div>
                    <div className="cardtittle">
                        <h2>A PRO ARCHITECTS TEAM</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                    </div>
                    <div className="cardbtn">
                        <a href="" className=" cardbutton">Read Me</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="aboutCard  ">
                    <div className="imgcard">
                        <img src="Components/images/card-img-3.png" alt="card-img-3"/>
                    </div>
                    <div className="cardtittle">
                        <h2>1000+ HAPPY CUSTOMERS</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                    </div>
                    <div className="cardbtn">
                        <a href="" className=" cardbutton">Read Me</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>

    );
}
export default Card;