//<![CDATA[
var require = {
    baseUrl : 'https://lms.ecueg.com/lib/requirejs.php?file=%2F1761515232%2F',
    // We only support AMD modules with an explicit define() statement.
    enforceDefine: true,
    skipDataMain: true,
    waitSeconds : 0,

    paths: {
        jquery: 'https://lms.ecueg.com/lib/javascript.php?file=%2F1761515232%2Flib/jquery/jquery-3.7.1.min.js',
        jqueryui: 'https://lms.ecueg.com/lib/javascript.php?file=%2F1761515232%2Flib/jquery/ui-1.14.1/jquery-ui.min.js',
        jqueryprivate: 'https://lms.ecueg.com/lib/javascript.php?file=%2F1761515232%2Flib/requirejs/jquery-private.js'
    },

    // Custom jquery config map.
    map: {
      // '*' means all modules will get 'jqueryprivate'
      // for their 'jquery' dependency.
      '*': { jquery: 'jqueryprivate' },

      // 'jquery-private' wants the real jQuery module
      // though. If this line was not here, there would
      // be an unresolvable cyclic dependency.
      jqueryprivate: { jquery: 'jquery' }
    }
};

//]]>
</script>
<script src="https://lms.ecueg.com/lib/javascript.php?rev=1761515232&amp;jsfile=%2Flib%2Frequirejs%2Frequire.min.js"></script>
<script>
//<![CDATA[
M.util.js_pending("core/first");
require(['core/first'], function() {
require(['core/prefetch'])
;
M.util.js_pending('filter_mathjaxloader/loader'); require(['filter_mathjaxloader/loader'], function(amd) {amd.configure({"mathjaxurl":"https:\/\/cdn.jsdelivr.net\/npm\/mathjax@3.2.2\/es5\/tex-mml-chtml.js","mathjaxconfig":"","lang":"en"}); M.util.js_complete('filter_mathjaxloader/loader');});;
require(["media_videojs/loader"], function(loader) {
    loader.setUp('en');
});;

require(
[
    'jquery',
    'block_recentlyaccesseditems/main',
],
function(
    $,
    Main
) {
    var root = $('#block-recentlyaccesseditems-690df2be01e7c690df2be01e7e1');

    Main.init(root);
});
;

require(
[
    'jquery',
    'block_timeline/main',
],
function(
    $,
    Main
) {
    var root = $('#block-timeline-690df2be05589690df2be01e7e2-1');
    Main.init(root);
});
;

require(['jquery', 'core_calendar/month_navigation_drag_drop'], function($, DragDrop) {
    var root = $('#month-navigation-690df2be1401d690df2be01e7e3-1');
    DragDrop.init(root);
});
;

require([
    'jquery',
    'core_calendar/month_view_drag_drop'
], function(
    $,
    DragDrop
) {
    var root = $('#month-detailed-690df2be1401d690df2be01e7e3-1');
    DragDrop.init(root);
});
;

require(['jquery', 'core_calendar/calendar', 'core_calendar/popover'], function($, Calendar, calendarPopover) {
    const isCalendarBlock = true;
    Calendar.init($("#calendar-month-690df2be1401d690df2be01e7e3-1"), isCalendarBlock);
});
;
M.util.js_pending('core_calendar/popover'); require(['core_calendar/popover'], function(amd) {M.util.js_complete('core_calendar/popover');});;

M.util.js_pending('theme_boost/drawers:load');
require(['theme_boost/drawers'], function() {
    M.util.js_complete('theme_boost/drawers:load');
});
;

    require(['core/moremenu'], function(moremenu) {
        moremenu(document.querySelector('#moremenu-690df2be04188-navbar-nav'));
    });
;

require(['jquery', 'message_popup/notification_popover_controller'], function($, Controller) {
    var container = $('#nav-notification-popover-container');
    var controller = new Controller(container);
    controller.registerEventListeners();
    controller.registerListNavigationEventListeners();
});
;

require(
[
    'jquery',
    'core_message/message_popover'
],
function(
    $,
    Popover
) {
    var toggle = $('#message-drawer-toggle-690df2be183a2690df2be01e7e6');
    Popover.init(toggle);
});
;

    require(['core/usermenu'], function(UserMenu) {
        UserMenu.init();
    });
;

require(['core/edit_switch'], function(editSwitch) {
    editSwitch.init('690df2be186ab690df2be01e7e7-editingswitch');
});
;

    require(['core/usermenu'], function(UserMenu) {
        UserMenu.init();
    });
;

require(['jquery', 'core_message/message_drawer'], function($, MessageDrawer) {
    var root = $('#message-drawer-690df2be190bc690df2be01e7e9');
    MessageDrawer.init(root, '690df2be190bc690df2be01e7e9', false);
});
;

const headerElement = document.querySelector("#page-header .d-flex.align-items-center > .mb-3.mt-3");
if (headerElement && headerElement.textContent.length > 2) {
    var greeting = headerElement.textContent.trim();
    greeting = greeting.slice(0, -2);
    headerElement.textContent = greeting;
    headerElement.classList.add("visible");
}
M.util.js_pending('theme_boost/loader');
require(['theme_boost/loader', 'theme_boost/drawer'], function(Loader, Drawer) {
    Drawer.init();
    M.util.js_complete('theme_boost/loader');
});
;
M.util.js_pending('core/notification'); require(['core/notification'], function(amd) {amd.init(1372, []); M.util.js_complete('core/notification');});;
M.util.js_pending('core/log'); require(['core/log'], function(amd) {amd.setConfig({"level":"trace"}); M.util.js_complete('core/log');});;
M.util.js_pending('core/page_global'); require(['core/page_global'], function(amd) {amd.init(); M.util.js_complete('core/page_global');});;
M.util.js_pending('core/utility'); require(['core/utility'], function(amd) {M.util.js_complete('core/utility');});;
M.util.js_pending('core/storage_validation'); require(['core/storage_validation'], function(amd) {amd.init(1762519462); M.util.js_complete('core/storage_validation');});
    M.util.js_complete("core/first");
});
//]]>
</script>
<script src="https://lms.ecueg.com/theme/javascript.php?theme=lambda2&amp;rev=1761515232&amp;type=footer"></script>
<script>
//<![CDATA[
M.str = {"moodle":{"lastmodified":"Last modified","name":"Name","error":"Error","info":"Information","yes":"Yes","no":"No","cancel":"Cancel","confirm":"Confirm","areyousure":"Are you sure?","closebuttontitle":"Close","unknownerror":"Unknown error","file":"File","url":"URL","collapseall":"Collapse all","expandall":"Expand all"},"repository":{"type":"Type","size":"Size","invalidjson":"Invalid JSON string","nofilesattached":"No files attached","filepicker":"File picker","logout":"Logout","nofilesavailable":"No files available","norepositoriesavailable":"Sorry, none of your current repositories can return files in the required format.","fileexistsdialogheader":"File exists","fileexistsdialog_editor":"A file with that name has already been attached to the text you are editing.","fileexistsdialog_filemanager":"A file with that name has already been attached","renameto":"Rename to \"{$a}\"","referencesexist":"There are {$a} links to this file","select":"Select"},"admin":{"confirmdeletecomments":"Are you sure you want to delete the selected comment(s)?","confirmation":"Confirmation"},"debug":{"debuginfo":"Debug info","line":"Line","stacktrace":"Stack trace"},"langconfig":{"labelsep":": "}};
//]]>
</script>
<script>
//<![CDATA[
(function() {M.util.help_popups.setup(Y);
 M.util.js_pending('random690df2be01e7e10'); Y.on('domready', function() { M.util.js_complete("init");  M.util.js_complete('random690df2be01e7e10'); });
})();
//]]>
</script>

                </div>
            </div>
        </div>
    </div>
