import React from 'react';

export default function SalesDashboard() {
  return (
    <div>
      <h1>Sales Performance Dashboard</h1>
      <div
        style={{
           height: "100vh", width: "100%", marginTop:"20px"  
          //  ,transform: "scale(1.1)",
      //  transformOrigin: "top center",
        }}
      >
      <iframe 
        title="Sales Dashboard"
        src="https://drive.google.com/file/d/1vuieE7xSTP7G8aeGK5ezwPlPqszDpUHe/preview"
        className="powerbi-container"
        frameBorder="0"
        allowFullScreen={true}
      />
      </div>
    </div>
  );
}
// import React from 'react';
// import '../App.css';
// export default function SalesDashboard() {
//   return (
//     <div style={{ overflow: "hidden", height: "90vh" }}>
//       <h1>Sales Performance Dashboard</h1>
//        <div
//         style={{
//            height: "100vh", width: "100%"  
//       //      ,transform: "scale(1.625)",
//       //  transformOrigin: "top center",
//         }}
//       >
//       <iframe 
//   title="Sales Dashboard PDF"
//   src="https://drive.google.com/file/d/1BRUlgcqvncPB0TRL2PJKm-3To97FdnuJ/preview"
//   className="powerbi-container"
//   style={{
//       width: "100%",
//       height: "100vh",
//       border: "none",
//       marginTop:"30px",
//     }}
// /></div>
//     </div>
//   );
// }
