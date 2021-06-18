import { useState, useEffect } from 'react'


const AdminWineries = () => {
    return (
        <>
            <div className="adminAddWin">
                <form action="">
                    <input type="text" name="name" placeholder="Winerie name" />
                    <input type="text" name="location" placeholder="Location" />
                    <input type="text" name="coordx" placeholder="Coord X" />
                    <input type="text" name="coordy" placeholder="Coord Y" />
                    <textarea name="description" placeholder="Description" ></textarea>
                    <input type="file" name="image" placeholder="Upload image" />
                    <i className="fas fa-file-upload fa-2x adUpIco"></i>
                    <button>Save</button>
                </form>
            </div>

        </>
    )
}

export default AdminWineries
