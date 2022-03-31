import { render, screen } from '@testing-library/react';
import App_57 from './App_57';

test('renders learn react link', () => {
  render(<App_57 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
