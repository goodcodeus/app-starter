import { type ReablocksTheme } from 'reablocks';

import { arrowTheme } from './components/arrowTheme';
import { avatarGroupTheme } from './components/avatarGroupTheme';
import { avatarTheme } from './components/avatarTheme';
import { backdropTheme } from './components/backdropTheme';
import { badgeTheme } from './components/badgeTheme';
import { breadcrumbsTheme } from './components/breadcrumbsTheme';
import { buttonTheme } from './components/buttonTheme';
import { calendarRangeTheme } from './components/calendarRangeTheme';
import { calendarTheme } from './components/calendarTheme';
import { calloutTheme } from './components/calloutTheme';
import { cardTheme } from './components/cardTheme';
import { checkboxTheme } from './components/checkboxTheme';
import { chipTheme } from './components/chipTheme';
import { collapseTheme } from './components/collapseTheme';
import { commandPaletteTheme } from './components/commandPaletteTheme';
import { contextMenuTheme } from './components/contextMenuTheme';
import { dateFormatTheme } from './components/dateFormatTheme';
import { dateInputTheme } from './components/dateinputTheme';
import { dialogTheme } from './components/dialogTheme';
import { dividerTheme } from './components/dividerTheme';
import { dotsLoaderTheme } from './components/dotsLoaderTheme';
import { drawerTheme } from './components/drawerTheme';
import { ellipsisTheme } from './components/ellipsisTheme';
import { fieldTheme } from './components/fieldTheme';
import { inputTheme } from './components/inputTheme';
import { jsonTreeTheme } from './components/jsonTreeTheme';
import { kbdTheme } from './components/kbdTheme';
import { listTheme } from './components/listTheme';
import { menuTheme } from './components/menuTheme';
import { navigationTheme } from './components/navigationTheme';
import { notificationTheme } from './components/notificationTheme';
import { pagerTheme } from './components/pagerTheme';
import { popoverTheme } from './components/popoverTheme';
import { radioTheme } from './components/radioTheme';
import { rangeTheme } from './components/rangeTheme';
import { redactTheme } from './components/redactTheme';
import { selectTheme } from './components/selectTheme';
import { skeletonTheme } from './components/skeletonTheme';
import { sortTheme } from './components/sortTheme';
import { stepperTheme } from './components/stepperTheme';
import { tabsTheme } from './components/tabsTheme';
import { textareaTheme } from './components/textAreaTheme';
import { toggleTheme } from './components/toogleTheme';
import { tooltipTheme } from './components/tooltipTheme';
import { treeTheme } from './components/treeTheme';
import { typographyTheme } from './components/typographyTheme';

export const theme: ReablocksTheme = {
  components: {
    avatar: avatarTheme,
    avatarGroup: avatarGroupTheme,
    arrow: arrowTheme,
    badge: badgeTheme,
    button: buttonTheme,
    contextMenu: contextMenuTheme,
    dateFormat: dateFormatTheme,
    collapse: collapseTheme,
    ellipsis: ellipsisTheme,
    calendarRange: calendarRangeTheme,
    calendar: calendarTheme,
    card: cardTheme,
    dateInput: dateInputTheme,
    divider: dividerTheme,
    dialog: dialogTheme,
    input: inputTheme,
    list: listTheme,
    menu: menuTheme,
    navigation: navigationTheme,
    commandPalette: commandPaletteTheme,
    sort: sortTheme,
    kbd: kbdTheme,
    tooltip: tooltipTheme,
    pager: pagerTheme,
    dotsLoader: dotsLoaderTheme,
    checkbox: checkboxTheme,
    drawer: drawerTheme,
    toggle: toggleTheme,
    chip: chipTheme,
    tabs: tabsTheme,
    radio: radioTheme,
    select: selectTheme,
    skeleton: skeletonTheme,
    backdrop: backdropTheme,
    textarea: textareaTheme,
    notification: notificationTheme,
    range: rangeTheme,
    redact: redactTheme,
    tree: treeTheme,
    popover: popoverTheme,
    jsonTree: jsonTreeTheme,
    breadcrumbs: breadcrumbsTheme,
    stepper: stepperTheme,
    callout: calloutTheme,
    field: fieldTheme,
    typography: typographyTheme
  }
};
