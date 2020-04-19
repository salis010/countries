import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Question5 } from '../../src/components/questions/question5/question5'
import { Button } from '../../src/components/common' 
import { fieldStatus } from '../../src/constants'


Enzyme.configure({ adapter: new Adapter() })

describe('Test Question5', () => {

    
        const name = { value: '', status: fieldStatus.notVisited, isValid: false }
        const email = { value: '', status: fieldStatus.notVisited, isValid: false } 
        const password = { value: '', status: fieldStatus.notVisited, isValid: false }

    it('Form button must be disabled if the form is not valid', () => {
        const wrapper = shallow(<Question5
            name={name}
            setName={() => null} 
            email={email}
            setEmail={() => null} 
            password={password}
            setPassword={() => null}
		    isFormValid={false}
            registrationSuccessfulMessage=''
            setRegistrationSuccessfulMessage={() => null}
        />)
        expect(wrapper.find(Button).first().props().disabled).toBe(true)
    })

    it('Form button must be enabled if the form is valid', () => {
        const wrapper = shallow(<Question5
            name={name}
            setName={() => null} 
            email={email}
            setEmail={() => null} 
            password={password}
            setPassword={() => null}
		    isFormValid={true}
            registrationSuccessfulMessage=''
            setRegistrationSuccessfulMessage={() => null}
        />)
        expect(wrapper.find(Button).first().props().disabled).toBe(false)
    })


})
