function MyButton({ children }) {
  return <button>{children}</button>;
}

export default function ProjectsSection() {
  return (
    <div className='container'>
      <h2>Projects</h2>

      <MyButton>This is btn1</MyButton>
      <MyButton>This is text</MyButton>
    </div>
  );
}
