const LearningBlock = ({ href, src, alt, description }) => {
  return (
    <div className="transform rounded-lg p-2 text-xs transition duration-300 hover:scale-110 hover:cursor-pointer hover:bg-[#3c4043] sm:p-0">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} className="block h-auto w-36 rounded-lg" />
      </a>
      <p>{description}</p>
    </div>
  );
};

export default LearningBlock;
