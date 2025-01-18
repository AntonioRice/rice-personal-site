const LeetCodeBlock = () => {
  return (
    <a
      className="relative flex transform cursor-pointer items-start rounded-lg bg-[#3c4043] p-2 transition duration-300 hover:scale-110 hover:bg-[#4e5254]"
      href="https://leetcode.com/studyplan/leetcode-75/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        alt="LeetCode 75"
        src="https://assets.leetcode.com/study_plan_v2/leetcode-75/cover"
        className="mr-3.5 h-[72px] w-[72px] rounded-[4px]"
      />
      <div className="h-[72px] flex-grow py-1">
        <div className="flex flex-col justify-center pr-1">
          <div className="flex items-start">
            <p className="text-body  mb-1.5 line-clamp-1 font-medium">
              LeetCode 75
            </p>
          </div>
          <div className="mb-[11px] mt-[5px]">
            <div
              aria-valuemax="100"
              aria-valuemin="0"
              role="progressbar"
              data-state="indeterminate"
              data-max="100"
              className="relative h-1.5 w-full overflow-hidden rounded-full"
            >
              <div
                data-state="indeterminate"
                data-max="100"
                className="h-full flex-1 rounded-full bg-[linear-gradient(90deg,#007AFF_0%,#7ED1FF_99.66%)] transition-all"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-caption mr-1 opacity-50">Total Progress:</p>
            <div className="flex items-center">
              <p className="mr-1 text-[12px] font-medium">75</p>
              <p className="text-[12px] font-medium opacity-50">/ 75</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default LeetCodeBlock;
