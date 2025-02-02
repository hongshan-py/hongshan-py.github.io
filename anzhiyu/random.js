var posts=["2025/02/02/你好世界！/","2025/02/01/这是一篇新的博文/","2025/02/01/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };