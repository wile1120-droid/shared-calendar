self.addEventListener('install', function(e) {
  console.log('Service Worker Install');
});
self.addEventListener('fetch', function(e) {
  // 今回は常にネットワークへリクエストする（キャッシュしない）
});