import React from 'react';
import {Quote} from '../Quote';
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Quote', () => {
  it('renders', () => {
    render(<Quote quote={{content: "Good content", author: "Juntao Qiu"}} />);
    expect(screen.getByText("Good content")).toBeInTheDocument();
  })
})