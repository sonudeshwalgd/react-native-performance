// components/CustomButton.test.tsx

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CustomButton from './Button';

describe('CustomButton', () => {
  test('renders with correct title', () => {
    const {getByText} = render(
      <CustomButton title="Click Me" onPress={() => {}} />,
    );
    expect(getByText('Click Me')).toBeTruthy();
  });

  test('handles press events', () => {
    const mockOnPress = jest.fn();
    const {getByText} = render(
      <CustomButton title="Press Me" onPress={mockOnPress} />,
    );
    fireEvent.press(getByText('Press Me'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  test('applies styles for enabled variant', () => {
    const {getByText} = render(
      <CustomButton title="Enabled" onPress={() => {}} variant="enabled" />,
    );
    const button = getByText('Enabled').parent;
    // Assuming you use a test ID or specific styling, check for presence of specific classes
    // For simplicity, checking text color here.
    expect(button.props.style).toContainEqual(
      expect.objectContaining({backgroundColor: '#007bff'}),
    );
  });

  test('applies styles for disabled variant', () => {
    const {getByText} = render(
      <CustomButton title="Disabled" onPress={() => {}} variant="disabled" />,
    );
    const button = getByText('Disabled').parent;
    // Check if the button has the correct background color for disabled state
    expect(button.props.style).toContainEqual(
      expect.objectContaining({backgroundColor: '#c0c0c0'}),
    );
  });

  test('disables button press when disabled', () => {
    const mockOnPress = jest.fn();
    const {getByText} = render(
      <CustomButton
        title="Disabled"
        onPress={mockOnPress}
        variant="disabled"
      />,
    );
    fireEvent.press(getByText('Disabled'));
    expect(mockOnPress).not.toHaveBeenCalled();
  });
});
