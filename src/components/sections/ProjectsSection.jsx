function MyButton({ children }) {
  return <button>{children}</button>;
}

function Grid({ children }) {
  return <div className='grid'>{children}</div>;
}

export default function ProjectsSection() {
  return (
    <div className='container'>
      <h2>Projects</h2>
      <Grid cols='3'>
        <MyButton>This is btn1</MyButton>
        <MyButton>This is btn2</MyButton>
        <MyButton>This is text</MyButton>
      </Grid>
    </div>
  );
}
