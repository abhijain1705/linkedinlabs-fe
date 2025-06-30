import { useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import IndustryChips from "./IndustryChips";
import PromptInput from "./PromptInput";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { apiResponseKeyName, profileURLKeyName } from "@/utils";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { AIResponse } from "@/types/linkedin";

type Props = {
  profileURL: string;
  isMobile: boolean;
  aiResponse: AIResponse;
};

const Sidebar: React.FC<Props> = ({ isMobile, aiResponse, profileURL }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUrl, setEditedUrl] = useState(profileURL);
  const { data } = aiResponse;
  const router = useRouter();
  const [prompt, setprompt] = useState("");
  const [loader, setloader] = useState(false);
  const [promptLoader, setpromptLoader] = useState(false);
  const [userIndustry, setuserIndustry] = useState("");

  const handlePrompt = async () => {
    if (!userIndustry || !prompt) {
      toast.error("Prompt & Industry both are required.");
      return;
    }

    try {
      setpromptLoader(true);
      const response = await axios.post(
        "http://localhost:5000/api/analyze/analyzeProfilePersonalized",
        {
          profileUrl: editedUrl,
          userPrompt: prompt,
          userIndustry,
          scrapData: data.original,
        }
      );
      toast.success("Profile analyzed successfully!");
      sessionStorage.setItem(apiResponseKeyName, JSON.stringify(response.data));
      sessionStorage.setItem(profileURLKeyName, editedUrl);
      setTimeout(() => {
        router.reload();
      }, 2000);
      // Handle response (e.g., show results or navigate)
    } catch (error) {
      toast.error("Failed to analyze profile. Please try again.");
      console.error("API Error:", error);
      // Handle error (e.g., show error message)
    } finally {
      setpromptLoader(false);
    }
  };

  const handleSave = async () => {
    try {
      setloader(true);
      const response = await axios.post(
        "http://localhost:5000/api/analyze/analyzeProfile",
        {
          profileUrl: editedUrl,
        }
      );
      toast.success("Profile analyzed successfully!");
      sessionStorage.setItem(apiResponseKeyName, JSON.stringify(response.data));
      sessionStorage.setItem(profileURLKeyName, editedUrl);
      setTimeout(() => {
        router.reload();
      }, 2000);
      // Handle response (e.g., show results or navigate)
    } catch (error) {
      toast.error("Failed to analyze profile. Please try again.");
      console.error("API Error:", error);
      // Handle error (e.g., show error message)
    } finally {
      setIsEditing(false);
      setloader(false);
    }
  };

  return (
    <aside className="w-[300px] border-r overflow-y-scroll h-full pb-30 border-gray-300 p-4 flex flex-col gap-6">
      {/* Logo for mobile view */}
      {isMobile && (
        <Link href="/">
          <div className="shadow-sm rounded-lg p-1">
            <Image
              width={100}
              height={100}
              alt="logo"
              src="/logo.png"
              className="w-[100px] object-contain"
            />
          </div>
        </Link>
      )}

      {/* LinkedIn URL Section */}
      <div>
        <h4 className="text-sm font-semibold text-gray-600 mb-2">
          LinkedIn Profile URL
        </h4>
        <div className="flex items-start gap-2 w-full break-all">
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedUrl}
                onChange={(e) => setEditedUrl(e.target.value)}
                className="text-sm border border-gray-300 rounded px-2 py-1 w-full"
              />
              <button disabled={loader}>
                {loader ? (
                  <CircularProgress size={"small"} />
                ) : (
                  <FaSave
                    className="cursor-pointer text-green-600 hover:text-green-800 flex-shrink-0 mt-1"
                    onClick={handleSave}
                  />
                )}
              </button>
            </>
          ) : (
            <>
              <span className="text-sm break-words w-full">{editedUrl}</span>
              <FaEdit
                className="cursor-pointer text-gray-500 hover:text-black flex-shrink-0 mt-1"
                onClick={() => setIsEditing(true)}
              />
            </>
          )}
        </div>
      </div>

      <hr className="border-t border-gray-200" />

      {/* Industry Selection */}
      <div>
        <h4 className="text-sm font-semibold text-gray-600 mb-2">
          Select Industry
        </h4>
        <IndustryChips
          userIndustry={userIndustry}
          setuserIndustry={setuserIndustry}
        />
      </div>

      <hr className="border-t border-gray-200" />

      {/* Prompt Section */}
      <div>
        <h4 className="text-sm font-semibold text-gray-600 mb-2">
          Ask AI for Suggestions
        </h4>
        <PromptInput
          setprompt={setprompt}
          promptLoader={promptLoader}
          handlePrompt={handlePrompt}
          prompt={prompt}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
