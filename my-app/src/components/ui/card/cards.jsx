const Card = ({ children, className }) => {
    return <div className={`rounded-lg shadow ${className}`}>{children}</div>;
  };
  
  export default Card;
  