import Video from '../assets/video.mp4'
import { ReviewCard } from './ReviewCard'

export const Reseñas = () => {
  const reviews = [
    {
      name: 'Daniel Ríos',
      location: 'San Gerardo',
      image: 'https://astrolus-premium.netlify.app/images/avatars/avatar-2.webp',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
    },
    {
      name: 'Daniel Ríos',
      location: 'Villa de Guanajuato',
      image: 'https://astrolus-premium.netlify.app/images/avatars/avatar-2.webp',
      review: 'Illum aliquid quo eum quae quos illo laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
    },
    // Add more cities as needed
  ];
  const reviews2 = [
    {
      name: 'Daniel Ríos',
      location: 'Lagos Residencial',
      image: 'https://astrolus-premium.netlify.app/images/avatars/avatar-2.webp',
      review: 'Nostrum minus libero sit amet consectetur, adipisicing elit ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
    },
    {
      name: 'Daniel Ríos',
      location: 'Arcano',
      image: 'https://astrolus-premium.netlify.app/images/avatars/avatar-2.webp',
      review: 'Nostrum minus libero sit amet consectetur, adipisicing elit ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
    },
    {
      name: 'Daniel Ríos',
      location: 'Cumbres del Marqués',
      image: 'https://astrolus-premium.netlify.app/images/avatars/avatar-2.webp',
      review: 'Illum aliquid quo eum quae quos illo laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
    },
    // Add more cities as needed
  ];
  const reviews3 = [
    {
      name: 'Daniel Ríos',
      location: 'Villa Diamante',
      image: 'https://astrolus-premium.netlify.app/images/avatars/avatar-2.webp',
      review: 'Architecto laboriosam. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
    },
    {
      name: 'Daniel Ríos',
      location: 'Horizontes',
      image: 'https://astrolus-premium.netlify.app/images/avatars/avatar-2.webp',
      review: 'Illum aliquid quo deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
    },
    {
      name: 'Daniel Ríos',
      location: 'Puertas de San Miguel',
      image: 'https://astrolus-premium.netlify.app/images/avatars/avatar-2.webp',
      review: 'Illum aliquid quo deleniti aperiam ab veniam Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
    },
    // Add more cities as needed
  ];

  return (
    <section id="reseñas">
        <div className="mt-10 lg:mt-40 text-center mx-8 lg:mx-0">
            <h2 className="font-bold text-3xl lg:text-4x">
              Ellos ya compraron su casa
            </h2>
            <hr className='border-b-8 border-sky-700 w-80 mx-auto mt-2'/>
            <div className='grid lg:grid-cols-3 gap-6 mt-20'>
            <div>
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
            <div>
              {reviews2.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
            <div>
              {reviews3.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
            </div>
            <iframe
              width="100%"
              height="315"
              src="https://youtu.be/WsujCFzHIs8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
        </div>
    </section>
  )
}