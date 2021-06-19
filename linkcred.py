import email_main
import datetime
currentDT = datetime.datetime.now()
lst = [
    [email_main.zoom_link, str(currentDT.strftime("%H:%M"))],
    ["link2", "2:31"],
    ["link3", "3:01"]
]


# print(str(currentDT))
# print(currentDT.strftime("%Y-%m-%d %H:%M:%S"))
# print(currentDT.strftime("%H:%M"))