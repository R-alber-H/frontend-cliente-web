
export default function Card({
  image,
  title,
  description,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="card bg-body-tertiary shadow-lg rounded-4 border-0" style={{ width: 300 }}>
      <img className="mt-4 mb-4" src={image} alt={title} width="100%" />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}
        </p>
        <a href={buttonLink} className="btn btn-primary w-100">
          {buttonText}
        </a>
      </div>
    </div>
  );
}