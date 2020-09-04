import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import CardImage from './CardImage';
import CardTitle from './CardTitle';
import CardContent from './CardContent';
import CardUser from './CardUser';

export default function CardDate({ date }) {
  return (
    <span style={{
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 200,
      fontSize: '12px',
      lineHeight: '14px'
    }}>
      {` - ${date}`}
    </span>
  )
}