const defs = {
  body: document.querySelector('body'),
  themeSwitch: document.querySelector('.switch__input'),
};

//------------------------------------------------------------------

const localStorageKeyName = 'theme';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const localTheme = localStorage.getItem(localStorageKeyName);

if (localTheme) {
  defs.body.classList.add(localTheme);
  defs.themeSwitch.checked = localTheme === Theme.DARK;
}

function cheingeTheme(eve) {
  const { target } = eve;
  if (target.checked) {
    defs.body.classList = [Theme.DARK];
    localStorage.setItem(localStorageKeyName, Theme.DARK);
  } else {
    defs.body.classList = [Theme.LIGHT];
    localStorage.setItem(localStorageKeyName, Theme.LIGHT);
  }
}

defs.themeSwitch.addEventListener('change', cheingeTheme);
