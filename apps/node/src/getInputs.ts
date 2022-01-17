import { existsSync, readdirSync } from 'fs';
import { readFile } from 'fs/promises';
import { join } from 'path';

interface InputFile {
  data: string;
  fileName: string;
}

function getInputFiles(inputPath: string): Promise<InputFile[]> {
  if (!existsSync(inputPath)) {
    const errorMessage = `Directory not found: ${inputPath}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
  const files = readdirSync(inputPath);

  const filePromises = files.map((fileName) => {
    const filePath = join(inputPath, fileName);

    return readFile(filePath, { encoding: 'utf-8' }).then((data) => {
      return { data, fileName };
    });
  });

  return Promise.all(filePromises);
}

export default getInputFiles;
