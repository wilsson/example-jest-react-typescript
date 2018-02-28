// Link.react.test.js
// https://facebook.github.io/jest/docs/en/tutorial-react.html

import * as React from 'react';
import { Link } from '../src/link';
import * as renderer from 'react-test-renderer';

it('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Link page="http://www.github.com">Facebook</Link>,
    );

    let tree  = component.toJSON();
    expect(tree.props.href).toEqual('http://www.github.com');
    expect(tree.type).toEqual('a');
    expect(component).toMatchSnapshot();

    tree.props.onMouseEnter();  
    expect(component).toMatchSnapshot();

    tree.props.onMouseLeave();
    expect(component).toMatchSnapshot();
});