// iskelti mygtuka i ui/Btn.js
export default function Btn({ txt = 'Buy', color, primary }) {
  // console.log('props ===', props);
  // console.log('primary ===', primary);
  // console.log('color ===', color);

  return <button className='btn'>{txt}</button>;
}
