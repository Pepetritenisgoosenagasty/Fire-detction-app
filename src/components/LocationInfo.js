const LocationInfo = ({ info }) => {
    return (
        <div className="location-info">
            <ul>
               <li>ID: <strong>{info.id}</strong></li>
               <li>Title: <strong>{info.title}</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfo
