//

export default function Licon(props) {
  console.log('props ===', props);

  const gotClass = props.className ? props.className : '';

  const myStyle = {
    fontSize: '50px',
    color: 'tomato',
  };

  return (
    <i
      style={props.size === 'lg' ? myStyle : {}}
      className={`${gotClass} lnr ${props.children} `}></i>
  );
}
// <i className={`lnr lnr-pie-chart`}></i>
// lnr-pie-chart - turetu buti reiksme is props

// panaudojimas
{
  /* <Licon>lnr-pie-chart</Licon>; */
}
// arba
{
  /* <Licon icon='lnr-pie-chart' /> */
}
