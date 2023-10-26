export default class StartSpoofUseCase {
  async generateRandomMacAddress() {
    const characters = '0123456789ABCDEF';
    let macAddress = '';

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 2; j++) {
        macAddress += characters[Math.floor(Math.random() * 16)];
      }
      if (i < 5) {
        macAddress += ':';
      }
    }

    return macAddress;
  }

  async execute() {
    const interfaceName = 'Interface001';

    const newMacAddress = await this.generateRandomMacAddress();

    const changeMacCommand = `netsh interface set interface "${interfaceName}" newmac=${newMacAddress} admin=enabled`;

    return {
      data: {
        changeMacCommand,
      },
    };
  }
}
