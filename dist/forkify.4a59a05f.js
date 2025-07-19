// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"5DuvQ":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "8ad96e854a59a05f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"7dWZ8":[function(require,module,exports,__globalThis) {
//Proyecto: Forkify
//Autor: Jose Bernardo Moya Jimenez bmjimenez@hotmail.com
//Descripción: Este es el controlador principal de la aplicación Forkify, que se encarga de
// manejar la lógica de la aplicación, incluyendo la obtención de recetas y su renderizado.
//Repositorio:https://github.com/bmjimenez/proyectojs2
//Fecha: 2025-07-06
// Importando las dependencias necesarias
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _configJs = require("./config.js"); // Importando las constantes  URL y timeout
var _helpersJs = require("./helpers.js"); // Importando la clase Fraction_function
var _recipeViewJs = require("./views/RecipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultViewJs = require("./views/resultView.js");
var _resultViewJsDefault = parcelHelpers.interopDefault(_resultViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _iconsSvg = require("url:../img/icons.svg"); // Importando los iconos SVG
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
const recipeContainer = document.querySelector('.recipe');
// Función para mostrar la receta
const controlRecipes = async function() {
    try {
        // Obtener el ID de la receta desde el hash de la URL
        const id = window.location.hash.slice(1);
        console.log('ID de la receta:', id);
        // Si no hay ID, salir de la función
        if (!id) return;
        // Renderizar spinner
        (0, _recipeViewJsDefault.default).renderSpinner();
        // Cargar la receta
        await _modelJs.loadRecipe(id);
        // Renderizar la receta
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
        console.log('Receta cargada:', _modelJs.state.recipe);
    } catch (err) {
        (0, _recipeViewJsDefault.default).renderError(err.message);
        throw err; // Lanzar el error para que sea manejado por el controlador
    }
};
const controlSearchResults = async function() {
    try {
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        (0, _resultViewJsDefault.default).renderSpinner();
        await _modelJs.loadSearchResults(query);
        (0, _resultViewJsDefault.default).render((0, _modelJs.getSearchResultsPage)());
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
        console.log(_modelJs.state.search.results); // Muestra los resultados en consola
    } catch (err) {
        console.error("\u274C Error en controlSearchResults:", err);
    }
};
const controlPagination = function(goToPage) {
    (0, _resultViewJsDefault.default).render(_modelJs.getSearchResultsPage(goToPage));
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
// Inicializar el controlador y cargar la receta al cargar la página
const init = function() {
    (0, _recipeViewJsDefault.default).addHandlerRender(controlRecipes); // Añadir el manejador de eventos para renderizar la receta
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResults);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    console.log('Controlador inicializado');
};
init(); // Inicializar el controlador y cargar la receta al cargar la página

},{"./model.js":"3QBkH","./config.js":"2hPh4","./views/RecipeView.js":"dfIpa","url:../img/icons.svg":"fd0vu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./helpers.js":"7nL9P","./views/searchView.js":"kbE4Z","./views/resultView.js":"2iOri","./views/paginationView.js":"7NIiB"}],"3QBkH":[function(require,module,exports,__globalThis) {
// Implementando el modelo MVC para la aplicación Forkify
// Descripción: Este es el modelo de la aplicación Forkify, que se encarga de
// manejar la lógica de negocio, incluyendo la obtención de recetas y su renderizado.
// Repositorio: https://github.com/bmjimenez/proyectojs2
// Fecha: 2025-07-16
// Autor: Bernardo Moya Jimenez
// Importando la URL de la API y la función getJSON para realizar peticiones HTTP
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
//Función asíncrona loadRecipe que recibe id como parámetro
// Esta función se encarga de cargar una receta específica desde la API
// y actualizar el objeto state con los datos de la receta.
// Si ocurre un error, se captura y se muestra en la consola.
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "getSearchResultsPage", ()=>getSearchResultsPage);
var _configJs = require("./config.js"); // Importando la URL de la API   
var _helpersJs = require("./helpers.js");
const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: (0, _configJs.RES_PER_PAGE)
    }
};
async function loadRecipe(id) {
    try {
        const data = await (0, _helpersJs.getJSON)(`${(0, _configJs.API_URL)}${id}`); // Llamada a la función getJSON para obtener los datos de la receta
        console.log('Datos de la receta:', data);
        // Validar response structure
        if (!data?.data?.recipe) throw new Error('Estructura de datos invalida');
        //Desestructuración del objeto recipe y guardado en state
        const { recipe } = data.data;
        const recipeObj = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookTime: recipe.cooking_time,
            ingredients: Array.isArray(recipe.ingredients) ? recipe.ingredients : []
        };
        //Guardar en en objeto state y mostrar en consola
        state.recipe = recipeObj;
        console.log('Objeto Recipe cargado:', state.recipe);
    } catch (err) {
        // Lanzar el error para que sea manejado por el controlador
        console.log(`Error al cargar receta: ${err}`);
    }
}
async function loadSearchResults(query) {
    try {
        const data = await (0, _helpersJs.getJSON)(`${(0, _configJs.API_URL)}?search=${query}`);
        console.log("Resultados de la b\xfasqueda:", data);
        // Validar estructura
        if (!data?.data?.recipes) throw new Error("Estructura de datos inv\xe1lida");
        // Guardar query en el estado
        state.search.query = query;
        // Transformar los resultados y guardarlos en el estado
        state.search.results = data.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url
            };
        });
        console.log('Resultados de busqueda guardados:', `${state.search.results}`);
    } catch (err) {
        console.log(`${err} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`);
        throw err; // Lanzar el error para que sea manejado por el controlador  
    }
}
const getSearchResultsPage = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;
    return state.search.results.slice(start, end);
};

},{"./config.js":"2hPh4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./helpers.js":"7nL9P"}],"2hPh4":[function(require,module,exports,__globalThis) {
// Archivo de configuración para la aplicación Forkify
// Contiene constantes y configuraciones globales
// Repositorio:https://github.com/bmjimenez/proyectojs2
// Fecha: 2025-07-16
// Autor: Bernardo Moya Jimenez
// Este archivo contiene la URL de la API y el tiempo de espera para las peticiones HTTP
// Se utiliza para configurar la conexión a la API y manejar errores de tiempo de espera.
// Estas constantes son importadas en otros módulos para realizar peticiones a la API y manejar la lógica de la aplicación.
// Se recomienda mantener estas constantes en un archivo separado para facilitar su mantenimiento y reutilización en toda la aplicación.
// Además, se pueden agregar más configuraciones globales en este archivo según sea necesario en el futuro.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
const TIMEOUT_SEC = 5; // Timeout para las peticiones
const RES_PER_PAGE = 10; // paginas de hasta 10 resultados 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7nL9P":[function(require,module,exports,__globalThis) {
// Archivo helpers.js con funciones auxiliares para la aplicación Forkify
// Contiene funciones para manejar peticiones a la API y otras utilidades
// Repositorio: https://github.com/bmjimenez/proyectojs2
// Fecha: 2025-07-16
// Autor: Bernardo Moya Jimenez
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Funcion para obtener los datos de una receta y hacer una petición a la API
// Esta función realiza una petición a la API y devuelve los datos de la receta
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
// Debido a problemas con Fractional, tuve que implementar una clase para manejar fracciones
// Clase Fraction_function para manejar fracciones
// Esta clase permite crear fracciones a partir de números o cadenas de texto
// Si se proporciona un denominador, se crea una fracción con el numerador y denominador especificados
// Si no se proporciona un denominador, se calcula la fracción a partir of un número o cadena de texto
// La clase incluye métodos para convertir la fracción a una cadena de texto y para obtener su valor numérico
parcelHelpers.export(exports, "Fraction_function", ()=>Fraction_function);
var _configJs = require("./config.js"); // Importando la URL de la API desde config.js
async function getJSON(id) {
    try {
        const fetchPro = fetch(id);
        //console.log('Petición a la API:', `${API_URL}${id}`);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _configJs.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        // Validación del estado de res
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err; // Lanzar el error para que sea manejado por el controlador;
    }
}
// Funcion para manejar el timeout de las peticiones
// Esta función devuelve una promesa que se rechaza después de un tiempo específico
// Sirve para manejar casos en los que una petición tarda demasiado tiempo en completarse.
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
class Fraction_function {
    constructor(numerator, denominator){
        if (denominator) {
            this.numerator = numerator;
            this.denominator = denominator;
        } else {
            const value = typeof numerator === 'number' ? numerator : parseFloat(numerator);
            const tolerance = 1.0E-6;
            let h1 = 1, h2 = 0, k1 = 0, k2 = 1, b = value;
            do {
                const a = Math.floor(b);
                let aux = h1;
                h1 = a * h1 + h2;
                h2 = aux;
                aux = k1;
                k1 = a * k1 + k2;
                k2 = aux;
                b = 1 / (b - a);
            }while (Math.abs(value - h1 / k1) > value * tolerance);
            this.numerator = h1;
            this.denominator = k1;
        }
    }
    toString() {
        return this.denominator === 1 ? `${this.numerator}` : `${this.numerator}/${this.denominator}`;
    }
    valueOf() {
        return this.numerator / this.denominator;
    }
}

},{"./config.js":"2hPh4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dfIpa":[function(require,module,exports,__globalThis) {
//Proyecto: Forkify
//Autor: Jose Bernardo Moya Jimenez bmjimenez@hotmail.com
//Descripción: Este es el modelo de la aplicación Forkify, que se encarga de renderizar recetas
//Repositorio:https://github.com/bmjimenez/proyectojs2
//Fecha: 2025-07-16
// Importando iconos SVG y la clase Fraction_function
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg"); // Usar parcel u otra herramienta para íconos SVG
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _helpersJs = require("..//helpers.js"); // requiere: npm install fracty
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
// Clase RecipeView que maneja la renderización de recetas
// Esta clase se encarga de renderizar la receta en el DOM, mostrar errores y spinner
// y manejar eventos relacionados con la receta.
class RecipeView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.recipe');
    _data;
    _errorMessage = 'We could not find that recipe. Please try another one!';
    _message = 'Recipe loaded successfully!';
    //
    render(data) {
        if (!data || typeof data !== 'object') return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderSpinner() {
        const markup = `
      <div class="spinner">
        <svg>
          <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
        </svg>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderError(message = this._errorMessage) {
        // Este método renderiza un mensaje de error en el DOM
        // Si no se proporciona un mensaje, se utiliza el mensaje de error predeterminado.
        // Se utiliza un template literal para crear el HTML del mensaje de error.
        // El mensaje de error se muestra dentro de un contenedor con la clase 'error'.
        // Se utiliza el icono de alerta de triángulo para indicar un error.
        // El método _clear se utiliza para eliminar el contenido previo antes de renderizar el error
        // y se inserta el nuevo contenido al principio del contenedor de recetas.
        const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderMessage(message = this._message) {
        // Este método renderiza un mensaje de exito en el DOM
        // Si no se proporciona un mensaje, se utiliza el mensaje de éxito predeterminado.
        const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    // Método para añadir un manejador de eventos para renderizar la receta
    // Este método se utiliza para escuchar eventos de cambio en el hash de la URL
    // y cargar la receta correspondiente cuando el hash cambia.
    // Se utiliza para actualizar la vista de la receta cuando el usuario navega a una receta
    // específica a través de la URL.
    // Se utiliza un bucle forEach para añadir el manejador de eventos a los eventos
    // 'hashchange' y 'load', lo que permite que la receta se cargue
    // tanto al cambiar el hash de la URL como al cargar la página por primera vez.
    // Esto asegura que la receta se renderice correctamente en ambos casos.
    // Se utiliza el método addEventListener para añadir el manejador de eventos.
    // El manejador de eventos se pasa como argumento a este método.
    // Esto permite que el controlador pueda definir la lógica de renderizado de la receta.
    // El manejador de eventos se ejecutará cada vez que ocurra uno de los eventos
    // especificados, lo que permite que la receta se renderice automáticamente
    // cuando el usuario navega a una receta específica.
    addHandlerRender(handler) {
        [
            'hashchange',
            'load'
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
    // Método para limpiar el contenido del contenedor de recetas
    // Este método se utiliza para eliminar el contenido previo antes de renderizar una nueva receta.
    _clear() {
        this._parentElement.innerHTML = '';
    }
    // Método para renderizar la receta en el DOM
    // Este método genera el HTML necesario para mostrar la receta
    // y lo inserta en el contenedor de recetas.
    // Utiliza la función _generateMarkup para crear el HTML de la receta.
    _generateMarkup() {
        if (!this._data.ingredients || !Array.isArray(this._data.ingredients)) return this.renderError('Ingredientes no disponibles');
        return `
    <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title"><span>${this._data.title}</span></h1>
    </figure>

    <div class="recipe__details">
        <div class="recipe__info">
        <svg class="recipe__info-icon">
            <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookTime}</span>
        <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
        <svg class="recipe__info-icon">
            <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>
        </div>
    </div>

    <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
        ${this._data.ingredients.map(this._generateIngredientMarkup).join('')}
        </ul>
    </div>

    <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
        This recipe was designed by
        <span class="recipe__publisher">${this._data.publisher}</span>. Check it out!
        </p>
        <a class="btn--small recipe__btn" href="${this._data.sourceUrl}" target="_blank">
        <span>Directions</span>
        <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>   
        </svg>
        </a>    
    </div>
  `;
    }
    // Método privado para generar el HTML de un ingrediente
    // Este método se utiliza para crear el HTML de cada ingrediente de la receta.
    // Utiliza la función _formatQuantity para formatear la cantidad del ingrediente.
    // Este método es llamado dentro de _generateMarkup para generar la lista de ingredientes.
    // Se utiliza un template literal para crear el HTML de cada ingrediente.
    // Cada ingrediente se muestra con su cantidad, unidad y descripción.
    _generateIngredientMarkup(ing) {
        return `
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">
          ${ing.quantity ? new (0, _helpersJs.Fraction_function)(ing.quantity).toString() : ''}
        </div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit || ''}</span>
          ${ing.description}
        </div>
      </li>
    `;
    }
    // Método privado para formatear la cantidad de un ingrediente
    // Este método utiliza la clase Fraction_function para convertir la cantidad a una fracción
    // Si la cantidad no es un número válido, se devuelve la cantidad original.
    _formatQuantity(qty) {
        try {
            return new (0, _helpersJs.Fraction_function)(qty).toString();
        } catch (e) {
            return qty;
        }
    }
}
// Exportar una instancia de RecipeView para ser utilizada en el controlador
// Esto permite que el controlador pueda acceder a los métodos de la clase RecipeView
// y renderizar recetas, spinner y errores en el DOM.
// Se utiliza el patrón Singleton para asegurar que solo haya una instancia de RecipeView.
// Esto es útil para mantener un único punto de acceso a la vista de recetas en toda la aplicación.
// Esto evita la creación de múltiples instancias y asegura que los cambios en la vista se reflecten en un solo lugar.
// Se puede importar esta instancia en el controlador y utilizar sus métodos directamente.
exports.default = new RecipeView();

},{"url:../../img/icons.svg":"fd0vu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","..//helpers.js":"7nL9P","./view.js":"2kjY2"}],"fd0vu":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("icons.0809ef97.svg") + "?" + Date.now();

},{}],"2kjY2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    render(data) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    _clear() {
        this._parentElement.innerHTML = '';
    }
    renderSpinner() {
        const markup = `
      <div class="spinner">
        <svg>
          <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
        </svg>
      </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderMessage(message = this._message) {
        const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"fd0vu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kbE4Z":[function(require,module,exports,__globalThis) {
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    _parentEl = document.querySelector('.search');
    getQuery() {
        const query = this._parentEl.querySelector('.search__field').value;
        this._clearInput();
        return query;
    }
    _clearInput() {
        this._parentEl.querySelector('.search__field').value = '';
    }
    addHandlerSearch(handler) {
        this._parentEl.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        });
    }
} // termina la clase searchView
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2iOri":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ResultsView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipes found for your query. Please try again!';
    _message = '';
    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join('');
    }
    _generateMarkupPreview(result) {
        return `
      <li class="preview">
        <a class="preview__link" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
            <div class="preview__user-generated"></div>
          </div>
        </a>
      </li>`;
    }
}
exports.default = new ResultsView();

},{"./view.js":"2kjY2","url:../../img/icons.svg":"fd0vu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7NIiB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.pagination');
    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--inline');
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            console.log('GotoPage', `${goToPage}`);
            handler(goToPage);
        });
    }
    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        //console.log('Total de paginas', `${numPages}`);
        // Página 1, y hay más
        if (curPage === 1 && numPages > 1) return `
        <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
        // Última página
        if (curPage === numPages && numPages > 1) return `
        <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
      `;
        // Página intermedia
        if (curPage < numPages) return `
        <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
        <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
        // Solo una página
        return '';
    }
}
exports.default = new PaginationView();

},{"./view.js":"2kjY2","url:../../img/icons.svg":"fd0vu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["5DuvQ","7dWZ8"], "7dWZ8", "parcelRequire3a11", {}, "./", "/")

//# sourceMappingURL=forkify.4a59a05f.js.map
