import { render, screen, fireEvent } from '@testing-library/react';
import FileUpload from './FileUpload';

test('renders file upload input', () => {
  render(<FileUpload />);
  const fileInput = screen.getByText(/upload your file/i);
  expect(fileInput).toBeInTheDocument();
});

test('handles file selection', () => {
  render(<FileUpload />);
  const fileInput = screen.getByText(/upload your file/i);
  const file = new File(['test content'], 'test.txt', { type: 'text/plain' });

  fireEvent.change(fileInput, { target: { files: [file] } });

  expect(fileInput.files[0]).toEqual(file);
  expect(fileInput.files.length).toBe(1);
});
