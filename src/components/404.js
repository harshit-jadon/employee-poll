import { connect } from "react-redux";

const Error404 = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "150px" }}>
      <h1>Error 404</h1>
      <h2>Page not found</h2>
    </div>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Error404);
