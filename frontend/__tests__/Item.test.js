import ItemComponent from '../components/Item';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';


const fakeItem = {
    id: 'ABC123',
    title: 'Cool Item',
    price: 4000,
    description: 'This is really cool.',
    image: 'dog.jpg',
    largeImage: 'largedog.jpg'
};

describe('<Item/>', () => {
    it('renders and matches the snapshot', () => {
        const wrapper = shallow(<ItemComponent item={fakeItem} />);
        expect(wrapper).toMatchSnapshot();
    })
    // it('renders the image properly', () => {
    //     const wrapper = shallow(<ItemComponent item={fakeItem} />);
    //     const img = wrapper.find('img');
    //     expect(img.props().src).toBe(fakeItem.image);
    //     expect(img.props().alt).toBe(fakeItem.title);
    // });

    // it('renders the price and title properly', () => {
    //     const wrapper = shallow(<ItemComponent item={fakeItem} />);
    //     const priceTag = wrapper.find('PriceTag');
    //     expect(priceTag.children().text()).toBe('$50');
    //     expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
    // });

    // it('renders out the buttons properly', () => {
    //     const wrapper = shallow(<ItemComponent item={fakeItem} />);
    //     const buttonList = wrapper.find('.buttonList');
    //     expect(buttonList.children()).toHaveLength(3);
    //     //three ways to see if they are being rendered out 
    //     expect(buttonList.find('Link')).toHaveLength(1);
    //     expect(buttonList.find('AddToCart')).toBeTruthy();
    //     expect(buttonList.find('DeleteItem').exists()).toBe(true);
    // })
})