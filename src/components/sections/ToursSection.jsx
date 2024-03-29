import Card from '../Card';
import SectionTitle from '../ui/SectionTitle';

export default function ToursSection() {
  const mainTitle = 'Turo datos';

  const cards = [
    {
      town: 'New York',
      date: 'Fri 27 Nov 2016',
      img: '/img/newyork.jpg',
    },
    {
      town: 'Parios',
      date: 'Fri 28 Nov 2016',
      img: '/img/paris.jpg',
    },
    {
      town: 'San Fran',
      date: 'Fri 29 Nov 2016',
      img: '/img/sanfran.jpg',
    },
  ];

  return (
    <section className='bands-section'>
      <div className='container'>
        <SectionTitle
          title={mainTitle}
          subTitle='Remember to book your tickets!'
        />
        {/* <h2 className='section__title'>{mainTitle}</h2>
        <p className='section__subtitle'>Remember to book your tickets!</p> */}

        <ul className='unlisted grid'>
          <Card cardData={cards[0]} />
          <Card cardData={cards[1]} />
          <Card cardData={cards[2]} />
        </ul>
      </div>
    </section>
  );
}
