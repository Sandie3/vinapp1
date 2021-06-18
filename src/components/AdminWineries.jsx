import { useState, useEffect } from 'react'

import { postWinerie } from '../apicall/wineries'

const AdminWineries = () => {
    
    const [message, setMessage] = useState()
    const [error, setError] = useState()
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
    
        postWinerie(formData).then(data => {
            console.log(data)
            setMessage(data);
            setError()
    
        }).catch(err => {
            console.log(err)
            setError('There was an error!')
            setMessage();
    
        })
    
    }
    return (
        <>
            <div className="adminAddWin">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Winerie name" />
                    <input type="text" name="location" placeholder="Location" />
                    <input type="number" name="coordx" placeholder="Coord X" />
                    <input type="number" name="coordy" placeholder="Coord Y" />
                    <textarea name="description" placeholder="Description" ></textarea>
                    <input type="file" name="image" placeholder="Upload image" />
                    <i className="fas fa-file-upload fa-2x adUpIco"></i>
                    <button>Save</button>
                </form>
            </div>
            {
                message &&
                <div>
                    <h2>Winerie was created</h2>
                </div>
            }
            {
                error &&
                <h2>{error}</h2>
            }
        </>
    )
}

export default AdminWineries
