import StartSpoofController from './start-spoof-controller';
import StartSpoofUseCase from './start-spoof-use-case';

const startSpoofUseCase = new StartSpoofUseCase();
const startSpoofController = new StartSpoofController(startSpoofUseCase);

export default startSpoofController;
