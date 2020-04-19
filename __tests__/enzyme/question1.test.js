import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Question1 } from '../../src/components/questions/question1/question1'


Enzyme.configure({ adapter: new Adapter() })

describe('Test Question1', () => {

    const countryData = {
        name: 'Sweden',
        capital: 'Sotckholm',
        population: 10500000,
    }

    it('must not list anything when supplied with no country data', () => {
        const wrapper = shallow(<Question1 
            country='' 
            countryData={{}}
            setCountry={() => null}
            setCountryData={() => null}
        />)
        expect(wrapper.find('li').length).toEqual(0)
    })

    it('must show a list with the number of items matching the number of properties of the object it is supplied with', () => {
        const wrapper = shallow(<Question1 
            country='' 
            countryData={countryData}
            setCountry={() => null}
            setCountryData={() => null}
        />)
        expect(wrapper.find('li').length).toEqual(Object.keys(countryData).length)
    })

})
