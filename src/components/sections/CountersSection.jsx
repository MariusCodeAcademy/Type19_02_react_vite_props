import Grid from '../ui/Grid';
import MyCounter from '../ui/MyCounter';

export default function CountersSection() {
  return (
    <div className='container'>
      <Grid colsNr={4}>
        <MyCounter title='Posts posted' value='3377' />
        <MyCounter title='Push ups' value='487' />
        <MyCounter title='Letters sent' value='5478' />
        <MyCounter title='Email received' value='1999' />
      </Grid>
    </div>
  );
}
