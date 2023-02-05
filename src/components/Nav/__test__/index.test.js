import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life'}
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
 it('renders', () => {
  render(<Nav
    categories={categories}
    setCurrentCategory={mockCurrentCategory}
    currentCategory={mockSetCurrentCategory}
    contactSelected={mockContactSelected}
    setContactSelected={mockSetContactSelected}
  />);
 });

 it('matches snapshot', () => {
  const { asFragment } = render(<Nav 
    categories={categories}
    setCurrentCategory={mockCurrentCategory}
    currentCategory={mockSetCurrentCategory}
    contactSelected={mockContactSelected}
    setContactSelected={mockSetContactSelected}
  />);
  
  expect(asFragment()).toMatchSnapshot();
 });
});

describe('emoji visibility', () => {
  it('inserts into h2', () => {
    const { getByLabelText } = render(<Nav 
      categories={categories}
      setCurrentCategory={mockCurrentCategory}
      currentCategory={mockSetCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);

    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
});

describe('links visibility', () => {
  it('text injected into links', () => {
    const { getByTestId } = render(<Nav 
      categories={categories}
      setCurrentCategory={mockCurrentCategory}
      currentCategory={mockSetCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />);

    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me')
  });
});