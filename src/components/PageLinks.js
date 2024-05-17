import { pageLinks } from '../data';
import { PageLink } from '.';

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id='nav-links'>
      {pageLinks.map((link) => {
        const { id } = link;
        return <PageLink key={id} link={link} itemClass={itemClass} />;
      })}
    </ul>
  );
};
export default PageLinks;
