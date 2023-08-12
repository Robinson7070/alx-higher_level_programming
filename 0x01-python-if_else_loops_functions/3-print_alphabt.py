#!/usr/bin/python3
for ascii_val in range(97, 123):
    if ascii_val == 113 or ascii_val == 101:
        continue
    print("{}".format(chr(ascii_val)), end="")
