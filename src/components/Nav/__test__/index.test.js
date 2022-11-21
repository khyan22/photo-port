import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
 it('renders', () => {
  render(<Nav />);
 });

 it('matches snapshot', () => {
  const { asFragment } = render(<Nav />);
  
  expect(asFragment()).toMatchSnapshot();
 });
});

describe('emoji visibility', () => {
  it('inserts into h2', () => {
    const { getByLabelText } = render(<Nav />);

    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
});

describe('links visibility', () => {
  it('text injected into links', () => {
    const { getByTestId } = render(<Nav />);

    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me')
  });
});