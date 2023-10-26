export default function spoofMacAddress() {
  // Caminho para o arquivo temporário .bat
  const tempBatFilePath = 'C:\\caminho\\temp\\tempfile.bat';

  // Crie o arquivo temporário .bat com o código
  fs.writeFileSync(tempBatFilePath, batCode, 'utf8');

  // Execute o arquivo temporário .bat
  const batProcess = exec(tempBatFilePath, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o arquivo .bat: ${error.message}`);
      return;
    }
    console.log(`Saída do arquivo .bat:\n${stdout}`);
  });

  // Manipule eventos (opcional)
  batProcess.on('exit', (code) => {
    console.log(`O arquivo .bat foi executado com código de saída ${code}`);

    // Após a execução, você pode excluir o arquivo temporário
    fs.unlinkSync(tempBatFilePath);
  });
}
