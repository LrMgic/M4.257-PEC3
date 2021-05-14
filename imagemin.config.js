module.exports = {
    "gifsicle": { "optimizationLevel": 1, "interlaced": false, "colors": 30 },
    "mozjpeg": { "progressive": true, "quality": 50 },
    "pngquant": { "quality": [0.25, 0.5] },
    "svgo": {
        "plugins": [
            { "removeViewBox": false },
            { "cleanupIDs": true },
            { "minifyStyles": false }
        ]
    },
    "webp": { "quality": 10 }
}