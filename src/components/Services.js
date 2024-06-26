import { services } from '../data';
import { Title, Service } from '.';

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subtitle='services' />
      <div className='section-center services-center'>
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return <Service id={id} icon={icon} title={title} text={text} />;
        })}
      </div>
    </section>
  );
};
export default Services;
