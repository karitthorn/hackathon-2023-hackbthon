# zjcHIjsFp7uqskI1bne3pFTHMgyFU4HlbzOqegserZ2 Token
#ชื่อวิน , เนื่อเรื่อง , description

import requests

url = 'https://notify-api.line.me/api/notify'
token = 'zjcHIjsFp7uqskI1bne3pFTHMgyFU4HlbzOqegserZ2'
headers = {'content-type':'application/x-www-form-urlencoded','Authorization':'Bearer '+token}
def send_vin(text):
    msg = ''
    text = text.split(',')
    if text[0] != '':
        msg = msg +  'ชื่อ:' + text[0] + ' '  
    if text[1] != '':
        msg = msg +  'เรื่อง:' + text[1] + ' '
    if text[2] != '':
        msg = msg +  'คำอธิบาย:' + text[2] + ' '
    if text[3] != '':
        msg = msg + 'เลขทะเบียน:' + text[3]

    r = requests.post(url, headers=headers, data = {'message':msg})
    print (r.text)
