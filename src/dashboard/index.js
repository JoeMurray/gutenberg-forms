/* eslint-disable camelcase */
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
    BaseControl,
    Button,
    ExternalLink,
    PanelBody,
    PanelRow,
    Placeholder,
    Spinner,
    ToggleControl
} = wp.components;

const {
    render,
    Component,
    Fragment
} = wp.element;

/**
 * Internal dependencies
 */
import './style.scss';

class App extends Component {

    render() {
        return <h1>Hello World</h1>
    }
}

render(
    <App />,
    document.getElementById('cwp-gutenberg-forms-dashboard-root')
);
