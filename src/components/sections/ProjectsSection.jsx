import SectionTitle from '../ui/SectionTitle';

function MyButton({ children }) {
  return <button>{children}</button>;
}

function Grid({ children, colsNr }) {
  // clase turetu buti 'grid' jei nepaduotas colsNr

  // turetu buti 'grid grid-${colsNr}' jei paduotas colsNr

  let resultClass = 'grid ';

  if (colsNr) {
    resultClass += `grid-${colsNr}`;
  }

  console.log('resultClass ===', resultClass);

  return <div className={resultClass}>{children}</div>;
  // return (
  //   <div className={`grid ${colsNr ? `grid-${colsNr}` : ''}`}>{children}</div>
  // );
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
