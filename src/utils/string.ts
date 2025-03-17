export const isLetterOnly = (value: string) => /^[a-zA-Z\s]*$/.test(value);

export const preventSpecialCharacters = (
  event: React.KeyboardEvent<HTMLInputElement>
) => {
  if (!isLetterOnly(event.key) && event.key !== 'Backspace') {
    event.preventDefault();
  }
};

export const cleanText = (string: string) =>
  string.replace(/<\/?[^>]+(>|$)/g, '');
