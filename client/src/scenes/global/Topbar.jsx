import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Drawer, useMediaQuery } from "@mui/material";
import { Menu } from "@mui/icons-material";
import Sidebar from "./Sidebar";
import SidebarDrawer from "./SideBarDrawer";

const Topbar = ({ openMobile, setOpenMobile }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Box display="flex" flexDirection='row-reverse' justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      {isMobile && (
        <IconButton
          color="inherit"
          edge="start"
          style={{ outline: "none" }}
          onClick={() => setOpenMobile((pre) => !pre)}
        >
          <Menu />
        </IconButton>
      )}
      <Box
        display="none"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>

      <Drawer
        variant="temporary"
        anchor="left"
        open={openMobile}
        onClose={() => setOpenMobile((pre) => !pre)}
        ModalProps={{ keepMounted: true }}
      >
        <SidebarDrawer openMobile={openMobile} setOpenMobile={setOpenMobile} />
      </Drawer>
    </Box>
  );
};

export default Topbar;
