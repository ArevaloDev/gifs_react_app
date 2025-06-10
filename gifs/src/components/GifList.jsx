export const GifList = ({ url, title }) => {
  return (
    <>
      <div className="card">
        <img src={url} />
        <li>{title}</li>
      </div>
    </>
  );
};
