(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('*{margin:0;padding:0;box-sizing:border-box}html,body{width:100%;height:100%;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}body{background:var(--bg-primary);color:var(--text-primary);transition:background-color .2s ease,color .2s ease}#app{width:100%;height:100%}canvas{display:block}:root,[data-theme=light]{--bg-primary: #f5f5f5;--bg-secondary: #ffffff;--bg-tertiary: #f8f8f8;--bg-canvas: #000000;--text-primary: #000000;--text-secondary: #333333;--text-muted: #666666;--text-disabled: #999999;--border-primary: #e0e0e0;--border-secondary: #cccccc;--accent-primary: #4a9eff;--accent-primary-hover: #3a8eef;--accent-primary-active: #2a7edf;--accent-secondary: #7c4dff;--error-bg: #fff0f0;--error-text: #cc0000;--error-border: #ffcccc;--success-bg: #e8f5e9;--success-text: #4caf50;--success-border: #4caf50;--overlay-bg: rgba(0, 0, 0, .75);--overlay-backdrop: rgba(0, 0, 0, .95);--shadow-sm: 0 2px 8px rgba(0, 0, 0, .1);--shadow-md: 0 10px 30px rgba(0, 0, 0, .2);--shadow-lg: 0 20px 60px rgba(0, 0, 0, .25);--code-bg: #ffffff;--code-text: #000000;--code-line-number: #999999;--code-line-border: #e0e0e0;--code-selection: rgba(173, 214, 255, .4);--syntax-comment: #6a9955;--syntax-keyword: #0000ff;--syntax-string: #a31515;--syntax-number: #098658;--syntax-operator: #000000;--syntax-function: #795e26;--syntax-class: #267f99;--syntax-punctuation: #000000;--tab-bg: #f8f8f8;--tab-text: #666666;--tab-text-hover: #333333;--tab-text-active: #000000;--tab-border-active: #4a9eff;--button-bg: transparent;--button-border: #cccccc;--button-text: #666666;--button-bg-hover: #f0f0f0;--button-border-hover: #999999;--button-text-hover: #333333;--recompile-bg: #e8e8e8;--recompile-text: #333333;--recompile-bg-hover: #d8d8d8;--recompile-bg-active: #c8c8c8;--image-viewer-bg: #f5f5f5;--pane-radius: 8px;--pane-shadow: var(--shadow-lg), var(--shadow-sm)}[data-theme=dark]{--bg-primary: #1a1a1a;--bg-secondary: #252525;--bg-tertiary: #2a2a2a;--bg-canvas: #000000;--text-primary: #ffffff;--text-secondary: #e0e0e0;--text-muted: #a0a0a0;--text-disabled: #666666;--border-primary: #3a3a3a;--border-secondary: #4a4a4a;--accent-primary: #4a9eff;--accent-primary-hover: #5aadff;--accent-primary-active: #3a8eef;--accent-secondary: #9c7cff;--error-bg: #3a1a1a;--error-text: #ff6b6b;--error-border: #5a2a2a;--success-bg: #1a3a1a;--success-text: #6bcf6b;--success-border: #2a5a2a;--overlay-bg: rgba(0, 0, 0, .85);--overlay-backdrop: rgba(0, 0, 0, .98);--shadow-sm: 0 2px 8px rgba(0, 0, 0, .3);--shadow-md: 0 10px 30px rgba(0, 0, 0, .4);--shadow-lg: 0 20px 60px rgba(0, 0, 0, .5);--code-bg: #1e1e1e;--code-text: #d4d4d4;--code-line-number: #858585;--code-line-border: #3a3a3a;--code-selection: rgba(38, 79, 120, .6);--syntax-comment: #6a9955;--syntax-keyword: #569cd6;--syntax-string: #ce9178;--syntax-number: #b5cea8;--syntax-operator: #d4d4d4;--syntax-function: #dcdcaa;--syntax-class: #4ec9b0;--syntax-punctuation: #d4d4d4;--tab-bg: #2a2a2a;--tab-text: #a0a0a0;--tab-text-hover: #d0d0d0;--tab-text-active: #ffffff;--tab-border-active: #4a9eff;--button-bg: transparent;--button-border: #4a4a4a;--button-text: #a0a0a0;--button-bg-hover: #3a3a3a;--button-border-hover: #5a5a5a;--button-text-hover: #e0e0e0;--recompile-bg: #3a3a3a;--recompile-text: #e0e0e0;--recompile-bg-hover: #4a4a4a;--recompile-bg-active: #5a5a5a;--image-viewer-bg: #2a2a2a;--pane-radius: 8px;--pane-shadow: var(--shadow-lg), var(--shadow-sm)}[data-theme=system]{--bg-primary: #f5f5f5;--bg-secondary: #ffffff;--bg-tertiary: #f8f8f8;--bg-canvas: #000000;--text-primary: #000000;--text-secondary: #333333;--text-muted: #666666;--text-disabled: #999999;--border-primary: #e0e0e0;--border-secondary: #cccccc;--accent-primary: #4a9eff;--accent-primary-hover: #3a8eef;--accent-primary-active: #2a7edf;--accent-secondary: #7c4dff;--error-bg: #fff0f0;--error-text: #cc0000;--error-border: #ffcccc;--success-bg: #e8f5e9;--success-text: #4caf50;--success-border: #4caf50;--overlay-bg: rgba(0, 0, 0, .75);--overlay-backdrop: rgba(0, 0, 0, .95);--shadow-sm: 0 2px 8px rgba(0, 0, 0, .1);--shadow-md: 0 10px 30px rgba(0, 0, 0, .2);--shadow-lg: 0 20px 60px rgba(0, 0, 0, .25);--code-bg: #ffffff;--code-text: #000000;--code-line-number: #999999;--code-line-border: #e0e0e0;--code-selection: rgba(173, 214, 255, .4);--syntax-comment: #6a9955;--syntax-keyword: #0000ff;--syntax-string: #a31515;--syntax-number: #098658;--syntax-operator: #000000;--syntax-function: #795e26;--syntax-class: #267f99;--syntax-punctuation: #000000;--tab-bg: #f8f8f8;--tab-text: #666666;--tab-text-hover: #333333;--tab-text-active: #000000;--tab-border-active: #4a9eff;--button-bg: transparent;--button-border: #cccccc;--button-text: #666666;--button-bg-hover: #f0f0f0;--button-border-hover: #999999;--button-text-hover: #333333;--recompile-bg: #e8e8e8;--recompile-text: #333333;--recompile-bg-hover: #d8d8d8;--recompile-bg-active: #c8c8c8;--image-viewer-bg: #f5f5f5;--pane-radius: 8px;--pane-shadow: var(--shadow-lg), var(--shadow-sm)}@media (prefers-color-scheme: dark){[data-theme=system]{--bg-primary: #1a1a1a;--bg-secondary: #252525;--bg-tertiary: #2a2a2a;--bg-canvas: #000000;--text-primary: #ffffff;--text-secondary: #e0e0e0;--text-muted: #a0a0a0;--text-disabled: #666666;--border-primary: #3a3a3a;--border-secondary: #4a4a4a;--accent-primary: #4a9eff;--accent-primary-hover: #5aadff;--accent-primary-active: #3a8eef;--accent-secondary: #9c7cff;--error-bg: #3a1a1a;--error-text: #ff6b6b;--error-border: #5a2a2a;--success-bg: #1a3a1a;--success-text: #6bcf6b;--success-border: #2a5a2a;--overlay-bg: rgba(0, 0, 0, .85);--overlay-backdrop: rgba(0, 0, 0, .98);--shadow-sm: 0 2px 8px rgba(0, 0, 0, .3);--shadow-md: 0 10px 30px rgba(0, 0, 0, .4);--shadow-lg: 0 20px 60px rgba(0, 0, 0, .5);--code-bg: #1e1e1e;--code-text: #d4d4d4;--code-line-number: #858585;--code-line-border: #3a3a3a;--code-selection: rgba(38, 79, 120, .6);--syntax-comment: #6a9955;--syntax-keyword: #569cd6;--syntax-string: #ce9178;--syntax-number: #b5cea8;--syntax-operator: #d4d4d4;--syntax-function: #dcdcaa;--syntax-class: #4ec9b0;--syntax-punctuation: #d4d4d4;--tab-bg: #2a2a2a;--tab-text: #a0a0a0;--tab-text-hover: #d0d0d0;--tab-text-active: #ffffff;--tab-border-active: #4a9eff;--button-bg: transparent;--button-border: #4a4a4a;--button-text: #a0a0a0;--button-bg-hover: #3a3a3a;--button-border-hover: #5a5a5a;--button-text-hover: #e0e0e0;--recompile-bg: #3a3a3a;--recompile-text: #e0e0e0;--recompile-bg-hover: #4a4a4a;--recompile-bg-active: #5a5a5a;--image-viewer-bg: #2a2a2a;--pane-radius: 8px;--pane-shadow: var(--shadow-lg), var(--shadow-sm)}}.unstyled{--pane-radius: 0 !important;--pane-shadow: none !important}:root{--glass-bg: rgba(30, 30, 35, .65);--glass-bg-hover: rgba(30, 30, 35, .8);--glass-border: 1px solid rgba(255, 255, 255, .1);--glass-shadow: 0 4px 16px rgba(0, 0, 0, .25), 0 2px 4px rgba(0, 0, 0, .15), inset 0 1px 0 rgba(255, 255, 255, .1);--glass-shadow-sm: 0 2px 8px rgba(0, 0, 0, .25), inset 0 1px 0 rgba(255, 255, 255, .08);--glass-blur: blur(20px);--glass-radius: 6px;--glass-radius-sm: 6px;--glass-text: rgba(255, 255, 255, .9);--glass-text-muted: rgba(255, 255, 255, .6)}.stats-container{position:absolute;bottom:12px;left:12px;z-index:1000;display:flex;flex-direction:column;align-items:flex-start;gap:6px}.fps-counter{padding:6px 10px;background:var(--glass-bg);color:var(--glass-text);font-family:Monaco,Menlo,Courier New,monospace;font-size:11px;font-weight:500;border-radius:var(--glass-radius-sm);border:var(--glass-border);cursor:pointer;-webkit-user-select:none;user-select:none;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease}.fps-counter:hover{background:var(--glass-bg-hover)}.stats-grid{display:flex;flex-direction:row;gap:6px;opacity:0;visibility:hidden;transform:translateY(8px);transition:opacity .2s ease,transform .2s ease,visibility .2s;pointer-events:none}.stats-grid.open{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto}.stat-item{padding:6px 10px;background:var(--glass-bg);border-radius:var(--glass-radius-sm);border:var(--glass-border);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);display:flex;flex-direction:column;align-items:center;gap:2px;min-width:48px}.stat-value{color:var(--glass-text);font-family:Monaco,Menlo,Courier New,monospace;font-size:11px;font-weight:600;white-space:nowrap}.stat-label{color:var(--glass-text-muted);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;font-size:9px;font-weight:500;text-transform:uppercase;letter-spacing:.5px}.playback-controls{position:absolute;bottom:12px;right:12px;z-index:1000}.controls-menu-button{padding:6px 8px;background:var(--glass-bg);color:var(--glass-text);border:var(--glass-border);border-radius:var(--glass-radius-sm);cursor:pointer;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease;display:flex;align-items:center;justify-content:center;width:44px;height:44px;font-size:20px;font-weight:300;line-height:1}.controls-menu-button:hover{background:var(--glass-bg-hover);transform:scale(1.05)}.controls-menu-button:active{transform:scale(.95)}.controls-grid{position:absolute;bottom:0;right:0;display:grid;grid-template-columns:44px 44px 44px 44px;grid-template-rows:44px 44px;gap:6px;opacity:0;visibility:hidden;transform:scale(.8);transform-origin:bottom right;transition:opacity .2s ease,transform .2s ease,visibility .2s;pointer-events:none}.controls-grid.open{opacity:1;visibility:visible;transform:scale(1);pointer-events:auto}.control-button{padding:6px 8px;background:var(--glass-bg);color:var(--glass-text);border:var(--glass-border);border-radius:var(--glass-radius-sm);cursor:pointer;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease;display:flex;align-items:center;justify-content:center;width:44px;height:44px}.control-button:hover{background:var(--glass-bg-hover);transform:scale(1.05)}.control-button:active{transform:scale(.95)}.control-button svg{width:16px;height:16px;fill:currentColor}.playback-controls .controls-menu-button{position:relative;z-index:1}.playback-controls.open>.controls-menu-button{opacity:0;pointer-events:none}.shader-error-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:#000000f2;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:2000;padding:60px;overflow-y:auto}.error-overlay-content{background:#1a1a1a;border-radius:6px;max-width:900px;width:100%;display:flex;flex-direction:column;box-shadow:0 20px 60px #000c,0 0 1px #ffffff1a;border:1px solid #2a2a2a;max-height:calc(100vh - 120px)}.error-header{display:flex;align-items:center;justify-content:space-between;padding:18px 24px;background:linear-gradient(135deg,#c62828,#b71c1c);color:#fff;border-radius:6px 6px 0 0;border-bottom:1px solid rgba(0,0,0,.3);box-shadow:0 2px 8px #0003}.error-title{font-size:15px;font-weight:600;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;display:flex;align-items:center;gap:8px;letter-spacing:-.01em}.error-close{background:transparent;border:none;color:#ffffffe6;font-size:24px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:all .2s ease;opacity:.8}.error-close:hover{background:#ffffff26;opacity:1;transform:scale(1.05)}.error-body{padding:24px;overflow-y:auto;flex:1}.error-section{margin-bottom:24px}.error-section:last-child{margin-bottom:0}.error-pass-name{font-size:13px;font-weight:600;color:#ffa726;font-family:Monaco,Menlo,Courier New,monospace;margin-bottom:10px;padding-bottom:6px;border-bottom:1px solid #2a2a2a;letter-spacing:.02em}.error-content{margin:0;padding:14px 16px;background:#0f0f0f;border-radius:4px;color:#ff6b6b;font-size:13px;font-family:Monaco,Menlo,Courier New,monospace;line-height:1.6;overflow-x:auto;border:1px solid #2a2a2a;white-space:pre-wrap;word-break:break-word}.error-code-context{margin:12px 0 0;padding:14px 16px;background:#0d0d0d;border-radius:4px;color:#b0b0b0;font-size:12px;font-family:Monaco,Menlo,Courier New,monospace;line-height:1.6;overflow-x:auto;border:1px solid #2a2a2a;white-space:pre}.error-code-context .context-line{color:#666;display:block}.error-code-context .error-line-highlight{color:#fff;background:#c6282840;display:block;font-weight:600;border-left:3px solid #c62828;margin-left:-16px;padding-left:13px}.context-lost-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:#000000e6;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:3000}.context-lost-content{text-align:center;color:#fff;padding:40px}.context-lost-icon{margin-bottom:16px;opacity:.8}.context-lost-spinner{width:48px;height:48px;border:3px solid rgba(255,255,255,.2);border-top-color:#fff;border-radius:50%;margin:0 auto 16px;animation:context-lost-spin 1s linear infinite}@keyframes context-lost-spin{to{transform:rotate(360deg)}}.context-lost-title{font-size:18px;font-weight:600;margin-bottom:8px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif}.context-lost-message{font-size:14px;opacity:.7;margin-bottom:20px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif}.context-lost-reload{background:#fff;color:#000;border:none;padding:10px 24px;border-radius:6px;font-size:14px;font-weight:500;cursor:pointer;transition:transform .2s,box-shadow .2s;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif}.context-lost-reload:hover{transform:scale(1.02);box-shadow:0 4px 12px #fff3}.context-lost-reload:active{transform:scale(.98)}.recording-indicator{position:absolute;top:12px;right:12px;z-index:1000;display:flex;align-items:center;gap:6px;padding:6px 10px;background:#dc2626d9;border-radius:var(--glass-radius-sm);border:1px solid rgba(255,100,100,.3);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm)}.recording-dot{width:8px;height:8px;background:#fff;border-radius:50%;animation:recording-pulse 1s ease-in-out infinite}@keyframes recording-pulse{0%,to{opacity:1}50%{opacity:.4}}.recording-text{color:#fff;font-family:Monaco,Menlo,Courier New,monospace;font-size:11px;font-weight:600;letter-spacing:.5px}.control-button.recording{background:#dc2626b3;border-color:#ff64644d}.control-button.recording:hover{background:#dc2626d9}.control-button.recording svg{fill:#fff}.media-permission-banner{position:absolute;bottom:48px;left:50%;transform:translate(-50%);background:var(--glass-bg);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:var(--glass-border);box-shadow:var(--glass-shadow);color:#ffffffe6;padding:8px 16px;border-radius:6px;font-size:13px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;display:flex;align-items:center;gap:12px;z-index:100;white-space:nowrap}.media-banner-button{background:#4a9effcc;color:#fff;border:none;padding:4px 12px;border-radius:4px;cursor:pointer;font-size:13px;font-family:inherit}.media-banner-button:hover{background:#4a9eff}.script-error-overlay{position:absolute;bottom:48px;left:12px;right:12px;z-index:1500;pointer-events:auto}.script-error-content{background:#1a1a1a;border-radius:6px;box-shadow:0 8px 32px #0009,0 0 1px #ffffff1a;border:1px solid #2a2a2a;overflow:hidden}.script-error-header{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:linear-gradient(135deg,#e65100,#bf360c);color:#fff;border-bottom:1px solid rgba(0,0,0,.3)}.script-error-header.disabled{background:linear-gradient(135deg,#6d4c41,#4e342e)}.script-error-header.warning{background:linear-gradient(135deg,#f9a825,#f57f17);color:#1a1a1a}.script-error-header.warning .script-error-close{color:#000000b3}.script-error-header.warning .script-error-close:hover{background:#00000026;color:#000000e6}.script-error-title{font-size:13px;font-weight:600;font-family:Monaco,Menlo,Courier New,monospace;display:flex;align-items:center;gap:6px}.script-error-close{background:transparent;border:none;color:#ffffffe6;font-size:20px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;opacity:.8;transition:all .2s ease}.script-error-close:hover{background:#ffffff26;opacity:1}.script-error-message{margin:0;padding:10px 14px;color:#ffab91;font-size:12px;font-family:Monaco,Menlo,Courier New,monospace;line-height:1.5;white-space:pre-wrap;word-break:break-word;max-height:80px;overflow-y:auto}.script-error-stack{margin:0;padding:6px 14px 10px;color:#888;font-size:11px;font-family:Monaco,Menlo,Courier New,monospace;line-height:1.4;white-space:pre-wrap;word-break:break-word;max-height:60px;overflow-y:auto;border-top:1px solid #2a2a2a}.script-overlay{position:absolute;z-index:500;padding:6px 10px;background:var(--glass-bg);color:var(--glass-text);font-family:Monaco,Menlo,Courier New,monospace;font-size:11px;border-radius:var(--glass-radius-sm);border:var(--glass-border);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);pointer-events:none;white-space:pre;max-width:calc(100% - 24px);overflow:hidden;text-overflow:ellipsis}.script-overlay.hidden{display:none}.script-overlay.top-left{top:12px;left:12px}.script-overlay.top-right{top:12px;right:12px}.script-overlay.bottom-left{bottom:12px;left:12px}.script-overlay.bottom-right{bottom:12px;right:12px}@media (prefers-reduced-motion: reduce){*,*:before,*:after{transition-duration:.01ms!important;animation-duration:.01ms!important;animation-iteration-count:1!important}}@media (max-width: 428px){.stats-container{bottom:8px;left:8px}.playback-controls{bottom:8px;right:8px}.script-error-overlay{left:8px;right:8px;bottom:40px}.script-overlay.top-left{top:8px;left:8px}.script-overlay.top-right{top:8px;right:8px}.script-overlay.bottom-left{bottom:8px;left:8px}.script-overlay.bottom-right{bottom:8px;right:8px}}.uniforms-panel-wrapper{position:absolute;top:16px;right:16px;z-index:100;display:flex;flex-direction:column;align-items:flex-end}.uniforms-toggle-button{width:44px;height:44px;padding:6px;background:var(--glass-bg);border:var(--glass-border);border-radius:var(--glass-radius-sm);color:var(--glass-text);cursor:pointer;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease,opacity .15s ease;display:flex;align-items:center;justify-content:center}.uniforms-toggle-button:hover{background:var(--glass-bg-hover);transform:scale(1.05)}.uniforms-toggle-button:active{transform:scale(.95)}.uniforms-toggle-button svg{width:16px;height:16px}.uniforms-toggle-button.hidden{opacity:0;transform:scale(.8);pointer-events:none;position:absolute}.uniforms-panel{width:175px;max-height:calc(100vh - 100px);background:var(--glass-bg);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);border-radius:var(--glass-radius);border:var(--glass-border);box-shadow:var(--glass-shadow);overflow:hidden;display:flex;flex-direction:column;transform-origin:top right;transition:opacity .2s ease,transform .2s ease,max-height .2s ease}.uniforms-panel.closed{opacity:0;transform:scale(.25) translate(0);transform-origin:top right;pointer-events:none;max-height:0;padding:0}.uniforms-panel-header{padding:10px 14px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--glass-text-muted);background:#ffffff08;border-bottom:1px solid rgba(255,255,255,.06);flex-shrink:0;display:flex;justify-content:space-between;align-items:center}.uniforms-panel-close{background:transparent;border:none;color:var(--glass-text-muted);font-size:18px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:all .15s ease}.uniforms-panel-close:hover{background:#ffffff1a;color:var(--glass-text)}.uniforms-panel-content{flex:1;overflow-y:auto;overflow-x:hidden}.uniforms-panel .uniform-controls{padding:12px;gap:12px;background:transparent}.uniforms-panel .uniform-controls-header{display:none}.uniforms-panel .uniform-controls-list{gap:14px}.uniforms-panel .uniform-control{gap:6px}.uniforms-panel .uniform-control-label{font-size:11px;color:var(--glass-text)}.uniforms-panel .uniform-control-value{font-size:10px;padding:1px 4px;min-width:40px;color:var(--glass-text-muted);background:#0003;border-radius:3px}.uniforms-panel .uniform-control-slider{height:4px;background:#ffffff26}.uniforms-panel .uniform-control-slider::-webkit-slider-runnable-track{height:4px;background:#ffffff26}.uniforms-panel .uniform-control-slider::-webkit-slider-thumb{width:12px;height:12px;margin-top:-4px;background:#ffffffe6;box-shadow:0 1px 4px #0000004d}.uniforms-panel .uniform-control-slider::-moz-range-track{height:4px;background:#ffffff26}.uniforms-panel .uniform-control-slider::-moz-range-thumb{width:12px;height:12px;background:#ffffffe6;box-shadow:0 1px 4px #0000004d}.uniforms-panel .uniform-control-toggle{width:34px;height:18px}.uniforms-panel .uniform-control-toggle-slider{border-radius:18px}.uniforms-panel .uniform-control-toggle-slider:before{width:12px;height:12px;left:3px;bottom:3px}.uniforms-panel .uniform-control-toggle input:checked+.uniform-control-toggle-slider:before{transform:translate(16px)}.uniforms-panel .uniform-control-xy-pad{height:100px}.uniforms-panel .uniform-control-xy-handle{width:12px;height:12px}.uniforms-panel .uniform-control-color-swatch{height:28px}.uniforms-panel .uniform-control-vec-slider-row{gap:6px}.uniforms-panel .uniform-control-vec-component{font-size:9px;width:12px;color:var(--glass-text-muted)}.uniforms-panel .uniform-control-vec-value{font-size:9px;min-width:32px;color:var(--glass-text-muted);background:#0003;border-radius:3px}.uniforms-panel .uniform-control-xy-pad{background:#00000040;border:1px solid rgba(255,255,255,.1)}.uniforms-panel .uniform-control-xy-handle{background:#ffffffe6;box-shadow:0 1px 4px #0006}.uniforms-panel-content::-webkit-scrollbar{width:6px}.uniforms-panel-content::-webkit-scrollbar-track{background:transparent}.uniforms-panel-content::-webkit-scrollbar-thumb{background:#fff3;border-radius:3px}.uniforms-panel-content::-webkit-scrollbar-thumb:hover{background:#ffffff59}.uniform-controls{display:flex;flex-direction:column;gap:16px;padding:16px;height:100%;overflow-y:auto;background:var(--bg-secondary)}.uniform-controls-empty{color:var(--text-muted);font-size:13px;text-align:center;padding:20px}.uniform-controls-header{display:flex;justify-content:flex-end;padding-bottom:8px;border-bottom:1px solid var(--border-primary);margin-bottom:8px}.uniform-controls-reset{font-family:inherit;font-size:11px;padding:4px 10px;background:var(--bg-tertiary);color:var(--text-secondary);border:1px solid var(--border-primary);border-radius:4px;cursor:pointer;transition:background .15s ease,color .15s ease}.uniform-controls-reset:hover{background:var(--border-primary);color:var(--text-primary)}.uniform-controls-reset:active{transform:translateY(1px)}.uniform-controls-list{display:flex;flex-direction:column;gap:16px}.uniform-control{display:flex;flex-direction:column;gap:8px}.uniform-control-label-row{display:flex;justify-content:space-between;align-items:center}.uniform-control-label{font-family:Monaco,Menlo,Courier New,monospace;font-size:12px;font-weight:500;color:var(--text-primary)}.uniform-control-value{font-family:Monaco,Menlo,Courier New,monospace;font-size:11px;color:var(--text-muted);background:var(--bg-tertiary);padding:2px 6px;border-radius:3px;min-width:50px;text-align:right}.uniform-control-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:6px;background:var(--border-primary);border-radius:3px;outline:none;cursor:pointer}.uniform-control-slider::-webkit-slider-runnable-track{height:6px;background:var(--border-primary);border-radius:3px}.uniform-control-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:14px;height:14px;background:var(--accent-primary);border-radius:50%;cursor:pointer;margin-top:-4px;transition:transform .15s ease,box-shadow .15s ease}.uniform-control-slider::-webkit-slider-thumb:hover{transform:scale(1.1);box-shadow:0 2px 6px #0003}.uniform-control-slider::-webkit-slider-thumb:active{transform:scale(.95)}.uniform-control-slider::-moz-range-track{height:6px;background:var(--border-primary);border-radius:3px}.uniform-control-slider::-moz-range-thumb{width:14px;height:14px;background:var(--accent-primary);border:none;border-radius:50%;cursor:pointer;transition:transform .15s ease,box-shadow .15s ease}.uniform-control-slider::-moz-range-thumb:hover{transform:scale(1.1);box-shadow:0 2px 6px #0003}.uniform-control-slider::-moz-range-thumb:active{transform:scale(.95)}.uniform-control-slider:focus{outline:none}.uniform-control-slider:focus::-webkit-slider-thumb{box-shadow:0 0 0 3px var(--code-selection)}.uniform-control-slider:focus::-moz-range-thumb{box-shadow:0 0 0 3px var(--code-selection)}.uniform-control-toggle{position:relative;display:inline-block;width:40px;height:22px;cursor:pointer}.uniform-control-toggle input{opacity:0;width:0;height:0}.uniform-control-toggle-slider{position:absolute;top:0;left:0;right:0;bottom:0;background:var(--border-primary);border-radius:22px;transition:background .2s ease}.uniform-control-toggle-slider:before{content:"";position:absolute;width:16px;height:16px;left:3px;bottom:3px;background:var(--text-muted);border-radius:50%;transition:transform .2s ease,background .2s ease}.uniform-control-toggle input:checked+.uniform-control-toggle-slider{background:var(--accent-primary)}.uniform-control-toggle input:checked+.uniform-control-toggle-slider:before{transform:translate(18px);background:#fff}.uniform-control-toggle input:focus+.uniform-control-toggle-slider{box-shadow:0 0 0 2px var(--code-selection)}.uniform-control-xy-pad{position:relative;width:100%;height:120px;background:var(--bg-tertiary);border:1px solid var(--border-primary);border-radius:4px;cursor:crosshair;overflow:hidden}.uniform-control-xy-pad:before,.uniform-control-xy-pad:after{content:"";position:absolute;background:var(--border-primary);opacity:.5}.uniform-control-xy-pad:before{left:50%;top:0;bottom:0;width:1px}.uniform-control-xy-pad:after{top:50%;left:0;right:0;height:1px}.uniform-control-xy-handle{position:absolute;width:14px;height:14px;background:var(--accent-primary);border:2px solid white;border-radius:50%;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0000004d;pointer-events:none;z-index:1}.uniform-control-color-wrapper{display:flex;align-items:center;gap:8px}.uniform-control-color-swatch{width:100%;height:32px;border-radius:4px;border:1px solid var(--border-primary);cursor:pointer;transition:box-shadow .15s ease}.uniform-control-color-swatch:hover{box-shadow:0 0 0 2px var(--accent-primary)}.uniform-control-color-input{position:absolute;width:0;height:0;opacity:0;pointer-events:none}.uniform-control-vec3{gap:6px}.uniform-control-vec-slider-row{display:flex;align-items:center;gap:8px}.uniform-control-vec-component{font-family:Monaco,Menlo,Courier New,monospace;font-size:10px;font-weight:600;color:var(--text-muted);width:14px;text-align:center}.uniform-control-vec-slider{flex:1}.uniform-control-vec-value{min-width:40px;font-size:10px}.render-dialog-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;background:#000000b3;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:4000}.render-dialog{background:#1a1a1f;border:1px solid rgba(255,255,255,.1);border-radius:10px;box-shadow:0 20px 60px #0009;width:360px;max-width:calc(100% - 32px);overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:#e0e0e0}.render-dialog-header{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;background:linear-gradient(135deg,#1565c0,#0d47a1);color:#fff;border-bottom:1px solid rgba(0,0,0,.3)}.render-dialog-title{font-size:14px;font-weight:600;display:flex;align-items:center;gap:8px}.render-dialog-close{background:transparent;border:none;color:#fffc;font-size:20px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:all .15s ease}.render-dialog-close:hover{background:#ffffff26;color:#fff}.render-dialog-body{padding:18px;display:flex;flex-direction:column;gap:14px}.render-field{display:flex;flex-direction:column;gap:5px}.render-field-label{font-size:12px;font-weight:500;color:#fff9;text-transform:uppercase;letter-spacing:.5px}.render-field-row{display:flex;gap:8px;align-items:center}.render-field-row span{color:#fff6;font-size:13px}.render-input{flex:1;background:#0f0f14;border:1px solid rgba(255,255,255,.1);border-radius:5px;color:#e0e0e0;font-family:Monaco,Menlo,monospace;font-size:13px;padding:7px 10px;outline:none;transition:border-color .15s}.render-input:focus{border-color:#648cff80}.render-input[type=number]{-moz-appearance:textfield}.render-input[type=number]::-webkit-inner-spin-button,.render-input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.render-format-group{display:flex;gap:8px}.render-format-option{flex:1;position:relative}.render-format-option input[type=radio]{position:absolute;opacity:0;pointer-events:none}.render-format-option label{display:block;text-align:center;padding:8px 12px;background:#0f0f14;border:1px solid rgba(255,255,255,.1);border-radius:5px;font-size:12px;font-weight:500;cursor:pointer;transition:all .15s}.render-format-option input[type=radio]:checked+label{background:#648cff26;border-color:#648cff80;color:#8ab4ff}.render-format-option label:hover{border-color:#fff3}.render-estimate{font-size:11px;color:#fff6;font-family:Monaco,Menlo,monospace;text-align:center;padding:4px 0}.render-dialog-actions{display:flex;gap:8px;padding:0 18px 18px}.render-btn{flex:1;padding:9px 16px;border-radius:6px;font-size:13px;font-weight:500;cursor:pointer;border:none;transition:all .15s;font-family:inherit}.render-btn-primary{background:linear-gradient(135deg,#1565c0,#0d47a1);color:#fff}.render-btn-primary:hover{filter:brightness(1.1)}.render-btn-primary:disabled{opacity:.5;cursor:not-allowed;filter:none}.render-btn-cancel{background:#ffffff14;color:#ffffffb3;border:1px solid rgba(255,255,255,.1)}.render-btn-cancel:hover{background:#ffffff1f}.render-progress{display:none;flex-direction:column;gap:8px;padding:18px}.render-progress.active{display:flex}.render-progress-bar-bg{height:6px;background:#0f0f14;border-radius:3px;overflow:hidden}.render-progress-bar{height:100%;background:linear-gradient(90deg,#1565c0,#42a5f5);border-radius:3px;width:0%;transition:width .1s ease}.render-progress-text{font-size:12px;color:#ffffff80;font-family:Monaco,Menlo,monospace;text-align:center}.multi-view-controls-wrapper{position:absolute;top:16px;right:16px;z-index:100;display:flex;flex-direction:column;align-items:flex-end}.multi-view-controls-toggle{width:44px;height:44px;padding:6px;background:var(--glass-bg);border:var(--glass-border);border-radius:var(--glass-radius-sm);color:var(--glass-text);cursor:pointer;backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);box-shadow:var(--glass-shadow-sm);transition:all .2s ease,opacity .15s ease;display:flex;align-items:center;justify-content:center}.multi-view-controls-toggle:hover{background:var(--glass-bg-hover);transform:scale(1.05)}.multi-view-controls-toggle:active{transform:scale(.95)}.multi-view-controls-toggle svg{width:16px;height:16px}.multi-view-controls-toggle.hidden{opacity:0;transform:scale(.8);pointer-events:none;position:absolute}.multi-view-controls-panel{width:175px;max-height:calc(100vh - 100px);background:var(--glass-bg);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);border-radius:var(--glass-radius);border:var(--glass-border);box-shadow:var(--glass-shadow);overflow:hidden;display:flex;flex-direction:column;transform-origin:top right;transition:opacity .2s ease,transform .2s ease,max-height .2s ease}.multi-view-controls-panel.closed{opacity:0;transform:scale(.25) translate(0);transform-origin:top right;pointer-events:none;max-height:0;padding:0}.multi-view-controls-header{padding:10px 14px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--glass-text-muted);background:#ffffff08;border-bottom:1px solid rgba(255,255,255,.06);flex-shrink:0;display:flex;justify-content:space-between;align-items:center}.multi-view-controls-close{background:transparent;border:none;color:var(--glass-text-muted);font-size:18px;line-height:1;cursor:pointer;padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:all .15s ease}.multi-view-controls-close:hover{background:#ffffff1a;color:var(--glass-text)}.controls-section{display:flex;flex-direction:column;gap:8px;padding:12px}.controls-section+.controls-section{padding-top:0}.section-label{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--glass-text-muted);padding-bottom:6px;border-bottom:1px solid rgba(255,255,255,.06);margin-bottom:4px}.playback-controls{flex-direction:row;gap:8px;padding:12px}.control-btn{width:44px;height:44px;border:none;border-radius:var(--glass-radius-sm);background:#ffffff1a;color:var(--glass-text);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s ease}.control-btn:hover{background:#fff3}.control-btn:active{transform:scale(.95)}.control-btn svg{width:16px;height:16px}.uniforms-section{border-top:1px solid rgba(255,255,255,.06)}.uniforms-container{display:flex;flex-direction:column;gap:8px}.multi-view-controls-panel .uniform-controls{padding:0;gap:12px;background:transparent}.multi-view-controls-panel .uniform-controls-header{display:none}.multi-view-controls-panel .uniform-controls-list{gap:14px}.multi-view-controls-panel .uniform-control{gap:6px}.multi-view-controls-panel .uniform-control-label{font-size:11px;color:var(--glass-text)}.multi-view-controls-panel .uniform-control-value{font-size:10px;padding:1px 4px;min-width:40px;color:var(--glass-text-muted);background:#0003;border-radius:3px}.multi-view-controls-panel .uniform-control-slider{height:4px;background:#ffffff26}.multi-view-controls-panel .uniform-control-slider::-webkit-slider-runnable-track{height:4px;background:#ffffff26}.multi-view-controls-panel .uniform-control-slider::-webkit-slider-thumb{width:12px;height:12px;margin-top:-4px;background:#ffffffe6;box-shadow:0 1px 4px #0000004d}.multi-view-controls-panel .uniform-control-slider::-moz-range-track{height:4px;background:#ffffff26}.multi-view-controls-panel .uniform-control-slider::-moz-range-thumb{width:12px;height:12px;background:#ffffffe6;box-shadow:0 1px 4px #0000004d}.multi-view-controls-panel .uniform-control-toggle{width:34px;height:18px}.multi-view-controls-panel .uniform-control-toggle-slider{border-radius:18px}.multi-view-controls-panel .uniform-control-toggle-slider:before{width:12px;height:12px;left:3px;bottom:3px}.multi-view-controls-panel .uniform-control-toggle input:checked+.uniform-control-toggle-slider:before{transform:translate(16px)}.layout-fullscreen{width:100%;height:100%}.layout-fullscreen .canvas-container{position:relative;width:100%;height:100%;background:#000}.layout-default{width:100%;height:100%}.layout-default .canvas-container{position:relative;width:100%;height:100%;background:var(--bg-canvas);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.layout-split{width:100%;height:100%;display:flex;gap:24px}.layout-split .canvas-container{position:relative;flex:1;background:var(--bg-canvas);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.layout-split .code-panel{position:relative;flex:1;display:flex;flex-direction:column;background:var(--bg-secondary);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.tab-bar{display:flex;background:var(--tab-bg);border-bottom:1px solid var(--border-primary);padding:8px 8px 0;gap:4px}.tab-button{padding:8px 16px;background:transparent;border:none;border-radius:6px 6px 0 0;font-size:13px;font-family:Monaco,Menlo,Courier New,monospace;cursor:pointer;transition:background .2s,color .2s;color:var(--tab-text)}.tab-button:hover{background:var(--button-bg-hover);color:var(--tab-text-hover)}.tab-button.active{background:var(--bg-secondary);color:var(--tab-text-active);font-weight:500}.copy-button{position:absolute;top:12px;right:12px;padding:6px;background:var(--button-bg);border:none;border-radius:4px;color:var(--button-text);cursor:pointer;transition:all .2s;z-index:10;display:flex;align-items:center;justify-content:center}.copy-button:hover{background:var(--button-bg-hover);color:var(--button-text-hover)}.copy-button:active{transform:scale(.9)}.copy-button.copied{color:var(--success-text)}.code-viewer{flex:1;min-height:0;overflow:auto;position:relative;background:var(--code-bg)}.code-viewer pre{margin:0;padding:16px;font-size:13px;line-height:1.5;font-family:Monaco,Menlo,Courier New,monospace;background:var(--code-bg);color:var(--code-text)}.code-viewer code{font-family:inherit;font-size:inherit}.token.comment{color:var(--syntax-comment)}.token.keyword{color:var(--syntax-keyword)}.token.string{color:var(--syntax-string)}.token.number{color:var(--syntax-number)}.token.operator{color:var(--syntax-operator)}.token.function{color:var(--syntax-function)}.token.class-name{color:var(--syntax-class)}.token.punctuation{color:var(--syntax-punctuation)}.tab-button.image-tab,.tab-button.image-tab.active{color:var(--accent-secondary)}.image-viewer{display:flex;align-items:center;justify-content:center;height:100%;padding:16px;background:var(--image-viewer-bg)}.image-viewer img{max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;box-shadow:var(--shadow-sm)}@media (max-width: 800px){.layout-split{flex-direction:column}}.layout-tabbed{width:100%;height:100%;display:flex;flex-direction:column;box-sizing:border-box}.tabbed-wrapper{display:flex;flex-direction:column;width:100%;height:100%;border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.tabbed-toolbar{display:flex;align-items:center;flex-shrink:0;background:var(--tab-bg);border-bottom:1px solid var(--border-primary);padding-right:8px}.tabbed-tab-bar{display:flex;flex:1;gap:4px;overflow-x:auto;overflow-y:hidden;scrollbar-width:thin}.tabbed-tab-bar::-webkit-scrollbar{height:4px}.tabbed-tab-bar::-webkit-scrollbar-thumb{background:var(--border-secondary);border-radius:2px}.tabbed-tab-button{padding:10px 16px;background:transparent;border:none;border-bottom:2px solid transparent;font-size:12px;font-family:Monaco,Menlo,Courier New,monospace;cursor:pointer;transition:color .15s,border-color .15s;color:var(--tab-text);white-space:nowrap;flex-shrink:0}.tabbed-tab-button:hover{color:var(--tab-text-hover)}.tabbed-tab-button.active{color:var(--tab-text-active);border-bottom-color:var(--tab-border-active)}.tabbed-tab-button.shader-tab{font-family:system-ui,-apple-system,sans-serif}.tabbed-tab-button.image-tab{color:var(--accent-secondary)}.tabbed-tab-button.image-tab.active{color:var(--accent-secondary);border-bottom-color:var(--accent-secondary)}.tabbed-tab-button.uniforms-tab{color:var(--accent-tertiary, var(--accent-primary));padding:8px 12px}.tabbed-tab-button.uniforms-tab.active{color:var(--accent-tertiary, var(--accent-primary));border-bottom-color:var(--accent-tertiary, var(--accent-primary))}.tabbed-tab-button .uniforms-icon{width:18px;height:18px;display:block}.tabbed-content{flex:1;min-height:0;position:relative;background:var(--bg-canvas);overflow:hidden}.tabbed-canvas-container{position:absolute;top:0;left:0;width:100%;height:100%}.tabbed-code-viewer{position:absolute;top:0;left:0;width:100%;height:100%;overflow:auto;background:var(--code-bg)}.tabbed-code-viewer pre{margin:0;padding:16px 16px 16px 0;font-size:13px;line-height:1.6;font-family:Monaco,Menlo,Courier New,monospace;background:var(--code-bg);color:var(--code-text);display:flex}.tabbed-code-viewer code{font-family:inherit;font-size:inherit}.tabbed-line-numbers{text-align:right;padding-right:16px;margin-right:16px;border-right:1px solid var(--code-line-border);color:var(--code-line-number);-webkit-user-select:none;user-select:none;flex-shrink:0;padding-left:16px}.tabbed-code-content{flex:1;overflow-x:auto}.tabbed-image-viewer{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--image-viewer-bg);padding:20px;box-sizing:border-box}.tabbed-image-viewer img{max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;box-shadow:var(--shadow-sm)}.tabbed-code-viewer .token.comment{color:var(--syntax-comment)}.tabbed-code-viewer .token.keyword{color:var(--syntax-keyword)}.tabbed-code-viewer .token.string{color:var(--syntax-string)}.tabbed-code-viewer .token.number{color:var(--syntax-number)}.tabbed-code-viewer .token.operator{color:var(--syntax-operator)}.tabbed-code-viewer .token.function{color:var(--syntax-function)}.tabbed-code-viewer .token.class-name{color:var(--syntax-class)}.tabbed-code-viewer .token.punctuation{color:var(--syntax-punctuation)}@media (max-width: 600px){.tabbed-tab-button{padding:8px 12px;font-size:12px}}.tabbed-editor-container{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;background:var(--code-bg)}.tabbed-button-container{display:flex;align-items:center;gap:6px;flex-shrink:0}.tabbed-copy-button{display:flex;align-items:center;justify-content:center;background:var(--button-bg);border:1px solid var(--button-border);color:var(--button-text);width:44px;height:44px;border-radius:4px;cursor:pointer;transition:background .15s,border-color .15s,color .15s}.tabbed-copy-button:hover{background:var(--button-bg-hover);border-color:var(--button-border-hover);color:var(--button-text-hover)}.tabbed-copy-button:active{background:var(--button-bg-hover)}.tabbed-copy-button.copied{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}.tabbed-recompile-button{display:flex;align-items:center;gap:6px;background:var(--recompile-bg);border:none;color:var(--recompile-text);padding:6px 12px;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;transition:background .15s,color .15s}.tabbed-recompile-button:hover{background:var(--recompile-bg-hover)}.tabbed-recompile-button:active{background:var(--recompile-bg-active)}.tabbed-recompile-button svg{flex-shrink:0}.tabbed-error-display{position:absolute;bottom:0;left:0;right:0;background:var(--error-bg);color:var(--error-text);padding:10px 14px;font-family:Monaco,Menlo,Courier New,monospace;font-size:12px;white-space:pre-wrap;overflow:auto;max-height:120px;border-top:1px solid var(--error-border);z-index:10}.tabbed-fallback-textarea{width:100%;height:100%;background:var(--code-bg);color:var(--code-text);border:none;padding:12px;font-family:Monaco,Menlo,Courier New,monospace;font-size:13px;resize:none;outline:none}.tabbed-uniforms-container{position:absolute;top:0;left:0;width:100%;height:100%;overflow-y:auto;background:#00000080;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;justify-content:center;padding:20px;box-sizing:border-box}.tabbed-uniforms-container .uniform-controls{max-width:400px;width:100%;background:#1e1e23f2;border-radius:12px;padding:20px;box-shadow:0 4px 20px #0006;height:fit-content}.tabbed-uniforms-container .uniform-control-label{color:#e0e0e0}.tabbed-uniforms-container .uniform-control-value{color:#a0a0a0;background:#0000004d}.tabbed-uniforms-container .uniform-controls-header{color:#909090;border-bottom-color:#ffffff1a}.tabbed-uniforms-container .uniform-control-slider{background:#ffffff1a}.tabbed-uniforms-container .uniform-control-slider::-webkit-slider-thumb{background:#fff}.tabbed-uniforms-container .uniform-control-slider::-moz-range-thumb{background:#fff}.tabbed-uniforms-container .uniform-control-vec-component{color:#909090}.tabbed-uniforms-container .uniform-control-vec-value{color:#a0a0a0;background:#0000004d}.layout-ui{width:100%;height:100%;display:flex;gap:24px}.layout-ui .ui-canvas-container{position:relative;flex:1;background:var(--bg-canvas);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.layout-ui .ui-panel{width:200px;flex-shrink:0;display:flex;flex-direction:column;background:var(--bg-secondary);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.layout-ui .ui-uniforms-container{flex:1;min-height:0;overflow-y:auto;overflow-x:hidden;display:flex;flex-direction:column;justify-content:center}.layout-ui .ui-empty-state{text-align:center;color:var(--text-muted);font-size:13px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;padding:20px}.layout-ui .uniform-controls{padding:20px;gap:16px;background:transparent}.layout-ui .uniform-controls-header{display:none}.layout-ui .uniform-controls-list{gap:20px}.layout-ui .uniform-control{gap:8px}.layout-ui .uniform-control-label{font-size:12px;font-weight:500;color:var(--text-primary)}.layout-ui .uniform-control-value{font-size:11px;padding:3px 8px;min-width:44px;color:var(--text-muted);background:var(--bg-tertiary);border-radius:4px}.layout-ui .uniform-control-slider{height:4px;background:var(--border-primary)}.layout-ui .uniform-control-slider::-webkit-slider-runnable-track{height:4px;background:var(--border-primary)}.layout-ui .uniform-control-slider::-webkit-slider-thumb{width:14px;height:14px;margin-top:-5px;background:var(--accent-primary);border:2px solid var(--bg-secondary);box-shadow:var(--shadow-sm)}.layout-ui .uniform-control-slider::-moz-range-track{height:4px;background:var(--border-primary)}.layout-ui .uniform-control-slider::-moz-range-thumb{width:14px;height:14px;background:var(--accent-primary);border:2px solid var(--bg-secondary);box-shadow:var(--shadow-sm)}.layout-ui .uniform-control-xy-pad{height:100px;background:var(--bg-tertiary);border:1px solid var(--border-primary);border-radius:4px}.layout-ui .uniform-control-xy-handle{width:12px;height:12px;background:var(--accent-primary);border:2px solid var(--bg-secondary);box-shadow:var(--shadow-sm)}.layout-ui .uniform-control-color-swatch{height:28px;border-radius:4px;border:1px solid var(--border-primary)}.layout-ui .uniform-control-toggle{width:36px;height:20px}.layout-ui .uniform-control-toggle-slider{background:var(--border-primary);border-radius:20px}.layout-ui .uniform-control-toggle-slider:before{width:14px;height:14px;left:3px;bottom:3px;background:var(--bg-primary);box-shadow:var(--shadow-sm)}.layout-ui .uniform-control-toggle input:checked+.uniform-control-toggle-slider{background:var(--accent-primary)}.layout-ui .uniform-control-toggle input:checked+.uniform-control-toggle-slider:before{transform:translate(16px)}.layout-ui .uniform-control-vec-component{font-size:10px;width:14px;color:var(--text-muted);font-weight:500}.layout-ui .uniform-control-vec-value{font-size:10px;min-width:36px;padding:2px 6px;color:var(--text-muted);background:var(--bg-tertiary);border-radius:4px}.layout-ui .ui-uniforms-container::-webkit-scrollbar{width:6px}.layout-ui .ui-uniforms-container::-webkit-scrollbar-track{background:transparent}.layout-ui .ui-uniforms-container::-webkit-scrollbar-thumb{background:var(--border-primary);border-radius:3px}.layout-ui .ui-uniforms-container::-webkit-scrollbar-thumb:hover{background:var(--text-muted)}.layout-ui .ui-playback-container{display:flex;justify-content:center;gap:12px;padding:16px 20px;border-top:1px solid var(--border-primary);background:var(--bg-tertiary)}.layout-ui .ui-control-button{width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:var(--button-bg);border:1px solid var(--border-primary);border-radius:8px;color:var(--text-primary);cursor:pointer;transition:all .15s ease}.layout-ui .ui-control-button:hover{background:var(--button-bg-hover);color:var(--text-primary)}.layout-ui .ui-control-button:active{transform:scale(.95)}.layout-ui .ui-control-button svg{width:18px;height:18px;fill:currentColor}@media (max-width: 600px){.layout-ui{flex-direction:column;gap:16px}.layout-ui .ui-canvas-container{flex:none;aspect-ratio:16 / 9}.layout-ui .ui-panel{width:100%;max-height:300px}}.layout-multi-view{position:relative;width:100%;height:100%;box-sizing:border-box;background:var(--bg-primary)}.multi-view-canvas{position:relative;background:var(--bg-canvas);border-radius:var(--pane-radius);box-shadow:var(--pane-shadow);overflow:hidden}.multi-view-label{position:absolute;top:12px;left:12px;padding:4px 10px;background:#0009;color:#fff;font-family:var(--font-mono);font-size:12px;font-weight:500;border-radius:4px;text-transform:capitalize;z-index:5;pointer-events:none}.multi-view-info{position:absolute;bottom:12px;left:12px;padding:6px 10px;background:#0009;color:#fff;font-family:var(--font-mono);font-size:11px;border-radius:4px;z-index:5;pointer-events:none}.layout-split-view{display:flex;gap:16px}.layout-split-view.split-horizontal{flex-direction:row}.layout-split-view.split-horizontal .multi-view-canvas{flex:1;height:100%}.layout-split-view.split-vertical{flex-direction:column}.layout-split-view.split-vertical .multi-view-canvas{flex:1;width:100%}.layout-quad-view{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:16px}.layout-quad-view .multi-view-canvas{min-height:0}.layout-inset-view .multi-view-canvas.inset-main{width:100%;height:100%}.layout-inset-view .multi-view-canvas.inset-overlay{position:absolute;bottom:40px;right:40px;width:25%;min-width:200px;aspect-ratio:16 / 9;z-index:10;transition:all .2s ease}.layout-inset-view .multi-view-canvas.inset-overlay.minimized{width:48px;height:48px;min-width:unset;aspect-ratio:unset;cursor:pointer;opacity:.8}.layout-inset-view .multi-view-canvas.inset-overlay.minimized:hover{opacity:1}.inset-minimize-btn{position:absolute;top:8px;right:8px;width:24px;height:24px;border:none;border-radius:4px;background:#00000080;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px;z-index:11;transition:background .2s}.inset-minimize-btn:hover{background:#000000b3}.editor-toolbar{display:flex;align-items:center;background:var(--tab-bg);border-bottom:1px solid var(--border-primary);padding-right:8px}.editor-tab-bar{display:flex;flex:1;overflow-x:auto;scrollbar-width:thin}.editor-tab-button{background:transparent;border:none;color:var(--tab-text);padding:10px 16px;cursor:pointer;font-family:Monaco,Menlo,Courier New,monospace;font-size:12px;white-space:nowrap;border-bottom:2px solid transparent;transition:color .15s,border-color .15s}.editor-tab-button:hover{color:var(--tab-text-hover)}.editor-tab-button.active{color:var(--tab-text-active);border-bottom-color:var(--tab-border-active)}.editor-tab-button.image-tab{color:var(--accent-secondary)}.editor-tab-button.image-tab.active{color:var(--accent-secondary);border-bottom-color:var(--accent-secondary)}.editor-tab-button.uniforms-tab{color:var(--accent-tertiary, var(--accent-primary));padding:8px 12px}.editor-tab-button.uniforms-tab.active{color:var(--accent-tertiary, var(--accent-primary));border-bottom-color:var(--accent-tertiary, var(--accent-primary))}.editor-tab-button .uniforms-icon{width:18px;height:18px;display:block}.editor-copy-button{display:flex;align-items:center;justify-content:center;background:var(--button-bg);border:1px solid var(--button-border);color:var(--button-text);width:32px;height:32px;border-radius:4px;cursor:pointer;transition:background .15s,border-color .15s,color .15s;flex-shrink:0;margin-right:6px}.editor-copy-button:hover{background:var(--button-bg-hover);border-color:var(--button-border-hover);color:var(--button-text-hover)}.editor-copy-button:active{background:var(--button-bg-hover)}.editor-copy-button.copied{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}.editor-copy-button svg{flex-shrink:0}.editor-recompile-button{display:flex;align-items:center;gap:6px;background:var(--recompile-bg);border:none;color:var(--recompile-text);padding:6px 12px;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;transition:background .15s,color .15s;flex-shrink:0}.editor-recompile-button:hover{background:var(--recompile-bg-hover)}.editor-recompile-button:active{background:var(--recompile-bg-active)}.editor-recompile-button svg{flex-shrink:0}.editor-content-area{flex:1;overflow:hidden;position:relative;background:var(--code-bg)}.editor-prism-container{height:100%;width:100%}.editor-fallback-textarea{width:100%;height:100%;background:var(--code-bg);color:var(--code-text);border:none;padding:12px;font-family:Monaco,Menlo,Courier New,monospace;font-size:13px;resize:none;outline:none}.editor-image-viewer{display:flex;align-items:center;justify-content:center;height:100%;background:var(--image-viewer-bg);padding:20px}.editor-uniforms-container{height:100%;overflow-y:auto;background:var(--bg-secondary)}.editor-image-viewer img{max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;box-shadow:var(--shadow-sm)}.editor-error-display{background:var(--error-bg);color:var(--error-text);padding:10px 14px;font-family:Monaco,Menlo,Courier New,monospace;font-size:12px;white-space:pre-wrap;overflow:auto;max-height:120px;border-top:1px solid var(--error-border)}.prism-editor-wrapper{display:flex;height:100%;background:var(--code-bg);font-family:Monaco,Menlo,Courier New,monospace;font-size:13px;line-height:1.6}.prism-editor-line-numbers{flex-shrink:0;padding:16px 12px 16px 16px;text-align:right;color:var(--code-line-number);border-right:1px solid var(--code-line-border);-webkit-user-select:none;user-select:none;overflow:hidden}.prism-editor-line-numbers span{display:block}.prism-editor-area{flex:1;position:relative;overflow:hidden}.prism-editor-textarea,.prism-editor-highlight{position:absolute;top:0;left:0;width:100%;height:100%;padding:16px;margin:0;border:none;outline:none;font-family:inherit;font-size:inherit;line-height:inherit;white-space:pre-wrap;word-wrap:break-word;overflow:auto;box-sizing:border-box}.prism-editor-textarea{background:transparent;color:transparent;caret-color:var(--code-text);resize:none;z-index:1;-webkit-text-fill-color:transparent}.prism-editor-textarea::selection{background:var(--code-selection)}.prism-editor-textarea::-moz-selection{background:var(--code-selection)}.prism-editor-highlight{background:var(--code-bg);color:var(--code-text);pointer-events:none;z-index:0}.prism-editor-highlight code{font-family:inherit;font-size:inherit;background:none;padding:0}.prism-editor-highlight .token.comment{color:var(--syntax-comment)}.prism-editor-highlight .token.keyword{color:var(--syntax-keyword)}.prism-editor-highlight .token.string{color:var(--syntax-string)}.prism-editor-highlight .token.number{color:var(--syntax-number)}.prism-editor-highlight .token.operator{color:var(--syntax-operator)}.prism-editor-highlight .token.function{color:var(--syntax-function)}.prism-editor-highlight .token.class-name{color:var(--syntax-class)}.prism-editor-highlight .token.punctuation{color:var(--syntax-punctuation)}')),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();const Et="modulepreload",Tt=function(i,e){return new URL(i,e).href},Ce={},_=function(e,n,t){let r=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=Tt(l,t),l in Ce)return;Ce[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!t)for(let m=o.length-1;m>=0;m--){const C=o[m];if(C.href===l&&(!u||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${d}`))return;const b=document.createElement("link");if(b.rel=u?"stylesheet":Et,u||(b.as="script"),b.crossOrigin="",b.href=l,a&&b.setAttribute("nonce",a),document.head.appendChild(b),u)return new Promise((m,C)=>{b.addEventListener("load",m),b.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${l}`)))})}))}function c(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return r.then(o=>{for(const s of o||[])s.status==="rejected"&&c(s.reason);return e().catch(c)})},Ne="shadertoy",$e="default",qe=!0,Ge={iChannel0:"BufferA"},je={iChannel0:"BufferA"},Ve={mode:Ne,layout:$e,controls:qe,Image:Ge,BufferA:je},Pt=Object.freeze(Object.defineProperty({__proto__:null,BufferA:je,Image:Ge,controls:qe,default:Ve,layout:$e,mode:Ne},Symbol.toStringTag,{value:"Module"})),Ke="default",He=!0,Qe={layout:Ke,controls:He},St=Object.freeze(Object.defineProperty({__proto__:null,controls:He,default:Qe,layout:Ke},Symbol.toStringTag,{value:"Module"})),Xe="default",Ye=!0,We={layout:Xe,controls:Ye},Rt=Object.freeze(Object.defineProperty({__proto__:null,controls:Ye,default:We,layout:Xe},Symbol.toStringTag,{value:"Module"})),Ze="Mandelbrot & Julia Sets",Je="Interactive exploration of the relationship between Mandelbrot and Julia sets. Click in the Mandelbrot view to set the Julia parameter.",en=["mandelbrot","julia"],nn="split",tn={uMaxIter:{type:"int",value:100,min:10,max:500,step:10,label:"Max Iterations"}},rn={title:Ze,description:Je,views:en,layout:nn,uniforms:tn},zt=Object.freeze(Object.defineProperty({__proto__:null,default:rn,description:Je,layout:nn,title:Ze,uniforms:tn,views:en},Symbol.toStringTag,{value:"Module"})),cn="default",on=!0,an={layout:cn,controls:on},Lt=Object.freeze(Object.defineProperty({__proto__:null,controls:on,default:an,layout:cn},Symbol.toStringTag,{value:"Module"})),sn="default",ln=!0,un={u_zoom:{type:"float",value:1,hidden:!0},u_pan:{type:"vec2",value:[0,0],hidden:!0}},dn={layout:sn,controls:ln,uniforms:un},At=Object.freeze(Object.defineProperty({__proto__:null,controls:ln,default:dn,layout:sn,uniforms:un},Symbol.toStringTag,{value:"Module"})),pn="ACP parameter space",fn="Visualize the parameter space of Descartes Quadruples, showing the boundaries of the quadruple and the equivalence of maps.",vn=["stripPack","resulting_pack","invertedStrip"],mn="split",hn={title:pn,description:fn,views:vn,layout:mn},Bt=Object.freeze(Object.defineProperty({__proto__:null,default:hn,description:fn,layout:mn,title:pn,views:vn},Symbol.toStringTag,{value:"Module"})),gn="ACP parameter space with packing equivalent points",Cn="Visualize the parameter space of Descartes Quadruples, highlighting points that correspond to the same packing configuration.",yn=["stripPack","invertedStrip"],xn="split",bn={u_zoom_stripPack:{type:"float",value:1,hidden:!0},u_pan_stripPack:{type:"vec2",value:[0,0],hidden:!0}},kn={title:gn,description:Cn,views:yn,layout:xn,uniforms:bn},It=Object.freeze(Object.defineProperty({__proto__:null,default:kn,description:Cn,layout:xn,title:gn,uniforms:bn,views:yn},Symbol.toStringTag,{value:"Module"})),_n="default",wn=!0,En={layout:_n,controls:wn},Ot=Object.freeze(Object.defineProperty({__proto__:null,controls:wn,default:En,layout:_n},Symbol.toStringTag,{value:"Module"})),Tn="ACP parameter space",Pn=["stripPack","resulting_pack","invertedStrip"],Sn="split",Rn={title:Tn,views:Pn,layout:Sn},Ft=Object.freeze(Object.defineProperty({__proto__:null,default:Rn,layout:Sn,title:Tn,views:Pn},Symbol.toStringTag,{value:"Module"})),zn="ACP parameter space with packing equivalent points",Ln="Visualize the parameter space of Descartes Quadruples, highlighting points that correspond to the same packing configuration.",An=["stripPack","invertedStrip"],Bn="split",In={u_zoom_stripPack:{type:"float",value:1,hidden:!0},u_pan_stripPack:{type:"vec2",value:[0,0],hidden:!0}},On={title:zn,description:Ln,views:An,layout:Bn,uniforms:In},Dt=Object.freeze(Object.defineProperty({__proto__:null,default:On,description:Ln,layout:Bn,title:zn,uniforms:In,views:An},Symbol.toStringTag,{value:"Module"})),Fn="ACP parameter space",Dn=["stripPack","resulting_pack"],Mn="split",Un={title:Fn,views:Dn,layout:Mn},Mt=Object.freeze(Object.defineProperty({__proto__:null,default:Un,layout:Mn,title:Fn,views:Dn},Symbol.toStringTag,{value:"Module"})),Nn="ACP parameter space",$n=["stripPack","resulting_pack","invertedStrip"],qn="split",Gn={title:Nn,views:$n,layout:qn},Ut=Object.freeze(Object.defineProperty({__proto__:null,default:Gn,layout:qn,title:Nn,views:$n},Symbol.toStringTag,{value:"Module"})),jn="ACP parameter space",Vn="Visualize the parameter space of Descartes Quadruples, showing the boundaries of the quadruple and the equivalence of maps.",Kn=["stripPack","resulting_pack","invertedStrip"],Hn="split",Qn={title:jn,description:Vn,views:Kn,layout:Hn},Nt=Object.freeze(Object.defineProperty({__proto__:null,default:Qn,description:Vn,layout:Hn,title:jn,views:Kn},Symbol.toStringTag,{value:"Module"})),Xn="ACP parameter space zoom",Yn=["stripPack","resulting_pack","invertedStrip"],Wn="split",Zn={u_zoom_stripPack:{type:"float",value:1,hidden:!0},u_pan_stripPack:{type:"vec2",value:[0,0],hidden:!0},u_zoom_resulting_pack:{type:"float",value:1,hidden:!0},u_pan_resulting_pack:{type:"vec2",value:[0,0],hidden:!0},u_zoom_invertedStrip:{type:"float",value:1,hidden:!0},u_pan_invertedStrip:{type:"vec2",value:[0,0],hidden:!0}},Jn={title:Xn,views:Yn,layout:Wn,uniforms:Zn},$t=Object.freeze(Object.defineProperty({__proto__:null,default:Jn,layout:Wn,title:Xn,uniforms:Zn,views:Yn},Symbol.toStringTag,{value:"Module"})),et="default",nt=!0,tt={layout:et,controls:nt},qt=Object.freeze(Object.defineProperty({__proto__:null,controls:nt,default:tt,layout:et},Symbol.toStringTag,{value:"Module"})),it="default",rt=!0,ct={layout:it,controls:rt},Gt=Object.freeze(Object.defineProperty({__proto__:null,controls:rt,default:ct,layout:it},Symbol.toStringTag,{value:"Module"})),ot="default",at=!0,st={layout:ot,controls:at},jt=Object.freeze(Object.defineProperty({__proto__:null,controls:at,default:st,layout:ot},Symbol.toStringTag,{value:"Module"}));function z(i){return"count"in i&&typeof i.count=="number"}function ue(i){return!z(i)&&!i.hidden}function Vt(i){return"views"in i&&Array.isArray(i.views)}function ye(i){return"views"in i&&Array.isArray(i.views)}function xe(i,e,n){const t=i.createShader(e);if(!t)throw new Error("Failed to create shader object");if(i.shaderSource(t,n),i.compileShader(t),!i.getShaderParameter(t,i.COMPILE_STATUS)){const c=i.getShaderInfoLog(t);throw i.deleteShader(t),new Error(`Shader compilation failed:
${c}`)}return t}function be(i,e,n){const t=xe(i,i.VERTEX_SHADER,e),r=xe(i,i.FRAGMENT_SHADER,n),c=i.createProgram();if(!c)throw new Error("Failed to create program object");if(i.attachShader(c,t),i.attachShader(c,r),i.linkProgram(c),!i.getProgramParameter(c,i.LINK_STATUS)){const s=i.getProgramInfoLog(c);throw i.deleteProgram(c),i.deleteShader(t),i.deleteShader(r),new Error(`Program linking failed:
${s}`)}return i.detachShader(c,t),i.detachShader(c,r),i.deleteShader(t),i.deleteShader(r),c}function Kt(i){const e=i.createVertexArray();if(!e)throw new Error("Failed to create VAO");i.bindVertexArray(e);const n=new Float32Array([-1,-1,3,-1,-1,3]),t=i.createBuffer();if(!t)throw new Error("Failed to create VBO");return i.bindBuffer(i.ARRAY_BUFFER,t),i.bufferData(i.ARRAY_BUFFER,n,i.STATIC_DRAW),i.enableVertexAttribArray(0),i.vertexAttribPointer(0,2,i.FLOAT,!1,0,0),i.bindVertexArray(null),i.bindBuffer(i.ARRAY_BUFFER,null),e}function Z(i,e,n){const t=i.createTexture();if(!t)throw new Error("Failed to create texture");return i.bindTexture(i.TEXTURE_2D,t),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,e,n,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindTexture(i.TEXTURE_2D,null),t}function ke(i,e){const n=i.createFramebuffer();if(!n)throw new Error("Failed to create framebuffer");i.bindFramebuffer(i.FRAMEBUFFER,n),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,e,0);const t=i.checkFramebufferStatus(i.FRAMEBUFFER);if(t!==i.FRAMEBUFFER_COMPLETE)throw i.deleteFramebuffer(n),new Error(`Framebuffer incomplete: ${ei(i,t)}`);return i.bindFramebuffer(i.FRAMEBUFFER,null),n}function Ht(i){const e=i.createTexture();if(!e)throw new Error("Failed to create black texture");i.bindTexture(i.TEXTURE_2D,e);const n=new Float32Array([0,0,0,1]);return i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,1,1,0,i.RGBA,i.FLOAT,n),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindTexture(i.TEXTURE_2D,null),e}function Qt(i){const e=i.createTexture();if(!e)throw new Error("Failed to create keyboard texture");i.bindTexture(i.TEXTURE_2D,e);const n=256,t=3,r=new Float32Array(n*t*4);return i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,n,t,0,i.RGBA,i.FLOAT,r),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindTexture(i.TEXTURE_2D,null),e}function Xt(i,e,n,t){const o=new Float32Array(3072);for(let s=0;s<256;s++){const a=n.get(s)||!1,l=t.get(s)||0,u=(0*256+s)*4;o[u+0]=a?1:0,o[u+1]=a?1:0,o[u+2]=a?1:0,o[u+3]=1;const d=(2*256+s)*4;o[d+0]=l,o[d+1]=l,o[d+2]=l,o[d+3]=1}i.bindTexture(i.TEXTURE_2D,e),i.texSubImage2D(i.TEXTURE_2D,0,0,0,256,3,i.RGBA,i.FLOAT,o),i.bindTexture(i.TEXTURE_2D,null)}function Yt(i){const e=i.createTexture();if(!e)throw new Error("Failed to create audio texture");i.bindTexture(i.TEXTURE_2D,e);const n=512,t=2,r=new Uint8Array(n*t);return i.texImage2D(i.TEXTURE_2D,0,i.R8,n,t,0,i.RED,i.UNSIGNED_BYTE,r),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindTexture(i.TEXTURE_2D,null),e}function Wt(i,e,n,t){i.bindTexture(i.TEXTURE_2D,e),i.texSubImage2D(i.TEXTURE_2D,0,0,0,512,1,i.RED,i.UNSIGNED_BYTE,n),i.texSubImage2D(i.TEXTURE_2D,0,0,1,512,1,i.RED,i.UNSIGNED_BYTE,t),i.bindTexture(i.TEXTURE_2D,null)}function _e(i){const e=i.createTexture();if(!e)throw new Error("Failed to create video texture");return i.bindTexture(i.TEXTURE_2D,e),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindTexture(i.TEXTURE_2D,null),e}function Zt(i,e,n){i.bindTexture(i.TEXTURE_2D,e),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,n),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.bindTexture(i.TEXTURE_2D,null)}function Jt(i,e,n,t,r){const c=e??i.createTexture();if(!c)throw new Error("Failed to create script texture");return i.bindTexture(i.TEXTURE_2D,c),r instanceof Float32Array?i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,n,t,0,i.RGBA,i.FLOAT,r):i.texImage2D(i.TEXTURE_2D,0,i.RGBA,n,t,0,i.RGBA,i.UNSIGNED_BYTE,r),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindTexture(i.TEXTURE_2D,null),c}function ei(i,e){switch(e){case i.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case i.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case i.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case i.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";case i.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:return"FRAMEBUFFER_INCOMPLETE_MULTISAMPLE";default:return`Unknown status: ${e}`}}const lt={float:1,vec2:2,vec3:3,vec4:4,mat3:9,mat4:16},de={float:4,vec2:4,vec3:4,vec4:4,mat3:12,mat4:16};function K(i,e){return lt[i]*e}function ni(i,e){return de[i]*e*4}function ti(i,e){return de[i]*e}function ii(i,e,n,t){const r=lt[i],c=de[i];if(r===c)return n;const o=c*e,s=t&&t.length>=o?t:new Float32Array(o);if(i==="mat3")for(let a=0;a<e;a++){const l=a*9,u=a*12;s[u+0]=n[l+0],s[u+1]=n[l+1],s[u+2]=n[l+2],s[u+3]=0,s[u+4]=n[l+3],s[u+5]=n[l+4],s[u+6]=n[l+5],s[u+7]=0,s[u+8]=n[l+6],s[u+9]=n[l+7],s[u+10]=n[l+8],s[u+11]=0}else for(let a=0;a<e;a++){const l=a*r,u=a*4;for(let d=0;d<r;d++)s[u+d]=n[l+d];for(let d=r;d<4;d++)s[u+d]=0}return s}const we=`#version 300 es
precision highp float;

layout(location = 0) in vec2 position;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,ri=`#version 300 es
precision highp float;

// Shadertoy compatibility: equirectangular texture sampling
const float ST_PI = 3.14159265359;
const float ST_TWOPI = 6.28318530718;
vec2 _st_dirToEquirect(vec3 dir) {
  float phi = atan(dir.z, dir.x);
  float theta = asin(dir.y);
  return vec2(phi / ST_TWOPI + 0.5, theta / ST_PI + 0.5);
}
`,ci=`// --- Keyboard helpers (auto-injected) ---
// Letter keys
const int KEY_A = 65; const int KEY_B = 66; const int KEY_C = 67; const int KEY_D = 68;
const int KEY_E = 69; const int KEY_F = 70; const int KEY_G = 71; const int KEY_H = 72;
const int KEY_I = 73; const int KEY_J = 74; const int KEY_K = 75; const int KEY_L = 76;
const int KEY_M = 77; const int KEY_N = 78; const int KEY_O = 79; const int KEY_P = 80;
const int KEY_Q = 81; const int KEY_R = 82; const int KEY_S = 83; const int KEY_T = 84;
const int KEY_U = 85; const int KEY_V = 86; const int KEY_W = 87; const int KEY_X = 88;
const int KEY_Y = 89; const int KEY_Z = 90;

// Digit keys
const int KEY_0 = 48; const int KEY_1 = 49; const int KEY_2 = 50; const int KEY_3 = 51;
const int KEY_4 = 52; const int KEY_5 = 53; const int KEY_6 = 54; const int KEY_7 = 55;
const int KEY_8 = 56; const int KEY_9 = 57;

// Arrow keys
const int KEY_LEFT = 37; const int KEY_UP = 38; const int KEY_RIGHT = 39; const int KEY_DOWN = 40;

// Special keys
const int KEY_SPACE = 32;
const int KEY_ENTER = 13;
const int KEY_TAB = 9;
const int KEY_ESC = 27;
const int KEY_BACKSPACE = 8;
const int KEY_DELETE = 46;
const int KEY_SHIFT = 16;
const int KEY_CTRL = 17;
const int KEY_ALT = 18;

// Function keys
const int KEY_F1 = 112; const int KEY_F2 = 113; const int KEY_F3 = 114; const int KEY_F4 = 115;
const int KEY_F5 = 116; const int KEY_F6 = 117; const int KEY_F7 = 118; const int KEY_F8 = 119;
const int KEY_F9 = 120; const int KEY_F10 = 121; const int KEY_F11 = 122; const int KEY_F12 = 123;

// Returns 1.0 if key is held down, 0.0 otherwise
float keyDown(int key) {
  return textureLod(keyboard, vec2((float(key) + 0.5) / 256.0, 0.25), 0.0).x;
}

// Returns 1.0/0.0, toggling each time the key is pressed
float keyToggle(int key) {
  return textureLod(keyboard, vec2((float(key) + 0.5) / 256.0, 0.75), 0.0).x;
}

// Boolean convenience helpers
bool isKeyDown(int key) { return keyDown(key) > 0.5; }
bool isKeyToggled(int key) { return keyToggle(key) > 0.5; }
`;function oi(i,e,n){const t=[ri];if(n.commonSource&&(t.push("// Common code"),t.push(n.commonSource),t.push("")),n.namedSamplers&&n.namedSamplers.size>0){if(t.push(`// Core uniforms
uniform vec3  iResolution;
uniform float iTime;
uniform float iTimeDelta;
uniform int   iFrame;
uniform vec4  iMouse;
uniform bool  iMousePressed;
uniform vec4  iDate;
uniform float iFrameRate;

// Shader Sandbox touch extensions
uniform int   iTouchCount;
uniform vec4  iTouch0;
uniform vec4  iTouch1;
uniform vec4  iTouch2;
uniform float iPinch;
uniform float iPinchDelta;
uniform vec2  iPinchCenter;
`),n.viewNames&&n.viewNames.length>1){t.push("// Cross-view uniforms (multi-view project)");for(const d of n.viewNames)t.push(`uniform vec4  iMouse_${d};`),t.push(`uniform vec3  iResolution_${d};`),t.push(`uniform bool  iMousePressed_${d};`);t.push("")}t.push("// Named samplers");for(const[d]of n.namedSamplers)t.push(`uniform sampler2D ${d};`),t.push(`uniform vec3 ${d}_resolution;`);t.push(""),n.namedSamplers.has("keyboard")&&(t.push(ci),t.push(""))}else if(t.push(`// Shadertoy built-in uniforms
uniform vec3  iResolution;
uniform float iTime;
uniform float iTimeDelta;
uniform int   iFrame;
uniform vec4  iMouse;
uniform bool  iMousePressed;
uniform vec4  iDate;
uniform float iFrameRate;
uniform vec3  iChannelResolution[4];
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;

// Shader Sandbox touch extensions (not in Shadertoy)
uniform int   iTouchCount;          // Number of active touches (0-10)
uniform vec4  iTouch0;              // Primary touch: (x, y, startX, startY)
uniform vec4  iTouch1;              // Second touch
uniform vec4  iTouch2;              // Third touch
uniform float iPinch;               // Pinch scale factor (1.0 = no pinch)
uniform float iPinchDelta;          // Pinch change since last frame
uniform vec2  iPinchCenter;         // Center point of pinch gesture
`),n.viewNames&&n.viewNames.length>1){t.push("// Cross-view uniforms (multi-view project)");for(const d of n.viewNames)t.push(`uniform vec4  iMouse_${d};`),t.push(`uniform vec3  iResolution_${d};`),t.push(`uniform bool  iMousePressed_${d};`);t.push("")}for(const d of n.ubos)t.push(`// Array uniform: ${d.name} (max ${d.count})`),t.push(`layout(std140) uniform _ub_${d.name} {`),t.push(`  ${d.def.type} ${d.name}[${d.count}];`),t.push("};"),t.push(`uniform int ${d.name}_count;`),t.push("");const r=Object.entries(n.uniforms).filter(([,d])=>!z(d));if(r.length>0){t.push("// Custom uniforms");for(const[d,v]of r){const b=v.type==="bool"?"bool":v.type;t.push(`uniform ${b} ${d};`)}t.push("")}const c=ai(i,e);t.push("// User shader code"),t.push(c),t.push(""),t.push(`// Main wrapper
out vec4 fragColor;

void main() {
  mainImage(fragColor, gl_FragCoord.xy);
}`);const o=t.join(`
`),s=o.split(`
`);let a=0,l=0,u=0;for(let d=0;d<s.length;d++)s[d]==="// Common code"&&(a=d+2,l=n.commonSource?n.commonSource.split(`
`).length:0),s[d]==="// User shader code"&&(u=d+2);return{source:o,lineMapping:{commonStartLine:a,commonLines:l,userCodeStartLine:u}}}function ai(i,e){const n=new Set;if(e.forEach((r,c)=>{r.kind==="texture"&&r.cubemap&&n.add(`iChannel${c}`)}),n.size===0)return i;const t=/texture\s*\(\s*(iChannel[0-3])\s*,\s*([^)]+)\)/g;return i.replace(t,(r,c,o)=>n.has(c)?`texture(${c}, _st_dirToEquirect(${o}))`:r)}class si{constructor(e,n){this._audioTexture=null,this._needsAudio=!1,this._videoTextures=[];const t=this.getAllChannelSources(n);t.some(r=>r.kind==="audio")&&(this._needsAudio=!0,this._audioTexture={texture:Yt(e),audioContext:null,analyser:null,stream:null,frequencyData:new Uint8Array(512),waveformData:new Uint8Array(512),width:512,height:2,initialized:!1});for(const r of t)r.kind==="webcam"?this._videoTextures.find(o=>o.kind==="webcam")||this._videoTextures.push({texture:_e(e),video:null,stream:null,width:1,height:1,ready:!1,kind:"webcam"}):r.kind==="video"&&(this._videoTextures.find(o=>o.kind==="video"&&o.src===r.src)||this._videoTextures.push({texture:_e(e),video:null,stream:null,width:1,height:1,ready:!1,kind:"video",src:r.src}))}get needsAudio(){return this._needsAudio}get needsWebcam(){return this._videoTextures.some(e=>e.kind==="webcam")}get videoSources(){return this._videoTextures.filter(e=>e.kind==="video"&&!e.ready&&e.src).map(e=>e.src)}get audioTexture(){return this._audioTexture}get videoTextures(){return this._videoTextures}async initAudio(){if(!(!this._audioTexture||this._audioTexture.initialized))try{const e=await navigator.mediaDevices.getUserMedia({audio:!0}),n=new AudioContext,t=n.createMediaStreamSource(e),r=n.createAnalyser();r.fftSize=1024,r.smoothingTimeConstant=.8,t.connect(r),this._audioTexture.audioContext=n,this._audioTexture.analyser=r,this._audioTexture.stream=e,this._audioTexture.initialized=!0}catch(e){console.warn("Failed to initialize audio input:",e)}}async initWebcam(){const e=this._videoTextures.find(n=>n.kind==="webcam"&&!n.ready);if(e)try{const n=await navigator.mediaDevices.getUserMedia({video:!0}),t=document.createElement("video");t.srcObject=n,t.muted=!0,t.playsInline=!0,await t.play(),e.video=t,e.stream=n,e.width=t.videoWidth,e.height=t.videoHeight,t.addEventListener("loadedmetadata",()=>{e.width=t.videoWidth,e.height=t.videoHeight}),e.ready=!0}catch(n){console.warn("Failed to initialize webcam:",n)}}async initVideo(e){const n=this._videoTextures.find(r=>r.kind==="video"&&r.src===e&&!r.ready);if(!n)return;const t=document.createElement("video");t.src=e,t.muted=!0,t.loop=!0,t.playsInline=!0,t.crossOrigin="anonymous",t.addEventListener("loadedmetadata",()=>{n.width=t.videoWidth,n.height=t.videoHeight});try{await t.play(),n.video=t,n.ready=!0}catch(r){console.warn(`Failed to play video '${e}':`,r)}}updateAudioTexture(e){var n;(n=this._audioTexture)!=null&&n.analyser&&(this._audioTexture.analyser.getByteFrequencyData(this._audioTexture.frequencyData),this._audioTexture.analyser.getByteTimeDomainData(this._audioTexture.waveformData),Wt(e,this._audioTexture.texture,this._audioTexture.frequencyData,this._audioTexture.waveformData))}updateVideoTextures(e){for(const n of this._videoTextures)!n.ready||!n.video||n.video.readyState<HTMLMediaElement.HAVE_CURRENT_DATA||(Zt(e,n.texture,n.video),n.video.videoWidth>0&&(n.width=n.video.videoWidth,n.height=n.video.videoHeight))}dispose(e){var n,t,r,c;this._audioTexture&&((n=this._audioTexture.stream)==null||n.getTracks().forEach(o=>o.stop()),(t=this._audioTexture.audioContext)==null||t.close(),e.deleteTexture(this._audioTexture.texture));for(const o of this._videoTextures)(r=o.stream)==null||r.getTracks().forEach(s=>s.stop()),(c=o.video)==null||c.pause(),e.deleteTexture(o.texture);this._audioTexture=null,this._videoTextures=[]}getAllChannelSources(e){const n=[],t=e.passes;for(const r of[t.Image,t.BufferA,t.BufferB,t.BufferC,t.BufferD])r&&(n.push(...r.channels),r.namedSamplers&&n.push(...r.namedSamplers.values()));return n}}class li{constructor(e){this.values={},this.definitions=e,this.initializeDefaults()}initializeDefaults(){for(const[e,n]of Object.entries(this.definitions))z(n)?this.values[e]=new Float32Array(K(n.type,n.count)):this.values[e]=this.cloneValue(n.value)}cloneValue(e){return e instanceof Float32Array?e.slice():Array.isArray(e)?[...e]:e}getDefinition(e){return this.definitions[e]}getDefinitions(){return this.definitions}has(e){return e in this.definitions}get(e){return this.values[e]}getAll(){const e={};for(const[n,t]of Object.entries(this.values))e[n]=this.cloneValue(t);return e}set(e,n){return this.has(e)?(this.values[e]=this.cloneValue(n),!0):!1}setAll(e){for(const[n,t]of Object.entries(e))t!==void 0&&this.set(n,t)}reset(e){const n=this.definitions[e];return n?(z(n)?this.values[e]=new Float32Array(K(n.type,n.count)):this.values[e]=this.cloneValue(n.value),!0):!1}resetAll(){this.initializeDefaults()}getDefault(e){const n=this.definitions[e];if(n)return z(n)?new Float32Array(K(n.type,n.count)):this.cloneValue(n.value)}*entries(){for(const[e,n]of Object.entries(this.definitions))yield[e,n,this.values[e]]}get size(){return Object.keys(this.definitions).length}get isEmpty(){return this.size===0}}class ui{constructor(e,n){this._ubos=[],this._dirtyScalars=new Set,this._uniforms=n,this._store=new li(n),this.initUBOs(e);for(const[t,r]of Object.entries(n))z(r)||this._dirtyScalars.add(t)}get ubos(){return this._ubos}get store(){return this._store}get(e){return this._store.get(e)}getAll(){return this._store.getAll()}set(e,n){const t=this._uniforms[e];if(!t){console.warn(`setUniformValue('${e}'): uniform not defined in config`);return}if(!z(t)){const r=t.type;if((r==="float"||r==="int")&&typeof n!="number"){console.warn(`setUniformValue('${e}'): expected number for ${r}, got ${typeof n}`);return}if(r==="bool"&&typeof n!="boolean"){console.warn(`setUniformValue('${e}'): expected boolean, got ${typeof n}`);return}if(r==="vec2"||r==="vec3"||r==="vec4"){if(!Array.isArray(n)){console.warn(`setUniformValue('${e}'): expected array for ${r}, got ${typeof n}`);return}const c=r==="vec2"?2:r==="vec3"?3:4;if(n.length!==c){console.warn(`setUniformValue('${e}'): expected array of length ${c} for ${r}, got ${n.length}`);return}}}if(this._store.set(e,n),z(t)){const r=this._ubos.find(c=>c.name===e);if(r){const c=n,o=K(t.type,t.count),s=K(t.type,1);if(c.length>o){console.warn(`setUniformValue('${e}'): Float32Array length ${c.length} exceeds max ${o} (${t.count} × ${t.type})`);return}if(c.length%s!==0){console.warn(`setUniformValue('${e}'): Float32Array length ${c.length} is not a multiple of ${s} (components per ${t.type})`);return}const a=c.length/s,l=ii(t.type,a,c,r.paddedData);l!==r.paddedData&&r.paddedData.set(l);const u=ti(t.type,a),d=r.paddedData.length;u<d&&r.paddedData.fill(0,u),r.activeCount=a,r.dirty=!0}}else this._dirtyScalars.add(e)}setMultiple(e){for(const[n,t]of Object.entries(e))t!==void 0&&this.set(n,t)}bindToProgram(e,n){for(const t of this._ubos){t.dirty&&(e.bindBuffer(e.UNIFORM_BUFFER,t.buffer),e.bufferSubData(e.UNIFORM_BUFFER,0,t.paddedData),t.dirty=!1);const r=n.custom.get(`${t.name}_count`);r&&e.uniform1i(r,t.activeCount)}for(const t of this._dirtyScalars){const r=this._uniforms[t];if(!r||z(r))continue;const c=this._store.get(t);if(c===void 0)continue;const o=n.custom.get(t);if(o)switch(r.type){case"float":e.uniform1f(o,c);break;case"int":e.uniform1i(o,c);break;case"bool":e.uniform1i(o,c?1:0);break;case"vec2":{const s=c;e.uniform2f(o,s[0],s[1]);break}case"vec3":{const s=c;e.uniform3f(o,s[0],s[1],s[2]);break}case"vec4":{const s=c;e.uniform4f(o,s[0],s[1],s[2],s[3]);break}}}}clearDirty(){this._dirtyScalars.clear()}markAllScalarsDirty(){for(const[e,n]of Object.entries(this._uniforms))z(n)||this._dirtyScalars.add(e)}bindUBOsToProgram(e,n,t){for(const r of this._ubos){const c=e.getUniformBlockIndex(n,`_ub_${r.name}`);c!==e.INVALID_INDEX&&e.uniformBlockBinding(n,c,r.bindingPoint),t.set(`${r.name}_count`,e.getUniformLocation(n,`${r.name}_count`))}}dispose(e){for(const n of this._ubos)e.deleteBuffer(n.buffer);this._ubos=[]}initUBOs(e){const n=e.getParameter(e.MAX_UNIFORM_BLOCK_SIZE),t=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);let r=0;for(const[c,o]of Object.entries(this._uniforms)){if(!z(o))continue;const s=ni(o.type,o.count);if(s>n)throw new Error(`Array uniform '${c}' requires ${s} bytes but GL MAX_UNIFORM_BLOCK_SIZE is ${n}`);const a=e.createBuffer();if(!a)throw new Error(`Failed to create UBO buffer for '${c}'`);if(e.bindBuffer(e.UNIFORM_BUFFER,a),e.bufferData(e.UNIFORM_BUFFER,s,e.DYNAMIC_DRAW),e.bindBuffer(e.UNIFORM_BUFFER,null),r>=t)throw new Error(`Too many array uniforms: binding point ${r} exceeds GL MAX_UNIFORM_BUFFER_BINDINGS (${t})`);e.bindBufferBase(e.UNIFORM_BUFFER,r,a);const l=new Float32Array(s/4);this._ubos.push({name:c,def:o,buffer:a,bindingPoint:r,byteSize:s,dirty:!1,paddedData:l,activeCount:0}),r++}}}class Ee{constructor(e){this._frame=0,this._time=0,this._lastStepTime=null,this._passes=[],this._textures=[],this._keyboardTexture=null,this._blackTexture=null,this._keyStates=new Map,this._toggleStates=new Map,this._compilationErrors=[],this._scriptTextures=new Map,this._viewNames=[],this.gl=e.gl,this.project=e.project,this._onAssetError=e.onAssetError,this._width=this.gl.drawingBufferWidth,this._height=this.gl.drawingBufferHeight,this.initExtensions(),this._blackTexture=Ht(this.gl);const n=Qt(this.gl);this._keyboardTexture={texture:n,width:256,height:3},this.initProjectTextures(),this._media=new si(this.gl,e.project),this._uniformMgr=new ui(this.gl,e.project.uniforms),e.viewNames&&e.viewNames.length>1&&(this._viewNames=e.viewNames),this.initRuntimePasses()}async initAudio(){return this._media.initAudio()}updateAudioTexture(){this._media.updateAudioTexture(this.gl)}async initWebcam(){return this._media.initWebcam()}async initVideo(e){return this._media.initVideo(e)}updateVideoTextures(){this._media.updateVideoTextures(this.gl)}get needsAudio(){return this._media.needsAudio}get needsWebcam(){return this._media.needsWebcam}get videoSources(){return this._media.videoSources}updateTexture(e,n,t,r){const c=this._scriptTextures.get(e),o=r instanceof Float32Array;if(c&&c.width===n&&c.height===t&&c.isFloat===o){const s=this.gl;s.bindTexture(s.TEXTURE_2D,c.texture),o?s.texSubImage2D(s.TEXTURE_2D,0,0,0,n,t,s.RGBA,s.FLOAT,r):s.texSubImage2D(s.TEXTURE_2D,0,0,0,n,t,s.RGBA,s.UNSIGNED_BYTE,r),s.bindTexture(s.TEXTURE_2D,null)}else{const s=Jt(this.gl,(c==null?void 0:c.texture)??null,n,t,r);this._scriptTextures.set(e,{texture:s,width:n,height:t,isFloat:o})}}readPixels(e,n,t,r,c){const o=this._passes.find(l=>l.name===e);if(!o)return console.warn(`readPixels: pass '${e}' not found`),new Uint8Array(r*c*4);const s=this.gl;s.bindFramebuffer(s.FRAMEBUFFER,o.framebuffer),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,o.previousTexture,0);const a=new Uint8Array(r*c*4);return s.readPixels(n,t,r,c,s.RGBA,s.UNSIGNED_BYTE,a),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,o.currentTexture,0),s.bindFramebuffer(s.FRAMEBUFFER,null),a}get width(){return this._width}get height(){return this._height}get stats(){const e=this._lastStepTime===null?0:this._time-this._lastStepTime;return{frame:this._frame,time:this._time,deltaTime:e,width:this._width,height:this._height}}getCompilationErrors(){return this._compilationErrors}hasErrors(){return this._compilationErrors.length>0}getUniformStore(){return this._uniformMgr.store}getUniformValue(e){return this._uniformMgr.get(e)}getUniformValues(){return this._uniformMgr.getAll()}setUniformValue(e,n){this._uniformMgr.set(e,n)}setUniformValues(e){this._uniformMgr.setMultiple(e)}getUBOExportData(){return this._uniformMgr.ubos.map(e=>({name:e.name,type:e.def.type,count:e.def.count,bindingPoint:e.bindingPoint,paddedData:new Float32Array(e.paddedData)}))}getImageFramebuffer(){const e=this._passes.find(n=>n.name==="Image");return(e==null?void 0:e.framebuffer)??null}bindImageForRead(){const e=this.gl,n=this._passes.find(t=>t.name==="Image");return n?(e.bindFramebuffer(e.READ_FRAMEBUFFER,n.framebuffer),e.framebufferTexture2D(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n.previousTexture,0),!0):!1}unbindImageForRead(){const e=this.gl,n=this._passes.find(t=>t.name==="Image");n&&(e.framebufferTexture2D(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n.currentTexture,0),e.bindFramebuffer(e.READ_FRAMEBUFFER,null))}step(e,n,t,r,c){const o=this.gl,s=this._lastStepTime===null?0:e-this._lastStepTime;this._lastStepTime=e,this._time=e;const a=new Date,l=r??{count:0,touches:[[0,0,0,0],[0,0,0,0],[0,0,0,0]],pinch:1,pinchDelta:0,pinchCenter:[0,0]},u={iResolution:[this._width,this._height,1],iTime:this._time,iTimeDelta:s,iFrame:this._frame,iMouse:n,iMousePressed:t,iDate:[a.getFullYear(),a.getMonth(),a.getDate(),a.getHours()*3600+a.getMinutes()*60+a.getSeconds()+a.getMilliseconds()/1e3],iFrameRate:s>0?1/s:60,iTouchCount:l.count,iTouch:l.touches,iPinch:l.pinch,iPinchDelta:l.pinchDelta,iPinchCenter:l.pinchCenter,crossViewStates:c};o.viewport(0,0,this._width,this._height);const d=["BufferA","BufferB","BufferC","BufferD","Image"];for(const v of d){const b=this._passes.find(m=>m.name===v);b&&(this.executePass(b,u),this.swapPassTextures(b))}this._uniformMgr.clearDirty(),this._frame+=1}resize(e,n){this._width=e,this._height=n;const t=this.gl;for(const r of this._passes)t.deleteTexture(r.currentTexture),t.deleteTexture(r.previousTexture),t.deleteFramebuffer(r.framebuffer),r.currentTexture=Z(t,e,n),r.previousTexture=Z(t,e,n),r.framebuffer=ke(t,r.currentTexture)}reset(){this._frame=0;const e=this.gl;for(const n of this._passes)e.bindFramebuffer(e.FRAMEBUFFER,n.framebuffer),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n.previousTexture,0),e.clear(e.COLOR_BUFFER_BIT),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n.currentTexture,0);e.bindFramebuffer(e.FRAMEBUFFER,null)}updateKeyState(e,n){const t=this._keyStates.get(e)||!1;if(this._keyStates.set(e,n),n&&!t){const r=this._toggleStates.get(e)||0;this._toggleStates.set(e,r===0?1:0)}}updateKeyboardTexture(){this._keyboardTexture&&Xt(this.gl,this._keyboardTexture.texture,this._keyStates,this._toggleStates)}recompilePass(e,n){const t=this.gl,r=this._passes.find(s=>s.name===e);if(!r)return{success:!1,error:`Pass '${e}' not found`};const c=this.project.passes[e];if(!c)return{success:!1,error:`Project pass '${e}' not found`};const{source:o}=this.buildFragmentShader(n,c.channels,c.namedSamplers);try{const s=be(t,we,o);return t.deleteProgram(r.uniforms.program),r.uniforms=this.cacheUniformLocations(s,c.namedSamplers),c.glslSource=n,this._compilationErrors=this._compilationErrors.filter(a=>a.passName!==e),this._uniformMgr.markAllScalarsDirty(),{success:!0}}catch(s){return{success:!1,error:s instanceof Error?s.message:String(s)}}}recompileCommon(e){const n=this.project.commonSource;this.project.commonSource=e;const t=[],r=["BufferA","BufferB","BufferC","BufferD","Image"];for(const c of r){const o=this.project.passes[c];if(!o)continue;const s=this.recompilePass(c,o.glslSource);s.success||t.push({passName:c,error:s.error||"Unknown error"})}if(t.length>0){this.project.commonSource=n;for(const c of r){const o=this.project.passes[c];if(!o||t.some(a=>a.passName===c))continue;const s=this.recompilePass(c,o.glslSource);s.success||(console.error(`Failed to revert ${c} to old common source:`,s.error),t.push({passName:c,error:`Revert failed: ${s.error}`}))}return{success:!1,errors:t}}return{success:!0,errors:[]}}dispose(){const e=this.gl;for(const n of this._passes)e.deleteProgram(n.uniforms.program),e.deleteVertexArray(n.vao),e.deleteFramebuffer(n.framebuffer),e.deleteTexture(n.currentTexture),e.deleteTexture(n.previousTexture);for(const n of this._textures)e.deleteTexture(n.texture);this._keyboardTexture&&e.deleteTexture(this._keyboardTexture.texture),this._blackTexture&&e.deleteTexture(this._blackTexture),this._uniformMgr.dispose(e),this._media.dispose(e),this._passes=[],this._textures=[],this._keyboardTexture=null,this._blackTexture=null}initExtensions(){const e=this.gl;if(!e.getExtension("EXT_color_buffer_float"))throw new Error("EXT_color_buffer_float not supported. WebGL2 with float rendering is required.");e.getExtension("OES_texture_float_linear")}cacheUniformLocations(e,n){const t=this.gl,r=new Map;for(const[c,o]of Object.entries(this.project.uniforms))z(o)||r.set(c,t.getUniformLocation(e,c));return this._uniformMgr.bindUBOsToProgram(t,e,r),{program:e,iResolution:t.getUniformLocation(e,"iResolution"),iTime:t.getUniformLocation(e,"iTime"),iTimeDelta:t.getUniformLocation(e,"iTimeDelta"),iFrame:t.getUniformLocation(e,"iFrame"),iMouse:t.getUniformLocation(e,"iMouse"),iMousePressed:t.getUniformLocation(e,"iMousePressed"),iDate:t.getUniformLocation(e,"iDate"),iFrameRate:t.getUniformLocation(e,"iFrameRate"),iChannel:[t.getUniformLocation(e,"iChannel0"),t.getUniformLocation(e,"iChannel1"),t.getUniformLocation(e,"iChannel2"),t.getUniformLocation(e,"iChannel3")],iChannelResolution:[t.getUniformLocation(e,"iChannelResolution[0]"),t.getUniformLocation(e,"iChannelResolution[1]"),t.getUniformLocation(e,"iChannelResolution[2]"),t.getUniformLocation(e,"iChannelResolution[3]")],iTouchCount:t.getUniformLocation(e,"iTouchCount"),iTouch:[t.getUniformLocation(e,"iTouch0"),t.getUniformLocation(e,"iTouch1"),t.getUniformLocation(e,"iTouch2")],iPinch:t.getUniformLocation(e,"iPinch"),iPinchDelta:t.getUniformLocation(e,"iPinchDelta"),iPinchCenter:t.getUniformLocation(e,"iPinchCenter"),custom:r,namedSamplers:(()=>{const c=new Map;if(n)for(const[o]of n)c.set(o,t.getUniformLocation(e,o));return c})(),namedSamplerResolutions:(()=>{const c=new Map;if(n)for(const[o]of n)c.set(o,t.getUniformLocation(e,`${o}_resolution`));return c})(),crossViewMouse:(()=>{const c=new Map;if(this._viewNames.length>1)for(const o of this._viewNames)c.set(o,t.getUniformLocation(e,`iMouse_${o}`));return c})(),crossViewResolution:(()=>{const c=new Map;if(this._viewNames.length>1)for(const o of this._viewNames)c.set(o,t.getUniformLocation(e,`iResolution_${o}`));return c})(),crossViewMousePressed:(()=>{const c=new Map;if(this._viewNames.length>1)for(const o of this._viewNames)c.set(o,t.getUniformLocation(e,`iMousePressed_${o}`));return c})()}}initProjectTextures(){const e=this.gl;this._textures=[];for(const n of this.project.textures){const t=e.createTexture();if(!t)throw new Error("Failed to create texture");e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255]));const r={name:n.name,texture:t,width:1,height:1};this._textures.push(r);const c=new Image;c.crossOrigin="anonymous",c.onload=()=>{e.bindTexture(e.TEXTURE_2D,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,c),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1);const o=n.filter==="nearest"?e.NEAREST:e.LINEAR;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,o);const s=n.wrap==="clamp"?e.CLAMP_TO_EDGE:e.REPEAT;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,s),n.filter==="linear"&&e.generateMipmap(e.TEXTURE_2D),r.width=c.width,r.height=c.height,console.log(`Loaded texture '${n.name}': ${c.width}x${c.height}`)},c.onerror=()=>{var o;console.error(`Failed to load texture '${n.name}' from ${n.source}`),(o=this._onAssetError)==null||o.call(this,{type:"texture",name:n.name,detail:n.source})},c.src=n.source}}initRuntimePasses(){const e=this.gl,n=this.project,t=Kt(e),r=["BufferA","BufferB","BufferC","BufferD","Image"];for(const c of r){const o=n.passes[c];if(!o)continue;const{source:s,lineMapping:a}=this.buildFragmentShader(o.glslSource,o.channels,o.namedSamplers);try{const l=be(e,we,s),u=this.cacheUniformLocations(l,o.namedSamplers),d=Z(e,this._width,this._height),v=Z(e,this._width,this._height),b=ke(e,d),m={name:c,projectChannels:o.channels,vao:t,uniforms:u,framebuffer:b,currentTexture:d,previousTexture:v,namedSamplers:o.namedSamplers};this._passes.push(m)}catch(l){const u=l instanceof Error?l.message:String(l),d=u.match(/ERROR:\s*\d+:(\d+):/);let v=!1,b=null;if(d){const m=parseInt(d[1],10);if(a.commonStartLine>0&&a.commonLines>0){const C=a.commonStartLine+a.commonLines-1;m>=a.commonStartLine&&m<=C&&(v=!0,b=m-a.commonStartLine+1)}!v&&a.userCodeStartLine>0&&m>=a.userCodeStartLine&&(b=m-a.userCodeStartLine+1)}this._compilationErrors.push({passName:c,error:u,source:s,isFromCommon:v,originalLine:b,lineMapping:a}),console.error(`Failed to compile ${c}:`,u)}}}buildFragmentShader(e,n,t){return oi(e,n,{commonSource:this.project.commonSource??"",ubos:this._uniformMgr.ubos.map(r=>({name:r.name,def:r.def,count:r.def.count})),uniforms:this.project.uniforms,namedSamplers:t,viewNames:this._viewNames.length>1?this._viewNames:void 0})}setViewNames(e){this._viewNames=e}executePass(e,n){const t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,e.framebuffer),t.useProgram(e.uniforms.program),t.bindVertexArray(e.vao),this.bindBuiltinUniforms(e.uniforms,n),this._uniformMgr.bindToProgram(t,e.uniforms),e.namedSamplers&&e.namedSamplers.size>0?this.bindNamedSamplers(e):this.bindChannelTextures(e),t.drawArrays(t.TRIANGLES,0,3),t.bindVertexArray(null),t.useProgram(null),t.bindFramebuffer(t.FRAMEBUFFER,null)}bindBuiltinUniforms(e,n){const t=this.gl;e.iResolution&&t.uniform3f(e.iResolution,n.iResolution[0],n.iResolution[1],n.iResolution[2]),e.iTime&&t.uniform1f(e.iTime,n.iTime),e.iTimeDelta&&t.uniform1f(e.iTimeDelta,n.iTimeDelta),e.iFrame&&t.uniform1i(e.iFrame,n.iFrame),e.iMouse&&t.uniform4f(e.iMouse,n.iMouse[0],n.iMouse[1],n.iMouse[2],n.iMouse[3]),e.iMousePressed&&t.uniform1i(e.iMousePressed,n.iMousePressed?1:0),e.iDate&&t.uniform4f(e.iDate,n.iDate[0],n.iDate[1],n.iDate[2],n.iDate[3]),e.iFrameRate&&t.uniform1f(e.iFrameRate,n.iFrameRate),e.iTouchCount&&t.uniform1i(e.iTouchCount,n.iTouchCount);for(let r=0;r<3;r++){const c=e.iTouch[r];if(c){const o=n.iTouch[r];t.uniform4f(c,o[0],o[1],o[2],o[3])}}if(e.iPinch&&t.uniform1f(e.iPinch,n.iPinch),e.iPinchDelta&&t.uniform1f(e.iPinchDelta,n.iPinchDelta),e.iPinchCenter&&t.uniform2f(e.iPinchCenter,n.iPinchCenter[0],n.iPinchCenter[1]),n.crossViewStates)for(const[r,c]of n.crossViewStates){const o=e.crossViewMouse.get(r);o&&t.uniform4f(o,c.mouse[0],c.mouse[1],c.mouse[2],c.mouse[3]);const s=e.crossViewResolution.get(r);s&&t.uniform3f(s,c.resolution[0],c.resolution[1],c.resolution[2]);const a=e.crossViewMousePressed.get(r);a&&t.uniform1i(a,c.mousePressed?1:0)}}bindChannelTextures(e){const n=this.gl;for(let t=0;t<4;t++){const r=e.projectChannels[t],c=this.resolveChannelTexture(r),o=this.resolveChannelResolution(r);n.activeTexture(n.TEXTURE0+t),n.bindTexture(n.TEXTURE_2D,c);const s=e.uniforms.iChannel[t];s&&n.uniform1i(s,t);const a=e.uniforms.iChannelResolution[t];a&&n.uniform3f(a,o[0],o[1],1)}}bindNamedSamplers(e){const n=this.gl;let t=0;for(const[r,c]of e.namedSamplers){const o=this.resolveChannelTexture(c),s=this.resolveChannelResolution(c);n.activeTexture(n.TEXTURE0+t),n.bindTexture(n.TEXTURE_2D,o);const a=e.uniforms.namedSamplers.get(r);a&&n.uniform1i(a,t);const l=e.uniforms.namedSamplerResolutions.get(r);l&&n.uniform3f(l,s[0],s[1],1),t++}}resolveChannelTexture(e){switch(e.kind){case"none":if(!this._blackTexture)throw new Error("Black texture not initialized");return this._blackTexture;case"buffer":{const n=this._passes.find(t=>t.name===e.buffer);if(!n)throw new Error(`Buffer '${e.buffer}' not found`);return e.current?n.currentTexture:n.previousTexture}case"texture":{const n=this._textures.find(t=>t.name===e.name);if(!n)throw new Error(`Texture '${e.name}' not found`);return n.texture}case"keyboard":if(!this._keyboardTexture)throw new Error("Internal error: keyboard texture not initialized");return this._keyboardTexture.texture;case"audio":return this._media.audioTexture?this._media.audioTexture.texture:this._blackTexture;case"webcam":{const n=this._media.videoTextures.find(t=>t.kind==="webcam");return(n==null?void 0:n.texture)??this._blackTexture}case"video":{const n=this._media.videoTextures.find(t=>t.kind==="video"&&t.src===e.src);return(n==null?void 0:n.texture)??this._blackTexture}case"script":{const n=this._scriptTextures.get(e.name);return(n==null?void 0:n.texture)??this._blackTexture}}}resolveChannelResolution(e){switch(e.kind){case"none":return[0,0];case"buffer":return[this._width,this._height];case"texture":{const n=this._textures.find(t=>t.name===e.name);return n?[n.width,n.height]:[0,0]}case"keyboard":return[256,3];case"audio":return this._media.audioTexture?[this._media.audioTexture.width,this._media.audioTexture.height]:[0,0];case"webcam":{const n=this._media.videoTextures.find(t=>t.kind==="webcam");return n?[n.width,n.height]:[0,0]}case"video":{const n=this._media.videoTextures.find(t=>t.kind==="video"&&t.src===e.src);return n?[n.width,n.height]:[0,0]}case"script":{const n=this._scriptTextures.get(e.name);return n?[n.width,n.height]:[0,0]}}}swapPassTextures(e){const n=this.gl,t=e.currentTexture;e.currentTexture=e.previousTexture,e.previousTexture=t,n.bindFramebuffer(n.FRAMEBUFFER,e.framebuffer),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.currentTexture,0),n.bindFramebuffer(n.FRAMEBUFFER,null)}}class di{constructor(e){this.overlay=null,this.container=e}show(e,n){this.overlay||(this.overlay=document.createElement("div"),this.overlay.className="shader-error-overlay",this.container.appendChild(this.overlay));const t=e.filter(u=>u.isFromCommon),r=e.filter(u=>!u.isFromCommon),a=[...t.length>0?[t[0]]:[],...r].map(({passName:u,error:d,isFromCommon:v,originalLine:b,lineMapping:m})=>{const C=d.replace(`Shader compilation failed:
`,""),x=b;let E=C;x!==null&&(E=C.replace(/ERROR:\s*\d+:(\d+):/g,`ERROR: 0:${x}:`));let f=null;if(v)f=n.commonSource;else{const p=n.passes[u];f=(p==null?void 0:p.glslSource)??null}return{passName:v?"common.glsl":u,error:pi(E,m,v),codeContext:x!==null&&f?vi(f,x):null}}).map(({passName:u,error:d,codeContext:v})=>`
      <div class="error-section">
        <div class="error-pass-name">${u}</div>
        <pre class="error-content">${ut(d)}</pre>
        ${v?`<pre class="error-code-context">${v}</pre>`:""}
      </div>
    `).join("");this.overlay.innerHTML=`
      <div class="error-overlay-content">
        <div class="error-header">
          <span class="error-title">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: text-bottom;">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM3.5 7.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9z"/>
            </svg>
            Shader Compilation Failed
          </span>
          <button class="error-close" title="Dismiss">×</button>
        </div>
        <div class="error-body">
          ${a}
        </div>
      </div>
    `;const l=this.overlay.querySelector(".error-close");l&&l.addEventListener("click",()=>this.hide())}hide(){this.overlay&&(this.overlay.remove(),this.overlay=null)}dispose(){this.hide()}}function pi(i,e,n){return i.split(`
`).map(t=>{const r=t.match(/^ERROR:\s*(\d+):(\d+):\s*(.+)$/);if(r){const[,,c,o]=r,s=parseInt(c,10);let a=s;return n&&e.commonStartLine>0?a=s-e.commonStartLine+1:e.userCodeStartLine>0&&s>=e.userCodeStartLine&&(a=s-e.userCodeStartLine+1),`Line ${a}: ${fi(o)}`}return t}).join(`
`)}function fi(i){return i.includes("no matching overloaded function found")?i+" (check function name spelling and argument types)":i.includes("undeclared identifier")?i+" (variable not declared — check spelling)":i.includes("syntax error")?i+" (check for missing semicolons, brackets, or commas)":i.includes("is not a function")?i+" (identifier exists but is not callable)":i.includes("wrong operand types")?i+" (type mismatch — check vec/float/int types)":i}function vi(i,e){const n=i.split(`
`);if(e<1||e>n.length)return null;const t=3,r=Math.max(0,e-t-1),c=Math.min(n.length,e+t);return n.slice(r,c).map((s,a)=>{const l=r+a+1,u=l===e,d=String(l).padStart(4," "),v=ut(s);return u?`<span class="error-line-highlight">${d} │ ${v}</span>`:`<span class="context-line">${d} │ ${v}</span>`}).join("")}function ut(i){const e=document.createElement("div");return e.textContent=i,e.innerHTML}class G{constructor(e){this.overlay=null,this.autoHideTimer=null,this.container=e}showError(e,n){this.clearAutoHide(),this.ensureOverlay();const t=n instanceof Error?n.message:String(n),r=n instanceof Error&&n.stack?n.stack.split(`
`).slice(1,4).join(`
`):"";this.overlay.innerHTML=`
      <div class="script-error-content">
        <div class="script-error-header">
          <span class="script-error-title">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: text-bottom;">
              <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-.25-6.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5z"/>
            </svg>
            script.js ${e}() error
          </span>
          <button class="script-error-close" title="Dismiss">×</button>
        </div>
        <pre class="script-error-message">${J(t)}</pre>
        ${r?`<pre class="script-error-stack">${J(r)}</pre>`:""}
      </div>
    `,this.wireClose(),this.autoHideTimer=setTimeout(()=>this.hide(),G.AUTO_HIDE_MS)}showDisabled(){this.clearAutoHide(),this.ensureOverlay(),this.overlay.innerHTML=`
      <div class="script-error-content">
        <div class="script-error-header disabled">
          <span class="script-error-title">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: text-bottom;">
              <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-.25-6.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5z"/>
            </svg>
            script.js onFrame() disabled
          </span>
          <button class="script-error-close" title="Dismiss">×</button>
        </div>
        <pre class="script-error-message">Too many consecutive errors. Reload to retry.</pre>
      </div>
    `,this.wireClose()}showWarning(e,n){this.clearAutoHide(),this.ensureOverlay(),this.overlay.innerHTML=`
      <div class="script-error-content">
        <div class="script-error-header warning">
          <span class="script-error-title">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: text-bottom;">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            ${J(e)}
          </span>
          <button class="script-error-close" title="Dismiss">×</button>
        </div>
        <pre class="script-error-message">${J(n)}</pre>
      </div>
    `,this.wireClose(),this.autoHideTimer=setTimeout(()=>this.hide(),G.AUTO_HIDE_MS)}hide(){this.clearAutoHide(),this.overlay&&(this.overlay.remove(),this.overlay=null)}dispose(){this.hide()}ensureOverlay(){this.overlay||(this.overlay=document.createElement("div"),this.overlay.className="script-error-overlay",this.container.appendChild(this.overlay))}wireClose(){var n;const e=(n=this.overlay)==null?void 0:n.querySelector(".script-error-close");e&&e.addEventListener("click",()=>this.hide())}clearAutoHide(){this.autoHideTimer!==null&&(clearTimeout(this.autoHideTimer),this.autoHideTimer=null)}}G.AUTO_HIDE_MS=5e3;function J(i){const e=document.createElement("div");return e.textContent=i,e.innerHTML}class pe{constructor(e){var n;this.values={},this.updaters=new Map,this.documentListeners=[],this.container=e.container,this.uniforms=e.uniforms,this.onChange=e.onChange;for(const[t,r]of Object.entries(this.uniforms))z(r)||r.hidden||(this.values[t]=((n=e.initialValues)==null?void 0:n[t])??r.value);this.render()}render(){this.container.innerHTML="",this.container.className="uniform-controls";const e=Object.entries(this.uniforms);if(e.length===0){const c=document.createElement("div");c.className="uniform-controls-empty",c.textContent="No uniforms defined",this.container.appendChild(c);return}const n=document.createElement("div");n.className="uniform-controls-header";const t=document.createElement("button");t.className="uniform-controls-reset",t.textContent="Reset",t.title="Reset all uniforms to defaults",t.addEventListener("click",()=>this.resetToDefaults()),n.appendChild(t),this.container.appendChild(n);const r=document.createElement("div");r.className="uniform-controls-list";for(const[c,o]of e){if(z(o)||o.hidden)continue;const s=this.createControl(c,o);s&&(this.updaters.set(c,s.update),r.appendChild(s.element))}this.container.appendChild(r)}createControl(e,n){if(z(n)||n.hidden)return null;switch(n.type){case"float":return this.createFloatSlider(e,n);case"int":return this.createIntSlider(e,n);case"bool":return this.createBoolToggle(e,n);case"vec2":return this.createVec2Pad(e,n);case"vec3":return n.color?this.createColorPicker(e,n):this.createVecSliders(e,n,3);case"vec4":return n.color?this.createColorPicker4(e,n):this.createVecSliders(e,n,4);default:return console.warn(`Uniform '${e}': unknown type '${n.type}'`),null}}createSliderRow(e){const n=document.createElement("div");n.className="uniform-control-label-row";const t=document.createElement("label");t.className="uniform-control-label",t.textContent=e.label;const r=document.createElement("span");r.className="uniform-control-value",r.textContent=e.format(e.value),n.appendChild(t),n.appendChild(r);const c=document.createElement("input");c.type="range",c.className="uniform-control-slider",c.min=String(e.min),c.max=String(e.max),c.step=String(e.step),c.value=String(e.value),c.addEventListener("input",()=>{const a=parseFloat(c.value);e.onInput(a),r.textContent=e.format(a)});const o=document.createElement("div");return o.appendChild(n),o.appendChild(c),{element:o,update:a=>{c.value=String(a),r.textContent=e.format(a)}}}createFloatSlider(e,n){const t=n.step??.01,{element:r,update:c}=this.createSliderRow({label:n.label??e,min:n.min??0,max:n.max??1,step:t,value:this.values[e],format:s=>this.formatNumber(s,t),onInput:s=>{this.values[e]=s,this.onChange(e,s)}}),o=document.createElement("div");return o.className="uniform-control uniform-control-float",o.appendChild(r),{element:o,update:s=>c(s)}}createIntSlider(e,n){const{element:t,update:r}=this.createSliderRow({label:n.label??e,min:n.min??0,max:n.max??10,step:n.step??1,value:this.values[e],format:o=>String(Math.round(o)),onInput:o=>{const s=Math.round(o);this.values[e]=s,this.onChange(e,s)}}),c=document.createElement("div");return c.className="uniform-control uniform-control-int",c.appendChild(t),{element:c,update:o=>r(o)}}createBoolToggle(e,n){const t=this.values[e],r=n.label??e,c=document.createElement("div");c.className="uniform-control uniform-control-bool";const o=document.createElement("div");o.className="uniform-control-label-row";const s=document.createElement("label");s.className="uniform-control-label",s.textContent=r;const a=document.createElement("label");a.className="uniform-control-toggle";const l=document.createElement("input");l.type="checkbox",l.checked=t;const u=document.createElement("span");return u.className="uniform-control-toggle-slider",l.addEventListener("change",()=>{const d=l.checked;this.values[e]=d,this.onChange(e,d)}),a.appendChild(l),a.appendChild(u),o.appendChild(s),o.appendChild(a),c.appendChild(o),{element:c,update:d=>{l.checked=d}}}createVec2Pad(e,n){const t=this.values[e],r=n.min??[0,0],c=n.max??[1,1],o=n.label??e,s=document.createElement("div");s.className="uniform-control uniform-control-vec2";const a=document.createElement("div");a.className="uniform-control-label-row";const l=document.createElement("label");l.className="uniform-control-label",l.textContent=o;const u=document.createElement("span");u.className="uniform-control-value",u.textContent=this.formatVec2(t),a.appendChild(l),a.appendChild(u);const d=document.createElement("div");d.className="uniform-control-xy-pad";const v=document.createElement("div");v.className="uniform-control-xy-handle",d.appendChild(v);const b=h=>{const y=(h[0]-r[0])/(c[0]-r[0])*100,w=(1-(h[1]-r[1])/(c[1]-r[1]))*100;v.style.left=`${y}%`,v.style.top=`${w}%`};b(t);let m=!1;const C=h=>{const y=d.getBoundingClientRect(),w="touches"in h?h.touches[0].clientX:h.clientX,P="touches"in h?h.touches[0].clientY:h.clientY;let k=Math.max(0,Math.min(1,(w-y.left)/y.width)),T=Math.max(0,Math.min(1,(P-y.top)/y.height));const R=r[0]+k*(c[0]-r[0]),S=r[1]+(1-T)*(c[1]-r[1]),M=[R,S];this.values[e]=M,v.style.left=`${k*100}%`,v.style.top=`${T*100}%`,u.textContent=this.formatVec2(M),this.onChange(e,M)},x=h=>{m=!0,C(h),h.preventDefault()},E=h=>{m&&C(h)},f=()=>{m=!1};d.addEventListener("mousedown",x),document.addEventListener("mousemove",E),document.addEventListener("mouseup",f),this.documentListeners.push({type:"mousemove",handler:E}),this.documentListeners.push({type:"mouseup",handler:f});const p=h=>{m=!0,C(h),h.preventDefault()},g=h=>{m&&C(h)};return d.addEventListener("touchstart",p),document.addEventListener("touchmove",g),document.addEventListener("touchend",f),this.documentListeners.push({type:"touchmove",handler:g}),this.documentListeners.push({type:"touchend",handler:f}),s.appendChild(a),s.appendChild(d),{element:s,update:h=>{const y=h;b(y),u.textContent=this.formatVec2(y)}}}createColorPicker(e,n){const t=this.values[e],r=n.label??e,c=document.createElement("div");c.className="uniform-control uniform-control-color";const o=document.createElement("div");o.className="uniform-control-label-row";const s=document.createElement("label");s.className="uniform-control-label",s.textContent=r;const a=document.createElement("span");a.className="uniform-control-value",a.textContent=this.rgbToHex(t),o.appendChild(s),o.appendChild(a);const l=document.createElement("div");l.className="uniform-control-color-wrapper";const u=document.createElement("input");u.type="color",u.className="uniform-control-color-input",u.value=this.rgbToHex(t);const d=document.createElement("div");return d.className="uniform-control-color-swatch",d.style.backgroundColor=this.rgbToHex(t),u.addEventListener("input",()=>{const v=this.hexToRgb(u.value);this.values[e]=v,a.textContent=u.value,d.style.backgroundColor=u.value,this.onChange(e,v)}),d.addEventListener("click",()=>u.click()),l.appendChild(d),l.appendChild(u),c.appendChild(o),c.appendChild(l),{element:c,update:v=>{const b=this.rgbToHex(v);u.value=b,d.style.backgroundColor=b,a.textContent=b}}}createColorPicker4(e,n){var C,x,E;const t=this.values[e],r=n.label??e,c=document.createElement("div");c.className="uniform-control uniform-control-color";const o=document.createElement("div");o.className="uniform-control-label-row";const s=document.createElement("label");s.className="uniform-control-label",s.textContent=r;const a=document.createElement("span");a.className="uniform-control-value",a.textContent=this.rgbToHex(t),o.appendChild(s),o.appendChild(a);const l=document.createElement("div");l.className="uniform-control-color-wrapper";const u=document.createElement("input");u.type="color",u.className="uniform-control-color-input",u.value=this.rgbToHex(t);const d=document.createElement("div");d.className="uniform-control-color-swatch",d.style.backgroundColor=this.rgbToHex(t),u.addEventListener("input",()=>{const f=this.hexToRgb(u.value),p=this.values[e];p[0]=f[0],p[1]=f[1],p[2]=f[2],a.textContent=u.value,d.style.backgroundColor=u.value,this.onChange(e,[...p])}),d.addEventListener("click",()=>u.click()),l.appendChild(d),l.appendChild(u);const v=((C=n.step)==null?void 0:C[3])??.01,{element:b,update:m}=this.createSliderRow({label:"Alpha",min:((x=n.min)==null?void 0:x[3])??0,max:((E=n.max)==null?void 0:E[3])??1,step:v,value:t[3],format:f=>this.formatNumber(f,v),onInput:f=>{const p=this.values[e];p[3]=f,this.onChange(e,[...p])}});return c.appendChild(o),c.appendChild(l),c.appendChild(b),{element:c,update:f=>{const p=f,g=this.rgbToHex(p);u.value=g,d.style.backgroundColor=g,a.textContent=g,m(p[3])}}}createVecSliders(e,n,t){const r=this.values[e],c=n.label??e,o=t===3?["X","Y","Z"]:["X","Y","Z","W"],s=document.createElement("div");s.className=`uniform-control uniform-control-vec${t}`;const a=document.createElement("div");a.className="uniform-control-label",a.textContent=c,s.appendChild(a);const l=[];return o.forEach((u,d)=>{var E,f,p;const v=((E=n.step)==null?void 0:E[d])??.01,{element:b,update:m}=this.createSliderRow({label:u,min:((f=n.min)==null?void 0:f[d])??0,max:((p=n.max)==null?void 0:p[d])??1,step:v,value:r[d],format:g=>this.formatNumber(g,v),onInput:g=>{const h=this.values[e];h[d]=g,this.onChange(e,[...h])}}),C=b.querySelector(".uniform-control-label-row");if(C){C.classList.add("uniform-control-vec-slider-row");const g=C.querySelector(".uniform-control-label");g&&g.classList.add("uniform-control-vec-component");const h=C.querySelector(".uniform-control-value");h&&h.classList.add("uniform-control-vec-value")}const x=b.querySelector(".uniform-control-slider");x&&x.classList.add("uniform-control-vec-slider"),l.push(m),s.appendChild(b)}),{element:s,update:u=>{const d=u;l.forEach((v,b)=>v(d[b]))}}}formatNumber(e,n){const t=String(n),r=t.indexOf("."),c=r===-1?0:t.length-r-1;return e.toFixed(c)}formatVec2(e){return`(${e[0].toFixed(2)}, ${e[1].toFixed(2)})`}rgbToHex(e){const n=Math.round(e[0]*255),t=Math.round(e[1]*255),r=Math.round(e[2]*255);return`#${n.toString(16).padStart(2,"0")}${t.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}`}hexToRgb(e){const n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?[parseInt(n[1],16)/255,parseInt(n[2],16)/255,parseInt(n[3],16)/255]:[0,0,0]}setValue(e,n){var t;e in this.uniforms&&(this.values[e]=n,(t=this.updaters.get(e))==null||t(n))}resetToDefaults(){for(const[e,n]of Object.entries(this.uniforms))z(n)||n.hidden||(this.setValue(e,n.value),this.onChange(e,n.value))}destroy(){for(const{type:e,handler:n}of this.documentListeners)document.removeEventListener(e,n);this.documentListeners=[],this.container.innerHTML="",this.updaters.clear()}}const mi=Object.freeze(Object.defineProperty({__proto__:null,UniformControls:pe},Symbol.toStringTag,{value:"Module"}));class hi{constructor(e){if(this.controls=null,this.isOpen=e.startOpen??!1,this.wrapper=document.createElement("div"),this.wrapper.className="uniforms-panel-wrapper",this.toggleButton=document.createElement("button"),this.toggleButton.className="uniforms-toggle-button",this.toggleButton.title="Toggle Uniforms Panel",this.toggleButton.innerHTML=`
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="4" y1="21" x2="4" y2="14"></line>
        <line x1="4" y1="10" x2="4" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="3"></line>
        <line x1="20" y1="21" x2="20" y2="16"></line>
        <line x1="20" y1="12" x2="20" y2="3"></line>
        <line x1="1" y1="14" x2="7" y2="14"></line>
        <line x1="9" y1="8" x2="15" y2="8"></line>
        <line x1="17" y1="16" x2="23" y2="16"></line>
      </svg>
    `,this.toggleButton.addEventListener("click",()=>this.toggle()),this.wrapper.appendChild(this.toggleButton),this.panel=document.createElement("div"),this.panel.className="uniforms-panel",!Object.values(e.uniforms).some(s=>ue(s))){this.wrapper.style.display="none",e.container.appendChild(this.wrapper);return}const t=document.createElement("div");t.className="uniforms-panel-header";const r=document.createElement("span");r.textContent="Uniforms",t.appendChild(r);const c=document.createElement("button");c.className="uniforms-panel-close",c.innerHTML="&times;",c.title="Close",c.addEventListener("click",()=>this.hide()),t.appendChild(c),this.panel.appendChild(t);const o=document.createElement("div");o.className="uniforms-panel-content",this.panel.appendChild(o),this.controls=new pe({container:o,uniforms:e.uniforms,initialValues:e.initialValues,onChange:e.onChange}),this.wrapper.appendChild(this.panel),this.isOpen||this.panel.classList.add("closed"),e.container.appendChild(this.wrapper)}setValue(e,n){var t;(t=this.controls)==null||t.setValue(e,n)}show(){this.isOpen=!0,this.toggleButton.classList.add("hidden"),this.panel.classList.remove("closed")}hide(){this.isOpen=!1,this.panel.classList.add("closed"),this.toggleButton.classList.remove("hidden")}toggle(){this.isOpen?this.hide():this.show()}isVisible(){return this.isOpen}destroy(){var e;(e=this.controls)==null||e.destroy(),this.wrapper.remove()}}const oe=i=>i.replace(/\\/g,"\\\\").replace(/`/g,"\\`").replace(/\$/g,"\\$");function gi(i,e){const n=Ci(i,e),t=new Blob([n],{type:"text/html"}),c=`${i.root.split("/").pop()||"shader"}.html`,o=URL.createObjectURL(t),s=document.createElement("a");s.href=o,s.download=c,s.click(),URL.revokeObjectURL(o),console.log(`Exported: ${c}`)}function Ci(i,e){var h,y,w,P;const n=i.meta.title,t=i.commonSource??"",r=e.getUniformValues(),c=e.getUBOExportData(),o=["BufferA","BufferB","BufferC","BufferD","Image"],s=[];let a=!1,l=!1;for(const k of o){const T=i.passes[k];if(!T)continue;const R=T.channels.map(S=>S.kind==="buffer"?`buffer:${S.buffer}`:S.kind==="texture"?"procedural":S.kind==="keyboard"?(a=!0,"keyboard"):S.kind==="script"?(l=!0,`script:${S.name}`):S.kind==="audio"||S.kind==="webcam"||S.kind==="video"?"black":"none");s.push({name:k,source:T.glslSource,channels:T.channels,channelTypes:R})}const u=!!((h=i.script)!=null&&h.setup||(y=i.script)!=null&&y.onFrame),d=Object.entries(i.uniforms).filter(([,k])=>!z(k)),v=[];for(const[k,T]of d){if(z(T))continue;const R=r[k]??T.value;if(T.type==="float"||T.type==="int")v.push(`  '${k}': ${R}`);else if(T.type==="bool")v.push(`  '${k}': ${R?1:0}`);else if(T.type==="vec2"){const S=R;v.push(`  '${k}': [${S[0]}, ${S[1]}]`)}else if(T.type==="vec3"){const S=R;v.push(`  '${k}': [${S[0]}, ${S[1]}, ${S[2]}]`)}else if(T.type==="vec4"){const S=R;v.push(`  '${k}': [${S[0]}, ${S[1]}, ${S[2]}, ${S[3]}]`)}}const b=d.map(([k,T])=>`uniform ${T.type==="bool"?"bool":T.type} ${k};`).join(`
`),m=c.map(k=>`// Array uniform: ${k.name} (max ${k.count})
layout(std140) uniform _ub_${k.name} {
  ${k.type} ${k.name}[${k.count}];
};
uniform int ${k.name}_count;`).join(`

`),C=c.map(k=>{const T=Array.from(k.paddedData).map(R=>R.toFixed(6)).join(", ");return`  { name: '${k.name}', type: '${k.type}', count: ${k.count}, binding: ${k.bindingPoint}, data: new Float32Array([${T}]) }`}).join(`,
`);let x="",E="";u&&((w=i.script)!=null&&w.setup&&(x=i.script.setup.toString()),(P=i.script)!=null&&P.onFrame&&(E=i.script.onFrame.toString()));const f=a?`
// --- Keyboard helpers ---
const int KEY_A = 65; const int KEY_B = 66; const int KEY_C = 67; const int KEY_D = 68;
const int KEY_E = 69; const int KEY_F = 70; const int KEY_G = 71; const int KEY_H = 72;
const int KEY_I = 73; const int KEY_J = 74; const int KEY_K = 75; const int KEY_L = 76;
const int KEY_M = 77; const int KEY_N = 78; const int KEY_O = 79; const int KEY_P = 80;
const int KEY_Q = 81; const int KEY_R = 82; const int KEY_S = 83; const int KEY_T = 84;
const int KEY_U = 85; const int KEY_V = 86; const int KEY_W = 87; const int KEY_X = 88;
const int KEY_Y = 89; const int KEY_Z = 90;
const int KEY_0 = 48; const int KEY_1 = 49; const int KEY_2 = 50; const int KEY_3 = 51;
const int KEY_4 = 52; const int KEY_5 = 53; const int KEY_6 = 54; const int KEY_7 = 55;
const int KEY_8 = 56; const int KEY_9 = 57;
const int KEY_LEFT = 37; const int KEY_UP = 38; const int KEY_RIGHT = 39; const int KEY_DOWN = 40;
const int KEY_SPACE = 32; const int KEY_ENTER = 13; const int KEY_TAB = 9; const int KEY_ESC = 27;
const int KEY_BACKSPACE = 8; const int KEY_DELETE = 46; const int KEY_SHIFT = 16;
const int KEY_CTRL = 17; const int KEY_ALT = 18;
const int KEY_F1 = 112; const int KEY_F2 = 113; const int KEY_F3 = 114; const int KEY_F4 = 115;
const int KEY_F5 = 116; const int KEY_F6 = 117; const int KEY_F7 = 118; const int KEY_F8 = 119;
const int KEY_F9 = 120; const int KEY_F10 = 121; const int KEY_F11 = 122; const int KEY_F12 = 123;
float keyDown(int key) { return textureLod(iChannel0, vec2((float(key) + 0.5) / 256.0, 0.25), 0.0).x; }
float keyToggle(int key) { return textureLod(iChannel0, vec2((float(key) + 0.5) / 256.0, 0.75), 0.0).x; }
bool isKeyDown(int key) { return keyDown(key) > 0.5; }
bool isKeyToggled(int key) { return keyToggle(key) > 0.5; }
`:"",p=s.map(k=>`  { name: '${k.name}', source: \`${oe(k.source)}\`, channels: ${JSON.stringify(k.channelTypes)} }`).join(`,
`),g=`#version 300 es
precision highp float;

const float ST_PI = 3.14159265359;
const float ST_TWOPI = 6.28318530718;
vec2 _st_dirToEquirect(vec3 dir) {
  float phi = atan(dir.z, dir.x);
  float theta = asin(dir.y);
  return vec2(phi / ST_TWOPI + 0.5, theta / ST_PI + 0.5);
}

uniform vec3  iResolution;
uniform float iTime;
uniform float iTimeDelta;
uniform int   iFrame;
uniform vec4  iMouse;
uniform bool  iMousePressed;
uniform vec4  iDate;
uniform float iFrameRate;
uniform vec3  iChannelResolution[4];
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;

${m}
${b}
${f}`;return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${n}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; background: #fff; }
    body { display: flex; align-items: center; justify-content: center; }
    .container {
      width: 90vw;
      max-width: 1200px;
      aspect-ratio: 16 / 9;
      background: #000;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 24px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.1);
    }
    canvas { display: block; width: 100%; height: 100%; }
  </style>
</head>
<body>
  <div class="container">
    <canvas id="canvas"></canvas>
  </div>
  <script>
// Shader Sandbox Export - ${n}
// Generated ${new Date().toISOString()}

// ── Constants ──

const VERTEX_SHADER = \`#version 300 es
precision highp float;
layout(location = 0) in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
\`;

const FRAGMENT_PREAMBLE = \`${oe(g)}\`;

const FRAGMENT_SUFFIX = \`
out vec4 fragColor;
void main() { mainImage(fragColor, gl_FragCoord.xy); }
\`;

const COMMON_SOURCE = \`${oe(t)}\`;

const PASSES = [
${p}
];

const UNIFORM_VALUES = {
${v.join(`,
`)}
};

const UBO_DATA = [
${C}
];

// ── WebGL Setup ──

const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl2', { alpha: false, antialias: false, preserveDrawingBuffer: true });
if (!gl) { alert('WebGL2 not supported'); throw new Error('WebGL2 not supported'); }

const floatExt = gl.getExtension('EXT_color_buffer_float');
if (!floatExt) console.warn('EXT_color_buffer_float not supported');

// Fullscreen triangle
const vao = gl.createVertexArray();
gl.bindVertexArray(vao);
const vbo = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);
gl.enableVertexAttribArray(0);
gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

// ── Helper Textures ──

function createProceduralTexture() {
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  const data = new Uint8Array(8 * 8 * 4);
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const i = (y * 8 + x) * 4;
      const c = (x + y) % 2;
      data[i] = c ? 204 : 51; data[i+1] = c ? 26 : 51;
      data[i+2] = c ? 204 : 51; data[i+3] = 255;
    }
  }
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 8, 8, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
  return tex;
}

function createBlackTexture() {
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0,0,0,255]));
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  return tex;
}

const proceduralTex = createProceduralTexture();
const blackTex = createBlackTexture();
${a?`
// ── Keyboard Texture (256x3) ──
// Row 0: current key state, Row 1: key down events, Row 2: toggle state
const keyboardTex = gl.createTexture();
const keyboardData = new Uint8Array(256 * 3);
gl.bindTexture(gl.TEXTURE_2D, keyboardTex);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.R8, 256, 3, 0, gl.RED, gl.UNSIGNED_BYTE, keyboardData);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

const keyStates = new Uint8Array(256);     // row 0: held
const keyDown_ev = new Uint8Array(256);    // row 1: down this frame
const keyToggle_st = new Uint8Array(256);  // row 2: toggle

document.addEventListener('keydown', e => {
  const k = e.keyCode;
  if (k < 256) {
    if (!keyStates[k]) {
      keyDown_ev[k] = 255;
      keyToggle_st[k] = keyToggle_st[k] ? 0 : 255;
    }
    keyStates[k] = 255;
  }
});
document.addEventListener('keyup', e => {
  const k = e.keyCode;
  if (k < 256) keyStates[k] = 0;
});

function updateKeyboardTexture() {
  keyboardData.set(keyStates, 0);
  keyboardData.set(keyDown_ev, 256);
  keyboardData.set(keyToggle_st, 512);
  gl.bindTexture(gl.TEXTURE_2D, keyboardTex);
  gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, 256, 3, gl.RED, gl.UNSIGNED_BYTE, keyboardData);
  keyDown_ev.fill(0);
}
`:""}
${l||u?`
// ── Script Textures ──
const scriptTextures = new Map();

function updateScriptTexture(name, w, h, data) {
  const existing = scriptTextures.get(name);
  const isFloat = data instanceof Float32Array;
  const internalFormat = isFloat ? gl.RGBA32F : gl.RGBA;
  const type = isFloat ? gl.FLOAT : gl.UNSIGNED_BYTE;
  if (existing && existing.width === w && existing.height === h) {
    gl.bindTexture(gl.TEXTURE_2D, existing.texture);
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, w, h, gl.RGBA, type, data);
  } else {
    const tex = existing ? existing.texture : gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, gl.RGBA, type, data);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    scriptTextures.set(name, { texture: tex, width: w, height: h });
  }
}
`:""}
// ── Shader Compilation ──

function compileShader(type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    console.error(source.split('\\n').map((l,i) => (i+1) + ': ' + l).join('\\n'));
    throw new Error('Shader compile failed');
  }
  return shader;
}

function createProgram(fragSource) {
  const vs = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER);
  const fs = compileShader(gl.FRAGMENT_SHADER, fragSource);
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error('Program link failed: ' + gl.getProgramInfoLog(program));
  }
  return program;
}

function createRenderTexture(w, h) {
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, w, h, 0, gl.RGBA, gl.FLOAT, null);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  return tex;
}

function createFramebuffer(tex) {
  const fb = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
  return fb;
}

// ── Initialize Passes ──

const container = canvas.parentElement;
let width = canvas.width = container.clientWidth * devicePixelRatio;
let height = canvas.height = container.clientHeight * devicePixelRatio;

const runtimePasses = PASSES.map(pass => {
  const fragSource = FRAGMENT_PREAMBLE +
    (COMMON_SOURCE ? '\\n// Common\\n' + COMMON_SOURCE + '\\n' : '') +
    '\\n// User code\\n' + pass.source + FRAGMENT_SUFFIX;
  const program = createProgram(fragSource);
  const currentTexture = createRenderTexture(width, height);
  const previousTexture = createRenderTexture(width, height);
  const framebuffer = createFramebuffer(currentTexture);

  // Cache uniform locations
  const uniforms = {
    iResolution: gl.getUniformLocation(program, 'iResolution'),
    iTime: gl.getUniformLocation(program, 'iTime'),
    iTimeDelta: gl.getUniformLocation(program, 'iTimeDelta'),
    iFrame: gl.getUniformLocation(program, 'iFrame'),
    iMouse: gl.getUniformLocation(program, 'iMouse'),
    iMousePressed: gl.getUniformLocation(program, 'iMousePressed'),
    iDate: gl.getUniformLocation(program, 'iDate'),
    iFrameRate: gl.getUniformLocation(program, 'iFrameRate'),
    iChannel: [0,1,2,3].map(i => gl.getUniformLocation(program, 'iChannel' + i)),
    iChannelResolution: gl.getUniformLocation(program, 'iChannelResolution'),
    custom: {},
    uboCountLocs: {},
  };

  // Scalar uniform locations
  for (const name of Object.keys(UNIFORM_VALUES)) {
    uniforms.custom[name] = gl.getUniformLocation(program, name);
  }

  // UBO block bindings and count locations
  for (const ubo of UBO_DATA) {
    const blockIndex = gl.getUniformBlockIndex(program, '_ub_' + ubo.name);
    if (blockIndex !== gl.INVALID_INDEX) {
      gl.uniformBlockBinding(program, blockIndex, ubo.binding);
    }
    uniforms.uboCountLocs[ubo.name] = gl.getUniformLocation(program, ubo.name + '_count');
  }

  return { name: pass.name, channels: pass.channels, program, framebuffer, currentTexture, previousTexture, uniforms };
});

// ── UBO Buffers ──

const uboBuffers = UBO_DATA.map(ubo => {
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.UNIFORM_BUFFER, buffer);
  gl.bufferData(gl.UNIFORM_BUFFER, ubo.data, gl.DYNAMIC_DRAW);
  gl.bindBufferBase(gl.UNIFORM_BUFFER, ubo.binding, buffer);
  return { name: ubo.name, buffer, count: ubo.count, data: ubo.data };
});

const findPass = name => runtimePasses.find(p => p.name === name);
${u?`
// ── Script Setup ──

const scriptSetup = ${x||"null"};
const scriptOnFrame = ${E||"null"};

const scriptEngine = {
  setUniformValue(name, value) {
    // Check if this is an array uniform (Float32Array)
    if (value instanceof Float32Array) {
      const ubo = uboBuffers.find(u => u.name === name);
      if (ubo) {
        // Pack to std140: user provides tight data, we need to pad
        // For simplicity, copy directly (assume already padded or vec4/mat4)
        const len = Math.min(value.length, ubo.data.length);
        ubo.data.set(value.subarray(0, len));
        gl.bindBuffer(gl.UNIFORM_BUFFER, ubo.buffer);
        gl.bufferSubData(gl.UNIFORM_BUFFER, 0, ubo.data);
      }
    } else {
      UNIFORM_VALUES[name] = value;
    }
  },
  getUniformValue(name) {
    return UNIFORM_VALUES[name];
  },
  updateTexture(name, w, h, data) {
    updateScriptTexture(name, w, h, data);
  },
  readPixels(passName, x, y, w, h) {
    const pass = findPass(passName);
    if (!pass) return new Uint8Array(w * h * 4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, pass.framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pass.previousTexture, 0);
    const pixels = new Uint8Array(w * h * 4);
    gl.readPixels(x, y, w, h, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pass.currentTexture, 0);
    return pixels;
  },
  get width() { return width; },
  get height() { return height; },
  setOverlay() {},
};

try {
  if (scriptSetup) scriptSetup(scriptEngine);
} catch(e) { console.error('script setup error:', e); }
`:""}
// ── Mouse ──

let mouse = [0, 0, 0, 0];
let mouseDown = false;
canvas.addEventListener('mousedown', e => {
  mouseDown = true;
  const rect = canvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width * width;
  const y = (1 - (e.clientY - rect.top) / rect.height) * height;
  mouse[0] = x; mouse[1] = y;
  mouse[2] = x; mouse[3] = y;
});
canvas.addEventListener('mousemove', e => {
  if (!mouseDown) return;
  const rect = canvas.getBoundingClientRect();
  mouse[0] = (e.clientX - rect.left) / rect.width * width;
  mouse[1] = (1 - (e.clientY - rect.top) / rect.height) * height;
});
canvas.addEventListener('mouseup', () => {
  mouseDown = false;
  mouse[2] = -Math.abs(mouse[2]);
  mouse[3] = -Math.abs(mouse[3]);
});

// ── Resize ──

let resizeTimer = null;
new ResizeObserver(() => {
  const newW = container.clientWidth * devicePixelRatio;
  const newH = container.clientHeight * devicePixelRatio;
  canvas.width = newW;
  canvas.height = newH;
  if (resizeTimer) clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    width = newW;
    height = newH;
    runtimePasses.forEach(p => {
      [p.currentTexture, p.previousTexture].forEach(tex => {
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, width, height, 0, gl.RGBA, gl.FLOAT, null);
      });
      gl.bindFramebuffer(gl.FRAMEBUFFER, p.framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, p.currentTexture, 0);
    });
    frame = 0;
    startTime = performance.now() / 1000;
    lastTime = 0;
  }, 150);
}).observe(container);

// ── Animation Loop ──

let frame = 0;
let startTime = performance.now() / 1000;
let lastTime = 0;

function render(now) {
  requestAnimationFrame(render);

  const time = now / 1000 - startTime;
  const deltaTime = Math.max(0.001, time - lastTime);
  lastTime = time;

  const date = new Date();
  const iDate = [date.getFullYear(), date.getMonth(), date.getDate(),
    date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds() + date.getMilliseconds() / 1000];
${a?`
  updateKeyboardTexture();`:""}
${u?`
  // Run script onFrame
  try {
    if (scriptOnFrame) scriptOnFrame(scriptEngine, time, deltaTime, frame);
  } catch(e) { console.error('script onFrame error:', e); }
`:""}
  gl.bindVertexArray(vao);

  runtimePasses.forEach(pass => {
    gl.useProgram(pass.program);
    gl.bindFramebuffer(gl.FRAMEBUFFER, pass.framebuffer);
    gl.viewport(0, 0, width, height);

    // Built-in uniforms
    gl.uniform3f(pass.uniforms.iResolution, width, height, 1);
    gl.uniform1f(pass.uniforms.iTime, time);
    gl.uniform1f(pass.uniforms.iTimeDelta, deltaTime);
    gl.uniform1i(pass.uniforms.iFrame, frame);
    gl.uniform4fv(pass.uniforms.iMouse, mouse);
    gl.uniform1i(pass.uniforms.iMousePressed, mouseDown ? 1 : 0);
    gl.uniform4fv(pass.uniforms.iDate, iDate);
    gl.uniform1f(pass.uniforms.iFrameRate, 1 / deltaTime);

    // Scalar custom uniforms
    for (const [name, value] of Object.entries(UNIFORM_VALUES)) {
      const loc = pass.uniforms.custom[name];
      if (!loc) continue;
      if (Array.isArray(value)) {
        if (value.length === 2) gl.uniform2fv(loc, value);
        else if (value.length === 3) gl.uniform3fv(loc, value);
        else if (value.length === 4) gl.uniform4fv(loc, value);
      } else if (typeof value === 'number') {
        gl.uniform1f(loc, value);
      }
    }

    // UBO count uniforms
    for (const ubo of UBO_DATA) {
      const countLoc = pass.uniforms.uboCountLocs[ubo.name];
      if (countLoc) gl.uniform1i(countLoc, ubo.count);
    }

    // Bind channels
    const channelRes = new Float32Array(12); // iChannelResolution[4] × vec3
    pass.channels.forEach((ch, i) => {
      gl.activeTexture(gl.TEXTURE0 + i);
      if (ch === 'none') {
        gl.bindTexture(gl.TEXTURE_2D, blackTex);
      } else if (ch === 'procedural') {
        gl.bindTexture(gl.TEXTURE_2D, proceduralTex);
        channelRes[i*3] = 8; channelRes[i*3+1] = 8; channelRes[i*3+2] = 1;
      } else if (ch === 'keyboard') {
        gl.bindTexture(gl.TEXTURE_2D, ${a?"keyboardTex":"blackTex"});
        channelRes[i*3] = 256; channelRes[i*3+1] = 3; channelRes[i*3+2] = 1;
      } else if (ch === 'black') {
        gl.bindTexture(gl.TEXTURE_2D, blackTex);
      } else if (ch.startsWith('buffer:')) {
        const srcPass = findPass(ch.slice(7));
        gl.bindTexture(gl.TEXTURE_2D, srcPass ? srcPass.previousTexture : blackTex);
        channelRes[i*3] = width; channelRes[i*3+1] = height; channelRes[i*3+2] = 1;
      } else if (ch.startsWith('script:')) {
        const stex = scriptTextures?.get(ch.slice(7));
        gl.bindTexture(gl.TEXTURE_2D, stex ? stex.texture : blackTex);
        if (stex) { channelRes[i*3] = stex.width; channelRes[i*3+1] = stex.height; channelRes[i*3+2] = 1; }
      } else {
        gl.bindTexture(gl.TEXTURE_2D, blackTex);
      }
      gl.uniform1i(pass.uniforms.iChannel[i], i);
    });

    if (pass.uniforms.iChannelResolution) {
      gl.uniform3fv(pass.uniforms.iChannelResolution, channelRes);
    }

    gl.drawArrays(gl.TRIANGLES, 0, 3);

    // Swap textures
    const temp = pass.currentTexture;
    pass.currentTexture = pass.previousTexture;
    pass.previousTexture = temp;
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pass.currentTexture, 0);
  });

  // Blit Image pass to screen
  const imagePass = findPass('Image');
  if (imagePass) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, imagePass.framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, imagePass.previousTexture, 0);
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, imagePass.framebuffer);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
    gl.blitFramebuffer(0, 0, width, height, 0, 0, width, height, gl.COLOR_BUFFER_BIT, gl.NEAREST);
    gl.bindFramebuffer(gl.FRAMEBUFFER, imagePass.framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, imagePass.currentTexture, 0);
  }

  frame++;
}

requestAnimationFrame(render);
  <\/script>
</body>
</html>`}class yi{constructor(e,n,t){this.isRecording=!1,this.mediaRecorder=null,this.recordedChunks=[],this.recordingIndicator=null,this.canvas=e,this.container=n,this.projectRoot=t}toggle(e,n){this.isRecording?this.stop():this.start(e,n)}start(e,n){if(!MediaRecorder.isTypeSupported("video/webm")){console.error("WebM recording not supported in this browser");return}e&&n();const t=this.canvas.captureStream(60);this.mediaRecorder=new MediaRecorder(t,{mimeType:"video/webm;codecs=vp9",videoBitsPerSecond:8e6}),this.recordedChunks=[],this.mediaRecorder.ondataavailable=r=>{r.data.size>0&&this.recordedChunks.push(r.data)},this.mediaRecorder.onstop=()=>{const r=new Blob(this.recordedChunks,{type:"video/webm"}),c=this.projectRoot.split("/").pop()||"shader",o=new Date,s=o.getFullYear().toString()+(o.getMonth()+1).toString().padStart(2,"0")+o.getDate().toString().padStart(2,"0")+"-"+o.getHours().toString().padStart(2,"0")+o.getMinutes().toString().padStart(2,"0")+o.getSeconds().toString().padStart(2,"0"),a=`shadertoy-${c}-${s}.webm`,l=URL.createObjectURL(r),u=document.createElement("a");u.href=l,u.download=a,u.click(),URL.revokeObjectURL(l),console.log(`Recording saved: ${a}`)},this.mediaRecorder.start(),this.isRecording=!0,this.showRecordingIndicator(),console.log("Recording started")}stop(){this.mediaRecorder&&this.mediaRecorder.state!=="inactive"&&this.mediaRecorder.stop(),this.isRecording=!1,this.mediaRecorder=null,this.hideRecordingIndicator(),console.log("Recording stopped")}dispose(){this.isRecording&&this.stop(),this.hideRecordingIndicator()}showRecordingIndicator(){this.recordingIndicator||(this.recordingIndicator=document.createElement("div"),this.recordingIndicator.className="recording-indicator",this.recordingIndicator.innerHTML=`
      <span class="recording-dot"></span>
      <span class="recording-text">REC</span>
    `,this.container.appendChild(this.recordingIndicator))}hideRecordingIndicator(){this.recordingIndicator&&(this.recordingIndicator.remove(),this.recordingIndicator=null)}}class xi{constructor(e){this.frameCount=0,this.totalFrameCount=0,this.lastFpsUpdate=0,this.currentFps=0,this.isStatsOpen=!1,this.container=e,this.statsContainer=document.createElement("div"),this.statsContainer.className="stats-container",this.fpsDisplay=document.createElement("button"),this.fpsDisplay.className="fps-counter",this.fpsDisplay.textContent="0 FPS",this.fpsDisplay.title="Click to show stats",this.fpsDisplay.addEventListener("click",()=>this.toggle()),this.statsGrid=document.createElement("div"),this.statsGrid.className="stats-grid",this.timeDisplay=document.createElement("div"),this.timeDisplay.className="stat-item",this.timeDisplay.innerHTML='<span class="stat-value">0:00</span><span class="stat-label">time</span>',this.statsGrid.appendChild(this.timeDisplay),this.frameDisplay=document.createElement("div"),this.frameDisplay.className="stat-item",this.frameDisplay.innerHTML='<span class="stat-value">0</span><span class="stat-label">frame</span>',this.statsGrid.appendChild(this.frameDisplay),this.resolutionDisplay=document.createElement("div"),this.resolutionDisplay.className="stat-item",this.resolutionDisplay.innerHTML='<span class="stat-value">0×0</span><span class="stat-label">res</span>',this.statsGrid.appendChild(this.resolutionDisplay),this.statsContainer.appendChild(this.statsGrid),this.statsContainer.appendChild(this.fpsDisplay),this.container.appendChild(this.statsContainer)}update(e,n){this.frameCount++,this.totalFrameCount++,this.isStatsOpen&&this.updateFrameDisplay(),e-this.lastFpsUpdate>=1&&(this.currentFps=this.frameCount/(e-this.lastFpsUpdate),this.fpsDisplay.textContent=`${Math.round(this.currentFps)} FPS`,this.frameCount=0,this.lastFpsUpdate=e,this.isStatsOpen&&(this.updateTimeDisplay(n),this.updateResolutionDisplay()))}reset(){this.frameCount=0,this.totalFrameCount=0,this.lastFpsUpdate=0,this.isStatsOpen&&(this.updateTimeDisplay(0),this.updateFrameDisplay(),this.updateResolutionDisplay())}updateResolution(e,n){this.resolutionDisplay.querySelector(".stat-value").textContent=`${e}×${n}`}dispose(){this.statsContainer.remove()}toggle(){this.isStatsOpen=!this.isStatsOpen,this.statsGrid.classList.toggle("open",this.isStatsOpen),this.statsContainer.classList.toggle("open",this.isStatsOpen),this.isStatsOpen&&(this.updateFrameDisplay(),this.updateResolutionDisplay())}updateFrameDisplay(){let e;this.totalFrameCount>=1e6?e=(this.totalFrameCount/1e6).toFixed(1)+"M":this.totalFrameCount>=1e3?e=(this.totalFrameCount/1e3).toFixed(1)+"K":e=this.totalFrameCount.toString(),this.frameDisplay.querySelector(".stat-value").textContent=e}updateTimeDisplay(e){const n=Math.floor(e),t=Math.floor(n/3600),r=Math.floor(n%3600/60),c=n%60;let o;t>0?o=`${t}:${r.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`:o=`${r}:${c.toString().padStart(2,"0")}`,this.timeDisplay.querySelector(".stat-value").textContent=o}updateResolutionDisplay(){this.resolutionDisplay.querySelector(".stat-value").textContent||(this.resolutionDisplay.querySelector(".stat-value").textContent="0×0")}}const H={};for(let i=0;i<26;i++)H[`Key${String.fromCharCode(65+i)}`]=65+i;for(let i=0;i<10;i++)H[`Digit${i}`]=48+i;for(let i=1;i<=12;i++)H[`F${i}`]=111+i;Object.assign(H,{Backspace:8,Tab:9,Enter:13,ShiftLeft:16,ShiftRight:16,ControlLeft:17,ControlRight:17,AltLeft:18,AltRight:18,Pause:19,CapsLock:20,Escape:27,Space:32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Insert:45,Delete:46,NumLock:144,ScrollLock:145,Semicolon:186,Equal:187,Comma:188,Minus:189,Period:190,Slash:191,Backquote:192,BracketLeft:219,Backslash:220,BracketRight:221,Quote:222});function Te(i){const e=H[i.code];return e!==void 0&&e>=0&&e<256?e:null}class bi{constructor(e,n){this.mouse=[0,0,0,0],this.isMouseDown=!1,this.touchState={count:0,touches:[[0,0,0,0],[0,0,0,0],[0,0,0,0]],pinch:1,pinchDelta:0,pinchCenter:[0,0]},this.onFirstGesture=null,this.activePointers=new Map,this.gestureTriggered=!1,this.keyEvents=[],this.canvas=e,this.pixelRatio=n,this.setupMouseTracking(),this.setupTouchTracking(),this.keydownHandler=t=>{const r=Te(t);r!==null&&this.keyEvents.push({keycode:r,down:!0})},this.keyupHandler=t=>{const r=Te(t);r!==null&&this.keyEvents.push({keycode:r,down:!1})},document.addEventListener("keydown",this.keydownHandler),document.addEventListener("keyup",this.keyupHandler)}getAndClearKeyEvents(){const e=this.keyEvents;return this.keyEvents=[],e}dispose(){document.removeEventListener("keydown",this.keydownHandler),document.removeEventListener("keyup",this.keyupHandler)}triggerGesture(){var e;this.gestureTriggered||(this.gestureTriggered=!0,(e=this.onFirstGesture)==null||e.call(this))}setupMouseTracking(){const e=n=>{const t=this.canvas.getBoundingClientRect(),r=(n.clientX-t.left)*this.pixelRatio,c=(t.height-(n.clientY-t.top))*this.pixelRatio;return[r,c]};this.canvas.addEventListener("mousedown",n=>{const[t,r]=e(n);this.isMouseDown=!0,this.mouse[0]=t,this.mouse[1]=r,this.mouse[2]=t,this.mouse[3]=r,this.triggerGesture()}),this.canvas.addEventListener("mousemove",n=>{if(!this.isMouseDown)return;const[t,r]=e(n);this.mouse[0]=t,this.mouse[1]=r}),this.canvas.addEventListener("mouseup",()=>{this.isMouseDown=!1,this.mouse[2]=-Math.abs(this.mouse[2]),this.mouse[3]=-Math.abs(this.mouse[3])})}setupTouchTracking(){this.canvas.style.touchAction="none";const e=(o,s)=>{const a=this.canvas.getBoundingClientRect(),l=(o-a.left)*this.pixelRatio,u=(a.height-(s-a.top))*this.pixelRatio;return[l,u]},n=o=>{if(o.pointerType==="mouse")return;const[s,a]=e(o.clientX,o.clientY);this.activePointers.set(o.pointerId,{id:o.pointerId,x:s,y:a,startX:s,startY:a}),this.canvas.setPointerCapture(o.pointerId),this.updateTouchState(),this.activePointers.size===1&&(this.isMouseDown=!0,this.mouse[0]=s,this.mouse[1]=a,this.mouse[2]=s,this.mouse[3]=a),o.preventDefault()},t=o=>{if(o.pointerType==="mouse")return;const s=this.activePointers.get(o.pointerId);if(!s)return;const[a,l]=e(o.clientX,o.clientY);s.x=a,s.y=l,this.updateTouchState(),this.activePointers.size===1&&(this.mouse[0]=a,this.mouse[1]=l),o.preventDefault()},r=o=>{o.pointerType!=="mouse"&&(this.activePointers.delete(o.pointerId),this.canvas.releasePointerCapture(o.pointerId),this.activePointers.size===0&&(this.isMouseDown=!1,this.mouse[2]=-Math.abs(this.mouse[2]),this.mouse[3]=-Math.abs(this.mouse[3])),this.updateTouchState(),o.preventDefault())},c=o=>{r(o)};this.canvas.addEventListener("pointerdown",n),this.canvas.addEventListener("pointermove",t),this.canvas.addEventListener("pointerup",r),this.canvas.addEventListener("pointercancel",c)}updateTouchState(){const e=Array.from(this.activePointers.values()),n=e.length;this.touchState.count=n;for(let t=0;t<3;t++)if(t<e.length){const r=e[t];this.touchState.touches[t]=[r.x,r.y,r.startX,r.startY]}else this.touchState.touches[t]=[0,0,0,0];if(n>=2){const t=e[0],r=e[1],c=r.x-t.x,o=r.y-t.y,s=Math.sqrt(c*c+o*o),a=r.startX-t.startX,l=r.startY-t.startY,u=Math.sqrt(a*a+l*l);if(u>0){const d=s/u;this.touchState.pinchDelta=d-this.touchState.pinch,this.touchState.pinch=d}this.touchState.pinchCenter=[(t.x+r.x)/2,(t.y+r.y)/2]}else this.touchState.pinchDelta=0,n===0&&(this.touchState.pinch=1,this.touchState.pinchCenter=[0,0])}}class ki{constructor(e,n){this.isMenuOpen=!1,this.container=e,this.controlsContainer=document.createElement("div"),this.controlsContainer.className="playback-controls",this.menuButton=document.createElement("button"),this.menuButton.className="controls-menu-button",this.menuButton.title="Controls",this.menuButton.textContent="+",this.menuButton.addEventListener("click",()=>this.toggleMenu()),this.controlsGrid=document.createElement("div"),this.controlsGrid.className="controls-grid",this.playPauseButton=document.createElement("button"),this.playPauseButton.className="control-button",this.playPauseButton.title="Play/Pause (Space)",this.playPauseButton.innerHTML=`
      <svg viewBox="0 0 16 16">
        <path d="M5 3h2v10H5V3zm4 0h2v10H9V3z"/>
      </svg>
    `,this.playPauseButton.addEventListener("click",()=>n.onTogglePlayPause());const t=document.createElement("button");t.className="control-button",t.title="Reset (R)",t.innerHTML=`
      <svg viewBox="0 0 16 16">
        <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
      </svg>
    `,t.addEventListener("click",()=>n.onReset());const r=document.createElement("button");r.className="control-button",r.title="Screenshot (S)",r.innerHTML=`
      <svg viewBox="0 0 16 16">
        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
      </svg>
    `,r.addEventListener("click",()=>n.onScreenshot());const c=document.createElement("button");c.className="control-button",c.title="Record Video",c.innerHTML=`
      <svg viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="5"/>
      </svg>
    `,c.addEventListener("click",()=>n.onToggleRecording());const o=document.createElement("button");o.className="control-button",o.title="Export HTML",o.innerHTML=`
      <svg viewBox="0 0 16 16">
        <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
        <path d="M2 14.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
      </svg>
    `,o.addEventListener("click",()=>n.onExportHTML());const s=document.createElement("button");s.className="control-button",s.title="Render",s.innerHTML=`
      <svg viewBox="0 0 16 16">
        <path d="M2 3h12v2H2V3zm0 4h12v2H2V7zm0 4h12v2H2v-2z"/>
      </svg>
    `,s.addEventListener("click",()=>n.onRender());const a=document.createElement("button");a.className="control-button",a.title="Close",a.textContent="−",a.style.fontSize="20px",a.style.fontWeight="300",a.addEventListener("click",()=>this.toggleMenu()),this.controlsGrid.appendChild(this.playPauseButton),this.controlsGrid.appendChild(t),this.controlsGrid.appendChild(o),this.controlsGrid.appendChild(s),this.controlsGrid.appendChild(r),this.controlsGrid.appendChild(c);const l=document.createElement("div");this.controlsGrid.appendChild(l),this.controlsGrid.appendChild(a),this.controlsContainer.appendChild(this.controlsGrid),this.controlsContainer.appendChild(this.menuButton),this.container.appendChild(this.controlsContainer)}setPaused(e){e?this.playPauseButton.innerHTML=`
        <svg viewBox="0 0 16 16">
          <path d="M4 3v10l8-5-8-5z"/>
        </svg>
      `:this.playPauseButton.innerHTML=`
        <svg viewBox="0 0 16 16">
          <path d="M5 3h2v10H5V3zm4 0h2v10H9V3z"/>
        </svg>
      `}dispose(){this.controlsContainer.remove()}toggleMenu(){this.isMenuOpen=!this.isMenuOpen,this.menuButton.textContent=this.isMenuOpen?"−":"+",this.controlsGrid.classList.toggle("open",this.isMenuOpen),this.controlsContainer.classList.toggle("open",this.isMenuOpen)}}class _i{constructor(e,n,t,r){this.parentContainer=e,this.canvasWidth=n,this.canvasHeight=t,this.onStartRender=r,this.cancelRenderFn=null,this.backdrop=document.createElement("div"),this.backdrop.className="render-dialog-backdrop",this.backdrop.addEventListener("click",w=>{w.target===this.backdrop&&this.close()});const c=document.createElement("div");c.className="render-dialog";const o=document.createElement("div");o.className="render-dialog-header",o.innerHTML=`
      <div class="render-dialog-title">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
          <path d="M2 14.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
        </svg>
        Render
      </div>
    `;const s=document.createElement("button");s.className="render-dialog-close",s.textContent="×",s.addEventListener("click",()=>this.close()),o.appendChild(s),this.bodyEl=document.createElement("div"),this.bodyEl.className="render-dialog-body";const a=this.createField("Resolution"),l=document.createElement("div");l.className="render-field-row",this.widthInput=this.createNumberInput(n,1,7680),this.heightInput=this.createNumberInput(t,1,4320);const u=document.createElement("span");u.textContent="×",l.appendChild(this.widthInput),l.appendChild(u),l.appendChild(this.heightInput),a.appendChild(l);const d=this.createField("FPS");this.fpsInput=this.createNumberInput(60,1,120),d.appendChild(this.fpsInput);const v=this.createField("Duration (seconds)");this.durationInput=this.createNumberInput(10,1,3600),v.appendChild(this.durationInput);const b=this.createField("Format"),m=document.createElement("div");m.className="render-format-group",this.formatFrames=document.createElement("input"),this.formatFrames.type="radio",this.formatFrames.name="render-format",this.formatFrames.id="render-fmt-frames",this.formatFrames.value="frames",this.formatVideo=document.createElement("input"),this.formatVideo.type="radio",this.formatVideo.name="render-format",this.formatVideo.id="render-fmt-video",this.formatVideo.value="video",this.formatVideo.checked=!0;const C=document.createElement("div");C.className="render-format-option";const x=document.createElement("label");x.htmlFor="render-fmt-frames",x.textContent="PNG Frames",C.appendChild(this.formatFrames),C.appendChild(x);const E=document.createElement("div");E.className="render-format-option";const f=document.createElement("label");f.htmlFor="render-fmt-video",f.textContent="Video (WebM)",E.appendChild(this.formatVideo),E.appendChild(f),m.appendChild(E),m.appendChild(C),b.appendChild(m),this.estimateEl=document.createElement("div"),this.estimateEl.className="render-estimate",this.bodyEl.appendChild(a),this.bodyEl.appendChild(d),this.bodyEl.appendChild(v),this.bodyEl.appendChild(b),this.bodyEl.appendChild(this.estimateEl),this.actionsEl=document.createElement("div"),this.actionsEl.className="render-dialog-actions";const p=document.createElement("button");p.className="render-btn render-btn-cancel",p.textContent="Cancel",p.addEventListener("click",()=>this.close());const g=document.createElement("button");g.className="render-btn render-btn-primary",g.textContent="Start Render",g.addEventListener("click",()=>this.startRender()),this.actionsEl.appendChild(p),this.actionsEl.appendChild(g),this.progressEl=document.createElement("div"),this.progressEl.className="render-progress",this.progressEl.innerHTML=`
      <div class="render-progress-bar-bg"><div class="render-progress-bar"></div></div>
      <div class="render-progress-text">Preparing...</div>
    `,this.progressBar=this.progressEl.querySelector(".render-progress-bar"),this.progressText=this.progressEl.querySelector(".render-progress-text");const h=document.createElement("button");h.className="render-btn render-btn-cancel",h.textContent="Cancel Render",h.style.marginTop="4px",h.addEventListener("click",()=>this.cancelRender()),this.progressEl.appendChild(h),c.appendChild(o),c.appendChild(this.bodyEl),c.appendChild(this.actionsEl),c.appendChild(this.progressEl),this.backdrop.appendChild(c);const y=()=>this.updateEstimate();this.widthInput.addEventListener("input",y),this.heightInput.addEventListener("input",y),this.fpsInput.addEventListener("input",y),this.durationInput.addEventListener("input",y),this.formatFrames.addEventListener("change",y),this.formatVideo.addEventListener("change",y),this.updateEstimate()}open(){this.parentContainer.appendChild(this.backdrop)}close(){var e;(e=this.cancelRenderFn)==null||e.call(this),this.cancelRenderFn=null,this.backdrop.remove()}createField(e){const n=document.createElement("div");n.className="render-field";const t=document.createElement("div");return t.className="render-field-label",t.textContent=e,n.appendChild(t),n}createNumberInput(e,n,t){const r=document.createElement("input");return r.type="number",r.className="render-input",r.value=String(Math.round(e)),r.min=String(n),r.max=String(t),r}updateEstimate(){const e=parseInt(this.widthInput.value)||0,n=parseInt(this.heightInput.value)||0,t=parseInt(this.fpsInput.value)||0,r=parseFloat(this.durationInput.value)||0,c=Math.ceil(t*r);if(this.formatFrames.checked){const s=e*n*4/1048576*c;this.estimateEl.textContent=`${c} frames, ~${s<1024?Math.round(s)+" MB":(s/1024).toFixed(1)+" GB"} raw`}else this.estimateEl.textContent=`${c} frames, ${r}s at ${t} fps`}startRender(){const e=parseInt(this.widthInput.value)||this.canvasWidth,n=parseInt(this.heightInput.value)||this.canvasHeight,t=parseInt(this.fpsInput.value)||60,r=parseFloat(this.durationInput.value)||10,c=this.formatFrames.checked?"frames":"video";this.bodyEl.style.display="none",this.actionsEl.style.display="none",this.progressEl.classList.add("active"),this.progressBar.style.width="0%",this.progressText.textContent="Preparing...",this.cancelRenderFn=this.onStartRender({width:e,height:n,fps:t,duration:r,format:c,onProgress:(o,s)=>{const a=o/s*100;this.progressBar.style.width=`${a}%`,this.progressText.textContent=`Frame ${o} / ${s} (${Math.round(a)}%)`},onComplete:()=>{this.progressText.textContent="Done!",this.progressBar.style.width="100%",setTimeout(()=>this.close(),1500)},onError:o=>{this.progressText.textContent=`Error: ${o.message}`,this.progressBar.style.background="#c62828"}})}cancelRender(){var e;(e=this.cancelRenderFn)==null||e.call(this),this.cancelRenderFn=null,this.bodyEl.style.display="",this.actionsEl.style.display="",this.progressEl.classList.remove("active")}}class A{constructor(e){var t;this.animationId=null,this.startTime=0,this.disposed=!1,this.playbackControls=null,this.isPaused=!1,this.mediaBanner=null,this._resizeDebounceTimer=null,this.isVisible=!0,this.contextLostOverlay=null,this.isContextLost=!1,this.uniformsPanel=null,this.scriptAPI=null,this.scriptErrorCount=0,this._lastOnFrameTime=null,this.mediaInitialized=!1,this.globalKeyHandler=null,this.controlsKeyHandler=null,this._externalAnimationLoop=!1,this.overlays=new Map,this.animate=r=>{var s;if(this.disposed||(this.animationId=requestAnimationFrame(this.animate),this.isPaused||!this.isVisible||this.isContextLost))return;const c=r/1e3,o=c-this.startTime;this.statsPanel.update(c,o);for(const a of this.input.getAndClearKeyEvents())this.engine.updateKeyState(a.keycode,a.down);if(this.engine.updateKeyboardTexture(),this.engine.updateAudioTexture(),this.engine.updateVideoTextures(),this.scriptAPI&&((s=this.project.script)!=null&&s.onFrame)&&this.scriptErrorCount<A.MAX_SCRIPT_ERRORS){const a=this._lastOnFrameTime!==null?o-this._lastOnFrameTime:0;try{this.project.script.onFrame(this.scriptAPI,o,a,this.statsPanel.totalFrameCount),this.scriptErrorCount=0}catch(l){this.scriptErrorCount++,console.error(`script.js onFrame() threw (${this.scriptErrorCount}/${A.MAX_SCRIPT_ERRORS}):`,l),this.runtimeErrorOverlay.showError("onFrame",l),this.scriptErrorCount>=A.MAX_SCRIPT_ERRORS&&(console.warn("script.js onFrame() disabled after too many errors"),this.runtimeErrorOverlay.showDisabled())}this._lastOnFrameTime=o}this.engine.step(o,this.input.mouse,this.input.isMouseDown,{count:this.input.touchState.count,touches:this.input.touchState.touches,pinch:this.input.touchState.pinch,pinchDelta:this.input.touchState.pinchDelta,pinchCenter:this.input.touchState.pinchCenter}),this.input.touchState.pinchDelta=0,this.presentToScreen()},this.container=e.container,this.project=e.project,this.pixelRatio=e.pixelRatio??e.project.pixelRatio??window.devicePixelRatio,this.canvas=document.createElement("canvas"),this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.display="block",this.container.appendChild(this.canvas),this.recorder=new yi(this.canvas,this.container,e.project.root),this.errorOverlay=new di(this.container),this.runtimeErrorOverlay=new G(this.container),this.statsPanel=new xi(this.container),e.project.controls&&!e.skipPlaybackControls&&(this.playbackControls=new ki(this.container,{onTogglePlayPause:()=>this.togglePlayPause(),onReset:()=>this.reset(),onScreenshot:()=>this.screenshot(),onToggleRecording:()=>this.toggleRecording(),onExportHTML:()=>this.exportHTML(),onRender:()=>this.openRenderDialog()})),e.project.startPaused&&(this.isPaused=!0,(t=this.playbackControls)==null||t.setPaused(!0));const n=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});if(!n)throw new Error("WebGL2 not supported");if(this.gl=n,this.setupContextLossHandling(),this.updateCanvasSize(),this.statsPanel.updateResolution(this.canvas.width,this.canvas.height),this._externalAnimationLoop=e.externalAnimationLoop??!1,this._viewNames=e.viewNames,this.engine=new Ee({gl:this.gl,project:e.project,viewNames:e.viewNames,onAssetError:r=>{const c=r.type==="texture"?`Texture '${r.name}' failed to load`:`Framebuffer '${r.name}' error`;this.runtimeErrorOverlay.showWarning(c,r.detail)}}),this.engine.hasErrors()&&this.errorOverlay.show(this.engine.getCompilationErrors(),this.project),(this.engine.needsAudio||this.engine.needsWebcam)&&this.showMediaBanner(),this.project.script){const r=this;if(this.scriptAPI={setUniformValue:(c,o)=>r.engine.setUniformValue(c,o),getUniformValue:c=>r.engine.getUniformValue(c),updateTexture:(c,o,s,a)=>r.engine.updateTexture(c,o,s,a),readPixels:(c,o,s,a,l)=>r.engine.readPixels(c,o,s,a,l),get width(){return r.engine.width},get height(){return r.engine.height},setOverlay:(c,o)=>r.setOverlay(c,o)},this.project.script.setup)try{this.project.script.setup(this.scriptAPI)}catch(c){console.error("script.js setup() threw:",c),this.runtimeErrorOverlay.showError("setup",c)}}!e.skipUniformsPanel&&e.project.uniforms&&Object.values(e.project.uniforms).some(r=>ue(r))&&(this.uniformsPanel=new hi({container:this.container,uniforms:e.project.uniforms,onChange:(r,c)=>{this.engine.setUniformValue(r,c)}})),this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasSize(),this._resizeDebounceTimer!==null&&clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=setTimeout(()=>{this._resizeDebounceTimer=null,this.engine.resize(this.canvas.width,this.canvas.height),this.statsPanel.updateResolution(this.canvas.width,this.canvas.height),this.startTime=performance.now()/1e3,this.engine.reset()},150)}),this.resizeObserver.observe(this.container),this.intersectionObserver=new IntersectionObserver(r=>{const c=r[0];this.isVisible=c.isIntersecting},{threshold:.1}),this.intersectionObserver.observe(this.container),this.input=new bi(this.canvas,this.pixelRatio),this.input.onFirstGesture=()=>this.initMediaOnGesture(),this.initVideoFiles(),this.setupGlobalShortcuts(),e.project.controls&&this.setupKeyboardShortcuts()}initMediaOnGesture(){this.mediaInitialized||(this.mediaInitialized=!0,this.hideMediaBanner(),this.engine.needsAudio&&this.engine.initAudio(),this.engine.needsWebcam&&this.engine.initWebcam())}initVideoFiles(){for(const e of this.engine.videoSources)this.engine.initVideo(e)}hasErrors(){return this.engine.hasErrors()}getEngine(){return this.engine}start(){this._externalAnimationLoop||this.animationId===null&&(this.startTime=performance.now()/1e3,this.animate(this.startTime))}stop(){this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null)}getMouseState(){return[...this.input.mouse]}getResolution(){return[this.canvas.width,this.canvas.height,1]}getMousePressed(){return this.input.isMouseDown}stepExternal(e,n,t){var c;if(this.disposed||this.isContextLost)return;const r=performance.now()/1e3;this.statsPanel.update(r,e);for(const o of this.input.getAndClearKeyEvents())this.engine.updateKeyState(o.keycode,o.down);if(this.engine.updateKeyboardTexture(),this.engine.updateAudioTexture(),this.engine.updateVideoTextures(),this.scriptAPI&&((c=this.project.script)!=null&&c.onFrame)&&this.scriptErrorCount<A.MAX_SCRIPT_ERRORS){const o=this._lastOnFrameTime!==null?e-this._lastOnFrameTime:0;try{this.project.script.onFrame(this.scriptAPI,e,o,n),this.scriptErrorCount=0}catch(s){this.scriptErrorCount++,console.error(`script.js onFrame() threw (${this.scriptErrorCount}/${A.MAX_SCRIPT_ERRORS}):`,s),this.runtimeErrorOverlay.showError("onFrame",s),this.scriptErrorCount>=A.MAX_SCRIPT_ERRORS&&(console.warn("script.js onFrame() disabled after too many errors"),this.runtimeErrorOverlay.showDisabled())}this._lastOnFrameTime=e}this.engine.step(e,this.input.mouse,this.input.isMouseDown,{count:this.input.touchState.count,touches:this.input.touchState.touches,pinch:this.input.touchState.pinch,pinchDelta:this.input.touchState.pinchDelta,pinchCenter:this.input.touchState.pinchCenter},t),this.input.touchState.pinchDelta=0,this.presentToScreen()}setOverlay(e,n){let t=this.overlays.get(e);if(n===null){t&&t.classList.add("hidden");return}t||(t=document.createElement("div"),t.className=`script-overlay ${e}`,this.container.appendChild(t),this.overlays.set(e,t)),t.textContent=n,t.classList.remove("hidden")}dispose(){var e,n;this.disposed=!0,this.stop(),this.input.dispose(),this.recorder.dispose(),(e=this.playbackControls)==null||e.dispose(),this.resizeObserver.disconnect(),this._resizeDebounceTimer!==null&&clearTimeout(this._resizeDebounceTimer),this.intersectionObserver.disconnect(),this.globalKeyHandler&&document.removeEventListener("keydown",this.globalKeyHandler),this.controlsKeyHandler&&document.removeEventListener("keydown",this.controlsKeyHandler),(n=this.uniformsPanel)==null||n.destroy(),this.engine.dispose(),this.container.removeChild(this.canvas),this.statsPanel.dispose(),this.hideContextLostOverlay(),this.errorOverlay.hide(),this.runtimeErrorOverlay.dispose(),this.hideMediaBanner();for(const t of this.overlays.values())t.remove();this.overlays.clear()}presentToScreen(){const e=this.gl;if(!this.engine.bindImageForRead()){console.warn("No Image pass found");return}e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.blitFramebuffer(0,0,this.canvas.width,this.canvas.height,0,0,this.canvas.width,this.canvas.height,e.COLOR_BUFFER_BIT,e.NEAREST),this.engine.unbindImageForRead()}updateCanvasSize(){const e=this.container.getBoundingClientRect(),n=Math.floor(e.width*this.pixelRatio),t=Math.floor(e.height*this.pixelRatio);(this.canvas.width!==n||this.canvas.height!==t)&&(this.canvas.width=n,this.canvas.height=t)}static isTextInput(e){const n=e.target;if(!n)return!1;const t=n.tagName;return t==="INPUT"||t==="TEXTAREA"||n.isContentEditable}setupGlobalShortcuts(){this.globalKeyHandler=e=>{A.isTextInput(e)||e.code==="KeyS"&&!e.repeat&&(e.preventDefault(),this.screenshot())},document.addEventListener("keydown",this.globalKeyHandler)}setupKeyboardShortcuts(){this.controlsKeyHandler=e=>{A.isTextInput(e)||(e.code==="Space"&&!e.repeat&&(e.preventDefault(),this.togglePlayPause()),e.code==="KeyR"&&!e.repeat&&(e.preventDefault(),this.reset()))},document.addEventListener("keydown",this.controlsKeyHandler)}setupContextLossHandling(){this.canvas.addEventListener("webglcontextlost",e=>{e.preventDefault(),this.handleContextLost()}),this.canvas.addEventListener("webglcontextrestored",()=>{this.handleContextRestored()})}handleContextLost(){this.isContextLost=!0,this.stop(),this.showContextLostOverlay(),console.warn("WebGL context lost. Waiting for restoration...")}handleContextRestored(){var e;console.log("WebGL context restored. Reinitializing...");try{if(this.engine.dispose(),this.engine=new Ee({gl:this.gl,project:this.project,viewNames:this._viewNames,onAssetError:n=>{const t=n.type==="texture"?`Texture '${n.name}' failed to load`:`Framebuffer '${n.name}' error`;this.runtimeErrorOverlay.showWarning(t,n.detail)}}),this.engine.hasErrors()&&this.errorOverlay.show(this.engine.getCompilationErrors(),this.project),this.engine.resize(this.canvas.width,this.canvas.height),this.scriptAPI&&((e=this.project.script)!=null&&e.setup))try{this.project.script.setup(this.scriptAPI)}catch(n){console.error("script.js setup() threw during context restore:",n),this.runtimeErrorOverlay.showError("setup",n)}this.hideContextLostOverlay(),this.isContextLost=!1,this.reset(),this.start(),console.log("WebGL context successfully restored")}catch(n){console.error("Failed to restore WebGL context:",n),this.showContextLostOverlay(!0)}}showContextLostOverlay(e=!1){this.contextLostOverlay||(this.contextLostOverlay=document.createElement("div"),this.contextLostOverlay.className="context-lost-overlay",this.container.appendChild(this.contextLostOverlay)),e?this.contextLostOverlay.innerHTML=`
        <div class="context-lost-content">
          <div class="context-lost-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div class="context-lost-title">WebGL Context Lost</div>
          <div class="context-lost-message">Unable to restore automatically.</div>
          <button class="context-lost-reload" onclick="location.reload()">Reload Page</button>
        </div>
      `:this.contextLostOverlay.innerHTML=`
        <div class="context-lost-content">
          <div class="context-lost-spinner"></div>
          <div class="context-lost-title">WebGL Context Lost</div>
          <div class="context-lost-message">Attempting to restore...</div>
        </div>
      `}hideContextLostOverlay(){this.contextLostOverlay&&(this.contextLostOverlay.remove(),this.contextLostOverlay=null)}togglePlayPause(){var e;this.isPaused=!this.isPaused,(e=this.playbackControls)==null||e.setPaused(this.isPaused)}getPaused(){return this.isPaused}reset(){this.startTime=performance.now()/1e3,this._lastOnFrameTime=null,this.statsPanel.reset(),this.engine.reset()}screenshot(){const e=this.project.root.split("/").pop()||"shader",n=new Date,t=n.getFullYear().toString()+(n.getMonth()+1).toString().padStart(2,"0")+n.getDate().toString().padStart(2,"0")+"-"+n.getHours().toString().padStart(2,"0")+n.getMinutes().toString().padStart(2,"0")+n.getSeconds().toString().padStart(2,"0"),r=`shadertoy-${e}-${t}.png`;this.canvas.toBlob(c=>{if(!c){console.error("Failed to create screenshot blob");return}const o=URL.createObjectURL(c),s=document.createElement("a");s.href=o,s.download=r,s.click(),URL.revokeObjectURL(o),console.log(`Screenshot saved: ${r}`)},"image/png")}toggleRecording(){this.recorder.toggle(this.isPaused,()=>this.togglePlayPause())}exportHTML(){gi(this.project,this.engine)}openRenderDialog(){new _i(this.container,this.canvas.width,this.canvas.height,n=>this.renderOffline(n)).open()}renderOffline(e){let n=!1;const t=()=>{n=!0};return(async()=>{var a,l;const c=this.canvas.width,o=this.canvas.height,s=this.isPaused;try{this.isPaused=!0,this.canvas.width=e.width,this.canvas.height=e.height,this.engine.resize(e.width,e.height),this.engine.reset(),this.scriptAPI&&((a=this.project.script)!=null&&a.setup)&&this.project.script.setup(this.scriptAPI);const u=Math.ceil(e.fps*e.duration);e.format==="video"?await this.renderVideoFrames(u,e.fps,n,()=>n,e.onProgress):await this.renderPngFrames(u,e.fps,n,()=>n,e.onProgress),n||e.onComplete()}catch(u){n||e.onError(u instanceof Error?u:new Error(String(u)))}finally{if(this.canvas.width=c,this.canvas.height=o,this.engine.resize(c,o),this.engine.reset(),this.scriptAPI&&((l=this.project.script)!=null&&l.setup))try{this.project.script.setup(this.scriptAPI)}catch{}this.isPaused=s}})(),t}async renderPngFrames(e,n,t,r,c){let o=null;if("showDirectoryPicker"in window)try{o=await window.showDirectoryPicker({mode:"readwrite"})}catch{}for(let s=0;s<e;s++){if(r())return;this.stepForRender(s,n),this.presentToScreen();const a=await new Promise((u,d)=>{this.canvas.toBlob(v=>v?u(v):d(new Error("Failed to capture frame")),"image/png")}),l=`frame_${String(s).padStart(5,"0")}.png`;if(o){const d=await(await o.getFileHandle(l,{create:!0})).createWritable();await d.write(a),await d.close()}else{const u=URL.createObjectURL(a),d=document.createElement("a");d.href=u,d.download=l,d.click(),URL.revokeObjectURL(u)}c(s+1,e),s%10===0&&await new Promise(u=>setTimeout(u,0))}}async renderVideoFrames(e,n,t,r,c){const o=document.createElement("canvas");o.width=this.canvas.width,o.height=this.canvas.height;const s=o.getContext("2d"),a=o.captureStream(0),l=new MediaRecorder(a,{mimeType:"video/webm;codecs=vp9",videoBitsPerSecond:8e6}),u=[];l.ondataavailable=C=>{C.data.size>0&&u.push(C.data)};const d=new Promise(C=>{l.onstop=()=>C()});l.start();for(let C=0;C<e;C++){if(r()){l.stop(),await d;return}this.stepForRender(C,n),this.presentToScreen(),s.drawImage(this.canvas,0,0);const x=a.getVideoTracks()[0];x!=null&&x.requestFrame&&x.requestFrame(),c(C+1,e),C%10===0&&await new Promise(E=>setTimeout(E,0))}l.stop(),await d;const v=new Blob(u,{type:"video/webm"}),b=URL.createObjectURL(v),m=document.createElement("a");m.href=b,m.download=`render_${this.canvas.width}x${this.canvas.height}_${n}fps.webm`,m.click(),URL.revokeObjectURL(b)}stepForRender(e,n){var c;const t=e/n,r=1/n;if(this.scriptAPI&&((c=this.project.script)!=null&&c.onFrame))try{this.project.script.onFrame(this.scriptAPI,t,r,e)}catch{}this.engine.step(t,[0,0,0,0],!1)}showMediaBanner(){this.mediaBanner=document.createElement("div"),this.mediaBanner.className="media-permission-banner";const e=[];this.engine.needsAudio&&e.push("microphone"),this.engine.needsWebcam&&e.push("webcam"),this.mediaBanner.innerHTML=`
      <span class="media-banner-text">This shader uses ${e.join(" and ")}</span>
      <button class="media-banner-button">Click to enable</button>
    `,this.mediaBanner.querySelector(".media-banner-button").addEventListener("click",()=>{this.initMediaOnGesture()}),this.container.appendChild(this.mediaBanner)}hideMediaBanner(){this.mediaBanner&&(this.mediaBanner.remove(),this.mediaBanner=null)}}A.MAX_SCRIPT_ERRORS=10;class q{constructor(e){var n;this.apps=new Map,this.animationId=null,this.startTime=0,this.isPaused=!1,this.frame=0,this.pausedElapsedTime=0,this.script=null,this.scriptAPI=null,this.runtimeErrorOverlay=null,this.lastOnFrameTime=null,this.scriptErrorCount=0,this.animate=t=>{var s,a,l;if(this.animationId=requestAnimationFrame(this.animate),this.isPaused)return;const c=t/1e3-this.startTime,o=new Map;for(const[u,d]of this.apps)o.set(u,{mouse:d.getMouseState(),resolution:d.getResolution(),mousePressed:d.getMousePressed()});if((s=this.script)!=null&&s.onFrame&&this.scriptAPI&&this.scriptErrorCount<q.MAX_SCRIPT_ERRORS){const u=this.lastOnFrameTime!==null?c-this.lastOnFrameTime:0;try{this.script.onFrame(this.scriptAPI,c,u,this.frame),this.scriptErrorCount=0}catch(d){this.scriptErrorCount++,console.error(`script.js onFrame() threw (${this.scriptErrorCount}/${q.MAX_SCRIPT_ERRORS}):`,d),(a=this.runtimeErrorOverlay)==null||a.showError("onFrame",d),this.scriptErrorCount>=q.MAX_SCRIPT_ERRORS&&(console.warn("script.js onFrame() disabled after too many errors"),(l=this.runtimeErrorOverlay)==null||l.showDisabled())}this.lastOnFrameTime=c}for(const u of this.apps.values())u.stepExternal(c,this.frame,o);this.frame++},this.project=e.project,this.viewNames=e.project.views.map(t=>t.name);for(const t of e.project.views){const r=e.containers.get(t.name);if(!r)throw new Error(`No container provided for view "${t.name}"`);const c=this.createViewProject(t),o=new A({container:r,project:c,pixelRatio:e.pixelRatio??window.devicePixelRatio,skipUniformsPanel:!0,skipPlaybackControls:!0,externalAnimationLoop:!0,viewNames:this.viewNames});this.apps.set(t.name,o)}if(this.isPaused=e.project.startPaused,this.script=e.project.script,this.script){const t=e.containers.values().next().value;if(t&&(this.runtimeErrorOverlay=new G(t)),this.initScriptAPI(),this.script.setup&&this.scriptAPI)try{this.script.setup(this.scriptAPI)}catch(r){console.error("script.js setup() threw:",r),(n=this.runtimeErrorOverlay)==null||n.showError("setup",r)}}}initScriptAPI(){const e=this,n=this.apps.values().next().value;this.scriptAPI={setUniformValue:(t,r)=>e.setUniformValue(t,r),getUniformValue:t=>e.getUniformValue(t),updateTexture:(t,r,c,o)=>{var s;return(s=n==null?void 0:n.getEngine())==null?void 0:s.updateTexture(t,r,c,o)},readPixels:(t,r,c,o,s)=>{var a;return((a=n==null?void 0:n.getEngine())==null?void 0:a.readPixels(t,r,c,o,s))??new Uint8Array(o*s*4)},get width(){var t;return((t=n==null?void 0:n.getEngine())==null?void 0:t.width)??0},get height(){var t;return((t=n==null?void 0:n.getEngine())==null?void 0:t.height)??0},setOverlay:(t,r,c)=>{const o=c??e.viewNames[0],s=e.apps.get(o);s&&s.setOverlay(t,r)},getCrossViewState:t=>e.getCrossViewState(t),viewNames:e.viewNames}}createViewProject(e){return{mode:this.project.mode,root:this.project.root,meta:{...this.project.meta,title:`${this.project.meta.title} - ${e.name}`},layout:"fullscreen",theme:this.project.theme,controls:!1,startPaused:this.project.startPaused,pixelRatio:this.project.pixelRatio,commonSource:this.project.commonSource,passes:e.passes,textures:this.project.textures,uniforms:this.project.uniforms,script:null}}start(){this.animationId===null&&(this.startTime=performance.now()/1e3,this.animate(performance.now()))}stop(){this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null)}togglePlayPause(){this.isPaused?(this.startTime=performance.now()/1e3-this.pausedElapsedTime,this.animationId===null&&this.animate(performance.now())):this.pausedElapsedTime=performance.now()/1e3-this.startTime,this.isPaused=!this.isPaused}getPaused(){return this.isPaused}reset(){var e;this.frame=0,this.startTime=performance.now()/1e3,this.lastOnFrameTime=null;for(const n of this.apps.values())(e=n.getEngine())==null||e.reset()}setUniformValue(e,n){var t;for(const r of this.apps.values())(t=r.getEngine())==null||t.setUniformValue(e,n)}getUniformValue(e){var t;const n=this.apps.values().next().value;return(t=n==null?void 0:n.getEngine())==null?void 0:t.getUniformValue(e)}hasErrors(){for(const e of this.apps.values())if(e.hasErrors())return!0;return!1}getApps(){return this.apps}getCrossViewState(e){const n=this.apps.get(e);if(n)return{mouse:n.getMouseState(),resolution:n.getResolution(),mousePressed:n.getMousePressed()}}getViewNames(){return this.viewNames}getApp(e){return this.apps.get(e)}dispose(){var e;this.stop(),(e=this.runtimeErrorOverlay)==null||e.dispose();for(const n of this.apps.values())n.dispose();this.apps.clear()}}q.MAX_SCRIPT_ERRORS=10;class wi{constructor(e){this.panel=null,this.controls=null,this.isOpen=!1,this.isPaused=!1,this.wrapper=e.wrapper,this.appGroup=e.appGroup,this.isPaused=e.appGroup.getPaused(),this.controlsWrapper=document.createElement("div"),this.controlsWrapper.className="multi-view-controls-wrapper",this.toggleButton=document.createElement("button"),this.toggleButton.className="multi-view-controls-toggle",this.toggleButton.title="Toggle Controls",this.toggleButton.innerHTML=`
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="4" y1="21" x2="4" y2="14"></line>
        <line x1="4" y1="10" x2="4" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="3"></line>
        <line x1="20" y1="21" x2="20" y2="16"></line>
        <line x1="20" y1="12" x2="20" y2="3"></line>
        <line x1="1" y1="14" x2="7" y2="14"></line>
        <line x1="9" y1="8" x2="15" y2="8"></line>
        <line x1="17" y1="16" x2="23" y2="16"></line>
      </svg>
    `,this.toggleButton.addEventListener("click",()=>this.toggle()),this.controlsWrapper.appendChild(this.toggleButton),this.createPanel(e.uniforms),this.wrapper.appendChild(this.controlsWrapper)}createPanel(e){this.panel=document.createElement("div"),this.panel.className="multi-view-controls-panel";const n=document.createElement("div");n.className="multi-view-controls-header";const t=document.createElement("span");t.textContent="Controls",n.appendChild(t);const r=document.createElement("button");r.className="multi-view-controls-close",r.innerHTML="&times;",r.title="Close",r.addEventListener("click",()=>this.toggle()),n.appendChild(r),this.panel.appendChild(n);const c=document.createElement("div");c.className="controls-section playback-controls";const o=document.createElement("button");o.className="control-btn play-pause-btn",o.title="Play/Pause",this.updatePlayPauseIcon(o),o.addEventListener("click",()=>{this.appGroup.togglePlayPause(),this.isPaused=this.appGroup.getPaused(),this.updatePlayPauseIcon(o)}),c.appendChild(o);const s=document.createElement("button");if(s.className="control-btn reset-btn",s.title="Reset",s.innerHTML=`
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
        <path d="M3 3v5h5"></path>
      </svg>
    `,s.addEventListener("click",()=>{this.appGroup.reset()}),c.appendChild(s),this.panel.appendChild(c),e&&Object.values(e).some(a=>ue(a))){const a=document.createElement("div");a.className="controls-section uniforms-section";const l=document.createElement("div");l.className="section-label",l.textContent="Uniforms",a.appendChild(l);const u=document.createElement("div");u.className="uniforms-container",this.controls=new pe({container:u,uniforms:e,onChange:(d,v)=>{this.appGroup.setUniformValue(d,v)}}),a.appendChild(u),this.panel.appendChild(a)}this.panel.classList.add("closed"),this.controlsWrapper.appendChild(this.panel)}updatePlayPauseIcon(e){this.isPaused?e.innerHTML=`
        <svg viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      `:e.innerHTML=`
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      `}toggle(){var e,n;this.isOpen=!this.isOpen,this.isOpen?((e=this.panel)==null||e.classList.remove("closed"),this.toggleButton.classList.add("hidden")):((n=this.panel)==null||n.classList.add("closed"),this.toggleButton.classList.remove("hidden"))}dispose(){var e;(e=this.controls)==null||e.destroy(),this.wrapper.removeChild(this.controlsWrapper)}}class Ei{constructor(e){this.container=e.container,this.root=document.createElement("div"),this.root.className="layout-fullscreen",this.canvasContainer=document.createElement("div"),this.canvasContainer.className="canvas-container",this.root.appendChild(this.canvasContainer),this.container.appendChild(this.root)}getCanvasContainer(){return this.canvasContainer}dispose(){this.container.innerHTML=""}}class Ti{constructor(e){this.container=e.container,this.root=document.createElement("div"),this.root.className="layout-default",this.canvasContainer=document.createElement("div"),this.canvasContainer.className="canvas-container",this.root.appendChild(this.canvasContainer),this.container.appendChild(this.root)}getCanvasContainer(){return this.canvasContainer}dispose(){this.container.innerHTML=""}}class Pi{constructor(e){this.editorPanel=null,this.recompileHandler=null,this.container=e.container,this.project=e.project,this.root=document.createElement("div"),this.root.className="layout-split",this.canvasContainer=document.createElement("div"),this.canvasContainer.className="canvas-container",this.codePanel=document.createElement("div"),this.codePanel.className="code-panel",this.buildEditorPanel(),this.root.appendChild(this.canvasContainer),this.root.appendChild(this.codePanel),this.container.appendChild(this.root)}getCanvasContainer(){return this.canvasContainer}setRecompileHandler(e){this.recompileHandler=e,this.editorPanel&&this.editorPanel.setRecompileHandler(e)}setUniformHandler(e){}dispose(){this.editorPanel&&(this.editorPanel.dispose(),this.editorPanel=null),this.container.innerHTML=""}async buildEditorPanel(){try{const{EditorPanel:e}=await _(async()=>{const{EditorPanel:n}=await Promise.resolve().then(()=>sr);return{EditorPanel:n}},void 0,import.meta.url);this.editorPanel=new e(this.codePanel,this.project),this.recompileHandler&&this.editorPanel.setRecompileHandler(this.recompileHandler)}catch(e){console.error("Failed to load editor panel:",e)}}}class Si{constructor(e){this.editorInstance=null,this.recompileHandler=null,this.modifiedSources=new Map,this.tabs=[],this.activeTabIndex=0,this.container=e.container,this.project=e.project,this.root=document.createElement("div"),this.root.className="layout-tabbed";const n=document.createElement("div");n.className="tabbed-wrapper",this.contentArea=document.createElement("div"),this.contentArea.className="tabbed-content",this.canvasContainer=document.createElement("div"),this.canvasContainer.className="tabbed-canvas-container",this.imageViewer=document.createElement("div"),this.imageViewer.className="tabbed-image-viewer",this.imageViewer.style.visibility="hidden",this.contentArea.appendChild(this.canvasContainer),this.contentArea.appendChild(this.imageViewer),this.editorContainer=document.createElement("div"),this.editorContainer.className="tabbed-editor-container",this.editorContainer.style.visibility="hidden",this.contentArea.appendChild(this.editorContainer),this.buttonContainer=document.createElement("div"),this.buttonContainer.className="tabbed-button-container",this.buttonContainer.style.display="none",this.copyButton=document.createElement("button"),this.copyButton.className="tabbed-copy-button",this.copyButton.innerHTML=`
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2z" opacity="0.4"/>
        <path d="M2 5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2zm0 1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"/>
      </svg>
    `,this.copyButton.title="Copy code to clipboard",this.copyButton.addEventListener("click",()=>this.copyToClipboard()),this.buttonContainer.appendChild(this.copyButton),this.recompileButton=document.createElement("button"),this.recompileButton.className="tabbed-recompile-button",this.recompileButton.innerHTML=`
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4 3v10l8-5-8-5z"/>
      </svg>
      Recompile
    `,this.recompileButton.title="Recompile shader (Ctrl+Enter)",this.recompileButton.addEventListener("click",()=>this.recompile()),this.buttonContainer.appendChild(this.recompileButton),this.errorDisplay=document.createElement("div"),this.errorDisplay.className="tabbed-error-display",this.errorDisplay.style.display="none",this.contentArea.appendChild(this.errorDisplay),this.setupKeyboardShortcut();const t=this.buildTabBar();n.appendChild(t),n.appendChild(this.contentArea),this.root.appendChild(n),this.container.appendChild(this.root)}getCanvasContainer(){return this.canvasContainer}setRecompileHandler(e){this.recompileHandler=e}dispose(){this.editorInstance&&(this.editorInstance.destroy(),this.editorInstance=null),this.container.innerHTML=""}setupKeyboardShortcut(){document.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="Enter"&&this.tabs[this.activeTabIndex].kind==="code"&&(e.preventDefault(),this.recompile())})}saveCurrentEditorContent(){if(this.editorInstance){const e=this.tabs[this.activeTabIndex];if(e.kind==="code"){const n=this.editorInstance.getSource();this.modifiedSources.set(e.passName,n)}}}recompile(){if(!this.recompileHandler){console.warn("No recompile handler set");return}this.saveCurrentEditorContent();const e=this.tabs[this.activeTabIndex];if(e.kind!=="code")return;const n=this.modifiedSources.get(e.passName)??e.source,t=this.recompileHandler(e.passName,n);t.success?(this.hideError(),e.source=n):this.showError(t.error||"Compilation failed")}showError(e){this.errorDisplay&&(this.errorDisplay.textContent=e,this.errorDisplay.style.display="block")}hideError(){this.errorDisplay&&(this.errorDisplay.style.display="none")}async copyToClipboard(){const e=this.tabs[this.activeTabIndex];if(e.kind!=="code")return;const n=this.editorInstance?this.editorInstance.getSource():this.modifiedSources.get(e.passName)??e.source;try{await navigator.clipboard.writeText(n);const t=this.copyButton.innerHTML;this.copyButton.innerHTML=`
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
        </svg>
      `,this.copyButton.classList.add("copied"),setTimeout(()=>{this.copyButton.innerHTML=t,this.copyButton.classList.remove("copied")},1500)}catch(t){console.error("Failed to copy:",t)}}buildTabBar(){const e=document.createElement("div");e.className="tabbed-toolbar";const n=document.createElement("div");n.className="tabbed-tab-bar",this.tabs=[],this.tabs.push({kind:"shader",name:"Shader"}),this.project.commonSource&&this.tabs.push({kind:"code",name:"common.glsl",passName:"common",source:this.project.commonSource});const t=["BufferA","BufferB","BufferC","BufferD"];for(const o of t){const s=this.project.passes[o];s&&this.tabs.push({kind:"code",name:`${o.toLowerCase()}.glsl`,passName:o,source:s.glslSource})}const r=this.project.passes.Image;this.tabs.push({kind:"code",name:"image.glsl",passName:"Image",source:r.glslSource});for(const o of this.project.textures)this.tabs.push({kind:"image",name:o.filename||o.name,url:o.source});const c=async o=>{this.saveCurrentEditorContent();const s=this.tabs[o];if(this.activeTabIndex=o,n.querySelectorAll(".tabbed-tab-button").forEach((a,l)=>{a.classList.toggle("active",l===o)}),this.canvasContainer.style.visibility="hidden",this.imageViewer.style.visibility="hidden",this.editorContainer.style.visibility="hidden",this.buttonContainer.style.display="none",this.editorInstance&&(this.editorInstance.destroy(),this.editorInstance=null),s.kind==="shader")this.canvasContainer.style.visibility="visible";else if(s.kind==="code"){this.editorContainer.style.visibility="visible",this.buttonContainer.style.display="flex";const a=this.modifiedSources.get(s.passName)??s.source;this.editorContainer.innerHTML="";try{const{createEditor:l}=await _(async()=>{const{createEditor:u}=await Promise.resolve().then(()=>xt);return{createEditor:u}},void 0,import.meta.url);this.editorInstance=l(this.editorContainer,a,u=>{this.modifiedSources.set(s.passName,u)})}catch(l){console.error("Failed to load editor:",l);const u=document.createElement("textarea");u.className="tabbed-fallback-textarea",u.value=a,u.addEventListener("input",()=>{this.modifiedSources.set(s.passName,u.value)}),this.editorContainer.appendChild(u)}}else{this.imageViewer.style.visibility="visible";const a=document.createElement("img");a.src=s.url,a.alt=s.name,this.imageViewer.innerHTML="",this.imageViewer.appendChild(a)}};return this.tabs.forEach((o,s)=>{const a=document.createElement("button");a.className="tabbed-tab-button",o.kind==="shader"?a.classList.add("shader-tab"):o.kind==="image"&&a.classList.add("image-tab"),a.textContent=o.name,s===0&&a.classList.add("active"),a.addEventListener("click",()=>c(s)),n.appendChild(a)}),e.appendChild(n),e.appendChild(this.buttonContainer),e}}class ae{constructor(e){this.uniformControls=null,this.playPauseButton=null,this.onPlayPause=null,this.onReset=null,this.onScreenshot=null,this.onUniformChange=null,this.container=e.container,this.project=e.project,this.root=document.createElement("div"),this.root.className="layout-ui",this.canvasContainer=document.createElement("div"),this.canvasContainer.className="ui-canvas-container",this.uiPanel=document.createElement("div"),this.uiPanel.className="ui-panel",this.uniformsContainer=document.createElement("div"),this.uniformsContainer.className="ui-uniforms-container",this.uiPanel.appendChild(this.uniformsContainer),this.playbackContainer=document.createElement("div"),this.playbackContainer.className="ui-playback-container",this.buildPlaybackControls(),this.uiPanel.appendChild(this.playbackContainer),this.loadUniformControls(),this.root.appendChild(this.canvasContainer),this.root.appendChild(this.uiPanel),this.container.appendChild(this.root)}getCanvasContainer(){return this.canvasContainer}setPlaybackCallbacks(e){this.onPlayPause=e.onPlayPause,this.onReset=e.onReset,this.onScreenshot=e.onScreenshot}setUniformCallback(e){this.onUniformChange=e}setPaused(e){this.playPauseButton&&(this.playPauseButton.innerHTML=e?'<svg viewBox="0 0 16 16"><path d="M4 3v10l8-5-8-5z"/></svg>':'<svg viewBox="0 0 16 16"><path d="M5 3h2v10H5V3zm4 0h2v10H9V3z"/></svg>',this.playPauseButton.title=e?"Play":"Pause")}dispose(){this.uniformControls&&(this.uniformControls.destroy(),this.uniformControls=null),this.container.innerHTML=""}buildPlaybackControls(){this.playPauseButton=document.createElement("button"),this.playPauseButton.className="ui-control-button",this.playPauseButton.title="Pause",this.playPauseButton.innerHTML='<svg viewBox="0 0 16 16"><path d="M5 3h2v10H5V3zm4 0h2v10H9V3z"/></svg>',this.playPauseButton.addEventListener("click",()=>{this.onPlayPause&&this.onPlayPause()});const e=document.createElement("button");e.className="ui-control-button",e.title="Reset",e.innerHTML='<svg viewBox="0 0 16 16"><path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/></svg>',e.addEventListener("click",()=>{this.onReset&&this.onReset()});const n=document.createElement("button");n.className="ui-control-button",n.title="Screenshot",n.innerHTML='<svg viewBox="0 0 16 16"><path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/></svg>',n.addEventListener("click",()=>{this.onScreenshot&&this.onScreenshot()}),this.playbackContainer.appendChild(this.playPauseButton),this.playbackContainer.appendChild(e),this.playbackContainer.appendChild(n)}async loadUniformControls(){const e=this.project.uniforms;if(!e||Object.keys(e).length===0){const n=document.createElement("div");n.className="ui-empty-state",n.textContent="No uniforms",this.uniformsContainer.appendChild(n);return}try{const{UniformControls:n}=await _(async()=>{const{UniformControls:t}=await Promise.resolve().then(()=>mi);return{UniformControls:t}},void 0,import.meta.url);this.uniformControls=new n({container:this.uniformsContainer,uniforms:e,onChange:(t,r)=>{this.onUniformChange&&this.onUniformChange(t,r)}})}catch(n){console.error("Failed to load uniform controls:",n),this.uniformsContainer.textContent="Failed to load controls"}}}class Pe{constructor(e){this.canvasContainers=new Map,this.container=e.container,this.wrapper=document.createElement("div"),this.wrapper.className="layout-multi-view layout-split-view";for(const r of e.viewNames){const c=document.createElement("div");c.className="multi-view-canvas",c.setAttribute("data-view-name",r);const o=document.createElement("div");o.className="multi-view-label",o.textContent=r,c.appendChild(o),this.canvasContainers.set(r,c),this.wrapper.appendChild(c)}this.container.appendChild(this.wrapper),this.resizeObserver=new ResizeObserver(r=>{for(const c of r){const{width:o,height:s}=c.contentRect,a=o>s;this.wrapper.classList.toggle("split-horizontal",a),this.wrapper.classList.toggle("split-vertical",!a)}}),this.resizeObserver.observe(this.wrapper);const n=this.wrapper.getBoundingClientRect(),t=n.width>n.height;this.wrapper.classList.add(t?"split-horizontal":"split-vertical")}getCanvasContainers(){return this.canvasContainers}getWrapperElement(){return this.wrapper}dispose(){this.resizeObserver.disconnect(),this.container.innerHTML=""}}class Ri{constructor(e){this.canvasContainers=new Map,this.container=e.container,this.wrapper=document.createElement("div"),this.wrapper.className="layout-multi-view layout-quad-view";for(const n of e.viewNames){const t=document.createElement("div");t.className="multi-view-canvas",t.setAttribute("data-view-name",n),this.canvasContainers.set(n,t),this.wrapper.appendChild(t)}this.container.appendChild(this.wrapper)}getCanvasContainers(){return this.canvasContainers}getWrapperElement(){return this.wrapper}dispose(){this.container.innerHTML=""}}class zi{constructor(e){if(this.canvasContainers=new Map,this.insetContainer=null,this.minimizeBtn=null,this.isMinimized=!1,this.toggleMinimize=()=>{this.isMinimized=!this.isMinimized,this.insetContainer&&this.insetContainer.classList.toggle("minimized",this.isMinimized),this.minimizeBtn&&(this.isMinimized?(this.minimizeBtn.innerHTML="&#x25A1;",this.minimizeBtn.title="Restore",this.minimizeBtn.style.display="none"):(this.minimizeBtn.innerHTML="&#x2212;",this.minimizeBtn.title="Minimize",this.minimizeBtn.style.display=""))},this.container=e.container,e.viewNames.length<2)throw new Error("InsetViewLayout requires at least 2 views");this.wrapper=document.createElement("div"),this.wrapper.className="layout-multi-view layout-inset-view";const n=e.viewNames[0],t=document.createElement("div");t.className="multi-view-canvas inset-main",t.setAttribute("data-view-name",n),this.canvasContainers.set(n,t),this.wrapper.appendChild(t);const r=e.viewNames[1];this.insetContainer=document.createElement("div"),this.insetContainer.className="multi-view-canvas inset-overlay",this.insetContainer.setAttribute("data-view-name",r),this.canvasContainers.set(r,this.insetContainer),this.minimizeBtn=document.createElement("button"),this.minimizeBtn.className="inset-minimize-btn",this.minimizeBtn.innerHTML="&#x2212;",this.minimizeBtn.title="Minimize",this.minimizeBtn.addEventListener("click",this.toggleMinimize),this.insetContainer.appendChild(this.minimizeBtn),this.wrapper.appendChild(this.insetContainer),this.insetContainer.addEventListener("click",c=>{this.isMinimized&&c.target===this.insetContainer&&this.toggleMinimize()}),this.container.appendChild(this.wrapper)}getCanvasContainers(){return this.canvasContainers}getWrapperElement(){return this.wrapper}dispose(){this.minimizeBtn&&this.minimizeBtn.removeEventListener("click",this.toggleMinimize),this.container.innerHTML=""}}function fe(i){document.documentElement.setAttribute("data-theme",i)}function Li(i,e){switch(fe(e.project.theme),i){case"fullscreen":return new Ei(e);case"default":return new Ti(e);case"split":return new Pi(e);case"tabbed":return new Si(e);case"ui":return new ae(e)}}function Ai(i,e){switch(fe(e.project.theme),i){case"split":return new Pe(e);case"quad":return new Ri(e);case"inset":return new zi(e);default:return new Pe(e)}}async function Bi(i,e){const{project:n,styled:t=!0,pixelRatio:r=window.devicePixelRatio}=e;return t||i.classList.add("unstyled"),fe((ye(n),n.theme)),ye(n)?Oi(i,n,r):Ii(i,n,r)}function Ii(i,e,n){const t=Li(e.layout,{container:i,project:e}),r=t instanceof ae,c=new A({container:t.getCanvasContainer(),project:e,pixelRatio:n,skipUniformsPanel:r,skipPlaybackControls:r});return t.setRecompileHandler&&t.setRecompileHandler((o,s)=>{const a=c.getEngine();if(!a)return{success:!1,error:"Engine not initialized"};if(o==="common"){const l=a.recompileCommon(s);if(l.success)return{success:!0};const u=l.errors[0];return{success:!1,error:u?`${u.passName}: ${u.error}`:"Unknown error"}}return a.recompilePass(o,s)}),t.setUniformHandler&&t.setUniformHandler((o,s)=>{const a=c.getEngine();a&&a.setUniformValue(o,s)}),t instanceof ae&&(t.setPlaybackCallbacks({onPlayPause:()=>{c.togglePlayPause(),t.setPaused(c.getPaused())},onReset:()=>c.reset(),onScreenshot:()=>c.screenshot()}),t.setUniformCallback((o,s)=>{const a=c.getEngine();a&&a.setUniformValue(o,s)}),t.setPaused(c.getPaused())),c.hasErrors()||c.start(),{app:c,destroy:()=>{c.dispose(),t.dispose()}}}function Oi(i,e,n){const t=e.views.map(s=>s.name),r=Ai(e.viewLayout,{container:i,project:e,viewNames:t}),c=new q({containers:r.getCanvasContainers(),project:e,pixelRatio:n}),o=new wi({wrapper:r.getWrapperElement(),appGroup:c,uniforms:e.uniforms});return c.hasErrors()||c.start(),{appGroup:c,destroy:()=>{o.dispose(),c.dispose(),r.dispose()}}}function ve(i){return i==="Image"||i==="BufferA"||i==="BufferB"||i==="BufferC"||i==="BufferD"}function Fi(i){switch(i){case"Image":return"image.glsl";case"BufferA":return"bufferA.glsl";case"BufferB":return"bufferB.glsl";case"BufferC":return"bufferC.glsl";case"BufferD":return"bufferD.glsl"}}function dt(i){return typeof i=="string"?ve(i)?{buffer:i}:i==="keyboard"?{keyboard:!0}:i==="audio"?{audio:!0}:i==="webcam"?{webcam:!0}:{texture:i}:i}const se=["Image","BufferA","BufferB","BufferC","BufferD"],Di=["BufferA","BufferB","BufferC","BufferD"],pt=["iChannel0","iChannel1","iChannel2","iChannel3"],Mi="default",Ui=!1,Ni="light",ft=new Set(["iResolution","iTime","iTimeDelta","iFrame","iMouse","iDate","iFrameRate","iChannelResolution","iChannel0","iChannel1","iChannel2","iChannel3","iTouchCount","iTouch0","iTouch1","iTouch2","iPinch","iPinchDelta","iPinchCenter"]),$i=/^[a-zA-Z_][a-zA-Z0-9_]*$/,qi=new Set(["attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler2D","samplerCube","struct","precision","highp","mediump","lowp","layout","centroid","flat","smooth","noperspective","switch","case","default"]);function V(i){return $i.test(i)&&!qi.has(i)}const Se=new Set(["fullscreen","default","split","tabbed"]),ne=new Set(["light","dark","system"]),Gi=new Set(["mode","title","author","description","layout","theme","controls","common","startPaused","pixelRatio","uniforms","buffers","textures","Image","BufferA","BufferB","BufferC","BufferD","views"]),ji=new Set(["source","iChannel0","iChannel1","iChannel2","iChannel3"]),Re=new Set(["keyboard","audio","webcam"]);function Vi(i,e){const n=[],t=[];for(const c of Object.keys(i))Gi.has(c)||n.push(`Unknown config key '${c}'`);if(i.layout!==void 0&&!Se.has(i.layout)&&t.push(`Invalid layout '${i.layout}'. Expected one of: ${[...Se].join(", ")}`),i.theme!==void 0&&!ne.has(i.theme)&&t.push(`Invalid theme '${i.theme}'. Expected one of: ${[...ne].join(", ")}`),i.uniforms&&typeof i.uniforms=="object")for(const c of Object.keys(i.uniforms))ft.has(c)&&t.push(`Uniform name '${c}' is reserved (built-in uniform)`),V(c)||t.push(`Uniform name '${c}' is not a valid GLSL identifier`);const r=new Set;if(i.buffers){const c=Object.keys(i.buffers);for(const o of c){if(typeof o!="string"){t.push(`Buffer name must be a string, got ${typeof o}`);continue}V(o)||t.push(`Buffer name '${o}' is not a valid GLSL identifier`),r.add(o)}}if(i.textures&&typeof i.textures=="object")for(const[c,o]of Object.entries(i.textures))V(c)||t.push(`Texture name '${c}' is not a valid GLSL identifier`),r.has(c)&&t.push(`Texture name '${c}' collides with a buffer name`),typeof o!="string"?t.push(`Texture source for '${c}' must be a string`):!Re.has(o)&&!/\.\w+$/.test(o)&&!V(o)&&t.push(`Invalid texture source '${o}' for '${c}'. Expected a file path with extension, a script texture name, or one of: ${[...Re].join(", ")}`);for(const c of se){const o=i[c];if(!(!o||typeof o!="object")){for(const s of Object.keys(o))ji.has(s)||n.push(`Unknown key '${s}' in pass '${c}'`);for(const s of pt){const a=o[s];a&&typeof a=="string"&&ve(a)&&a!=="Image"&&!i[a]&&n.push(`${c}.${s} references '${a}' but no ${a} pass is configured`)}}}for(const c of n)console.warn(`[config] ${e}: ${c}`);if(t.length>0)throw new Error(`Config validation failed for '${e}':
${t.map(c=>`  - ${c}`).join(`
`)}`)}const ze=new Set(["split","quad","inset"]);function Ki(i,e){const n=[];if(!Array.isArray(i.views)||i.views.length<2)n.push("'views' must be an array with at least 2 entries");else{for(const r of i.views)(typeof r!="string"||!r)&&n.push(`Each view name must be a non-empty string, got '${r}'`);new Set(i.views).size!==i.views.length&&n.push("Duplicate view names found")}if(i.layout!==void 0&&!ze.has(i.layout)&&n.push(`Invalid multi-view layout '${i.layout}'. Expected one of: ${[...ze].join(", ")}`),i.theme!==void 0&&!ne.has(i.theme)&&n.push(`Invalid theme '${i.theme}'. Expected one of: ${[...ne].join(", ")}`),i.uniforms&&typeof i.uniforms=="object")for(const t of Object.keys(i.uniforms))ft.has(t)&&n.push(`Uniform name '${t}' is reserved (built-in uniform)`),V(t)||n.push(`Uniform name '${t}' is not a valid GLSL identifier`);if(n.length>0)throw new Error(`Multi-view config validation failed for '${e}':
${n.map(t=>`  - ${t}`).join(`
`)}`)}function te(i){return{mode:i.mode,root:i.root,meta:{title:i.title??i.root.split("/").pop()??"Untitled",author:i.author??null,description:i.description??null},layout:i.layout??Mi,theme:i.theme??Ni,controls:i.controls??Ui,startPaused:i.startPaused??!1,pixelRatio:i.pixelRatio??null,commonSource:i.commonSource,passes:i.passes,textures:i.textures??[],uniforms:i.uniforms??{},script:i.script??null}}const Le=new Set(["float","int","bool","vec2","vec3","vec4"]),Ae=new Set(["float","vec2","vec3","vec4","mat3","mat4"]),Hi={vec2:2,vec3:3,vec4:4};function Qi(i,e){for(const[n,t]of Object.entries(i)){const r=`Uniform '${n}' in '${e}'`;if(!t.type)throw new Error(`${r}: missing 'type' field`);if(z(t)){if(!Ae.has(t.type))throw new Error(`${r}: invalid array type '${t.type}'. Expected one of: ${[...Ae].join(", ")}`);if(typeof t.count!="number"||t.count<1||!Number.isInteger(t.count))throw new Error(`${r}: 'count' must be a positive integer, got ${t.count}`);continue}const c=t;if(!Le.has(c.type))throw new Error(`${r}: invalid type '${c.type}'. Expected one of: ${[...Le].join(", ")}`);switch(c.type){case"float":case"int":if(typeof c.value!="number")throw new Error(`${r}: 'value' must be a number for type '${c.type}', got ${typeof c.value}`);if(c.min!==void 0&&typeof c.min!="number")throw new Error(`${r}: 'min' must be a number`);if(c.max!==void 0&&typeof c.max!="number")throw new Error(`${r}: 'max' must be a number`);if(c.step!==void 0&&typeof c.step!="number")throw new Error(`${r}: 'step' must be a number`);break;case"bool":if(typeof c.value!="boolean")throw new Error(`${r}: 'value' must be a boolean for type 'bool', got ${typeof c.value}`);break;case"vec2":case"vec3":case"vec4":{const o=Hi[c.type];if(!Array.isArray(c.value)||c.value.length!==o)throw new Error(`${r}: 'value' must be an array of ${o} numbers for type '${c.type}'`);if(c.value.some(a=>typeof a!="number"))throw new Error(`${r}: all components of 'value' must be numbers`);const s=c;for(const a of["min","max","step"]){const l=s[a];if(l!==void 0&&(!Array.isArray(l)||l.length!==o))throw new Error(`${r}: '${a}' must be an array of ${o} numbers for type '${c.type}'`)}break}}}}async function vt(i,e,n){if(n){const r=i.joinPath(e,n);if(!await i.exists(r))throw new Error(`Common GLSL file '${n}' not found in '${e}'.`);return await i.readText(r)}const t=i.joinPath(e,"common.glsl");return await i.exists(t)?await i.readText(t):null}class mt{constructor(){this.map=new Map}register(e,n="linear",t="repeat",r){const c=`${e}|${n}|${t}`,o=this.map.get(c);if(o)return o.name;const s=`tex${this.map.size}`;return this.map.set(c,{name:s,filename:r,source:e,filter:n,wrap:t}),s}toArray(){return Array.from(this.map.values())}}function Xi(i,e,n,t,r,c){if("buffer"in i){const o=i.buffer;if(!ve(o))throw new Error(`Invalid buffer name '${o}' for ${n} in pass '${e}' at '${t}'.`);return{kind:"buffer",buffer:o,current:!!i.current}}if("texture"in i)return{kind:"texture",name:(c==null?void 0:c.get(i.texture))??r.register(i.texture,i.filter,i.wrap),cubemap:i.type==="cubemap"};if("keyboard"in i)return{kind:"keyboard"};if("audio"in i)return{kind:"audio"};if("webcam"in i)return{kind:"webcam"};if("video"in i)return{kind:"video",src:i.video};if("script"in i)return{kind:"script",name:i.script};throw new Error(`Invalid channel object for ${n} in pass '${e}' at '${t}'.`)}function ee(i,e,n,t,r,c){if(!i)return{kind:"none"};const o=dt(i);return o?Xi(o,e,n,t,r,c):{kind:"none"}}async function Yi(i,e,n){let t=n==null?void 0:n.config;if(t===void 0){const r=i.joinPath(e,"config.json");if(await i.exists(r)){const c=await i.readText(r);try{t=JSON.parse(c)}catch(o){throw new Error(`Invalid JSON in config.json at '${e}': ${(o==null?void 0:o.message)??String(o)}`)}}}return t?(Vi(t,e),t.mode==="shadertoy"?Zi(i,e,t,n):Ji(i,e,t,n)):Wi(i,e,n)}async function Wi(i,e,n){const t=i.joinPath(e,"image.glsl");if(!await i.exists(t))throw new Error(`Single-pass project at '${e}' requires 'image.glsl'.`);const r=await i.listGlslFiles(e);if(r.length>0&&r.filter(l=>l!=="image.glsl").length>0)throw new Error(`Project at '${e}' contains multiple GLSL files (${r.join(", ")}) but no 'config.json'. Add a config file to use multiple passes.`);if(await i.hasFiles(i.joinPath(e,"textures")))throw new Error(`Project at '${e}' uses textures (in 'textures/' folder) but has no 'config.json'. Add a config file to define texture bindings.`);const o=await i.readText(t);return te({mode:"standard",root:e,commonSource:null,passes:{Image:{name:"Image",glslSource:o,channels:[{kind:"none"},{kind:"none"},{kind:"none"},{kind:"none"}]}},script:n==null?void 0:n.script})}async function Zi(i,e,n,t){const r={Image:n.Image,BufferA:n.BufferA,BufferB:n.BufferB,BufferC:n.BufferC,BufferD:n.BufferD};r.Image||r.BufferA||r.BufferB||r.BufferC||r.BufferD||(r.Image={});const o=await vt(i,e,n.common),s=new mt,a=new Map;if(t!=null&&t.textureUrlResolver)for(const u of se){const d=r[u];if(d)for(const v of pt){const b=d[v];if(!b)continue;const m=dt(b);if(m&&"texture"in m&&!a.has(m.texture)){const C=await t.textureUrlResolver(m.texture),x=m.texture.split("/").pop(),E=s.register(C,m.filter,m.wrap,x);a.set(m.texture,E)}}}const l={};for(const u of se){const d=r[u];if(!d)continue;const v=d.source??Fi(u),b=i.joinPath(e,v);if(!await i.exists(b))throw new Error(`Source GLSL file for pass '${u}' not found at '${v}' in '${e}'.`);const m=await i.readText(b),C=[ee(d.iChannel0,u,"iChannel0",e,s,a),ee(d.iChannel1,u,"iChannel1",e,s,a),ee(d.iChannel2,u,"iChannel2",e,s,a),ee(d.iChannel3,u,"iChannel3",e,s,a)];l[u]={name:u,glslSource:m,channels:C}}if(!l.Image)throw new Error(`config.json at '${e}' must define an Image pass.`);return te({mode:"shadertoy",root:e,title:n.title,author:n.author,description:n.description,layout:n.layout,theme:n.theme,controls:n.controls,startPaused:n.startPaused,pixelRatio:n.pixelRatio,commonSource:o,passes:l,textures:s.toArray(),script:t==null?void 0:t.script})}async function Ji(i,e,n,t){n.uniforms&&Qi(n.uniforms,e);const r=await vt(i,e,n.common),c=n.buffers??{};if(Object.keys(c).length>0||n.textures&&Object.keys(n.textures).length>0)return nr(i,e,n,r,t);const o=i.joinPath(e,"image.glsl");if(!await i.exists(o))throw new Error(`Standard mode project at '${e}' requires 'image.glsl'.`);const s=await i.readText(o),a=[{kind:"none"},{kind:"none"},{kind:"none"},{kind:"none"}];return te({mode:"standard",root:e,title:n.title,author:n.author,description:n.description,layout:n.layout,theme:n.theme,controls:n.controls,startPaused:n.startPaused,pixelRatio:n.pixelRatio,commonSource:r,passes:{Image:{name:"Image",glslSource:s,channels:a}},uniforms:n.uniforms,script:t==null?void 0:t.script})}const er=new Set(["keyboard","audio","webcam"]);async function nr(i,e,n,t,r){const c=n.buffers??{},o=Object.keys(c);if(o.length>4)throw new Error(`Standard mode at '${e}' supports max 4 buffers, got ${o.length}: ${o.join(", ")}`);const s=new Map;for(let m=0;m<o.length;m++)s.set(o[m],Di[m]);const a=new mt,l=new Map;for(const[m,C]of s)l.set(m,{kind:"buffer",buffer:C,current:!1});for(const[m,C]of Object.entries(n.textures??{}))if(C==="keyboard")l.set(m,{kind:"keyboard"});else if(C==="audio")l.set(m,{kind:"audio"});else if(C==="webcam")l.set(m,{kind:"webcam"});else if(/\.\w+$/.test(C)){let x;r!=null&&r.textureUrlResolver?x=await r.textureUrlResolver(C):x=C;const E=a.register(x);l.set(m,{kind:"texture",name:E,cubemap:!1})}else er.has(C)||l.set(m,{kind:"script",name:C});const u=[{kind:"none"},{kind:"none"},{kind:"none"},{kind:"none"}],d=i.joinPath(e,"image.glsl");if(!await i.exists(d))throw new Error(`Standard mode project at '${e}' requires 'image.glsl'.`);const b={Image:{name:"Image",glslSource:await i.readText(d),channels:u,namedSamplers:new Map(l)}};for(const[m,C]of s){const x=i.joinPath(e,`${m}.glsl`);if(!await i.exists(x))throw new Error(`Buffer '${m}' requires '${m}.glsl' in '${e}'.`);const E=await i.readText(x);b[C]={name:C,glslSource:E,channels:u,namedSamplers:new Map(l)}}return te({mode:"standard",root:e,title:n.title,author:n.author,description:n.description,layout:n.layout,theme:n.theme,controls:n.controls,startPaused:n.startPaused,pixelRatio:n.pixelRatio,commonSource:t,passes:b,textures:a.toArray(),uniforms:n.uniforms,script:r==null?void 0:r.script})}function D(i,e){if(e in i)return e;const n=e.toLowerCase();for(const t of Object.keys(i))if(t.toLowerCase()===n)return t;return null}async function ht(i,e){if(!e)return null;const n=`${i}/script.js`,t=D(e,n);if(!t)return null;const r=await e[t](),c={};return typeof r.setup=="function"&&(c.setup=r.setup),typeof r.onFrame=="function"&&(c.onFrame=r.onFrame),c.setup||c.onFrame?c:null}function gt(i,e){return{async exists(n){return D(i,n)!==null||D(e,n)!==null},async readText(n){const t=D(i,n);if(!t)throw new Error(`File not found: ${n}`);return i[t]()},async resolveImageUrl(n){const t=D(e,n);if(!t)throw new Error(`Image not found: ${n}`);return e[t]()},async listGlslFiles(){return[]},async hasFiles(){return!1},joinPath(...n){return n.map((t,r)=>r===0?t:t.replace(/^\/+/,"")).join("/").replace(/\/+/g,"/")},baseName(n){return n.split("/").pop()||n}}}function Ct(i){return(i.split("/").pop()||i).split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" ")}async function tr(i,e,n,t,r){const c=i.startsWith("./")?i:`./${i}`,o=`${c}/config.json`;let s;if(o in n&&(s=await n[o]()),s&&Vt(s))return Ki(s,c),ir(c,s,e,t,r);const a=await ht(c,r),l=gt(e,t),d=await Yi(l,c,{config:s,script:a,textureUrlResolver:async v=>{const b=`${c}/${v.replace(/^\.\//,"")}`;return l.resolveImageUrl(b)}});return s!=null&&s.title||(d.meta.title=Ct(c)),d}async function ir(i,e,n,t,r){const c=gt(n,t),o=await ht(i,r);let s=null;const a=`${i}/common.glsl`;D(n,a)&&(s=await c.readText(a));const l=[],u=[{kind:"none"},{kind:"none"},{kind:"none"},{kind:"none"}];for(const d of e.views){const v=`${i}/${d}.glsl`,b=`${i}/${d}/image.glsl`;let m;if(D(n,v))m=await c.readText(v);else if(D(n,b))m=await c.readText(b);else throw new Error(`Multi-view: No shader found for view "${d}". Expected ${d}.glsl or ${d}/image.glsl`);const C={name:"Image",glslSource:m,channels:u,namedSamplers:new Map};l.push({name:d,passes:{Image:C}})}return{mode:"standard",root:i,meta:{title:e.title??Ct(i),author:e.author??null,description:e.description??null},theme:e.theme??"light",controls:e.controls??!0,startPaused:e.startPaused??!1,pixelRatio:e.pixelRatio??null,commonSource:s,uniforms:e.uniforms??{},textures:[],script:o,views:l,viewLayout:e.layout??"split"}}function rr(){const e=new URLSearchParams(window.location.search).get("shader");return e||"parameter-space-boundary"}function cr(i){return i.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}async function or(){const i=document.getElementById("app");document.body.classList.add("gallery-mode");const e=Object.assign({"./shaders/example-buffer/config.json":Ve,"./shaders/example-gradient/config.json":Qe,"./shaders/full-plane-phi/config.json":We,"./shaders/mandel-julia/config.json":rn,"./shaders/packing-steve/config.json":an,"./shaders/packing/config.json":dn,"./shaders/parameter-space-boundary/config.json":hn,"./shaders/parameter-space-equivPt/config.json":kn,"./shaders/parameter-space-no-color/config.json":En,"./shaders/parameter-space-pt/config.json":Rn,"./shaders/parameter-space-quadpt/config.json":On,"./shaders/parameter-space-split-color/config.json":Un,"./shaders/parameter-space-split/config.json":Gn,"./shaders/parameter-space-sym-boundary/config.json":Qn,"./shaders/parameter-space-zoom/config.json":Jn,"./shaders/parameter-space/config.json":tt,"./shaders/quad-dual/config.json":ct,"./shaders/reflection-lines/config.json":st}),n=["packing","parameter-space-boundary","parameter-space-quadpt","parameter-space-zoom","quad-dual"],r=Object.entries(e).map(([c,o])=>{const s=c.match(/\.\/shaders\/([^/]+)\/config\.json/);return s?{name:s[1],config:o}:null}).filter(c=>c&&n.includes(c.name)).sort((c,o)=>n.indexOf(c.name)-n.indexOf(o.name)).map(c=>`
    <a class="shader-card" href="?shader=${c.name}">
      <div class="shader-name">${c.config.title||cr(c.name)}</div>
      ${c.config.description?`<p class="shader-desc">${c.config.description}</p>`:""}
      <div class="shader-slug">${c.name}</div>
    </a>
  `).join("");i.innerHTML=`
    <div class="gallery">
      <header class="gallery-header">
        <h1>Shader Collection</h1>
      </header>
      <div class="gallery-grid">${r}</div>
    </div>
  `}async function Be(){const i=rr();if(!i){await or();return}try{console.log(`Loading shader: ${i}`);const e=Object.assign({"./shaders/example-buffer/bufferA.glsl":()=>_(()=>Promise.resolve().then(()=>pr),void 0,import.meta.url).then(a=>a.default),"./shaders/example-buffer/image.glsl":()=>_(()=>Promise.resolve().then(()=>vr),void 0,import.meta.url).then(a=>a.default),"./shaders/example-gradient/image.glsl":()=>_(()=>Promise.resolve().then(()=>hr),void 0,import.meta.url).then(a=>a.default),"./shaders/full-plane-phi/common.glsl":()=>_(()=>Promise.resolve().then(()=>Cr),void 0,import.meta.url).then(a=>a.default),"./shaders/full-plane-phi/image.glsl":()=>_(()=>Promise.resolve().then(()=>xr),void 0,import.meta.url).then(a=>a.default),"./shaders/mandel-julia/julia.glsl":()=>_(()=>Promise.resolve().then(()=>kr),void 0,import.meta.url).then(a=>a.default),"./shaders/mandel-julia/mandelbrot.glsl":()=>_(()=>Promise.resolve().then(()=>wr),void 0,import.meta.url).then(a=>a.default),"./shaders/packing-steve/image.glsl":()=>_(()=>Promise.resolve().then(()=>Tr),void 0,import.meta.url).then(a=>a.default),"./shaders/packing/common.glsl":()=>_(()=>Promise.resolve().then(()=>Sr),void 0,import.meta.url).then(a=>a.default),"./shaders/packing/image.glsl":()=>_(()=>Promise.resolve().then(()=>zr),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-boundary/common.glsl":()=>_(()=>Promise.resolve().then(()=>Ar),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-boundary/invertedStrip.glsl":()=>_(()=>Promise.resolve().then(()=>Ir),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-boundary/resulting_pack.glsl":()=>_(()=>Promise.resolve().then(()=>Fr),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-boundary/stripPack.glsl":()=>_(()=>Promise.resolve().then(()=>Mr),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-equivPt/common.glsl":()=>_(()=>Promise.resolve().then(()=>Nr),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-equivPt/invertedStrip.glsl":()=>_(()=>Promise.resolve().then(()=>qr),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-equivPt/resulting_pack_mouse.glsl":()=>_(()=>Promise.resolve().then(()=>jr),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-equivPt/stripPack.glsl":()=>_(()=>Promise.resolve().then(()=>Kr),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-no-color/image.glsl":()=>_(()=>Promise.resolve().then(()=>Qr),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-pt/common.glsl":()=>_(()=>Promise.resolve().then(()=>Yr),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-pt/invertedStrip.glsl":()=>_(()=>Promise.resolve().then(()=>Zr),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-pt/resulting_pack.glsl":()=>_(()=>Promise.resolve().then(()=>ec),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-pt/stripPack.glsl":()=>_(()=>Promise.resolve().then(()=>tc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-quadpt/common.glsl":()=>_(()=>Promise.resolve().then(()=>rc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-quadpt/invertedStrip.glsl":()=>_(()=>Promise.resolve().then(()=>oc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-quadpt/resulting_pack_mouse.glsl":()=>_(()=>Promise.resolve().then(()=>sc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-quadpt/resulting_pack_pt1.glsl":()=>_(()=>Promise.resolve().then(()=>uc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-quadpt/resulting_pack_pt2.glsl":()=>_(()=>Promise.resolve().then(()=>pc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-quadpt/resulting_pack_pt3.glsl":()=>_(()=>Promise.resolve().then(()=>vc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-quadpt/resulting_pack_pt4.glsl":()=>_(()=>Promise.resolve().then(()=>hc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-quadpt/stripPack.glsl":()=>_(()=>Promise.resolve().then(()=>Cc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-split-color/common.glsl":()=>_(()=>Promise.resolve().then(()=>xc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-split-color/invertedStrip.glsl":()=>_(()=>Promise.resolve().then(()=>kc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-split-color/resulting_pack.glsl":()=>_(()=>Promise.resolve().then(()=>wc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-split-color/stripPack.glsl":()=>_(()=>Promise.resolve().then(()=>Tc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-split/common.glsl":()=>_(()=>Promise.resolve().then(()=>Sc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-split/invertedStrip.glsl":()=>_(()=>Promise.resolve().then(()=>zc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-split/resulting_pack.glsl":()=>_(()=>Promise.resolve().then(()=>Ac),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-split/stripPack.glsl":()=>_(()=>Promise.resolve().then(()=>Ic),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-sym-boundary/common.glsl":()=>_(()=>Promise.resolve().then(()=>Fc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-sym-boundary/invertedStrip.glsl":()=>_(()=>Promise.resolve().then(()=>Mc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-sym-boundary/resulting_pack.glsl":()=>_(()=>Promise.resolve().then(()=>Nc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-sym-boundary/stripPack.glsl":()=>_(()=>Promise.resolve().then(()=>qc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-zoom/common.glsl":()=>_(()=>Promise.resolve().then(()=>jc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-zoom/invertedStrip.glsl":()=>_(()=>Promise.resolve().then(()=>Kc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-zoom/resulting_pack.glsl":()=>_(()=>Promise.resolve().then(()=>Qc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-zoom/stripPack.glsl":()=>_(()=>Promise.resolve().then(()=>Yc),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space/image.glsl":()=>_(()=>Promise.resolve().then(()=>Zc),void 0,import.meta.url).then(a=>a.default),"./shaders/quad-dual/common.glsl":()=>_(()=>Promise.resolve().then(()=>eo),void 0,import.meta.url).then(a=>a.default),"./shaders/quad-dual/image.glsl":()=>_(()=>Promise.resolve().then(()=>to),void 0,import.meta.url).then(a=>a.default),"./shaders/reflection-lines/common.glsl":()=>_(()=>Promise.resolve().then(()=>ro),void 0,import.meta.url).then(a=>a.default),"./shaders/reflection-lines/image.glsl":()=>_(()=>Promise.resolve().then(()=>oo),void 0,import.meta.url).then(a=>a.default)}),n=Object.assign({"./shaders/example-buffer/config.json":()=>_(()=>Promise.resolve().then(()=>Pt),void 0,import.meta.url).then(a=>a.default),"./shaders/example-gradient/config.json":()=>_(()=>Promise.resolve().then(()=>St),void 0,import.meta.url).then(a=>a.default),"./shaders/full-plane-phi/config.json":()=>_(()=>Promise.resolve().then(()=>Rt),void 0,import.meta.url).then(a=>a.default),"./shaders/mandel-julia/config.json":()=>_(()=>Promise.resolve().then(()=>zt),void 0,import.meta.url).then(a=>a.default),"./shaders/packing-steve/config.json":()=>_(()=>Promise.resolve().then(()=>Lt),void 0,import.meta.url).then(a=>a.default),"./shaders/packing/config.json":()=>_(()=>Promise.resolve().then(()=>At),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-boundary/config.json":()=>_(()=>Promise.resolve().then(()=>Bt),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-equivPt/config.json":()=>_(()=>Promise.resolve().then(()=>It),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-no-color/config.json":()=>_(()=>Promise.resolve().then(()=>Ot),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-pt/config.json":()=>_(()=>Promise.resolve().then(()=>Ft),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-quadpt/config.json":()=>_(()=>Promise.resolve().then(()=>Dt),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-split-color/config.json":()=>_(()=>Promise.resolve().then(()=>Mt),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-split/config.json":()=>_(()=>Promise.resolve().then(()=>Ut),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-sym-boundary/config.json":()=>_(()=>Promise.resolve().then(()=>Nt),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space-zoom/config.json":()=>_(()=>Promise.resolve().then(()=>$t),void 0,import.meta.url).then(a=>a.default),"./shaders/parameter-space/config.json":()=>_(()=>Promise.resolve().then(()=>qt),void 0,import.meta.url).then(a=>a.default),"./shaders/quad-dual/config.json":()=>_(()=>Promise.resolve().then(()=>Gt),void 0,import.meta.url).then(a=>a.default),"./shaders/reflection-lines/config.json":()=>_(()=>Promise.resolve().then(()=>jt),void 0,import.meta.url).then(a=>a.default)}),t=Object.assign({}),r=Object.assign({"./shaders/mandel-julia/script.js":()=>_(()=>Promise.resolve().then(()=>so),void 0,import.meta.url),"./shaders/packing/script.js":()=>_(()=>Promise.resolve().then(()=>uo),void 0,import.meta.url),"./shaders/parameter-space-boundary/script.js":()=>_(()=>Promise.resolve().then(()=>po),void 0,import.meta.url),"./shaders/parameter-space-equivPt/script.js":()=>_(()=>Promise.resolve().then(()=>go),void 0,import.meta.url),"./shaders/parameter-space-pt/script.js":()=>_(()=>Promise.resolve().then(()=>Co),void 0,import.meta.url),"./shaders/parameter-space-quadpt/script.js":()=>_(()=>Promise.resolve().then(()=>_o),void 0,import.meta.url),"./shaders/parameter-space-split-color/script.js":()=>_(()=>Promise.resolve().then(()=>wo),void 0,import.meta.url),"./shaders/parameter-space-split/script.js":()=>_(()=>Promise.resolve().then(()=>Eo),void 0,import.meta.url),"./shaders/parameter-space-sym-boundary/script.js":()=>_(()=>Promise.resolve().then(()=>To),void 0,import.meta.url),"./shaders/parameter-space-zoom/script.js":()=>_(()=>Promise.resolve().then(()=>Lo),void 0,import.meta.url),"./shaders/reflection-lines/script.js":()=>_(()=>Promise.resolve().then(()=>Fo),void 0,import.meta.url)}),c=await tr(`shaders/${i}`,e,n,t,r);console.log(`Loaded project: ${c.meta.title}`);const o=document.getElementById("app");if(!o)throw new Error("Container element #app not found");const s=await Bi(o,{project:c,pixelRatio:window.devicePixelRatio});console.log("Shader started!"),window.app=s.app,window.appGroup=s.appGroup}catch(e){console.error("Failed to initialize:",e);const n=document.getElementById("app");n&&(n.innerHTML=`
        <div style="color: red; padding: 20px; font-family: monospace;">
          <h2>Error loading shader: ${i}</h2>
          <pre>${e instanceof Error?e.message:String(e)}</pre>
          <a href="." style="color: #888; margin-top: 16px; display: block;">← Back to gallery</a>
        </div>
      `)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Be):Be();class ar{constructor(e,n){this.recompileHandler=null,this.tabs=[],this.activeTabIndex=0,this.editorInstance=null,this.modifiedSources=new Map,this.container=e,this.project=n,this.buildTabs(),this.tabBar=document.createElement("div"),this.tabBar.className="editor-tab-bar",this.buildTabBar(),this.contentArea=document.createElement("div"),this.contentArea.className="editor-content-area",this.copyButton=document.createElement("button"),this.copyButton.className="editor-copy-button",this.copyButton.innerHTML=`
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2z" opacity="0.4"/>
        <path d="M2 5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2zm0 1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"/>
      </svg>
    `,this.copyButton.title="Copy code to clipboard",this.copyButton.addEventListener("click",()=>this.copyToClipboard()),this.recompileButton=document.createElement("button"),this.recompileButton.className="editor-recompile-button",this.recompileButton.innerHTML=`
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4 3v10l8-5-8-5z"/>
      </svg>
      Recompile
    `,this.recompileButton.title="Recompile shader (Ctrl+Enter)",this.recompileButton.addEventListener("click",()=>this.recompile()),this.errorDisplay=document.createElement("div"),this.errorDisplay.className="editor-error-display",this.errorDisplay.style.display="none";const t=document.createElement("div");t.className="editor-toolbar",t.appendChild(this.tabBar),t.appendChild(this.copyButton),t.appendChild(this.recompileButton),this.container.appendChild(t),this.container.appendChild(this.contentArea),this.container.appendChild(this.errorDisplay),this.setupKeyboardShortcut(),this.showTab(0)}setRecompileHandler(e){this.recompileHandler=e}dispose(){this.editorInstance&&(this.editorInstance.destroy(),this.editorInstance=null),this.container.innerHTML=""}buildTabs(){this.tabs=[],this.project.commonSource&&this.tabs.push({kind:"code",name:"common.glsl",passName:"common",source:this.project.commonSource});const e=["BufferA","BufferB","BufferC","BufferD"];for(const t of e){const r=this.project.passes[t];r&&this.tabs.push({kind:"code",name:`${t.toLowerCase()}.glsl`,passName:t,source:r.glslSource})}const n=this.project.passes.Image;this.tabs.push({kind:"code",name:"image.glsl",passName:"Image",source:n.glslSource});for(const t of this.project.textures)this.tabs.push({kind:"image",name:t.filename||t.name,url:t.source})}buildTabBar(){this.tabBar.innerHTML="",this.tabs.forEach((e,n)=>{const t=document.createElement("button");t.className="editor-tab-button",e.kind==="image"&&t.classList.add("image-tab"),t.textContent=e.name,n===this.activeTabIndex&&t.classList.add("active"),t.addEventListener("click",()=>this.showTab(n)),this.tabBar.appendChild(t)})}async showTab(e){this.saveCurrentEditorContent(),this.activeTabIndex=e;const n=this.tabs[e];if(this.tabBar.querySelectorAll(".editor-tab-button").forEach((t,r)=>{t.classList.toggle("active",r===e)}),this.contentArea.innerHTML="",this.editorInstance&&(this.editorInstance.destroy(),this.editorInstance=null),n.kind==="code"){this.copyButton.style.display="",this.recompileButton.style.display="";const t=this.modifiedSources.get(n.passName)??n.source,r=document.createElement("div");r.className="editor-prism-container",this.contentArea.appendChild(r);try{const{createEditor:c}=await _(async()=>{const{createEditor:o}=await Promise.resolve().then(()=>xt);return{createEditor:o}},void 0,import.meta.url);this.editorInstance=c(r,t,o=>{this.modifiedSources.set(n.passName,o)})}catch(c){console.error("Failed to load editor:",c);const o=document.createElement("textarea");o.className="editor-fallback-textarea",o.value=t,o.addEventListener("input",()=>{this.modifiedSources.set(n.passName,o.value)}),r.appendChild(o)}}else{this.copyButton.style.display="none",this.recompileButton.style.display="none";const t=document.createElement("div");t.className="editor-image-viewer";const r=document.createElement("img");r.src=n.url,r.alt=n.name,t.appendChild(r),this.contentArea.appendChild(t)}}saveCurrentEditorContent(){if(this.editorInstance){const e=this.tabs[this.activeTabIndex];if(e.kind==="code"){const n=this.editorInstance.getSource();this.modifiedSources.set(e.passName,n)}}}recompile(){if(!this.recompileHandler){console.warn("No recompile handler set");return}this.saveCurrentEditorContent();const e=this.tabs[this.activeTabIndex];if(e.kind!=="code")return;const n=this.modifiedSources.get(e.passName)??e.source,t=this.recompileHandler(e.passName,n);t.success?(this.hideError(),e.source=n):this.showError(t.error||"Compilation failed")}showError(e){this.errorDisplay.textContent=e,this.errorDisplay.style.display="block"}hideError(){this.errorDisplay.style.display="none"}async copyToClipboard(){const e=this.tabs[this.activeTabIndex];if(e.kind!=="code")return;const n=this.editorInstance?this.editorInstance.getSource():this.modifiedSources.get(e.passName)??e.source;try{await navigator.clipboard.writeText(n);const t=this.copyButton.innerHTML;this.copyButton.innerHTML=`
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
        </svg>
      `,this.copyButton.classList.add("copied"),setTimeout(()=>{this.copyButton.innerHTML=t,this.copyButton.classList.remove("copied")},1500)}catch(t){console.error("Failed to copy:",t)}}setupKeyboardShortcut(){this.container.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="Enter"&&(e.preventDefault(),this.recompile())})}}const sr=Object.freeze(Object.defineProperty({__proto__:null,EditorPanel:ar},Symbol.toStringTag,{value:"Module"}));var Ie=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},yt={exports:{}};(function(i){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(t){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,c=0,o={},s={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function f(p){return p instanceof a?new a(p.type,f(p.content),p.alias):Array.isArray(p)?p.map(f):p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(f){return Object.prototype.toString.call(f).slice(8,-1)},objId:function(f){return f.__id||Object.defineProperty(f,"__id",{value:++c}),f.__id},clone:function f(p,g){g=g||{};var h,y;switch(s.util.type(p)){case"Object":if(y=s.util.objId(p),g[y])return g[y];h={},g[y]=h;for(var w in p)p.hasOwnProperty(w)&&(h[w]=f(p[w],g));return h;case"Array":return y=s.util.objId(p),g[y]?g[y]:(h=[],g[y]=h,p.forEach(function(P,k){h[k]=f(P,g)}),h);default:return p}},getLanguage:function(f){for(;f;){var p=r.exec(f.className);if(p)return p[1].toLowerCase();f=f.parentElement}return"none"},setLanguage:function(f,p){f.className=f.className.replace(RegExp(r,"gi"),""),f.classList.add("language-"+p)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(h){var f=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(h.stack)||[])[1];if(f){var p=document.getElementsByTagName("script");for(var g in p)if(p[g].src==f)return p[g]}return null}},isActive:function(f,p,g){for(var h="no-"+p;f;){var y=f.classList;if(y.contains(p))return!0;if(y.contains(h))return!1;f=f.parentElement}return!!g}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(f,p){var g=s.util.clone(s.languages[f]);for(var h in p)g[h]=p[h];return g},insertBefore:function(f,p,g,h){h=h||s.languages;var y=h[f],w={};for(var P in y)if(y.hasOwnProperty(P)){if(P==p)for(var k in g)g.hasOwnProperty(k)&&(w[k]=g[k]);g.hasOwnProperty(P)||(w[P]=y[P])}var T=h[f];return h[f]=w,s.languages.DFS(s.languages,function(R,S){S===T&&R!=f&&(this[R]=w)}),w},DFS:function f(p,g,h,y){y=y||{};var w=s.util.objId;for(var P in p)if(p.hasOwnProperty(P)){g.call(p,P,p[P],h||P);var k=p[P],T=s.util.type(k);T==="Object"&&!y[w(k)]?(y[w(k)]=!0,f(k,g,null,y)):T==="Array"&&!y[w(k)]&&(y[w(k)]=!0,f(k,g,P,y))}}},plugins:{},highlightAll:function(f,p){s.highlightAllUnder(document,f,p)},highlightAllUnder:function(f,p,g){var h={callback:g,container:f,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",h),h.elements=Array.prototype.slice.apply(h.container.querySelectorAll(h.selector)),s.hooks.run("before-all-elements-highlight",h);for(var y=0,w;w=h.elements[y++];)s.highlightElement(w,p===!0,h.callback)},highlightElement:function(f,p,g){var h=s.util.getLanguage(f),y=s.languages[h];s.util.setLanguage(f,h);var w=f.parentElement;w&&w.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(w,h);var P=f.textContent,k={element:f,language:h,grammar:y,code:P};function T(S){k.highlightedCode=S,s.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,s.hooks.run("after-highlight",k),s.hooks.run("complete",k),g&&g.call(k.element)}if(s.hooks.run("before-sanity-check",k),w=k.element.parentElement,w&&w.nodeName.toLowerCase()==="pre"&&!w.hasAttribute("tabindex")&&w.setAttribute("tabindex","0"),!k.code){s.hooks.run("complete",k),g&&g.call(k.element);return}if(s.hooks.run("before-highlight",k),!k.grammar){T(s.util.encode(k.code));return}if(p&&t.Worker){var R=new Worker(s.filename);R.onmessage=function(S){T(S.data)},R.postMessage(JSON.stringify({language:k.language,code:k.code,immediateClose:!0}))}else T(s.highlight(k.code,k.grammar,k.language))},highlight:function(f,p,g){var h={code:f,grammar:p,language:g};if(s.hooks.run("before-tokenize",h),!h.grammar)throw new Error('The language "'+h.language+'" has no grammar.');return h.tokens=s.tokenize(h.code,h.grammar),s.hooks.run("after-tokenize",h),a.stringify(s.util.encode(h.tokens),h.language)},tokenize:function(f,p){var g=p.rest;if(g){for(var h in g)p[h]=g[h];delete p.rest}var y=new d;return v(y,y.head,f),u(f,y,p,y.head,0),m(y)},hooks:{all:{},add:function(f,p){var g=s.hooks.all;g[f]=g[f]||[],g[f].push(p)},run:function(f,p){var g=s.hooks.all[f];if(!(!g||!g.length))for(var h=0,y;y=g[h++];)y(p)}},Token:a};t.Prism=s;function a(f,p,g,h){this.type=f,this.content=p,this.alias=g,this.length=(h||"").length|0}a.stringify=function f(p,g){if(typeof p=="string")return p;if(Array.isArray(p)){var h="";return p.forEach(function(T){h+=f(T,g)}),h}var y={type:p.type,content:f(p.content,g),tag:"span",classes:["token",p.type],attributes:{},language:g},w=p.alias;w&&(Array.isArray(w)?Array.prototype.push.apply(y.classes,w):y.classes.push(w)),s.hooks.run("wrap",y);var P="";for(var k in y.attributes)P+=" "+k+'="'+(y.attributes[k]||"").replace(/"/g,"&quot;")+'"';return"<"+y.tag+' class="'+y.classes.join(" ")+'"'+P+">"+y.content+"</"+y.tag+">"};function l(f,p,g,h){f.lastIndex=p;var y=f.exec(g);if(y&&h&&y[1]){var w=y[1].length;y.index+=w,y[0]=y[0].slice(w)}return y}function u(f,p,g,h,y,w){for(var P in g)if(!(!g.hasOwnProperty(P)||!g[P])){var k=g[P];k=Array.isArray(k)?k:[k];for(var T=0;T<k.length;++T){if(w&&w.cause==P+","+T)return;var R=k[T],S=R.inside,M=!!R.lookbehind,me=!!R.greedy,bt=R.alias;if(me&&!R.pattern.global){var kt=R.pattern.toString().match(/[imsuy]*$/)[0];R.pattern=RegExp(R.pattern.source,kt+"g")}for(var he=R.pattern||R,L=h.next,I=y;L!==p.tail&&!(w&&I>=w.reach);I+=L.value.length,L=L.next){var U=L.value;if(p.length>f.length)return;if(!(U instanceof a)){var Q=1,B;if(me){if(B=l(he,I,f,M),!B||B.index>=f.length)break;var X=B.index,_t=B.index+B[0].length,F=I;for(F+=L.value.length;X>=F;)L=L.next,F+=L.value.length;if(F-=L.value.length,I=F,L.value instanceof a)continue;for(var j=L;j!==p.tail&&(F<_t||typeof j.value=="string");j=j.next)Q++,F+=j.value.length;Q--,U=f.slice(I,F),B.index-=I}else if(B=l(he,0,U,M),!B)continue;var X=B.index,Y=B[0],ie=U.slice(0,X),ge=U.slice(X+Y.length),re=I+U.length;w&&re>w.reach&&(w.reach=re);var W=L.prev;ie&&(W=v(p,W,ie),I+=ie.length),b(p,W,Q);var wt=new a(P,S?s.tokenize(Y,S):Y,bt,Y);if(L=v(p,W,wt),ge&&v(p,L,ge),Q>1){var ce={cause:P+","+T,reach:re};u(f,p,g,L.prev,I,ce),w&&ce.reach>w.reach&&(w.reach=ce.reach)}}}}}}function d(){var f={value:null,prev:null,next:null},p={value:null,prev:f,next:null};f.next=p,this.head=f,this.tail=p,this.length=0}function v(f,p,g){var h=p.next,y={value:g,prev:p,next:h};return p.next=y,h.prev=y,f.length++,y}function b(f,p,g){for(var h=p.next,y=0;y<g&&h!==f.tail;y++)h=h.next;p.next=h,h.prev=p,f.length-=y}function m(f){for(var p=[],g=f.head.next;g!==f.tail;)p.push(g.value),g=g.next;return p}if(!t.document)return t.addEventListener&&(s.disableWorkerMessageHandler||t.addEventListener("message",function(f){var p=JSON.parse(f.data),g=p.language,h=p.code,y=p.immediateClose;t.postMessage(s.highlight(h,s.languages[g],g)),y&&t.close()},!1)),s;var C=s.util.currentScript();C&&(s.filename=C.src,C.hasAttribute("data-manual")&&(s.manual=!0));function x(){s.manual||s.highlightAll()}if(!s.manual){var E=document.readyState;E==="loading"||E==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",x):window.requestAnimationFrame?window.requestAnimationFrame(x):window.setTimeout(x,16)}return s}(e);i.exports&&(i.exports=n),typeof Ie<"u"&&(Ie.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(r,c){var o={};o["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[c]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};s["language-"+c]={pattern:/[\s\S]+/,inside:n.languages[c]};var a={};a[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:s},n.languages.insertBefore("markup","cdata",a)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(t,r){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:n.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(t){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var c=t.languages.markup;c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var t="Loading…",r=function(C,x){return"✖ Error "+C+" while fetching file: "+x},c="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",a="loading",l="loaded",u="failed",d="pre[data-src]:not(["+s+'="'+l+'"]):not(['+s+'="'+a+'"])';function v(C,x,E){var f=new XMLHttpRequest;f.open("GET",C,!0),f.onreadystatechange=function(){f.readyState==4&&(f.status<400&&f.responseText?x(f.responseText):f.status>=400?E(r(f.status,f.statusText)):E(c))},f.send(null)}function b(C){var x=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(C||"");if(x){var E=Number(x[1]),f=x[2],p=x[3];return f?p?[E,Number(p)]:[E,void 0]:[E,E]}}n.hooks.add("before-highlightall",function(C){C.selector+=", "+d}),n.hooks.add("before-sanity-check",function(C){var x=C.element;if(x.matches(d)){C.code="",x.setAttribute(s,a);var E=x.appendChild(document.createElement("CODE"));E.textContent=t;var f=x.getAttribute("data-src"),p=C.language;if(p==="none"){var g=(/\.(\w+)$/.exec(f)||[,"none"])[1];p=o[g]||g}n.util.setLanguage(E,p),n.util.setLanguage(x,p);var h=n.plugins.autoloader;h&&h.loadLanguages(p),v(f,function(y){x.setAttribute(s,l);var w=b(x.getAttribute("data-range"));if(w){var P=y.split(/\r\n?|\n/g),k=w[0],T=w[1]==null?P.length:w[1];k<0&&(k+=P.length),k=Math.max(0,Math.min(k-1,P.length)),T<0&&(T+=P.length),T=Math.max(0,Math.min(T,P.length)),y=P.slice(k,T).join(`
`),x.hasAttribute("data-start")||x.setAttribute("data-start",String(k+1))}E.textContent=y,n.highlightElement(E)},function(y){x.setAttribute(s,u),E.textContent=y})}}),n.plugins.fileHighlight={highlight:function(x){for(var E=(x||document).querySelectorAll(d),f=0,p;p=E[f++];)n.highlightElement(p)}};var m=!1;n.fileHighlight=function(){m||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),m=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(yt);var lr=yt.exports;Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;(function(i){var e=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return e.source});i.languages.cpp=i.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return e.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:e,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),i.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return n})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),i.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:i.languages.cpp}}}}),i.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),i.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:i.languages.extend("cpp",{})}}),i.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},i.languages.cpp["base-clause"])})(Prism);function ur(i,e,n){const t=document.createElement("div");t.className="prism-editor-wrapper";const r=document.createElement("div");r.className="prism-editor-line-numbers";const c=document.createElement("div");c.className="prism-editor-area";const o=document.createElement("textarea");o.className="prism-editor-textarea",o.value=e,o.spellcheck=!1,o.autocapitalize="off",o.autocomplete="off";const s=document.createElement("pre");s.className="prism-editor-highlight";const a=document.createElement("code");a.className="language-cpp",s.appendChild(a),c.appendChild(o),c.appendChild(s),t.appendChild(r),t.appendChild(c),i.appendChild(t);function l(){const v=o.value;a.textContent=v+`
`,lr.highlightElement(a);const b=v.split(`
`);r.innerHTML=b.map((m,C)=>`<span>${C+1}</span>`).join(""),n&&n(v)}function u(){s.scrollTop=o.scrollTop,s.scrollLeft=o.scrollLeft,r.scrollTop=o.scrollTop}function d(v){if(v.key==="Tab"){v.preventDefault();const b=o.selectionStart,m=o.selectionEnd,C=o.value;o.value=C.substring(0,b)+"  "+C.substring(m),o.selectionStart=o.selectionEnd=b+2,l()}}return o.addEventListener("input",l),o.addEventListener("scroll",u),o.addEventListener("keydown",d),l(),{getSource:()=>o.value,setSource:v=>{o.value=v,l()},destroy:()=>{o.removeEventListener("input",l),o.removeEventListener("scroll",u),o.removeEventListener("keydown",d),i.removeChild(t)}}}const xt=Object.freeze(Object.defineProperty({__proto__:null,createEditor:ur},Symbol.toStringTag,{value:"Module"})),dr=`void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = fragCoord / iResolution.xy;
    vec4 prev = texelFetch(iChannel0, ivec2(fragCoord), 0);

    // Animated pattern
    float t = iTime;
    vec3 col = 0.5 + 0.5 * cos(t + uv.xyx * 3.0 + vec3(0, 2, 4));

    // Trail effect
    col = mix(prev.rgb, col, 0.05);

    fragColor = vec4(col, 1.0);
}
`,pr=Object.freeze(Object.defineProperty({__proto__:null,default:dr},Symbol.toStringTag,{value:"Module"})),fr=`void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec4 data = texelFetch(iChannel0, ivec2(fragCoord), 0);
    fragColor = vec4(data.rgb, 1.0);
}
`,vr=Object.freeze(Object.defineProperty({__proto__:null,default:fr},Symbol.toStringTag,{value:"Module"})),mr=`void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = fragCoord / iResolution.xy;
    float t = iTime * 0.5;
    vec3 col = 0.5 + 0.5 * cos(t + uv.xyx + vec3(0, 2, 4));
    fragColor = vec4(col, 1.0);
}
`,hr=Object.freeze(Object.defineProperty({__proto__:null,default:mr},Symbol.toStringTag,{value:"Module"})),gr=`float EPS=1e-4;

float thick= 0.01;
int checks = 100;

vec3 BLACK = vec3(0.0, 0.0, 0.0);
vec3 WHITE = vec3(1.0, 1.0, 1.0);
vec3 Blue = vec3(0.,0.,1.);
vec3 Red = vec3(1.,0.,0.);
vec3 Purple=vec3(0.60,0.30,0.70); //purple 
vec3 Pink=vec3(0.80,0.350,0.450); //pink
vec3 Green=vec3(0.20,0.80,0.50); //green
vec3 Yellow=vec3(1.0,0.750,0.30); //orange

//colors for the circles
vec3 purple=vec3(0.70,0.40,0.90); //purple 
vec3 pink=vec3(01.0,0.450,0.550); //pink
vec3 yellow=vec3(1.0,01.0,0.30); //yellow
vec3 green=vec3(0.30,01.0,0.40); //green

// --- 1. CORE STRUCTURES & MATH ---

vec2 cmul(vec2 z, vec2 w) {
    return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

// Updated Struct: Supports Lines explicitly
struct Circle {
    vec2 center;     // Circle: (cx, cy). Line: Normal (nx, ny). normal points toward interior
    float curvature; // Circle: 1/r. Line: 0.0.
    float offset;    // Circle: 0.0. Line: w (where dot(n,p) = w).
};

// Unit vector helper
vec2 u(float a) {
    return vec2(cos(a), sin(a));
}

// --- 2. GEOMETRIC FUNCTIONS ---

// Invert a point 'z' through a Circle or reflect across a Line
vec2 invert(vec2 z, Circle C) {
    // Case: Line (Reflection)
    if (abs(C.curvature) < EPS) {
        // Formula: p' = p - 2 * (dot(n, p) - w) * n
        float distSigned = dot(z, C.center) - C.offset;
        return z - 2.0 * distSigned * C.center;
    }
    // Case: Circle (Inversion)
    vec2 difference = z - C.center;
    float rad = 1.0 / C.curvature;
    float mult = (rad * rad) / dot(difference, difference);
    return C.center + mult * difference;
}

// Check if a point is "inside" the shape
bool isInside(vec2 p, Circle c) {
    float k = c.curvature;
    
    // Case: Line (Half-plane check)
    if (abs(k) < EPS) {
        // We assume Normal points TOWARDS the interior
        //vec2 diff=c.offset*(c.center)-p;
        return dot(p, c.center) > c.offset; 
    }
    // Case: Standard Circle (Interior)
    else if (k > 0.0) {
        return length(p - c.center) < (1.0 / k);
    }
    // Case: Exterior Circle (Outside of a hole)
    else {
        return length(p - c.center) > abs(1.0 / k);
    }
}

// Distance to shape boundary
float distToCircle(vec2 p, Circle C) {
    // Case: Line
    if (abs(C.curvature) < EPS) {
        return (dot(p, C.center) - C.offset);
    }
    // Case: Circle
    float radius = 1.0 / C.curvature;
    return (length(p - C.center) - abs(radius));
}


// Check if a point is on the "boundary" (within a small epsilon)
bool isOnBoundary(vec2 p, Circle c, float thickness) {
    float dist = distToCircle(p, c);
    return -thickness < dist && dist < 0.;
}

Circle lineFromPoints(vec2 A, vec2 B) {
    vec2 t = normalize(B - A);        // Tangent
    vec2 n = vec2(-t.y, t.x);        // Normal
    float w = dot(n, A);             // Offset
    return Circle(n, 0.0, w);
}


// Construct a Circle/Line from 3 Points
Circle circleFromThreePoints(vec3 A, vec3 B, vec3 C) {
    float zA = A.z;
    float zB = B.z;
    float zC = C.z;
    
    //Case: Line
    if(zA==0.0){
        return lineFromPoints(B.xy, C.xy);
    }
    if(zB==0.0){
        return lineFromPoints(A.xy, C.xy);
    }
    if(zC==0.0){
        return lineFromPoints(A.xy, B.xy);
    }
    
    vec2 a = A.xy;
    vec2 b = B.xy;
    vec2 c = C.xy;

    vec2 ab = b - a;
    vec2 ac = c - a;
    float d = 2.0 * (ab.x * ac.y - ab.y * ac.x);

    if(abs(d)<EPS){
        return lineFromPoints(A.xy, B.xy);
    }

    // Case: Circle
    vec2 u = vec2(
        ac.y * dot(ab, ab) - ab.y * dot(ac, ac),
        ab.x * dot(ac, ac) - ac.x * dot(ab, ab)
    ) / d;
    vec2 center = a + u;
    float radius = length(u);
    
    return Circle(center, 1./radius, 0.0);
}

// Find tangent point between two shapes
vec3 getTangentPoint(Circle c1, Circle c2) {
    float k1 = c1.curvature;
    float k2 = c2.curvature;
    float epsilon = EPS;

    bool isLine1 = abs(k1) < EPS;
    bool isLine2 = abs(k2) < EPS;

    // Case: Two Lines (Parallel in packing -> Point at Infinity)
    if (isLine1 && isLine2) return vec3(0); // Simplified infinity

    // Case: Line and Circle
    // Tangency = CircleCenter - Radius * LineNormal
    if (isLine1) return vec3(c2.center + (c1.center / c2.curvature), 1.0);
    if (isLine2) return vec3(c1.center + (c2.center / c1.curvature), 1.0);

    // Case: Two Circles
    return vec3((k1 * c1.center + k2 * c2.center) / (k1 + k2), 1.0);
}


//helper function for descartes equation
bool checkDesc(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    return abs(2.*(a*a+b*b+c*c+d*d)-(a+b+c+d)*(a+b+c+d))<EPS;

}

//helper func for orient a line based on circle 
void orientLine( inout Circle line, Circle c){
    if(isInside(c.center,line)){
        line.center*=-1.;
        line.offset*=-1.;
    }   
}

// Helper: Swap for sorting
void swap(inout float a, inout float b, inout int idxA, inout int idxB) {
    if (a > b) {
        float t = a; 
        a = b; 
        b = t;
        int ti = idxA; 
        idxA = idxB; 
        idxB = ti;
    }
}

//orienting the dual circles
void dualOrient(inout Circle circ[4]){
    //finding zero curvatures if any
    vec4 k = vec4(circ[0].curvature, circ[1].curvature, circ[2].curvature, circ[3].curvature);
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;
    
    //no lines
    //checking desc equation
    if(zeros==0 && !checkDesc(k)) circ[idx.x].curvature= -circ[idx.x].curvature;
    //one line
    if(zeros>0){
        orientLine(circ[idx.x], circ[idx.w]);
        //second line if any
        if(zeros==2){
            orientLine(circ[idx.y],circ[idx.w]);
        }
    }
}

// --- 3. APOLLONIAN SOLVER ---

/**.
 * Returns mat4 where columns represent circles.
 * Format for Circle: vec4(curvature, k*x, k*y, q)
 * Format for Line:   vec4(0.0, normal.x, normal.y, offset)
 */
mat4 solveApollonianQuad(vec4 kInput) {
    vec4 k = kInput;
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;

    Circle c[4];
    ivec4 mapSortedToGeom; 

    // --- CASE 1: Two Lines (Strip Packing) ---
    if (zeros == 2) {
        // Line 1: Bottom Line at y = 0
        // Normal points UP (0, 1), Offset = 0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        // Use the first circle's curvature to determine the gap
        // Diameter = 2.0 / curvature
        float kCircle = (abs(k.z) > EPS) ? k.z : k.w;
        float gap = 2.0 / kCircle; 

        // Line 2: Top Line at y = gap
        // Normal points DOWN (0, -1)
        // Offset logic: dot(n, p) = w  ->  dot((0,-1), (0, gap)) = -gap
        c[1] = Circle(vec2(0.0, 1.0), 0.0, gap); 

        // Circles 3 & 4 (Placed in the gap)
        float k1 = k.z; 
        float k2 = k.w;
        
        // y = 1/k is the radius, effectively centering them in the gap
        c[2] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        c[3] = Circle(vec2(-2.0/k2, 1.0/k2), k2, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 2: One Line (Plane Packing) ---
    else if (zeros == 1) {
        // Line at y=0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        float k1 = k.y, k2 = k.z, k3 = k.w;
        c[1] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        
        float xc2 = 2.0 / sqrt(k1 * k2);
        c[2] = Circle(vec2(xc2, 1.0/k2), k2, 0.0);
        
        float xc3 = 2.0 / sqrt(k1 * k3);
        c[3] = Circle(vec2(xc3, 1.0/k3), k3, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 3: Standard (All Circles) ---
    else {
        float a, b, c_val, d;
        if (k.x < -EPS) {
             a = k.x; b = k.y; c_val = k.z; d = k.w;
             mapSortedToGeom = ivec4(3, 0, 1, 2); 
        } else {
             b = k.x; c_val = k.y; d = k.z; a = k.w;
             mapSortedToGeom = ivec4(0, 1, 2, 3); 
        }

        c[0] = Circle(vec2(0.0, 1.0/b), b, 0.0);
        float xc = 2.0 / sqrt(b * c_val);
        c[1] = Circle(vec2(xc, 1.0/c_val), c_val, 0.0);

        // Trilateration for D
        float rB = 1.0/b; float rC = 1.0/c_val; float rD = 1.0/d;
        float distB = rB + rD; float distC = rC + rD;
        vec2 posB = c[0].center; vec2 posC = c[1].center;
        float distCenters = distance(posB, posC);
        
        float x_local = (distB*distB - distC*distC + distCenters*distCenters) / (2.0 * distCenters);
        float y_local = sqrt(max(0.0, distB*distB - x_local*x_local));
        vec2 dir = (posC - posB) / distCenters;       
        vec2 normal = vec2(-dir.y, dir.x);            
        vec2 posD = posB + x_local * dir - y_local * normal;
        c[2] = Circle(posD, d, 0.0);
        
        // Descartes for A
        float sum_curv = a + b + c_val + d;
        vec2 s_kz = vec2(0.0);
        vec2 s_k2z = vec2(0.0);
        for(int i=0; i<3; i++) {
            s_kz  += c[i].curvature * c[i].center;
            s_k2z += (c[i].curvature * c[i].curvature) * c[i].center;
        }
        float denom = (a*a) - (0.5 * sum_curv * a);
        if (abs(denom) < 1e-9) denom = 1.0;
        vec2 posA = ((0.5 * sum_curv * s_kz) - s_k2z) / denom;
        c[3] = Circle(posA, a, 0.0);
    }

    // --- Output Construction ---
    mat4 result;
    for(int i=0; i<4; i++) {
        int geomIndex = mapSortedToGeom[i];
        int originalIndex = idx[i];
        
        Circle geom = c[geomIndex];
        float p = geom.curvature;
        vec4 col;
        
        if (abs(p) < EPS) {
            // LINE ENCODING: x=0, y=nx, z=ny, w=offset
            col = vec4(0.0, geom.center.x, geom.center.y, geom.offset);
        } else {
            // CIRCLE ENCODING: x=k, y=kx, z=ky, w=q
            float r = p * geom.center.x;
            float s = p * geom.center.y;
            float q = (r*r + s*s - 1.0) / p;
            col = vec4(p, r, s, q);
        }
        
        if (originalIndex == 0) result[0] = col;
        else if (originalIndex == 1) result[1] = col;
        else if (originalIndex == 2) result[2] = col;
        else if (originalIndex == 3) result[3] = col;
    }
    
    return result;
}

// Convert vec4 back to Geometric Circle
Circle toGeom(vec4 v) {
    // Line Case (Curvature v.x is 0)
    if (abs(v.x) < EPS) {
        // center = (v.y, v.z), curvature = 0, offset = v.w
        return Circle(vec2(v.y, v.z), 0.0, v.w);
    }
    // Circle Case
    return Circle(vec2(v.y/v.x, v.z/v.x), v.x, 0.0);
}

vec4 ptToQuad(vec2 p){
    float a= p.x;
    float b= p.y;
    return vec4(2.*b, 2.*(1.-b), 2.*(a*a+b*b-b), 2.*(1.+a*a+b*b-b+2.*a));
}
Circle[4] circQuad(vec4 quad){
    mat4 pack = solveApollonianQuad(quad);
    Circle cc0=  toGeom(pack[0]);
    Circle cc1=  toGeom(pack[1]);
    Circle cc2=  toGeom(pack[2]);
    Circle cc3=  toGeom(pack[3]);

    Circle[4] result = Circle[4](cc0, cc1, cc2, cc3);
    return result;
}

Circle[4] circDual(Circle[4] maincirc){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle dualCirc[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(dualCirc);

    return dualCirc;
}

vec3 packing(Circle[4] maincirc, vec2 p){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle circ[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(circ);
    
    vec3 color = vec3(0.8,0.8,0.8);
   
    //continually swapping through dual circles will eventually get you to one of the main
    //circles and once in a main circle color it.
    // Iterate inversions
    int i;
    for (i = 0; i < 100; i++) {
        if (isInside(p, cc1)) {
            color = pink;
            break;
        } else if (isInside(p, cc2)) {
            color = purple;
            break;
        } else if (isInside(p, cc3)) {
            color = yellow;
            break;
        } else if (isInside(p, cc0)) {
            color = green;
            break;
        }
        if (isInside(p, circ[0])) {
            p = invert(p, circ[0]);
        } else if (isInside(p, circ[1])) {
            p = invert(p, circ[1]);
        } else if (isInside(p, circ[2])) {
            p = invert(p, circ[2]);
        } else if (isInside(p, circ[3])) {
            p = invert(p, circ[3]);
        } 
    }
    return color;
}
`,Cr=Object.freeze(Object.defineProperty({__proto__:null,default:gr},Symbol.toStringTag,{value:"Module"})),yr=`vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * (105.50+10.5*iTime);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    float curv0 = 1.0;
    float phi = (sqrt(5.)+1.)/2.;
    float curv1 = phi - sqrt(phi);
    float curv2 = curv1 * curv1;
    float curv3 = curv2 * curv1;

    vec4 quad=vec4(curv0,curv1,curv2,curv3);
    
    Circle[4] mainCirc = circQuad(quad);

    color = packing(mainCirc, p);    
thick = 0.05;
if(isOnBoundary(p,mainCirc[0],thick)){
        color=BLACK;
    }
    if(isOnBoundary(p,mainCirc[1],thick)){
        color=BLACK;
    }
    if(isOnBoundary(p,mainCirc[2],thick)){
        color=BLACK;
    }
     if(isOnBoundary(p,mainCirc[3],thick)){
        color=BLACK;
    }
    

    fragColor = vec4(color, 1.0);
    
}

// void mainImage(out vec4 fragColor, in vec2 fragCoord)
// {
//     vec2 uv = fragCoord / iResolution.xy;
//     uv = uv - vec2(0.5, 0.5);
//     uv.x *= iResolution.x / iResolution.y;
//     vec2 p = uv * (10000.0 + 9990.0 * sin(iTime));
    
//     //curvatures of the packing
//     float curv0 = 1.0;
//     float phi = (sqrt(5.)+1.)/2.;
//     float curv1 = phi - sqrt(phi);
//     float curv2 = curv1 * curv1;
//     float curv3 = curv2 * curv1;
    
//     // Circles of the packing
//     float R0 = 1. / curv0;
//     float R1 = 1. / curv1;
//     float R2 = 1. / curv2;
//     float R3 = 1. / curv3;
//     float gamma = acos((R0*(R0+R1+R2)-R1*R2)/((R0+R1)*(R0+R2)));
//     float beta  = acos((R0*(R0+R1+R3)-R1*R3)/((R0+R1)*(R0+R3)));
//     Circle cc0 = Circle(vec2(0, 0), R0);
//     Circle cc1 = Circle(vec2(R0+R1, 0), R1);
//     Circle cc2 = Circle((R0+R2) * u(gamma), R2);
//     Circle cc3 = Circle((R0+R3) * u(-beta), R3);
    
//     //colors for the circles
//     vec3 cc0_color=vec3(0.70,0.40,0.90); //purple 
//     vec3 cc1_color=vec3(01.0,0.450,0.550); //pink
//     vec3 cc2_color=vec3(1.0,01.0,0.30); //yellow
//     vec3 cc3_color=vec3(0.30,01.0,0.40); //green
    
//     // Dual circles
//     vec2 t01 = touch(cc0, cc1); //tangency point bw cc0, cc1
//     vec2 t02 = touch(cc0, cc2); //tangency point bw cc0, cc2
//     vec2 t03 = touch(cc0, cc3); //tangency point bw cc0, cc3
//     vec2 t12 = touch(cc1, cc2); //tangency point bw cc1, cc2
//     vec2 t23 = touch(cc2, cc3); //tangency point bw cc2, cc3
//     vec2 t31 = touch(cc3, cc1); //tangency point bw cc3, cc1
//     Circle c0 = circum(t12, t23, t31);
//     Circle c1 = circum(t02, t23, t03);
//     Circle c2 = circum(t01, t03, t31);
//     Circle c3 = circum(t12, t02, t01);


//     vec3 color = vec3(1,1,1);
    
//     //continually swapping through dual circles will eventually get you to one of the main
//     //circles and once in a main circle color it.
//     // Iterate inversions
//     int i;
//     for (i = 0; i < 50; i++) {
//         if (isInside(p, cc1)) {
//             color = cc1_color;
//             break;
//         } else if (isInside(p, cc2)) {
//             color = cc2_color;
//             break;
//         } else if (isInside(p, cc3)) {
//             color = cc3_color;
//             break;
//         } else if (isInside(p, cc0)) {
//             color = cc0_color;
//             break;
//         }
//         if (isInside(p, c1)) {
//             p = invert(p, c1);
//         } else if (isInside(p, c2)) {
//             p = invert(p, c2);
//         } else if (isInside(p, c3)) {
//             p = invert(p, c3);
//         } else if (!isInside(p, c0)) {
//             p = invert(p, c0);
//         }
//     }
    
//     fragColor = vec4(color, 1.0);
// }
`,xr=Object.freeze(Object.defineProperty({__proto__:null,default:yr},Symbol.toStringTag,{value:"Module"})),br=`// Julia Set Viewer
// The Julia parameter 'c' is taken from the Mandelbrot view's mouse position.

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 0.5);
    vec3 d = vec3(0.8, 0.9, 0.3);
    return a + b * cos(6.28318 * (c * t + d));
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    // Map to complex plane: z in [-2, 2] x [-2, 2]
    vec2 uv = fragCoord / iResolution.xy;
    vec2 z = vec2(
        mix(-2.0, 2.0, uv.x),
        mix(-2.0, 2.0, uv.y)
    );

    // Get Julia parameter from Mandelbrot view's mouse position
    // Map Mandelbrot mouse coords to complex plane
    vec2 mandelbrotMouseUV = iMouse_mandelbrot.xy / iResolution_mandelbrot.xy;
    vec2 c = vec2(
        mix(-2.5, 1.0, mandelbrotMouseUV.x),
        mix(-1.5, 1.5, mandelbrotMouseUV.y)
    );

    // Default to an interesting Julia set if no mouse interaction yet
    // Use xy position (which retains last click) instead of z (which is only set during press)
    if (iMouse_mandelbrot.x == 0.0 && iMouse_mandelbrot.y == 0.0) {
        c = vec2(-0.7, 0.27015); // Classic Julia set
    }

    // Julia iteration: z = z^2 + c (c is fixed, z varies)
    int iter = 0;

    for (int i = 0; i < 500; i++) {
        if (i >= uMaxIter) break;
        if (dot(z, z) > 4.0) break;

        // z = z^2 + c
        z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
        iter++;
    }

    // Color based on escape iteration
    if (iter >= uMaxIter) {
        fragColor = vec4(0.0, 0.0, 0.0, 1.0); // Inside set
    } else {
        float t = float(iter) / float(uMaxIter);
        // Smooth coloring
        float log_zn = log(dot(z, z)) / 2.0;
        float nu = log(log_zn / log(2.0)) / log(2.0);
        t = (float(iter) + 1.0 - nu) / float(uMaxIter);
        fragColor = vec4(palette(t), 1.0);
    }
}

`,kr=Object.freeze(Object.defineProperty({__proto__:null,default:br},Symbol.toStringTag,{value:"Module"})),_r=`// Mandelbrot Set Viewer
// Click and drag to explore. Your click position becomes the Julia set parameter.

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.0, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    // Map to complex plane: x in [-2.5, 1], y in [-1.5, 1.5]
    vec2 uv = fragCoord / iResolution.xy;
    vec2 c = vec2(
        mix(-2.5, 1.0, uv.x),
        mix(-1.5, 1.5, uv.y)
    );

    // Mandelbrot iteration: z = z^2 + c, starting from z = 0
    vec2 z = vec2(0.0);
    int iter = 0;

    for (int i = 0; i < 500; i++) {
        if (i >= uMaxIter) break;
        if (dot(z, z) > 4.0) break;

        // z = z^2 + c
        z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
        iter++;
    }

    // Color based on escape iteration
    if (iter >= uMaxIter) {
        fragColor = vec4(0.0, 0.0, 0.0, 1.0); // Inside set
    } else {
        float t = float(iter) / float(uMaxIter);
        // Smooth coloring
        float log_zn = log(dot(z, z)) / 2.0;
        float nu = log(log_zn / log(2.0)) / log(2.0);
        t = (float(iter) + 1.0 - nu) / float(uMaxIter);
        fragColor = vec4(palette(t), 1.0);
    }

    // Show crosshair at current mouse position (the Julia parameter)
    vec2 mouseUV = iMouse_mandelbrot.xy / iResolution_mandelbrot.xy;
    vec2 mouseC = vec2(
        mix(-2.5, 1.0, mouseUV.x),
        mix(-1.5, 1.5, mouseUV.y)
    );

    float dist = length(c - mouseC);
    if (dist < 0.02) {
        fragColor = mix(fragColor, vec4(1.0), 0.5);
    }
}

`,wr=Object.freeze(Object.defineProperty({__proto__:null,default:_r},Symbol.toStringTag,{value:"Module"})),Er=`// =============================================
//  IHP Shader Workshop 2026
//  APOLLONIAN CIRCLE PACKING
//
//  Apollonian gasket via iterated circle
//  inversions. Specify three initial curvatures
//  and a sign choice. Packing is rendered by
//  folding each pixel into the fundamental domain.
// =============================================

// =============================================
//  YOUR CONFIGURATION
// =============================================

// Curvatures of three mutually tangent circles.
// Use 0.0 for a straight line, negative for exterior circles.
//   Try: (2, 2, 3), (3, 6, 7), (0, 1, 1), (0, 0, 1)
//full-plane ? (209*sqrt(3), -209*sqrt(3) + 366, -209*sqrt(3) + 422, -209*sqrt(3) + 1094)
const float K1 = 3.;
const float K2 = 15.;
const float K3 = 10.;

// Which solution of Descartes' equation for the fourth circle:
//   false = outer circle (- root, typically negative curvature)
//   true  = inner circle (+ root, smaller circle in the interstice)
const bool INNER = false;

// Camera: center point and zoom level
const vec2  CENTER = vec2(0.0, 1.0);  // world-space center of the view
const float ZOOM   = 4.5;             // half-width of view (smaller = zoomed in)

// =============================================
//  PARAMETERS
//
//  COLOR_0 — COLOR_3     — colors for the four initial circles
//  COLOR_BG              — background color (gasket dust)
//  FADE_RATE             — depth fade toward white (0 = none, 1 = max)
//  BORDER_THICKNESS      — circle outline width in world coords
//  BORDER_COLOR          — circle outline color
//  BORDER_FADE           — how much borders fade with depth
//  MAX_ITER              — maximum folding iterations
// =============================================

// Colors for each of the four initial circles (RGB).
const vec3 COLOR_0 = vec3(0.30, 1.00, 0.40);  // green  (k1)
const vec3 COLOR_1 = vec3(1.00, 0.45, 0.55);  // pink   (k2)
const vec3 COLOR_2 = vec3(0.70, 0.40, 0.90);  // purple (k3)
const vec3 COLOR_3 = vec3(1.00, 1.00, 0.30);  // yellow (k4, computed)

// Background color (the gasket dust)
const vec3 COLOR_BG = vec3(0.08);

// How quickly circles fade toward white with depth.
// 0.0 = no fade, 1.0 = maximum fade. Try 0.3 to 0.7.
const float FADE_RATE = 1.;

// Circle boundary lines
const float BORDER_THICKNESS = 0.003;  // in world coords
const vec3  BORDER_COLOR = vec3(0.0);  // black outlines
const float BORDER_FADE  = 0.6;        // how much borders fade with depth

// Maximum iterations
const int MAX_ITER = 100;

// =============================================
//  VISUALIZATION (nothing below needs editing)
// =============================================

const float EPS = 1e-4;


// Descartes' Theorem
// (k1+k2+k3+k4)^2 = 2(k1^2+k2^2+k3^2+k4^2)
// => k4 = k1+k2+k3 +/- 2*sqrt(k1*k2 + k2*k3 + k3*k1)

float descartesK4(float a, float b, float c, bool inner) {
    float disc = a * b + b * c + c * a;
    float s = a + b + c;
    float root = sqrt(max(0.0, disc));
    return inner ? s + 2.0 * root : s - 2.0 * root;
}


// Data Structures

struct Circle {
    vec2 center;
    float curvature;
    float offset;
};


// Geometric Operations

vec2 invert(vec2 z, Circle C) {
    if (abs(C.curvature) < EPS) {
        return z - 2.0 * (dot(z, C.center) - C.offset) * C.center;
    }
    vec2 d = z - C.center;
    float r = 1.0 / C.curvature;
    return C.center + (r * r / dot(d, d)) * d;
}

bool isInside(vec2 p, Circle c) {
    if (abs(c.curvature) < EPS) {
        return dot(p, c.center) > c.offset;
    }
    float dist = length(p - c.center);
    float r = 1.0 / c.curvature;
    return (c.curvature > 0.0) ? (dist < r) : (dist > abs(r));
}

// Unsigned distance to circle/line boundary
float distToBoundary(vec2 p, Circle C) {
    if (abs(C.curvature) < EPS) {
        return abs(dot(p, C.center) - C.offset);
    }
    return abs(length(p - C.center) - abs(1.0 / C.curvature));
}


// Circle Construction

Circle lineFromPoints(vec2 A, vec2 B) {
    vec2 t = normalize(B - A);
    vec2 n = vec2(-t.y, t.x);
    return Circle(n, 0.0, dot(n, A));
}

Circle circleFromThreePoints(vec3 A, vec3 B, vec3 C) {
    if (A.z < EPS) return lineFromPoints(B.xy, C.xy);
    if (B.z < EPS) return lineFromPoints(A.xy, C.xy);
    if (C.z < EPS) return lineFromPoints(A.xy, B.xy);

    vec2 a = A.xy, b = B.xy, c = C.xy;
    vec2 ab = b - a, ac = c - a;
    float d = 2.0 * (ab.x * ac.y - ab.y * ac.x);

    if (abs(d) < EPS) return lineFromPoints(a, b);

    vec2 u = vec2(
        ac.y * dot(ab, ab) - ab.y * dot(ac, ac),
        ab.x * dot(ac, ac) - ac.x * dot(ab, ab)
    ) / d;

    vec2 center = a + u;
    float radius = length(u);
    return Circle(center, 1.0 / radius, 0.0);
}


// Tangent Points

vec3 getTangentPoint(Circle c1, Circle c2) {
    bool line1 = abs(c1.curvature) < EPS;
    bool line2 = abs(c2.curvature) < EPS;

    if (line1 && line2) return vec3(0.0, 0.0, 0.0);
    if (line1) return vec3(c2.center + c1.center / c2.curvature, 1.0);
    if (line2) return vec3(c1.center + c2.center / c1.curvature, 1.0);

    float k1 = c1.curvature, k2 = c2.curvature;
    return vec3((k1 * c1.center + k2 * c2.center) / (k1 + k2), 1.0);
}


// Orientation Helpers

bool checkDescartes(vec4 q) {
    float s = q.x + q.y + q.z + q.w;
    return abs(2.0 * dot(q, q) - s * s) < EPS;
}

void orientLine(inout Circle line, Circle ref) {
    if (isInside(ref.center, line)) {
        line.center *= -1.0;
        line.offset *= -1.0;
    }
}

void sortSwap(inout float a, inout float b, inout int idxA, inout int idxB) {
    if (a > b) {
        float t = a; a = b; b = t;
        int ti = idxA; idxA = idxB; idxB = ti;
    }
}

void orientDuals(inout Circle circ[4]) {
    vec4 k = vec4(circ[0].curvature, circ[1].curvature,
                  circ[2].curvature, circ[3].curvature);
    ivec4 idx = ivec4(0, 1, 2, 3);

    sortSwap(k.x, k.y, idx.x, idx.y);
    sortSwap(k.z, k.w, idx.z, idx.w);
    sortSwap(k.x, k.z, idx.x, idx.z);
    sortSwap(k.y, k.w, idx.y, idx.w);
    sortSwap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if (abs(k.x) < EPS) zeros++;
    if (abs(k.y) < EPS) zeros++;

    if (zeros == 0) {
        if (!checkDescartes(k))
            circ[idx.x].curvature = -circ[idx.x].curvature;
    } else {
        orientLine(circ[idx.x], circ[idx.w]);
        if (zeros == 2)
            orientLine(circ[idx.y], circ[idx.w]);
    }
}


// Apollonian Solver

mat4 solveApollonianQuad(vec4 kInput) {
    vec4 k = kInput;
    ivec4 idx = ivec4(0, 1, 2, 3);

    sortSwap(k.x, k.y, idx.x, idx.y);
    sortSwap(k.z, k.w, idx.z, idx.w);
    sortSwap(k.x, k.z, idx.x, idx.z);
    sortSwap(k.y, k.w, idx.y, idx.w);
    sortSwap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if (abs(k.x) < EPS) zeros++;
    if (abs(k.y) < EPS) zeros++;

    Circle c[4];
    ivec4 mapToGeom;

    if (zeros == 2) {
        float kC = (abs(k.z) > EPS) ? k.z : k.w;
        float gap = 2.0 / kC;
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        c[1] = Circle(vec2(0.0,  1.0), 0.0, gap);
        c[2] = Circle(vec2(0.0, 1.0 / k.z), k.z, 0.0);
        c[3] = Circle(vec2(-2.0 / k.w, 1.0 / k.w), k.w, 0.0);
        mapToGeom = ivec4(0, 1, 2, 3);
    }
    else if (zeros == 1) {
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        c[1] = Circle(vec2(0.0, 1.0 / k.y), k.y, 0.0);
        c[2] = Circle(vec2(2.0 / sqrt(k.y * k.z), 1.0 / k.z), k.z, 0.0);
        c[3] = Circle(vec2(2.0 / sqrt(k.y * k.w), 1.0 / k.w), k.w, 0.0);
        mapToGeom = ivec4(0, 1, 2, 3);
    }
    else {
        float a, b, cv, d;
        if (k.x < -EPS) {
            a = k.x; b = k.y; cv = k.z; d = k.w;
            mapToGeom = ivec4(3, 0, 1, 2);
        } else {
            b = k.x; cv = k.y; d = k.z; a = k.w;
            mapToGeom = ivec4(0, 1, 2, 3);
        }

        c[0] = Circle(vec2(0.0, 1.0 / b), b, 0.0);
        float xc = 2.0 / sqrt(b * cv);
        c[1] = Circle(vec2(xc, 1.0 / cv), cv, 0.0);

        float rB = 1.0 / b, rC = 1.0 / cv, rD = 1.0 / d;
        float dB = rB + rD, dC = rC + rD;
        float dCenters = distance(c[0].center, c[1].center);

        float xLocal = (dB * dB - dC * dC + dCenters * dCenters) / (2.0 * dCenters);
        float yLocal = sqrt(max(0.0, dB * dB - xLocal * xLocal));
        vec2 dir = (c[1].center - c[0].center) / dCenters;
        vec2 nrm = vec2(-dir.y, dir.x);
        c[2] = Circle(c[0].center + xLocal * dir - yLocal * nrm, d, 0.0);

        float sumK = a + b + cv + d;
        vec2 sKz = vec2(0.0), sK2z = vec2(0.0);
        for (int i = 0; i < 3; i++) {
            sKz  += c[i].curvature * c[i].center;
            sK2z += (c[i].curvature * c[i].curvature) * c[i].center;
        }
        float denom = a * a - 0.5 * sumK * a;
        if (abs(denom) < 1e-9) denom = 1.0;
        c[3] = Circle((0.5 * sumK * sKz - sK2z) / denom, a, 0.0);
    }

    mat4 result;
    for (int i = 0; i < 4; i++) {
        int gi = mapToGeom[i];
        int oi = idx[i];
        Circle g = c[gi];
        vec4 col;

        if (abs(g.curvature) < EPS) {
            col = vec4(0.0, g.center.x, g.center.y, g.offset);
        } else {
            float kx = g.curvature * g.center.x;
            float ky = g.curvature * g.center.y;
            float q  = (kx * kx + ky * ky - 1.0) / g.curvature;
            col = vec4(g.curvature, kx, ky, q);
        }

        if      (oi == 0) result[0] = col;
        else if (oi == 1) result[1] = col;
        else if (oi == 2) result[2] = col;
        else              result[3] = col;
    }
    return result;
}

Circle decodeCircle(vec4 v) {
    if (abs(v.x) < EPS) {
        return Circle(vec2(v.y, v.z), 0.0, v.w);
    }
    return Circle(vec2(v.y / v.x, v.z / v.x), v.x, 0.0);
}

Circle[4] buildQuadruple(vec4 curvatures) {
    mat4 packed = solveApollonianQuad(curvatures);
    return Circle[4](
        decodeCircle(packed[0]),
        decodeCircle(packed[1]),
        decodeCircle(packed[2]),
        decodeCircle(packed[3])
    );
}


// Main Packing Renderer

vec4 renderPacking(Circle main[4], vec2 p) {

    vec3 t01 = getTangentPoint(main[0], main[1]);
    vec3 t02 = getTangentPoint(main[0], main[2]);
    vec3 t03 = getTangentPoint(main[0], main[3]);
    vec3 t12 = getTangentPoint(main[1], main[2]);
    vec3 t23 = getTangentPoint(main[2], main[3]);
    vec3 t31 = getTangentPoint(main[3], main[1]);

    Circle dual[4] = Circle[4](
        circleFromThreePoints(t12, t23, t31),
        circleFromThreePoints(t02, t23, t03),
        circleFromThreePoints(t01, t03, t31),
        circleFromThreePoints(t12, t02, t01)
    );
    orientDuals(dual);

    vec3 colors[4] = vec3[4](COLOR_0, COLOR_1, COLOR_2, COLOR_3);

    // Track the cumulative scale factor from inversions,
    // so circle borders have consistent screen-space thickness
    // at every depth. Circle inversion scales locally by r^2/|z-c|^2.
    float scale = 1.0;

    for (int i = 0; i < MAX_ITER; i++) {

        for (int j = 0; j < 4; j++) {
            if (isInside(p, main[j])) {

                // Base fill: color faded toward white by depth
                float fade = 1.0 - exp(-FADE_RATE * float(i));
                vec3 col = mix(colors[j], vec3(1.0), fade);

                // Border: unsigned distance to boundary, scaled so
                // deep circles get the same pixel-width lines
                float d = distToBoundary(p, main[j]);
                float threshold = BORDER_THICKNESS * scale;

                if (d < threshold) {
                    float t = smoothstep(0.0, threshold, d);
                    // Fade the border toward the fill at high depth
                    float bf = mix(1.0, BORDER_FADE, fade);
                    vec3 bord = mix(BORDER_COLOR, col, 1.0 - bf);
                    col = mix(bord, col, t);
                }

                return vec4(col, float(i));
            }
        }

        // Invert through whichever dual circle contains p
        bool moved = false;
        for (int j = 0; j < 4; j++) {
            if (isInside(p, dual[j])) {
                // Accumulate local scale factor
                if (abs(dual[j].curvature) > EPS) {
                    float r = 1.0 / dual[j].curvature;
                    vec2 diff = p - dual[j].center;
                    scale *= (r * r) / dot(diff, diff);
                }
                p = invert(p, dual[j]);
                moved = true;
                break;
            }
        }

        if (!moved) break;
    }

    return vec4(COLOR_BG, -1.0);
}

// Entry Point

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = (fragCoord - 0.5 * iResolution.xy) / iResolution.y * ZOOM + CENTER;

    // Compute the fourth curvature via Descartes' theorem
    float k4 = descartesK4(K1, K2, K3, INNER);
    vec4 curvatures = vec4(K1, K2, K3, k4);

    Circle[4] mainCircles = buildQuadruple(curvatures);
    vec4 result = renderPacking(mainCircles, uv);

    fragColor = vec4(result.xyz, 1.0);
}
`,Tr=Object.freeze(Object.defineProperty({__proto__:null,default:Er},Symbol.toStringTag,{value:"Module"})),Pr=`float EPS=1e-4;

float thick= 0.01;
int checks = 100;

vec3 BLACK = vec3(0.0, 0.0, 0.0);
vec3 WHITE = vec3(1.0, 1.0, 1.0);
vec3 Blue = vec3(0.,0.,1.);
vec3 Red = vec3(1.,0.,0.);
vec3 Purple=vec3(0.60,0.30,0.70); //purple 
vec3 Pink=vec3(0.80,0.350,0.450); //pink
vec3 Green=vec3(0.20,0.80,0.50); //green
vec3 Yellow=vec3(1.0,0.750,0.30); //orange

//colors for the circles
vec3 purple=vec3(0.70,0.40,0.90); //purple 
vec3 pink=vec3(01.0,0.450,0.550); //pink
vec3 yellow=vec3(1.0,01.0,0.30); //yellow
vec3 green=vec3(0.30,01.0,0.40); //green

// --- 1. CORE STRUCTURES & MATH ---

vec2 cmul(vec2 z, vec2 w) {
    return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

// Updated Struct: Supports Lines explicitly
struct Circle {
    vec2 center;     // Circle: (cx, cy). Line: Normal (nx, ny). normal points toward interior
    float curvature; // Circle: 1/r. Line: 0.0.
    float offset;    // Circle: 0.0. Line: w (where dot(n,p) = w).
};

// Unit vector helper
vec2 u(float a) {
    return vec2(cos(a), sin(a));
}

// --- 2. GEOMETRIC FUNCTIONS ---

// Invert a point 'z' through a Circle or reflect across a Line
vec2 invert(vec2 z, Circle C) {
    // Case: Line (Reflection)
    if (abs(C.curvature) < EPS) {
        // Formula: p' = p - 2 * (dot(n, p) - w) * n
        float distSigned = dot(z, C.center) - C.offset;
        return z - 2.0 * distSigned * C.center;
    }
    // Case: Circle (Inversion)
    vec2 difference = z - C.center;
    float rad = 1.0 / C.curvature;
    float mult = (rad * rad) / dot(difference, difference);
    return C.center + mult * difference;
}

// Check if a point is "inside" the shape
bool isInside(vec2 p, Circle c) {
    float k = c.curvature;
    
    // Case: Line (Half-plane check)
    if (abs(k) < EPS) {
        // We assume Normal points TOWARDS the interior
        //vec2 diff=c.offset*(c.center)-p;
        return dot(p, c.center) > c.offset; 
    }
    // Case: Standard Circle (Interior)
    else if (k > 0.0) {
        return length(p - c.center) < (1.0 / k);
    }
    // Case: Exterior Circle (Outside of a hole)
    else {
        return length(p - c.center) > abs(1.0 / k);
    }
}

// Distance to shape boundary
float distToCircle(vec2 p, Circle C) {
    // Case: Line
    if (abs(C.curvature) < EPS) {
        return (dot(p, C.center) - C.offset);
    }
    // Case: Circle
    float radius = 1.0 / C.curvature;
    return (length(p - C.center) - abs(radius));
}


// Check if a point is on the "boundary" (within a small epsilon)
bool isOnBoundary(vec2 p, Circle c, float thickness) {
    float dist = distToCircle(p, c);
    return -thickness < dist && dist < 0.;
}

Circle lineFromPoints(vec2 A, vec2 B) {
    vec2 t = normalize(B - A);        // Tangent
    vec2 n = vec2(-t.y, t.x);        // Normal
    float w = dot(n, A);             // Offset
    return Circle(n, 0.0, w);
}


// Construct a Circle/Line from 3 Points
Circle circleFromThreePoints(vec3 A, vec3 B, vec3 C) {
    float zA = A.z;
    float zB = B.z;
    float zC = C.z;
    
    //Case: Line
    if(zA==0.0){
        return lineFromPoints(B.xy, C.xy);
    }
    if(zB==0.0){
        return lineFromPoints(A.xy, C.xy);
    }
    if(zC==0.0){
        return lineFromPoints(A.xy, B.xy);
    }
    
    vec2 a = A.xy;
    vec2 b = B.xy;
    vec2 c = C.xy;

    vec2 ab = b - a;
    vec2 ac = c - a;
    float d = 2.0 * (ab.x * ac.y - ab.y * ac.x);

    if(abs(d)<EPS){
        return lineFromPoints(A.xy, B.xy);
    }

    // Case: Circle
    vec2 u = vec2(
        ac.y * dot(ab, ab) - ab.y * dot(ac, ac),
        ab.x * dot(ac, ac) - ac.x * dot(ab, ab)
    ) / d;
    vec2 center = a + u;
    float radius = length(u);
    
    return Circle(center, 1./radius, 0.0);
}

// Find tangent point between two shapes
vec3 getTangentPoint(Circle c1, Circle c2) {
    float k1 = c1.curvature;
    float k2 = c2.curvature;
    float epsilon = EPS;

    bool isLine1 = abs(k1) < EPS;
    bool isLine2 = abs(k2) < EPS;

    // Case: Two Lines (Parallel in packing -> Point at Infinity)
    if (isLine1 && isLine2) return vec3(0); // Simplified infinity

    // Case: Line and Circle
    // Tangency = CircleCenter - Radius * LineNormal
    if (isLine1) return vec3(c2.center + (c1.center / c2.curvature), 1.0);
    if (isLine2) return vec3(c1.center + (c2.center / c1.curvature), 1.0);

    // Case: Two Circles
    return vec3((k1 * c1.center + k2 * c2.center) / (k1 + k2), 1.0);
}


//helper function for descartes equation
bool checkDesc(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    return abs(2.*(a*a+b*b+c*c+d*d)-(a+b+c+d)*(a+b+c+d))<EPS;

}

//helper func for orient a line based on circle 
void orientLine( inout Circle line, Circle c){
    if(isInside(c.center,line)){
        line.center*=-1.;
        line.offset*=-1.;
    }   
}

// Helper: Swap for sorting
void swap(inout float a, inout float b, inout int idxA, inout int idxB) {
    if (a > b) {
        float t = a; 
        a = b; 
        b = t;
        int ti = idxA; 
        idxA = idxB; 
        idxB = ti;
    }
}

//orienting the dual circles
void dualOrient(inout Circle circ[4]){
    //finding zero curvatures if any
    vec4 k = vec4(circ[0].curvature, circ[1].curvature, circ[2].curvature, circ[3].curvature);
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;
    
    //no lines
    //checking desc equation
    if(zeros==0 && !checkDesc(k)) circ[idx.x].curvature= -circ[idx.x].curvature;
    //one line
    if(zeros>0){
        orientLine(circ[idx.x], circ[idx.w]);
        //second line if any
        if(zeros==2){
            orientLine(circ[idx.y],circ[idx.w]);
        }
    }
}

// --- 3. APOLLONIAN SOLVER ---

/**.
 * Returns mat4 where columns represent circles.
 * Format for Circle: vec4(curvature, k*x, k*y, q)
 * Format for Line:   vec4(0.0, normal.x, normal.y, offset)
 */
mat4 solveApollonianQuad(vec4 kInput) {
    vec4 k = kInput;
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;

    Circle c[4];
    ivec4 mapSortedToGeom; 

    // --- CASE 1: Two Lines (Strip Packing) ---
    if (zeros == 2) {
        // Line 1: Bottom Line at y = 0
        // Normal points UP (0, 1), Offset = 0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        // Use the first circle's curvature to determine the gap
        // Diameter = 2.0 / curvature
        float kCircle = (abs(k.z) > EPS) ? k.z : k.w;
        float gap = 2.0 / kCircle; 

        // Line 2: Top Line at y = gap
        // Normal points DOWN (0, -1)
        // Offset logic: dot(n, p) = w  ->  dot((0,-1), (0, gap)) = -gap
        c[1] = Circle(vec2(0.0, 1.0), 0.0, gap); 

        // Circles 3 & 4 (Placed in the gap)
        float k1 = k.z; 
        float k2 = k.w;
        
        // y = 1/k is the radius, effectively centering them in the gap
        c[2] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        c[3] = Circle(vec2(-2.0/k2, 1.0/k2), k2, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 2: One Line (Plane Packing) ---
    else if (zeros == 1) {
        // Line at y=0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        float k1 = k.y, k2 = k.z, k3 = k.w;
        c[1] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        
        float xc2 = 2.0 / sqrt(k1 * k2);
        c[2] = Circle(vec2(xc2, 1.0/k2), k2, 0.0);
        
        float xc3 = 2.0 / sqrt(k1 * k3);
        c[3] = Circle(vec2(xc3, 1.0/k3), k3, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 3: Standard (All Circles) ---
    else {
        float a, b, c_val, d;
        if (k.x < -EPS) {
             a = k.x; b = k.y; c_val = k.z; d = k.w;
             mapSortedToGeom = ivec4(3, 0, 1, 2); 
        } else {
             b = k.x; c_val = k.y; d = k.z; a = k.w;
             mapSortedToGeom = ivec4(0, 1, 2, 3); 
        }

        c[0] = Circle(vec2(0.0, 1.0/b), b, 0.0);
        float xc = 2.0 / sqrt(b * c_val);
        c[1] = Circle(vec2(xc, 1.0/c_val), c_val, 0.0);

        // Trilateration for D
        float rB = 1.0/b; float rC = 1.0/c_val; float rD = 1.0/d;
        float distB = rB + rD; float distC = rC + rD;
        vec2 posB = c[0].center; vec2 posC = c[1].center;
        float distCenters = distance(posB, posC);
        
        float x_local = (distB*distB - distC*distC + distCenters*distCenters) / (2.0 * distCenters);
        float y_local = sqrt(max(0.0, distB*distB - x_local*x_local));
        vec2 dir = (posC - posB) / distCenters;       
        vec2 normal = vec2(-dir.y, dir.x);            
        vec2 posD = posB + x_local * dir - y_local * normal;
        c[2] = Circle(posD, d, 0.0);
        
        // Descartes for A
        float sum_curv = a + b + c_val + d;
        vec2 s_kz = vec2(0.0);
        vec2 s_k2z = vec2(0.0);
        for(int i=0; i<3; i++) {
            s_kz  += c[i].curvature * c[i].center;
            s_k2z += (c[i].curvature * c[i].curvature) * c[i].center;
        }
        float denom = (a*a) - (0.5 * sum_curv * a);
        if (abs(denom) < 1e-9) denom = 1.0;
        vec2 posA = ((0.5 * sum_curv * s_kz) - s_k2z) / denom;
        c[3] = Circle(posA, a, 0.0);
    }

    // --- Output Construction ---
    mat4 result;
    for(int i=0; i<4; i++) {
        int geomIndex = mapSortedToGeom[i];
        int originalIndex = idx[i];
        
        Circle geom = c[geomIndex];
        float p = geom.curvature;
        vec4 col;
        
        if (abs(p) < EPS) {
            // LINE ENCODING: x=0, y=nx, z=ny, w=offset
            col = vec4(0.0, geom.center.x, geom.center.y, geom.offset);
        } else {
            // CIRCLE ENCODING: x=k, y=kx, z=ky, w=q
            float r = p * geom.center.x;
            float s = p * geom.center.y;
            float q = (r*r + s*s - 1.0) / p;
            col = vec4(p, r, s, q);
        }
        
        if (originalIndex == 0) result[0] = col;
        else if (originalIndex == 1) result[1] = col;
        else if (originalIndex == 2) result[2] = col;
        else if (originalIndex == 3) result[3] = col;
    }
    
    return result;
}

// Convert vec4 back to Geometric Circle
Circle toGeom(vec4 v) {
    // Line Case (Curvature v.x is 0)
    if (abs(v.x) < EPS) {
        // center = (v.y, v.z), curvature = 0, offset = v.w
        return Circle(vec2(v.y, v.z), 0.0, v.w);
    }
    // Circle Case
    return Circle(vec2(v.y/v.x, v.z/v.x), v.x, 0.0);
}

vec4 ptToQuad(vec2 p){
    float a= p.x;
    float b= p.y;
    return vec4(2.*b, 2.*(1.-b), 2.*(a*a+b*b-b), 2.*(1.+a*a+b*b-b+2.*a));
}
Circle[4] circQuad(vec4 quad){
    mat4 pack = solveApollonianQuad(quad);
    Circle cc0=  toGeom(pack[0]);
    Circle cc1=  toGeom(pack[1]);
    Circle cc2=  toGeom(pack[2]);
    Circle cc3=  toGeom(pack[3]);

    Circle[4] result = Circle[4](cc0, cc1, cc2, cc3);
    return result;
}

Circle[4] circDual(Circle[4] maincirc){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle dualCirc[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(dualCirc);

    return dualCirc;
}

vec3 packing(Circle[4] maincirc, vec2 p){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle circ[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(circ);
    
    vec3 color = vec3(0.8,0.8,0.8);
   
    //continually swapping through dual circles will eventually get you to one of the main
    //circles and once in a main circle color it.
    // Iterate inversions
    int i;
    for (i = 0; i < 100; i++) {
        if (isInside(p, cc1)) {
            color = pink;
            break;
        } else if (isInside(p, cc2)) {
            color = purple;
            break;
        } else if (isInside(p, cc3)) {
            color = yellow;
            break;
        } else if (isInside(p, cc0)) {
            color = green;
            break;
        }
        if (isInside(p, circ[0])) {
            p = invert(p, circ[0]);
        } else if (isInside(p, circ[1])) {
            p = invert(p, circ[1]);
        } else if (isInside(p, circ[2])) {
            p = invert(p, circ[2]);
        } else if (isInside(p, circ[3])) {
            p = invert(p, circ[3]);
        } 
    }
    return color;
}
`,Sr=Object.freeze(Object.defineProperty({__proto__:null,default:Pr},Symbol.toStringTag,{value:"Module"})),Rr=`
//find fourth curvature 
float findCurv4(float k1, float k2, float k3, bool bigger) {
    if(bigger){
        return k1 + k2 + k3 + 2.0 * sqrt(k1 * k2 + k2 * k3 + k3 * k1);
    }
    else{
        return k1 + k2 + k3 - 2.0 * sqrt(k1 * k2 + k2 * k3 + k3 * k1);
    }
    
}

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}
vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 5.50 / u_zoom + u_pan;
}


// float curv0 = 1.0;
//     float phi = (sqrt(5.)+1.)/2.;
//     float curv1 = phi - sqrt(phi);
//     float curv2 = curv1 * curv1;
//     float curv3 = curv2 * curv1;

//     vec4 quad=vec4(0.,1.,2.,(1.+sqrt(2.))*(1.+sqrt(2.)));
//     // quad = vec4(0.,0.,1.,1.);
//     // quad = vec4(0.,1.,1.,4.);
//     // quad=vec4(-1.,2.,2.,3.);
//     // quad=vec4(-2.,3.,6.,7.);
//     quad = vec4(curv0,curv1,curv2,curv3);
//     quad= vec4(12.,6.,19.-3.*sqrt(37.),19.+3.*sqrt(37.));
bool BIG=true;
float K1 =12.;
float K2 =6.;
float K3 =19.-3.*sqrt(37.);

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    float K4=findCurv4(K1,K2,K3,BIG);
    //float K4 =19.+3.*sqrt(37.);

    vec4 quad=vec4(K1,K2,K3,K4);

    

    Circle[4] mainCirc = circQuad(quad);

    color = packing(mainCirc, p);    

    float t = thick / u_zoom;
    if(isOnBoundary(p,mainCirc[0],t)){
        color=BLACK;
    }
    if(isOnBoundary(p,mainCirc[1],t)){
        color=BLACK;
    }
    if(isOnBoundary(p,mainCirc[2],t)){
        color=BLACK;
    }
    if(isOnBoundary(p,mainCirc[3],t)){
        color=BLACK;
    }
    

    fragColor = vec4(color, 1.0);
    
}


    

    // Circle cc0 = mainCirc[0];
    // Circle cc1 = mainCirc[1];
    // Circle cc2 = mainCirc[2];
    // Circle cc3 = mainCirc[3];
    
    
    // // Dual circles
    // vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    // vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    // vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    // vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    // vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    // vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // // --- Dual circles construction ---
    // Circle c0 = circleFromThreePoints(t12, t23, t31);
    // Circle c1 = circleFromThreePoints(t02, t23, t03);
    // Circle c2 = circleFromThreePoints(t01, t03, t31);
    // Circle c3 = circleFromThreePoints(t12, t02, t01);

    // if (length(p - t01.xy) < 0.05) {
    //     color = vec3(1.0, 0.0, 0.0);
    // }
    // if (length(p - t02.xy) < 0.05) {
    //     color = vec3(1.0, 0.0, 0.0);
    // }
    // if (length(p - t03.xy) < 0.05) {
    //     color = vec3(1.0, 0.0, 0.0);
    // }
    // if (length(p - t12.xy) < 0.05) {
    //     color = vec3(1.0, 0.0, 0.0);
    // }
    // if (length(p - t23.xy) < 0.05) {
    //     color = vec3(1.0, 0.0, 0.0);
    // }
    // if (length(p - t31.xy) < 0.05) {
    //     color = vec3(1.0, 0.0, 0.0);
    // }

    
    // Circle circ[4] = Circle[4]( c0,c1,c2,c3);
    // //orient duals 
    
    // dualOrient(circ);

    // if(isInside(p,circ[0])){
    //     color=Pink;
    // }
    // if(isInside(p,circ[1])){
    //     color=Purple;
    // }
    // if(isInside(p,circ[2])){
    //     color=Yellow;
    // }
    //  if(isInside(p,circ[3])){
    //     color=Green;
    // }
`,zr=Object.freeze(Object.defineProperty({__proto__:null,default:Rr},Symbol.toStringTag,{value:"Module"})),Lr=`float EPS=1e-4;

float thick= 0.01;
int checks = 100;

vec3 BLACK = vec3(0.0, 0.0, 0.0);
vec3 WHITE = vec3(1.0, 1.0, 1.0);
vec3 Blue = vec3(0.,0.,1.);
vec3 Red = vec3(1.,0.,0.);
vec3 Purple=vec3(0.60,0.30,0.70); //purple 
vec3 Pink=vec3(0.80,0.350,0.450); //pink
vec3 Green=vec3(0.20,0.80,0.50); //green
vec3 Yellow=vec3(1.0,0.750,0.30); //orange

//colors for the circles
//vec3 purple=vec3(0.1176,0.533,0.898); //purple 
// vec3 purple=vec3(30./255.,136./255.,229./255.);
// vec3 pink=vec3(0.8470,0.10588,0.37647); //pink
// vec3 yellow=vec3(1.0,0.75686,0.0275); //yellow
// vec3 green=vec3(0,0.30196,0.25); //green

//colors for the cirqcles
vec3 purple=vec3(0.70,0.40,0.90); //purple 
vec3 pink=vec3(01.0,0.450,0.550); //pink
vec3 yellow=vec3(1.0,01.0,0.30); //yellow
vec3 green=vec3(76./255.,255./255.,102./255.); //green

// --- 1. CORE STRUCTURES & MATH ---

vec2 cmul(vec2 z, vec2 w) {
    return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

// Updated Struct: Supports Lines explicitly
struct Circle {
    vec2 center;     // Circle: (cx, cy). Line: Normal (nx, ny). normal points toward interior
    float curvature; // Circle: 1/r. Line: 0.0.
    float offset;    // Circle: 0.0. Line: w (where dot(n,p) = w).
};

// Unit vector helper
vec2 u(float a) {
    return vec2(cos(a), sin(a));
}

// --- 2. GEOMETRIC FUNCTIONS ---

// Invert a point 'z' through a Circle or reflect across a Line
vec2 invert(vec2 z, Circle C) {
    // Case: Line (Reflection)
    if (abs(C.curvature) < EPS) {
        // Formula: p' = p - 2 * (dot(n, p) - w) * n
        float distSigned = dot(z, C.center) - C.offset;
        return z - 2.0 * distSigned * C.center;
    }
    // Case: Circle (Inversion)
    vec2 difference = z - C.center;
    float rad = 1.0 / C.curvature;
    float mult = (rad * rad) / dot(difference, difference);
    return C.center + mult * difference;
}

// Check if a point is "inside" the shape
bool isInside(vec2 p, Circle c) {
    float k = c.curvature;
    
    // Case: Line (Half-plane check)
    if (abs(k) < EPS) {
        // We assume Normal points TOWARDS the interior
        //vec2 diff=c.offset*(c.center)-p;
        return dot(p, c.center) > c.offset; 
    }
    // Case: Standard Circle (Interior)
    else if (k > 0.0) {
        return length(p - c.center) < (1.0 / k);
    }
    // Case: Exterior Circle (Outside of a hole)
    else {
        return length(p - c.center) > abs(1.0 / k);
    }
}

// Distance to shape boundary
float distToCircle(vec2 p, Circle C) {
    // Case: Line
    if (abs(C.curvature) < EPS) {
        return (dot(p, C.center) - C.offset);
    }
    // Case: Circle
    float radius = 1.0 / C.curvature;
    return (length(p - C.center) - abs(radius));
}


// Check if a point is on the "boundary" (within a small epsilon)
bool isOnBoundary(vec2 p, Circle c, float thickness) {
    float dist = distToCircle(p, c);
    return -thickness < dist && dist < 0.;
}

Circle lineFromPoints(vec2 A, vec2 B) {
    vec2 t = normalize(B - A);        // Tangent
    vec2 n = vec2(-t.y, t.x);        // Normal
    float w = dot(n, A);             // Offset
    return Circle(n, 0.0, w);
}


// Construct a Circle/Line from 3 Points
Circle circleFromThreePoints(vec3 A, vec3 B, vec3 C) {
    float zA = A.z;
    float zB = B.z;
    float zC = C.z;
    
    //Case: Line
    if(zA==0.0){
        return lineFromPoints(B.xy, C.xy);
    }
    if(zB==0.0){
        return lineFromPoints(A.xy, C.xy);
    }
    if(zC==0.0){
        return lineFromPoints(A.xy, B.xy);
    }
    
    vec2 a = A.xy;
    vec2 b = B.xy;
    vec2 c = C.xy;

    vec2 ab = b - a;
    vec2 ac = c - a;
    float d = 2.0 * (ab.x * ac.y - ab.y * ac.x);

    if(abs(d)<EPS){
        return lineFromPoints(A.xy, B.xy);
    }

    // Case: Circle
    vec2 u = vec2(
        ac.y * dot(ab, ab) - ab.y * dot(ac, ac),
        ab.x * dot(ac, ac) - ac.x * dot(ab, ab)
    ) / d;
    vec2 center = a + u;
    float radius = length(u);
    
    return Circle(center, 1./radius, 0.0);
}

// Find tangent point between two shapes
vec3 getTangentPoint(Circle c1, Circle c2) {
    float k1 = c1.curvature;
    float k2 = c2.curvature;
    float epsilon = EPS;

    bool isLine1 = abs(k1) < EPS;
    bool isLine2 = abs(k2) < EPS;

    // Case: Two Lines (Parallel in packing -> Point at Infinity)
    if (isLine1 && isLine2) return vec3(0); // Simplified infinity

    // Case: Line and Circle
    // Tangency = CircleCenter - Radius * LineNormal
    if (isLine1) return vec3(c2.center + (c1.center / c2.curvature), 1.0);
    if (isLine2) return vec3(c1.center + (c2.center / c1.curvature), 1.0);

    // Case: Two Circles
    return vec3((k1 * c1.center + k2 * c2.center) / (k1 + k2), 1.0);
}


//helper function for descartes equation
bool checkDesc(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    return abs(2.*(a*a+b*b+c*c+d*d)-(a+b+c+d)*(a+b+c+d))<EPS;

}

//helper func for orient a line based on circle 
void orientLine( inout Circle line, Circle c){
    if(isInside(c.center,line)){
        line.center*=-1.;
        line.offset*=-1.;
    }   
}

// Helper: Swap for sorting
void swap(inout float a, inout float b, inout int idxA, inout int idxB) {
    if (a > b) {
        float t = a; 
        a = b; 
        b = t;
        int ti = idxA; 
        idxA = idxB; 
        idxB = ti;
    }
}

//orienting the dual circles
void dualOrient(inout Circle circ[4]){
    //finding zero curvatures if any
    vec4 k = vec4(circ[0].curvature, circ[1].curvature, circ[2].curvature, circ[3].curvature);
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;
    
    //no lines
    //checking desc equation
    if(zeros==0 && !checkDesc(k)) circ[idx.x].curvature= -circ[idx.x].curvature;
    //one line
    if(zeros>0){
        orientLine(circ[idx.x], circ[idx.w]);
        //second line if any
        if(zeros==2){
            orientLine(circ[idx.y],circ[idx.w]);
        }
    }
}

// --- 3. APOLLONIAN SOLVER ---

/**.
 * Returns mat4 where columns represent circles.
 * Format for Circle: vec4(curvature, k*x, k*y, q)
 * Format for Line:   vec4(0.0, normal.x, normal.y, offset)
 */
mat4 solveApollonianQuad(vec4 kInput) {
    vec4 k = kInput;
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;

    Circle c[4];
    ivec4 mapSortedToGeom; 

    // --- CASE 1: Two Lines (Strip Packing) ---
    if (zeros == 2) {
        // Line 1: Bottom Line at y = 0
        // Normal points UP (0, 1), Offset = 0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        // Use the first circle's curvature to determine the gap
        // Diameter = 2.0 / curvature
        float kCircle = (abs(k.z) > EPS) ? k.z : k.w;
        float gap = 2.0 / kCircle; 

        // Line 2: Top Line at y = gap
        // Normal points DOWN (0, -1)
        // Offset logic: dot(n, p) = w  ->  dot((0,-1), (0, gap)) = -gap
        c[1] = Circle(vec2(0.0, 1.0), 0.0, gap); 

        // Circles 3 & 4 (Placed in the gap)
        float k1 = k.z; 
        float k2 = k.w;
        
        // y = 1/k is the radius, effectively centering them in the gap
        c[2] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        c[3] = Circle(vec2(-2.0/k2, 1.0/k2), k2, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 2: One Line (Plane Packing) ---
    else if (zeros == 1) {
        // Line at y=0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        float k1 = k.y, k2 = k.z, k3 = k.w;
        c[1] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        
        float xc2 = 2.0 / sqrt(k1 * k2);
        c[2] = Circle(vec2(xc2, 1.0/k2), k2, 0.0);
        
        float xc3 = 2.0 / sqrt(k1 * k3);
        c[3] = Circle(vec2(xc3, 1.0/k3), k3, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 3: Standard (All Circles) ---
    else {
        float a, b, c_val, d;
        if (k.x < -EPS) {
             a = k.x; b = k.y; c_val = k.z; d = k.w;
             mapSortedToGeom = ivec4(3, 0, 1, 2); 
        } else {
             b = k.x; c_val = k.y; d = k.z; a = k.w;
             mapSortedToGeom = ivec4(0, 1, 2, 3); 
        }

        c[0] = Circle(vec2(0.0, 1.0/b), b, 0.0);
        float xc = 2.0 / sqrt(b * c_val);
        c[1] = Circle(vec2(xc, 1.0/c_val), c_val, 0.0);

        // Trilateration for D
        float rB = 1.0/b; float rC = 1.0/c_val; float rD = 1.0/d;
        float distB = rB + rD; float distC = rC + rD;
        vec2 posB = c[0].center; vec2 posC = c[1].center;
        float distCenters = distance(posB, posC);
        
        float x_local = (distB*distB - distC*distC + distCenters*distCenters) / (2.0 * distCenters);
        float y_local = sqrt(max(0.0, distB*distB - x_local*x_local));
        vec2 dir = (posC - posB) / distCenters;       
        vec2 normal = vec2(-dir.y, dir.x);            
        vec2 posD = posB + x_local * dir - y_local * normal;
        c[2] = Circle(posD, d, 0.0);
        
        // Descartes for A
        float sum_curv = a + b + c_val + d;
        vec2 s_kz = vec2(0.0);
        vec2 s_k2z = vec2(0.0);
        for(int i=0; i<3; i++) {
            s_kz  += c[i].curvature * c[i].center;
            s_k2z += (c[i].curvature * c[i].curvature) * c[i].center;
        }
        float denom = (a*a) - (0.5 * sum_curv * a);
        if (abs(denom) < 1e-9) denom = 1.0;
        vec2 posA = ((0.5 * sum_curv * s_kz) - s_k2z) / denom;
        c[3] = Circle(posA, a, 0.0);
    }

    // --- Output Construction ---
    mat4 result;
    for(int i=0; i<4; i++) {
        int geomIndex = mapSortedToGeom[i];
        int originalIndex = idx[i];
        
        Circle geom = c[geomIndex];
        float p = geom.curvature;
        vec4 col;
        
        if (abs(p) < EPS) {
            // LINE ENCODING: x=0, y=nx, z=ny, w=offset
            col = vec4(0.0, geom.center.x, geom.center.y, geom.offset);
        } else {
            // CIRCLE ENCODING: x=k, y=kx, z=ky, w=q
            float r = p * geom.center.x;
            float s = p * geom.center.y;
            float q = (r*r + s*s - 1.0) / p;
            col = vec4(p, r, s, q);
        }
        //result[geomIndex]=col;
        result[originalIndex]=col;
    }
    
    return result;
}

// Convert vec4 back to Geometric Circle
Circle toGeom(vec4 v) {
    // Line Case (Curvature v.x is 0)
    if (abs(v.x) < EPS) {
        // center = (v.y, v.z), curvature = 0, offset = v.w
        return Circle(vec2(v.y, v.z), 0.0, v.w);
    }
    // Circle Case
    return Circle(vec2(v.y/v.x, v.z/v.x), v.x, 0.0);
}

vec4 ptToQuad(vec2 p){
    float a= p.x;
    float b= p.y;
    return vec4(2.*b, 2.*(1.-b), 2.*(a*a+b*b-b), 2.*(1.+a*a+b*b-b+2.*a));
}
Circle[4] circQuad(vec4 quad){
    mat4 pack = solveApollonianQuad(quad);
    Circle cc0=  toGeom(pack[0]);
    Circle cc1=  toGeom(pack[1]);
    Circle cc2=  toGeom(pack[2]);
    Circle cc3=  toGeom(pack[3]);

    Circle[4] result = Circle[4](cc0, cc1, cc2, cc3);
    return result;
}

Circle[4] circDual(Circle[4] maincirc){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle dualCirc[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(dualCirc);

    return dualCirc;
}

vec3 packing(Circle[4] maincirc, vec2 p){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle circ[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(circ);
    
    vec3 color = vec3(0.8,0.8,0.8);
   
    //continually swapping through dual circles will eventually get you to one of the main
    //circles and once in a main circle color it.
    // Iterate inversions
    int i;
    for (i = 0; i < 100; i++) {
        if (isInside(p, cc1)) {
            color = pink;
            break;
        } else if (isInside(p, cc2)) {
            color = purple;
            break;
        } else if (isInside(p, cc3)) {
            color = yellow;
            break;
        } else if (isInside(p, cc0)) {
            color = green;
            break;
        }
        if (isInside(p, circ[0])) {
            p = invert(p, circ[0]);
        } else if (isInside(p, circ[1])) {
            p = invert(p, circ[1]);
        } else if (isInside(p, circ[2])) {
            p = invert(p, circ[2]);
        } else if (isInside(p, circ[3])) {
            p = invert(p, circ[3]);
        } 
    }
    return color;
}
`,Ar=Object.freeze(Object.defineProperty({__proto__:null,default:Lr},Symbol.toStringTag,{value:"Module"})),Br=`// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}



vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    vec2 mouseUV = normalize_coord(iMouse_stripPack.xy);

    // Apply Möbius transformation: w = 1/(z - mouse)
    vec2 diff = p - mouseUV;
    float denominator = dot(p, p); // |z - mouse|²

    // Complex division: 1/(a + ib) = (a - ib)/(a² + b²)
    vec2 transformedP = vec2(p.x, -p.y) / denominator + mouseUV;

    // Apply the packing to the transformed point
    vec4 quad=vec4(0.,0.,2.,2.);
    Circle[4] mainCirc = circQuad(quad);
    color = packing(mainCirc, transformedP);    

    if(isOnBoundary(transformedP, mainCirc[0], thick)) {
        color = BLACK;;
    } else if(isOnBoundary(transformedP, mainCirc[1], thick)) {
        color = BLACK;
    } else if(isOnBoundary(transformedP, mainCirc[2], thick)) {
        color = BLACK;
    } else if(isOnBoundary(transformedP, mainCirc[3], thick)) {
        color = BLACK;
    }
    // Optional: Draw a small marker at the mouse position
    // if (length(p - mouseUV) < 0.05) {
    //     color = mix(color, vec3(1.0, 0.0, 0.0), 0.5);
    // }

    fragColor = vec4(color, 1.0);

}
`,Ir=Object.freeze(Object.defineProperty({__proto__:null,default:Br},Symbol.toStringTag,{value:"Module"})),Or=`
// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}

vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}





void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;

    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    //get c from mouse position on the mandelbrot side
    vec2 stripMouseUV = iMouse_stripPack.xy / iResolution_stripPack.xy;
    vec2 c = stripMouseUV - vec2(0.5, 0.5);
    c.x *= iResolution_stripPack.x / iResolution_stripPack.y;
    c*=6.50;
   
    vec4 newQuad = ptToQuad(c);
    Circle[4] mainCirc = circQuad(newQuad);
    color = packing(mainCirc, p);

    if(isOnBoundary(p, mainCirc[0], thick)) {
        color = BLACK;;
    } else if(isOnBoundary(p, mainCirc[1], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[2], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[3], thick)) {
        color = BLACK;
    }

    
    fragColor = vec4(color, 1.0);


   

    
}
`,Fr=Object.freeze(Object.defineProperty({__proto__:null,default:Or},Symbol.toStringTag,{value:"Module"})),Dr=`// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}


vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    vec4 quad=vec4(0.,0.,2.,2.);
    Circle[4] mainCirc = circQuad(quad);
    color = packing(mainCirc, p);    

    if(isOnBoundary(p, mainCirc[0], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[1], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[2], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[3], thick)) {
        color = BLACK;
    }
  
    
    
    
    //showing where the mouse is in the parameter space

    vec2 mouseUV = normalize_coord(iMouse_stripPack.xy);
    vec2 c= mouseUV;
    p = normalize_coord(fragCoord);
    if (length(p - c) < 0.05) {
        color = vec3(1.0, 0.0, 0.0);
    }

    // float error=thick;
    // vec4 newQuad = ptToQuad(p);
    // if(abs(newQuad[2]-newQuad[3])<error){
    //     color=Blue;
    // }
    // else if(abs(newQuad[0]-newQuad[1])<error){
    //     color=Blue;
    // }
    // else if(abs(newQuad[0]-newQuad[2])<error){
    //     color=Blue;
    // }
    // else if(abs(newQuad[0]-newQuad[3])<error){
    //     color=Blue;
    // }
    // //this is the unit circle 
    // else if(abs(newQuad[1]-newQuad[2])<error){
    //     color=Purple;
    // }
    // else if(abs(newQuad[1]-newQuad[3])<error){
    //     color=Blue;
    // }

    // if(abs(p.x)<thick){ color=WHITE;}
    // if(abs(p.x-0.5)<thick){color=Red;}
  
    

    fragColor = vec4(color, 1.0);
    
}
`,Mr=Object.freeze(Object.defineProperty({__proto__:null,default:Dr},Symbol.toStringTag,{value:"Module"})),Ur=`float EPS=1e-4;

float thick= 0.01;
int checks = 100;

vec3 BLACK = vec3(0.0, 0.0, 0.0);
vec3 WHITE = vec3(1.0, 1.0, 1.0);
vec3 BLUE = vec3(0.,0.,1.);
vec3 Red = vec3(1.,0.,0.);
vec3 Blue = vec3(0.4,0.8,0.94); //cyan
vec3 Purple=vec3(0.60,0.30,0.70); //purple 
vec3 Pink=vec3(1.0,0.20,0.860); //pink
vec3 Green=vec3(0.20,0.80,0.50); //green
vec3 Yellow=vec3(1.0,0.750,0.30); //orange

//colors for the circles
vec3 purple=vec3(0.70,0.40,0.90); //purple 
vec3 pink=vec3(01.0,0.450,0.550); //pink
vec3 yellow=vec3(1.0,01.0,0.30); //yellow
vec3 green=vec3(0.30,01.0,0.40); //green

// --- 1. CORE STRUCTURES & MATH ---

vec2 cmul(vec2 z, vec2 w) {
    return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

// Updated Struct: Supports Lines explicitly
struct Circle {
    vec2 center;     // Circle: (cx, cy). Line: Normal (nx, ny). normal points toward interior
    float curvature; // Circle: 1/r. Line: 0.0.
    float offset;    // Circle: 0.0. Line: w (where dot(n,p) = w).
};

// Unit vector helper
vec2 u(float a) {
    return vec2(cos(a), sin(a));
}

// --- 2. GEOMETRIC FUNCTIONS ---

// Invert a point 'z' through a Circle or reflect across a Line
vec2 invert(vec2 z, Circle C) {
    // Case: Line (Reflection)
    if (abs(C.curvature) < EPS) {
        // Formula: p' = p - 2 * (dot(n, p) - w) * n
        float distSigned = dot(z, C.center) - C.offset;
        return z - 2.0 * distSigned * C.center;
    }
    // Case: Circle (Inversion)
    vec2 difference = z - C.center;
    float rad = 1.0 / C.curvature;
    float mult = (rad * rad) / dot(difference, difference);
    return C.center + mult * difference;
}

// Check if a point is "inside" the shape
bool isInside(vec2 p, Circle c) {
    float k = c.curvature;
    
    // Case: Line (Half-plane check)
    if (abs(k) < EPS) {
        // We assume Normal points TOWARDS the interior
        //vec2 diff=c.offset*(c.center)-p;
        return dot(p, c.center) > c.offset; 
    }
    // Case: Standard Circle (Interior)
    else if (k > 0.0) {
        return length(p - c.center) < (1.0 / k);
    }
    // Case: Exterior Circle (Outside of a hole)
    else {
        return length(p - c.center) > abs(1.0 / k);
    }
}

// Distance to shape boundary
float distToCircle(vec2 p, Circle C) {
    // Case: Line
    if (abs(C.curvature) < EPS) {
        return (dot(p, C.center) - C.offset);
    }
    // Case: Circle
    float radius = 1.0 / C.curvature;
    return (length(p - C.center) - abs(radius));
}


// Check if a point is on the "boundary" (within a small epsilon)
bool isOnBoundary(vec2 p, Circle c, float thickness) {
    float dist = distToCircle(p, c);
    return -thickness < dist && dist < 0.;
}

Circle lineFromPoints(vec2 A, vec2 B) {
    vec2 t = normalize(B - A);        // Tangent
    vec2 n = vec2(-t.y, t.x);        // Normal
    float w = dot(n, A);             // Offset
    return Circle(n, 0.0, w);
}


// Construct a Circle/Line from 3 Points
Circle circleFromThreePoints(vec3 A, vec3 B, vec3 C) {
    float zA = A.z;
    float zB = B.z;
    float zC = C.z;
    
    //Case: Line
    if(zA==0.0){
        return lineFromPoints(B.xy, C.xy);
    }
    if(zB==0.0){
        return lineFromPoints(A.xy, C.xy);
    }
    if(zC==0.0){
        return lineFromPoints(A.xy, B.xy);
    }
    
    vec2 a = A.xy;
    vec2 b = B.xy;
    vec2 c = C.xy;

    vec2 ab = b - a;
    vec2 ac = c - a;
    float d = 2.0 * (ab.x * ac.y - ab.y * ac.x);

    if(abs(d)<EPS){
        return lineFromPoints(A.xy, B.xy);
    }

    // Case: Circle
    vec2 u = vec2(
        ac.y * dot(ab, ab) - ab.y * dot(ac, ac),
        ab.x * dot(ac, ac) - ac.x * dot(ab, ab)
    ) / d;
    vec2 center = a + u;
    float radius = length(u);
    
    return Circle(center, 1./radius, 0.0);
}

// Find tangent point between two shapes
vec3 getTangentPoint(Circle c1, Circle c2) {
    float k1 = c1.curvature;
    float k2 = c2.curvature;
    float epsilon = EPS;

    bool isLine1 = abs(k1) < EPS;
    bool isLine2 = abs(k2) < EPS;

    // Case: Two Lines (Parallel in packing -> Point at Infinity)
    if (isLine1 && isLine2) return vec3(0); // Simplified infinity

    // Case: Line and Circle
    // Tangency = CircleCenter - Radius * LineNormal
    if (isLine1) return vec3(c2.center + (c1.center / c2.curvature), 1.0);
    if (isLine2) return vec3(c1.center + (c2.center / c1.curvature), 1.0);

    // Case: Two Circles
    return vec3((k1 * c1.center + k2 * c2.center) / (k1 + k2), 1.0);
}


//helper function for descartes equation
bool checkDesc(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    return abs(2.*(a*a+b*b+c*c+d*d)-(a+b+c+d)*(a+b+c+d))<EPS;

}

//helper func for orient a line based on circle 
void orientLine( inout Circle line, Circle c){
    if(isInside(c.center,line)){
        line.center*=-1.;
        line.offset*=-1.;
    }   
}

// Helper: Swap for sorting
void swap(inout float a, inout float b, inout int idxA, inout int idxB) {
    if (a > b) {
        float t = a; 
        a = b; 
        b = t;
        int ti = idxA; 
        idxA = idxB; 
        idxB = ti;
    }
}

//helper function for sorting quadruple
vec4 sortQuad(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(a, b, idx.x, idx.y);
    swap(c, d, idx.z, idx.w);
    swap(a, c, idx.x, idx.z);
    swap(b, d, idx.y, idx.w);
    swap(b, c, idx.y, idx.z);

    return vec4(a,b,c,d);
}

//orienting the dual circles
void dualOrient(inout Circle circ[4]){
    //finding zero curvatures if any
    vec4 k = vec4(circ[0].curvature, circ[1].curvature, circ[2].curvature, circ[3].curvature);
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;
    
    //no lines
    //checking desc equation
    if(zeros==0 && !checkDesc(k)) circ[idx.x].curvature= -circ[idx.x].curvature;
    //one line
    if(zeros>0){
        orientLine(circ[idx.x], circ[idx.w]);
        //second line if any
        if(zeros==2){
            orientLine(circ[idx.y],circ[idx.w]);
        }
    }
}

//move a point to the fundemental domain of the symmetry group of PGL(2,Z)
bool outsideL(vec2 p){ //tests if to the right of the line x=-1/2
    return p.x<-0.5;
}
vec2 reflectL(vec2 p){ //reflect across the line x=-1/2
    return vec2(-p.x-1., p.y);
}
bool outsideR(vec2 p){ //tests if to the left of the line x=0
    return p.x>0.;
}
vec2 reflectR(vec2 p){ //reflect across the line x=0
    return vec2(-p.x, p.y);
}
bool outsideC(vec2 p){ //tests if outside the unit circle
    return length(p)<1.;;
}
bool isInsideFundamental(vec2 p){
    return !outsideL(p) && !outsideR(p) && !outsideC(p) && p.y>=0.;
}
vec2 reflectC(vec2 p){ //reflect across the unit circle
    return invert(p, Circle(vec2(0.0), -1.0, 0.0));
}
vec2 fold(vec2 p){
    vec2 newpt = p;
    if(outsideL(p)) {newpt=reflectL(p);}
    if(outsideR(p)) {newpt=reflectR(p);}
    if(outsideC(p)) {newpt=reflectC(p);}
    return newpt;
}

vec2 foldToFundamental(vec2 p){
    vec2 folded=p;
    //if (folded.y<0.) {folded.y*=-1.;}
    for(int i=0; i<=checks; i++){
        folded=fold(folded);
        // if(isInsideFundamental(folded)){
        //     break;
        // }
    }
    return folded;
}


// --- 3. APOLLONIAN SOLVER ---

/**.
 * Returns mat4 where columns represent circles.
 * Format for Circle: vec4(curvature, k*x, k*y, q)
 * Format for Line:   vec4(0.0, normal.x, normal.y, offset)
 */
mat4 solveApollonianQuad(vec4 kInput) {
    vec4 k = kInput;
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;

    Circle c[4];
    ivec4 mapSortedToGeom; 

    // --- CASE 1: Two Lines (Strip Packing) ---
    if (zeros == 2) {
        // Line 1: Bottom Line at y = 0
        // Normal points UP (0, 1), Offset = 0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        // Use the first circle's curvature to determine the gap
        // Diameter = 2.0 / curvature
        float kCircle = (abs(k.z) > EPS) ? k.z : k.w;
        float gap = 2.0 / kCircle; 

        // Line 2: Top Line at y = gap
        // Normal points DOWN (0, -1)
        // Offset logic: dot(n, p) = w  ->  dot((0,-1), (0, gap)) = -gap
        c[1] = Circle(vec2(0.0, 1.0), 0.0, gap); 

        // Circles 3 & 4 (Placed in the gap)
        float k1 = k.z; 
        float k2 = k.w;
        
        // y = 1/k is the radius, effectively centering them in the gap
        c[2] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        c[3] = Circle(vec2(-2.0/k2, 1.0/k2), k2, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 2: One Line (Plane Packing) ---
    else if (zeros == 1) {
        // Line at y=0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        float k1 = k.y, k2 = k.z, k3 = k.w;
        c[1] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        
        float xc2 = 2.0 / sqrt(k1 * k2);
        c[2] = Circle(vec2(xc2, 1.0/k2), k2, 0.0);
        
        float xc3 = 2.0 / sqrt(k1 * k3);
        c[3] = Circle(vec2(xc3, 1.0/k3), k3, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 3: Standard (All Circles) ---
    else {
        float a, b, c_val, d;
        if (k.x < -EPS) {
             a = k.x; b = k.y; c_val = k.z; d = k.w;
             mapSortedToGeom = ivec4(3, 0, 1, 2); 
        } else {
             b = k.x; c_val = k.y; d = k.z; a = k.w;
             mapSortedToGeom = ivec4(0, 1, 2, 3); 
        }

        c[0] = Circle(vec2(0.0, 1.0/b), b, 0.0);
        float xc = 2.0 / sqrt(b * c_val);
        c[1] = Circle(vec2(xc, 1.0/c_val), c_val, 0.0);

        // Trilateration for D
        float rB = 1.0/b; float rC = 1.0/c_val; float rD = 1.0/d;
        float distB = rB + rD; float distC = rC + rD;
        vec2 posB = c[0].center; vec2 posC = c[1].center;
        float distCenters = distance(posB, posC);
        
        float x_local = (distB*distB - distC*distC + distCenters*distCenters) / (2.0 * distCenters);
        float y_local = sqrt(max(0.0, distB*distB - x_local*x_local));
        vec2 dir = (posC - posB) / distCenters;       
        vec2 normal = vec2(-dir.y, dir.x);            
        vec2 posD = posB + x_local * dir - y_local * normal;
        c[2] = Circle(posD, d, 0.0);
        
        // Descartes for A
        float sum_curv = a + b + c_val + d;
        vec2 s_kz = vec2(0.0);
        vec2 s_k2z = vec2(0.0);
        for(int i=0; i<3; i++) {
            s_kz  += c[i].curvature * c[i].center;
            s_k2z += (c[i].curvature * c[i].curvature) * c[i].center;
        }
        float denom = (a*a) - (0.5 * sum_curv * a);
        if (abs(denom) < 1e-9) denom = 1.0;
        vec2 posA = ((0.5 * sum_curv * s_kz) - s_k2z) / denom;
        c[3] = Circle(posA, a, 0.0);
    }

    // --- Output Construction ---
    mat4 result;
    for(int i=0; i<4; i++) {
        int geomIndex = mapSortedToGeom[i];
        int originalIndex = idx[i];
        
        Circle geom = c[geomIndex];
        float p = geom.curvature;
        vec4 col;
        
        if (abs(p) < EPS) {
            // LINE ENCODING: x=0, y=nx, z=ny, w=offset
            col = vec4(0.0, geom.center.x, geom.center.y, geom.offset);
        } else {
            // CIRCLE ENCODING: x=k, y=kx, z=ky, w=q
            float r = p * geom.center.x;
            float s = p * geom.center.y;
            float q = (r*r + s*s - 1.0) / p;
            col = vec4(p, r, s, q);
        }
        //result[geomIndex]=col;
        result[originalIndex]=col;
    }
    
    return result;
}

// Convert vec4 back to Geometric Circle
Circle toGeom(vec4 v) {
    // Line Case (Curvature v.x is 0)
    if (abs(v.x) < EPS) {
        // center = (v.y, v.z), curvature = 0, offset = v.w
        return Circle(vec2(v.y, v.z), 0.0, v.w);
    }
    // Circle Case
    return Circle(vec2(v.y/v.x, v.z/v.x), v.x, 0.0);
}

vec4 ptToQuad(vec2 p){
    float a= p.x;
    float b= p.y;
    return vec4(2.*b, 2.*(1.-b), 2.*(a*a+b*b-b), 2.*(1.+a*a+b*b-b+2.*a));
}

vec2 quadToPt(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    return vec2(-(a+b+c-d)/(2.*(a+b)), (a)/((a+b)));
}

Circle[4] circQuad(vec4 quad){
    mat4 pack = solveApollonianQuad(quad);
    Circle cc0=  toGeom(pack[0]);
    Circle cc1=  toGeom(pack[1]);
    Circle cc2=  toGeom(pack[2]);
    Circle cc3=  toGeom(pack[3]);

    Circle[4] result = Circle[4](cc0, cc1, cc2, cc3);
    return result;
}

Circle[4] circDual(Circle[4] maincirc){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle dualCirc[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(dualCirc);

    return dualCirc;
}

vec3 packing(Circle[4] maincirc, vec2 p){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle circ[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(circ);
    
    vec3 color = vec3(0.8,0.8,0.8);
   
    //continually swapping through dual circles will eventually get you to one of the main
    //circles and once in a main circle color it.
    // Iterate inversions
    int i;
    for (i = 0; i < 100; i++) {
        if (isInside(p, cc1)) {
            color = pink;
            break;
        } else if (isInside(p, cc2)) {
            color = purple;
            break;
        } else if (isInside(p, cc3)) {
            color = yellow;
            break;
        } else if (isInside(p, cc0)) {
            color = green;
            break;
        }
        if (isInside(p, circ[0])) {
            p = invert(p, circ[0]);
        } else if (isInside(p, circ[1])) {
            p = invert(p, circ[1]);
        } else if (isInside(p, circ[2])) {
            p = invert(p, circ[2]);
        } else if (isInside(p, circ[3])) {
            p = invert(p, circ[3]);
        } 
    }
    return color;
}

// --- 4. EXTENDED MOBIUS WORD TRAVERSAL ---
// Generators (acting on z = p.x + i*p.y), tau = complex conjugation:
//   S      = [[0,1],[-1,0]]  ->  S(z)  = -1/z
//   T      = [[1,1],[0,1]]   ->  T(z)  = z+1   (Tinv(z) = z-1, since T has infinite order)
//   U*tau  = [[1,0],[0,-1]]  ->  Utau(z) = -conj(z)
//   V*tau  = [[1,i],[0,1]]   ->  Vtau(z) = conj(z)+i
// S, Utau, Vtau are involutions; T is not, so Tinv is a separate move.

vec2 genS(vec2 z) {
    return vec2(-z.x, z.y) / dot(z, z);
}
vec2 genT(vec2 z) {
    return z + vec2(1.0, 0.0);
}
vec2 genTinv(vec2 z) {
    return z - vec2(1.0, 0.0);
}
vec2 genUtau(vec2 z) {
    return vec2(-z.x, z.y);
}
vec2 genVtau(vec2 z) {
    return vec2(z.x, 1.0 - z.y);
}

#define WORD_LETTERS 5 // S, T, Tinv, Utau, Vtau

vec2 applyGen(vec2 z, int letter) {
    if      (letter == 0) return genS(z);
    else if (letter == 1) return genT(z);
    else if (letter == 2) return genTinv(z);
    else if (letter == 3) return genUtau(z);
    else                  return genVtau(z);
}

// Inverse letter, so the word walk never immediately undoes its last step.
int invGen(int letter) {
    if (letter == 1) return 2;
    if (letter == 2) return 1;
    return letter; // S, Utau, Vtau are self-inverse
}

bool checkOrbitPoint(vec2 z, vec2 p, float dotR, vec3 dotColor, inout vec3 color) {
    if (length(p - z) < dotR) {
        color = dotColor;
        return true;
    }
    return false;
}

// Walk all reduced words of length <= wordLen in <S,T,Utau,Vtau> starting at z0,
// coloring pixel p with dotColor if any orbit point lands within dotR.
// wordLen must be <= WORD_DEPTH.
//
// Iteration budget: node count grows as 1 + 5 + 5*4 + 5*4*4 + ... for each extra depth;
// WORD_ITERS needs to cover ~6 iterations per node (see loop body) at the chosen depth.
#define WORD_DEPTH 3
#define WORD_ITERS 700

vec3 mobiusOrbitColor(vec2 z0, int wordLen, vec2 p, float dotR,
                       vec3 dotColor, vec3 baseColor) {
    vec3 color = baseColor;

    checkOrbitPoint(z0, p, dotR, dotColor, color);

    if (wordLen < 1) return color;

    // Iterative DFS stack.
    // sZ[d]: point at depth d
    // sP[d]: letter that produced this point (-1 for root)
    // sN[d]: next child letter to try (0..WORD_LETTERS-1)
    vec2 sZ[WORD_DEPTH + 1];
    int  sP[WORD_DEPTH + 1];
    int  sN[WORD_DEPTH + 1];

    int top = 0;
    sZ[0] = z0;
    sP[0] = -1;
    sN[0] = 0;

    for (int iter = 0; iter < WORD_ITERS; iter++) {
        if (top < 0) break;

        int nc = sN[top];

        if (nc >= WORD_LETTERS) {   // exhausted all children: backtrack
            top--;
            continue;
        }
        if (sP[top] >= 0 && nc == invGen(sP[top])) { // skip: would undo the previous letter
            sN[top]++;
            continue;
        }

        vec2 childZ = applyGen(sZ[top], nc);
        checkOrbitPoint(childZ, p, dotR, dotColor, color);

        sN[top]++;               // advance to next sibling for when we return

        if (top < wordLen) {     // push child if we can go deeper (child depth top+1 <= wordLen)
            top++;
            sZ[top] = childZ;
            sP[top] = nc;
            sN[top] = 0;
        }
    }

    return color;
}


`,Nr=Object.freeze(Object.defineProperty({__proto__:null,default:Ur},Symbol.toStringTag,{value:"Module"})),$r=`// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}



vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    //vec2 mouseUV = normalize_coord(iMouse_stripPack.xy);
    vec2 stripMouseUV = iMouse_stripPack.xy / iResolution_stripPack.xy;
    vec2 c = stripMouseUV - vec2(0.5, 0.5);
    c.x *= iResolution_stripPack.x / iResolution_stripPack.y;
    c *= 6.50;
    c = c / u_zoom_stripPack + u_pan_stripPack;

    // Apply Möbius transformation: w = 1/(z - mouse)
    vec2 diff = p - c;
    float denominator = dot(p, p); // |z - mouse|²

    // Complex division: 1/(a + ib) = (a - ib)/(a² + b²)
    vec2 transformedP = vec2(p.x, -p.y) / denominator + c;

    // Apply the packing to the transformed point
    vec4 quad=vec4(0.,0.,2.,2.);
    Circle[4] mainCirc = circQuad(quad);
    color = packing(mainCirc, transformedP);    

    if(isOnBoundary(transformedP, mainCirc[0], thick)) {
        color = BLACK;;
    } else if(isOnBoundary(transformedP, mainCirc[1], thick)) {
        color = BLACK;
    } else if(isOnBoundary(transformedP, mainCirc[2], thick)) {
        color = BLACK;
    } else if(isOnBoundary(transformedP, mainCirc[3], thick)) {
        color = BLACK;
    }
    

    fragColor = vec4(color, 1.0);

}
`,qr=Object.freeze(Object.defineProperty({__proto__:null,default:$r},Symbol.toStringTag,{value:"Module"})),Gr=`
// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}

vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}





void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;

    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    //get c from mouse position on the mandelbrot side
    vec2 stripMouseUV = iMouse_stripPack.xy / iResolution_stripPack.xy;
    vec2 c = stripMouseUV - vec2(0.5, 0.5);
    c.x *= iResolution_stripPack.x / iResolution_stripPack.y;
    c *= 6.50;
    c = c / u_zoom_stripPack + u_pan_stripPack;

    vec4 newQuad = ptToQuad(c);
    Circle motherCirc = circQuad(newQuad)[0];

    vec4 sortedQuad = sortQuad(newQuad);
    Circle[4] mainCirc = circQuad(sortedQuad);
    color = packing(mainCirc, p);

    if(isInside(p, motherCirc)) {color=Red;}

    if(isOnBoundary(p, mainCirc[0], thick)) {
        color = BLACK;;
    } else if(isOnBoundary(p, mainCirc[1], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[2], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[3], thick)) {
        color = BLACK;
    }

    
    fragColor = vec4(color, 1.0);


   

    
}
`,jr=Object.freeze(Object.defineProperty({__proto__:null,default:Gr},Symbol.toStringTag,{value:"Module"})),Vr=`// --- 4. RENDER LOGIC ---
vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50 / u_zoom_stripPack + u_pan_stripPack;
}

Circle unitCircle = Circle(vec2(0.0, 0.0), 1.0, 0.0);

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    vec4 quad=vec4(0.,0.,2.,2.);
    Circle[4] mainCirc = circQuad(quad);
    color = packing(mainCirc, p);    

    float t = thick / u_zoom_stripPack;
    float dotR = 0.05 / u_zoom_stripPack;

    if(isOnBoundary(p, mainCirc[0], t)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[1], t)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[2], t)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[3], t)) {
        color = BLACK;
    }


    //showing where the mouse is in the parameter space

    vec2 mouseUV = normalize_coord(iMouse_stripPack.xy);
    p = normalize_coord(fragCoord);

    //fundemental domain of PGL(2,Z)
    if(abs(p.x+1./2.) < t && (p.y) >= sqrt(3.)/2.){
        color = BLACK;
    }
    if(abs(p.x) < t && (p.y) >= 1.){
        color = BLACK;
    }
    if(isOnBoundary(p, unitCircle, 2.*t) && -1./2.<=p.x && p.x<=0. && p.y>=0.){
        color = BLACK;
    }


    float error=dotR;
    vec4 newQuad = ptToQuad(p);
    if(abs(newQuad[2]-newQuad[3])<error){
        color=Purple;
    }
    else if(abs(newQuad[0]-newQuad[1])<error){
        color=Purple;
    }
    else if(abs(newQuad[0]-newQuad[2])<error){
        color=Purple;
    }
    else if(abs(newQuad[0]-newQuad[3])<error){
        color=Purple;
    }
    //this is the unit circle 
    else if(abs(newQuad[1]-newQuad[2])<error){
        color=Purple;
    }
    else if(abs(newQuad[1]-newQuad[3])<error){
        color=Purple;
    }

    // Orbit of the mouse point under reduced words in <S, T, Utau, Vtau> up to
    // word length WORD_DEPTH, plotted directly (unfolded) against pixel p.
    color = mobiusOrbitColor(mouseUV, WORD_DEPTH, p, dotR, BLACK, color);

     if (length(p - mouseUV) < dotR) {
        color = vec3(1.0, 0.0, 0.0);
    }




    fragColor = vec4(color, 1.0);
    
}
`,Kr=Object.freeze(Object.defineProperty({__proto__:null,default:Vr},Symbol.toStringTag,{value:"Module"})),Hr=`float EPS=1e-6;
float thick= 0.01;
int checks = 200;

vec3 BLACK = vec3(0.0, 0.0, 0.0);
vec3 WHITE = vec3(1.0, 1.0, 1.0);

// --- 1. CORE STRUCTURES & MATH ---

vec2 cmul(vec2 z, vec2 w) {
    return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

// Updated Struct: Supports Lines explicitly
struct Circle {
    vec2 center;     // Circle: (cx, cy). Line: Normal (nx, ny).
    float curvature; // Circle: 1/r. Line: 0.0.
    float offset;    // Circle: 0.0. Line: w (where dot(n,p) = w).
};

// Unit vector helper
vec2 u(float a) {
    return vec2(cos(a), sin(a));
}

// --- 2. GEOMETRIC FUNCTIONS ---

// Invert a point 'z' through a Circle or reflect across a Line
vec2 invert(vec2 z, Circle C) {
    // Case: Line (Reflection)
    if (abs(C.curvature) < EPS) {
        // Formula: p' = p - 2 * (dot(n, p) - w) * n
        float distSigned = dot(z, C.center) - C.offset;
        return z - 2.0 * distSigned * C.center;
    }
    // Case: Circle (Inversion)
    vec2 difference = z - C.center;
    float rad = 1.0 / C.curvature;
    float mult = (rad * rad) / dot(difference, difference);
    return C.center + mult * difference;
}

// Check if a point is "inside" the shape
bool isInside(vec2 p, Circle c) {
    float k = c.curvature;
    
    // Case: Line (Half-plane check)
    if (abs(k) < EPS) {
        // We assume Normal points TOWARDS the interior
        //vec2 diff=c.offset*(c.center)-p;
        return dot(p, c.center) > c.offset; 
    }
    // Case: Standard Circle (Interior)
    else if (k > 0.0) {
        return length(p - c.center) < (1.0 / k);
    }
    // Case: Exterior Circle (Outside of a hole)
    else {
        return length(p - c.center) > abs(1.0 / k);
    }
}

// Distance to shape boundary
float distToCircle(vec2 p, Circle C) {
    // Case: Line
    if (abs(C.curvature) < EPS) {
        //vec2 line_pt = C.offset * C.center; // Point on the line
        //vec2 diff = p - line_pt;
        return abs(dot(p, C.center) - C.offset);
    }
    // Case: Circle
    float radius = 1.0 / C.curvature;
    return abs(length(p - C.center) - abs(radius));
}

Circle lineFromPoints(vec2 A, vec2 B) {
    vec2 t = normalize(B - A);        // Tangent
    vec2 n = vec2(-t.y, t.x);        // Normal
    float w = dot(n, A);             // Offset
    return Circle(n, 0.0, w);
}


// Construct a Circle/Line from 3 Points
Circle circleFromThreePoints(vec3 A, vec3 B, vec3 C) {
    float zA = A.z;
    float zB = B.z;
    float zC = C.z;
    
    //Case: Line
    if(zA==0.0){
        return lineFromPoints(B.xy, C.xy);
    }
    if(zB==0.0){
        return lineFromPoints(A.xy, C.xy);
    }
    if(zC==0.0){
        return lineFromPoints(A.xy, B.xy);
    }
    
    vec2 a = A.xy;
    vec2 b = B.xy;
    vec2 c = C.xy;

    vec2 ab = b - a;
    vec2 ac = c - a;
    float d = 2.0 * (ab.x * ac.y - ab.y * ac.x);

    // Case: Circle
    vec2 u = vec2(
        ac.y * dot(ab, ab) - ab.y * dot(ac, ac),
        ab.x * dot(ac, ac) - ac.x * dot(ab, ab)
    ) / d;
    vec2 center = a + u;
    float radius = length(u);
    
    return Circle(center, 1./radius, 0.0);
}

// Find tangent point between two shapes
vec3 getTangentPoint(Circle c1, Circle c2) {
    float k1 = c1.curvature;
    float k2 = c2.curvature;
    float epsilon = EPS;

    bool isLine1 = abs(k1) < EPS;
    bool isLine2 = abs(k2) < EPS;

    // Case: Two Lines (Parallel in packing -> Point at Infinity)
    if (isLine1 && isLine2) return vec3(0); // Simplified infinity

    // Case: Line and Circle
    // Tangency = CircleCenter - Radius * LineNormal
    if (isLine1) return vec3(c2.center - (c1.center / c2.curvature), 1.0);
    if (isLine2) return vec3(c1.center - (c2.center / c1.curvature), 1.0);

    // Case: Two Circles
    return vec3((k1 * c1.center + k2 * c2.center) / (k1 + k2), 1.0);
}


//helper function for descartes equation
bool checkDesc(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    return abs(2.*(a*a+b*b+c*c+d*d)-(a+b+c+d)*(a+b+c+d))<EPS;

}

//helper func for orient a line based on circle 
void orientLine( inout Circle line, Circle c){
    //vec2 point= line.offset*(line.center);
    //vec2 diff= c.center - point; // points to the exterior of the line
    
    //line.center*= -sign(dot(point,diff));

    if(isInside(c.center,line)){
        line.center*=-1.;
        line.offset*=-1.;
    }   
}

// Helper: Swap for sorting
void swap(inout float a, inout float b, inout int idxA, inout int idxB) {
    if (a > b) {
        float t = a; 
        a = b; 
        b = t;
        int ti = idxA; 
        idxA = idxB; 
        idxB = ti;
    }
}

//orienting the dual circles
void dualOrient(inout Circle circ[4]){
    //finding zero curvatures if any
    vec4 k = vec4(circ[0].curvature, circ[1].curvature, circ[2].curvature, circ[3].curvature);
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;
    
    //no lines
    //checking desc equation
    if(zeros==0 && !checkDesc(k)) circ[idx.x].curvature= -circ[idx.x].curvature;
    //one line
    if(zeros>0){
        orientLine(circ[idx.x], circ[idx.w]);
        //second line if any
        if(zeros==2){
            orientLine(circ[idx.y],circ[idx.w]);
        }
    }
}

// --- 3. APOLLONIAN SOLVER ---

/**.
 * Returns mat4 where columns represent circles.
 * Format for Circle: vec4(curvature, k*x, k*y, q)
 * Format for Line:   vec4(0.0, normal.x, normal.y, offset)
 */
mat4 solveApollonianQuad(vec4 kInput) {
    vec4 k = kInput;
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;

    Circle c[4];
    ivec4 mapSortedToGeom; 

    // --- CASE 1: Two Lines (Strip Packing) ---
    if (zeros == 2) {
        // Line 1: Bottom Line at y = 0
        // Normal points UP (0, 1), Offset = 0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        // Use the first circle's curvature to determine the gap
        // Diameter = 2.0 / curvature
        float kCircle = (abs(k.z) > EPS) ? k.z : k.w;
        float gap = 2.0 / kCircle; 

        // Line 2: Top Line at y = gap
        // Normal points DOWN (0, -1)
        // Offset logic: dot(n, p) = w  ->  dot((0,-1), (0, gap)) = -gap
        c[1] = Circle(vec2(0.0, 1.0), 0.0, gap); 

        // Circles 3 & 4 (Placed in the gap)
        float k1 = k.z; 
        float k2 = k.w;
        
        // y = 1/k is the radius, effectively centering them in the gap
        c[2] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        c[3] = Circle(vec2(2.0/k2, 1.0/k2), k2, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 2: One Line (Plane Packing) ---
    else if (zeros == 1) {
        // Line at y=0
        c[0] = Circle(vec2(0.0, 1.0), 0.0, 0.0);
        
        float k1 = k.y, k2 = k.z, k3 = k.w;
        c[1] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        
        float xc2 = 2.0 / sqrt(k1 * k2);
        c[2] = Circle(vec2(xc2, 1.0/k2), k2, 0.0);
        
        float xc3 = 2.0 / sqrt(k1 * k3);
        c[3] = Circle(vec2(xc3, 1.0/k3), k3, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 3: Standard (All Circles) ---
    else {
        float a, b, c_val, d;
        if (k.x < -EPS) {
             a = k.x; b = k.y; c_val = k.z; d = k.w;
             mapSortedToGeom = ivec4(3, 0, 1, 2); 
        } else {
             b = k.x; c_val = k.y; d = k.z; a = k.w;
             mapSortedToGeom = ivec4(0, 1, 2, 3); 
        }

        c[0] = Circle(vec2(0.0, 1.0/b), b, 0.0);
        float xc = 2.0 / sqrt(b * c_val);
        c[1] = Circle(vec2(xc, 1.0/c_val), c_val, 0.0);

        // Trilateration for D
        float rB = 1.0/b; float rC = 1.0/c_val; float rD = 1.0/d;
        float distB = rB + rD; float distC = rC + rD;
        vec2 posB = c[0].center; vec2 posC = c[1].center;
        float distCenters = distance(posB, posC);
        
        float x_local = (distB*distB - distC*distC + distCenters*distCenters) / (2.0 * distCenters);
        float y_local = sqrt(max(0.0, distB*distB - x_local*x_local));
        vec2 dir = (posC - posB) / distCenters;       
        vec2 normal = vec2(-dir.y, dir.x);            
        vec2 posD = posB + x_local * dir - y_local * normal;
        c[2] = Circle(posD, d, 0.0);
        
        // Descartes for A
        float sum_curv = a + b + c_val + d;
        vec2 s_kz = vec2(0.0);
        vec2 s_k2z = vec2(0.0);
        for(int i=0; i<3; i++) {
            s_kz  += c[i].curvature * c[i].center;
            s_k2z += (c[i].curvature * c[i].curvature) * c[i].center;
        }
        float denom = (a*a) - (0.5 * sum_curv * a);
        if (abs(denom) < 1e-9) denom = 1.0;
        vec2 posA = ((0.5 * sum_curv * s_kz) - s_k2z) / denom;
        c[3] = Circle(posA, a, 0.0);
    }

    // --- Output Construction ---
    mat4 result;
    for(int i=0; i<4; i++) {
        int geomIndex = mapSortedToGeom[i];
        int originalIndex = idx[i];
        
        Circle geom = c[geomIndex];
        float p = geom.curvature;
        vec4 col;
        
        if (abs(p) < EPS) {
            // LINE ENCODING: x=0, y=nx, z=ny, w=offset
            col = vec4(0.0, geom.center.x, geom.center.y, geom.offset);
        } else {
            // CIRCLE ENCODING: x=k, y=kx, z=ky, w=q
            float r = p * geom.center.x;
            float s = p * geom.center.y;
            float q = (r*r + s*s - 1.0) / p;
            col = vec4(p, r, s, q);
        }
        
        if (originalIndex == 0) result[0] = col;
        else if (originalIndex == 1) result[1] = col;
        else if (originalIndex == 2) result[2] = col;
        else if (originalIndex == 3) result[3] = col;
    }
    
    return result;
}

// Convert vec4 back to Geometric Circle
Circle toGeom(vec4 v) {
    // Line Case (Curvature v.x is 0)
    if (abs(v.x) < EPS) {
        // center = (v.y, v.z), curvature = 0, offset = v.w
        return Circle(vec2(v.y, v.z), 0.0, v.w);
    }
    // Circle Case
    return Circle(vec2(v.y/v.x, v.z/v.x), v.x, 0.0);
}

vec4 ptToQuad(vec2 p){
    float a= p.x;
    float b= p.y;
    return vec4(b, 1.-b, a*a+b*b-b, 1.+a*a+b*b-b+2.*a);
}

vec3 packing(vec4 quad, vec2 p){
    mat4 pack = solveApollonianQuad(quad);
    Circle cc0=  toGeom(pack[0]);
    Circle cc1=  toGeom(pack[1]);
    Circle cc2=  toGeom(pack[2]);
    Circle cc3=  toGeom(pack[3]);
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle circ[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(circ);
    

   // Circle c0 = Circle(vec2(1.,0.),0.,1.);

    //colors for the circles
    vec3 purple=vec3(0.70,0.40,0.90); //purple 
    vec3 pink=vec3(01.0,0.450,0.550); //pink
    vec3 yellow=vec3(1.0,01.0,0.30); //yellow
    vec3 green=vec3(0.30,01.0,0.40); //green
    
    vec3 color = vec3(0.8,0.8,0.8);
   
    //continually swapping through dual circles will eventually get you to one of the main
    //circles and once in a main circle color it.
    // Iterate inversions
    int i;
    for (i = 0; i < checks; i++) {
        if (isInside(p, cc1)) {
            color = pink;
            break;
        } else if (isInside(p, cc2)) {
            color = purple;
            break;
        } else if (isInside(p, cc3)) {
            color = yellow;
            break;
        } else if (isInside(p, cc0)) {
            color = green;
            break;
        }
        if (isInside(p, circ[0])) {
            p = invert(p, circ[0]);
        } else if (isInside(p, circ[1])) {
            p = invert(p, circ[1]);
        } else if (isInside(p, circ[2])) {
            p = invert(p, circ[2]);
        } else if (isInside(p, circ[3])) {
            p = invert(p, circ[3]);
        } 
    }
    return color;
}

vec3 packing_outline(vec4 quad, vec2 p){
    mat4 pack = solveApollonianQuad(quad);
    Circle cc0=  toGeom(pack[0]);
    Circle cc1=  toGeom(pack[1]);
    Circle cc2=  toGeom(pack[2]);
    Circle cc3=  toGeom(pack[3]);
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle circ[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(circ);

    //colors for the circles
    vec3 purple=vec3(0.70,0.40,0.90); //purple 
    vec3 pink=vec3(01.0,0.450,0.550); //pink
    vec3 yellow=vec3(1.0,01.0,0.30); //yellow
    vec3 green=vec3(0.30,01.0,0.40); //green
   
    //iterate inversion
    int i;
    for (i=0; i<checks; i++){
        if (isInside(p, circ[0])){
            p=invert(p,circ[0]);
        }
        else if (isInside(p,circ[1])){
            p=invert(p,circ[1]);
        }
        else if (isInside(p,circ[2])){
            p=invert(p,circ[2]);
        }
        else if (isInside(p,circ[3])){
            p=invert(p,circ[3]);
        }
        else{
        break;
        }
    }
    
    //emphasize limit set ie packing
    float t=float(i)/float(checks);
    float t2 = pow(t, 2.0);
    vec3 color = 30.0 * vec3(t2, t2, t2);
    return color;
}






// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}


//normalizing coordinates to split screen 
vec2 normalize_coord_right(vec2 fragCoord) {
    vec2 uv = vec2(2.*fragCoord.x/iResolution.x-1.,fragCoord.y/iResolution.y);
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x /(2.* iResolution.y);
    return uv * 5.5;
}

vec2 normalize_coord_left(vec2 fragCoord) {
    vec2 uv = vec2(2.*fragCoord.x/iResolution.x,fragCoord.y/iResolution.y);
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x /(2.* iResolution.y);
    return uv * 4.5;
}

vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{

    //set up for split screen
    vec3 color;
    vec2 p = normalize_coord_left(fragCoord);
    color=vec3(0);
        
    // Get c from mouse position
    vec2 c = normalize_coord_left(iMouse.xy);
  
    
    vec4 quad=vec4(2.,2.,0.,0.);
    color = packing_outline(quad, p);
    
p = normalize_coord_left(fragCoord);
if (length(p - c) < 0.05) {
        color = vec3(1.0, 0.0, 0.0);
    }

//roght side of the screen
if(fragCoord.x>iResolution.x/2.){
    p = normalize_coord_right(fragCoord);
   
    vec4 newQuad = ptToQuad(c);
    color = packing_outline(newQuad, p);
    
    }
    
    fragColor = vec4(color, 1.0);
}
   
`,Qr=Object.freeze(Object.defineProperty({__proto__:null,default:Hr},Symbol.toStringTag,{value:"Module"})),Xr=`//constants
float EPS=1e-4;

float thick= 0.01;
int checks = 100;

vec3 BLACK = vec3(0.0, 0.0, 0.0);
vec3 WHITE = vec3(1.0, 1.0, 1.0);
vec3 Blue = vec3(0.,0.,1.);
vec3 Red = vec3(1.,0.,0.);
vec3 Purple=vec3(0.60,0.30,0.70); //purple 
vec3 Pink=vec3(0.80,0.350,0.450); //pink
vec3 Green=vec3(0.20,0.80,0.50); //green
vec3 Yellow=vec3(1.0,0.750,0.30); //orange

//colors for the circles
vec3 purple=vec3(0.70,0.40,0.90); //purple 
vec3 pink=vec3(01.0,0.450,0.550); //pink
vec3 yellow=vec3(1.0,01.0,0.30); //yellow
vec3 green=vec3(0.30,01.0,0.40); //green

// --- 1. CORE STRUCTURES & MATH ---

vec2 cmul(vec2 z, vec2 w) {
    return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

// Updated Struct: Supports Lines explicitly
struct Circle {
    vec2 center;     // Circle: (cx, cy). Line: Normal (nx, ny). normal points toward interior
    float curvature; // Circle: 1/r. Line: 0.0.
    float offset;    // Circle: 0.0. Line: w (where dot(n,p) = w).
};

// Unit vector helper
vec2 u(float a) {
    return vec2(cos(a), sin(a));
}

// --- 2. GEOMETRIC FUNCTIONS ---

// Invert a point 'z' through a Circle or reflect across a Line
vec2 invert(vec2 z, Circle C) {
    // Case: Line (Reflection)
    if (abs(C.curvature) < EPS) {
        // Formula: p' = p - 2 * (dot(n, p) - w) * n
        float distSigned = dot(z, C.center) - C.offset;
        return z - 2.0 * distSigned * C.center;
    }
    // Case: Circle (Inversion)
    vec2 difference = z - C.center;
    float rad = 1.0 / C.curvature;
    float mult = (rad * rad) / dot(difference, difference);
    return C.center + mult * difference;
}

// Check if a point is "inside" the shape
bool isInside(vec2 p, Circle c) {
    float k = c.curvature;
    
    // Case: Line (Half-plane check)
    if (abs(k) < EPS) {
        // We assume Normal points TOWARDS the interior
        //vec2 diff=c.offset*(c.center)-p;
        return dot(p, c.center) > c.offset; 
    }
    // Case: Standard Circle (Interior)
    else if (k > 0.0) {
        return length(p - c.center) < (1.0 / k);
    }
    // Case: Exterior Circle (Outside of a hole)
    else {
        return length(p - c.center) > abs(1.0 / k);
    }
}

// Distance to shape boundary
float distToCircle(vec2 p, Circle C) {
    // Case: Line
    if (abs(C.curvature) < EPS) {
        return (dot(p, C.center) - C.offset);
    }
    // Case: Circle
    float radius = 1.0 / C.curvature;
    return (length(p - C.center) - abs(radius));
}


// Check if a point is on the "boundary" (within a small epsilon)
bool isOnBoundary(vec2 p, Circle c, float thickness) {
    float dist = distToCircle(p, c);
    return -thickness < dist && dist < 0.;
}

Circle lineFromPoints(vec2 A, vec2 B) {
    vec2 t = normalize(B - A);        // Tangent
    vec2 n = vec2(-t.y, t.x);        // Normal
    float w = dot(n, A);             // Offset
    return Circle(n, 0.0, w);
}


// Construct a Circle/Line from 3 Points
Circle circleFromThreePoints(vec3 A, vec3 B, vec3 C) {
    float zA = A.z;
    float zB = B.z;
    float zC = C.z;
    
    //Case: Line
    if(zA==0.0){
        return lineFromPoints(B.xy, C.xy);
    }
    if(zB==0.0){
        return lineFromPoints(A.xy, C.xy);
    }
    if(zC==0.0){
        return lineFromPoints(A.xy, B.xy);
    }
    
    vec2 a = A.xy;
    vec2 b = B.xy;
    vec2 c = C.xy;

    vec2 ab = b - a;
    vec2 ac = c - a;
    float d = 2.0 * (ab.x * ac.y - ab.y * ac.x);

    if(abs(d)<EPS){
        return lineFromPoints(A.xy, B.xy);
    }

    // Case: Circle
    vec2 u = vec2(
        ac.y * dot(ab, ab) - ab.y * dot(ac, ac),
        ab.x * dot(ac, ac) - ac.x * dot(ab, ab)
    ) / d;
    vec2 center = a + u;
    float radius = length(u);
    
    return Circle(center, 1./radius, 0.0);
}

// Find tangent point between two shapes
vec3 getTangentPoint(Circle c1, Circle c2) {
    float k1 = c1.curvature;
    float k2 = c2.curvature;
    float epsilon = EPS;

    bool isLine1 = abs(k1) < EPS;
    bool isLine2 = abs(k2) < EPS;

    // Case: Two Lines (Parallel in packing -> Point at Infinity)
    if (isLine1 && isLine2) return vec3(0); // Simplified infinity

    // Case: Line and Circle
    // Tangency = CircleCenter - Radius * LineNormal
    if (isLine1) return vec3(c2.center + (c1.center / c2.curvature), 1.0);
    if (isLine2) return vec3(c1.center + (c2.center / c1.curvature), 1.0);

    // Case: Two Circles
    return vec3((k1 * c1.center + k2 * c2.center) / (k1 + k2), 1.0);
}


//helper function for descartes equation
bool checkDesc(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    return abs(2.*(a*a+b*b+c*c+d*d)-(a+b+c+d)*(a+b+c+d))<EPS;

}

//helper func for orient a line based on circle 
void orientLine( inout Circle line, Circle c){
    if(isInside(c.center,line)){
        line.center*=-1.;
        line.offset*=-1.;
    }   
}

// Helper: Swap for sorting
void swap(inout float a, inout float b, inout int idxA, inout int idxB) {
    if (a > b) {
        float t = a; 
        a = b; 
        b = t;
        int ti = idxA; 
        idxA = idxB; 
        idxB = ti;
    }
}

//orienting the dual circles
void dualOrient(inout Circle circ[4]){
    //finding zero curvatures if any
    vec4 k = vec4(circ[0].curvature, circ[1].curvature, circ[2].curvature, circ[3].curvature);
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;
    
    //no lines
    //checking desc equation
    if(zeros==0 && !checkDesc(k)) circ[idx.x].curvature= -circ[idx.x].curvature;
    //one line
    if(zeros>0){
        orientLine(circ[idx.x], circ[idx.w]);
        //second line if any
        if(zeros==2){
            orientLine(circ[idx.y],circ[idx.w]);
        }
    }
}

//move a point to the fundemental domain of the symmetry group of PGL(2,Z)
bool outsideL(vec2 p){ //tests if to the right of the line x=-1/2
    return p.x<-0.5;
}
vec2 reflectL(vec2 p){ //reflect across the line x=-1/2
    return vec2(-p.x-1., p.y);
}
bool outsideR(vec2 p){ //tests if to the left of the line x=0
    return p.x>0.;
}
vec2 reflectR(vec2 p){ //reflect across the line x=0
    return vec2(-p.x, p.y);
}
bool outsideC(vec2 p){ //tests if outside the unit circle
    return length(p)<1.;;
}
bool isInsideFundamental(vec2 p){
    return !outsideL(p) && !outsideR(p) && !outsideC(p) && p.y>=0.;
}
vec2 reflectC(vec2 p){ //reflect across the unit circle
    return invert(p, Circle(vec2(0.0), -1.0, 0.0));
}
vec2 fold(vec2 p){
    vec2 newpt = p;
    if(outsideL(p)) {newpt=reflectL(p);}
    if(outsideR(p)) {newpt=reflectR(p);}
    if(outsideC(p)) {newpt=reflectC(p);}
    return newpt;
}

vec2 foldToFundamental(vec2 p){
    vec2 folded=p;
    //if (folded.y<0.) {folded.y*=-1.;}
    for(int i=0; i<=checks; i++){
        folded=fold(folded);
        // if(isInsideFundamental(folded)){
        //     break;
        // }
    }
    return folded;
}


// --- 3. APOLLONIAN SOLVER ---

/**.
 * Returns mat4 where columns represent circles.
 * Format for Circle: vec4(curvature, k*x, k*y, q)
 * Format for Line:   vec4(0.0, normal.x, normal.y, offset)
 */
mat4 solveApollonianQuad(vec4 kInput) {
    vec4 k = kInput;
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;

    Circle c[4];
    ivec4 mapSortedToGeom; 

    // --- CASE 1: Two Lines (Strip Packing) ---
    if (zeros == 2) {
        // Line 1: Bottom Line at y = 0
        // Normal points UP (0, 1), Offset = 0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        // Use the first circle's curvature to determine the gap
        // Diameter = 2.0 / curvature
        float kCircle = (abs(k.z) > EPS) ? k.z : k.w;
        float gap = 2.0 / kCircle; 

        // Line 2: Top Line at y = gap
        // Normal points DOWN (0, -1)
        // Offset logic: dot(n, p) = w  ->  dot((0,-1), (0, gap)) = -gap
        c[1] = Circle(vec2(0.0, 1.0), 0.0, gap); 

        // Circles 3 & 4 (Placed in the gap)
        float k1 = k.z; 
        float k2 = k.w;
        
        // y = 1/k is the radius, effectively centering them in the gap
        c[2] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        c[3] = Circle(vec2(-2.0/k2, 1.0/k2), k2, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 2: One Line (Plane Packing) ---
    else if (zeros == 1) {
        // Line at y=0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        float k1 = k.y, k2 = k.z, k3 = k.w;
        c[1] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        
        float xc2 = 2.0 / sqrt(k1 * k2);
        c[2] = Circle(vec2(xc2, 1.0/k2), k2, 0.0);
        
        float xc3 = 2.0 / sqrt(k1 * k3);
        c[3] = Circle(vec2(xc3, 1.0/k3), k3, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 3: Standard (All Circles) ---
    else {
        float a, b, c_val, d;
        if (k.x < -EPS) {
             a = k.x; b = k.y; c_val = k.z; d = k.w;
             mapSortedToGeom = ivec4(3, 0, 1, 2); 
        } else {
             b = k.x; c_val = k.y; d = k.z; a = k.w;
             mapSortedToGeom = ivec4(0, 1, 2, 3); 
        }

        c[0] = Circle(vec2(0.0, 1.0/b), b, 0.0);
        float xc = 2.0 / sqrt(b * c_val);
        c[1] = Circle(vec2(xc, 1.0/c_val), c_val, 0.0);

        // Trilateration for D
        float rB = 1.0/b; float rC = 1.0/c_val; float rD = 1.0/d;
        float distB = rB + rD; float distC = rC + rD;
        vec2 posB = c[0].center; vec2 posC = c[1].center;
        float distCenters = distance(posB, posC);
        
        float x_local = (distB*distB - distC*distC + distCenters*distCenters) / (2.0 * distCenters);
        float y_local = sqrt(max(0.0, distB*distB - x_local*x_local));
        vec2 dir = (posC - posB) / distCenters;       
        vec2 normal = vec2(-dir.y, dir.x);            
        vec2 posD = posB + x_local * dir - y_local * normal;
        c[2] = Circle(posD, d, 0.0);
        
        // Descartes for A
        float sum_curv = a + b + c_val + d;
        vec2 s_kz = vec2(0.0);
        vec2 s_k2z = vec2(0.0);
        for(int i=0; i<3; i++) {
            s_kz  += c[i].curvature * c[i].center;
            s_k2z += (c[i].curvature * c[i].curvature) * c[i].center;
        }
        float denom = (a*a) - (0.5 * sum_curv * a);
        if (abs(denom) < 1e-9) denom = 1.0;
        vec2 posA = ((0.5 * sum_curv * s_kz) - s_k2z) / denom;
        c[3] = Circle(posA, a, 0.0);
    }

    // --- Output Construction ---
    mat4 result;
    for(int i=0; i<4; i++) {
        int geomIndex = mapSortedToGeom[i];
        int originalIndex = idx[i];
        
        Circle geom = c[geomIndex];
        float p = geom.curvature;
        vec4 col;
        
        if (abs(p) < EPS) {
            // LINE ENCODING: x=0, y=nx, z=ny, w=offset
            col = vec4(0.0, geom.center.x, geom.center.y, geom.offset);
        } else {
            // CIRCLE ENCODING: x=k, y=kx, z=ky, w=q
            float r = p * geom.center.x;
            float s = p * geom.center.y;
            float q = (r*r + s*s - 1.0) / p;
            col = vec4(p, r, s, q);
        }
        //result[geomIndex]=col;
        result[originalIndex]=col;
    }
    
    return result;
}

// Convert vec4 back to Geometric Circle
Circle toGeom(vec4 v) {
    // Line Case (Curvature v.x is 0)
    if (abs(v.x) < EPS) {
        // center = (v.y, v.z), curvature = 0, offset = v.w
        return Circle(vec2(v.y, v.z), 0.0, v.w);
    }
    // Circle Case
    return Circle(vec2(v.y/v.x, v.z/v.x), v.x, 0.0);
}

vec4 ptToQuad(vec2 p){
    float a= p.x;
    float b= p.y;
    return vec4(2.*b, 2.*(1.-b), 2.*(a*a+b*b-b), 2.*(1.+a*a+b*b-b+2.*a));
}

vec2 quadToPt(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    return vec2(-(a+b+c-d)/(2.*(a+b)), (a)/((a+b)));
}

Circle[4] circQuad(vec4 quad){
    mat4 pack = solveApollonianQuad(quad);
    Circle cc0=  toGeom(pack[0]);
    Circle cc1=  toGeom(pack[1]);
    Circle cc2=  toGeom(pack[2]);
    Circle cc3=  toGeom(pack[3]);

    Circle[4] result = Circle[4](cc0, cc1, cc2, cc3);
    return result;
}

Circle[4] circDual(Circle[4] maincirc){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle dualCirc[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(dualCirc);

    return dualCirc;
}

vec3 packing(Circle[4] maincirc, vec2 p){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle circ[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(circ);
    
    vec3 color = vec3(0.8,0.8,0.8);
   
    //continually swapping through dual circles will eventually get you to one of the main
    //circles and once in a main circle color it.
    // Iterate inversions
    int i;
    for (i = 0; i < 100; i++) {
        if (isInside(p, cc1)) {
            color = pink;
            break;
        } else if (isInside(p, cc2)) {
            color = purple;
            break;
        } else if (isInside(p, cc3)) {
            color = yellow;
            break;
        } else if (isInside(p, cc0)) {
            color = green;
            break;
        }
        if (isInside(p, circ[0])) {
            p = invert(p, circ[0]);
        } else if (isInside(p, circ[1])) {
            p = invert(p, circ[1]);
        } else if (isInside(p, circ[2])) {
            p = invert(p, circ[2]);
        } else if (isInside(p, circ[3])) {
            p = invert(p, circ[3]);
        } 
    }
    return color;
}

`,Yr=Object.freeze(Object.defineProperty({__proto__:null,default:Xr},Symbol.toStringTag,{value:"Module"})),Wr=`vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}



vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    //fixed papcking
    vec4 QuadFix= vec4(-1.,2.,2.,3.);
    QuadFix= vec4(2.,0.,1.,(1.+sqrt(2.))*(1.+sqrt(2.)));
    float curv0 = 1.0;
    float phi = (sqrt(5.)+1.)/2.;
    float curv1 = phi - sqrt(phi);
    float curv2 = curv1 * curv1;
    float curv3 = curv2 * curv1;

    QuadFix=vec4(curv0,curv1,curv2,curv3);
    //fix a packing and see the point in the parameter space
    vec2 fixedPt= quadToPt(QuadFix);
    vec2 foldedPt=foldToFundamental(fixedPt);
    


    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);



    // Apply Möbius transformation: w = 1/(z - fixedPt)
    fixedPt=foldedPt;
    vec2 diff = p - fixedPt;
    float denominator = dot(p, p); // |z - fixedPt|²

    // Complex division: 1/(a + ib) = (a - ib)/(a² + b²)
    vec2 transformedP = vec2(p.x, -p.y) / denominator + fixedPt;

    // Apply the packing to the transformed point
    vec4 quad=vec4(0.,0.,2.,2.);
    Circle[4] mainCirc = circQuad(quad);
    color = packing(mainCirc, transformedP);    

    if(isOnBoundary(transformedP, mainCirc[0], thick)) {
        color = BLACK;;
    } else if(isOnBoundary(transformedP, mainCirc[1], thick)) {
        color = BLACK;
    } else if(isOnBoundary(transformedP, mainCirc[2], thick)) {
        color = BLACK;
    } else if(isOnBoundary(transformedP, mainCirc[3], thick)) {
        color = BLACK;
    }
    //Optional: Draw a small marker at the mouse position
    // if (length(p - mouseUV) < 0.05) {
    //     color = mix(color, vec3(1.0, 0.0, 0.0), 0.5);
    // }

    //  p = normalize_coord(fragCoord);
    // if (length(p - fixedPt) < 0.05) {
    //     color = vec3(0.0, 0.0, 1.0);
    // }

    fragColor = vec4(color, 1.0);

}
`,Zr=Object.freeze(Object.defineProperty({__proto__:null,default:Wr},Symbol.toStringTag,{value:"Module"})),Jr=`vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}

vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 100.50;
}





void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    //constants
    //fixed papcking
    vec4 QuadFix= vec4(2.,0.,1.,(1.+sqrt(2.))*(1.+sqrt(2.)));
    float curv0 = 1.0;
    float phi = (sqrt(5.)+1.)/2.;
    float curv1 = phi - sqrt(phi);
    float curv2 = curv1 * curv1;
    float curv3 = curv2 * curv1;

    QuadFix=vec4(curv0,curv1,curv2,curv3);
    //fix a packing and see the point in the parameter space
    vec2 fixedPt= quadToPt(QuadFix);
    vec2 foldedPt=foldToFundamental(fixedPt);


    vec3 color;

    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

   
   // vec4 newQuad = ptToQuad(fixedPt);
    vec4 newQuad = ptToQuad(foldedPt);
    newQuad=QuadFix;
    Circle[4] mainCirc = circQuad(newQuad);
    color = packing(mainCirc, p);
    thick=0.3;

    if(isOnBoundary(p, mainCirc[0], thick)) {
        color = BLACK;;
    } else if(isOnBoundary(p, mainCirc[1], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[2], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[3], thick)) {
        color = BLACK;
    }

    
    fragColor = vec4(color, 1.0);


//    vec3 color;

//     vec2 p = normalize_coord(fragCoord);
//     color=vec3(0);

//     //get c from mouse position on the mandelbrot side
//     vec2 stripMouseUV = iMouse_stripPack.xy / iResolution_stripPack.xy;
//     vec2 c = stripMouseUV - vec2(0.5, 0.5);
//     c.x *= iResolution_stripPack.x / iResolution_stripPack.y;
//     c*=6.50;
   
//     vec4 newQuad = ptToQuad(c);
//     Circle[4] mainCirc = circQuad(newQuad);
//     color = packing(mainCirc, p);

//     if(isOnBoundary(p, mainCirc[0], thick)) {
//         color = BLACK;;
//     } else if(isOnBoundary(p, mainCirc[1], thick)) {
//         color = BLACK;
//     } else if(isOnBoundary(p, mainCirc[2], thick)) {
//         color = BLACK;
//     } else if(isOnBoundary(p, mainCirc[3], thick)) {
//         color = BLACK;
//     }

    
//     fragColor = vec4(color, 1.0);


    
}
`,ec=Object.freeze(Object.defineProperty({__proto__:null,default:Jr},Symbol.toStringTag,{value:"Module"})),nc=`vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}


vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    //constants
    //fixed papcking
    vec4 QuadFix= vec4(-1.,2.,2.,3.);
    QuadFix= vec4(2.,0.,1.,(1.+sqrt(2.))*(1.+sqrt(2.)));

    float curv0 = 1.0;
    float phi = (sqrt(5.)+1.)/2.;
    float curv1 = phi - sqrt(phi);
    float curv2 = curv1 * curv1;
    float curv3 = curv2 * curv1;

    QuadFix=vec4(curv0,curv1,curv2,curv3);
    QuadFix=vec4(209.*sqrt(3.), -209.*sqrt(3.) + 366., -209.*sqrt(3.) + 422., -209.*sqrt(3.) + 1094.);
    //fix a packing and see the point in the parameter space
    vec2 fixedPt= quadToPt(QuadFix);
    vec2 foldedPt=foldToFundamental(fixedPt);

    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    vec4 quad=vec4(0.,0.,2.,2.);
    Circle[4] mainCirc = circQuad(quad);
    color = packing(mainCirc, p);    

    if(isOnBoundary(p, mainCirc[0], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[1], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[2], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[3], thick)) {
        color = BLACK;
    }
  
    
    p = normalize_coord(fragCoord);
    if (length(p - fixedPt) < 0.03) {
        color = vec3(1.0, 0.0, 0.0);
    }
    if (length(p - foldedPt) < 0.03) {
        color = vec3(1.0, 0.0, 0.0);
    }
  
    

    fragColor = vec4(color, 1.0);
    
}
`,tc=Object.freeze(Object.defineProperty({__proto__:null,default:nc},Symbol.toStringTag,{value:"Module"})),ic=`float EPS=1e-4;

float thick= 0.01;
int checks = 100;

vec3 BLACK = vec3(0.0, 0.0, 0.0);
vec3 WHITE = vec3(1.0, 1.0, 1.0);
vec3 BLUE = vec3(0.,0.,1.);
vec3 Red = vec3(1.,0.,0.);
vec3 Blue = vec3(0.4,0.8,0.94); //cyan
vec3 Purple=vec3(0.60,0.30,0.70); //purple 
vec3 Pink=vec3(1.0,0.20,0.860); //pink
vec3 Green=vec3(0.20,0.80,0.50); //green
vec3 Yellow=vec3(1.0,0.750,0.30); //orange

//colors for the circles
vec3 purple=vec3(0.70,0.40,0.90); //purple 
vec3 pink=vec3(01.0,0.450,0.550); //pink
vec3 yellow=vec3(1.0,01.0,0.30); //yellow
vec3 green=vec3(0.30,01.0,0.40); //green

// --- 1. CORE STRUCTURES & MATH ---

vec2 cmul(vec2 z, vec2 w) {
    return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

// Updated Struct: Supports Lines explicitly
struct Circle {
    vec2 center;     // Circle: (cx, cy). Line: Normal (nx, ny). normal points toward interior
    float curvature; // Circle: 1/r. Line: 0.0.
    float offset;    // Circle: 0.0. Line: w (where dot(n,p) = w).
};

// Unit vector helper
vec2 u(float a) {
    return vec2(cos(a), sin(a));
}

// --- 2. GEOMETRIC FUNCTIONS ---

// Invert a point 'z' through a Circle or reflect across a Line
vec2 invert(vec2 z, Circle C) {
    // Case: Line (Reflection)
    if (abs(C.curvature) < EPS) {
        // Formula: p' = p - 2 * (dot(n, p) - w) * n
        float distSigned = dot(z, C.center) - C.offset;
        return z - 2.0 * distSigned * C.center;
    }
    // Case: Circle (Inversion)
    vec2 difference = z - C.center;
    float rad = 1.0 / C.curvature;
    float mult = (rad * rad) / dot(difference, difference);
    return C.center + mult * difference;
}

// Check if a point is "inside" the shape
bool isInside(vec2 p, Circle c) {
    float k = c.curvature;
    
    // Case: Line (Half-plane check)
    if (abs(k) < EPS) {
        // We assume Normal points TOWARDS the interior
        //vec2 diff=c.offset*(c.center)-p;
        return dot(p, c.center) > c.offset; 
    }
    // Case: Standard Circle (Interior)
    else if (k > 0.0) {
        return length(p - c.center) < (1.0 / k);
    }
    // Case: Exterior Circle (Outside of a hole)
    else {
        return length(p - c.center) > abs(1.0 / k);
    }
}

// Distance to shape boundary
float distToCircle(vec2 p, Circle C) {
    // Case: Line
    if (abs(C.curvature) < EPS) {
        return (dot(p, C.center) - C.offset);
    }
    // Case: Circle
    float radius = 1.0 / C.curvature;
    return (length(p - C.center) - abs(radius));
}


// Check if a point is on the "boundary" (within a small epsilon)
bool isOnBoundary(vec2 p, Circle c, float thickness) {
    float dist = distToCircle(p, c);
    return -thickness < dist && dist < 0.;
}

Circle lineFromPoints(vec2 A, vec2 B) {
    vec2 t = normalize(B - A);        // Tangent
    vec2 n = vec2(-t.y, t.x);        // Normal
    float w = dot(n, A);             // Offset
    return Circle(n, 0.0, w);
}


// Construct a Circle/Line from 3 Points
Circle circleFromThreePoints(vec3 A, vec3 B, vec3 C) {
    float zA = A.z;
    float zB = B.z;
    float zC = C.z;
    
    //Case: Line
    if(zA==0.0){
        return lineFromPoints(B.xy, C.xy);
    }
    if(zB==0.0){
        return lineFromPoints(A.xy, C.xy);
    }
    if(zC==0.0){
        return lineFromPoints(A.xy, B.xy);
    }
    
    vec2 a = A.xy;
    vec2 b = B.xy;
    vec2 c = C.xy;

    vec2 ab = b - a;
    vec2 ac = c - a;
    float d = 2.0 * (ab.x * ac.y - ab.y * ac.x);

    if(abs(d)<EPS){
        return lineFromPoints(A.xy, B.xy);
    }

    // Case: Circle
    vec2 u = vec2(
        ac.y * dot(ab, ab) - ab.y * dot(ac, ac),
        ab.x * dot(ac, ac) - ac.x * dot(ab, ab)
    ) / d;
    vec2 center = a + u;
    float radius = length(u);
    
    return Circle(center, 1./radius, 0.0);
}

// Find tangent point between two shapes
vec3 getTangentPoint(Circle c1, Circle c2) {
    float k1 = c1.curvature;
    float k2 = c2.curvature;
    float epsilon = EPS;

    bool isLine1 = abs(k1) < EPS;
    bool isLine2 = abs(k2) < EPS;

    // Case: Two Lines (Parallel in packing -> Point at Infinity)
    if (isLine1 && isLine2) return vec3(0); // Simplified infinity

    // Case: Line and Circle
    // Tangency = CircleCenter - Radius * LineNormal
    if (isLine1) return vec3(c2.center + (c1.center / c2.curvature), 1.0);
    if (isLine2) return vec3(c1.center + (c2.center / c1.curvature), 1.0);

    // Case: Two Circles
    return vec3((k1 * c1.center + k2 * c2.center) / (k1 + k2), 1.0);
}


//helper function for descartes equation
bool checkDesc(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    return abs(2.*(a*a+b*b+c*c+d*d)-(a+b+c+d)*(a+b+c+d))<EPS;

}

//helper func for orient a line based on circle 
void orientLine( inout Circle line, Circle c){
    if(isInside(c.center,line)){
        line.center*=-1.;
        line.offset*=-1.;
    }   
}

// Helper: Swap for sorting
void swap(inout float a, inout float b, inout int idxA, inout int idxB) {
    if (a > b) {
        float t = a; 
        a = b; 
        b = t;
        int ti = idxA; 
        idxA = idxB; 
        idxB = ti;
    }
}

//helper function for sorting quadruple
vec4 sortQuad(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(a, b, idx.x, idx.y);
    swap(c, d, idx.z, idx.w);
    swap(a, c, idx.x, idx.z);
    swap(b, d, idx.y, idx.w);
    swap(b, c, idx.y, idx.z);

    return vec4(a,b,c,d);
}

//orienting the dual circles
void dualOrient(inout Circle circ[4]){
    //finding zero curvatures if any
    vec4 k = vec4(circ[0].curvature, circ[1].curvature, circ[2].curvature, circ[3].curvature);
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;
    
    //no lines
    //checking desc equation
    if(zeros==0 && !checkDesc(k)) circ[idx.x].curvature= -circ[idx.x].curvature;
    //one line
    if(zeros>0){
        orientLine(circ[idx.x], circ[idx.w]);
        //second line if any
        if(zeros==2){
            orientLine(circ[idx.y],circ[idx.w]);
        }
    }
}

//move a point to the fundemental domain of the symmetry group of PGL(2,Z)
bool outsideL(vec2 p){ //tests if to the right of the line x=-1/2
    return p.x<-0.5;
}
vec2 reflectL(vec2 p){ //reflect across the line x=-1/2
    return vec2(-p.x-1., p.y);
}
bool outsideR(vec2 p){ //tests if to the left of the line x=0
    return p.x>0.;
}
vec2 reflectR(vec2 p){ //reflect across the line x=0
    return vec2(-p.x, p.y);
}
bool outsideC(vec2 p){ //tests if outside the unit circle
    return length(p)<1.;;
}
bool isInsideFundamental(vec2 p){
    return !outsideL(p) && !outsideR(p) && !outsideC(p) && p.y>=0.;
}
vec2 reflectC(vec2 p){ //reflect across the unit circle
    return invert(p, Circle(vec2(0.0), -1.0, 0.0));
}
vec2 fold(vec2 p){
    vec2 newpt = p;
    if(outsideL(p)) {newpt=reflectL(p);}
    if(outsideR(p)) {newpt=reflectR(p);}
    if(outsideC(p)) {newpt=reflectC(p);}
    return newpt;
}

vec2 foldToFundamental(vec2 p){
    vec2 folded=p;
    //if (folded.y<0.) {folded.y*=-1.;}
    for(int i=0; i<=checks; i++){
        folded=fold(folded);
        // if(isInsideFundamental(folded)){
        //     break;
        // }
    }
    return folded;
}


// --- 3. APOLLONIAN SOLVER ---

/**.
 * Returns mat4 where columns represent circles.
 * Format for Circle: vec4(curvature, k*x, k*y, q)
 * Format for Line:   vec4(0.0, normal.x, normal.y, offset)
 */
mat4 solveApollonianQuad(vec4 kInput) {
    vec4 k = kInput;
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;

    Circle c[4];
    ivec4 mapSortedToGeom; 

    // --- CASE 1: Two Lines (Strip Packing) ---
    if (zeros == 2) {
        // Line 1: Bottom Line at y = 0
        // Normal points UP (0, 1), Offset = 0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        // Use the first circle's curvature to determine the gap
        // Diameter = 2.0 / curvature
        float kCircle = (abs(k.z) > EPS) ? k.z : k.w;
        float gap = 2.0 / kCircle; 

        // Line 2: Top Line at y = gap
        // Normal points DOWN (0, -1)
        // Offset logic: dot(n, p) = w  ->  dot((0,-1), (0, gap)) = -gap
        c[1] = Circle(vec2(0.0, 1.0), 0.0, gap); 

        // Circles 3 & 4 (Placed in the gap)
        float k1 = k.z; 
        float k2 = k.w;
        
        // y = 1/k is the radius, effectively centering them in the gap
        c[2] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        c[3] = Circle(vec2(-2.0/k2, 1.0/k2), k2, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 2: One Line (Plane Packing) ---
    else if (zeros == 1) {
        // Line at y=0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        float k1 = k.y, k2 = k.z, k3 = k.w;
        c[1] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        
        float xc2 = 2.0 / sqrt(k1 * k2);
        c[2] = Circle(vec2(xc2, 1.0/k2), k2, 0.0);
        
        float xc3 = 2.0 / sqrt(k1 * k3);
        c[3] = Circle(vec2(xc3, 1.0/k3), k3, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 3: Standard (All Circles) ---
    else {
        float a, b, c_val, d;
        if (k.x < -EPS) {
             a = k.x; b = k.y; c_val = k.z; d = k.w;
             mapSortedToGeom = ivec4(3, 0, 1, 2); 
        } else {
             b = k.x; c_val = k.y; d = k.z; a = k.w;
             mapSortedToGeom = ivec4(0, 1, 2, 3); 
        }

        c[0] = Circle(vec2(0.0, 1.0/b), b, 0.0);
        float xc = 2.0 / sqrt(b * c_val);
        c[1] = Circle(vec2(xc, 1.0/c_val), c_val, 0.0);

        // Trilateration for D
        float rB = 1.0/b; float rC = 1.0/c_val; float rD = 1.0/d;
        float distB = rB + rD; float distC = rC + rD;
        vec2 posB = c[0].center; vec2 posC = c[1].center;
        float distCenters = distance(posB, posC);
        
        float x_local = (distB*distB - distC*distC + distCenters*distCenters) / (2.0 * distCenters);
        float y_local = sqrt(max(0.0, distB*distB - x_local*x_local));
        vec2 dir = (posC - posB) / distCenters;       
        vec2 normal = vec2(-dir.y, dir.x);            
        vec2 posD = posB + x_local * dir - y_local * normal;
        c[2] = Circle(posD, d, 0.0);
        
        // Descartes for A
        float sum_curv = a + b + c_val + d;
        vec2 s_kz = vec2(0.0);
        vec2 s_k2z = vec2(0.0);
        for(int i=0; i<3; i++) {
            s_kz  += c[i].curvature * c[i].center;
            s_k2z += (c[i].curvature * c[i].curvature) * c[i].center;
        }
        float denom = (a*a) - (0.5 * sum_curv * a);
        if (abs(denom) < 1e-9) denom = 1.0;
        vec2 posA = ((0.5 * sum_curv * s_kz) - s_k2z) / denom;
        c[3] = Circle(posA, a, 0.0);
    }

    // --- Output Construction ---
    mat4 result;
    for(int i=0; i<4; i++) {
        int geomIndex = mapSortedToGeom[i];
        int originalIndex = idx[i];
        
        Circle geom = c[geomIndex];
        float p = geom.curvature;
        vec4 col;
        
        if (abs(p) < EPS) {
            // LINE ENCODING: x=0, y=nx, z=ny, w=offset
            col = vec4(0.0, geom.center.x, geom.center.y, geom.offset);
        } else {
            // CIRCLE ENCODING: x=k, y=kx, z=ky, w=q
            float r = p * geom.center.x;
            float s = p * geom.center.y;
            float q = (r*r + s*s - 1.0) / p;
            col = vec4(p, r, s, q);
        }
        //result[geomIndex]=col;
        result[originalIndex]=col;
    }
    
    return result;
}

// Convert vec4 back to Geometric Circle
Circle toGeom(vec4 v) {
    // Line Case (Curvature v.x is 0)
    if (abs(v.x) < EPS) {
        // center = (v.y, v.z), curvature = 0, offset = v.w
        return Circle(vec2(v.y, v.z), 0.0, v.w);
    }
    // Circle Case
    return Circle(vec2(v.y/v.x, v.z/v.x), v.x, 0.0);
}

vec4 ptToQuad(vec2 p){
    float a= p.x;
    float b= p.y;
    return vec4(2.*b, 2.*(1.-b), 2.*(a*a+b*b-b), 2.*(1.+a*a+b*b-b+2.*a));
}

vec2 quadToPt(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    return vec2(-(a+b+c-d)/(2.*(a+b)), (a)/((a+b)));
}

Circle[4] circQuad(vec4 quad){
    mat4 pack = solveApollonianQuad(quad);
    Circle cc0=  toGeom(pack[0]);
    Circle cc1=  toGeom(pack[1]);
    Circle cc2=  toGeom(pack[2]);
    Circle cc3=  toGeom(pack[3]);

    Circle[4] result = Circle[4](cc0, cc1, cc2, cc3);
    return result;
}

Circle[4] circDual(Circle[4] maincirc){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle dualCirc[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(dualCirc);

    return dualCirc;
}

vec3 packing(Circle[4] maincirc, vec2 p){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle circ[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(circ);
    
    vec3 color = vec3(0.8,0.8,0.8);
   
    //continually swapping through dual circles will eventually get you to one of the main
    //circles and once in a main circle color it.
    // Iterate inversions
    int i;
    for (i = 0; i < 100; i++) {
        if (isInside(p, cc1)) {
            color = pink;
            break;
        } else if (isInside(p, cc2)) {
            color = purple;
            break;
        } else if (isInside(p, cc3)) {
            color = yellow;
            break;
        } else if (isInside(p, cc0)) {
            color = green;
            break;
        }
        if (isInside(p, circ[0])) {
            p = invert(p, circ[0]);
        } else if (isInside(p, circ[1])) {
            p = invert(p, circ[1]);
        } else if (isInside(p, circ[2])) {
            p = invert(p, circ[2]);
        } else if (isInside(p, circ[3])) {
            p = invert(p, circ[3]);
        } 
    }
    return color;
}

// --- 4. APOLLONIAN WORD TRAVERSAL ---

// Apply the i-th Apollonian group generator to quadruple q.
// Replaces q[i] with -q[i] + 2*(sum of other 3), i.e. 2*S - 3*q[i],
// which is the Descartes soddy-swap formula: a + a' = 2(b+c+d).
vec4 applySwap(vec4 q, int i) {
    float S = q.x + q.y + q.z + q.w;
    float v = 2.0*S - 3.0*q[i];
    if      (i == 0) return vec4(v,   q.y, q.z, q.w);
    else if (i == 1) return vec4(q.x, v,   q.z, q.w);
    else if (i == 2) return vec4(q.x, q.y, v,   q.w);
    else             return vec4(q.x, q.y, q.z, v  );
}

// Same swap but reorders so the swapped curvature is always entry 0.
// After reordering, the undo-swap is always index 0 (not the original i),
// so wordGenerateColor only needs to skip swap 0 at every non-root node.
vec4 applySwapReorder(vec4 q, int i) {
    float S = q.x + q.y + q.z + q.w;
    float v = 2.0*S - 3.0*q[i];
    if      (i == 0) return vec4(v,   q.y, q.z, q.w);
    else if (i == 1) return vec4(v,   q.x, q.z, q.w);
    else if (i == 2) return vec4(v,   q.x, q.y, q.w);
    else             return vec4(v,   q.x, q.y, q.z);
}

// Check if quad q has a valid parameter-space point and is near pixel p.
// quadToPt requires q.x+q.y != 0 (the BQF denominator); guards against that.
bool checkQuadPoint(vec4 q, vec2 p, float dotR, vec3 dotColor, inout vec3 color) {
    if (abs(q.x + q.y) < EPS) return false;
    vec2 pt = foldToFundamental(quadToPt(q));
    if (length(p - pt) < dotR) {
        color = dotColor;
        return true;
    }
    return false;
}

// Walk all Apollonian words of length <= wordLen starting from rootQuad
// (translation of word_generate_circles / _generate_circles("word",...)).
// For each visited quadruple, computes quadToPt -> foldToFundamental and
// colors pixel p with dotColor if within dotR. Returns the final color.
//
// Iteration budget:  wordLen=4 -> ~161 nodes,  wordLen=5 -> ~485 nodes
// Set WORD_DEPTH >= wordLen and WORD_ITERS >= ~6 * (total nodes).
#define WORD_DEPTH 1
#define WORD_ITERS 50

vec3 wordGenerateColor(vec4 rootQuad, int wordLen, vec2 p, float dotR,
                       vec3 dotColor, vec3 baseColor) {
    vec3 color = baseColor;

    // Root quad (depth 0)
    checkQuadPoint(rootQuad, p, dotR, dotColor, color);

    if (wordLen < 1) return color;

    // Iterative DFS stack.
    // sQ[d]: quad at depth d
    // sP[d]: swap index that produced this quad (-1 for root)
    // sN[d]: next child swap index to try (0..3)
    vec4 sQ[WORD_DEPTH + 1];
    int  sP[WORD_DEPTH + 1];
    int  sN[WORD_DEPTH + 1];

    int top = 0;
    sQ[0] = rootQuad;
    sP[0] = -1;
    sN[0] = 0;

    for (int iter = 0; iter < WORD_ITERS; iter++) {
        if (top < 0) break;

        int nc = sN[top];

        if (nc >= 4) {          // exhausted all children: backtrack
            top--;
            continue;
        }
        if (nc == sP[top]) {    // skip: would undo the previous swap
            sN[top]++;
            continue;
        }

        vec4 childQ = applySwapReorder(sQ[top], nc);
        checkQuadPoint(childQ, p, dotR, dotColor, color);

        sN[top]++;              // advance to next sibling for when we return

        if (top < wordLen - 1) { // push child if we can go deeper
            top++;
            sQ[top] = childQ;
            sP[top] = 0;    // reordering always puts swapped entry at 0, so undo is always swap 0
            sN[top] = 0;
        }
    }

    return color;
}

//given a point in parameter space, gives matrix of different mother circles
mat4 equivQuad(vec2 mouse){
    vec4 newQuad = ptToQuad(mouse);
    vec4 sortedQuad0 = sortQuad(newQuad);
    
    float n=sortedQuad0[0];
    float a=sortedQuad0[1];
    float b=sortedQuad0[2];
    float c=sortedQuad0[3];
    
    mat4 equivQuads;
    equivQuads[0]=vec4(n,a,b,c);
    equivQuads[1]=vec4(a,n,b,c);
    equivQuads[2]=vec4(b,n,a,c);
    equivQuads[3]=vec4(c,n,a,b);
    
    return equivQuads;
}


`,rc=Object.freeze(Object.defineProperty({__proto__:null,default:ic},Symbol.toStringTag,{value:"Module"})),cc=`// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}



vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    //vec2 mouseUV = normalize_coord(iMouse_stripPack.xy);
    vec2 stripMouseUV = iMouse_stripPack.xy / iResolution_stripPack.xy;
    vec2 c = stripMouseUV - vec2(0.5, 0.5);
    c.x *= iResolution_stripPack.x / iResolution_stripPack.y;
    c *= 6.50;
    c = c / u_zoom_stripPack + u_pan_stripPack;

    // Apply Möbius transformation: w = 1/(z - mouse)
    vec2 diff = p - c;
    float denominator = dot(p, p); // |z - mouse|²

    // Complex division: 1/(a + ib) = (a - ib)/(a² + b²)
    vec2 transformedP = vec2(p.x, -p.y) / denominator + c;

    // Apply the packing to the transformed point
    vec4 quad=vec4(0.,0.,2.,2.);
    Circle[4] mainCirc = circQuad(quad);
    color = packing(mainCirc, transformedP);    

    if(isOnBoundary(transformedP, mainCirc[0], thick)) {
        color = BLACK;;
    } else if(isOnBoundary(transformedP, mainCirc[1], thick)) {
        color = BLACK;
    } else if(isOnBoundary(transformedP, mainCirc[2], thick)) {
        color = BLACK;
    } else if(isOnBoundary(transformedP, mainCirc[3], thick)) {
        color = BLACK;
    }
    

    fragColor = vec4(color, 1.0);

}
`,oc=Object.freeze(Object.defineProperty({__proto__:null,default:cc},Symbol.toStringTag,{value:"Module"})),ac=`
// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}

vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}





void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;

    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    //get c from mouse position on the mandelbrot side
    vec2 stripMouseUV = iMouse_stripPack.xy / iResolution_stripPack.xy;
    vec2 c = stripMouseUV - vec2(0.5, 0.5);
    c.x *= iResolution_stripPack.x / iResolution_stripPack.y;
    c *= 6.50;
    c = c / u_zoom_stripPack + u_pan_stripPack;

    vec4 newQuad = ptToQuad(c);
    Circle motherCirc = circQuad(newQuad)[0];

    vec4 sortedQuad = sortQuad(newQuad);
    Circle[4] mainCirc = circQuad(sortedQuad);
    color = packing(mainCirc, p);

    if(isInside(p, motherCirc)) {color=Red;}

    if(isOnBoundary(p, mainCirc[0], thick)) {
        color = BLACK;;
    } else if(isOnBoundary(p, mainCirc[1], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[2], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[3], thick)) {
        color = BLACK;
    }

    
    fragColor = vec4(color, 1.0);


   

    
}
`,sc=Object.freeze(Object.defineProperty({__proto__:null,default:ac},Symbol.toStringTag,{value:"Module"})),lc=`
// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}

vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}





void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;

    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    //get c from mouse position on the parameter space side
    vec2 stripMouseUV = iMouse_stripPack.xy / iResolution_stripPack.xy;
    vec2 c = stripMouseUV - vec2(0.5, 0.5);
    c.x *= iResolution_stripPack.x / iResolution_stripPack.y;
    c *= 6.50;
    c = c / u_zoom_stripPack + u_pan_stripPack;

    //vec4 newQuad = ptToQuad(c);
    mat4 permutedQuad = equivQuad(c);
    vec4 newQuad=permutedQuad[0];

    Circle motherCirc = circQuad(newQuad)[0];

    vec4 sortedQuad = sortQuad(newQuad);
    Circle[4] mainCirc = circQuad(sortedQuad);
    color = packing(mainCirc, p);

    if(isInside(p, motherCirc)) {color=Blue;}

    if(isOnBoundary(p, mainCirc[0], thick)) {
        color = BLACK;;
    } else if(isOnBoundary(p, mainCirc[1], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[2], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[3], thick)) {
        color = BLACK;
    }

    
    fragColor = vec4(color, 1.0);
    
}


// vec2 mouseUV = normalize_coord(iMouse_stripPack.xy);

//     //get equiv quads
//     mat4 permutedQuad = equivQuad(mouseUV);
//     vec2 permutedPt0 = quadToPt(permutedQuad[0]);



//     // Apply Möbius transformation: w = 1/(z - mouse)
//     vec2 diff = p - permutedPt0;
//     float denominator = dot(p, p); // |z - mouse|²

//     // Complex division: 1/(a + ib) = (a - ib)/(a² + b²)
//     vec2 transformedP = vec2(p.x, -p.y) / denominator + permutedPt0;

//     // Apply the packing to the transformed point
//     vec4 quad=vec4(0.,0.,2.,2.);
//     Circle[4] mainCirc = circQuad(quad);
//     color = packing(mainCirc, transformedP);    

//     if(isOnBoundary(transformedP, mainCirc[0], thick)) {
//         color = BLACK;;
//     } else if(isOnBoundary(transformedP, mainCirc[1], thick)) {
//         color = BLACK;
//     } else if(isOnBoundary(transformedP, mainCirc[2], thick)) {
//         color = BLACK;
//     } else if(isOnBoundary(transformedP, mainCirc[3], thick)) {
//         color = BLACK;
//     }
//     // Optional: Draw a small marker at the mouse position
//     if (length(p - permutedPt0) < 0.05) {
//         color = mix(color, vec3(1.0, 0.0, 0.0), 0.5);
//     }

//     fragColor = vec4(color, 1.0);`,uc=Object.freeze(Object.defineProperty({__proto__:null,default:lc},Symbol.toStringTag,{value:"Module"})),dc=`
// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}

vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}





void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;

    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    //get c from mouse position on the parameter space side
    vec2 stripMouseUV = iMouse_stripPack.xy / iResolution_stripPack.xy;
    vec2 c = stripMouseUV - vec2(0.5, 0.5);
    c.x *= iResolution_stripPack.x / iResolution_stripPack.y;
    c *= 6.50;
    c = c / u_zoom_stripPack + u_pan_stripPack;

    //vec4 newQuad = ptToQuad(c);
    mat4 permutedQuad = equivQuad(c);
    vec4 newQuad=permutedQuad[1];

    Circle motherCirc = circQuad(newQuad)[0];

    vec4 sortedQuad = sortQuad(newQuad);
    Circle[4] mainCirc = circQuad(sortedQuad);
    color = packing(mainCirc, p);

    if(isInside(p, motherCirc)) {color=Purple;}
    

    if(isOnBoundary(p, mainCirc[0], thick)) {
        color = BLACK;;
    } else if(isOnBoundary(p, mainCirc[1], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[2], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[3], thick)) {
        color = BLACK;
    }

    
    fragColor = vec4(color, 1.0);


   

    
}
`,pc=Object.freeze(Object.defineProperty({__proto__:null,default:dc},Symbol.toStringTag,{value:"Module"})),fc=`
// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}

vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}





void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;

    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    //get c from mouse position on the parameter space side
    vec2 stripMouseUV = iMouse_stripPack.xy / iResolution_stripPack.xy;
    vec2 c = stripMouseUV - vec2(0.5, 0.5);
    c.x *= iResolution_stripPack.x / iResolution_stripPack.y;
    c *= 6.50;
    c = c / u_zoom_stripPack + u_pan_stripPack;

    //vec4 newQuad = ptToQuad(c);
    mat4 permutedQuad = equivQuad(c);
    vec4 newQuad=permutedQuad[2];

    Circle motherCirc = circQuad(newQuad)[0];

    vec4 sortedQuad = sortQuad(newQuad);
    Circle[4] mainCirc = circQuad(sortedQuad);
    color = packing(mainCirc, p);

    if(isInside(p, motherCirc)) {color=Green;}

    if(isOnBoundary(p, mainCirc[0], thick)) {
        color = BLACK;;
    } else if(isOnBoundary(p, mainCirc[1], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[2], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[3], thick)) {
        color = BLACK;
    }

    
    fragColor = vec4(color, 1.0);


   

    
}
`,vc=Object.freeze(Object.defineProperty({__proto__:null,default:fc},Symbol.toStringTag,{value:"Module"})),mc=`
// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}

vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}





void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;

    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    //get c from mouse position on the parameter space side
    vec2 stripMouseUV = iMouse_stripPack.xy / iResolution_stripPack.xy;
    vec2 c = stripMouseUV - vec2(0.5, 0.5);
    c.x *= iResolution_stripPack.x / iResolution_stripPack.y;
    c *= 6.50;
    c = c / u_zoom_stripPack + u_pan_stripPack;

    //vec4 newQuad = ptToQuad(c);
    mat4 permutedQuad = equivQuad(c);
    vec4 newQuad=permutedQuad[3];

    Circle motherCirc = circQuad(newQuad)[0];

    vec4 sortedQuad = sortQuad(newQuad);
    Circle[4] mainCirc = circQuad(sortedQuad);
    color = packing(mainCirc, p);

    if(isInside(p, motherCirc)) {color=Pink;}

    if(isOnBoundary(p, mainCirc[0], thick)) {
        color = BLACK;;
    } else if(isOnBoundary(p, mainCirc[1], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[2], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[3], thick)) {
        color = BLACK;
    }

    
    fragColor = vec4(color, 1.0);


   

    
}
`,hc=Object.freeze(Object.defineProperty({__proto__:null,default:mc},Symbol.toStringTag,{value:"Module"})),gc=`// --- 4. RENDER LOGIC ---
vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50 / u_zoom_stripPack + u_pan_stripPack;
}

Circle unitCircle = Circle(vec2(0.0, 0.0), 1.0, 0.0);

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    vec4 quad=vec4(0.,0.,2.,2.);
    Circle[4] mainCirc = circQuad(quad);
    color = packing(mainCirc, p);    

    float t = thick / u_zoom_stripPack;
    float dotR = 0.05 / u_zoom_stripPack;

    if(isOnBoundary(p, mainCirc[0], t)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[1], t)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[2], t)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[3], t)) {
        color = BLACK;
    }


    //showing where the mouse is in the parameter space

    vec2 mouseUV = normalize_coord(iMouse_stripPack.xy);
    p = normalize_coord(fragCoord);

    //fundemental domain of PGL(2,Z)
    if(abs(p.x+1./2.) < t && (p.y) >= sqrt(3.)/2.){
        color = BLACK;
    }
    if(abs(p.x) < t && (p.y) >= 1.){
        color = BLACK;
    }
    if(isOnBoundary(p, unitCircle, 2.*t) && -1./2.<=p.x && p.x<=0. && p.y>=0.){
        color = BLACK;
    }


    float error=dotR;
    vec4 newQuad = ptToQuad(p);
    if(abs(newQuad[2]-newQuad[3])<error){
        color=Purple;
    }
    else if(abs(newQuad[0]-newQuad[1])<error){
        color=Purple;
    }
    else if(abs(newQuad[0]-newQuad[2])<error){
        color=Purple;
    }
    else if(abs(newQuad[0]-newQuad[3])<error){
        color=Purple;
    }
    //this is the unit circle 
    else if(abs(newQuad[1]-newQuad[2])<error){
        color=Purple;
    }
    else if(abs(newQuad[1]-newQuad[3])<error){
        color=Purple;
    }

    // word_generate_circles: Apollonian orbit up to word length 4.
    // Each swap reorders so the swapped curvature becomes entry 0,
    // so quadToPt always reads the active circle — no permutation explosion.
    vec4 mouseQuad = ptToQuad(mouseUV);
    color = wordGenerateColor(mouseQuad, 4, p, dotR, Blue, color);

     //showing equivalent points in the parameter space as just quadruples that are equivalent to the mouse position
    mat4 permutedQuad = equivQuad(mouseUV);
    vec2 permutedPt0= quadToPt(permutedQuad[0]);
    vec2 permutedPt1= quadToPt(permutedQuad[1]);
    vec2 permutedPt2= quadToPt(permutedQuad[2]);
    vec2 permutedPt3= quadToPt(permutedQuad[3]);

    //fold into fundemental domain
    vec2 fundPt0= foldToFundamental(permutedPt0);
    vec2 fundPt1= foldToFundamental(permutedPt1);
    vec2 fundPt2= foldToFundamental(permutedPt2);
    vec2 fundPt3= foldToFundamental(permutedPt3);

    //mark the new points
    if (length(p - fundPt0) < dotR) {
        color = Blue;
    }
    if (length(p - fundPt1) < dotR) {
        color = Purple;
    }
    if (length(p - fundPt2) < dotR) {
        color = Green;
    }
    if (length(p - fundPt3) < dotR) {
        color = Pink;
    }

     if (length(p - mouseUV) < dotR) {
        color = vec3(1.0, 0.0, 0.0);
    }




    fragColor = vec4(color, 1.0);
    
}
`,Cc=Object.freeze(Object.defineProperty({__proto__:null,default:gc},Symbol.toStringTag,{value:"Module"})),yc=`float EPS=1e-4;

float thick= 0.01;
int checks = 100;

vec3 BLACK = vec3(0.0, 0.0, 0.0);
vec3 WHITE = vec3(1.0, 1.0, 1.0);
vec3 Blue = vec3(0.,0.,1.);
vec3 Red = vec3(1.,0.,0.);
vec3 Purple=vec3(0.60,0.30,0.70); //purple 
vec3 Pink=vec3(0.80,0.350,0.450); //pink
vec3 Green=vec3(0.20,0.80,0.50); //green
vec3 Yellow=vec3(1.0,0.750,0.30); //orange

//colors for the circles
vec3 purple=vec3(0.70,0.40,0.90); //purple 
vec3 pink=vec3(01.0,0.450,0.550); //pink
vec3 yellow=vec3(1.0,01.0,0.30); //yellow
vec3 green=vec3(0.30,01.0,0.40); //green

// --- 1. CORE STRUCTURES & MATH ---

vec2 cmul(vec2 z, vec2 w) {
    return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

// Updated Struct: Supports Lines explicitly
struct Circle {
    vec2 center;     // Circle: (cx, cy). Line: Normal (nx, ny). normal points toward interior
    float curvature; // Circle: 1/r. Line: 0.0.
    float offset;    // Circle: 0.0. Line: w (where dot(n,p) = w).
};

// Unit vector helper
vec2 u(float a) {
    return vec2(cos(a), sin(a));
}

// --- 2. GEOMETRIC FUNCTIONS ---

// Invert a point 'z' through a Circle or reflect across a Line
vec2 invert(vec2 z, Circle C) {
    // Case: Line (Reflection)
    if (abs(C.curvature) < EPS) {
        // Formula: p' = p - 2 * (dot(n, p) - w) * n
        float distSigned = dot(z, C.center) - C.offset;
        return z - 2.0 * distSigned * C.center;
    }
    // Case: Circle (Inversion)
    vec2 difference = z - C.center;
    float rad = 1.0 / C.curvature;
    float mult = (rad * rad) / dot(difference, difference);
    return C.center + mult * difference;
}

// Check if a point is "inside" the shape
bool isInside(vec2 p, Circle c) {
    float k = c.curvature;
    
    // Case: Line (Half-plane check)
    if (abs(k) < EPS) {
        // We assume Normal points TOWARDS the interior
        //vec2 diff=c.offset*(c.center)-p;
        return dot(p, c.center) > c.offset; 
    }
    // Case: Standard Circle (Interior)
    else if (k > 0.0) {
        return length(p - c.center) < (1.0 / k);
    }
    // Case: Exterior Circle (Outside of a hole)
    else {
        return length(p - c.center) > abs(1.0 / k);
    }
}

// Distance to shape boundary
float distToCircle(vec2 p, Circle C) {
    // Case: Line
    if (abs(C.curvature) < EPS) {
        return (dot(p, C.center) - C.offset);
    }
    // Case: Circle
    float radius = 1.0 / C.curvature;
    return (length(p - C.center) - abs(radius));
}


// Check if a point is on the "boundary" (within a small epsilon)
bool isOnBoundary(vec2 p, Circle c, float thickness) {
    float dist = distToCircle(p, c);
    return -thickness < dist && dist < 0.;
}

Circle lineFromPoints(vec2 A, vec2 B) {
    vec2 t = normalize(B - A);        // Tangent
    vec2 n = vec2(-t.y, t.x);        // Normal
    float w = dot(n, A);             // Offset
    return Circle(n, 0.0, w);
}


// Construct a Circle/Line from 3 Points
Circle circleFromThreePoints(vec3 A, vec3 B, vec3 C) {
    float zA = A.z;
    float zB = B.z;
    float zC = C.z;
    
    //Case: Line
    if(zA==0.0){
        return lineFromPoints(B.xy, C.xy);
    }
    if(zB==0.0){
        return lineFromPoints(A.xy, C.xy);
    }
    if(zC==0.0){
        return lineFromPoints(A.xy, B.xy);
    }
    
    vec2 a = A.xy;
    vec2 b = B.xy;
    vec2 c = C.xy;

    vec2 ab = b - a;
    vec2 ac = c - a;
    float d = 2.0 * (ab.x * ac.y - ab.y * ac.x);

    if(abs(d)<EPS){
        return lineFromPoints(A.xy, B.xy);
    }

    // Case: Circle
    vec2 u = vec2(
        ac.y * dot(ab, ab) - ab.y * dot(ac, ac),
        ab.x * dot(ac, ac) - ac.x * dot(ab, ab)
    ) / d;
    vec2 center = a + u;
    float radius = length(u);
    
    return Circle(center, 1./radius, 0.0);
}

// Find tangent point between two shapes
vec3 getTangentPoint(Circle c1, Circle c2) {
    float k1 = c1.curvature;
    float k2 = c2.curvature;
    float epsilon = EPS;

    bool isLine1 = abs(k1) < EPS;
    bool isLine2 = abs(k2) < EPS;

    // Case: Two Lines (Parallel in packing -> Point at Infinity)
    if (isLine1 && isLine2) return vec3(0); // Simplified infinity

    // Case: Line and Circle
    // Tangency = CircleCenter - Radius * LineNormal
    if (isLine1) return vec3(c2.center + (c1.center / c2.curvature), 1.0);
    if (isLine2) return vec3(c1.center + (c2.center / c1.curvature), 1.0);

    // Case: Two Circles
    return vec3((k1 * c1.center + k2 * c2.center) / (k1 + k2), 1.0);
}


//helper function for descartes equation
bool checkDesc(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    return abs(2.*(a*a+b*b+c*c+d*d)-(a+b+c+d)*(a+b+c+d))<EPS;

}

//helper func for orient a line based on circle 
void orientLine( inout Circle line, Circle c){
    if(isInside(c.center,line)){
        line.center*=-1.;
        line.offset*=-1.;
    }   
}

// Helper: Swap for sorting
void swap(inout float a, inout float b, inout int idxA, inout int idxB) {
    if (a > b) {
        float t = a; 
        a = b; 
        b = t;
        int ti = idxA; 
        idxA = idxB; 
        idxB = ti;
    }
}

//orienting the dual circles
void dualOrient(inout Circle circ[4]){
    //finding zero curvatures if any
    vec4 k = vec4(circ[0].curvature, circ[1].curvature, circ[2].curvature, circ[3].curvature);
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;
    
    //no lines
    //checking desc equation
    if(zeros==0 && !checkDesc(k)) circ[idx.x].curvature= -circ[idx.x].curvature;
    //one line
    if(zeros>0){
        orientLine(circ[idx.x], circ[idx.w]);
        //second line if any
        if(zeros==2){
            orientLine(circ[idx.y],circ[idx.w]);
        }
    }
}

// --- 3. APOLLONIAN SOLVER ---

/**.
 * Returns mat4 where columns represent circles.
 * Format for Circle: vec4(curvature, k*x, k*y, q)
 * Format for Line:   vec4(0.0, normal.x, normal.y, offset)
 */
mat4 solveApollonianQuad(vec4 kInput) {
    vec4 k = kInput;
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;

    Circle c[4];
    ivec4 mapSortedToGeom; 

    // --- CASE 1: Two Lines (Strip Packing) ---
    if (zeros == 2) {
        // Line 1: Bottom Line at y = 0
        // Normal points UP (0, 1), Offset = 0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        // Use the first circle's curvature to determine the gap
        // Diameter = 2.0 / curvature
        float kCircle = (abs(k.z) > EPS) ? k.z : k.w;
        float gap = 2.0 / kCircle; 

        // Line 2: Top Line at y = gap
        // Normal points DOWN (0, -1)
        // Offset logic: dot(n, p) = w  ->  dot((0,-1), (0, gap)) = -gap
        c[1] = Circle(vec2(0.0, 1.0), 0.0, gap); 

        // Circles 3 & 4 (Placed in the gap)
        float k1 = k.z; 
        float k2 = k.w;
        
        // y = 1/k is the radius, effectively centering them in the gap
        c[2] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        c[3] = Circle(vec2(-2.0/k2, 1.0/k2), k2, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 2: One Line (Plane Packing) ---
    else if (zeros == 1) {
        // Line at y=0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        float k1 = k.y, k2 = k.z, k3 = k.w;
        c[1] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        
        float xc2 = 2.0 / sqrt(k1 * k2);
        c[2] = Circle(vec2(xc2, 1.0/k2), k2, 0.0);
        
        float xc3 = 2.0 / sqrt(k1 * k3);
        c[3] = Circle(vec2(xc3, 1.0/k3), k3, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 3: Standard (All Circles) ---
    else {
        float a, b, c_val, d;
        if (k.x < -EPS) {
             a = k.x; b = k.y; c_val = k.z; d = k.w;
             mapSortedToGeom = ivec4(3, 0, 1, 2); 
        } else {
             b = k.x; c_val = k.y; d = k.z; a = k.w;
             mapSortedToGeom = ivec4(0, 1, 2, 3); 
        }

        c[0] = Circle(vec2(0.0, 1.0/b), b, 0.0);
        float xc = 2.0 / sqrt(b * c_val);
        c[1] = Circle(vec2(xc, 1.0/c_val), c_val, 0.0);

        // Trilateration for D
        float rB = 1.0/b; float rC = 1.0/c_val; float rD = 1.0/d;
        float distB = rB + rD; float distC = rC + rD;
        vec2 posB = c[0].center; vec2 posC = c[1].center;
        float distCenters = distance(posB, posC);
        
        float x_local = (distB*distB - distC*distC + distCenters*distCenters) / (2.0 * distCenters);
        float y_local = sqrt(max(0.0, distB*distB - x_local*x_local));
        vec2 dir = (posC - posB) / distCenters;       
        vec2 normal = vec2(-dir.y, dir.x);            
        vec2 posD = posB + x_local * dir - y_local * normal;
        c[2] = Circle(posD, d, 0.0);
        
        // Descartes for A
        float sum_curv = a + b + c_val + d;
        vec2 s_kz = vec2(0.0);
        vec2 s_k2z = vec2(0.0);
        for(int i=0; i<3; i++) {
            s_kz  += c[i].curvature * c[i].center;
            s_k2z += (c[i].curvature * c[i].curvature) * c[i].center;
        }
        float denom = (a*a) - (0.5 * sum_curv * a);
        if (abs(denom) < 1e-9) denom = 1.0;
        vec2 posA = ((0.5 * sum_curv * s_kz) - s_k2z) / denom;
        c[3] = Circle(posA, a, 0.0);
    }

    // --- Output Construction ---
    mat4 result;
    for(int i=0; i<4; i++) {
        int geomIndex = mapSortedToGeom[i];
        int originalIndex = idx[i];
        
        Circle geom = c[geomIndex];
        float p = geom.curvature;
        vec4 col;
        
        if (abs(p) < EPS) {
            // LINE ENCODING: x=0, y=nx, z=ny, w=offset
            col = vec4(0.0, geom.center.x, geom.center.y, geom.offset);
        } else {
            // CIRCLE ENCODING: x=k, y=kx, z=ky, w=q
            float r = p * geom.center.x;
            float s = p * geom.center.y;
            float q = (r*r + s*s - 1.0) / p;
            col = vec4(p, r, s, q);
        }
        
        if (originalIndex == 0) result[0] = col;
        else if (originalIndex == 1) result[1] = col;
        else if (originalIndex == 2) result[2] = col;
        else if (originalIndex == 3) result[3] = col;
    }
    
    return result;
}

// Convert vec4 back to Geometric Circle
Circle toGeom(vec4 v) {
    // Line Case (Curvature v.x is 0)
    if (abs(v.x) < EPS) {
        // center = (v.y, v.z), curvature = 0, offset = v.w
        return Circle(vec2(v.y, v.z), 0.0, v.w);
    }
    // Circle Case
    return Circle(vec2(v.y/v.x, v.z/v.x), v.x, 0.0);
}

vec4 ptToQuad(vec2 p){
    float a= p.x;
    float b= p.y;
    return vec4(2.*b, 2.*(1.-b), 2.*(a*a+b*b-b), 2.*(1.+a*a+b*b-b+2.*a));
}
Circle[4] circQuad(vec4 quad){
    mat4 pack = solveApollonianQuad(quad);
    Circle cc0=  toGeom(pack[0]);
    Circle cc1=  toGeom(pack[1]);
    Circle cc2=  toGeom(pack[2]);
    Circle cc3=  toGeom(pack[3]);

    Circle[4] result = Circle[4](cc0, cc1, cc2, cc3);
    return result;
}

Circle[4] circDual(Circle[4] maincirc){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle dualCirc[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(dualCirc);

    return dualCirc;
}

vec3 packing(Circle[4] maincirc, vec2 p){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle circ[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(circ);
    
    vec3 color = vec3(0.8,0.8,0.8);
   
    //continually swapping through dual circles will eventually get you to one of the main
    //circles and once in a main circle color it.
    // Iterate inversions
    int i;
    for (i = 0; i < 100; i++) {
        if (isInside(p, cc1)) {
            color = pink;
            break;
        } else if (isInside(p, cc2)) {
            color = purple;
            break;
        } else if (isInside(p, cc3)) {
            color = yellow;
            break;
        } else if (isInside(p, cc0)) {
            color = green;
            break;
        }
        if (isInside(p, circ[0])) {
            p = invert(p, circ[0]);
        } else if (isInside(p, circ[1])) {
            p = invert(p, circ[1]);
        } else if (isInside(p, circ[2])) {
            p = invert(p, circ[2]);
        } else if (isInside(p, circ[3])) {
            p = invert(p, circ[3]);
        } 
    }
    return color;
}
`,xc=Object.freeze(Object.defineProperty({__proto__:null,default:yc},Symbol.toStringTag,{value:"Module"})),bc=`// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}


vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    vec2 mouseUV = normalize_coord(iMouse_stripPack.xy);

    // Apply Möbius transformation: w = 1/(z - mouse)
    vec2 diff = p - mouseUV;
    float denominator = dot(p, p); // |z - mouse|²

    // Complex division: 1/(a + ib) = (a - ib)/(a² + b²)
    vec2 transformedP = vec2(p.x, -p.y) / denominator + mouseUV;

    // Apply the packing to the transformed point
    vec4 quad=vec4(2.,2.,0.,0.);
    Circle[4] mainCirc = circQuad(quad);
    color = packing(mainCirc, transformedP);    

    if(isInside(transformedP, mainCirc[0])) {
        color = Purple;
    } else if(isInside(transformedP, mainCirc[1])) {
        color = Pink;
    } else if(isInside(transformedP, mainCirc[2])) {
        color = Yellow;
    } else if(isInside(transformedP, mainCirc[3])) {
        color = Green;
    }

    // Optional: Draw a small marker at the mouse position
    // if (length(p - mouseUV) < 0.05) {
    //     color = mix(color, vec3(1.0, 0.0, 0.0), 0.5);
    // }

    fragColor = vec4(color, 1.0);

}
`,kc=Object.freeze(Object.defineProperty({__proto__:null,default:bc},Symbol.toStringTag,{value:"Module"})),_c=`// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}

vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}



void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;

    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    //get c from mouse position on the mandelbrot side
    vec2 stripMouseUV = iMouse_stripPack.xy / iResolution_stripPack.xy;
    vec2 c = stripMouseUV - vec2(0.5, 0.5);
    c.x *= iResolution_stripPack.x / iResolution_stripPack.y;
    c*=6.50;
   
    vec4 newQuad = ptToQuad(c);
    Circle[4] mainCirc = circQuad(newQuad);
    color = packing(mainCirc, p);

    // if(isInside(p, mainCirc[0])) {
    //     color = Yellow;;
    // } else if(isInside(p, mainCirc[1])) {
    //     color = Green;
    // } else if(isInside(p, mainCirc[2])) {
    //     color = Purple;
    // } else if(isInside(p, mainCirc[3])) {
    //     color = Pink;
    // }

    
    fragColor = vec4(color, 1.0);

}
`,wc=Object.freeze(Object.defineProperty({__proto__:null,default:_c},Symbol.toStringTag,{value:"Module"})),Ec=`// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}


vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    vec4 quad=vec4(0.,0.,2.,2.);
    Circle[4] mainCirc = circQuad(quad);
    color = packing(mainCirc, p);    

    // if(isInside(p, mainCirc[0])) {
    //     color = Purple;
    // } else if(isInside(p, mainCirc[1])) {
    //     color = Pink;
    // } else if(isInside(p, mainCirc[2])) {
    //     color = Yellow;
    // } else if(isInside(p, mainCirc[3])) {
    //     color = Green;
    // }

    

    // Show crosshair at current mouse position (the Julia parameter)
    vec2 mouseUV = normalize_coord(iMouse_stripPack.xy);
    vec2 c= mouseUV;
    p = normalize_coord(fragCoord);
    if (length(p - c) < 0.05) {
        color = vec3(1.0, 0.0, 0.0);
    }

    fragColor = vec4(color, 1.0);
    
}
`,Tc=Object.freeze(Object.defineProperty({__proto__:null,default:Ec},Symbol.toStringTag,{value:"Module"})),Pc=`float EPS=1e-4;

float thick= 0.01;
int checks = 100;

vec3 BLACK = vec3(0.0, 0.0, 0.0);
vec3 WHITE = vec3(1.0, 1.0, 1.0);
vec3 Blue = vec3(0.,0.,1.);
vec3 Red = vec3(1.,0.,0.);
vec3 Purple=vec3(0.60,0.30,0.70); //purple 
vec3 Pink=vec3(0.80,0.350,0.450); //pink
vec3 Green=vec3(0.20,0.80,0.50); //green
vec3 Yellow=vec3(1.0,0.750,0.30); //orange

//colors for the circles
vec3 purple=vec3(0.70,0.40,0.90); //purple 
vec3 pink=vec3(01.0,0.450,0.550); //pink
vec3 yellow=vec3(1.0,01.0,0.30); //yellow
vec3 green=vec3(0.30,01.0,0.40); //green

// --- 1. CORE STRUCTURES & MATH ---

vec2 cmul(vec2 z, vec2 w) {
    return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

// Updated Struct: Supports Lines explicitly
struct Circle {
    vec2 center;     // Circle: (cx, cy). Line: Normal (nx, ny). normal points toward interior
    float curvature; // Circle: 1/r. Line: 0.0.
    float offset;    // Circle: 0.0. Line: w (where dot(n,p) = w).
};

// Unit vector helper
vec2 u(float a) {
    return vec2(cos(a), sin(a));
}

// --- 2. GEOMETRIC FUNCTIONS ---

// Invert a point 'z' through a Circle or reflect across a Line
vec2 invert(vec2 z, Circle C) {
    // Case: Line (Reflection)
    if (abs(C.curvature) < EPS) {
        // Formula: p' = p - 2 * (dot(n, p) - w) * n
        float distSigned = dot(z, C.center) - C.offset;
        return z - 2.0 * distSigned * C.center;
    }
    // Case: Circle (Inversion)
    vec2 difference = z - C.center;
    float rad = 1.0 / C.curvature;
    float mult = (rad * rad) / dot(difference, difference);
    return C.center + mult * difference;
}

// Check if a point is "inside" the shape
bool isInside(vec2 p, Circle c) {
    float k = c.curvature;
    
    // Case: Line (Half-plane check)
    if (abs(k) < EPS) {
        // We assume Normal points TOWARDS the interior
        //vec2 diff=c.offset*(c.center)-p;
        return dot(p, c.center) > c.offset; 
    }
    // Case: Standard Circle (Interior)
    else if (k > 0.0) {
        return length(p - c.center) < (1.0 / k);
    }
    // Case: Exterior Circle (Outside of a hole)
    else {
        return length(p - c.center) > abs(1.0 / k);
    }
}

// Distance to shape boundary
float distToCircle(vec2 p, Circle C) {
    // Case: Line
    if (abs(C.curvature) < EPS) {
        return (dot(p, C.center) - C.offset);
    }
    // Case: Circle
    float radius = 1.0 / C.curvature;
    return (length(p - C.center) - abs(radius));
}


// Check if a point is on the "boundary" (within a small epsilon)
bool isOnBoundary(vec2 p, Circle c, float thickness) {
    float dist = distToCircle(p, c);
    return -thickness < dist && dist < 0.;
}

Circle lineFromPoints(vec2 A, vec2 B) {
    vec2 t = normalize(B - A);        // Tangent
    vec2 n = vec2(-t.y, t.x);        // Normal
    float w = dot(n, A);             // Offset
    return Circle(n, 0.0, w);
}


// Construct a Circle/Line from 3 Points
Circle circleFromThreePoints(vec3 A, vec3 B, vec3 C) {
    float zA = A.z;
    float zB = B.z;
    float zC = C.z;
    
    //Case: Line
    if(zA==0.0){
        return lineFromPoints(B.xy, C.xy);
    }
    if(zB==0.0){
        return lineFromPoints(A.xy, C.xy);
    }
    if(zC==0.0){
        return lineFromPoints(A.xy, B.xy);
    }
    
    vec2 a = A.xy;
    vec2 b = B.xy;
    vec2 c = C.xy;

    vec2 ab = b - a;
    vec2 ac = c - a;
    float d = 2.0 * (ab.x * ac.y - ab.y * ac.x);

    if(abs(d)<EPS){
        return lineFromPoints(A.xy, B.xy);
    }

    // Case: Circle
    vec2 u = vec2(
        ac.y * dot(ab, ab) - ab.y * dot(ac, ac),
        ab.x * dot(ac, ac) - ac.x * dot(ab, ab)
    ) / d;
    vec2 center = a + u;
    float radius = length(u);
    
    return Circle(center, 1./radius, 0.0);
}

// Find tangent point between two shapes
vec3 getTangentPoint(Circle c1, Circle c2) {
    float k1 = c1.curvature;
    float k2 = c2.curvature;
    float epsilon = EPS;

    bool isLine1 = abs(k1) < EPS;
    bool isLine2 = abs(k2) < EPS;

    // Case: Two Lines (Parallel in packing -> Point at Infinity)
    if (isLine1 && isLine2) return vec3(0); // Simplified infinity

    // Case: Line and Circle
    // Tangency = CircleCenter - Radius * LineNormal
    if (isLine1) return vec3(c2.center + (c1.center / c2.curvature), 1.0);
    if (isLine2) return vec3(c1.center + (c2.center / c1.curvature), 1.0);

    // Case: Two Circles
    return vec3((k1 * c1.center + k2 * c2.center) / (k1 + k2), 1.0);
}


//helper function for descartes equation
bool checkDesc(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    return abs(2.*(a*a+b*b+c*c+d*d)-(a+b+c+d)*(a+b+c+d))<EPS;

}

//helper func for orient a line based on circle 
void orientLine( inout Circle line, Circle c){
    if(isInside(c.center,line)){
        line.center*=-1.;
        line.offset*=-1.;
    }   
}

// Helper: Swap for sorting
void swap(inout float a, inout float b, inout int idxA, inout int idxB) {
    if (a > b) {
        float t = a; 
        a = b; 
        b = t;
        int ti = idxA; 
        idxA = idxB; 
        idxB = ti;
    }
}

//orienting the dual circles
void dualOrient(inout Circle circ[4]){
    //finding zero curvatures if any
    vec4 k = vec4(circ[0].curvature, circ[1].curvature, circ[2].curvature, circ[3].curvature);
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;
    
    //no lines
    //checking desc equation
    if(zeros==0 && !checkDesc(k)) circ[idx.x].curvature= -circ[idx.x].curvature;
    //one line
    if(zeros>0){
        orientLine(circ[idx.x], circ[idx.w]);
        //second line if any
        if(zeros==2){
            orientLine(circ[idx.y],circ[idx.w]);
        }
    }
}

// --- 3. APOLLONIAN SOLVER ---

/**.
 * Returns mat4 where columns represent circles.
 * Format for Circle: vec4(curvature, k*x, k*y, q)
 * Format for Line:   vec4(0.0, normal.x, normal.y, offset)
 */
mat4 solveApollonianQuad(vec4 kInput) {
    vec4 k = kInput;
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;

    Circle c[4];
    ivec4 mapSortedToGeom; 

    // --- CASE 1: Two Lines (Strip Packing) ---
    if (zeros == 2) {
        // Line 1: Bottom Line at y = 0
        // Normal points UP (0, 1), Offset = 0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        // Use the first circle's curvature to determine the gap
        // Diameter = 2.0 / curvature
        float kCircle = (abs(k.z) > EPS) ? k.z : k.w;
        float gap = 2.0 / kCircle; 

        // Line 2: Top Line at y = gap
        // Normal points DOWN (0, -1)
        // Offset logic: dot(n, p) = w  ->  dot((0,-1), (0, gap)) = -gap
        c[1] = Circle(vec2(0.0, 1.0), 0.0, gap); 

        // Circles 3 & 4 (Placed in the gap)
        float k1 = k.z; 
        float k2 = k.w;
        
        // y = 1/k is the radius, effectively centering them in the gap
        c[2] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        c[3] = Circle(vec2(-2.0/k2, 1.0/k2), k2, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 2: One Line (Plane Packing) ---
    else if (zeros == 1) {
        // Line at y=0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        float k1 = k.y, k2 = k.z, k3 = k.w;
        c[1] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        
        float xc2 = 2.0 / sqrt(k1 * k2);
        c[2] = Circle(vec2(xc2, 1.0/k2), k2, 0.0);
        
        float xc3 = 2.0 / sqrt(k1 * k3);
        c[3] = Circle(vec2(xc3, 1.0/k3), k3, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 3: Standard (All Circles) ---
    else {
        float a, b, c_val, d;
        if (k.x < -EPS) {
             a = k.x; b = k.y; c_val = k.z; d = k.w;
             mapSortedToGeom = ivec4(3, 0, 1, 2); 
        } else {
             b = k.x; c_val = k.y; d = k.z; a = k.w;
             mapSortedToGeom = ivec4(0, 1, 2, 3); 
        }

        c[0] = Circle(vec2(0.0, 1.0/b), b, 0.0);
        float xc = 2.0 / sqrt(b * c_val);
        c[1] = Circle(vec2(xc, 1.0/c_val), c_val, 0.0);

        // Trilateration for D
        float rB = 1.0/b; float rC = 1.0/c_val; float rD = 1.0/d;
        float distB = rB + rD; float distC = rC + rD;
        vec2 posB = c[0].center; vec2 posC = c[1].center;
        float distCenters = distance(posB, posC);
        
        float x_local = (distB*distB - distC*distC + distCenters*distCenters) / (2.0 * distCenters);
        float y_local = sqrt(max(0.0, distB*distB - x_local*x_local));
        vec2 dir = (posC - posB) / distCenters;       
        vec2 normal = vec2(-dir.y, dir.x);            
        vec2 posD = posB + x_local * dir - y_local * normal;
        c[2] = Circle(posD, d, 0.0);
        
        // Descartes for A
        float sum_curv = a + b + c_val + d;
        vec2 s_kz = vec2(0.0);
        vec2 s_k2z = vec2(0.0);
        for(int i=0; i<3; i++) {
            s_kz  += c[i].curvature * c[i].center;
            s_k2z += (c[i].curvature * c[i].curvature) * c[i].center;
        }
        float denom = (a*a) - (0.5 * sum_curv * a);
        if (abs(denom) < 1e-9) denom = 1.0;
        vec2 posA = ((0.5 * sum_curv * s_kz) - s_k2z) / denom;
        c[3] = Circle(posA, a, 0.0);
    }

    // --- Output Construction ---
    mat4 result;
    for(int i=0; i<4; i++) {
        int geomIndex = mapSortedToGeom[i];
        int originalIndex = idx[i];
        
        Circle geom = c[geomIndex];
        float p = geom.curvature;
        vec4 col;
        
        if (abs(p) < EPS) {
            // LINE ENCODING: x=0, y=nx, z=ny, w=offset
            col = vec4(0.0, geom.center.x, geom.center.y, geom.offset);
        } else {
            // CIRCLE ENCODING: x=k, y=kx, z=ky, w=q
            float r = p * geom.center.x;
            float s = p * geom.center.y;
            float q = (r*r + s*s - 1.0) / p;
            col = vec4(p, r, s, q);
        }
        
        if (originalIndex == 0) result[0] = col;
        else if (originalIndex == 1) result[1] = col;
        else if (originalIndex == 2) result[2] = col;
        else if (originalIndex == 3) result[3] = col;
    }
    
    return result;
}

// Convert vec4 back to Geometric Circle
Circle toGeom(vec4 v) {
    // Line Case (Curvature v.x is 0)
    if (abs(v.x) < EPS) {
        // center = (v.y, v.z), curvature = 0, offset = v.w
        return Circle(vec2(v.y, v.z), 0.0, v.w);
    }
    // Circle Case
    return Circle(vec2(v.y/v.x, v.z/v.x), v.x, 0.0);
}

vec4 ptToQuad(vec2 p){
    float a= p.x;
    float b= p.y;
    return vec4(2.*b, 2.*(1.-b), 2.*(a*a+b*b-b), 2.*(1.+a*a+b*b-b+2.*a));
}
Circle[4] circQuad(vec4 quad){
    mat4 pack = solveApollonianQuad(quad);
    Circle cc0=  toGeom(pack[0]);
    Circle cc1=  toGeom(pack[1]);
    Circle cc2=  toGeom(pack[2]);
    Circle cc3=  toGeom(pack[3]);

    Circle[4] result = Circle[4](cc0, cc1, cc2, cc3);
    return result;
}

Circle[4] circDual(Circle[4] maincirc){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle dualCirc[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(dualCirc);

    return dualCirc;
}

vec3 packing(Circle[4] maincirc, vec2 p){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle circ[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(circ);
    
    vec3 color = vec3(0.8,0.8,0.8);
   
    //continually swapping through dual circles will eventually get you to one of the main
    //circles and once in a main circle color it.
    // Iterate inversions
    int i;
    for (i = 0; i < 100; i++) {
        if (isInside(p, cc1)) {
            color = pink;
            break;
        } else if (isInside(p, cc2)) {
            color = purple;
            break;
        } else if (isInside(p, cc3)) {
            color = yellow;
            break;
        } else if (isInside(p, cc0)) {
            color = green;
            break;
        }
        if (isInside(p, circ[0])) {
            p = invert(p, circ[0]);
        } else if (isInside(p, circ[1])) {
            p = invert(p, circ[1]);
        } else if (isInside(p, circ[2])) {
            p = invert(p, circ[2]);
        } else if (isInside(p, circ[3])) {
            p = invert(p, circ[3]);
        } 
    }
    return color;
}
`,Sc=Object.freeze(Object.defineProperty({__proto__:null,default:Pc},Symbol.toStringTag,{value:"Module"})),Rc=`
// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}


vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}


void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    vec2 mouseUV = normalize_coord(iMouse_stripPack.xy);

    // Apply Möbius transformation: w = 1/(z - mouse)
    vec2 diff = p - mouseUV;
    float denominator = dot(p, p); // |z - mouse|²

    // Complex division: 1/(a + ib) = (a - ib)/(a² + b²)
    vec2 transformedP = vec2(p.x, -p.y) / denominator + mouseUV;

    // Apply the packing to the transformed point
    vec4 quad=vec4(0.,0.,2.,2.);
    Circle[4] mainCirc = circQuad(quad);
    color = packing(mainCirc, transformedP);    

    

    // Optional: Draw a small marker at the mouse position
    // if (length(p - mouseUV) < 0.05) {
    //     color = mix(color, vec3(1.0, 0.0, 0.0), 0.5);
    // }

    fragColor = vec4(color, 1.0);

}
`,zc=Object.freeze(Object.defineProperty({__proto__:null,default:Rc},Symbol.toStringTag,{value:"Module"})),Lc=`


// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}



vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}



void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;

    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    //get c from mouse position on the mandelbrot side
    // vec2 stripMouseUV = iMouse_stripPack.xy / iResolution_stripPack.xy;
    // vec2 c = stripMouseUV - vec2(0.5, 0.5);
    // c.x *= iResolution_stripPack.x / iResolution_stripPack.y;
    // c*=6.50;

    vec2 mouseUV = normalize_coord(iMouse_stripPack.xy);
   
    vec4 newQuad = ptToQuad(mouseUV);
    Circle[4] mainCirc = circQuad(newQuad);
    color = packing(mainCirc, p);


    
    fragColor = vec4(color, 1.0);


   

    
}
`,Ac=Object.freeze(Object.defineProperty({__proto__:null,default:Lc},Symbol.toStringTag,{value:"Module"})),Bc=`// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}



vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    vec4 quad=vec4(0.,0.,2.,2.);
    Circle[4] mainCirc = circQuad(quad);
    color = packing(mainCirc, p);    


    // Show current mouse position
    vec2 mouseUV = normalize_coord(iMouse_stripPack.xy);
    p = normalize_coord(fragCoord);
    if (length(p - mouseUV) < 0.05) {
        color = vec3(1.0, 0.0, 0.0);
    }


    fragColor = vec4(color, 1.0);
    
}
`,Ic=Object.freeze(Object.defineProperty({__proto__:null,default:Bc},Symbol.toStringTag,{value:"Module"})),Oc=`float EPS=1e-4;

float thick= 0.01;
int checks = 100;

vec3 BLACK = vec3(0.0, 0.0, 0.0);
vec3 WHITE = vec3(1.0, 1.0, 1.0);
vec3 Blue = vec3(0.,0.,1.);
vec3 Red = vec3(1.,0.,0.);
vec3 Purple=vec3(0.60,0.30,0.70); //purple 
vec3 Pink=vec3(0.80,0.350,0.450); //pink
vec3 Green=vec3(0.20,0.80,0.50); //green
vec3 Yellow=vec3(1.0,0.750,0.30); //orange

//colors for the circles
//vec3 purple=vec3(0.1176,0.533,0.898); //purple 
// vec3 purple=vec3(30./255.,136./255.,229./255.);
// vec3 pink=vec3(0.8470,0.10588,0.37647); //pink
// vec3 yellow=vec3(1.0,0.75686,0.0275); //yellow
// vec3 green=vec3(0,0.30196,0.25); //green

//colors for the cirqcles
vec3 purple=vec3(0.70,0.40,0.90); //purple 
vec3 pink=vec3(01.0,0.450,0.550); //pink
vec3 yellow=vec3(1.0,01.0,0.30); //yellow
vec3 green=vec3(76./255.,255./255.,102./255.); //green

// --- 1. CORE STRUCTURES & MATH ---

vec2 cmul(vec2 z, vec2 w) {
    return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

// Updated Struct: Supports Lines explicitly
struct Circle {
    vec2 center;     // Circle: (cx, cy). Line: Normal (nx, ny). normal points toward interior
    float curvature; // Circle: 1/r. Line: 0.0.
    float offset;    // Circle: 0.0. Line: w (where dot(n,p) = w).
};

// Unit vector helper
vec2 u(float a) {
    return vec2(cos(a), sin(a));
}

// --- 2. GEOMETRIC FUNCTIONS ---

// Invert a point 'z' through a Circle or reflect across a Line
vec2 invert(vec2 z, Circle C) {
    // Case: Line (Reflection)
    if (abs(C.curvature) < EPS) {
        // Formula: p' = p - 2 * (dot(n, p) - w) * n
        float distSigned = dot(z, C.center) - C.offset;
        return z - 2.0 * distSigned * C.center;
    }
    // Case: Circle (Inversion)
    vec2 difference = z - C.center;
    float rad = 1.0 / C.curvature;
    float mult = (rad * rad) / dot(difference, difference);
    return C.center + mult * difference;
}

// Check if a point is "inside" the shape
bool isInside(vec2 p, Circle c) {
    float k = c.curvature;
    
    // Case: Line (Half-plane check)
    if (abs(k) < EPS) {
        // We assume Normal points TOWARDS the interior
        //vec2 diff=c.offset*(c.center)-p;
        return dot(p, c.center) > c.offset; 
    }
    // Case: Standard Circle (Interior)
    else if (k > 0.0) {
        return length(p - c.center) < (1.0 / k);
    }
    // Case: Exterior Circle (Outside of a hole)
    else {
        return length(p - c.center) > abs(1.0 / k);
    }
}

// Distance to shape boundary
float distToCircle(vec2 p, Circle C) {
    // Case: Line
    if (abs(C.curvature) < EPS) {
        return (dot(p, C.center) - C.offset);
    }
    // Case: Circle
    float radius = 1.0 / C.curvature;
    return (length(p - C.center) - abs(radius));
}


// Check if a point is on the "boundary" (within a small epsilon)
bool isOnBoundary(vec2 p, Circle c, float thickness) {
    float dist = distToCircle(p, c);
    return -thickness < dist && dist < 0.;
}

Circle lineFromPoints(vec2 A, vec2 B) {
    vec2 t = normalize(B - A);        // Tangent
    vec2 n = vec2(-t.y, t.x);        // Normal
    float w = dot(n, A);             // Offset
    return Circle(n, 0.0, w);
}


// Construct a Circle/Line from 3 Points
Circle circleFromThreePoints(vec3 A, vec3 B, vec3 C) {
    float zA = A.z;
    float zB = B.z;
    float zC = C.z;
    
    //Case: Line
    if(zA==0.0){
        return lineFromPoints(B.xy, C.xy);
    }
    if(zB==0.0){
        return lineFromPoints(A.xy, C.xy);
    }
    if(zC==0.0){
        return lineFromPoints(A.xy, B.xy);
    }
    
    vec2 a = A.xy;
    vec2 b = B.xy;
    vec2 c = C.xy;

    vec2 ab = b - a;
    vec2 ac = c - a;
    float d = 2.0 * (ab.x * ac.y - ab.y * ac.x);

    if(abs(d)<EPS){
        return lineFromPoints(A.xy, B.xy);
    }

    // Case: Circle
    vec2 u = vec2(
        ac.y * dot(ab, ab) - ab.y * dot(ac, ac),
        ab.x * dot(ac, ac) - ac.x * dot(ab, ab)
    ) / d;
    vec2 center = a + u;
    float radius = length(u);
    
    return Circle(center, 1./radius, 0.0);
}

// Find tangent point between two shapes
vec3 getTangentPoint(Circle c1, Circle c2) {
    float k1 = c1.curvature;
    float k2 = c2.curvature;
    float epsilon = EPS;

    bool isLine1 = abs(k1) < EPS;
    bool isLine2 = abs(k2) < EPS;

    // Case: Two Lines (Parallel in packing -> Point at Infinity)
    if (isLine1 && isLine2) return vec3(0); // Simplified infinity

    // Case: Line and Circle
    // Tangency = CircleCenter - Radius * LineNormal
    if (isLine1) return vec3(c2.center + (c1.center / c2.curvature), 1.0);
    if (isLine2) return vec3(c1.center + (c2.center / c1.curvature), 1.0);

    // Case: Two Circles
    return vec3((k1 * c1.center + k2 * c2.center) / (k1 + k2), 1.0);
}


//helper function for descartes equation
bool checkDesc(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    return abs(2.*(a*a+b*b+c*c+d*d)-(a+b+c+d)*(a+b+c+d))<EPS;

}

//helper func for orient a line based on circle 
void orientLine( inout Circle line, Circle c){
    if(isInside(c.center,line)){
        line.center*=-1.;
        line.offset*=-1.;
    }   
}

// Helper: Swap for sorting
void swap(inout float a, inout float b, inout int idxA, inout int idxB) {
    if (a > b) {
        float t = a; 
        a = b; 
        b = t;
        int ti = idxA; 
        idxA = idxB; 
        idxB = ti;
    }
}

//orienting the dual circles
void dualOrient(inout Circle circ[4]){
    //finding zero curvatures if any
    vec4 k = vec4(circ[0].curvature, circ[1].curvature, circ[2].curvature, circ[3].curvature);
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;
    
    //no lines
    //checking desc equation
    if(zeros==0 && !checkDesc(k)) circ[idx.x].curvature= -circ[idx.x].curvature;
    //one line
    if(zeros>0){
        orientLine(circ[idx.x], circ[idx.w]);
        //second line if any
        if(zeros==2){
            orientLine(circ[idx.y],circ[idx.w]);
        }
    }
}

// --- 3. APOLLONIAN SOLVER ---

/**.
 * Returns mat4 where columns represent circles.
 * Format for Circle: vec4(curvature, k*x, k*y, q)
 * Format for Line:   vec4(0.0, normal.x, normal.y, offset)
 */
mat4 solveApollonianQuad(vec4 kInput) {
    vec4 k = kInput;
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;

    Circle c[4];
    ivec4 mapSortedToGeom; 

    // --- CASE 1: Two Lines (Strip Packing) ---
    if (zeros == 2) {
        // Line 1: Bottom Line at y = 0
        // Normal points UP (0, 1), Offset = 0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        // Use the first circle's curvature to determine the gap
        // Diameter = 2.0 / curvature
        float kCircle = (abs(k.z) > EPS) ? k.z : k.w;
        float gap = 2.0 / kCircle; 

        // Line 2: Top Line at y = gap
        // Normal points DOWN (0, -1)
        // Offset logic: dot(n, p) = w  ->  dot((0,-1), (0, gap)) = -gap
        c[1] = Circle(vec2(0.0, 1.0), 0.0, gap); 

        // Circles 3 & 4 (Placed in the gap)
        float k1 = k.z; 
        float k2 = k.w;
        
        // y = 1/k is the radius, effectively centering them in the gap
        c[2] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        c[3] = Circle(vec2(-2.0/k2, 1.0/k2), k2, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 2: One Line (Plane Packing) ---
    else if (zeros == 1) {
        // Line at y=0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        float k1 = k.y, k2 = k.z, k3 = k.w;
        c[1] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        
        float xc2 = 2.0 / sqrt(k1 * k2);
        c[2] = Circle(vec2(xc2, 1.0/k2), k2, 0.0);
        
        float xc3 = 2.0 / sqrt(k1 * k3);
        c[3] = Circle(vec2(xc3, 1.0/k3), k3, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 3: Standard (All Circles) ---
    else {
        float a, b, c_val, d;
        if (k.x < -EPS) {
             a = k.x; b = k.y; c_val = k.z; d = k.w;
             mapSortedToGeom = ivec4(3, 0, 1, 2); 
        } else {
             b = k.x; c_val = k.y; d = k.z; a = k.w;
             mapSortedToGeom = ivec4(0, 1, 2, 3); 
        }

        c[0] = Circle(vec2(0.0, 1.0/b), b, 0.0);
        float xc = 2.0 / sqrt(b * c_val);
        c[1] = Circle(vec2(xc, 1.0/c_val), c_val, 0.0);

        // Trilateration for D
        float rB = 1.0/b; float rC = 1.0/c_val; float rD = 1.0/d;
        float distB = rB + rD; float distC = rC + rD;
        vec2 posB = c[0].center; vec2 posC = c[1].center;
        float distCenters = distance(posB, posC);
        
        float x_local = (distB*distB - distC*distC + distCenters*distCenters) / (2.0 * distCenters);
        float y_local = sqrt(max(0.0, distB*distB - x_local*x_local));
        vec2 dir = (posC - posB) / distCenters;       
        vec2 normal = vec2(-dir.y, dir.x);            
        vec2 posD = posB + x_local * dir - y_local * normal;
        c[2] = Circle(posD, d, 0.0);
        
        // Descartes for A
        float sum_curv = a + b + c_val + d;
        vec2 s_kz = vec2(0.0);
        vec2 s_k2z = vec2(0.0);
        for(int i=0; i<3; i++) {
            s_kz  += c[i].curvature * c[i].center;
            s_k2z += (c[i].curvature * c[i].curvature) * c[i].center;
        }
        float denom = (a*a) - (0.5 * sum_curv * a);
        if (abs(denom) < 1e-9) denom = 1.0;
        vec2 posA = ((0.5 * sum_curv * s_kz) - s_k2z) / denom;
        c[3] = Circle(posA, a, 0.0);
    }

    // --- Output Construction ---
    mat4 result;
    for(int i=0; i<4; i++) {
        int geomIndex = mapSortedToGeom[i];
        int originalIndex = idx[i];
        
        Circle geom = c[geomIndex];
        float p = geom.curvature;
        vec4 col;
        
        if (abs(p) < EPS) {
            // LINE ENCODING: x=0, y=nx, z=ny, w=offset
            col = vec4(0.0, geom.center.x, geom.center.y, geom.offset);
        } else {
            // CIRCLE ENCODING: x=k, y=kx, z=ky, w=q
            float r = p * geom.center.x;
            float s = p * geom.center.y;
            float q = (r*r + s*s - 1.0) / p;
            col = vec4(p, r, s, q);
        }
        //result[geomIndex]=col;
        result[originalIndex]=col;
    }
    
    return result;
}

// Convert vec4 back to Geometric Circle
Circle toGeom(vec4 v) {
    // Line Case (Curvature v.x is 0)
    if (abs(v.x) < EPS) {
        // center = (v.y, v.z), curvature = 0, offset = v.w
        return Circle(vec2(v.y, v.z), 0.0, v.w);
    }
    // Circle Case
    return Circle(vec2(v.y/v.x, v.z/v.x), v.x, 0.0);
}

vec4 ptToQuad(vec2 p){
    float a= p.x;
    float b= p.y;
    return vec4(2.*b, 2.*(1.-b), 2.*(a*a+b*b-b), 2.*(1.+a*a+b*b-b+2.*a));
}
Circle[4] circQuad(vec4 quad){
    mat4 pack = solveApollonianQuad(quad);
    Circle cc0=  toGeom(pack[0]);
    Circle cc1=  toGeom(pack[1]);
    Circle cc2=  toGeom(pack[2]);
    Circle cc3=  toGeom(pack[3]);

    Circle[4] result = Circle[4](cc0, cc1, cc2, cc3);
    return result;
}

Circle[4] circDual(Circle[4] maincirc){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle dualCirc[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(dualCirc);

    return dualCirc;
}

vec3 packing(Circle[4] maincirc, vec2 p){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle circ[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(circ);
    
    vec3 color = vec3(0.8,0.8,0.8);
   
    //continually swapping through dual circles will eventually get you to one of the main
    //circles and once in a main circle color it.
    // Iterate inversions
    int i;
    for (i = 0; i < 100; i++) {
        if (isInside(p, cc1)) {
            color = pink;
            break;
        } else if (isInside(p, cc2)) {
            color = purple;
            break;
        } else if (isInside(p, cc3)) {
            color = yellow;
            break;
        } else if (isInside(p, cc0)) {
            color = green;
            break;
        }
        if (isInside(p, circ[0])) {
            p = invert(p, circ[0]);
        } else if (isInside(p, circ[1])) {
            p = invert(p, circ[1]);
        } else if (isInside(p, circ[2])) {
            p = invert(p, circ[2]);
        } else if (isInside(p, circ[3])) {
            p = invert(p, circ[3]);
        } 
    }
    return color;
}
`,Fc=Object.freeze(Object.defineProperty({__proto__:null,default:Oc},Symbol.toStringTag,{value:"Module"})),Dc=`// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}



vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    vec2 mouseUV = normalize_coord(iMouse_stripPack.xy);

    // Apply Möbius transformation: w = 1/(z - mouse)
    vec2 diff = p - mouseUV;
    float denominator = dot(p, p); // |z - mouse|²

    // Complex division: 1/(a + ib) = (a - ib)/(a² + b²)
    vec2 transformedP = vec2(p.x, -p.y) / denominator + mouseUV;

    // Apply the packing to the transformed point
    vec4 quad=vec4(0.,0.,2.,2.);
    Circle[4] mainCirc = circQuad(quad);
    color = packing(mainCirc, transformedP);    

    if(isOnBoundary(transformedP, mainCirc[0], thick)) {
        color = BLACK;;
    } else if(isOnBoundary(transformedP, mainCirc[1], thick)) {
        color = BLACK;
    } else if(isOnBoundary(transformedP, mainCirc[2], thick)) {
        color = BLACK;
    } else if(isOnBoundary(transformedP, mainCirc[3], thick)) {
        color = BLACK;
    }
    // Optional: Draw a small marker at the mouse position
    if (length(p - mouseUV) < 0.05) {
        color = mix(color, vec3(1.0, 0.0, 0.0), 0.5);
    }

    fragColor = vec4(color, 1.0);

}
`,Mc=Object.freeze(Object.defineProperty({__proto__:null,default:Dc},Symbol.toStringTag,{value:"Module"})),Uc=`
// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}

vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}





void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;

    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    //get c from mouse position on the mandelbrot side
    vec2 stripMouseUV = iMouse_stripPack.xy / iResolution_stripPack.xy;
    vec2 c = stripMouseUV - vec2(0.5, 0.5);
    c.x *= iResolution_stripPack.x / iResolution_stripPack.y;
    c*=6.50;
   
    vec4 newQuad = ptToQuad(c);
    Circle[4] mainCirc = circQuad(newQuad);
    color = packing(mainCirc, p);

    if(isOnBoundary(p, mainCirc[0], thick)) {
        color = BLACK;;
    } else if(isOnBoundary(p, mainCirc[1], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[2], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[3], thick)) {
        color = BLACK;
    }

    
    fragColor = vec4(color, 1.0);


   

    
}
`,Nc=Object.freeze(Object.defineProperty({__proto__:null,default:Uc},Symbol.toStringTag,{value:"Module"})),$c=`// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}


vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    vec4 quad=vec4(0.,0.,2.,2.);
    Circle[4] mainCirc = circQuad(quad);
    color = packing(mainCirc, p);    

    if(isOnBoundary(p, mainCirc[0], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[1], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[2], thick)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[3], thick)) {
        color = BLACK;
    }
  
    
    
    
    //showing where the mouse is in the parameter space

    vec2 mouseUV = normalize_coord(iMouse_stripPack.xy);
    vec2 c= mouseUV;
    p = normalize_coord(fragCoord);
    if (length(p - c) < 0.05) {
        color = vec3(1.0, 0.0, 0.0);
    }

    float error=thick;
    vec4 newQuad = ptToQuad(p);
    if(abs(newQuad[2]-newQuad[3])<error){
        color=Blue;
    }
    else if(abs(newQuad[0]-newQuad[1])<error){
        color=Blue;
    }
    else if(abs(newQuad[0]-newQuad[2])<error){
        color=Blue;
    }
    else if(abs(newQuad[0]-newQuad[3])<error){
        color=Blue;
    }
    //this is the unit circle 
    else if(abs(newQuad[1]-newQuad[2])<error){
        color=Purple;
    }
    else if(abs(newQuad[1]-newQuad[3])<error){
        color=Blue;
    }

    if(abs(p.x)<thick){ color=WHITE;}
    if(abs(p.x-0.5)<thick){color=Red;}
  
    

    fragColor = vec4(color, 1.0);
    
}
`,qc=Object.freeze(Object.defineProperty({__proto__:null,default:$c},Symbol.toStringTag,{value:"Module"})),Gc=`float EPS=1e-4;

float thick= 0.01;
int checks = 100;

vec3 BLACK = vec3(0.0, 0.0, 0.0);
vec3 WHITE = vec3(1.0, 1.0, 1.0);
vec3 Blue = vec3(0.,0.,1.);
vec3 Red = vec3(1.,0.,0.);
vec3 Purple=vec3(0.60,0.30,0.70); //purple 
vec3 Pink=vec3(0.80,0.350,0.450); //pink
vec3 Green=vec3(0.20,0.80,0.50); //green
vec3 Yellow=vec3(1.0,0.750,0.30); //orange

//colors for the circles
vec3 purple=vec3(0.70,0.40,0.90); //purple 
vec3 pink=vec3(01.0,0.450,0.550); //pink
vec3 yellow=vec3(1.0,01.0,0.30); //yellow
vec3 green=vec3(0.30,01.0,0.40); //green

// --- 1. CORE STRUCTURES & MATH ---

vec2 cmul(vec2 z, vec2 w) {
    return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

// Updated Struct: Supports Lines explicitly
struct Circle {
    vec2 center;     // Circle: (cx, cy). Line: Normal (nx, ny). normal points toward interior
    float curvature; // Circle: 1/r. Line: 0.0.
    float offset;    // Circle: 0.0. Line: w (where dot(n,p) = w).
};

// Unit vector helper
vec2 u(float a) {
    return vec2(cos(a), sin(a));
}

// --- 2. GEOMETRIC FUNCTIONS ---

// Invert a point 'z' through a Circle or reflect across a Line
vec2 invert(vec2 z, Circle C) {
    // Case: Line (Reflection)
    if (abs(C.curvature) < EPS) {
        // Formula: p' = p - 2 * (dot(n, p) - w) * n
        float distSigned = dot(z, C.center) - C.offset;
        return z - 2.0 * distSigned * C.center;
    }
    // Case: Circle (Inversion)
    vec2 difference = z - C.center;
    float rad = 1.0 / C.curvature;
    float mult = (rad * rad) / dot(difference, difference);
    return C.center + mult * difference;
}

// Check if a point is "inside" the shape
bool isInside(vec2 p, Circle c) {
    float k = c.curvature;
    
    // Case: Line (Half-plane check)
    if (abs(k) < EPS) {
        // We assume Normal points TOWARDS the interior
        //vec2 diff=c.offset*(c.center)-p;
        return dot(p, c.center) > c.offset; 
    }
    // Case: Standard Circle (Interior)
    else if (k > 0.0) {
        return length(p - c.center) < (1.0 / k);
    }
    // Case: Exterior Circle (Outside of a hole)
    else {
        return length(p - c.center) > abs(1.0 / k);
    }
}

// Distance to shape boundary
float distToCircle(vec2 p, Circle C) {
    // Case: Line
    if (abs(C.curvature) < EPS) {
        return (dot(p, C.center) - C.offset);
    }
    // Case: Circle
    float radius = 1.0 / C.curvature;
    return (length(p - C.center) - abs(radius));
}


// Check if a point is on the "boundary" (within a small epsilon)
bool isOnBoundary(vec2 p, Circle c, float thickness) {
    float dist = distToCircle(p, c);
    return -thickness < dist && dist < 0.;
}

Circle lineFromPoints(vec2 A, vec2 B) {
    vec2 t = normalize(B - A);        // Tangent
    vec2 n = vec2(-t.y, t.x);        // Normal
    float w = dot(n, A);             // Offset
    return Circle(n, 0.0, w);
}


// Construct a Circle/Line from 3 Points
Circle circleFromThreePoints(vec3 A, vec3 B, vec3 C) {
    float zA = A.z;
    float zB = B.z;
    float zC = C.z;
    
    //Case: Line
    if(zA==0.0){
        return lineFromPoints(B.xy, C.xy);
    }
    if(zB==0.0){
        return lineFromPoints(A.xy, C.xy);
    }
    if(zC==0.0){
        return lineFromPoints(A.xy, B.xy);
    }
    
    vec2 a = A.xy;
    vec2 b = B.xy;
    vec2 c = C.xy;

    vec2 ab = b - a;
    vec2 ac = c - a;
    float d = 2.0 * (ab.x * ac.y - ab.y * ac.x);

    if(abs(d)<EPS){
        return lineFromPoints(A.xy, B.xy);
    }

    // Case: Circle
    vec2 u = vec2(
        ac.y * dot(ab, ab) - ab.y * dot(ac, ac),
        ab.x * dot(ac, ac) - ac.x * dot(ab, ab)
    ) / d;
    vec2 center = a + u;
    float radius = length(u);
    
    return Circle(center, 1./radius, 0.0);
}

// Find tangent point between two shapes
vec3 getTangentPoint(Circle c1, Circle c2) {
    float k1 = c1.curvature;
    float k2 = c2.curvature;
    float epsilon = EPS;

    bool isLine1 = abs(k1) < EPS;
    bool isLine2 = abs(k2) < EPS;

    // Case: Two Lines (Parallel in packing -> Point at Infinity)
    if (isLine1 && isLine2) return vec3(0); // Simplified infinity

    // Case: Line and Circle
    // Tangency = CircleCenter - Radius * LineNormal
    if (isLine1) return vec3(c2.center + (c1.center / c2.curvature), 1.0);
    if (isLine2) return vec3(c1.center + (c2.center / c1.curvature), 1.0);

    // Case: Two Circles
    return vec3((k1 * c1.center + k2 * c2.center) / (k1 + k2), 1.0);
}


//helper function for descartes equation
bool checkDesc(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    return abs(2.*(a*a+b*b+c*c+d*d)-(a+b+c+d)*(a+b+c+d))<EPS;

}

//helper func for orient a line based on circle 
void orientLine( inout Circle line, Circle c){
    if(isInside(c.center,line)){
        line.center*=-1.;
        line.offset*=-1.;
    }   
}

// Helper: Swap for sorting
void swap(inout float a, inout float b, inout int idxA, inout int idxB) {
    if (a > b) {
        float t = a; 
        a = b; 
        b = t;
        int ti = idxA; 
        idxA = idxB; 
        idxB = ti;
    }
}

//orienting the dual circles
void dualOrient(inout Circle circ[4]){
    //finding zero curvatures if any
    vec4 k = vec4(circ[0].curvature, circ[1].curvature, circ[2].curvature, circ[3].curvature);
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;
    
    //no lines
    //checking desc equation
    if(zeros==0 && !checkDesc(k)) circ[idx.x].curvature= -circ[idx.x].curvature;
    //one line
    if(zeros>0){
        orientLine(circ[idx.x], circ[idx.w]);
        //second line if any
        if(zeros==2){
            orientLine(circ[idx.y],circ[idx.w]);
        }
    }
}

// --- 3. APOLLONIAN SOLVER ---

/**.
 * Returns mat4 where columns represent circles.
 * Format for Circle: vec4(curvature, k*x, k*y, q)
 * Format for Line:   vec4(0.0, normal.x, normal.y, offset)
 */
mat4 solveApollonianQuad(vec4 kInput) {
    vec4 k = kInput;
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;

    Circle c[4];
    ivec4 mapSortedToGeom; 

    // --- CASE 1: Two Lines (Strip Packing) ---
    if (zeros == 2) {
        // Line 1: Bottom Line at y = 0
        // Normal points UP (0, 1), Offset = 0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        // Use the first circle's curvature to determine the gap
        // Diameter = 2.0 / curvature
        float kCircle = (abs(k.z) > EPS) ? k.z : k.w;
        float gap = 2.0 / kCircle; 

        // Line 2: Top Line at y = gap
        // Normal points DOWN (0, -1)
        // Offset logic: dot(n, p) = w  ->  dot((0,-1), (0, gap)) = -gap
        c[1] = Circle(vec2(0.0, 1.0), 0.0, gap); 

        // Circles 3 & 4 (Placed in the gap)
        float k1 = k.z; 
        float k2 = k.w;
        
        // y = 1/k is the radius, effectively centering them in the gap
        c[2] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        c[3] = Circle(vec2(-2.0/k2, 1.0/k2), k2, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 2: One Line (Plane Packing) ---
    else if (zeros == 1) {
        // Line at y=0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        float k1 = k.y, k2 = k.z, k3 = k.w;
        c[1] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        
        float xc2 = 2.0 / sqrt(k1 * k2);
        c[2] = Circle(vec2(xc2, 1.0/k2), k2, 0.0);
        
        float xc3 = 2.0 / sqrt(k1 * k3);
        c[3] = Circle(vec2(xc3, 1.0/k3), k3, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 3: Standard (All Circles) ---
    else {
        float a, b, c_val, d;
        if (k.x < -EPS) {
             a = k.x; b = k.y; c_val = k.z; d = k.w;
             mapSortedToGeom = ivec4(3, 0, 1, 2); 
        } else {
             b = k.x; c_val = k.y; d = k.z; a = k.w;
             mapSortedToGeom = ivec4(0, 1, 2, 3); 
        }

        c[0] = Circle(vec2(0.0, 1.0/b), b, 0.0);
        float xc = 2.0 / sqrt(b * c_val);
        c[1] = Circle(vec2(xc, 1.0/c_val), c_val, 0.0);

        // Trilateration for D
        float rB = 1.0/b; float rC = 1.0/c_val; float rD = 1.0/d;
        float distB = rB + rD; float distC = rC + rD;
        vec2 posB = c[0].center; vec2 posC = c[1].center;
        float distCenters = distance(posB, posC);
        
        float x_local = (distB*distB - distC*distC + distCenters*distCenters) / (2.0 * distCenters);
        float y_local = sqrt(max(0.0, distB*distB - x_local*x_local));
        vec2 dir = (posC - posB) / distCenters;       
        vec2 normal = vec2(-dir.y, dir.x);            
        vec2 posD = posB + x_local * dir - y_local * normal;
        c[2] = Circle(posD, d, 0.0);
        
        // Descartes for A
        float sum_curv = a + b + c_val + d;
        vec2 s_kz = vec2(0.0);
        vec2 s_k2z = vec2(0.0);
        for(int i=0; i<3; i++) {
            s_kz  += c[i].curvature * c[i].center;
            s_k2z += (c[i].curvature * c[i].curvature) * c[i].center;
        }
        float denom = (a*a) - (0.5 * sum_curv * a);
        if (abs(denom) < 1e-9) denom = 1.0;
        vec2 posA = ((0.5 * sum_curv * s_kz) - s_k2z) / denom;
        c[3] = Circle(posA, a, 0.0);
    }

    // --- Output Construction ---
    mat4 result;
    for(int i=0; i<4; i++) {
        int geomIndex = mapSortedToGeom[i];
        int originalIndex = idx[i];
        
        Circle geom = c[geomIndex];
        float p = geom.curvature;
        vec4 col;
        
        if (abs(p) < EPS) {
            // LINE ENCODING: x=0, y=nx, z=ny, w=offset
            col = vec4(0.0, geom.center.x, geom.center.y, geom.offset);
        } else {
            // CIRCLE ENCODING: x=k, y=kx, z=ky, w=q
            float r = p * geom.center.x;
            float s = p * geom.center.y;
            float q = (r*r + s*s - 1.0) / p;
            col = vec4(p, r, s, q);
        }
        
        if (originalIndex == 0) result[0] = col;
        else if (originalIndex == 1) result[1] = col;
        else if (originalIndex == 2) result[2] = col;
        else if (originalIndex == 3) result[3] = col;
    }
    
    return result;
}

// Convert vec4 back to Geometric Circle
Circle toGeom(vec4 v) {
    // Line Case (Curvature v.x is 0)
    if (abs(v.x) < EPS) {
        // center = (v.y, v.z), curvature = 0, offset = v.w
        return Circle(vec2(v.y, v.z), 0.0, v.w);
    }
    // Circle Case
    return Circle(vec2(v.y/v.x, v.z/v.x), v.x, 0.0);
}

vec4 ptToQuad(vec2 p){
    float a= p.x;
    float b= p.y;
    return vec4(2.*b, 2.*(1.-b), 2.*(a*a+b*b-b), 2.*(1.+a*a+b*b-b+2.*a));
}
Circle[4] circQuad(vec4 quad){
    mat4 pack = solveApollonianQuad(quad);
    Circle cc0=  toGeom(pack[0]);
    Circle cc1=  toGeom(pack[1]);
    Circle cc2=  toGeom(pack[2]);
    Circle cc3=  toGeom(pack[3]);

    Circle[4] result = Circle[4](cc0, cc1, cc2, cc3);
    return result;
}

Circle[4] circDual(Circle[4] maincirc){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle dualCirc[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(dualCirc);

    return dualCirc;
}

vec3 packing(Circle[4] maincirc, vec2 p){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle circ[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(circ);
    
    vec3 color = vec3(0.8,0.8,0.8);
   
    //continually swapping through dual circles will eventually get you to one of the main
    //circles and once in a main circle color it.
    // Iterate inversions
    int i;
    for (i = 0; i < 100; i++) {
        if (isInside(p, cc1)) {
            color = pink;
            break;
        } else if (isInside(p, cc2)) {
            color = purple;
            break;
        } else if (isInside(p, cc3)) {
            color = yellow;
            break;
        } else if (isInside(p, cc0)) {
            color = green;
            break;
        }
        if (isInside(p, circ[0])) {
            p = invert(p, circ[0]);
        } else if (isInside(p, circ[1])) {
            p = invert(p, circ[1]);
        } else if (isInside(p, circ[2])) {
            p = invert(p, circ[2]);
        } else if (isInside(p, circ[3])) {
            p = invert(p, circ[3]);
        } 
    }
    return color;
}
`,jc=Object.freeze(Object.defineProperty({__proto__:null,default:Gc},Symbol.toStringTag,{value:"Module"})),Vc=`
// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}


vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50 / u_zoom_invertedStrip + u_pan_invertedStrip;
}


void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    // Get mouse position in stripPack world space (accounting for stripPack's zoom/pan)
    vec2 stripMouseUV = iMouse_stripPack.xy / iResolution_stripPack.xy;
    vec2 mouseUV = stripMouseUV - vec2(0.5, 0.5);
    mouseUV.x *= iResolution_stripPack.x / iResolution_stripPack.y;
    mouseUV *= 6.50;
    mouseUV = mouseUV / u_zoom_stripPack + u_pan_stripPack;

    // Apply Möbius transformation: w = 1/(z - mouse)
    vec2 diff = p - mouseUV;
    float denominator = dot(p, p); // |z - mouse|²

    // Complex division: 1/(a + ib) = (a - ib)/(a² + b²)
    vec2 transformedP = vec2(p.x, -p.y) / denominator + mouseUV;

    // Apply the packing to the transformed point
    vec4 quad=vec4(0.,0.,2.,2.);
    Circle[4] mainCirc = circQuad(quad);
    color = packing(mainCirc, transformedP);

    if(isOnBoundary(transformedP, mainCirc[0], thick)) {
        color = BLACK;;
    } else if(isOnBoundary(transformedP, mainCirc[1], thick)) {
        color = BLACK;
    } else if(isOnBoundary(transformedP, mainCirc[2], thick)) {
        color = BLACK;
    } else if(isOnBoundary(transformedP, mainCirc[3], thick)) {
        color = BLACK;
    }

    fragColor = vec4(color, 1.0);

}
`,Kc=Object.freeze(Object.defineProperty({__proto__:null,default:Vc},Symbol.toStringTag,{value:"Module"})),Hc=`

// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}



vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50 / u_zoom_resulting_pack + u_pan_resulting_pack;
}



void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;

    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    // Get c from mouse position on the stripPack side,
    // applying stripPack's zoom/pan so c is in stripPack world space
    vec2 stripMouseUV = iMouse_stripPack.xy / iResolution_stripPack.xy;
    vec2 c = stripMouseUV - vec2(0.5, 0.5);
    c.x *= iResolution_stripPack.x / iResolution_stripPack.y;
    c *= 6.50;
    c = c / u_zoom_stripPack + u_pan_stripPack;

    vec4 newQuad = ptToQuad(c);
    Circle[4] mainCirc = circQuad(newQuad);
    color = packing(mainCirc, p);

    if(isOnBoundary(p, mainCirc[0], t)) {
        color = BLACK;;
    } else if(isOnBoundary(p, mainCirc[1], t)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[2], t)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[3], t)) {
        color = BLACK;
    }

    fragColor = vec4(color, 1.0);

}
`,Qc=Object.freeze(Object.defineProperty({__proto__:null,default:Hc},Symbol.toStringTag,{value:"Module"})),Xc=`// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}



vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50 / u_zoom_stripPack + u_pan_stripPack;
}
Circle unitCircle = Circle(vec2(0.0, 0.0), 1.0, 0.0);

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    vec4 quad=vec4(0.,0.,2.,2.);
    Circle[4] mainCirc = circQuad(quad);
    color = packing(mainCirc, p);

    // Scale line/dot thickness to stay visually constant as zoom changes
    float t = thick / u_zoom_stripPack;


    if(isOnBoundary(p, mainCirc[0], t)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[1], t)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[2], t)) {
        color = BLACK;
    } else if(isOnBoundary(p, mainCirc[3], t)) {
        color = BLACK;
    }

    //fundemental domain of PGL(2,Z)
    if(abs(p.x+1./2.) < t && (p.y) >= sqrt(3.)/2.){
        color = WHITE;
    }
    if(abs(p.x) < t && (p.y) >= 1.){
        color = WHITE;
    }
    if(isOnBoundary(p, unitCircle, 2.*t) && -1./2.<=p.x && p.x<=0. && p.y>=0.){
    color = WHITE;
    }

    // Show mouse position in parameter space as a red dot in the parameter space
    vec2 mouseUV = normalize_coord(iMouse_stripPack.xy);
    vec2 c= mouseUV;

    p = normalize_coord(fragCoord);
    if (length(p - c) < 0.05 / u_zoom_stripPack) {
        color = vec3(1.0, 0.0, 0.0);
    }

    fragColor = vec4(color, 1.0);

}
`,Yc=Object.freeze(Object.defineProperty({__proto__:null,default:Xc},Symbol.toStringTag,{value:"Module"})),Wc=`float EPS=1e-4;
vec3 BLACK = vec3(0.0, 0.0, 0.0);
vec3 WHITE = vec3(1.0, 1.0, 1.0);

// --- 1. CORE STRUCTURES & MATH ---

vec2 cmul(vec2 z, vec2 w) {
    return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

// Updated Struct: Supports Lines explicitly
struct Circle {
    vec2 center;     // Circle: (cx, cy). Line: Normal (nx, ny).
    float curvature; // Circle: 1/r. Line: 0.0.
    float offset;    // Circle: 0.0. Line: w (where dot(n,p) = w).
};

// Unit vector helper
vec2 u(float a) {
    return vec2(cos(a), sin(a));
}

// --- 2. GEOMETRIC FUNCTIONS ---

// Invert a point 'z' through a Circle or reflect across a Line
vec2 invert(vec2 z, Circle C) {
    // Case: Line (Reflection)
    if (abs(C.curvature) < EPS) {
        // Formula: p' = p - 2 * (dot(n, p) - w) * n
        float distSigned = dot(z, C.center) - C.offset;
        return z - 2.0 * distSigned * C.center;
    }
    // Case: Circle (Inversion)
    vec2 difference = z - C.center;
    float rad = 1.0 / C.curvature;
    float mult = (rad * rad) / dot(difference, difference);
    return C.center + mult * difference;
}

// Check if a point is "inside" the shape
bool isInside(vec2 p, Circle c) {
    float k = c.curvature;
    
    // Case: Line (Half-plane check)
    if (abs(k) < EPS) {
        // We assume Normal points TOWARDS the interior
        //vec2 diff=c.offset*(c.center)-p;
        return dot(p, c.center) > c.offset; 
    }
    // Case: Standard Circle (Interior)
    else if (k > 0.0) {
        return length(p - c.center) < (1.0 / k);
    }
    // Case: Exterior Circle (Outside of a hole)
    else {
        return length(p - c.center) > abs(1.0 / k);
    }
}

// Distance to shape boundary
float distToCircle(vec2 p, Circle C) {
    // Case: Line
    if (abs(C.curvature) < EPS) {
        //vec2 line_pt = C.offset * C.center; // Point on the line
        //vec2 diff = p - line_pt;
        return abs(dot(p, C.center) - C.offset);
    }
    // Case: Circle
    float radius = 1.0 / C.curvature;
    return abs(length(p - C.center) - abs(radius));
}

Circle lineFromPoints(vec2 A, vec2 B) {
    vec2 t = normalize(B - A);        // Tangent
    vec2 n = vec2(-t.y, t.x);        // Normal
    float w = dot(n, A);             // Offset
    return Circle(n, 0.0, w);
}


// Construct a Circle/Line from 3 Points
Circle circleFromThreePoints(vec3 A, vec3 B, vec3 C) {
    float zA = A.z;
    float zB = B.z;
    float zC = C.z;
    
    //Case: Line
    if(zA==0.0){
        return lineFromPoints(B.xy, C.xy);
    }
    if(zB==0.0){
        return lineFromPoints(A.xy, C.xy);
    }
    if(zC==0.0){
        return lineFromPoints(A.xy, B.xy);
    }
    
    vec2 a = A.xy;
    vec2 b = B.xy;
    vec2 c = C.xy;

    vec2 ab = b - a;
    vec2 ac = c - a;
    float d = 2.0 * (ab.x * ac.y - ab.y * ac.x);

    // Case: Circle
    vec2 u = vec2(
        ac.y * dot(ab, ab) - ab.y * dot(ac, ac),
        ab.x * dot(ac, ac) - ac.x * dot(ab, ab)
    ) / d;
    vec2 center = a + u;
    float radius = length(u);
    
    return Circle(center, 1./radius, 0.0);
}

// Find tangent point between two shapes
vec3 getTangentPoint(Circle c1, Circle c2) {
    float k1 = c1.curvature;
    float k2 = c2.curvature;
    float epsilon = EPS;

    bool isLine1 = abs(k1) < EPS;
    bool isLine2 = abs(k2) < EPS;

    // Case: Two Lines (Parallel in packing -> Point at Infinity)
    if (isLine1 && isLine2) return vec3(0); // Simplified infinity

    // Case: Line and Circle
    // Tangency = CircleCenter - Radius * LineNormal
    if (isLine1) return vec3(c2.center - (c1.center / c2.curvature), 1.0);
    if (isLine2) return vec3(c1.center - (c2.center / c1.curvature), 1.0);

    // Case: Two Circles
    return vec3((k1 * c1.center + k2 * c2.center) / (k1 + k2), 1.0);
}


//helper function for descartes equation
bool checkDesc(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    return abs(2.*(a*a+b*b+c*c+d*d)-(a+b+c+d)*(a+b+c+d))<EPS;

}

//helper func for orient a line based on circle 
void orientLine( inout Circle line, Circle c){
    //vec2 point= line.offset*(line.center);
    //vec2 diff= c.center - point; // points to the exterior of the line
    
    //line.center*= -sign(dot(point,diff));

    if(isInside(c.center,line)){
        line.center*=-1.;
        line.offset*=-1.;
    }   
}

// Helper: Swap for sorting
void swap(inout float a, inout float b, inout int idxA, inout int idxB) {
    if (a > b) {
        float t = a; 
        a = b; 
        b = t;
        int ti = idxA; 
        idxA = idxB; 
        idxB = ti;
    }
}

//orienting the dual circles
void dualOrient(inout Circle circ[4]){
    //finding zero curvatures if any
    vec4 k = vec4(circ[0].curvature, circ[1].curvature, circ[2].curvature, circ[3].curvature);
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;
    
    //no lines
    //checking desc equation
    if(zeros==0 && !checkDesc(k)) circ[idx.x].curvature= -circ[idx.x].curvature;
    //one line
    if(zeros>0){
        orientLine(circ[idx.x], circ[idx.w]);
        //second line if any
        if(zeros==2){
            orientLine(circ[idx.y],circ[idx.w]);
        }
    }
}

// --- 3. APOLLONIAN SOLVER ---

/**.
 * Returns mat4 where columns represent circles.
 * Format for Circle: vec4(curvature, k*x, k*y, q)
 * Format for Line:   vec4(0.0, normal.x, normal.y, offset)
 */
mat4 solveApollonianQuad(vec4 kInput) {
    vec4 k = kInput;
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;

    Circle c[4];
    ivec4 mapSortedToGeom; 

    // --- CASE 1: Two Lines (Strip Packing) ---
    if (zeros == 2) {
        // Line 1: Bottom Line at y = 0
        // Normal points UP (0, 1), Offset = 0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        // Use the first circle's curvature to determine the gap
        // Diameter = 2.0 / curvature
        float kCircle = (abs(k.z) > EPS) ? k.z : k.w;
        float gap = 2.0 / kCircle; 

        // Line 2: Top Line at y = gap
        // Normal points DOWN (0, -1)
        // Offset logic: dot(n, p) = w  ->  dot((0,-1), (0, gap)) = -gap
        c[1] = Circle(vec2(0.0, 1.0), 0.0, gap); 

        // Circles 3 & 4 (Placed in the gap)
        float k1 = k.z; 
        float k2 = k.w;
        
        // y = 1/k is the radius, effectively centering them in the gap
        c[2] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        c[3] = Circle(vec2(2.0/k2, 1.0/k2), k2, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 2: One Line (Plane Packing) ---
    else if (zeros == 1) {
        // Line at y=0
        c[0] = Circle(vec2(0.0, 1.0), 0.0, 0.0);
        
        float k1 = k.y, k2 = k.z, k3 = k.w;
        c[1] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        
        float xc2 = 2.0 / sqrt(k1 * k2);
        c[2] = Circle(vec2(xc2, 1.0/k2), k2, 0.0);
        
        float xc3 = 2.0 / sqrt(k1 * k3);
        c[3] = Circle(vec2(xc3, 1.0/k3), k3, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 3: Standard (All Circles) ---
    else {
        float a, b, c_val, d;
        if (k.x < -EPS) {
             a = k.x; b = k.y; c_val = k.z; d = k.w;
             mapSortedToGeom = ivec4(3, 0, 1, 2); 
        } else {
             b = k.x; c_val = k.y; d = k.z; a = k.w;
             mapSortedToGeom = ivec4(0, 1, 2, 3); 
        }

        c[0] = Circle(vec2(0.0, 1.0/b), b, 0.0);
        float xc = 2.0 / sqrt(b * c_val);
        c[1] = Circle(vec2(xc, 1.0/c_val), c_val, 0.0);

        // Trilateration for D
        float rB = 1.0/b; float rC = 1.0/c_val; float rD = 1.0/d;
        float distB = rB + rD; float distC = rC + rD;
        vec2 posB = c[0].center; vec2 posC = c[1].center;
        float distCenters = distance(posB, posC);
        
        float x_local = (distB*distB - distC*distC + distCenters*distCenters) / (2.0 * distCenters);
        float y_local = sqrt(max(0.0, distB*distB - x_local*x_local));
        vec2 dir = (posC - posB) / distCenters;       
        vec2 normal = vec2(-dir.y, dir.x);            
        vec2 posD = posB + x_local * dir - y_local * normal;
        c[2] = Circle(posD, d, 0.0);
        
        // Descartes for A
        float sum_curv = a + b + c_val + d;
        vec2 s_kz = vec2(0.0);
        vec2 s_k2z = vec2(0.0);
        for(int i=0; i<3; i++) {
            s_kz  += c[i].curvature * c[i].center;
            s_k2z += (c[i].curvature * c[i].curvature) * c[i].center;
        }
        float denom = (a*a) - (0.5 * sum_curv * a);
        if (abs(denom) < 1e-9) denom = 1.0;
        vec2 posA = ((0.5 * sum_curv * s_kz) - s_k2z) / denom;
        c[3] = Circle(posA, a, 0.0);
    }

    // --- Output Construction ---
    mat4 result;
    for(int i=0; i<4; i++) {
        int geomIndex = mapSortedToGeom[i];
        int originalIndex = idx[i];
        
        Circle geom = c[geomIndex];
        float p = geom.curvature;
        vec4 col;
        
        if (abs(p) < EPS) {
            // LINE ENCODING: x=0, y=nx, z=ny, w=offset
            col = vec4(0.0, geom.center.x, geom.center.y, geom.offset);
        } else {
            // CIRCLE ENCODING: x=k, y=kx, z=ky, w=q
            float r = p * geom.center.x;
            float s = p * geom.center.y;
            float q = (r*r + s*s - 1.0) / p;
            col = vec4(p, r, s, q);
        }
        
        if (originalIndex == 0) result[0] = col;
        else if (originalIndex == 1) result[1] = col;
        else if (originalIndex == 2) result[2] = col;
        else if (originalIndex == 3) result[3] = col;
    }
    
    return result;
}

// Convert vec4 back to Geometric Circle
Circle toGeom(vec4 v) {
    // Line Case (Curvature v.x is 0)
    if (abs(v.x) < EPS) {
        // center = (v.y, v.z), curvature = 0, offset = v.w
        return Circle(vec2(v.y, v.z), 0.0, v.w);
    }
    // Circle Case
    return Circle(vec2(v.y/v.x, v.z/v.x), v.x, 0.0);
}

vec4 ptToQuad(vec2 p){
    float a= p.x;
    float b= p.y;
    return vec4(b, 1.-b, a*a+b*b-b, 1.+a*a+b*b-b+2.*a);
}

vec3 packing(vec4 quad, vec2 p){
    mat4 pack = solveApollonianQuad(quad);
    Circle cc0=  toGeom(pack[0]);
    Circle cc1=  toGeom(pack[1]);
    Circle cc2=  toGeom(pack[2]);
    Circle cc3=  toGeom(pack[3]);
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle circ[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(circ);
    

   // Circle c0 = Circle(vec2(1.,0.),0.,1.);

    //colors for the circles
    vec3 purple=vec3(0.70,0.40,0.90); //purple 
    vec3 pink=vec3(01.0,0.450,0.550); //pink
    vec3 yellow=vec3(1.0,01.0,0.30); //yellow
    vec3 green=vec3(0.30,01.0,0.40); //green
    
    vec3 color = vec3(0.8,0.8,0.8);
   
    //continually swapping through dual circles will eventually get you to one of the main
    //circles and once in a main circle color it.
    // Iterate inversions
    int i;
    for (i = 0; i < 100; i++) {
        if (isInside(p, cc1)) {
            color = pink;
            break;
        } else if (isInside(p, cc2)) {
            color = purple;
            break;
        } else if (isInside(p, cc3)) {
            color = yellow;
            break;
        } else if (isInside(p, cc0)) {
            color = green;
            break;
        }
        if (isInside(p, circ[0])) {
            p = invert(p, circ[0]);
        } else if (isInside(p, circ[1])) {
            p = invert(p, circ[1]);
        } else if (isInside(p, circ[2])) {
            p = invert(p, circ[2]);
        } else if (isInside(p, circ[3])) {
            p = invert(p, circ[3]);
        } 
    }
    return color;
}




// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}

float thick= 0.01;
int checks = 100;


//normalizing coordinates to split screen 
vec2 normalize_coord_right(vec2 fragCoord) {
    vec2 uv = vec2(2.*fragCoord.x/iResolution.x-1.,fragCoord.y/iResolution.y);
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x /(2.* iResolution.y);
    return uv * 5.5;
}

vec2 normalize_coord_left(vec2 fragCoord) {
    vec2 uv = vec2(2.*fragCoord.x/iResolution.x,fragCoord.y/iResolution.y);
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x /(2.* iResolution.y);
    return uv * 4.5;
}

vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{

    //set up for split screen
    vec3 color;
    vec2 p = normalize_coord_left(fragCoord);
    color=vec3(0);
        
    // Get c from mouse position
    vec2 c = normalize_coord_left(iMouse.xy);
  
    
    vec4 quad=vec4(2.,2.,0.,0.);
    color = packing(quad, p);
    
p = normalize_coord_left(fragCoord);
if (length(p - c) < 0.05) {
        color = vec3(1.0, 0.0, 0.0);
    }

//roght side of the screen
if(fragCoord.x>iResolution.x/2.){
    p = normalize_coord_right(fragCoord);
   
    vec4 newQuad = ptToQuad(c);
    color = packing(newQuad, p);
    
    }
    
    fragColor = vec4(color, 1.0);
}
   
`,Zc=Object.freeze(Object.defineProperty({__proto__:null,default:Wc},Symbol.toStringTag,{value:"Module"})),Jc=`float EPS=1e-4;

float thick= 0.01;
int checks = 100;

vec3 BLACK = vec3(0.0, 0.0, 0.0);
vec3 WHITE = vec3(1.0, 1.0, 1.0);
vec3 Blue = vec3(0.,0.,1.);
vec3 Red = vec3(1.,0.,0.);
vec3 Purple=vec3(0.60,0.30,0.70); //purple 
vec3 Pink=vec3(0.80,0.350,0.450); //pink
vec3 Green=vec3(0.20,0.80,0.50); //green
vec3 Yellow=vec3(1.0,0.750,0.30); //orange

//colors for the circles
vec3 purple=vec3(0.70,0.40,0.90); //purple 
vec3 pink=vec3(01.0,0.450,0.550); //pink
vec3 yellow=vec3(1.0,01.0,0.30); //yellow
vec3 green=vec3(0.30,01.0,0.40); //green

// --- 1. CORE STRUCTURES & MATH ---

vec2 cmul(vec2 z, vec2 w) {
    return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

// Updated Struct: Supports Lines explicitly
struct Circle {
    vec2 center;     // Circle: (cx, cy). Line: Normal (nx, ny). normal points toward interior
    float curvature; // Circle: 1/r. Line: 0.0.
    float offset;    // Circle: 0.0. Line: w (where dot(n,p) = w).
};

// Unit vector helper
vec2 u(float a) {
    return vec2(cos(a), sin(a));
}

// --- 2. GEOMETRIC FUNCTIONS ---

// Invert a point 'z' through a Circle or reflect across a Line
vec2 invert(vec2 z, Circle C) {
    // Case: Line (Reflection)
    if (abs(C.curvature) < EPS) {
        // Formula: p' = p - 2 * (dot(n, p) - w) * n
        float distSigned = dot(z, C.center) - C.offset;
        return z - 2.0 * distSigned * C.center;
    }
    // Case: Circle (Inversion)
    vec2 difference = z - C.center;
    float rad = 1.0 / C.curvature;
    float mult = (rad * rad) / dot(difference, difference);
    return C.center + mult * difference;
}

// Check if a point is "inside" the shape
bool isInside(vec2 p, Circle c) {
    float k = c.curvature;
    
    // Case: Line (Half-plane check)
    if (abs(k) < EPS) {
        // We assume Normal points TOWARDS the interior
        //vec2 diff=c.offset*(c.center)-p;
        return dot(p, c.center) > c.offset; 
    }
    // Case: Standard Circle (Interior)
    else if (k > 0.0) {
        return length(p - c.center) < (1.0 / k);
    }
    // Case: Exterior Circle (Outside of a hole)
    else {
        return length(p - c.center) > abs(1.0 / k);
    }
}

// Distance to shape boundary
float distToCircle(vec2 p, Circle C) {
    // Case: Line
    if (abs(C.curvature) < EPS) {
        return (dot(p, C.center) - C.offset);
    }
    // Case: Circle
    float radius = 1.0 / C.curvature;
    return (length(p - C.center) - abs(radius));
}


// Check if a point is on the "boundary" (within a small epsilon)
bool isOnBoundary(vec2 p, Circle c, float thickness) {
    float dist = distToCircle(p, c);
    return -thickness < dist && dist < 0.;
}

Circle lineFromPoints(vec2 A, vec2 B) {
    vec2 t = normalize(B - A);        // Tangent
    vec2 n = vec2(-t.y, t.x);        // Normal
    float w = dot(n, A);             // Offset
    return Circle(n, 0.0, w);
}


// Construct a Circle/Line from 3 Points
Circle circleFromThreePoints(vec3 A, vec3 B, vec3 C) {
    float zA = A.z;
    float zB = B.z;
    float zC = C.z;
    
    //Case: Line
    if(zA==0.0){
        return lineFromPoints(B.xy, C.xy);
    }
    if(zB==0.0){
        return lineFromPoints(A.xy, C.xy);
    }
    if(zC==0.0){
        return lineFromPoints(A.xy, B.xy);
    }
    
    vec2 a = A.xy;
    vec2 b = B.xy;
    vec2 c = C.xy;

    vec2 ab = b - a;
    vec2 ac = c - a;
    float d = 2.0 * (ab.x * ac.y - ab.y * ac.x);

    if(abs(d)<EPS){
        return lineFromPoints(A.xy, B.xy);
    }

    // Case: Circle
    vec2 u = vec2(
        ac.y * dot(ab, ab) - ab.y * dot(ac, ac),
        ab.x * dot(ac, ac) - ac.x * dot(ab, ab)
    ) / d;
    vec2 center = a + u;
    float radius = length(u);
    
    return Circle(center, 1./radius, 0.0);
}

// Find tangent point between two shapes
vec3 getTangentPoint(Circle c1, Circle c2) {
    float k1 = c1.curvature;
    float k2 = c2.curvature;
    float epsilon = EPS;

    bool isLine1 = abs(k1) < EPS;
    bool isLine2 = abs(k2) < EPS;

    // Case: Two Lines (Parallel in packing -> Point at Infinity)
    if (isLine1 && isLine2) return vec3(0); // Simplified infinity

    // Case: Line and Circle
    // Tangency = CircleCenter - Radius * LineNormal
    if (isLine1) return vec3(c2.center + (c1.center / c2.curvature), 1.0);
    if (isLine2) return vec3(c1.center + (c2.center / c1.curvature), 1.0);

    // Case: Two Circles
    return vec3((k1 * c1.center + k2 * c2.center) / (k1 + k2), 1.0);
}


//helper function for descartes equation
bool checkDesc(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    return abs(2.*(a*a+b*b+c*c+d*d)-(a+b+c+d)*(a+b+c+d))<EPS;

}

//helper func for orient a line based on circle 
void orientLine( inout Circle line, Circle c){
    if(isInside(c.center,line)){
        line.center*=-1.;
        line.offset*=-1.;
    }   
}

// Helper: Swap for sorting
void swap(inout float a, inout float b, inout int idxA, inout int idxB) {
    if (a > b) {
        float t = a; 
        a = b; 
        b = t;
        int ti = idxA; 
        idxA = idxB; 
        idxB = ti;
    }
}

//orienting the dual circles
void dualOrient(inout Circle circ[4]){
    //finding zero curvatures if any
    vec4 k = vec4(circ[0].curvature, circ[1].curvature, circ[2].curvature, circ[3].curvature);
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;
    
    //no lines
    //checking desc equation
    if(zeros==0 && !checkDesc(k)) circ[idx.x].curvature= -circ[idx.x].curvature;
    //one line
    if(zeros>0){
        orientLine(circ[idx.x], circ[idx.w]);
        //second line if any
        if(zeros==2){
            orientLine(circ[idx.y],circ[idx.w]);
        }
    }
}

// --- 3. APOLLONIAN SOLVER ---

/**.
 * Returns mat4 where columns represent circles.
 * Format for Circle: vec4(curvature, k*x, k*y, q)
 * Format for Line:   vec4(0.0, normal.x, normal.y, offset)
 */
mat4 solveApollonianQuad(vec4 kInput) {
    vec4 k = kInput;
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;

    Circle c[4];
    ivec4 mapSortedToGeom; 

    // --- CASE 1: Two Lines (Strip Packing) ---
    if (zeros == 2) {
        // Line 1: Bottom Line at y = 0
        // Normal points UP (0, 1), Offset = 0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        // Use the first circle's curvature to determine the gap
        // Diameter = 2.0 / curvature
        float kCircle = (abs(k.z) > EPS) ? k.z : k.w;
        float gap = 2.0 / kCircle; 

        // Line 2: Top Line at y = gap
        // Normal points DOWN (0, -1)
        // Offset logic: dot(n, p) = w  ->  dot((0,-1), (0, gap)) = -gap
        c[1] = Circle(vec2(0.0, 1.0), 0.0, gap); 

        // Circles 3 & 4 (Placed in the gap)
        float k1 = k.z; 
        float k2 = k.w;
        
        // y = 1/k is the radius, effectively centering them in the gap
        c[2] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        c[3] = Circle(vec2(-2.0/k2, 1.0/k2), k2, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 2: One Line (Plane Packing) ---
    else if (zeros == 1) {
        // Line at y=0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        float k1 = k.y, k2 = k.z, k3 = k.w;
        c[1] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        
        float xc2 = 2.0 / sqrt(k1 * k2);
        c[2] = Circle(vec2(xc2, 1.0/k2), k2, 0.0);
        
        float xc3 = 2.0 / sqrt(k1 * k3);
        c[3] = Circle(vec2(xc3, 1.0/k3), k3, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 3: Standard (All Circles) ---
    else {
        float a, b, c_val, d;
        if (k.x < -EPS) {
             a = k.x; b = k.y; c_val = k.z; d = k.w;
             mapSortedToGeom = ivec4(3, 0, 1, 2); 
        } else {
             b = k.x; c_val = k.y; d = k.z; a = k.w;
             mapSortedToGeom = ivec4(0, 1, 2, 3); 
        }

        c[0] = Circle(vec2(0.0, 1.0/b), b, 0.0);
        float xc = 2.0 / sqrt(b * c_val);
        c[1] = Circle(vec2(xc, 1.0/c_val), c_val, 0.0);

        // Trilateration for D
        float rB = 1.0/b; float rC = 1.0/c_val; float rD = 1.0/d;
        float distB = rB + rD; float distC = rC + rD;
        vec2 posB = c[0].center; vec2 posC = c[1].center;
        float distCenters = distance(posB, posC);
        
        float x_local = (distB*distB - distC*distC + distCenters*distCenters) / (2.0 * distCenters);
        float y_local = sqrt(max(0.0, distB*distB - x_local*x_local));
        vec2 dir = (posC - posB) / distCenters;       
        vec2 normal = vec2(-dir.y, dir.x);            
        vec2 posD = posB + x_local * dir - y_local * normal;
        c[2] = Circle(posD, d, 0.0);
        
        // Descartes for A
        float sum_curv = a + b + c_val + d;
        vec2 s_kz = vec2(0.0);
        vec2 s_k2z = vec2(0.0);
        for(int i=0; i<3; i++) {
            s_kz  += c[i].curvature * c[i].center;
            s_k2z += (c[i].curvature * c[i].curvature) * c[i].center;
        }
        float denom = (a*a) - (0.5 * sum_curv * a);
        if (abs(denom) < 1e-9) denom = 1.0;
        vec2 posA = ((0.5 * sum_curv * s_kz) - s_k2z) / denom;
        c[3] = Circle(posA, a, 0.0);
    }

    // --- Output Construction ---
    mat4 result;
    for(int i=0; i<4; i++) {
        int geomIndex = mapSortedToGeom[i];
        int originalIndex = idx[i];
        
        Circle geom = c[geomIndex];
        float p = geom.curvature;
        vec4 col;
        
        if (abs(p) < EPS) {
            // LINE ENCODING: x=0, y=nx, z=ny, w=offset
            col = vec4(0.0, geom.center.x, geom.center.y, geom.offset);
        } else {
            // CIRCLE ENCODING: x=k, y=kx, z=ky, w=q
            float r = p * geom.center.x;
            float s = p * geom.center.y;
            float q = (r*r + s*s - 1.0) / p;
            col = vec4(p, r, s, q);
        }
        
        if (originalIndex == 0) result[0] = col;
        else if (originalIndex == 1) result[1] = col;
        else if (originalIndex == 2) result[2] = col;
        else if (originalIndex == 3) result[3] = col;
    }
    
    return result;
}

// Convert vec4 back to Geometric Circle
Circle toGeom(vec4 v) {
    // Line Case (Curvature v.x is 0)
    if (abs(v.x) < EPS) {
        // center = (v.y, v.z), curvature = 0, offset = v.w
        return Circle(vec2(v.y, v.z), 0.0, v.w);
    }
    // Circle Case
    return Circle(vec2(v.y/v.x, v.z/v.x), v.x, 0.0);
}

vec4 ptToQuad(vec2 p){
    float a= p.x;
    float b= p.y;
    return vec4(2.*b, 2.*(1.-b), 2.*(a*a+b*b-b), 2.*(1.+a*a+b*b-b+2.*a));
}
Circle[4] circQuad(vec4 quad){
    mat4 pack = solveApollonianQuad(quad);
    Circle cc0=  toGeom(pack[0]);
    Circle cc1=  toGeom(pack[1]);
    Circle cc2=  toGeom(pack[2]);
    Circle cc3=  toGeom(pack[3]);

    Circle[4] result = Circle[4](cc0, cc1, cc2, cc3);
    return result;
}

Circle[4] circDual(Circle[4] maincirc){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle dualCirc[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(dualCirc);

    return dualCirc;
}

vec3 packing(Circle[4] maincirc, vec2 p){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle circ[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(circ);
    
    vec3 color = vec3(0.8,0.8,0.8);
   
    //continually swapping through dual circles will eventually get you to one of the main
    //circles and once in a main circle color it.
    // Iterate inversions
    int i;
    for (i = 0; i < 100; i++) {
        if (isInside(p, cc1)) {
            color = pink;
            break;
        } else if (isInside(p, cc2)) {
            color = purple;
            break;
        } else if (isInside(p, cc3)) {
            color = yellow;
            break;
        } else if (isInside(p, cc0)) {
            color = green;
            break;
        }
        if (isInside(p, circ[0])) {
            p = invert(p, circ[0]);
        } else if (isInside(p, circ[1])) {
            p = invert(p, circ[1]);
        } else if (isInside(p, circ[2])) {
            p = invert(p, circ[2]);
        } else if (isInside(p, circ[3])) {
            p = invert(p, circ[3]);
        } 
    }
    return color;
}
`,eo=Object.freeze(Object.defineProperty({__proto__:null,default:Jc},Symbol.toStringTag,{value:"Module"})),no=`
// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}


vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 1.0;
}
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    float time = iTime;
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(1.,1.,1.);
    //color=vec3(0);
    float thickness=0.007;

    vec4 quad=vec4(0.,1.,2.,(1.+sqrt(2.))*(1.+sqrt(2.)));
    quad = vec4(0.,1.,1.,4.);
    quad=vec4(-1.,2.,2.,3.);
    quad=vec4(-2.,3.,10,7.);
    //quad=vec4(-6.,14.,11.,15.);
    Circle[4] mainCirc = circQuad(quad);

    Circle cc0 = mainCirc[0];
    Circle cc1 = mainCirc[1];
    Circle cc2 = mainCirc[2];
    Circle cc3 = mainCirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    float dotSize=0.015;


    if(isOnBoundary(p,mainCirc[0], thickness)){
        color=BLACK;
    }
    if(isOnBoundary(p,mainCirc[1],thickness)){
        color=BLACK;
    }
    if(isOnBoundary(p,mainCirc[2], thickness)){
        color=Red;
    }
     if(isOnBoundary(p,mainCirc[3],thickness)){
        color=BLACK;
    }
    

    if(time>2.){
    if (length(p - t01.xy) < dotSize) {
        color = vec3(1.0, 0.0, 0.0);
    }
    if (length(p - t02.xy) < dotSize) {
        color = vec3(1.0, 0.0, 0.0);
    }
    if (length(p - t03.xy) < dotSize) {
        color = vec3(1.0, 0.0, 0.0);
    }
    if (length(p - t12.xy) < dotSize) {
        color = vec3(1.0, 0.0, 0.0);
    }
    if (length(p - t23.xy) < dotSize) {
        color = vec3(1.0, 0.0, 0.0);
    }
    if (length(p - t31.xy) < dotSize) {
        color = vec3(1.0, 0.0, 0.0);
    }}

    
    Circle circ[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(circ);

    if(time>4.){
    if(isOnBoundary(p,circ[0],thickness)){
        color=Blue;
    }
    if(isOnBoundary(p,circ[1],thickness)){
        color=Blue;
    }
    if(isOnBoundary(p,circ[2],thickness)){
        color=Blue;
    }
     if(isOnBoundary(p,circ[3],thickness)){
        color=Blue;
    }}

    if(time>6.){
    thickness = 0.03;
    vec2 invertedPc0 = invert(p,circ[0]);
    vec2 invertedPc1 = invert(p,circ[1]);
    vec2 invertedPc2 = invert(p,circ[2]);
    vec2 invertedPc3 = invert(p,circ[3]);
    if(isOnBoundary(invertedPc0,cc0,0.03)){
        color=Purple;
    }
    if(isOnBoundary(invertedPc1,cc1,0.01)){
        color=Purple;
    }
    if(isOnBoundary(invertedPc2,cc2,0.01)){
        color=Purple;
    }
    if(isOnBoundary(invertedPc3,cc3,0.01)){
        color=Purple;
    }
    }
    //color = packing(mainCirc, p);    

    

    fragColor = vec4(color, 1.0);
    
}
`,to=Object.freeze(Object.defineProperty({__proto__:null,default:no},Symbol.toStringTag,{value:"Module"})),io=`float EPS=1e-4;

float thick= 0.01;
int checks = 100;

vec3 BLACK = vec3(0.0, 0.0, 0.0);
vec3 WHITE = vec3(1.0, 1.0, 1.0);
vec3 Blue = vec3(0.,0.,1.);
vec3 Red = vec3(1.,0.,0.);
vec3 Purple=vec3(0.60,0.30,0.70); //purple 
vec3 Pink=vec3(0.80,0.350,0.450); //pink
vec3 Green=vec3(0.20,0.80,0.50); //green
vec3 Yellow=vec3(1.0,0.750,0.30); //orange

//colors for the circles
vec3 purple=vec3(0.70,0.40,0.90); //purple 
vec3 pink=vec3(01.0,0.450,0.550); //pink
vec3 yellow=vec3(1.0,01.0,0.30); //yellow
vec3 green=vec3(0.30,01.0,0.40); //green

// --- 1. CORE STRUCTURES & MATH ---

vec2 cmul(vec2 z, vec2 w) {
    return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

// Updated Struct: Supports Lines explicitly
struct Circle {
    vec2 center;     // Circle: (cx, cy). Line: Normal (nx, ny). normal points toward interior
    float curvature; // Circle: 1/r. Line: 0.0.
    float offset;    // Circle: 0.0. Line: w (where dot(n,p) = w).
};

// Unit vector helper
vec2 u(float a) {
    return vec2(cos(a), sin(a));
}

// --- 2. GEOMETRIC FUNCTIONS ---

// Invert a point 'z' through a Circle or reflect across a Line
vec2 invert(vec2 z, Circle C) {
    // Case: Line (Reflection)
    if (abs(C.curvature) < EPS) {
        // Formula: p' = p - 2 * (dot(n, p) - w) * n
        float distSigned = dot(z, C.center) - C.offset;
        return z - 2.0 * distSigned * C.center;
    }
    // Case: Circle (Inversion)
    vec2 difference = z - C.center;
    float rad = 1.0 / C.curvature;
    float mult = (rad * rad) / dot(difference, difference);
    return C.center + mult * difference;
}

// Check if a point is "inside" the shape
bool isInside(vec2 p, Circle c) {
    float k = c.curvature;
    
    // Case: Line (Half-plane check)
    if (abs(k) < EPS) {
        // We assume Normal points TOWARDS the interior
        //vec2 diff=c.offset*(c.center)-p;
        return dot(p, c.center) > c.offset; 
    }
    // Case: Standard Circle (Interior)
    else if (k > 0.0) {
        return length(p - c.center) < (1.0 / k);
    }
    // Case: Exterior Circle (Outside of a hole)
    else {
        return length(p - c.center) > abs(1.0 / k);
    }
}

// Distance to shape boundary
float distToCircle(vec2 p, Circle C) {
    // Case: Line
    if (abs(C.curvature) < EPS) {
        return (dot(p, C.center) - C.offset);
    }
    // Case: Circle
    float radius = 1.0 / C.curvature;
    return (length(p - C.center) - abs(radius));
}


// Check if a point is on the "boundary" (within a small epsilon)
bool isOnBoundary(vec2 p, Circle c, float thickness) {
    float dist = distToCircle(p, c);
    return -thickness < dist && dist < 0.;
}

Circle lineFromPoints(vec2 A, vec2 B) {
    vec2 t = normalize(B - A);        // Tangent
    vec2 n = vec2(-t.y, t.x);        // Normal
    float w = dot(n, A);             // Offset
    return Circle(n, 0.0, w);
}


// Construct a Circle/Line from 3 Points
Circle circleFromThreePoints(vec3 A, vec3 B, vec3 C) {
    float zA = A.z;
    float zB = B.z;
    float zC = C.z;
    
    //Case: Line
    if(zA==0.0){
        return lineFromPoints(B.xy, C.xy);
    }
    if(zB==0.0){
        return lineFromPoints(A.xy, C.xy);
    }
    if(zC==0.0){
        return lineFromPoints(A.xy, B.xy);
    }
    
    vec2 a = A.xy;
    vec2 b = B.xy;
    vec2 c = C.xy;

    vec2 ab = b - a;
    vec2 ac = c - a;
    float d = 2.0 * (ab.x * ac.y - ab.y * ac.x);

    if(abs(d)<EPS){
        return lineFromPoints(A.xy, B.xy);
    }

    // Case: Circle
    vec2 u = vec2(
        ac.y * dot(ab, ab) - ab.y * dot(ac, ac),
        ab.x * dot(ac, ac) - ac.x * dot(ab, ab)
    ) / d;
    vec2 center = a + u;
    float radius = length(u);
    
    return Circle(center, 1./radius, 0.0);
}

// Find tangent point between two shapes
vec3 getTangentPoint(Circle c1, Circle c2) {
    float k1 = c1.curvature;
    float k2 = c2.curvature;
    float epsilon = EPS;

    bool isLine1 = abs(k1) < EPS;
    bool isLine2 = abs(k2) < EPS;

    // Case: Two Lines (Parallel in packing -> Point at Infinity)
    if (isLine1 && isLine2) return vec3(0); // Simplified infinity

    // Case: Line and Circle
    // Tangency = CircleCenter - Radius * LineNormal
    if (isLine1) return vec3(c2.center + (c1.center / c2.curvature), 1.0);
    if (isLine2) return vec3(c1.center + (c2.center / c1.curvature), 1.0);

    // Case: Two Circles
    return vec3((k1 * c1.center + k2 * c2.center) / (k1 + k2), 1.0);
}


//helper function for descartes equation
bool checkDesc(vec4 q){
    float a= q.x;
    float b= q.y;
    float c= q.z;
    float d= q.w;
    return abs(2.*(a*a+b*b+c*c+d*d)-(a+b+c+d)*(a+b+c+d))<EPS;

}

//helper func for orient a line based on circle 
void orientLine( inout Circle line, Circle c){
    if(isInside(c.center,line)){
        line.center*=-1.;
        line.offset*=-1.;
    }   
}

// Helper: Swap for sorting
void swap(inout float a, inout float b, inout int idxA, inout int idxB) {
    if (a > b) {
        float t = a; 
        a = b; 
        b = t;
        int ti = idxA; 
        idxA = idxB; 
        idxB = ti;
    }
}

//orienting the dual circles
void dualOrient(inout Circle circ[4]){
    //finding zero curvatures if any
    vec4 k = vec4(circ[0].curvature, circ[1].curvature, circ[2].curvature, circ[3].curvature);
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;
    
    //no lines
    //checking desc equation
    if(zeros==0 && !checkDesc(k)) circ[idx.x].curvature= -circ[idx.x].curvature;
    //one line
    if(zeros>0){
        orientLine(circ[idx.x], circ[idx.w]);
        //second line if any
        if(zeros==2){
            orientLine(circ[idx.y],circ[idx.w]);
        }
    }
}

// --- 3. APOLLONIAN SOLVER ---

/**.
 * Returns mat4 where columns represent circles.
 * Format for Circle: vec4(curvature, k*x, k*y, q)
 * Format for Line:   vec4(0.0, normal.x, normal.y, offset)
 */
mat4 solveApollonianQuad(vec4 kInput) {
    vec4 k = kInput;
    ivec4 idx = ivec4(0, 1, 2, 3);
    
    // Sort curvatures (Bubble sort network)
    swap(k.x, k.y, idx.x, idx.y);
    swap(k.z, k.w, idx.z, idx.w);
    swap(k.x, k.z, idx.x, idx.z);
    swap(k.y, k.w, idx.y, idx.w);
    swap(k.y, k.z, idx.y, idx.z);

    int zeros = 0;
    if(abs(k.x) < EPS) zeros++;
    if(abs(k.y) < EPS) zeros++;

    Circle c[4];
    ivec4 mapSortedToGeom; 

    // --- CASE 1: Two Lines (Strip Packing) ---
    if (zeros == 2) {
        // Line 1: Bottom Line at y = 0
        // Normal points UP (0, 1), Offset = 0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        // Use the first circle's curvature to determine the gap
        // Diameter = 2.0 / curvature
        float kCircle = (abs(k.z) > EPS) ? k.z : k.w;
        float gap = 2.0 / kCircle; 

        // Line 2: Top Line at y = gap
        // Normal points DOWN (0, -1)
        // Offset logic: dot(n, p) = w  ->  dot((0,-1), (0, gap)) = -gap
        c[1] = Circle(vec2(0.0, 1.0), 0.0, gap); 

        // Circles 3 & 4 (Placed in the gap)
        float k1 = k.z; 
        float k2 = k.w;
        
        // y = 1/k is the radius, effectively centering them in the gap
        c[2] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        c[3] = Circle(vec2(-2.0/k2, 1.0/k2), k2, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 2: One Line (Plane Packing) ---
    else if (zeros == 1) {
        // Line at y=0
        c[0] = Circle(vec2(0.0, -1.0), 0.0, 0.0);
        
        float k1 = k.y, k2 = k.z, k3 = k.w;
        c[1] = Circle(vec2(0.0, 1.0/k1), k1, 0.0);
        
        float xc2 = 2.0 / sqrt(k1 * k2);
        c[2] = Circle(vec2(xc2, 1.0/k2), k2, 0.0);
        
        float xc3 = 2.0 / sqrt(k1 * k3);
        c[3] = Circle(vec2(xc3, 1.0/k3), k3, 0.0);
        
        mapSortedToGeom = ivec4(0, 1, 2, 3);
    }
    // --- CASE 3: Standard (All Circles) ---
    else {
        float a, b, c_val, d;
        if (k.x < -EPS) {
             a = k.x; b = k.y; c_val = k.z; d = k.w;
             mapSortedToGeom = ivec4(3, 0, 1, 2); 
        } else {
             b = k.x; c_val = k.y; d = k.z; a = k.w;
             mapSortedToGeom = ivec4(0, 1, 2, 3); 
        }

        c[0] = Circle(vec2(0.0, 1.0/b), b, 0.0);
        float xc = 2.0 / sqrt(b * c_val);
        c[1] = Circle(vec2(xc, 1.0/c_val), c_val, 0.0);

        // Trilateration for D
        float rB = 1.0/b; float rC = 1.0/c_val; float rD = 1.0/d;
        float distB = rB + rD; float distC = rC + rD;
        vec2 posB = c[0].center; vec2 posC = c[1].center;
        float distCenters = distance(posB, posC);
        
        float x_local = (distB*distB - distC*distC + distCenters*distCenters) / (2.0 * distCenters);
        float y_local = sqrt(max(0.0, distB*distB - x_local*x_local));
        vec2 dir = (posC - posB) / distCenters;       
        vec2 normal = vec2(-dir.y, dir.x);            
        vec2 posD = posB + x_local * dir - y_local * normal;
        c[2] = Circle(posD, d, 0.0);
        
        // Descartes for A
        float sum_curv = a + b + c_val + d;
        vec2 s_kz = vec2(0.0);
        vec2 s_k2z = vec2(0.0);
        for(int i=0; i<3; i++) {
            s_kz  += c[i].curvature * c[i].center;
            s_k2z += (c[i].curvature * c[i].curvature) * c[i].center;
        }
        float denom = (a*a) - (0.5 * sum_curv * a);
        if (abs(denom) < 1e-9) denom = 1.0;
        vec2 posA = ((0.5 * sum_curv * s_kz) - s_k2z) / denom;
        c[3] = Circle(posA, a, 0.0);
    }

    // --- Output Construction ---
    mat4 result;
    for(int i=0; i<4; i++) {
        int geomIndex = mapSortedToGeom[i];
        int originalIndex = idx[i];
        
        Circle geom = c[geomIndex];
        float p = geom.curvature;
        vec4 col;
        
        if (abs(p) < EPS) {
            // LINE ENCODING: x=0, y=nx, z=ny, w=offset
            col = vec4(0.0, geom.center.x, geom.center.y, geom.offset);
        } else {
            // CIRCLE ENCODING: x=k, y=kx, z=ky, w=q
            float r = p * geom.center.x;
            float s = p * geom.center.y;
            float q = (r*r + s*s - 1.0) / p;
            col = vec4(p, r, s, q);
        }
        
        if (originalIndex == 0) result[0] = col;
        else if (originalIndex == 1) result[1] = col;
        else if (originalIndex == 2) result[2] = col;
        else if (originalIndex == 3) result[3] = col;
    }
    
    return result;
}

// Convert vec4 back to Geometric Circle
Circle toGeom(vec4 v) {
    // Line Case (Curvature v.x is 0)
    if (abs(v.x) < EPS) {
        // center = (v.y, v.z), curvature = 0, offset = v.w
        return Circle(vec2(v.y, v.z), 0.0, v.w);
    }
    // Circle Case
    return Circle(vec2(v.y/v.x, v.z/v.x), v.x, 0.0);
}

vec4 ptToQuad(vec2 p){
    float a= p.x;
    float b= p.y;
    return vec4(2.*b, 2.*(1.-b), 2.*(a*a+b*b-b), 2.*(1.+a*a+b*b-b+2.*a));
}
Circle[4] circQuad(vec4 quad){
    mat4 pack = solveApollonianQuad(quad);
    Circle cc0=  toGeom(pack[0]);
    Circle cc1=  toGeom(pack[1]);
    Circle cc2=  toGeom(pack[2]);
    Circle cc3=  toGeom(pack[3]);

    Circle[4] result = Circle[4](cc0, cc1, cc2, cc3);
    return result;
}

Circle[4] circDual(Circle[4] maincirc){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle dualCirc[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(dualCirc);

    return dualCirc;
}

vec3 packing(Circle[4] maincirc, vec2 p){
    Circle cc0 = maincirc[0];
    Circle cc1 = maincirc[1];
    Circle cc2 = maincirc[2];
    Circle cc3 = maincirc[3];
    
    
    // Dual circles
    vec3 t01 = getTangentPoint(cc0, cc1); //tangency point bw cc0, cc1
    vec3 t02 = getTangentPoint(cc0, cc2); //tangency point bw cc0, cc2
    vec3 t03 = getTangentPoint(cc0, cc3); //tangency point bw cc0, cc3
    vec3 t12 = getTangentPoint(cc1, cc2); //tangency point bw cc1, cc2
    vec3 t23 = getTangentPoint(cc2, cc3); //tangency point bw cc2, cc3
    vec3 t31 = getTangentPoint(cc3, cc1); //tangency point bw cc3, cc1

    // --- Dual circles construction ---
    Circle c0 = circleFromThreePoints(t12, t23, t31);
    Circle c1 = circleFromThreePoints(t02, t23, t03);
    Circle c2 = circleFromThreePoints(t01, t03, t31);
    Circle c3 = circleFromThreePoints(t12, t02, t01);

    
    Circle circ[4] = Circle[4]( c0,c1,c2,c3);
    //orient duals 
    
    dualOrient(circ);
    
    vec3 color = vec3(0.8,0.8,0.8);
   
    //continually swapping through dual circles will eventually get you to one of the main
    //circles and once in a main circle color it.
    // Iterate inversions
    int i;
    for (i = 0; i < 100; i++) {
        if (isInside(p, cc1)) {
            color = pink;
            break;
        } else if (isInside(p, cc2)) {
            color = purple;
            break;
        } else if (isInside(p, cc3)) {
            color = yellow;
            break;
        } else if (isInside(p, cc0)) {
            color = green;
            break;
        }
        if (isInside(p, circ[0])) {
            p = invert(p, circ[0]);
        } else if (isInside(p, circ[1])) {
            p = invert(p, circ[1]);
        } else if (isInside(p, circ[2])) {
            p = invert(p, circ[2]);
        } else if (isInside(p, circ[3])) {
            p = invert(p, circ[3]);
        } 
    }
    return color;
}
`,ro=Object.freeze(Object.defineProperty({__proto__:null,default:io},Symbol.toStringTag,{value:"Module"})),co=`// --- 4. RENDER LOGIC ---

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    return a + b * cos(6.28318 * (c * t + d));
}


vec2 normalize_coord(vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv - vec2(0.5, 0.5);
    uv.x *= iResolution.x / iResolution.y;
    return uv * 6.50 / u_zoom_stripPack + u_pan_stripPack;
}
Circle unitCircle = Circle(vec2(0.0, 0.0), 1.0, 0.0);
Circle realLine = Circle(vec2(0.,-1.),0.,0.);
Circle vertLine = Circle(vec2(1.,0.),0.,1.);
Circle horLine = Circle(vec2(0.,1.),0.,1.);

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec3 color;
    vec2 p = normalize_coord(fragCoord);
    color=vec3(0);

    if (isInside(p, unitCircle)) {
        color = pink;
    }
    if (isInside(p, realLine)) {
        color = blue;
    }
    if (isInside(p, vertLine)) {
        color = green;
    }
    if (isInside(p, horLine)) {
        color = yellow;
    }

    fragColor = vec4(color, 1.0);

}
`,oo=Object.freeze(Object.defineProperty({__proto__:null,default:co},Symbol.toStringTag,{value:"Module"}));function ao(i,e,n,t){const r=i.getCrossViewState("mandelbrot");if(!r)return;const[c,o]=r.mouse,[s,a]=r.resolution;if(c===0&&o===0){i.setOverlay("top-left",`z → z² + c
c = -0.70 + 0.27i [default]`,"julia");return}const l=c/s,u=o/a,d=-2.5+l*3.5,v=-1.5+u*3,b=v>=0?"+":"-",m=`${d.toFixed(2)} ${b} ${Math.abs(v).toFixed(2)}i`;i.setOverlay("top-left",`z → z² + c
c = ${m}`,"julia")}const so=Object.freeze(Object.defineProperty({__proto__:null,onFrame:ao},Symbol.toStringTag,{value:"Module"}));let O=1,N=0,$=0;const le=5.5;function Oe(i,e,n,t){const r=i.clientWidth/i.clientHeight,c=le*.05/O;N+=e*c*r,$+=n*c,t.setUniformValue("u_pan",[N,$])}function lo(i){requestAnimationFrame(()=>{const e=document.querySelector("canvas");if(!e)return;const n=96,t=12,r=document.createElement("div");function c(){const l=e.getBoundingClientRect();r.style.left=`${l.right-t-n}px`,r.style.top=`${l.bottom-t-n}px`}r.style.cssText=`
      position: fixed;
      display: grid;
      grid-template-columns: repeat(3, 30px);
      grid-template-rows: repeat(3, 30px);
      gap: 3px;
      z-index: 1000;
      pointer-events: all;
    `,new ResizeObserver(c).observe(e);const s=`
      width: 30px;
      height: 30px;
      background: rgba(20, 20, 20, 0.65);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.25);
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      padding: 0;
      line-height: 1;
    `,a=[[0,1,"↑",2,1],[-1,0,"←",1,2],[0,0,"↺",2,2],[1,0,"→",3,2],[0,-1,"↓",2,3]];for(const[l,u,d,v,b]of a){const m=document.createElement("button");if(m.textContent=d,m.style.cssText=`grid-column: ${v}; grid-row: ${b};`+s,d==="↺")m.addEventListener("mousedown",C=>{C.stopPropagation(),O=1,N=0,$=0,i.setUniformValue("u_zoom",O),i.setUniformValue("u_pan",[N,$])});else{let C=null;m.addEventListener("mousedown",x=>{x.stopPropagation(),Oe(e,l,u,i),C=setInterval(()=>Oe(e,l,u,i),80)}),window.addEventListener("mouseup",()=>{C!==null&&(clearInterval(C),C=null)})}r.appendChild(m)}document.body.appendChild(r),e.addEventListener("wheel",l=>{const u=l.deltaY>0?.8695652173913044:1.15,d=O;O*=u,O=Math.max(1e-6,O);const v=e.getBoundingClientRect(),b=v.width/v.height,m=(l.clientX-v.left)/v.width,C=1-(l.clientY-v.top)/v.height,x=(m-.5)*b*le,E=(C-.5)*le;N+=x*(1/d-1/O),$+=E*(1/d-1/O),i.setUniformValue("u_zoom",O),i.setUniformValue("u_pan",[N,$]),l.preventDefault()},{passive:!1})})}const uo=Object.freeze(Object.defineProperty({__proto__:null,setup:lo},Symbol.toStringTag,{value:"Module"})),po=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),fo={stripPack:{zoom:1,panX:0,panY:0,zoomKey:"u_zoom_stripPack",panKey:"u_pan_stripPack"}};function Fe(i,e,n,t,r){const c=i.querySelector("canvas"),o=c?c.clientWidth/c.clientHeight:1,s=6.5*.05/e.zoom;e.panX+=t*s*o,e.panY+=r*s,n.setUniformValue(e.panKey,[e.panX,e.panY])}function vo(i,e,n){const t=document.createElement("div"),r=96,c=12;function o(){const l=i.getBoundingClientRect();t.style.left=`${l.right-c-r}px`,t.style.top=`${l.bottom-c-r}px`}t.style.cssText=`
    position: fixed;
    display: grid;
    grid-template-columns: repeat(3, 30px);
    grid-template-rows: repeat(3, 30px);
    gap: 3px;
    z-index: 1000;
    pointer-events: all;
  `,window.addEventListener("resize",o);const s=`
    width: 30px;
    height: 30px;
    background: rgba(20, 20, 20, 0.65);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    padding: 0;
    line-height: 1;
  `,a=[[0,1,"↑",2,1],[-1,0,"←",1,2],[0,0,"↺",2,2],[1,0,"→",3,2],[0,-1,"↓",2,3]];for(const[l,u,d,v,b]of a){const m=document.createElement("button");if(m.textContent=d,m.style.cssText=`grid-column: ${v}; grid-row: ${b};`+s,d==="↺")m.addEventListener("mousedown",x=>{x.stopPropagation(),e.zoom=1,e.panX=0,e.panY=0,n.setUniformValue(e.zoomKey,e.zoom),n.setUniformValue(e.panKey,[e.panX,e.panY])});else{let x=null;m.addEventListener("mousedown",E=>{E.stopPropagation(),Fe(i,e,n,l,u),x=setInterval(()=>Fe(i,e,n,l,u),80)}),window.addEventListener("mouseup",()=>{x!==null&&(clearInterval(x),x=null)})}t.appendChild(m)}document.body.appendChild(t),o()}function mo(i,e,n){const t=document.querySelector(`[data-view-name="${e}"]`);t&&(t.style.position="relative",vo(t,n,i),t.addEventListener("wheel",r=>{const c=t.querySelector("canvas"),o=r.deltaY>0?1/1.15:1.15,s=n.zoom;if(n.zoom*=o,n.zoom=Math.max(1e-6,Math.min(n.zoom,1e3)),c){const a=c.getBoundingClientRect(),l=a.width/a.height,u=(r.clientX-a.left)/a.width,d=1-(r.clientY-a.top)/a.height,v=(u-.5)*l*6.5,b=(d-.5)*6.5;n.panX+=v*(1/s-1/n.zoom),n.panY+=b*(1/s-1/n.zoom)}i.setUniformValue(n.zoomKey,n.zoom),i.setUniformValue(n.panKey,[n.panX,n.panY]),r.preventDefault()},{passive:!1}))}function ho(i){for(const[e,n]of Object.entries(fo))mo(i,e,n)}const go=Object.freeze(Object.defineProperty({__proto__:null,setup:ho},Symbol.toStringTag,{value:"Module"})),Co=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),yo={stripPack:{zoom:1,panX:0,panY:0,zoomKey:"u_zoom_stripPack",panKey:"u_pan_stripPack"}};function De(i,e,n,t,r){const c=i.querySelector("canvas"),o=c?c.clientWidth/c.clientHeight:1,s=6.5*.05/e.zoom;e.panX+=t*s*o,e.panY+=r*s,n.setUniformValue(e.panKey,[e.panX,e.panY])}function xo(i,e,n){const t=document.createElement("div"),r=96,c=12;function o(){const l=i.getBoundingClientRect();t.style.left=`${l.right-c-r}px`,t.style.top=`${l.bottom-c-r}px`}t.style.cssText=`
    position: fixed;
    display: grid;
    grid-template-columns: repeat(3, 30px);
    grid-template-rows: repeat(3, 30px);
    gap: 3px;
    z-index: 1000;
    pointer-events: all;
  `,window.addEventListener("resize",o);const s=`
    width: 30px;
    height: 30px;
    background: rgba(20, 20, 20, 0.65);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    padding: 0;
    line-height: 1;
  `,a=[[0,1,"↑",2,1],[-1,0,"←",1,2],[0,0,"↺",2,2],[1,0,"→",3,2],[0,-1,"↓",2,3]];for(const[l,u,d,v,b]of a){const m=document.createElement("button");if(m.textContent=d,m.style.cssText=`grid-column: ${v}; grid-row: ${b};`+s,d==="↺")m.addEventListener("mousedown",x=>{x.stopPropagation(),e.zoom=1,e.panX=0,e.panY=0,n.setUniformValue(e.zoomKey,e.zoom),n.setUniformValue(e.panKey,[e.panX,e.panY])});else{let x=null;m.addEventListener("mousedown",E=>{E.stopPropagation(),De(i,e,n,l,u),x=setInterval(()=>De(i,e,n,l,u),80)}),window.addEventListener("mouseup",()=>{x!==null&&(clearInterval(x),x=null)})}t.appendChild(m)}document.body.appendChild(t),o()}function bo(i,e,n){const t=document.querySelector(`[data-view-name="${e}"]`);t&&(t.style.position="relative",xo(t,n,i),t.addEventListener("wheel",r=>{const c=t.querySelector("canvas"),o=r.deltaY>0?1/1.15:1.15,s=n.zoom;if(n.zoom*=o,n.zoom=Math.max(1e-6,Math.min(n.zoom,1e3)),c){const a=c.getBoundingClientRect(),l=a.width/a.height,u=(r.clientX-a.left)/a.width,d=1-(r.clientY-a.top)/a.height,v=(u-.5)*l*6.5,b=(d-.5)*6.5;n.panX+=v*(1/s-1/n.zoom),n.panY+=b*(1/s-1/n.zoom)}i.setUniformValue(n.zoomKey,n.zoom),i.setUniformValue(n.panKey,[n.panX,n.panY]),r.preventDefault()},{passive:!1}))}function ko(i){for(const[e,n]of Object.entries(yo))bo(i,e,n)}const _o=Object.freeze(Object.defineProperty({__proto__:null,setup:ko},Symbol.toStringTag,{value:"Module"})),wo=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Eo=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),To=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Po={stripPack:{zoom:1,panX:0,panY:0,zoomKey:"u_zoom_stripPack",panKey:"u_pan_stripPack"},resulting_pack:{zoom:1,panX:0,panY:0,zoomKey:"u_zoom_resulting_pack",panKey:"u_pan_resulting_pack"},invertedStrip:{zoom:1,panX:0,panY:0,zoomKey:"u_zoom_invertedStrip",panKey:"u_pan_invertedStrip"}};function Me(i,e,n,t,r){const c=i.querySelector("canvas"),o=c?c.clientWidth/c.clientHeight:1,s=6.5*.05/e.zoom;e.panX+=t*s*o,e.panY+=r*s,n.setUniformValue(e.panKey,[e.panX,e.panY])}function So(i,e,n){const t=document.createElement("div"),r=96,c=12;function o(){const l=i.getBoundingClientRect();t.style.left=`${l.right-c-r}px`,t.style.top=`${l.bottom-c-r}px`}t.style.cssText=`
    position: fixed;
    display: grid;
    grid-template-columns: repeat(3, 30px);
    grid-template-rows: repeat(3, 30px);
    gap: 3px;
    z-index: 1000;
    pointer-events: all;
  `,window.addEventListener("resize",o);const s=`
    width: 30px;
    height: 30px;
    background: rgba(20, 20, 20, 0.65);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    padding: 0;
    line-height: 1;
  `,a=[[0,1,"↑",2,1],[-1,0,"←",1,2],[0,0,"↺",2,2],[1,0,"→",3,2],[0,-1,"↓",2,3]];for(const[l,u,d,v,b]of a){const m=document.createElement("button");if(m.textContent=d,m.style.cssText=`grid-column: ${v}; grid-row: ${b};`+s,d==="↺")m.addEventListener("mousedown",x=>{x.stopPropagation(),e.zoom=1,e.panX=0,e.panY=0,n.setUniformValue(e.zoomKey,e.zoom),n.setUniformValue(e.panKey,[e.panX,e.panY])});else{let x=null;m.addEventListener("mousedown",E=>{E.stopPropagation(),Me(i,e,n,l,u),x=setInterval(()=>Me(i,e,n,l,u),80)}),window.addEventListener("mouseup",()=>{x!==null&&(clearInterval(x),x=null)})}t.appendChild(m)}document.body.appendChild(t),o()}function Ro(i,e,n){const t=document.querySelector(`[data-view-name="${e}"]`);t&&(So(t,n,i),t.addEventListener("wheel",r=>{const c=t.querySelector("canvas"),o=r.deltaY>0?1/1.15:1.15,s=n.zoom;if(n.zoom*=o,n.zoom=Math.max(1e-6,Math.min(n.zoom,1e3)),c){const a=c.getBoundingClientRect(),l=a.width/a.height,u=(r.clientX-a.left)/a.width,d=1-(r.clientY-a.top)/a.height,v=(u-.5)*l*6.5,b=(d-.5)*6.5;n.panX+=v*(1/s-1/n.zoom),n.panY+=b*(1/s-1/n.zoom)}i.setUniformValue(n.zoomKey,n.zoom),i.setUniformValue(n.panKey,[n.panX,n.panY]),r.preventDefault()},{passive:!1}))}function zo(i){for(const[e,n]of Object.entries(Po))Ro(i,e,n)}const Lo=Object.freeze(Object.defineProperty({__proto__:null,setup:zo},Symbol.toStringTag,{value:"Module"})),Ao={stripPack:{zoom:1,panX:0,panY:0,zoomKey:"u_zoom_stripPack",panKey:"u_pan_stripPack"},resulting_pack:{zoom:1,panX:0,panY:0,zoomKey:"u_zoom_resulting_pack",panKey:"u_pan_resulting_pack"},invertedStrip:{zoom:1,panX:0,panY:0,zoomKey:"u_zoom_invertedStrip",panKey:"u_pan_invertedStrip"}};function Ue(i,e,n,t,r){const c=i.querySelector("canvas"),o=c?c.clientWidth/c.clientHeight:1,s=6.5*.05/e.zoom;e.panX+=t*s*o,e.panY+=r*s,n.setUniformValue(e.panKey,[e.panX,e.panY])}function Bo(i,e,n){const t=document.createElement("div"),r=96,c=12;function o(){const l=i.getBoundingClientRect();t.style.left=`${l.right-c-r}px`,t.style.top=`${l.bottom-c-r}px`}t.style.cssText=`
    position: fixed;
    display: grid;
    grid-template-columns: repeat(3, 30px);
    grid-template-rows: repeat(3, 30px);
    gap: 3px;
    z-index: 1000;
    pointer-events: all;
  `,window.addEventListener("resize",o);const s=`
    width: 30px;
    height: 30px;
    background: rgba(20, 20, 20, 0.65);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    padding: 0;
    line-height: 1;
  `,a=[[0,1,"↑",2,1],[-1,0,"←",1,2],[0,0,"↺",2,2],[1,0,"→",3,2],[0,-1,"↓",2,3]];for(const[l,u,d,v,b]of a){const m=document.createElement("button");if(m.textContent=d,m.style.cssText=`grid-column: ${v}; grid-row: ${b};`+s,d==="↺")m.addEventListener("mousedown",x=>{x.stopPropagation(),e.zoom=1,e.panX=0,e.panY=0,n.setUniformValue(e.zoomKey,e.zoom),n.setUniformValue(e.panKey,[e.panX,e.panY])});else{let x=null;m.addEventListener("mousedown",E=>{E.stopPropagation(),Ue(i,e,n,l,u),x=setInterval(()=>Ue(i,e,n,l,u),80)}),window.addEventListener("mouseup",()=>{x!==null&&(clearInterval(x),x=null)})}t.appendChild(m)}document.body.appendChild(t),o()}function Io(i,e,n){const t=document.querySelector(`[data-view-name="${e}"]`);t&&(Bo(t,n,i),t.addEventListener("wheel",r=>{const c=t.querySelector("canvas"),o=r.deltaY>0?1/1.15:1.15,s=n.zoom;if(n.zoom*=o,n.zoom=Math.max(1e-6,Math.min(n.zoom,1e3)),c){const a=c.getBoundingClientRect(),l=a.width/a.height,u=(r.clientX-a.left)/a.width,d=1-(r.clientY-a.top)/a.height,v=(u-.5)*l*6.5,b=(d-.5)*6.5;n.panX+=v*(1/s-1/n.zoom),n.panY+=b*(1/s-1/n.zoom)}i.setUniformValue(n.zoomKey,n.zoom),i.setUniformValue(n.panKey,[n.panX,n.panY]),r.preventDefault()},{passive:!1}))}function Oo(i){for(const[e,n]of Object.entries(Ao))Io(i,e,n)}const Fo=Object.freeze(Object.defineProperty({__proto__:null,setup:Oo},Symbol.toStringTag,{value:"Module"}));
