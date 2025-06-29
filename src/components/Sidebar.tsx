import { useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import IndustryChips from "./IndustryChips";
import PromptInput from "./PromptInput";
import Link from "next/link";
import Image from "next/image";

type Props = {
  profileURL: string;
  isMobile: boolean;
};

const Sidebar: React.FC<Props> = ({ isMobile, profileURL }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUrl, setEditedUrl] = useState(profileURL);

  const handleSave = () => {
    setIsEditing(false);
    // Optional: send editedUrl to backend
    console.log("Saved URL:", editedUrl);
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
              <FaSave
                className="cursor-pointer text-green-600 hover:text-green-800 flex-shrink-0 mt-1"
                onClick={handleSave}
              />
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
        <IndustryChips />
      </div>

      <hr className="border-t border-gray-200" />

      {/* Prompt Section */}
      <div>
        <h4 className="text-sm font-semibold text-gray-600 mb-2">
          Ask AI for Suggestions
        </h4>
        <PromptInput />
      </div>
    </aside>
  );
};

export default Sidebar;
