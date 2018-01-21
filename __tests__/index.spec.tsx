// Link.react.test.js
// https://facebook.github.io/jest/docs/en/tutorial-react.html

import * as React from 'react';
import { Link } from '../src/link';
import * as renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Link page="http://www.github.com">Facebook</Link>,
    );

    let tree  = component.toJSON();
    expect(tree.props.href).toEqual('http://www.github.com');
    expect(tree.type).toEqual('a');
    expect(tree).toMatchSnapshot();

    tree.props.onMouseEnter();  
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});