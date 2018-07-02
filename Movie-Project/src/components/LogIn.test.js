import sinon from 'sinon';
import LogIn from './LogIn';

  
describe('--- Component: LogIn ---', ()=>{
    
    it('renders without exploding', () =>{
        const wrapper = shallow(<LogIn />)
        expect(wrapper.length).toEqual(1)
    });

   

      it('should  change the state user', () => {
   
        const wrapper = shallow(<LogIn />);
        wrapper
        .find('#inputUser')
        .simulate('change', {target: {name: 'inputUser', value: 'blah@gmail.com'}});
        
       expect(wrapper.state('user')).toEqual('blah@gmail.com');
       });

       it('should change the state password', () => {
   
        const wrapper = shallow(<LogIn />);
        wrapper
        .find('#inputPassword')
        .simulate('change', {target: {name: 'inputPassword', value: 'cats'}});
        
        expect(wrapper.state('password')).toEqual('cats');
       })
    
})
