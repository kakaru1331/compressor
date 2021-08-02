const { minify } = require('terser')
const fs = require('fs')

const TARGET_DIRECTORY_PATH = './dist'

async function main() {
    if (!fs.existsSync(TARGET_DIRECTORY_PATH)) {
        fs.mkdirSync(TARGET_DIRECTORY_PATH, { recursive: true })
    }

    const targetCode = fs.readFileSync('./src/test-target.js', 'utf8')
    const result = await minify(targetCode)

    fs.writeFileSync(`${TARGET_DIRECTORY_PATH}/index.js`, result.code)
}

main()
