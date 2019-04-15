'use strict';var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var a11yNavbar=function(){function a(b){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,a),this._keyCode={TAB:9,ENTER:13,ESC:27,SPACE:32,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40},this._touchmoveActive=!1,this._defaultOptions={windowObj:window,domObj:document,ariaLabel:'',hoverintent:hoverintent,orientation:'horizontal',breakpointMinWidth:500,responsiveToggleText:'Menu',responsiveSubmenuToggles:!1,mode:'standard'},this._options=Object.assign(this._defaultOptions,c),this._id=b,this._navElem=this._options.domObj.getElementById(this._id),this._menubarMenuitems=[],this._currentMenubarIndex=0,this._currentMenuitem=null,this._navElem.addEventListener('focusout',this.handleFocusoutNavElem.bind(this)),this._options.domObj.addEventListener('touchend',this.handleTouchendDocument.bind(this)),this._navElem.addEventListener('touchend',this.handleTouchendNavElem.bind(this)),'dualAction'==this._options.mode&&(this._menubarInstructions=this._options.domObj.createElement('div'),this._menubarInstructions.innerHTML='<p>Use <strong>Enter</strong> or <strong>Space</strong> to activate links.</p><p>Use appropriate arrow key to open or close submenus.</p>',this._menubarInstructions.setAttribute('id',this._id+'-menubar-instructions'),this._menubarInstructions.classList.add('a11y-navbar-instructions'),this._navElem.insertBefore(this._menubarInstructions,this._navElem.firstElementChild)),this._menubarToggle=this._options.domObj.createElement('button'),this._menubarToggle.textContent=this._options.responsiveToggleText,this._menubarToggle.setAttribute('id',this._id+'-toggle'),this._menubarToggle.setAttribute('aria-expanded','false'),this._menubarToggle.setAttribute('aria-controls',this._id),this._menubarToggle.classList.add('a11y-navbar-toggle');var d=this._options.domObj.createElement('span');d.setAttribute('aria-hidden','true'),this._menubarToggle.appendChild(d),this._menubarToggle.addEventListener('click',this.handleClickMenubarToggle.bind(this)),this._options.windowObj.addEventListener('resize',this.handleMenubarResize.bind(this)),this._navElem.setAttribute('aria-label',this._options.ariaLabel),this._navElem.classList.add('a11y-navbar');var e=this._navElem.querySelector('ul');if(e.setAttribute('aria-label',this._options.ariaLabel),e.classList.add('a11y-navbar-menubar'),e.classList.add('a11y-navbar-orientation-'+this._options.orientation),'horizontal'==this._options.orientation?e.setAttribute('role','menubar'):'vertical'==this._options.orientation&&e.setAttribute('role','menu'),this._options.hoverintent){this._options.hoverintent(e,function(){},this.handleMouseoutMenubar.bind(this)).options({timeout:900,interval:50})}else e.addEventListener('mouseout',this.handleMouseoutMenubar.bind(this));for(var f,g=e.children,h=0;h<g.length;h++)f=g[h].querySelector('a'),f.classList.add('a11y-navbar-menuitem'),this._menubarMenuitems[h]=f,f.addEventListener('keydown',this.handleKeydownMenubar.bind(this));for(var i=this._navElem.querySelectorAll('a + ul > li > a'),m=0;m<i.length;m++)i[m].addEventListener('keydown',this.handleKeydownSubmenu.bind(this)),i[m].addEventListener('focusin',this.handleFocusinMenuitem.bind(this));for(var n=e.querySelectorAll('li > a'),o=0;o<n.length;o++){if(n[o].setAttribute('role','menuitem'),n[o].setAttribute('tabindex','-1'),this._options.hoverintent){this._options.hoverintent(n[o],this.handleMouseoverMenuitem.bind(this),function(){}).options({timeout:500,interval:100})}else n[o].addEventListener('mouseover',this.handleMouseoverMenuitem.bind(this));n[o].addEventListener('click',this.handleClickMenuitem.bind(this)),n[o].addEventListener('touchstart',this.handleTouchstartMenuitem.bind(this)),n[o].addEventListener('touchmove',this.handleTouchmoveMenuitem.bind(this)),n[o].addEventListener('touchend',this.handleTouchendMenuitem.bind(this))}for(var j=e.querySelectorAll('li > a + ul'),p=0;p<j.length;p++){var k=j[p].parentNode,q=k.querySelector('a'),r=q.textContent;q.setAttribute('aria-haspopup','true'),q.setAttribute('aria-expanded','false'),j[p].setAttribute('id',this._id+'-submenu-'+p),j[p].setAttribute('role','menu'),j[p].setAttribute('aria-label',r),j[p].classList.add('a11y-navbar-submenu'),j[p].classList.add('a11y-navbar-menu-closed')}for(var s=e.querySelectorAll('li'),t=0;t<s.length;t++)s[t].setAttribute('role','none');this._menubarMenuitems[0].setAttribute('tabindex','0'),'dualAction'==this._options.mode&&this._menubarMenuitems[0].setAttribute('aria-describedby',this._id+'-menubar-instructions'),this._currentMenuitem=this._menubarMenuitems[0],this.menubarResize()}return _createClass(a,[{key:'destroy',value:function destroy(){}},{key:'handleMenubarResize',value:function handleMenubarResize(a){a.defaultPrevented||this.menubarResize()}},{key:'handleClickMenubarToggle',value:function handleClickMenubarToggle(a){a.defaultPrevented||(this._navElem.classList.contains('a11y-navbar-closed')?(this._navElem.classList.remove('a11y-navbar-closed'),this._navElem.classList.add('a11y-navbar-open'),this._menubarToggle.setAttribute('aria-expanded','true')):this._navElem.classList.contains('a11y-navbar-open')&&(this._navElem.classList.remove('a11y-navbar-open'),this._navElem.classList.add('a11y-navbar-closed'),this._menubarToggle.setAttribute('aria-expanded','false')))}},{key:'handleKeydownMenubar',value:function handleKeydownMenubar(a){if(!a.defaultPrevented){var b=!1,c=a.target,d=this.normalizeKey(a.key||a.keyCode),e=this._options.mode;if(d==this._keyCode.SPACE&&'standard'==e||d==this._keyCode.ENTER&&'standard'==e||'horizontal'==this._options.orientation&&d==this._keyCode.ARROW_DOWN||'vertical'==this._options.orientation&&d==this._keyCode.ARROW_RIGHT){this.closeAllSubmenus(),this.openSubmenu(c);var j=c.parentNode.querySelector('ul[role=menu] > li').querySelector('a');null!=j&&(j.focus(),this.updateCurrentMenuitem(j)),b=!0}else if(d==this._keyCode.SPACE&&'dualAction'==e||d==this._keyCode.ENTER&&'dualAction'==e)this.performClick(c),b=!0;else if('horizontal'==this._options.orientation&&d==this._keyCode.ARROW_RIGHT||'vertical'==this._options.orientation&&d==this._keyCode.ARROW_DOWN){var f=this._currentMenubarIndex+1>=this._menubarMenuitems.length?0:this._currentMenubarIndex+1,g=this._menubarMenuitems[f];g.focus(),this._currentMenubarIndex=f,this.updateCurrentMenuitem(g),b=!0}else if('horizontal'==this._options.orientation&&d==this._keyCode.ARROW_LEFT||'vertical'==this._options.orientation&&d==this._keyCode.ARROW_UP){var h=0>this._currentMenubarIndex-1?this._menubarMenuitems.length-1:this._currentMenubarIndex-1,i=this._menubarMenuitems[h];i.focus(),this._currentMenubarIndex=h,this.updateCurrentMenuitem(i),b=!0}else if('horizontal'==this._options.orientation&&d==this._keyCode.ARROW_UP||'vertical'==this._options.orientation&&d==this._keyCode.ARROW_LEFT){if(this.hasSubmenu(c)){this.closeAllSubmenus(),this.openSubmenu(c);var k=c.parentNode.querySelector('ul[role=menu]').lastElementChild.firstElementChild;k.focus(),this.updateCurrentMenuitem(k)}b=!0}else if(d==this._keyCode.HOME){var l=this._menubarMenuitems[0];l.focus(),this.updateCurrentMenuitem(l),b=!0}else if(d==this._keyCode.END){var m=this._menubarMenuitems[this._menubarMenuitems.length-1];m.focus(),this.updateCurrentMenuitem(m),b=!0}else;b&&(a.stopPropagation(),a.preventDefault())}}},{key:'handleKeydownSubmenu',value:function handleKeydownSubmenu(a){if(!a.defaultPrevented){var b=!1,c=a.target,d=this.normalizeKey(a.key||a.keyCode),e=this._options.mode;if((d==this._keyCode.SPACE||d==this._keyCode.ENTER)&&'standard'==e){if(this.hasSubmenu(c)){this.openSubmenu(c);var n=c.parentNode.querySelector('ul[role=menu] > li').querySelector('a');null!=n&&(n.focus(),this.updateCurrentMenuitem(n)),b=!0}else this.performClick(c),b=!0;}else if((d==this._keyCode.SPACE||d==this._keyCode.ENTER)&&'dualAction'==e)this.performClick(c),b=!0;else if(d==this._keyCode.ESC){var o=c.parentNode.parentNode.parentNode.querySelector('a[role=menuitem]');this.closeSubmenu(o),o.focus(),this.updateCurrentMenuitem(o),b=!0}else if(d==this._keyCode.ARROW_RIGHT){if(this.hasSubmenu(c)){var p=c.parentNode.querySelector('a + ul').querySelector('li > a');this.openSubmenu(c),p.focus(),this.updateCurrentMenuitem(p)}else{this.closeAllSubmenus();var f=this._currentMenubarIndex+1>=this._menubarMenuitems.length?0:this._currentMenubarIndex+1,g=this._menubarMenuitems[f];g.focus(),this.openSubmenu(g),this._currentMenubarIndex=f,this.updateCurrentMenuitem(g)}b=!0}else if(d==this._keyCode.ARROW_LEFT){var q=c.parentNode.parentNode.parentNode.querySelector('a[role=menuitem]');if(this.closeSubmenu(q),q.focus(),this.updateCurrentMenuitem(q),this._currentMenuitem.classList.contains('a11y-navbar-menuitem')){var h=0>this._currentMenubarIndex-1?this._menubarMenuitems.length-1:this._currentMenubarIndex-1,i=this._menubarMenuitems[h];i.focus(),this.openSubmenu(i),this._currentMenubarIndex=h,this.updateCurrentMenuitem(i)}b=!0}else if(d==this._keyCode.ARROW_DOWN){var j=void 0,k=c.parentNode.nextElementSibling;j=null==k?c.parentNode.parentNode.firstElementChild.querySelector('a'):k.querySelector('a'),j.focus(),this.updateCurrentMenuitem(j),b=!0}else if(d==this._keyCode.ARROW_UP){var l=void 0,m=c.parentNode.previousElementSibling;l=null==m?c.parentNode.parentNode.lastElementChild.querySelector('a'):m.querySelector('a'),l.focus(),this.updateCurrentMenuitem(l),b=!0}else if(d==this._keyCode.HOME){var r=c.parentNode.parentNode.firstElementChild.querySelector('a');r.focus(),this.updateCurrentMenuitem(r),b=!0}else if(d==this._keyCode.END){var s=c.parentNode.parentNode.lastElementChild.querySelector('a');s.focus(),this.updateCurrentMenuitem(s),b=!0}else;b&&(a.stopPropagation(),a.preventDefault())}}},{key:'handleMouseoverMenuitem',value:function handleMouseoverMenuitem(a){if(!a.defaultPrevented){var b=a.target;this.hasSubmenu(b)&&this.openSubmenu(b),this.closeSiblingSubmenus(b)}}},{key:'handleMouseoutMenubar',value:function handleMouseoutMenubar(a){if(!a.defaultPrevented){a.target;this.closeAllSubmenus()}}},{key:'handleClickMenuitem',value:function handleClickMenuitem(a){if(!a.defaultPrevented){a.preventDefault();var b=a.target;this.clickMenuitem(b)}}},{key:'handleTouchstartMenuitem',value:function handleTouchstartMenuitem(a){a.defaultPrevented}},{key:'handleTouchmoveMenuitem',value:function handleTouchmoveMenuitem(a){a.defaultPrevented||(this._touchmoveActive=!0)}},{key:'handleTouchendMenuitem',value:function handleTouchendMenuitem(a){if(!a.defaultPrevented)if(a.preventDefault(),this._touchmoveActive)this._touchmoveActive=!1;else{var b=a.target;this.clickMenuitem(b)}}},{key:'handleFocusinMenuitem',value:function handleFocusinMenuitem(a){if(!a.defaultPrevented){var b=a.target;this.openParentSubmenus(b)}}},{key:'handleFocusoutNavElem',value:function handleFocusoutNavElem(a){if(!a.defaultPrevented){var b=a.relatedTarget;null!=b&&this._navElem.contains(b)||this.resetNavbar()}}},{key:'handleTouchendNavElem',value:function handleTouchendNavElem(a){a.defaultPrevented||a.stopPropagation()}},{key:'handleTouchendDocument',value:function handleTouchendDocument(a){if(!a.defaultPrevented){var b=this._navElem.classList.contains('a11y-navbar-responsive');b||this.resetNavbar()}}},{key:'handleClickSubmenuToggle',value:function handleClickSubmenuToggle(a){if(!a.defaultPrevented){a.preventDefault();var b=a.target,c=b.parentNode.querySelector('a[role=menuitem]'),d=c.getAttribute('aria-expanded');'false'==d?this.openSubmenu(c):'true'==d&&this.closeSubmenu(c)}}},{key:'menubarResize',value:function menubarResize(){var a=this._options.windowObj.innerWidth;a<=this._options.breakpointMinWidth?(this.addMenubarToggle(),this._options.responsiveSubmenuToggles&&this.addSubmenuToggles()):(this.removeMenubarToggle(),this._options.responsiveSubmenuToggles&&this.removeSubmenuToggles())}},{key:'addMenubarToggle',value:function addMenubarToggle(){null==this._options.domObj.getElementById(this._menubarToggle.getAttribute('id'))&&(this._navElem.parentNode.insertBefore(this._menubarToggle,this._navElem),this._navElem.classList.add('a11y-navbar-responsive'),this._navElem.classList.add('a11y-navbar-closed'),this._menubarToggle.setAttribute('aria-expanded','false'))}},{key:'removeMenubarToggle',value:function removeMenubarToggle(){this._options.domObj.getElementById(this._menubarToggle.getAttribute('id'))&&(this._navElem.parentNode.removeChild(this._menubarToggle),this._navElem.classList.remove('a11y-navbar-responsive'),this._navElem.classList.remove('a11y-navbar-open'),this._navElem.classList.remove('a11y-navbar-closed'),this._menubarToggle.setAttribute('aria-expanded','false'))}},{key:'addSubmenuToggles',value:function addSubmenuToggles(){var a=this._navElem.querySelector('ul'),b=a.querySelectorAll('button.a11y-navbar-submenu-toggle');if(!b.length)for(var c=a.querySelectorAll('a[aria-haspopup=true]'),d=0;d<c.length;d++){var e=this._options.domObj.createElement('button'),f=c[d].parentNode.querySelector('ul'),g=f.getAttribute('id');e.classList.add('a11y-navbar-submenu-toggle'),e.setAttribute('id',g+'-submenu-toggle'),e.setAttribute('tabindex','-1'),e.setAttribute('aria-expanded','false'),e.setAttribute('aria-controls',g),e.innerHTML='<span>'+c[d].textContent+'</span>',e.addEventListener('click',this.handleClickSubmenuToggle.bind(this));var h=c[d].parentNode;h.insertBefore(e,c[d])}}},{key:'removeSubmenuToggles',value:function removeSubmenuToggles(){for(var a,b=this._navElem.querySelector('ul'),c=b.querySelectorAll('button.a11y-navbar-submenu-toggle'),d=0;d<c.length;d++)a=c[d].parentNode,a.removeChild(c[d])}},{key:'showMenubar',value:function showMenubar(){this._navElem.classList.remove('a11y-navbar-closed'),this._navElem.classList.add('a11y-navbar-open')}},{key:'hideMenubar',value:function hideMenubar(){this._navElem.classList.remove('a11y-navbar-open'),this._navElem.classList.add('a11y-navbar-closed')}},{key:'toggleInstructions',value:function toggleInstructions(){var a=!!this._menubarInstructions.classList.contains('a11y-navbar-instructions-show');a?this.hideInstructions():this.showInstructions()}},{key:'showInstructions',value:function showInstructions(){this._menubarInstructions.classList.add('a11y-navbar-instructions-show'),this._menubarInstructions.classList.remove('a11y-navbar-instructions-hide')}},{key:'hideInstructions',value:function hideInstructions(){this._menubarInstructions.classList.add('a11y-navbar-instructions-hide'),this._menubarInstructions.classList.remove('a11y-navbar-instructions-show')}},{key:'updateCurrentMenuitem',value:function updateCurrentMenuitem(a){this._currentMenuitem.setAttribute('tabindex','-1'),this._currentMenuitem=a,this._currentMenuitem.setAttribute('tabindex','0')}},{key:'hasSubmenu',value:function hasSubmenu(a){var b=a.parentNode,c=b.querySelector('a + ul');return null!=c}},{key:'openSubmenu',value:function openSubmenu(a){var b=a.parentNode,c=b.querySelector('ul');if(null!=c){c.classList.remove('a11y-navbar-menu-closed'),c.classList.add('a11y-navbar-menu-open'),a.setAttribute('aria-expanded','true');var d=b.querySelector('button.a11y-navbar-submenu-toggle');null!=d&&d.setAttribute('aria-expanded','true')}}},{key:'openParentSubmenus',value:function openParentSubmenus(a){var b=a.parentNode.parentNode;if(b.classList.contains('a11y-navbar-menu-closed')){var c=b.parentNode.querySelector('a[aria-expanded="false"]');null!=c&&(this.openSubmenu(c),this.openParentSubmenus(c))}}},{key:'closeChildSubmenus',value:function closeChildSubmenus(a){var b=a.parentNode.parentNode;if(b.classList.contains('a11y-navbar-menu-open'))for(var c=b.querySelectorAll('a[aria-expanded="true"]'),d=0;d<c.length;d++)this.closeSubmenu(a)}},{key:'closeSubmenu',value:function closeSubmenu(a){var b=a.parentNode,c=b.querySelector('ul');if(null!=c){c.classList.remove('a11y-navbar-menu-open'),c.classList.add('a11y-navbar-menu-closed'),a.setAttribute('aria-expanded','false');var d=b.querySelector('button.a11y-navbar-submenu-toggle');null!=d&&d.setAttribute('aria-expanded','false')}}},{key:'closeSiblingSubmenus',value:function closeSiblingSubmenus(a){for(var b=a.parentNode.parentNode,c=b.querySelectorAll('li > a[role=menuitem]'),d=[],e=0;e<c.length;e++)c[e]!==a&&d.push(c[e]);for(var f=0;f<d.length;f++)this.closeSubmenu(d[f])}},{key:'closeAllSubmenus',value:function closeAllSubmenus(){for(var a,b=this._navElem.querySelectorAll('ul.a11y-navbar-menu-open'),c=0;c<b.length;c++){a=b[c].parentNode.querySelector('a'),a.setAttribute('aria-expanded','false'),b[c].classList.remove('a11y-navbar-menu-open'),b[c].classList.add('a11y-navbar-menu-closed');var d=b[c].parentNode.querySelector('button.a11y-navbar-submenu-toggle');null!=d&&d.setAttribute('aria-expanded','false')}}},{key:'performClick',value:function performClick(a){var b=a.getAttribute('href');window.location=b}},{key:'clickMenuitem',value:function clickMenuitem(a){var b=a.hasAttribute('aria-expanded');if(b){var c=a.getAttribute('aria-expanded');if('true'==c)this.performClick(a);else{var d=this._navElem.classList.contains('a11y-navbar-responsive');d||-1==this._menubarMenuitems.indexOf(a)||this.closeAllSubmenus(),this.openSubmenu(a)}}else this.performClick(a)}},{key:'resetNavbar',value:function resetNavbar(){this.updateCurrentMenuitem(this._menubarMenuitems[0]),this._currentMenubarIndex=0,this.closeAllSubmenus()}},{key:'normalizeKey',value:function normalizeKey(a){var b=null;switch(a){case'Tab':case 9:b=this._keyCode.TAB;break;case'Enter':case 13:b=this._keyCode.ENTER;break;case'Escape':case'Esc':case 13:b=this._keyCode.ESC;break;case' ':case 32:b=this._keyCode.SPACE;break;case'End':case 35:b=this._keyCode.END;case'Home':case 36:b=this._keyCode.HOME;break;case'ArrowLeft':case 37:b=this._keyCode.ARROW_LEFT;break;case'ArrowUp':case 38:b=this._keyCode.ARROW_UP;break;case'ArrowRight':case 39:b=this._keyCode.ARROW_RIGHT;break;case'ArrowDown':case 40:b=this._keyCode.ARROW_DOWN;}return b}}]),a}();
//# sourceMappingURL=a11yNavbar.js.map
