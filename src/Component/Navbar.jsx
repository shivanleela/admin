
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#1a1a2e" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Section */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          DASHBOARD
        </Typography>

        {/* Right Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <FavoriteIcon />
          </IconButton>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Avatar
              alt="Profile"
              src="https://via.placeholder.com/40" // Replace with your image URL
              sx={{ width: 40, height: 40 }}
            />
            <ArrowDropDownIcon />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
