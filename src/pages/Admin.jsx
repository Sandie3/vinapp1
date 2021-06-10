
const Admin = () => {
    return (
        <>
        <div className="adminContent">
            <h2 id="adminHeadline" style={{fontSize:"30px", marginBottom:"20px",marginTop:"20px", textAlign:"center"}}>Admin Page</h2>

            <h3 style={{fontSize:"22px", marginLeft: "20px", marginRight: "20px", border:"2px solid black", padding:"10px", marginBottom:"5px", cursor:"pointer"}}>View Bookings</h3>
            <h3 style={{fontSize:"22px", marginLeft: "20px", marginRight: "20px", border:"2px solid black", padding:"10px", marginBottom:"5px", cursor:"pointer"}}>Add Wineries</h3>
            <h3 style={{fontSize:"22px", marginLeft: "20px", marginRight: "20px", border:"2px solid black", padding:"10px", marginBottom:"45px", cursor:"pointer"}}>Manage Visitors</h3>
        </div>

        <div style={{backgroundColor: "white", border:"1px solid gray", height: "483px", width:"401px", marginLeft: "20px", marginRight: "20px" }} className="adminComponent">

        </div>
        </>
    )
}

export default Admin
