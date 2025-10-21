import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import LanguageIcon from '@mui/icons-material/Language';
import { useAppDispatch, useAppSelector, useTranslation } from '@hooks';
import { toggleLocale } from '@store/locale';

export default function LocaleToggle() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const locale = useAppSelector((state) => state.locale.current);

  return (
    <Tooltip title={t(`header.toggleLanguage`)}>
      <Button startIcon={<LanguageIcon fontSize="small" />} onClick={() => dispatch(toggleLocale())} size="small" color="inherit">
        {locale === 'en' ? 'Español' : 'English'}
      </Button>
    </Tooltip>
  );
}
