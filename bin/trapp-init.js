#!/usr/bin/env node
let path = require('path')
let fs = require('fs')
let chalk = require('chalk')
let templateMain = resolve('../packages/typescript-react-quickstart')
let count = 0, totalFile

// relative to templateMain
var copyFiles = [
  'build',
  'src',
  '.editorconfig',
  '.gitignore',
  'package.json',
  'tsconfig.json',
  'tslint.json',
  'webpack.config.js'
]

initApp(process.argv[2])

function initApp(appName) {
  let projectPath = relativeToProjectMain(appName)
  // 注意__dirname为当前所执行的js所在目录，也就是最终用户安装全局cli的目录
  // process.cwd()才是当前用户所在目录
  let pathStat = fs.existsSync(projectPath) && fs.statSync(projectPath)
  if (pathStat && pathStat.isDirectory()) return console.log(
    chalk.red(`Error: '${app}' directory has exisited!`))

  fs.mkdirSync(projectPath)
  // count file
  totalFile = getTotalFile(templateMain)
  for (let file of copyFiles) {
    copyFile(path.resolve(templateMain, file), projectPath)
  }
}

function resolve (filepath) {
  return path.resolve(__dirname, filepath)
}

function relativeToProjectMain (filepath) {
  return path.resolve(process.cwd(), filepath)
}

function logOnNewLine(content) {
  console.log()
  if (Object.prototype.toString.call(content) === '[object Array]') {
    for (let line of content) {
      console.log(line)
    }
  } else {
    console.log(content)
  }
  console.log()
}

function copyFile (file, dst) {
  let fileStat = fs.statSync(file)
  if (fileStat.isDirectory()) {
    let dirName = path.basename(file)
    let targetDir = path.resolve(dst, dirName)

    fs.mkdirSync(targetDir)

    let filesInDir = fs.readdirSync(file)
    for (let f of filesInDir) {
      if (f !== '.DS_Store') {
        copyFile(
          path.resolve(file, f),
          targetDir
        )
      }
    }
  } else {
    let filename = path.basename(file)
    let targetFile = path.resolve(dst, filename)
    fs.readFile(file, (err, data) => {
      if (err) throw err
      fs.writeFile(targetFile, data, () => {
        if (++count === totalFile) {
          logOnNewLine('Initialization done!')
        }
      })
    })
  }
}

function getTotalFile(dir) {
  let total = 0
  ;(function count (p) {
    let fileStat = fs.statSync(p)
    if (fileStat.isDirectory()) {
      let filesInDir = fs.readdirSync(p)
      for (let file of filesInDir) {
        if (file !== '.DS_Store' && file !== 'node_modules') {
          count(path.resolve(p, file))
        }
      }
    } else {
      total++
    }
  })(dir)
  return total
}
