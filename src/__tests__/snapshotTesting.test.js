import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import Home from '../components/Home';
import Quote from '../components/Quote';

describe('Snapshot testing components', () => {
  it('Calculator snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Home snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Quote snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
