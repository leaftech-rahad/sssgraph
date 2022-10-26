import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Link from "next/link";

const Navbar = ({ pages, settings }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".01rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link href="/">Full_Stack</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                  opacity: 0.8,
                },
              }}
            >
              {pages?.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 0,
                    py: 0,
                    px: 0,
                    mx: 0,
                  }}
                >
                  <Link href={page.replace(/\s/g, "")}>
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 0,
                        py: 0.8,
                        px: 0.5,
                        mx: 1,
                        color: "white",
                      }}
                      variant="contained"
                      fullWidth
                    >
                      {page}
                    </Button>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".01rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link href="/">Full_Stack</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages?.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 0,
                  color: "white",
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                <Link href={page.replace(/\s/g, "")}>{page}</Link>
              </Button>
            ))}
          </Box>

          {
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <SettingsOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "35px", opacity: 0.8 }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings?.map((settings) => (
                  <MenuItem
                    key={settings}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 0,
                      py: 0,
                      px: 0,
                      mx: 0,
                    }}
                  >
                    <Button
                      key={settings}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 0.2, py: 0.8, px: 0.5, mx: 1, color: "white" }}
                      variant="contained"
                      fullWidth
                    >
                      <Link href={settings.replace(/\s/g, "")}>{settings}</Link>
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
