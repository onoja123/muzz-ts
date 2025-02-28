import { Response } from 'express';
import { Validator } from 'validatorjs';
import { ValidationOptions } from '../types/interface/validator';

function validateRequest(options: ValidationOptions, method: string): Record<string, string[]> {
  let errors: Record<string, string[]> = {};

  const validator = new Validator(options.data, options.rules, options.messages);

  switch (method) {
    case 'json':
      if (validator.fails()) {
        errors = validator.errors.all();
      }
      break;
    case 'query':
      if (validator.fails()) {
        errors = validator.errors.all();
      }
      break;
    default:
      break;
  }

  return errors;
}

function returnValidationErrors(res: Response, errors: Record<string, string[]>): void {
  const err = { message: 'The given data was invalid', errors: errors };
  res.status(422).json(err);
}