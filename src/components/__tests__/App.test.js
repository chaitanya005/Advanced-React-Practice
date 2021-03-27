import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import CommentBox from '../CommentBox'
import CommentList from '../CommentList'
//shallow is a func that only renders the instance of our app component and none of it's children

var wrapped

beforeEach(() => {
    wrapped = shallow(<App />)
})

it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
})

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
})