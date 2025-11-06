import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Brightness4Icon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { useColorScheme } from '@mui/material/styles';
import { useTranslation } from '@hooks';

export default function ThemeToggle() {
  const { mode, setMode, systemMode } = useColorScheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { t } = useTranslation();

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const handleSetMode = (newMode: 'light' | 'dark' | 'system') => {
    setMode(newMode);
    handleClose();
  };

  const current = mode === 'system' ? systemMode : mode;

  return (
    <>
      <Tooltip title={t('header.changeTheme')}>
        <IconButton
          color="inherit"
          onClick={handleClick}
          aria-label={t('header.changeTheme')}
          aria-controls={open ? 'theme-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          {mode === 'system' ? (
            <SettingsBrightnessIcon />
          ) : current === 'dark' ? (
            <Brightness4Icon />
          ) : (
            <LightModeIcon />
          )}
        </IconButton>
      </Tooltip>
      <Menu id="theme-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => handleSetMode('system')}>
          <ListItemIcon>
            <SettingsBrightnessIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t('header.themeSystem')}</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleSetMode('light')}>
          <ListItemIcon>
            <LightModeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t('header.themeLight')}</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleSetMode('dark')}>
          <ListItemIcon>
            <Brightness4Icon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t('header.themeDark')}</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
