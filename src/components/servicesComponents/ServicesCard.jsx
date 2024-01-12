import Licon from '../ui/LIcon';

// iskelti i atskira komponenta
export default function ServiceCard({ title, icon, iconSize }) {
  return (
    <div className='service-card'>
      <Licon className='service-card__icon' size={iconSize}>
        {icon}
      </Licon>
      {/* <i className={`service-card__icon lnr ${icon}`}></i> */}
      <h3 className='service-card__title'>{title}</h3>
      <p className='service-card__text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}
