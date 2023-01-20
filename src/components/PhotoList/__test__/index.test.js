import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '..';

const currentCategory = {
  name: 'landscape'
};

afterEach(cleanup);

describe('PhotoList component', () => {
  it('renders', () => {
    render(<PhotoList category={currentCategory.name}/>)
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<PhotoList category={currentCategory.name} />);
    expect(asFragment()).toMatchSnapshot();
  });
});