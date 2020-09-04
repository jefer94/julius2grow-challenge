import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import CardImage from './CardImage'
import CardTitle from './CardTitle'
import CardContent from './CardContent'
import CardUser from './CardUser'
import CardDate from './CardDate'

export default function Card({ image }) {
  return (
    <div style={{ width: 398 }}>
      <div style={{ height: 48 }}>
        <CardUser user="Jefer94" />
        <CardDate date="00/00/00" />
        <FontAwesomeIcon icon={faTrashAlt} style={{
          width: 28,
          height: 28,
          color: '#FF4C62'
        }}/>
      </div>
      <CardImage image={image} />
      <CardTitle title="Ahora no joven, estoy leyendo" />
      <CardContent content="Lorem ipsum dolor sit amet consectetur adipiscing elit et dapibus, justo nibh nec venenatis fusce cursus consequat dictum urna sociosqu, dictumst ultrices ac bibendum cum phasellus aliquam mi..." />
    </div>
  );
}