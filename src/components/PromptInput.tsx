type Props = {
  prompt: string;
  setprompt: React.Dispatch<React.SetStateAction<string>>;
  handlePrompt: () => void;
  promptLoader: boolean;
};

const PromptInput: React.FC<Props> = ({
  prompt,
  promptLoader,
  handlePrompt,
  setprompt,
}) => {
  return (
    <>
      <textarea
        placeholder="Write your prompt here..."
        className="w-full h-32 border border-gray-300 rounded-md p-2 resize-none"
        value={prompt}
        onChange={(e) => setprompt(e.target.value)}
      />
      <button
        type="submit"
        disabled={promptLoader}
        id="analyze-button"
        onClick={handlePrompt}
        className="bg-white w-full border-2 border-black text-black px-6 py-3 rounded-md font-semibold shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#fff] transition-transform duration-100"
      >
        {promptLoader ? "Submitting..." : "Submit"}
      </button>
    </>
  );
};

export default PromptInput;
