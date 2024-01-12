export default function MyCounter(props) {
  console.log('props ===', props);
  return (
    <div className='counter tac'>
      <p className='counter__value'>{props.value}</p>
      <h3 className='counter__title'>{props.title}</h3>
    </div>
  );
}
