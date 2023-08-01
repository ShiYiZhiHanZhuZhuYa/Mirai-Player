export function getImageThemeColor(path, canvasId, callback) {
    uni.getImageInfo({
        src: path,
        success: function (img) {
            // 创建一个 Canvas 对象
            const ctx = uni.createCanvasContext(canvasId);
            // 将图片绘制到 Canvas 上
            const imgWidth = 300;
            const imgHeight = 150;
            nextTick(() => {
                ctx.drawImage(img.path, 0, 0, imgWidth, imgHeight);
                ctx.save();
                ctx.draw(true, () => {
                    uni.canvasGetImageData({
                        canvasId: canvasId,
                        x: 0,
                        y: 0,
                        width: imgWidth,
                        height: imgHeight,
                        success(res) {
                            let data = res.data;
                            let arr = [];
                            let r = 1,
                                g = 1,
                                b = 1;
                            // 取所有像素的平均值
                            for (let row = 0; row < imgHeight; row++) {
                                for (let col = 0; col < imgWidth; col++) {
                                    if (row == 0) {
                                        r += data[imgWidth * row + col];
                                        g += data[imgWidth * row + col + 1];
                                        b += data[imgWidth * row + col + 2];
                                        arr.push([r, g, b]);
                                    } else {
                                        r += data[(imgWidth * row + col) * 4];
                                        g += data[(imgWidth * row + col) * 4 + 1];
                                        b += data[(imgWidth * row + col) * 4 + 2];
                                        arr.push([r, g, b]);
                                    }
                                }
                            }
                            // 求取平均值
                            r /= imgWidth * imgHeight;
                            g /= imgWidth * imgHeight;
                            b /= imgWidth * imgHeight;
                            // 将最终的值取整
                            r = Math.round(r);
                            g = Math.round(g);
                            b = Math.round(b);

                            if (!!callback) {
                                // 将 RGB 颜色值转换为十六进制颜色值
                                let hex = '#' + ((r << 16) | (g << 8) | b).toString(16);
                                hex = hex.padStart(6, '0'); // 如果不足6位，补齐前导零
                                callback(hex); // 返回图片主题色的十六进制颜色值
                                // callback(`${r},${g},${b}`);
                            }
                        },
                    });
                });
            })
        },
    });
}