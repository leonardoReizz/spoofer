import fs from 'fs';
import crypto from 'crypto';
import scripts from './scripts';
import { PATH } from '../../../main';

export default class CreateFilesUseCase {
  async execute() {
    const encryptionKey = 'SuaChaveDeCriptografia';
    const iv = crypto.randomBytes(16); // Vetor de inicialização

    const cipher = crypto.createCipheriv(
      'aes-256-cbc',
      Buffer.from(encryptionKey),
      iv,
    );

    let encryptedBatScript = cipher.update(scripts.macAddress, 'utf8', 'hex');
    encryptedBatScript += cipher.final('hex');

    const encryptedBatFilePath = `${PATH}/scripts`;

    fs.writeFileSync(encryptedBatFilePath, encryptedBatScript, 'utf8');
  }
}
