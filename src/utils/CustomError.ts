// 共通エラークラス
class BaseError extends Error {
    constructor(e?: string) {
      super(e);
      this.name = new.target.name;
      // 下記の行はTypeScriptの出力ターゲットがES2015より古い場合(ES3, ES5)のみ必要
      Object.setPrototypeOf(this, new.target.prototype);
    }
}

export class CustomError extends BaseError {
    public message: string;
    public status: number;
  
    constructor(status=500, message='Internal Server Error') {
      super(message);
      this.status = status;
    }
  }