export interface ITokenStorage {
  save: (data: string) => Promise<void>;
  get: () => Promise<string>;
  remove: () => Promise<void>;
}
