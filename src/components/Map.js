import GoogleMapReact from 'google-map-react'
import LocationMark from './LocationMark'
import LocationInfo from './LocationInfo'
import ValcanoesMark from './ValcanoesMark'
import StormMark from './StormMark'
import { useState } from 'react'

const Map = ({eventData, center, zoom }) => {
    const [info, setInfo] = useState(null)
    const markers = eventData.map((ev) => {
        if (ev.categories[0].id === 8) {
            return <LocationMark lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setInfo({id: ev.id, title: ev.title})}/>
        } 
        
        if(ev.categories[0].id === 10) {
            return <StormMark lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setInfo({id: ev.id, title: ev.title})}/>
        } 
        
        // if(ev.categories[0].id === 12) {
        //     return <ValcanoesMark lat={ev.geometries[0].coordinates[0]} lng={ev.geometries[0].coordinates[0]} onClick={() => setInfo({id: ev.id, title: ev.title})}/>
        // }

        return null
    })
   
    return (
        <div className="map">
            <GoogleMapReact 
                   bootstrapURLKeys={{ key: 'AIzaSyAmSP9PYDS--WyGzopcQqRNg3bOKgHe6Cc' }}
                   defaultCenter={center}
                   defaultZoom={zoom}>
                   {markers} 
            </GoogleMapReact>
            { info && <LocationInfo info={info}/>}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },

    zoom: 6
}

export default Map
