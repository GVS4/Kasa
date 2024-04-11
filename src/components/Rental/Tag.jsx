import PropTypes from "prop-types";

const Tags = ({ tag }) => {
  return <p className="tags">{tag}</p>;
};

Tags.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tags;
