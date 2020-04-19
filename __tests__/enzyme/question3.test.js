import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Question3 } from '../../src/components/questions/question3/question3'


Enzyme.configure({ adapter: new Adapter() })

describe('Test Question3', () => {

    const allCountries = ['Italy', 'Germany', 'France', 'Kenya']
    const filteredCountries = ['Italy', 'Germany', 'Kenya']

    it('must not list anything when supplied with no country', () => {
        const wrapper = shallow(<Question3
            country=''
            setCountry={() => null} 
            allCountries={allCountries}
            setAllCountries={() => null} 
            filteredCountries={[]}
            setFilteredCountries={() => null} 
        />)
        expect(wrapper.find('li').length).toEqual(0)
    })

    it('must list all the elements of the array of filtered countries', () => {
        const wrapper = shallow(<Question3
            country=''
            setCountry={() => null} 
            allCountries={allCountries}
            setAllCountries={() => null} 
            filteredCountries={filteredCountries}
            setFilteredCountries={() => null} 
        />)
        expect(wrapper.find('li').length).toEqual(filteredCountries.length)
    })

})
