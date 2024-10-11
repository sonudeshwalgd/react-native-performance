import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'enabled' | 'disabled';
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = 'enabled',
  containerStyle,
  textStyle,
}) => {
  const buttonStyles =
    variant === 'enabled' ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-400';

  const textStyles = variant === 'enabled' ? 'text-white' : 'text-gray-600';

  return (
    <TouchableOpacity
      className={`p-4 rounded-[10px] bg-Light_Blue_1 justify-center items-center ${buttonStyles} ${containerStyle}`}
      onPress={variant === 'enabled' ? onPress : undefined}
      disabled={variant === 'disabled'}>
      <Text className={`text-base font-semibold ${textStyles} ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
