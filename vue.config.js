module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/larkspur_quest/'
        : '/',
    pages: {
        index: {
            entry: "src/main.js",
            title: "Larkspur Executive"
        }
    }
}