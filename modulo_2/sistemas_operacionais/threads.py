import threading
import time

def main():
    t1 = threading.Thread(target=thread_1)
    t2 = threading.Thread(target=thread_2)
    t3 = threading.Thread(target=thread_3)

    t1.start()
    t2.start()
    t3.start()


def thread_1():
    i = 1

    while i <= 10:
        print(f"Thread 1 - {i}")
        i += 1
        time.sleep(2)
    

def thread_2():
    i = 1

    while i <= 10:
        print(f"Thread 2 - {i}")
        i += 1
        time.sleep(2)


def thread_3():
    i = 1

    while i <= 10:
        print(f"Thread 3 - {i}")
        i += 1
        time.sleep(2)


main()