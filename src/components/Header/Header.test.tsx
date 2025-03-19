import { render, screen, within } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Header from './index';

describe('Navigation bar', () => {
  beforeEach(() => {
    render(<Header />);
  });
  it('should render the navbar', () => {
    const navbar = screen.getByTestId('navbar');

    expect(navbar).toBeInTheDocument();
  });
  describe('links', () => {
    it('should render Home and Recipes in the menu items', async () => {
      const navbar = screen.getByTestId('navbar');
      const homeLink = within(navbar).getByText('Home');
      expect(homeLink).toBeInTheDocument();
    });
    it('should have the correct href attributes', () => {
      const navbar = screen.getByTestId('navbar');
      const homeLink = within(navbar).getByText('Home');
      expect(homeLink).toHaveAttribute('href', '/');
    });
  });
});
