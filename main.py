import qrcode

img = qrcode.make('https://github.com/1-1anz0')
img.save('qr.png')