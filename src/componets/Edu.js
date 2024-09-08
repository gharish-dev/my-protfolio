import React from 'react';

function Edu() {
  return (
    <>
     <div className='container' id="education">
       <h1>Education </h1> 
       <table class="table" id="edu">
  <thead>
    <tr>
      
      <th scope="col">Course</th>
      <th scope="col">College</th>
      <th scope="col">Location</th>
      <th scope="col">CGPA</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th  >B.tech</th>
      <td>Audisanakara college of engineering & Technology</td>
      <td>Gudur,AP</td>
      <td>8.41</td>
    </tr>
    <tr>
      <th>Twelfth</th>
      <td>Priyadharshini junior college</td>
      <td>Atmakur,AP</td>
      <td>9.54</td>
    </tr>
    <tr>
      <th>SSC</th>
      <td >Vikas High School</td>
      <td>Ananthsagaram,Ap</td>
      <td>8.8</td>
    </tr>
  </tbody>
</table>
     </div>
    
    
    
    </>
  );
}

export default Edu;
