import Grid from '../ui/Grid';
import SectionTitle from '../ui/SectionTitle';

function MyButton({ children }) {
  return <button>{children}</button>;
}

export default function ProjectsSection() {
  return (
    <div className='container'>
      <SectionTitle title='Projects' />
      <Grid colsNr={0}>
        <MyButton>This is btn1</MyButton>
        <MyButton>This is btn2</MyButton>
        <MyButton>This is text</MyButton>
      </Grid>
    </div>
  );
}
