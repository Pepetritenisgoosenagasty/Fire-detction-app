import { Icon } from '@iconify/react'
import ValcanoIcon from '@iconify/icons-mdi/campfire'

const StormMark = ({lat, lng, onClick}) => {
    return (
        <div className="valcano-marker" onClick={onClick}>
            <Icon icon={ValcanoIcon} className="valcano-icon"/>
        </div>
    )
}

export default StormMark
