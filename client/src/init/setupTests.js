import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

enzyme.configure({ adapter: new Adapter() })
global.fetch = require('jest-fetch-mock')
