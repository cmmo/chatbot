// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'gpt-4o-mini',
    label: 'GPT 4o mini',
    apiIdentifier: 'gpt-4o-mini',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'gpt-4o',
    label: 'GPT 4o',
    apiIdentifier: 'gpt-4o',
    description: 'For complex, multi-step tasks',
  },
  {
    id: 'o1-mini',
    label: 'o1 mini',
    apiIdentifier: 'o1-mini',
    description: 'For complex, reasoning tasks',
  },
  {
    id: 'o1-preview',
    label: 'o1 preview',
    apiIdentifier: 'o1-preview',
    description: 'For complex, reasoning tasks',
  },

] as const;

export const DEFAULT_MODEL_NAME: string = 'gpt-4o-mini';
