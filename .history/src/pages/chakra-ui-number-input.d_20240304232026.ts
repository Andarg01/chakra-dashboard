// chakra-ui-number-input.d.ts
import { ReactNode, ChangeEvent } from 'react';

interface NumberInputProps {
  value?: number;
  onChange?: (value: number | string) => void;
  // Add any other props you expect in NumberInput
}

interface NumberInputFieldProps {
  placeholder?: string;
  value?: number | string;
  onChange?: (value: number | string) => void;
  // Add any other props you expect in NumberInputField
}

declare module 'chakra-ui-number-input' {
  export const NumberInput: React.FC<NumberInputProps>;
  export const NumberInputField: React.FC<NumberInputFieldProps>;
}
