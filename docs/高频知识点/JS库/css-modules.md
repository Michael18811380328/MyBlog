# css-modules

A **CSS Module** is a CSS file where all class names and animation names are scoped locally by default. All URLs (`url(...)`) and `@imports` are in module request format (`./xxx` and `../xxx` means relative, `xxx` and `xxx/yyy` means in modules folder, i.e. in `node_modules`).

CSS Modules compile to a low-level interchange format called ICSS (or Interoperable CSS) but are written like normal CSS files:

```css
/* style.css */
.className {
  color: green;
}
```

When importing a **CSS Module** from a JavaScript Module, it exports an object with all mappings from local names to global names.

```javascript
import styles from './style.css';

element.innerHTML = '<div class="' + styles.className + '">';
```

这个使用比较多
