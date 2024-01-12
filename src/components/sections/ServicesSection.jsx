import ServiceCard from '../servicesComponents/ServicesCard';
import Grid from '../ui/Grid';
import SectionTitle from '../ui/SectionTitle';

function ServicesSection() {
  return (
    <section className='services'>
      <div className='container'>
        <SectionTitle
          title='Our Services'
          subtTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        <Grid className='services__content'>
          <ServiceCard title='Web Design' icon='lnr-pie-chart' iconSize='lg' />
          <ServiceCard title='Web Design' icon='lnr-laptop' />
          <ServiceCard title='Web Design' icon='lnr-laptop' />
        </Grid>
      </div>
    </section>
  );
}

export default ServicesSection;
