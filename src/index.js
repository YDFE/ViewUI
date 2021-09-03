import Affix from './components/affix';
import Alert from './components/alert';
import Anchor from './components/anchor';
import AnchorLink from './components/anchor-link';
import AutoComplete from './components/auto-complete';
import Avatar from './components/avatar';
import BackTop from './components/back-top';
import Badge from './components/badge';
import Breadcrumb from './components/breadcrumb';
import Button from './components/button';
import Card from './components/card';
import Carousel from './components/carousel';
import Cascader from './components/cascader';
import Cell from './components/cell';
import Checkbox from './components/checkbox';
import Circle from './components/circle';
import Collapse from './components/collapse';
import ColorPicker from './components/color-picker';
import Content from './components/content';
import DatePicker from './components/date-picker';
import Divider from './components/divider';
import Drawer from './components/drawer';
import Dropdown from './components/dropdown';
import Footer from './components/footer';
import Form from './components/form';
import Header from './components/header';
import Icon from './components/icon';
import Input from './components/input';
import InputNumber from './components/input-number';
import Scroll from './components/scroll';
import Split from './components/split';
import Layout from './components/layout';
import List from './components/list';
import LoadingBar from './components/loading-bar';
import Menu from './components/menu';
import Message from './components/message';
import Modal from './components/modal';
import Notice from './components/notice';
import Page from './components/page';
import Poptip from './components/poptip';
import Progress from './components/progress';
import Radio from './components/radio';
import Rate from './components/rate';
import Sider from './components/sider';
import Slider from './components/slider';
import Spin from './components/spin';
import Steps from './components/steps';
import Switch from './components/switch';
import Table from './components/table';
import Tabs from './components/tabs';
import Tag from './components/tag';
import Time from './components/time';
import Timeline from './components/timeline';
import TimePicker from './components/time-picker';
import Tooltip from './components/tooltip';
import Transfer from './components/transfer';
import Tree from './components/tree';
import Upload from './components/upload';
import {Row, Col} from './components/grid';
import {Select, Option, OptionGroup} from './components/select';
import locale from './locale/index';

const components = {
    I4Affix: Affix,
    I4Alert: Alert,
    I4Anchor: Anchor,
    I4AnchorLink: AnchorLink,
    I4AutoComplete: AutoComplete,
    I4Avatar: Avatar,
    I4BackTop: BackTop,
    I4Badge: Badge,
    I4Breadcrumb: Breadcrumb,
    I4BreadcrumbItem: Breadcrumb.Item,
    I4Button: Button,
    I4ButtonGroup: Button.Group,
    I4Card: Card,
    I4Carousel: Carousel,
    I4CarouselItem: Carousel.Item,
    I4Cascader: Cascader,
    I4Cell: Cell,
    I4CellGroup: Cell.Group,
    I4Checkbox: Checkbox,
    I4CheckboxGroup: Checkbox.Group,
    I4Col: Col,
    I4Collapse: Collapse,
    I4ColorPicker: ColorPicker,
    I4Content: Content,
    I4DatePicker: DatePicker,
    I4Divider: Divider,
    I4Drawer: Drawer,
    I4Dropdown: Dropdown,
    I4DropdownItem: Dropdown.Item,
    I4DropdownMenu: Dropdown.Menu,
    I4Footer: Footer,
    I4Form: Form,
    I4FormItem: Form.Item,
    I4Header: Header,
    I4Icon: Icon,
    I4Input: Input,
    I4InputNumber: InputNumber,
    I4Scroll: Scroll,
    I4Sider: Sider,
    I4Split: Split,
    I4Submenu: Menu.Sub,
    I4Layout: Layout,
    I4List: List,
    I4ListItem: List.Item,
    I4ListItemMeta: List.Item.Meta,
    I4LoadingBar: LoadingBar,
    I4Menu: Menu,
    I4MenuGroup: Menu.Group,
    I4MenuItem: Menu.Item,
    I4Message: Message,
    I4Modal: Modal,
    I4Notice: Notice,
    I4Option: Option,
    I4OptionGroup: OptionGroup,
    I4Page: Page,
    I4Panel: Collapse.Panel,
    I4Poptip: Poptip,
    I4Progress: Progress,
    I4Radio: Radio,
    I4RadioGroup: Radio.Group,
    I4Rate: Rate,
    I4Row: Row,
    I4Select: Select,
    I4Slider: Slider,
    I4Spin: Spin,
    I4Step: Steps.Step,
    I4Steps: Steps,
    I4Table: Table,
    I4Tabs: Tabs,
    I4TabPane: Tabs.Pane,
    I4Tag: Tag,
    I4Time: Time,
    I4Timeline: Timeline,
    I4TimelineItem: Timeline.Item,
    I4TimePicker: TimePicker,
    I4Tooltip: Tooltip,
    I4Transfer: Transfer,
    I4Tree: Tree,
    I4Upload: Upload
};

