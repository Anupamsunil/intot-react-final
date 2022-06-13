import React from "react";

 function Portfolio(){
    return(
        <div>
    <section className="portfolio_section layout_padding2">
   <div className="container">
     <h2>
       OUR PORTFOLIO
     </h2>
     <p>
       It is a long established fact that a reader will be distracted by the readable content of a page when looking at
       its layout. The point of using Lorem
     </p>
   </div>
   <div className="container layout_padding2-top ">
     <div className="row">
       <div className="col-md-8">
         <div className="portfolio_img-box">
           <img src="Components/images/portfolio-img-1.png" alt=""/>
         </div>
       </div>
       <div className="col-md-4">
         <div className="portfolio_img-box">
           <img src="Components/images/portfolio-img-2.jpg" alt=""/>
         </div>
       </div>
       <div className="col-md-4">
         <div className="portfolio_img-box">
           <img src="Components/images/portfolio-img-3.png" alt=""/>
         </div>
       </div>
       <div className="col-md-8">
         <div className="portfolio_img-box">
           <img src="Components/images/portfolio-img-4.png" alt=""/>
         </div>
       </div>
     </div>
   </div>
 </section>
        </div>
    );
}
export default Portfolio;