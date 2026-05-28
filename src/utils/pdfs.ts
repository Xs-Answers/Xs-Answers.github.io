import { existsSync, readdirSync, statSync } from "node:fs";
import { extname, join } from "node:path";

import { url } from "@utils/url";


const PDF_DIRECTORY = join(process.cwd(), "public", "pdfs");
export interface PdfItem {
    id: string;
    fileName: string;
    title: string;
    url: string;
    fileSize: number;
    updatedAt: string;
}

function toReadableTitle(fileName: string) {
    const nameWithoutExtension = fileName.replace(/\.pdf$/i, "");

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

export function getPdfItems(): PdfItem[] {
    if (!existsSync(PDF_DIRECTORY)) {
        return [];
    }

    return readdirSync(PDF_DIRECTORY, { withFileTypes: true })
        .filter((entry) => entry.isFile() && extname(entry.name).toLowerCase() === ".pdf")
        .map((entry) => {
            const filePath = join(PDF_DIRECTORY, entry.name);
            const stats = statSync(filePath);

            return {
                id: entry.name,
                fileName: entry.name,
                title: toReadableTitle(entry.name),
                url: url(`/pdfs/${encodeURIComponent(entry.name)}`),
                fileSize: stats.size,
                updatedAt: stats.mtime.toISOString(),
            };
        })
        .sort((left, right) => {
            return new Date(right.updatedAt).getTime() - new Date(left.updatedAt).getTime();
        });
}