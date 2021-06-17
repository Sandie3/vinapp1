import { useState, useEffect } from 'react'


const AdminWineries = () => {
    return (
        <>
            <div className="adminAddWin">
                <form action="">
                    <input type="text" name="" id="" placeholder="Winerie name" />
                    <input type="text" name="" id="" placeholder="Location" />
                    <input type="text" name="" id="" placeholder="Coord X" />
                    <input type="text" name="" id="" placeholder="Coord Y" />
                    <textarea name="" id="" placeholder="Description" ></textarea>
                    <input type="file" name="" id="" placeholder="Upload image" />
                    <i class="fas fa-file-upload fa-2x adUpIco"></i>
                    <button>Save</button>
                </form>
            </div>

        </>
    )
}

export default AdminWineries
