import React from 'react'
import { mount } from 'enzyme'
import CommentList from '../CommentList'
import Root from 'Root'

let wrapped;

beforeEach(()  => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    }
    wrapped = mount(
        <Root  initialState={initialState}>
            <CommentList />
        </Root>
    )
})


it ('creates li elemnt for every comment', () => {
    expect(wrapped.find('li').length).toEqual(2)
})

it ('comments visible on screen', () => {
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
})