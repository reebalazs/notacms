
/* global module: true, require: true, angular: true, window: true */
/* jshint globalstrict: true */
'use strict';

// plugins must be configured before aloha is loaded
window.alohaSettings = {
  baseUrl: '/static/ng-aloha-editor/libs/alohaeditor-0.23.26/aloha/lib',
  plugins: {
    load: [
      'common/ui',
      'common/format',
      'common/paste',
      'common/block',
      'common/list',
      'common/table',
      //'extra/draganddropfiles',
      'common/image'
    ].join(', ')
  }
};

// Extras needed for aloha. RequireJS clashes with browserify, so we keep this separate.
// We also need to hook it up to load after our libs are already in, because
// its loading order dependent, and must come after jquery.
window.loadAlohaAfterLibs = function loadAlohaAfterLibs() {
  // problem: baseUrl ineffective. For now, we load everything manually.
  window.enhance.loadJS('static/ng-aloha-editor/libs/alohaeditor-0.23.26/aloha/lib/require.js', {async: false});
  //window.enhance.loadJS('static/ng-aloha-editor/libs/alohaeditor-0.23.26/aloha/lib/aloha-bare.js', {async: false});
  //window.enhance.loadJS('static/ng-aloha-editor/libs/alohaeditor-0.23.26/aloha/plugins/extra/draganddropfiles/lib/draganddropfiles-plugin.js', {async: false});
  window.enhance.loadJS('static/ng-aloha-editor/libs/alohaeditor-0.23.26/aloha/lib/aloha-full.js', {async: false});
  window.enhance.loadCSS('static/ng-aloha-editor/libs/alohaeditor-0.23.26/aloha/css/aloha.css');
};

