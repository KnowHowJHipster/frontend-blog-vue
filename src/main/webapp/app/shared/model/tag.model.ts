export interface ITag {
  id?: number;
  name?: string;
}

export class Tag implements ITag {
  constructor(
    public id?: number,
    public name?: string,
  ) {}
}
