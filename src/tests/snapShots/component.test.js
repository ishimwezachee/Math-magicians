import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from '../../components/quote';
import Home from '../../components/home';
import Button from '../../components/button';

describe('UI experience', () => {
  test('Click', () => {
    const onEvent = jest.fn();
    render(<Button value="AC" className="btn" onEvent={onEvent} />);
    fireEvent.click(screen.getByText(/AC/));
    const value = fireEvent.click(screen.getByText(/AC/));
    expect(value).toBeTruthy();
  });
});

it('render quotes pages', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('render Home pages', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('render Button', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});
