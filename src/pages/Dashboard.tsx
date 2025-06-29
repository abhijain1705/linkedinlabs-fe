import Sidebar from "@/components/Sidebar";
import Drawer from "@mui/material/Drawer";
import { useTheme, useMediaQuery } from "@mui/material";

type DashboardProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
};

const Dashboard: React.FC<DashboardProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const profileUrl = "https://www.linkedin.com/in/abhijain03W";

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <div className="flex min-h-screen">
      <Drawer
        variant={"temporary"}
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: 300,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 300,
            boxSizing: "border-box",
            borderRight: "1px solid #e5e7eb",
          },
        }}
      >
        <Sidebar isMobile={isMobile} profileUrl={profileUrl} />
      </Drawer>

      {!isMobile && <Sidebar isMobile={isMobile} profileUrl={profileUrl} />}
      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Profile Insights</h2>
        <div className="bg-gray-100 p-4 rounded-md">
          <p>Main dashboard content goes here...</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
