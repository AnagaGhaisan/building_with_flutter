'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bb7a3681e2e5391c68ee2f8c1cd4a8a7",
"version.json": "41a8ea505e5654f303587feb6e5b4e80",
"index.html": "ee4687b1d7386a7562dd08af956a25dd",
"/": "ee4687b1d7386a7562dd08af956a25dd",
"main.dart.js": "40d6ab12aa2fb2186b1558771d42bd39",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2467831719e550eeaa96b76369dcd281",
"assets/AssetManifest.json": "fd93f1edae1c81ce0310f785d735e53c",
"assets/NOTICES": "6fb4f379bc656f356c690b23116cc734",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "57f279b40bcdea972e3fc51f0fc33fbb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d0bb7cd5f571b6f3d1094d53eab91d87",
"assets/fonts/MaterialIcons-Regular.otf": "e2d58f3e01df3d7c8b6730a97bad366d",
"assets/assets/images/Frame%25201.png": "a1d7b37447f315174b13d43ff688deba",
"assets/assets/images/shanghai/maxresdefault%2520(1).jpg": "96fa833ea94caae68e0c8d30e2985a40",
"assets/assets/images/shanghai/Jin-Mao-Tower-Shanghai-tower-Shanghai-World-Financial-Center-and-river-quay.jpg": "4319a393e22f35779d554af9b9c1987b",
"assets/assets/images/shanghai/16570986821949.webp": "b02cda08bd92da3a55436336a7f04740",
"assets/assets/images/shanghai/project_shanghai-tower_1024x576_08_1444153208_1024x576.jpg": "8b5fd526a1ece51b85271091207006aa",
"assets/assets/images/ping/2100_PingAn_Hero2021-scaled.webp": "9837b38b739d6109d68b6842fa9cf7ae",
"assets/assets/images/ping/ping-an-hero-3-scaled.webp": "1ec3a8b718f5e84789ca0db08fe416e8",
"assets/assets/images/ping/241447039.jpg": "e975e5d622a508c370349d4578758e93",
"assets/assets/images/ping/PAFC_Overall_(c)PingAnFinanceCenter.jpg": "910fd2422fe2f72eb29a8d517de9bfff",
"assets/assets/images/lotte/Lotte-World-Tower-Seoul-Header-3-2-1920x1080px.jpg": "77e71e510660ed1da4d33ba5ecdfac0b",
"assets/assets/images/lotte/Lotte-World-Mall-Seoul.jpg": "1f30fc0b086d1f50ba4f58b18e893e48",
"assets/assets/images/lotte/Lotte-Tower.jpg": "d88b60f521c2c37a043867b9ca85c29c",
"assets/assets/images/lotte/1769_1_000_N276_lotte-corporation.webp": "f2429f6268f084f5bee626d7ab9d32ea",
"assets/assets/images/one/video-placeholder.jpg": "9b1d2f1769cb91336d916aa2c162fd54",
"assets/assets/images/one/1WTC_Credit-Michael-Mahesh-PANYNJ.jpg": "bf701c10d00409aa9b52dea2514a483d",
"assets/assets/images/one/dsc_5921_retouch-1.jpeg": "cc65772a48197f7a1be524ee038adf42",
"assets/assets/images/one/one-world-trade-center.webp": "a96e44087995b68ef523e8c9d20941bc",
"assets/assets/images/mecca/Abraj%2520Al%2520bait.jpg": "3e112295be9ef478724385f95112f54f",
"assets/assets/images/mecca/Abraj-Al-Bait-Towers-840x450.jpg": "2a44a0787797cfd6f22e93093e1397c9",
"assets/assets/images/mecca/menara%2520abarat.jpg": "6ecd7eecdd7cff6c08fc07d3e7b3595a",
"assets/assets/images/mecca/mekkah-hotel-clock-tower-1-1024x576.jpg": "24830a647b1ac9f59fb29a4bb893e2d5",
"assets/assets/images/burj/Tiket%2520Burj%2520Khalifa%2520Observation%2520Deck%2520di%2520Dubai.jpg": "5072c9c1e257774a9a1d67faf9d91981",
"assets/assets/images/burj/burj-khalifa-tour-1.webp": "0d3299326ccc9e5aa79b96674a98157e",
"assets/assets/images/burj/61d4fbef2350a.jpg": "28decb2e90aa2744f6f196ed33079f98",
"assets/assets/images/burj/ilustrasi-gedung-paling-tinggi-di-dunia_169.jpeg": "8c9b6b7c4c5cbea99cce2cdad91fffcd",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
