export default function Skeleton() {
  return (
    <div className="card skeleton">
      <div className="image-placeholder"></div>
      <div className="line"></div>
      <div className="line short"></div>
      <div className="line small"></div>
      <button className="btn disabled">Carregando...</button>
    </div>
  );
}
