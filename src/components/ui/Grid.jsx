export default function Grid({ children, colsNr }) {
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
