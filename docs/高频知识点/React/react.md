# react

React 前端 UI 框架

[https://github.com/facebook/react](https://github.com/facebook/react "https://github.com/facebook/react")

[https://react.dev/](https://react.dev/ "https://react.dev/")

可以用在网页，服务器端，移动端的 UI 框架

```javascript
function VideoList({ videos, emptyHeading }) {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'Videos' : 'Video';
    heading = count + ' ' + noun;
  }
  return (
    <section>
      <h2>{heading}</h2>
      {videos.map(video =>
        <Video key={video.id} video={video} />
      )}
    </section>
  );
}
```

​
