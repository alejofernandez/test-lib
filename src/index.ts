import { textSync } from 'figlet';

export class Helpers {
  public sayHello(logger: Console): void {
    logger.log(textSync('hello world!!'));
  }
}
