import { Icon } from '@iconify/react'
import CloudIcon from '@iconify/icons-mdi/cloud-alert'

const StormMark = ({lat, lng, onClick}) => {
    return (
        <div className="cloud-marker" onClick={onClick}>
            <Icon icon={CloudIcon} className="cloud-icon"/>
        </div>
    )
}

export default StormMark
