
const Admin = () => {
    return (
        <>
        <div className="adminContent">
            <h2 id="adminHeadline" style={{fontSize:"30px", marginBottom:"20px",marginTop:"20px", textAlign:"center"}}>Admin Page</h2>

            <h3 style={{fontSize:"22px", marginLeft: "20px", marginRight: "20px", border:"2px solid black", padding:"10px", marginBottom:"5px", cursor:"pointer"}}>View Bookings</h3>
            <h3 style={{fontSize:"22px", marginLeft: "20px", marginRight: "20px", border:"2px solid black", padding:"10px", marginBottom:"5px", cursor:"pointer"}}>Add Wineries</h3>
            <h3 style={{fontSize:"22px", marginLeft: "20px", marginRight: "20px", border:"2px solid black", padding:"10px", marginBottom:"45px", cursor:"pointer"}}>Manage Visitors</h3>
        </div>

        <div style={{backgroundColor: "white", border:"1px solid gray", height: "483px", width:"389px", marginLeft: "20px", marginRight: "20px" }} className="adminComponent">

            {/*  Component - Booking */}
            <input id="bookingSearchbar"  type="text" placeholder="Search" style={{fontSize:"22px", width:"100%", marginBottom:"20px", textAlign:"center"}} />

            <div style={{
                marginBottom:"20px",
                padding: "10px",
                backgroundColor: "rgb(162, 14, 135)",
                borderRadius: "10px",
                color: "white",
                display:"grid",
                gridTemplateColumns:"1fr 1fr",
                gridTemplateRows:"1fr"
            }} 
            className="bookingContentHolder">
                <h3>Booking Nummer: </h3>
                <div id="bookingContentButtons">
                    <button>Edit</button>
                    <button style={{marginLeft:"20px"}}>Delete</button>
                </div>
                <h3>Email: </h3>
                <h3>Dato: </h3>
                <h3>Navn: </h3>
                <h3>Telefon Nummer: </h3>
            </div>

            <div style={{
                marginBottom:"20px",
                padding: "10px",
                backgroundColor: "rgb(162, 14, 135)",
                borderRadius: "10px",
                color: "white",
                display:"grid",
                gridTemplateColumns:"1fr 1fr",
                gridTemplateRows:"1fr"
            }} 
            className="bookingContentHolder">
                <h3>Booking Nummer: </h3>
                <div id="bookingContentButtons">
                    <button>Edit</button>
                    <button style={{marginLeft:"20px"}}>Delete</button>
                </div>
                <h3>Email: </h3>
                <h3>Dato: </h3>
                <h3>Navn: </h3>
                <h3>Telefon Nummer: </h3>
            </div>

            <div style={{
                marginBottom:"20px",
                padding: "10px",
                backgroundColor: "rgb(162, 14, 135)",
                borderRadius: "10px",
                color: "white",
                display:"grid",
                gridTemplateColumns:"1fr 1fr",
                gridTemplateRows:"1fr"
            }} 
            className="bookingContentHolder">
                <h3>Booking Nummer: </h3>
                <div id="bookingContentButtons">
                    <button>Edit</button>
                    <button style={{marginLeft:"20px"}}>Delete</button>
                </div>
                <h3>Email: </h3>
                <h3>Dato: </h3>
                <h3>Navn: </h3>
                <h3>Telefon Nummer: </h3>
            </div>
            

            

        </div>
        </>
    )
}

export default Admin
