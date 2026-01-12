# react-i18next

翻译相关

[https://github.com/i18next/react-i18next](https://github.com/i18next/react-i18next "https://github.com/i18next/react-i18next")

1、在根节点使用 Provider 包裹全部组件

```javascript
import { I18nextProvider } from 'react-i18next';
import i18n from './_i18n';

const root = createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={ i18n } >
     <App/>
  </I18nextProvider>
);
```

2、增加 i18n 配置文件

```javascript
import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { mediaUrl } from '../utils/constants';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: lang,
    fallbackLng: 'en',
    ns: ['editor'],
    defaultNS: 'editor',
    whitelist: ['en', 'zh-CN', 'fr', 'de', 'cs', 'es'],
    backend: {
      loadPath: mediaUrl + '{{ ns }}/locales/{{ lng }}/{{ ns }}.json',
    },
    debug: false, // console log if debug: true
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    load: 'currentOnly',
    react: {
      wait: true,
    }
  });

export default i18n;
```

​
