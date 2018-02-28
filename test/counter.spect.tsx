import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import { Counter } from '../src/counter';

Enzyme.configure({ adapter: new Adapter() });
it('Counter test', () => {
    let component = mount(<Counter />);
    let button = component.find('button');
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    expect(toJson(component)).toMatchSnapshot();
});