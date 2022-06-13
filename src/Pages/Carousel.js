import React from 'react';


 function Carousel() {
    return(
        <div>
                 <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="d-block w-100">
                        <div className="row">
                            <div className="container headercontent col-md-3 offset-md-2">
                                <h1 className="text-white headtext">INNOVATIVE
                                    <h2 className="text-dark">SOLUTION</h2>
                                </h1>
                                <p className="text-white">
                                    We find the best solutions fot you, we redesign your home and work places.
                                    Discover why over 5,100 home owners trust initiative
                                </p>
                                <button className="  readbtn">
                                    Read More
                                </button>
                            </div>
                            <div className="container col-md-7 sliderimg">
                                <img className="headerimage" src="Components/images/slider-img.png" alt="slider-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-block w-100">
                        <div className="row">
                            <div className="container headercontent col-md-3 offset-md-2">
                                <h1 className="text-white headtext">INNOVATIVE
                                    <h2 className="text-dark">SOLUTION</h2>
                                </h1>
                                <p className="text-white">
                                    We find the best solutions fot you, we redesign your home and work places.
                                    Discover why over 5,100 home owners trust initiative
                                </p>
                                <button className="  readbtn">
                                    Read More
                                </button>
                            </div>
                            <div className="container col-md-7 sliderimg">
                                <img className="headerimage" src="Components/images/slider-img.png" alt="slider-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carouselprev"  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <img src="Components/images/prev.png" alt="prev" />
            </button>
            <button className="carouselNext" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <img src="Components/images/next.png" alt="next"/>
            </button>
        </div>  
        </div>
    );

}
export default Carousel;