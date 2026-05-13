import { type ReablocksTheme } from 'reablocks';

import { arrowTheme } from './components/ArrowTheme';
import { avatarGroupTheme } from './components/AvatarGroupTheme';
import { avatarTheme } from './components/AvatarTheme';
import { backdropTheme } from './components/BackdropTheme';
import { badgeTheme } from './components/BadgeTheme';
import { breadcrumbsTheme } from './components/BreadcrumbsTheme';
import { buttonTheme } from './components/ButtonTheme';
import { calendarRangeTheme } from './components/CalendarRangeTheme';
import { calendarTheme } from './components/CalendarTheme';
import { calloutTheme } from './components/CalloutTheme';
import { cardTheme } from './components/CardTheme';
import { checkboxTheme } from './components/CheckboxTheme';
import { chipTheme } from './components/ChipTheme';
import { collapseTheme } from './components/CollapseTheme';
import { commandPaletteTheme } from './components/CommandPaletteTheme';
import { contextMenuTheme } from './components/ContextMenuTheme';
import { dateFormatTheme } from './components/DateFormatTheme';
import { dateInputTheme } from './components/DateinputTheme';
import { dialogTheme } from './components/DialogTheme';
import { dividerTheme } from './components/DividerTheme';
import { dotsLoaderTheme } from './components/DotsLoaderTheme';
import { drawerTheme } from './components/DrawerTheme';
import { ellipsisTheme } from './components/EllipsisTheme';
import { fieldTheme } from './components/FieldTheme';
import { inputTheme } from './components/InputTheme';
import { jsonTreeTheme } from './components/JsonTreeTheme';
import { kbdTheme } from './components/KbdTheme';
import { listTheme } from './components/ListTheme';
import { menuTheme } from './components/MenuTheme';
import { navigationTheme } from './components/NavigationTheme';
import { notificationTheme } from './components/NotificationTheme';
import { pagerTheme } from './components/PagerTheme';
import { popoverTheme } from './components/PopoverTheme';
import { radioTheme } from './components/RadioTheme';
import { rangeTheme } from './components/RangeTheme';
import { redactTheme } from './components/RedactTheme';
import { selectTheme } from './components/SelectTheme';
import { skeletonTheme } from './components/SkeletonTheme';
import { sortTheme } from './components/SortTheme';
import { stepperTheme } from './components/StepperTheme';
import { tabsTheme } from './components/TabsTheme';
import { textareaTheme } from './components/TextAreaTheme';
import { toggleTheme } from './components/ToogleTheme';
import { tooltipTheme } from './components/TooltipTheme';
import { treeTheme } from './components/TreeTheme';
import { typographyTheme } from './components/TypographyTheme';

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
    typography: typographyTheme,
  },
};
