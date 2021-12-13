#!/usr/bin/env zx

import fs from "fs";

import path from "path";

const baseDir = process.cwd()
let dir = process.argv[3]

dir = path.resolve(baseDir, dir);
const files= fs.readdirSync(dir)

files.forEach((file) => {
    let filePath = path.resolve(dir, file);
    let stats = fs.statSync(filePath);
    const fileName = path.relative(baseDir, filePath)
    console.log(`${fileName} : ${stats.size}`);
})
