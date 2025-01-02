var posts=["2024/02/17/hexo_优化图片插入使用 hexo-image-link/","2024/12/27/hello-world/","2024/02/17/步进电机工作原理及使用/","2024/02/17/乐音解忧（1） like a star/","2024/12/27/读书笔记/论语第一--学而/","2024/02/17/奥斯汀晚饭乱找挑战1-- Bao'd up/","2024/02/17/这里是常有的杂想和脑袋的备份/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };