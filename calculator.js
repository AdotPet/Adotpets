import Logger from 'Logger',
import Calculator from 'Calculator'

const calculator = new Calculator()
const logger = new Logger()

logger.logMessage(`2 + 2 is ${calculator.add(2,3)}`)