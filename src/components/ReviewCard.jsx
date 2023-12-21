

export const ReviewCard = ({ name, image, location, review }) => {
  return (
    <div className="border rounded-2xl bg-gray-50 mb-6 p-8">
        <div className="flex items-center">
            <img src={image} alt="" className="rounded-full h-20" />
            <div className="ml-6 text-left">
                <h3>{name}</h3>
                <p>{location}</p>
            </div>
        </div>
        <p className="mt-6 text-left">{review}</p>
    </div>
  )
}
