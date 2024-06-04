import "./ServicesCard.css";
const ServicesCard = (Props) => {
  return (
    <div className="col-md-4 text-center d-flex ">
      <a href="#" className="services">
        <span className="icon">
          <i className="specificIcon">{Props.icon}</i>
        </span>
        <div className="desc">
          <h3 className="mb-5">{Props.desc}</h3>
        </div>
      </a>
    </div>
  );
};

export default ServicesCard;
