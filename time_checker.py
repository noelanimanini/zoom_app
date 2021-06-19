import datetime
import time

def guess_date(string):
    for fmt in ["%Y/%m/%d", "%d-%m-%Y", "%Y%m%d"]:
        try:
            return datetime.datetime.strptime(string, fmt).date()
        except ValueError:
            continue
    raise ValueError(string)

samples = "2017/5/23", "22-04-2015", "20150504"

for sample in samples:
    print(guess_date(sample))


def isTimeFormat(input):
    try:
        time.strptime(input, '%H:%M')
        return True
    except ValueError:
        return False

print(isTimeFormat('12:01'))