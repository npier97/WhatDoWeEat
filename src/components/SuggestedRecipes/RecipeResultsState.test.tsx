import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import RecipeResultsState from './RecipeResultsState';

describe('RecipeResultsState', () => {
  it('renders a stable loading region', () => {
    render(<RecipeResultsState isFetching isError={false} isEmpty={false} />);

    expect(screen.getByTestId('results-loading')).toHaveClass('min-h-95');
    expect(screen.getByRole('status')).toHaveTextContent('Loading...');
  });

  it('renders an accessible error without collapsing the results area', () => {
    render(<RecipeResultsState isFetching={false} isError isEmpty={false} />);

    expect(screen.getByRole('alert')).toHaveClass('min-h-95');
  });

  it('renders an explicit empty state', () => {
    render(<RecipeResultsState isFetching={false} isError={false} isEmpty />);

    expect(screen.getByRole('status')).toHaveTextContent(
      'No recipes were found.'
    );
  });
});
