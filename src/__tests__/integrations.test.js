import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'
import Root from 'Root'
import App from '../components/App'

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]       
    })
});

afterEach(() => {
    moxios.uninstall();
});


it ('can fetch a list of comments and display', (done) => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )

    wrapped.find('.fetch-comments').simulate('click');

    /* setTimeout(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);

        done(); // it indicates we are done and nothing to execute inside this function
        wrapped.unmount();
    }, 100); */

    // why we are using wait() fn instead of setTimeout is that some times moxios request will take
    // more time than we give the value in timeout func. so to get the response we are using wait() fn.
    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);

        done(); // it indicates we are done and nothing to execute inside this function
        wrapped.unmount();
    });

})