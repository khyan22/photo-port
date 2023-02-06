import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: 'Lorem',
  index: 1
};

const mockToggleModal = jest.fn();

afterEach(cleanup)


describe('Modal component', () => {
  it('renders', () => {
    <Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Click event', () => {
  it('calls onClose handler', () => {
    const { getByText } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
    fireEvent.click(getByText('Close'));
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});