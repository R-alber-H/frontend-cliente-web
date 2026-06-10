
export default function Card({
  image,
  title,
  description,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="card" style={{ width: 300 }}>
      <img src={image} alt={title} width="100%" />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">
          {description}
        </p>

        <a href={buttonLink} className="btn btn-primary">
          {buttonText}
        </a>
      </div>
    </div>
  );
}