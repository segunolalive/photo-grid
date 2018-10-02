import TesRenderer from 'react-test-renderer'
import App from '../src/Image';

global.fetch = jest.fn(() => {})

describe('Image', () => {
  it('renders without crashing', () =>{
    const Image = TesRenderer.create(<Image />);
  })
})