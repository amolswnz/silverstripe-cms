!function(t){function e(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=22)}([function(t,e){t.exports=jQuery},function(t,e){t.exports=i18n},function(t,e){t.exports=Injector},function(t,e){t.exports=React},,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={ANCHORSELECTOR_UPDATED:"ANCHORSELECTOR_UPDATED",ANCHORSELECTOR_UPDATING:"ANCHORSELECTOR_UPDATING",ANCHORSELECTOR_UPDATE_FAILED:"ANCHORSELECTOR_UPDATE_FAILED"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={SUCCESS:"SUCCESS",DIRTY:"DIRTY",UPDATING:"UPDATING",FAILED:"FAILED"}},function(t,e){t.exports=Redux},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n(21),r=a(i),o=n(20),s=a(o);window.document.addEventListener("DOMContentLoaded",function(){(0,s.default)(),(0,r.default)()})},function(t,e,n){"use strict";var a=n(0);(function(t){return t&&t.__esModule?t:{default:t}})(a).default.entwine("ss",function(t){t(".TreeDropdownField").entwine({OldValue:null}),t("#Form_AddForm_ParentID_Holder .treedropdownfield").entwine({onmatch:function(){this._super(),t(".cms-add-form").updateTypeList()}}),t(".cms-add-form .parent-mode :input").entwine({onclick:function(t){var e=this.closest("form").find("#Form_AddForm_ParentID_Holder .TreeDropdownField");"top"==this.val()?(e.setOldValue(e.getValue()),e.setValue(0)):(e.setValue(e.getOldValue()||0),e.setOldValue(null)),e.refresh(),e.trigger("change")}}),t(".cms-add-form").entwine({ParentCache:{},onadd:function(){var e=this;this.find("#Form_AddForm_ParentID_Holder .TreeDropdownField").bind("change",function(){e.updateTypeList()}),this.find(".SelectionGroup.parent-mode").bind("change",function(){e.updateTypeList()}),"top"==t(".cms-add-form .parent-mode :input").val()&&this.updateTypeList()},loadCachedChildren:function(t){var e=this.getParentCache();return void 0!==e[t]?e[t]:null},saveCachedChildren:function(t,e){var n=this.getParentCache();n[t]=e,this.setParentCache(n)},updateTypeList:function(){var e=this.data("hints"),n=this.find("#Form_AddForm_ParentID"),a=this.find("input[name=ParentModeField]:checked").val(),i=n.data("metadata"),r="child"===a?n.getValue():null,o=i?i.ClassName:null,s=o&&"child"===a&&r?o:"Root",d=void 0!==e[s]?e[s]:null,l=this,u=d&&void 0!==d.defaultChild?d.defaultChild:null,c=[];if(r){if(this.hasClass("loading"))return;return this.addClass("loading"),null!==(c=this.loadCachedChildren(r))?(this.updateSelectionFilter(c,u),void this.removeClass("loading")):(t.ajax({url:l.data("childfilter"),data:{ParentID:r},success:function(t){l.saveCachedChildren(r,t),l.updateSelectionFilter(t,u)},complete:function(){l.removeClass("loading")}}),!1)}c=d&&void 0!==d.disallowedChildren?d.disallowedChildren:[],this.updateSelectionFilter(c,u)},updateSelectionFilter:function(e,n){var a=null;if(this.find("#Form_AddForm_PageType div.radio").each(function(){var n=t(this).find("input").val(),i=-1===t.inArray(n,e);t(this).setEnabled(i),i||t(this).setSelected(!1),a=null===a?i:a&&i}),n)var i=this.find("#Form_AddForm_PageType div.radio input[value="+n+"]").parents("li:first");else var i=this.find("#Form_AddForm_PageType div.radio:not(.disabled):first");i.setSelected(!0),i.siblings().setSelected(!1),this.find("#Form_AddForm_PageType div.radio:not(.disabled)").length?this.find("button[name=action_doAdd]").removeAttr("disabled"):this.find("button[name=action_doAdd]").attr("disabled","disabled"),this.find(".message-restricted")[a?"hide":"show"]()}}),t(".cms-add-form #Form_AddForm_PageType div.radio").entwine({onclick:function(t){this.setSelected(!0)},setSelected:function(t){var e=this.find("input");t&&!e.is(":disabled")?(this.siblings().setSelected(!1),this.toggleClass("selected",!0),e.prop("checked",!0)):(this.toggleClass("selected",!1),e.prop("checked",!1))},setEnabled:function(e){t(this).toggleClass("disabled",!e),e?t(this).find("input").removeAttr("disabled"):t(this).find("input").attr("disabled","disabled").removeAttr("checked")}}),t(".cms-content-addpage-button").entwine({onclick:function(e){var n,a=t(".cms-tree"),i=t(".cms-list"),r=0;if(a.is(":visible")){var o=a.jstree("get_selected");r=o?t(o[0]).data("id"):null}else{var s=i.find('input[name="Page[GridState]"]').val();s&&(r=parseInt(JSON.parse(s).ParentID,10))}var d,l={selector:this.data("targetPanel"),pjax:this.data("pjax")};r?(n=this.data("extraParams")?this.data("extraParams"):"",d=t.path.addSearchParams(i18n.sprintf(this.data("urlAddpage"),r),n)):d=this.attr("href"),t(".cms-container").loadPanel(d,null,l),e.preventDefault(),this.blur()}})})},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n(0),r=a(i),o=n(1),s=a(o);r.default.entwine("ss",function(t){t(".cms-edit-form :input[name=ClassName]").entwine({onchange:function(){alert(s.default._t("CMS.ALERTCLASSNAME"))}}),t(".cms-edit-form input[name=Title]").entwine({onmatch:function(){var e=this;e.data("OrigVal",e.val());var n=e.closest("form"),a=t("input:text[name=URLSegment]",n),i=t("input[name=LiveLink]",n);a.length>0&&(e._addActions(),this.bind("change",function(n){var r=e.data("OrigVal"),o=e.val();e.data("OrigVal",o),0===a.val().indexOf(a.data("defaultUrl"))&&""==i.val()?e.updateURLSegment(o):t(".update",e.parent()).show(),e.updateRelatedFields(o,r),e.updateBreadcrumbLabel(o)})),this._super()},onunmatch:function(){this._super()},updateRelatedFields:function(e,n){this.parents("form").find("input[name=MetaTitle], input[name=MenuTitle]").each(function(){var a=t(this);a.val()==n&&(a.val(e),a.updatedRelatedFields&&a.updatedRelatedFields())})},updateURLSegment:function(e){var n=t("input:text[name=URLSegment]",this.closest("form")),a=n.closest(".field.urlsegment"),i=t(".update",this.parent());a.update(e),i.is(":visible")&&i.hide()},updateBreadcrumbLabel:function(e){var n=(t(".cms-edit-form input[name=ID]").val(),t("span.cms-panel-link.crumb"));e&&""!=e&&n.text(e)},_addActions:function(){var e,n=this;e=t("<button />",{class:"update btn btn-outline-secondary form__field-update-url",text:s.default._t("CMS.UpdateURL"),type:"button",click:function(t){t.preventDefault(),n.updateURLSegment(n.val())}}),e.insertAfter(n),e.parent(".form__field-holder").addClass("input-group"),e.hide()}}),t(".cms-edit-form .parentTypeSelector").entwine({onmatch:function(){var t=this;this.find(":input[name=ParentType]").bind("click",function(e){t._toggleSelection(e)}),this.find(".TreeDropdownField").bind("change",function(e){t._changeParentId(e)}),this._changeParentId(),this._toggleSelection(),this._super()},onunmatch:function(){this._super()},_toggleSelection:function(e){var n=this.find(":input[name=ParentType]:checked").val(),a=this.find("#Form_EditForm_ParentID_Holder");"root"==n?this.find(":input[name=ParentID]").val(0):this.find(":input[name=ParentID]").val(this.find("#Form_EditForm_ParentType_subpage").data("parentIdValue")),"root"!=n?a.slideDown(400,function(){t(this).css("overflow","visible")}):a.slideUp()},_changeParentId:function(t){var e=this.find(":input[name=ParentID]").val();this.find("#Form_EditForm_ParentType_subpage").data("parentIdValue",e)}}),t(".cms-edit-form .btn-toolbar #Form_EditForm_action_print").entwine({onclick:function(e){var n=t(this[0].form).attr("action").replace(/\?.*$/,"")+"/printable/"+t(":input[name=ID]",this[0].form).val();return"http://"!=n.substr(0,7)&&(n=t("base").attr("href")+n),window.open(n,"printable"),!1}}),t(".cms-edit-form .btn-toolbar #Form_EditForm_action_doRollback, .cms-edit-form .btn-toolbar #Form_EditForm_action_rollback").entwine({onclick:function(t){var e=this.parents("form:first"),n=e.find(":input[name=Version]").val(),a="";return!this.props("disabled")&&(a=n?s.default.sprintf(s.default._t("CMS.RollbackToVersion","Do you really want to roll back to version #%s of this page?"),n):s.default._t("CMS.ConfirmRestoreFromLive","Are you sure you want to revert draft to when the page was last published?"),!!confirm(a)&&this._super(t))}}),t(".cms-edit-form .btn-toolbar #Form_EditForm_action_archive").entwine({onclick:function(t){var e=this.parents("form:first"),n="";return n=e.find("input[name=ArchiveWarningMessage]").val().replace(/\\n/g,"\n"),!!confirm(n)&&this._super(t)}}),t(".cms-edit-form .btn-toolbar #Form_EditForm_action_restore").entwine({onclick:function(t){var e=this.parents("form:first"),n=e.find(":input[name=Version]").val(),a="",i=this.data("toRoot");return a=s.default.sprintf(s.default._t(i?"CMS.RestoreToRoot":"CMS.Restore"),n),!!confirm(a)&&this._super(t)}}),t(".cms-edit-form .btn-toolbar #Form_EditForm_action_unpublish").entwine({onclick:function(t){var e=this.parents("form:first"),n=e.find(":input[name=Version]").val(),a="";return a=s.default.sprintf(s.default._t("CMS.Unpublish"),n),!!confirm(a)&&this._super(t)}}),t(".cms-edit-form.changed").entwine({onmatch:function(e){this.find("button[data-text-alternate]").each(function(){var e=t(this),n=e.find(".btn__title"),a=e.data("textAlternate");a&&(e.data("textStandard",n.text()),n.text(a));var i=e.data("btnAlternate");i&&(e.data("btnStandard",e.attr("class")),e.attr("class",i),e.removeClass("btn-outline-secondary").addClass("btn-primary"));var r=e.data("btnAlternateAdd");r&&e.addClass(r);var o=e.data("btnAlternateRemove");o&&e.removeClass(o)}),this._super(e)},onunmatch:function(e){this.find("button[data-text-alternate]").each(function(){var e=t(this),n=e.find(".btn__title"),a=e.data("textStandard");a&&n.text(a);var i=e.data("btnStandard");i&&(e.attr("class",i),e.addClass("btn-outline-secondary").removeClass("btn-primary"));var r=e.data("btnAlternateAdd");r&&e.removeClass(r);var o=e.data("btnAlternateRemove");o&&e.addClass(o)}),this._super(e)}}),t(".cms-edit-form .btn-toolbar button[name=action_publish]").entwine({onbuttonafterrefreshalternate:function(){this.data("showingAlternate")?(this.addClass("btn-primary"),this.removeClass("btn-secondary")):(this.removeClass("btn-primary"),this.addClass("btn-secondary"))}}),t(".cms-edit-form .btn-toolbar button[name=action_save]").entwine({onbuttonafterrefreshalternate:function(){this.data("showingAlternate")?(this.addClass("btn-primary"),this.removeClass("btn-secondary")):(this.removeClass("btn-primary"),this.addClass("btn-secondary"))}}),t('.cms-edit-form.CMSPageSettingsController input[name="ParentType"]:checked').entwine({onmatch:function(){this.redraw(),this._super()},onunmatch:function(){this._super()},redraw:function(){var e=t(".cms-edit-form.CMSPageSettingsController #Form_EditForm_ParentID_Holder");"Form_EditForm_ParentType_root"==t(this).attr("id")?e.slideUp():e.slideDown()},onclick:function(){this.redraw()}}),"Form_EditForm_ParentType_root"==t('.cms-edit-form.CMSPageSettingsController input[name="ParentType"]:checked').attr("id")&&t(".cms-edit-form.CMSPageSettingsController #Form_EditForm_ParentID_Holder").hide()})},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n(0),r=a(i),o=n(1),s=a(o);r.default.entwine("ss.tree",function(t){t(".cms-tree").entwine({fromDocument:{"oncontext_show.vakata":function(t){this.adjustContextClass()}},adjustContextClass:function(){var e=t("#vakata-contextmenu").find("ul ul");e.each(function(n){var a="1",i=t(e[n]).find("li").length;i>20?a="3":i>10&&(a="2"),t(e[n]).addClass("col-"+a).removeClass("right"),t(e[n]).find("li").on("mouseenter",function(e){t(this).parent("ul").removeClass("right")})})},getTreeConfig:function(){var e=this,n=this._super();return this.getHints(),n.plugins.push("contextmenu"),n.contextmenu={items:function(n){var a={edit:{label:n.hasClass("edit-disabled")?s.default._t("CMS.EditPage","Edit page",100,"Used in the context menu when right-clicking on a page node in the CMS tree"):s.default._t("CMS.ViewPage","View page",100,"Used in the context menu when right-clicking on a page node in the CMS tree"),action:function(n){t(".cms-container").entwine(".ss").loadPanel(s.default.sprintf(e.data("urlEditpage"),n.data("id")))}}};n.hasClass("nochildren")||(a.showaslist={label:s.default._t("CMS.ShowAsList"),action:function(n){t(".cms-container").entwine(".ss").loadPanel(e.data("urlListview")+"&ParentID="+n.data("id"),null,{tabState:{"pages-controller-cms-content":{tabSelector:".content-listview"}}})}});var i=(n.data("pagetype"),n.data("id")),r=n.find(">a .item").data("allowedchildren"),o={},d=!1;return t.each(r,function(n,a){d=!0,o["allowedchildren-"+n]={label:'<span class="jstree-pageicon"></span>'+a,_class:"class-"+n.replace(/[^a-zA-Z0-9\-_:.]+/g,"_"),action:function(a){t(".cms-container").entwine(".ss").loadPanel(t.path.addSearchParams(s.default.sprintf(e.data("urlAddpage"),i,n),e.data("extraParams")))}}}),d&&(a.addsubpage={label:s.default._t("CMS.AddSubPage","Add page under this page",100,"Used in the context menu when right-clicking on a page node in the CMS tree"),submenu:o}),n.hasClass("edit-disabled")||(a.duplicate={label:s.default._t("CMS.Duplicate"),submenu:[{label:s.default._t("CMS.ThisPageOnly"),action:function(n){t(".cms-container").entwine(".ss").loadPanel(t.path.addSearchParams(s.default.sprintf(e.data("urlDuplicate"),n.data("id")),e.data("extraParams")))}},{label:s.default._t("CMS.ThisPageAndSubpages"),action:function(n){t(".cms-container").entwine(".ss").loadPanel(t.path.addSearchParams(s.default.sprintf(e.data("urlDuplicatewithchildren"),n.data("id")),e.data("extraParams")))}}]}),a}},n}}),t(".cms-tree a.jstree-clicked").entwine({onmatch:function(){var t,e=this,n=e.parents(".cms-panel-content");(e.offset().top<0||e.offset().top>n.height()-e.height())&&(t=n.scrollTop()+e.offset().top+n.height()/2,n.animate({scrollTop:t},"slow"))}}),t(".cms-tree-filtered .clear-filter").entwine({onclick:function(){window.location=location.protocol+"//"+location.host+location.pathname}})})},function(t,e,n){"use strict";var a=n(0);(function(t){return t&&t.__esModule?t:{default:t}})(a).default.entwine("ss",function(t){t(".cms-content-header-info").entwine({"from .cms-panel":{ontoggle:function(t){var e=this.closest(".cms-content").find(t.target);0!==e.length&&this.parent()[e.hasClass("collapsed")?"addClass":"removeClass"]("collapsed")}}}),t(".cms-panel-deferred.cms-content-view").entwine({onadd:function(){if(!this.data("no-ajax")){var t=localStorage.getItem("ss.pages-view-type")||"treeview";this.closest(".cms-content-tools").length>0&&(t="treeview");var e=this.data("url-"+t);this.data("deferredNoCache","listview"===t),this.data("url",e+location.search),this._super()}}}),t(".cms .page-view-link").entwine({onclick:function(e){e.preventDefault();var n=t(this).data("view"),a=this.closest(".cms-content-view"),i=a.data("url-"+n),r=0!==a.closest(".cms-content-tools").length;if(localStorage.setItem("ss.pages-view-type",n),r&&"listview"===n)return void(window.location=a.data("url-listviewroot"));a.data("url",i+location.search),a.redraw()}}),t(".cms .cms-clear-filter").entwine({onclick:function(e){e.preventDefault(),window.location=t(this).prop("href")}}),t(".cms-content-toolbar").entwine({onmatch:function(){var e=this;this._super(),t.each(this.find(".cms-actions-buttons-row .tool-button"),function(){var n=t(this),a=n.data("toolid");n.hasClass("active"),void 0!==a&&(n.data("active",!1).removeClass("active"),t("#"+a).hide(),e.bindActionButtonEvents(n))})},onunmatch:function(){var e=this;this._super(),t.each(this.find(".cms-actions-buttons-row .tool-button"),function(){var n=t(this);e.unbindActionButtonEvents(n)})},bindActionButtonEvents:function(t){var e=this;t.on("click.cmsContentToolbar",function(n){e.showHideTool(t)})},unbindActionButtonEvents:function(t){t.off(".cmsContentToolbar")},showHideTool:function(e){var n=e.data("active"),a=e.data("toolid"),i=t("#"+a);t.each(this.find(".cms-actions-buttons-row .tool-button"),function(){var e=t(this),n=t("#"+e.data("toolid"));e.data("toolid")!==a&&(n.hide(),e.data("active",!1))}),e[n?"removeClass":"addClass"]("active"),i[n?"hide":"show"](),e.data("active",!n)}})})},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n(0),r=a(i),o=n(1),s=a(o);r.default.entwine("ss",function(t){t("#Form_VersionsForm").entwine({onmatch:function(){this._super()},onunmatch:function(){this._super()},onsubmit:function(e){e.preventDefault();var n=this.find(":input[name=ID]").val();if(!n)return!1;var a=null,i=null,r=null,o=this.find(":input[name=CompareMode]").is(":checked"),d=this.find("table input[type=checkbox]").filter(":checked");if(o){if(2!==d.length)return!1;i=d.eq(0).val(),r=d.eq(1).val(),a=s.default.sprintf(this.data("linkTmplCompare"),n,r,i)}else i=d.eq(0).val(),a=s.default.sprintf(this.data("linkTmplShow"),n,i);return t(".cms-container").loadPanel(a,"",{pjax:"CurrentForm"}),!0}}),t("#Form_VersionsForm input[name=ShowUnpublished]").entwine({onmatch:function(){this.toggle(),this._super()},onunmatch:function(){this._super()},onchange:function(){this.toggle()},toggle:function(){var e=t(this),n=e.parents("form").find("tr[data-published=false]");e.attr("checked")?n.removeClass("ui-helper-hidden").show():n.addClass("ui-helper-hidden").hide()._unselect()}}),t("#Form_VersionsForm tbody tr").entwine({onclick:function(){var t=this.parents("form").find(":input[name=CompareMode]").attr("checked"),e=this.siblings(".active");return t&&this.hasClass("active")?void this._unselect():t?e.length>1?void alert(s.default._t("CMS.ONLYSELECTTWO","You can only compare two versions at this time.")):(this._select(),void(1===e.length&&this.parents("form").submit())):(this._select(),e._unselect(),void this.parents("form").submit())},_unselect:function(){this.get(0).classList.remove("active"),this.find(":input[type=checkbox][checked]").attr("checked",!1)},_select:function(){this.addClass("active"),this.find(":input[type=checkbox]").attr("checked",!0)}})})},function(t,e,n){"use strict";var a=n(0);(function(t){return t&&t.__esModule?t:{default:t}})(a).default.entwine("ss",function(t){t("#Form_EditForm_RedirectionType input").entwine({onmatch:function(){t(this).attr("checked")&&this.toggle(),this._super()},onunmatch:function(){this._super()},onclick:function(){this.toggle()},toggle:function(){"Internal"==t(this).attr("value")?(t("#Form_EditForm_ExternalURL_Holder").hide(),t("#Form_EditForm_LinkToID_Holder").show()):(t("#Form_EditForm_ExternalURL_Holder").show(),t("#Form_EditForm_LinkToID_Holder").hide())}})})},function(t,e,n){"use strict";var a=n(0);(function(t){return t&&t.__esModule?t:{default:t}})(a).default.entwine("ss",function(t){t(".field.urlsegment:not(.readonly)").entwine({MaxPreviewLength:55,Ellipsis:"...",onmatch:function(){this.find(":text").length&&this.toggleEdit(!1),this.redraw(),this._super()},redraw:function(){var t=this.find(":text"),e=decodeURI(t.data("prefix")+t.val()),n=e;e.length>this.getMaxPreviewLength()&&(n=this.getEllipsis()+e.substr(e.length-this.getMaxPreviewLength(),e.length)),this.find(".URL-link").attr("href",encodeURI(e+t.data("suffix"))).text(n)},toggleEdit:function(t){var e=this.find(":text");this.find(".preview-holder")[t?"hide":"show"](),this.find(".edit-holder")[t?"show":"hide"](),t&&(e.data("origval",e.val()),e.focus())},update:function(){var t=this,e=this.find(":text"),n=e.data("origval"),a=arguments[0],i=a&&""!==a?a:e.val();n!=i?(this.addClass("loading"),this.suggest(i,function(n){e.val(decodeURIComponent(n.value)),t.toggleEdit(!1),t.removeClass("loading"),t.redraw()})):(this.toggleEdit(!1),this.redraw())},cancel:function(){var t=this.find(":text");t.val(t.data("origval")),this.toggleEdit(!1)},suggest:function(e,n){var a=this,i=a.find(":text"),r=t.path.parseUrl(a.closest("form").attr("action")),o=r.hrefNoSearch+"/field/"+i.attr("name")+"/suggest/?value="+encodeURIComponent(e);r.search&&(o+="&"+r.search.replace(/^\?/,"")),t.ajax({url:o,success:function(t){n.apply(this,arguments)},error:function(t,e){t.statusText=t.responseText},complete:function(){a.removeClass("loading")}})}}),t(".field.urlsegment .edit").entwine({onclick:function(t){t.preventDefault(),this.closest(".field").toggleEdit(!0)}}),t(".field.urlsegment .update").entwine({onclick:function(t){t.preventDefault(),this.closest(".field").update()}}),t(".field.urlsegment .cancel").entwine({onclick:function(t){t.preventDefault(),this.closest(".field").cancel()}})})},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),r=a(i),o=n(23),s=a(o);e.default=function(){r.default.component.register("AnchorSelectorField",s.default)}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),r=a(i),o=n(11),s=n(28),d=a(s);e.default=function(){r.default.reducer.register("cms",(0,o.combineReducers)({anchorSelector:d.default}))}},function(t,e,n){"use strict";n(13),n(14),n(16),n(15),n(17),n(18),n(19),n(12)},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){var n=(0,_.formValueSelector)(e.formid,x.default),a=e&&e.data&&e.data.targetFieldName||"PageID",i=Number(n(t,a)||0),r=[],o=i?t.cms.anchorSelector.pages.find(function(t){return t.id===i}):null;o&&o.loadingState===P.default.SUCCESS&&(r=o.anchors);var s=null;return s=o?o.loadingState:i?P.default.DIRTY:P.default.SUCCESS,{pageId:i,anchors:r,loadingState:s}}function d(t){return{actions:{anchorSelector:(0,g.bindActionCreators)(S,t)}}}Object.defineProperty(e,"__esModule",{value:!0}),e.ConnectedAnchorSelectorField=e.Component=void 0;var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),u=n(1),c=a(u),f=n(3),h=a(f),p=n(31),m=a(p),v=n(32),g=n(11),_=n(34),b=n(35),C=a(b),w=n(27),S=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(w),y=n(10),P=a(y),E=n(30),T=a(E),F=n(33),A=n(37),x=a(A),D=n(36),R=a(D),I=function(){return null},k=function(t){function e(t){i(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.handleChange=n.handleChange.bind(n),n.handleLoadingError=n.handleLoadingError.bind(n),n}return o(e,t),l(e,[{key:"componentDidMount",value:function(){this.ensurePagesLoaded()}},{key:"componentWillReceiveProps",value:function(t){this.props.pageId!==t.pageId&&this.ensurePagesLoaded(t)}},{key:"ensurePagesLoaded",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;if(e.loadingState!==P.default.DIRTY||!e.pageId)return Promise.resolve();e.actions.anchorSelector.beginUpdating(e.pageId);var n=e.data.endpoint.replace(/:id/,e.pageId);return(0,m.default)(n,{credentials:"same-origin"}).then(function(t){return t.json()}).then(function(t){return e.actions.anchorSelector.updated(e.pageId,t),t}).catch(function(n){e.actions.anchorSelector.updateFailed(e.pageId),t.handleLoadingError(n,e)})}},{key:"getDropdownOptions",value:function(){var t=this,e=this.props.anchors.map(function(t){return{value:t}});return this.props.value&&!this.props.anchors.find(function(e){return e===t.props.value})&&e.unshift({value:this.props.value}),e}},{key:"handleChange",value:function(t){"function"==typeof this.props.onChange&&this.props.onChange(t?t.value:"")}},{key:"handleLoadingError",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props;if(e.onLoadingError===I)throw t;return e.onLoadingError({errors:[{value:t.message,type:"error"}]})}},{key:"render",value:function(){var t={id:this.props.id},e=(0,R.default)("anchorselectorfield",this.props.extraClass),n=this.getDropdownOptions(),a=this.props.value||"",i=c.default._t("CMS.ANCHOR_SELECT_OR_TYPE","Select or enter anchor");return h.default.createElement(F.Creatable,{searchable:!0,options:n,className:e,name:this.props.name,inputProps:t,onChange:this.handleChange,onBlurResetsInput:!0,value:a,placeholder:i,labelKey:"value"})}}]),e}(C.default);k.propTypes={extraClass:h.default.PropTypes.string,id:h.default.PropTypes.string,name:h.default.PropTypes.string.isRequired,onChange:h.default.PropTypes.func,value:h.default.PropTypes.string,attributes:h.default.PropTypes.oneOfType([h.default.PropTypes.object,h.default.PropTypes.array]),pageId:h.default.PropTypes.number,anchors:h.default.PropTypes.array,loadingState:h.default.PropTypes.oneOf(Object.keys(P.default).map(function(t){return P.default[t]})),onLoadingError:h.default.PropTypes.func,data:h.default.PropTypes.shape({endpoint:h.default.PropTypes.string,targetFieldName:h.default.PropTypes.string})},k.defaultProps={value:"",extraClass:"",onLoadingError:I,attributes:{}};var L=(0,v.connect)(s,d)(k);e.Component=k,e.ConnectedAnchorSelectorField=L,e.default=(0,T.default)(L)},,,,function(t,e,n){"use strict";function a(t){return{type:s.default.ANCHORSELECTOR_UPDATING,payload:{pageId:t}}}function i(t,e){return{type:s.default.ANCHORSELECTOR_UPDATED,payload:{pageId:t,anchors:e}}}function r(t){return{type:s.default.ANCHORSELECTOR_UPDATE_FAILED,payload:{pageId:t}}}Object.defineProperty(e,"__esModule",{value:!0}),e.beginUpdating=a,e.updated=i,e.updateFailed=r;var o=n(9),s=function(t){return t&&t.__esModule?t:{default:t}}(o)},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=function(n,a){var r=e.payload.pageId;return(0,s.default)({pages:[].concat(i(t.pages.filter(function(t){return t.id!==r})),[{id:r,loadingState:n,anchors:a}]).sort(function(t,e){return t.id-e.id})})};switch(e.type){case l.default.ANCHORSELECTOR_UPDATING:return n(c.default.UPDATING,[]);case l.default.ANCHORSELECTOR_UPDATED:return n(c.default.SUCCESS,e.payload.anchors);case l.default.ANCHORSELECTOR_UPDATE_FAILED:return n(c.default.FAILED,[]);default:return t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(29),s=a(o),d=n(9),l=a(d),u=n(10),c=a(u),f=(0,s.default)({pages:[]})},function(t,e){t.exports=DeepFreezeStrict},function(t,e){t.exports=FieldHolder},function(t,e){t.exports=IsomorphicFetch},function(t,e){t.exports=ReactRedux},function(t,e){t.exports=ReactSelect},function(t,e){t.exports=ReduxForm},function(t,e){t.exports=SilverStripeComponent},function(t,e){t.exports=classnames},function(t,e){t.exports=getFormState}]);