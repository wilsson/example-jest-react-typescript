import * as React from 'react';
import { shallow, mount } from 'enzyme';
import * as Enzyme from 'enzyme';
import { Counter } from '../src/counter';
import * as renderer from 'react-test-renderer';
import enzymeSerializer from 'enzyme-to-json/serializer';
import toJson from 'enzyme-to-json';

expect.addSnapshotSerializer(enzymeSerializer);
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
it('Counter test', () => {
    let component = mount(<Counter />);
    let button = component.find('button');
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    expect(component.state().count).toBe(3);
});