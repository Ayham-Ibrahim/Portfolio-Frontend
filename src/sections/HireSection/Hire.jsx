import "./Hire.css";
// import SectionHeader from "../../components/SectionHeader/SectionHeader"
const Hire = () => {
  return (
    <section
      className="HireMe img"
      style={{ backgroundImage: `url(images/bg_1.jpg)` }}
    >
      {/* <SectionHeader/> */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7  text-center">
            <h2>
              I&#39;m <span>Available</span> for freelancing
            </h2>
            <p style={{ color: `#999999 ` }}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <p className="mb-0">
              <a href="#" className="btn btn-primary button py-3 px-5">
                Hire me
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hire;
