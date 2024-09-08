import React from 'react';
import experience from '../data/expre.json'

function Experiment() {
  return (
    <>
    <div className="container" id="exp">
        <h1>EXPERIENCE</h1>
{experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className=" ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
                
              >
                
                
                <div className="exp">
                  <h2>{data.role}</h2>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {data.endDate}{" "}
                    </span>{" "}
                    
                  </h4>
                  <h5 style={{ color: "yellow" }}>{data.experiences[0]}</h5>
                  <h5 style={{ color: "yellow" }}>{data.experiences[1]}</h5>
                </div>
                <div className="left">
                <a 
      href={data.l}  
      className='btn btn-outline-warning'>sorce code </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
      
    </>
  );
}

export default Experiment;
