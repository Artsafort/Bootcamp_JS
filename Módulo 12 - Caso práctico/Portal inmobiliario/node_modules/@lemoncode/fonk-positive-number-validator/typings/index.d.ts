import { FieldValidationFunctionSync } from '@lemoncode/fonk';

export namespace positiveNumber {
  export interface CustomValidatorArgs {
    strictTypes?: boolean;
    allowZero?: boolean;
  }
  export const validator: FieldValidationFunctionSync<CustomValidatorArgs>;
  export function setErrorMessage(message: string | string[]): void;
  export function setCustomArgs(customArgs: Partial<CustomValidatorArgs>): void;
}
