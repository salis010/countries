import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Question2 } from '../../src/components/questions/question2/question2'


Enzyme.configure({ adapter: new Adapter() })

describe('Test Question2', () => {

    const matchingCountries = ['Italy', 'Germany', 'France', 'Kenya']

    it('must not list anything when supplied with no country', () => {
        const wrapper = shallow(<Question2 
            country='' 
            matchingCountries={[]}
            setMatchingCountries={() => null}
        />)
        expect(wrapper.find('li').length).toEqual(0)
    })

    it('must list all the elements of the array it has been supplied with', () => {
        const wrapper = shallow(<Question2 
            country='' 
            matchingCountries={matchingCountries}
            setMatchingCountries={() => null}
        />)
        expect(wrapper.find('li').length).toEqual(matchingCountries.length)
    })

})
