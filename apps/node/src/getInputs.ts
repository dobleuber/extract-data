import { existsSync, readdirSync } from 'fs';
import { readFile } from 'fs/promises';
import { join } from 'path';

function getInputFiles(inputPath: string): Promise<string[]> {
  if (!existsSync(inputPath)) {
    const errorMessage = `Directory not found: ${inputPath}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
  const files = readdirSync(inputPath);

  const filePromises = files.map(fileName => {
    const filePath = join(inputPath, fileName);

    return readFile(filePath, { encoding: 'utf-8' }).then((data) => {
      return data;
    });
  });

  return Promise.all(filePromises);
}

export default getInputFiles;
