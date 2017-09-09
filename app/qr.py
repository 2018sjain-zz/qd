import pyqrcode

def qr_generate(code):
	qr = pyqrcode.create(code)
	qr.png('famous-joke.png', scale=5)