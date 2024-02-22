import './sidebar.scss';
import React from 'react';
import 'animate.css';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
            activePath: '/',
        };
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }) );
    };

    goToRoute = (path) => {
        this.setState({ activePath: path });
        console.log(`going to "${path}"`);
    };

    render() {
        const { isOpened, activePath } = this.state;
        const containerClassnames = classnames('sidebar', { opened: isOpened });

        return (
            <div className={ containerClassnames }>
                <div className="sidebar__wrapper">
                <div className="sidebar__circles animate__animated animate__fadeInDown">
                    <span />
                    <span />
                    <span />
                </div>
                <div className="sidebar__logo animate__animated animate__fadeInDown" style={{ animationDuration: '200ms' }}>
                    <img
                        src={ logo }
                        className="sidebar__logo-image"
                        alt="TensorFlow logo"
                    />
                    <span className={ classnames('sidebar__logo-name animate__animated', { animate__fadeInDown: isOpened, animate__fadeOutRight: !isOpened }) } style={{ animationDuration: '200ms' }}>TensorFlow</span>
                    <button
                        className="sidebar__logo-angle animate__animated animate__fadeInRight"
                        style={{ animationDelay: '1.6s' }}
                        onClick={ this.toggleSidebar }
                    >
                        <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' } />
                    </button>
                </div>

                <div className="sidebar__links">
                    {
                        routes.map((route, index) => (
                            <div
                                className={ classnames('sidebar__links-link animate__animated animate__fadeInDown animate__faster', { active: route.path === activePath }) }
                                key={ route.title }
                                style={{ animationDelay: `${index * 0.1}s`, animationDuration: '500ms' }}
                                onClick={ () => this.goToRoute(route.path) }
                            >
                                <FontAwesomeIcon icon={ route.icon } />
                                <span
                                    className={ classnames({ animate__animated: !isOpened, animate__fadeOutRight: !isOpened }) }
                                    style={{ animationDuration: '200ms' }}
                                >{ route.title }</span>
                            </div>
                        ))
                    }
                </div>
                </div>
                <div className="sidebar__wrapper">
                <div className="sidebar__links">
                    {
                        bottomRoutes.map((route, index) => (
                            <div
                                className={ classnames('sidebar__links-link animate__animated animate__fadeInUp animate__faster',
                                { active: route.path === activePath }) }
                                style={{ animationDelay: `${(bottomRoutes.length - index) * 0.1 + 1}s`, animationDuration: '300ms' }}
                                key={ route.title }
                                onClick={ () => this.goToRoute(route.path) }
                            >
                                <FontAwesomeIcon icon={ route.icon } />
                                <span
                                    className={ classnames({ animate__animated: !isOpened, animate__fadeOutRight: !isOpened }) }
                                    style={{ animationDuration: '200ms' }}>{ route.title }
                                </span>
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>
        );
    }
}
