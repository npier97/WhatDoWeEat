import { describe, expect, it } from 'vitest';
import tagReducer, { addTag, clearTags, removeTag } from './tagSlice';

describe('tagSlice', () => {
  it('adds a trimmed tag', () => {
    const state = tagReducer(undefined, addTag('  Apple  '));

    expect(state.tags).toEqual(['Apple']);
  });

  it('does not add empty or case-insensitive duplicate tags', () => {
    const stateWithTag = tagReducer(undefined, addTag('Apple'));
    const stateWithDuplicate = tagReducer(stateWithTag, addTag('apple'));
    const stateWithEmptyTag = tagReducer(stateWithDuplicate, addTag('   '));

    expect(stateWithEmptyTag.tags).toEqual(['Apple']);
  });

  it('removes a tag', () => {
    const initialState = { tags: ['Apple', 'Banana'] };

    const state = tagReducer(initialState, removeTag('Apple'));

    expect(state.tags).toEqual(['Banana']);
  });

  it('clears all tags', () => {
    const initialState = { tags: ['Apple', 'Banana'] };

    const state = tagReducer(initialState, clearTags());

    expect(state.tags).toEqual([]);
  });
});
