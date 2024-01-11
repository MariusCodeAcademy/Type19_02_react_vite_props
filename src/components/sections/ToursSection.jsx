import Card1 from '../Card1';
import Card2 from '../Card2';
import Card3 from '../Card3';

export default function ToursSection() {
  const mainTitle = 'Turo datos';
  return (
    <section className='bands-section'>
      <div className='container'>
        <h2 className='section__title'>{mainTitle}</h2>
        <p className='section__subtitle'>Remember to book your tickets!</p>

        <ul className='unlisted grid'>
          <Card1 />
          <Card2 />
          <Card3 />
        </ul>
      </div>
    </section>
  );
}
