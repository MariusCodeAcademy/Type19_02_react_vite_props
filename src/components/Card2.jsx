import Btn from './ui/Btn';

export default function Card2() {
  const cardData = {
    town: 'Parios',
    date: 'Fri 28 Nov 2016',
    img: '/img/paris.jpg',
  };
  return (
    <li className='band-card'>
      <img className='card__img' src={cardData.img} alt={cardData.town} />
      <div className='card__info'>
        <h3 className='card__title'>{cardData.town}</h3>
        <p className='card__date'>{cardData.date}</p>
        <p className='cart__text'>
          Praesent tincidunt sed tellus ut rutrum sed vitae justo.
        </p>
        <Btn />
      </div>
    </li>
  );
}
