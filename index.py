from amazoncaptcha import AmazonCaptcha
import argparse

ap = argparse.ArgumentParser()
ap.add_argument("-P", "--pic", required=True,
	help="path to input image link url")
args = vars(ap.parse_args())
# https://images-na.ssl-images-amazon.com/captcha/bfhuzdtn/Captcha_vhkppjaupq.jpg

captcha = AmazonCaptcha.fromlink(args["pic"])
solution = captcha.solve()

print(solution)
