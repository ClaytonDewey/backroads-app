import { tours } from '../data';
import { Tour } from '.';

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <div className='section-title'>
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className='section-center featured-center'>
        {tours.map((tour) => {
          const { id, image, date, title, info, location, duration, cost } =
            tour;
          return (
            <Tour
              id={id}
              image={image}
              date={date}
              title={title}
              info={info}
              location={location}
              duration={duration}
              cost={cost}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
