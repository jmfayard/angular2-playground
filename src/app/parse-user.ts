export class ParseUser {

  private attrs = {'username': 'patrick', 'email': 'patrick@gmail.com', 'objectId': 'XdSE42'};

  get(key: string): any {
    return this.attrs[key];
  }

  toJSON() : string {
    return JSON.stringify(this.attrs);
  }
}
