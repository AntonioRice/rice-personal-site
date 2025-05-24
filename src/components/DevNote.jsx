const DevNote = () => {
  return (
    <div className="grid grid-cols-1 p-5 md:grid-cols-4 lg:grid-cols-6">
      <div className="col-span-1 col-start-6 p-2 sm:p-6">
        <p className="leading-0 text-xs font-extralight tracking-wide opacity-60 sm:text-[.65rem]">
          Designed and built by me. Utilizing React.js and Tailwind CSS on the
          frontend. Deployed via AWS Amplify and utilizing AWS Lambda functions
          for the backend.
        </p>
      </div>
    </div>
  );
};

export default DevNote;
