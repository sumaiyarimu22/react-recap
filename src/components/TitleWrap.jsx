const TitleWrap = ({ title, link = "" }) => {
  return (
    <div className='title-wrap'>
      <h3 className='title'>{title}</h3>
      <a href={link} className='title-link'>
        View all
      </a>
    </div>
  );
};

export default TitleWrap;
