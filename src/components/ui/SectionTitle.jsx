export default function SectionTitle(props) {
  console.log('props ===', props);

  const arYraSubtitle = props.subTitle ? true : false;
  console.log('arYraSubtitle ===', arYraSubtitle);

  // if (!props.subTitle) {
  //   return <h2 className='section__title'>{props.title}</h2>;
  // }

  return (
    <>
      <h2 className='section__title'>{props.title}</h2>
      {/* {props.subTitle ? (
        <p className='section__subtitle'>{props.subTitle}</p>
      ) : null} */}

      {props.subTitle && <p className='section__subtitle'>{props.subTitle}</p>}
    </>
  );
}
