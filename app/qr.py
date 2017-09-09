import pyqrcode

def qr_generate(code):
	qr = pyqrcode.create(code)
	qr.png('static/'+code+'_qr.png', scale=5)