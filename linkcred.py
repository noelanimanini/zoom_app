import email_main
import datetime
currentDT = datetime.datetime.now()

# email_main.time
# lst = [
#     [email_main.zoom_link, str(currentDT.strftime("%H:%M"))],
#     ["link2", "2:31"],
#     ["link3", "3:01"]
# ]

lst = [
    [email_main.zoom_link, email_main.time],
    ["link2", "2:31"],
    ["link3", "3:01"]
]


# print(str(currentDT))
# print(currentDT.strftime("%Y-%m-%d %H:%M:%S"))
# print(currentDT.strftime("%H:%M"))