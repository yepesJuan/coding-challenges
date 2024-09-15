import { mkdir, readdir, rename, copyFile } from "node:fs/promises";
import { join, basename } from "path";

class FileMover {
  sourceDir: string;
  targetDir: string;

  constructor(sourceDir: string, targetDir: string) {
    this.sourceDir = sourceDir;
    this.targetDir = targetDir;
  }

  async ensureTargetDirExists() {
    try {
      await mkdir(this.targetDir, { recursive: true });
    } catch (err) {
      console.error("Error creating target directory:", err);
    }
  }

  async moveFilesStartingWith(prefix: string) {
    try {
      const files = await readdir(this.sourceDir);

      for (const file of files) {
        if (file.startsWith(prefix)) {
          const oldPath = join(this.sourceDir, file);
          const newPath = join(this.targetDir, file);
          await rename(oldPath, newPath);
          console.log(`Moved file: ${file}`);
        }
      }
    } catch (err) {
      console.error("Error moving files:", err);
    }
  }

  async generateTestFiles() {
    try {
      const files = await readdir(this.sourceDir);

      for (const file of files) {
        if (file.endsWith(".ts")) {
          const srcFilePath = join(this.sourceDir, file);
          const targetFilePath = join(
            this.targetDir,
            file.replace(/\.ts$/, ".test.ts")
          );

          await copyFile(srcFilePath, targetFilePath);
          console.log(
            `Copied and renamed: ${file} -> ${basename(targetFilePath)}`
          );
        }
      }
    } catch (err) {
      console.error("Error generating test files:", err);
    }
  }
}

// Usage
const fileMover = new FileMover(
  join(__dirname, "./easy"),
  join(__dirname, "../tests")
);

// Ensure target directory exists and then generate test files
(async () => {
  await fileMover.ensureTargetDirExists();

  // Move files starting with "META"
  await fileMover.moveFilesStartingWith("META");

  // Generate test files
  await fileMover.generateTestFiles();
})();
