import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm component', () => {
  it('renders', () => {
    render(<ContactForm/>);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm/>);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('text renders', () => {
  it('renders h1 text', () => {
    const { getByTestId } = render(<ContactForm/>);

    expect(getByTestId('h1tag')).toHaveTextContent('Contact Me');
  });

  it('renders btn text', () => {
    const { getByTestId } = render(<ContactForm/>);

    expect(getByTestId('submit')).toHaveTextContent('Submit');
  });
});
