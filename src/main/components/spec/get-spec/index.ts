import GetSpecController from './get-spec-controller';
import GetSpecUseCase from './get-spec-use-case';

const getSpecUseCase = new GetSpecUseCase();
const getSpecController = new GetSpecController(getSpecUseCase);

export default getSpecController;
