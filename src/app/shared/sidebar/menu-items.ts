import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '', title: 'Personal', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
    {
        path: '/starter', title: 'Starter Page', icon: 'mdi mdi-gauge', class: '', label: '', labelClass: '', extralink: false, submenu: []
    },
    {
        path: '', title: 'UI Components', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },{
        path: '', title: 'Component', icon: 'mdi mdi-bullseye', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/component/accordion', title: 'Accordion', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/alert', title: 'Alert', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/carousel', title: 'Carousel', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/dropdown', title: 'Dropdown', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/modal', title: 'Modal', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/pagination', title: 'Pagination', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/poptool', title: 'Popover & Tooltip', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/progressbar', title: 'Progressbar', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/rating', title: 'Ratings', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/tabs', title: 'Tabs', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/timepicker', title: 'Timepicker', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/buttons', title: 'Button', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/cards', title: 'Card', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    }     
];

