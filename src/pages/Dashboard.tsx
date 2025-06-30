/* eslint-disable @typescript-eslint/no-explicit-any */
import Sidebar from "@/components/Sidebar";
import DMainContent from "@/components/dashboardMain";
import { useEffect, useState } from "react";
import { useTheme, useMediaQuery, Drawer } from "@mui/material";
import { apiResponseKeyName, profileURLKeyName } from "@/utils";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { AIResponse } from "@/types/linkedin";

type DashboardProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
};

const Dashboard: React.FC<DashboardProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const router = useRouter();
  const [profileURL, setprofileURL] = useState("");
  const [aiResponse, setaiResponse] = useState<AIResponse | null>(null);

  useEffect(() => {
    const url = sessionStorage.getItem(profileURLKeyName);
    const jsonData = sessionStorage.getItem(apiResponseKeyName);

    if (!url || !jsonData) {
      toast.error("No data found. Please analyze your profile again.");
      router.push("/");
      return;
    }

    try {
      const parsed = JSON.parse(jsonData);

      // Check for score or if all fields are empty
      const score = parsed?.data?.totalScore || "";
      const isEmpty =
        !score ||
        score.startsWith("0") ||
        Object.values(parsed.data.optimizedLinkedinProfile || {}).every(
          (v) => v === "" || (Array.isArray(v) && v.length === 0)
        );

      if (isEmpty) {
        throw new Error("Empty or incomplete profile analysis.");
      }

      setprofileURL(url);
      setaiResponse(parsed);
    } catch (err: any) {
      console.error("❌ Dashboard Load Error:", err.message);
      toast.error("Profile analysis is invalid or incomplete.");
      // router.push("/");
    }
  }, []);

  return (
    <div className="dashboard">
      <div className="flex h-screen w-screen overflow-hidden">
        {/* Sidebar: static for desktop */}
        {!isMobile && (
          <div className="w-72 flex-shrink-0 border-r border-gray-200">
            {aiResponse && (
              <Sidebar
                aiResponse={aiResponse}
                isMobile={isMobile}
                profileURL={profileURL}
              />
            )}
          </div>
        )}

        {/* Drawer for mobile only */}
        {isMobile && (
          <div className="lg:hidden">
            {/* Mobile Drawer */}
            <Drawer
              variant="temporary"
              open={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
              ModalProps={{ keepMounted: true }}
              sx={{
                width: 300,
                "& .MuiDrawer-paper": {
                  width: 300,
                  boxSizing: "border-box",
                  borderRight: "1px solid #e5e7eb",
                },
              }}
            >
              {aiResponse && (
                <Sidebar
                  aiResponse={aiResponse}
                  isMobile={isMobile}
                  profileURL={profileURL}
                />
              )}
            </Drawer>
          </div>
        )}

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto h-screen">
          {aiResponse && <DMainContent aiResponse={aiResponse} />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