const iview = {
    ...components
};

const install = function(Vue, opts = {}) {
    if (install.installed) return;
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    Object.keys(iview).forEach(key => {
        Vue.component(key, iview[key]);
    });

    Vue.prototype.$IVIEW4 = {
        size: opts.size || '',
        transfer: 'transfer' in opts ? opts.transfer : '',
        capture: 'capture' in opts ? opts.capture : true,
        select: {
            arrow: opts.select ? opts.select.arrow ? opts.select.arrow : '' : '',
            customArrow: opts.select ? opts.select.customArrow ? opts.select.customArrow : '' : '',
            arrowSize: opts.select ? opts.select.arrowSize ? opts.select.arrowSize : '' : ''
        },
        cell: {
            arrow: opts.cell ? opts.cell.arrow ? opts.cell.arrow : '' : '',
            customArrow: opts.cell ? opts.cell.customArrow ? opts.cell.customArrow : '' : '',
            arrowSize: opts.cell ? opts.cell.arrowSize ? opts.cell.arrowSize : '' : ''
        },
        menu: {
            arrow: opts.menu ? opts.menu.arrow ? opts.menu.arrow : '' : '',
            customArrow: opts.menu ? opts.menu.customArrow ? opts.menu.customArrow : '' : '',
            arrowSize: opts.menu ? opts.menu.arrowSize ? opts.menu.arrowSize : '' : ''
        },
        tree: {
            arrow: opts.tree ? opts.tree.arrow ? opts.tree.arrow : '' : '',
            customArrow: opts.tree ? opts.tree.customArrow ? opts.tree.customArrow : '' : '',
            arrowSize: opts.tree ? opts.tree.arrowSize ? opts.tree.arrowSize : '' : ''
        },
        cascader: {
            arrow: opts.cascader ? opts.cascader.arrow ? opts.cascader.arrow : '' : '',
            customArrow: opts.cascader ? opts.cascader.customArrow ? opts.cascader.customArrow : '' : '',
            arrowSize: opts.cascader ? opts.cascader.arrowSize ? opts.cascader.arrowSize : '' : '',
            itemArrow: opts.cascader ? opts.cascader.itemArrow ? opts.cascader.itemArrow : '' : '',
            customItemArrow: opts.cascader ? opts.cascader.customItemArrow ? opts.cascader.customItemArrow : '' : '',
            itemArrowSize: opts.cascader ? opts.cascader.itemArrowSize ? opts.cascader.itemArrowSize : '' : ''
        },
        colorPicker: {
            arrow: opts.colorPicker ? opts.colorPicker.arrow ? opts.colorPicker.arrow : '' : '',
            customArrow: opts.colorPicker ? opts.colorPicker.customArrow ? opts.colorPicker.customArrow : '' : '',
            arrowSize: opts.colorPicker ? opts.colorPicker.arrowSize ? opts.colorPicker.arrowSize : '' : ''
        },
        datePicker: {
            icon: opts.datePicker ? opts.datePicker.icon ? opts.datePicker.icon : '' : '',
            customIcon: opts.datePicker ? opts.datePicker.customIcon ? opts.datePicker.customIcon : '' : '',
            iconSize: opts.datePicker ? opts.datePicker.iconSize ? opts.datePicker.iconSize : '' : ''
        },
        timePicker: {
            icon: opts.timePicker ? opts.timePicker.icon ? opts.timePicker.icon : '' : '',
            customIcon: opts.timePicker ? opts.timePicker.customIcon ? opts.timePicker.customIcon : '' : '',
            iconSize: opts.timePicker ? opts.timePicker.iconSize ? opts.timePicker.iconSize : '' : ''
        },
        tabs: {
            closeIcon: opts.tabs ? opts.tabs.closeIcon ? opts.tabs.closeIcon : '' : '',
            customCloseIcon: opts.tabs ? opts.tabs.customCloseIcon ? opts.tabs.customCloseIcon : '' : '',
            closeIconSize: opts.tabs ? opts.tabs.closeIconSize ? opts.tabs.closeIconSize : '' : ''
        },
        modal: {
            maskClosable: opts.modal ? 'maskClosable' in opts.modal ? opts.modal.maskClosable : '' : ''
        }
    };

    Vue.prototype.$I4Loading = LoadingBar;
    Vue.prototype.$I4Message = Message;
    Vue.prototype.$I4Modal = Modal;
    Vue.prototype.$I4Notice = Notice;
    Vue.prototype.$I4Spin = Spin;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    locale: locale.use,
    i18n: locale.i18n,
    install,
    Circle,
    Switch,
    ...components
};

API.lang = (code) => {
    const langObject = window['iview/locale'].default;
    if (code === langObject.i.locale) locale.use(langObject);
    else console.log(`The ${code} language pack is not loaded.`); // eslint-disable-line no-console
};

module.exports.default = module.exports = API;   // eslint-disable-line no-undef
