const PageLink = ({ link, itemClass }) => {
  const { id, href, text } = link;
  return (
    <li key={id}>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  );
};
export default PageLink;
