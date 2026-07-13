import { existsSync, readdirSync, statSync } from "node:fs";
import { extname, join } from "node:path";

import { url } from "@utils/url";


const PDF_DIRECTORY = join(process.cwd(), "public", "pdfs");
const KAOYAN_DIRECTORY = join(process.cwd(), "public", "kaoyan");

export interface PdfItem {
    id: string;
    fileName: string;
    title: string;
    url: string;
    fileSize: number;
    updatedAt: string;
    fileType: "pdf" | "html";
}

function toReadableTitle(fileName: string, extension: string) {
    const escapedExt = extension.replace(/\./g, "\\.");
    const nameWithoutExtension = fileName.replace(new RegExp(`\\.${escapedExt}$`, "i"), "");

    return nameWithoutExtension
        .replace(/[._-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

export function formatPdfFileSize(size: number) {
    if (size < 1024) {
        return `${size} B`;
    }

    const units = ["KB", "MB", "GB", "TB"];
    let nextSize = size / 1024;
    let unitIndex = 0;

    while (nextSize >= 1024 && unitIndex < units.length - 1) {
        nextSize /= 1024;
        unitIndex += 1;
    }

    const digits = nextSize >= 100 ? 0 : nextSize >= 10 ? 1 : 2;
    return `${nextSize.toFixed(digits)} ${units[unitIndex]}`;
}

function scanDirectory(
    dir: string,
    extension: string,
    urlPrefix: string,
    fileType: "pdf" | "html",
): PdfItem[] {
    if (!existsSync(dir)) {
        return [];
    }

    return readdirSync(dir, { withFileTypes: true })
        .filter(
            (entry) =>
                entry.isFile() &&
                extname(entry.name).toLowerCase() === `.${extension}`,
        )
        .map((entry) => {
            const filePath = join(dir, entry.name);
            const stats = statSync(filePath);

            return {
                id: `${fileType}-${entry.name}`,
                fileName: entry.name,
                title: toReadableTitle(entry.name, extension),
                url: url(`/${urlPrefix}/${encodeURIComponent(entry.name)}`),
                fileSize: stats.size,
                updatedAt: stats.mtime.toISOString(),
                fileType,
            };
        });
}

export function getPdfItems(): PdfItem[] {
    const pdfs = scanDirectory(PDF_DIRECTORY, "pdf", "pdfs", "pdf");
    const htmls = scanDirectory(KAOYAN_DIRECTORY, "html", "kaoyan", "html");

    return [...pdfs, ...htmls].sort((left, right) => {
        return (
            new Date(right.updatedAt).getTime() -
            new Date(left.updatedAt).getTime()
        );
    });
}