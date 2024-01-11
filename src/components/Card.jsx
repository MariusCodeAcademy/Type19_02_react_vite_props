import Btn from './ui/Btn';

export default function Card({ cardData }) {
  return (
    <li className='band-card'>
      <img className='card__img' src={cardData.img} alt={cardData.town} />
      <div className='card__info'>
        <h3 className='card__title'>{cardData.town}</h3>
        <p className='card__date'>{cardData.date}</p>
        <p className='cart__text'>
          Praesent tincidunt sed tellus ut rutrum sed vitae justo.
        </p>
        {/* panaudoti btn is ui papkes  */}
        <Btn txt='Pirk dabar' color={'true'} primary={true} />
      </div>
    </li>
  );
}
