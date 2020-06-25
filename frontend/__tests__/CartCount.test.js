import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import CartCount from '../components/CartCount';

describe('<CartCount />', () => {
    //always check to make sure it renders out first and then dive in
    it('renders', () => {
        shallow(<CartCount count={10} />)
    });

    it('matches the snapshot', () => {
        const wrapper = shallow(<CartCount count={10} />);
        expect(toJSON(wrapper)).toMatchSnapshot(); //new snapshot
    });

    it('updates via props', () => {
        const wrapper = shallow(<CartCount count={50} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
        wrapper.setProps({ count: 10 });
        expect(toJSON(wrapper)).toMatchSnapshot();


    })
});
