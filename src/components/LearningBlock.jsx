const LearningBlock = ({ href, src, alt, description }) => {
  return (
    <div className="transform transition duration-300 hover:scale-110">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} className="block h-auto w-36" />
      </a>
      <p>{description}</p>
    </div>
  );
};

export default LearningBlock;
