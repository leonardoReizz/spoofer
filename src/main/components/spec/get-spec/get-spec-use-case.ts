import os from 'os';

export default class GetSpecUseCase {
  async execute() {
    let macAddress = '';
    const networkInterfaces = os.networkInterfaces();

    const primaryInterface =
      networkInterfaces[Object.keys(networkInterfaces)[0]];

    if (primaryInterface && primaryInterface.length > 0) {
      macAddress = primaryInterface[0].mac;
    }

    return {
      data: {
        macAddress,
      },
    };
  }
}
