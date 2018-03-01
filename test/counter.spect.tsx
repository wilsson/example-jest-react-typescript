import * as React from 'react';
import * as Enzyme from 'enzyme';
import { mount, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { Counter } from '../src/counter';

Enzyme.configure({ adapter: new Adapter() });
it('Counter test', () => {
    let component = mount(<Counter />);
    let button = component.find('button');
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    expect(component).toMatchSnapshot()
});