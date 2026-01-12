# i18next

翻译，包括下面三个库

i18next

i18next-xhr-backend

i18next-browser-languagedetector

[https://www.i18next.com/](https://www.i18next.com/ "https://www.i18next.com/")

使用：[https://www.i18next.com/overview/getting-started](https://www.i18next.com/overview/getting-started "https://www.i18next.com/overview/getting-started")

```javascript
import i18next from 'i18next';

i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: {
        "key": "hello world"
      }
    }
  }
});

// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
document.getElementById('output').innerHTML = i18next.t('key');
```

​
