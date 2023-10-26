import CreateFilesController from './create-files-controller';
import CreateFilesUseCase from './create-files-use-case';

const createFilesUseCase = new CreateFilesUseCase();
const createFilesController = new CreateFilesController(createFilesUseCase);

export default createFilesController;
