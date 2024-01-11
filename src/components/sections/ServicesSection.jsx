import Grid from '../ui/Grid';
import SectionTitle from '../ui/SectionTitle';

// iskelti i atskira komponenta
function ServiceCard({ title, icon }) {
  return (
    <div className='service-card'>
      <i className={`service-card__icon lnr ${icon}`}></i>
      <h3 className='service-card__title'>{title}</h3>
      <p className='service-card__text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}

function ServicesSection() {
  return (
    <section className='services'>
      <div className='container'>
        <SectionTitle
          title='Our Services'
          subtTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        <Grid className='services__content'>
          <ServiceCard title='Web Design' icon='lnr-pie-chart' />
          <ServiceCard title='Web Design' icon='lnr-laptop' />
          <ServiceCard title='Web Design' icon='lnr-laptop' />
        </Grid>
      </div>
    </section>
  );
}

export default ServicesSection;
