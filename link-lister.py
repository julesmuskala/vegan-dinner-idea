file = open("recipe-list.txt", "a")
fileCheck  = open("recipe-list.txt", "r")

if fileCheck.read()[len(fileCheck.read()) - 1] != ",":
  file.write(",") 

fileCheck.close()

while(True):
  inputVal = input("Enter link: ")
  if inputVal == "stop" or inputVal == "":
    break
  file.write(inputVal + ",")

file.close()