</footer></div>
</div>

<div
    id="drawer-690df2be190bc690df2be01e7e9"
    class=" drawer bg-white hidden"
    aria-hidden="true"
    data-region="right-hand-drawer"
    role="dialog"
    tabindex="-1"
            aria-modal="true"
        aria-labelledby="message-drawer-header-690df2be190bc690df2be01e7e9"

>
            <div id="message-drawer-690df2be190bc690df2be01e7e9" class="message-app" data-region="message-drawer" role="region" tabindex="0">
            <h2 class="visually-hidden" id="message-drawer-header-690df2be190bc690df2be01e7e9">Messaging</h2>
            <div class="closewidget text-end pe-2">
                <a class="text-dark btn-link" data-action="closedrawer" href="#"
                   title="Close" aria-label="Close"
                >
                    <i class="icon fa fa-xmark fa-fw " aria-hidden="true" ></i>
                </a>
            </div>
            <div class="header-container position-relative" data-region="header-container">
                <div class="hidden border-bottom p-1 px-sm-2" aria-hidden="true" data-region="view-contacts">
                    <div class="d-flex align-items-center">
                        <div class="align-self-stretch">
                            <a class="h-100 d-flex align-items-center me-2" href="#" data-route-back role="button">
                                <div class="icon-back-in-drawer">
                                    <span class="dir-rtl-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true" ></i></span>
                                    <span class="dir-ltr-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true" ></i></span>
                                </div>
                                <div class="icon-back-in-app">
                                    <span class="dir-rtl-hide"><i class="icon fa fa-xmark fa-fw " aria-hidden="true" ></i></span>
                                </div>                            </a>
                        </div>
                        <div>
                            Contacts
                        </div>
                        <div class="ms-auto">
                            <a href="#" data-route="view-search" role="button" aria-label="Search">
                                <i class="icon fa fa-magnifying-glass fa-fw " aria-hidden="true" ></i>
                            </a>
                        </div>
                    </div>
                </div>                
                <div
                    class="hidden bg-white position-relative border-bottom p-1 px-sm-2"
                    aria-hidden="true"
                    data-region="view-conversation"
                >
                    <div class="hidden" data-region="header-content"></div>
                    <div class="hidden" data-region="header-edit-mode">
                        
                        <div class="d-flex p-2 align-items-center">
                            Messages selected:
                            <span class="ms-1" data-region="message-selected-court">1</span>
                            <button type="button" class="ms-auto btn-close" aria-label="Cancel message selection"
                                data-action="cancel-edit-mode">
                            </button>
                        </div>
                    </div>
                    <div data-region="header-placeholder">
                        <div class="d-flex">
                            <div
                                class="ms-2 rounded-circle bg-pulse-grey align-self-center"
                                style="height: 38px; width: 38px"
                            >
                            </div>
                            <div class="ms-2 " style="flex: 1">
                                <div
                                    class="mt-1 bg-pulse-grey w-75"
                                    style="height: 16px;"
                                >
                                </div>
                            </div>
                            <div
                                class="ms-2 bg-pulse-grey align-self-center"
                                style="height: 16px; width: 20px"
                            >
                            </div>
                        </div>
                    </div>
                    <div
                        class="hidden position-absolute z-index-1"
                        data-region="confirm-dialogue-container"
                        style="top: 0; bottom: -1px; right: 0; left: 0; background: rgba(0,0,0,0.3);"
                    ></div>
                </div>                <div class="border-bottom p-1 px-sm-2" aria-hidden="false"  data-region="view-overview">
                    <div class="d-flex align-items-center">
                        <div class="input-group simplesearc
