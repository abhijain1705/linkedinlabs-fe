import Sidebar from "@/components/Sidebar";
import DMainContent from "@/components/dashboardMain";
import { useTheme, useMediaQuery, Drawer } from "@mui/material";

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
    <div className="dashboard">
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar: static for desktop */}
      {!isMobile && (
        <div className="w-72 flex-shrink-0 border-r border-gray-200">
          <Sidebar isMobile={isMobile} profileUrl={profileUrl} />
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
            <Sidebar isMobile={isMobile} profileUrl={profileUrl} />
          </Drawer>
        </div>
      )}

      {/* Scrollable Main Content */}
      <main className="flex-1 overflow-y-auto h-screen">
        <DMainContent />
      </main>
    </div>
    </div>
  );
};

export default Dashboard;
